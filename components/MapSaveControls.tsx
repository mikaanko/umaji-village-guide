"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useRef, useState } from "react";
import { hasAnalyticsConsent } from "@/lib/analytics-consent";

const mapPath = "/images/map/umaji-village-guide-map.png";
const mapFilename = "umaji-village-guide-map.png";

type SaveStatus =
  | "idle"
  | "preparing"
  | "ready"
  | "sharing"
  | "complete"
  | "canceled"
  | "error";

type SaveOperation = {
  completeTracked: boolean;
  errorTracked: boolean;
  fallbackTracked: boolean;
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
};

function trackMapEvent(eventName: string, parameters: Record<string, string | boolean>) {
  const analyticsWindow = window as AnalyticsWindow;

  if (!hasAnalyticsConsent() || !Array.isArray(analyticsWindow.dataLayer)) {
    return;
  }

  sendGAEvent("event", eventName, parameters);
}

function getErrorName(error: unknown) {
  return error instanceof DOMException || error instanceof Error
    ? error.name
    : "UnknownError";
}

function isAbortError(error: unknown) {
  return getErrorName(error) === "AbortError";
}

function isActivationError(error: unknown) {
  return getErrorName(error) === "NotAllowedError";
}

export function MapSaveControls() {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const preparedFileRef = useRef<File | null>(null);
  const operationRef = useRef<SaveOperation | null>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  const automaticDownloadRef = useRef(false);

  const isBusy = status === "preparing" || status === "sharing";

  const startOperation = (preferredMethod: "web_share" | "download") => {
    const operation: SaveOperation = {
      completeTracked: false,
      errorTracked: false,
      fallbackTracked: false,
    };

    operationRef.current = operation;
    trackMapEvent("map_save_click", {
      preferred_method: preferredMethod,
      stage: "initial",
    });

    return operation;
  };

  const trackFallback = (reason: string, operation = operationRef.current) => {
    if (operation?.fallbackTracked) {
      return;
    }

    if (operation) {
      operation.fallbackTracked = true;
    }

    trackMapEvent("map_save_fallback", {
      method: "download",
      reason,
    });
  };

  const trackError = (stage: string, error: unknown) => {
    const operation = operationRef.current;

    if (operation?.errorTracked) {
      return;
    }

    if (operation) {
      operation.errorTracked = true;
    }

    trackMapEvent("map_save_error", {
      error_name: getErrorName(error),
      stage,
    });
  };

  const triggerDownloadFallback = (reason: string) => {
    trackFallback(reason);
    setStatus("idle");
    setStatusMessage(
      "The PNG download has started. / PNG画像のダウンロードを開始しました。",
    );
    preparedFileRef.current = null;
    operationRef.current = null;
    automaticDownloadRef.current = true;
    downloadLinkRef.current?.click();
  };

  const sharePreparedFile = (file: File, isRetry: boolean) => {
    const shareData: ShareData = {
      files: [file],
      title: "Umaji Village Illustrated Guide Map",
    };

    setStatus("sharing");
    setStatusMessage(
      "Choose a destination in the share sheet. / 共有画面で保存先を選んでください。",
    );

    navigator.share(shareData).then(
      () => {
        const operation = operationRef.current;

        if (operation && !operation.completeTracked) {
          operation.completeTracked = true;
          trackMapEvent("map_share_complete", {
            method: "web_share",
            photo_save_confirmed: false,
          });
        }

        setStatus("complete");
        setStatusMessage(
          "Sharing completed. This does not confirm that the image was saved to Photos. / 共有処理が完了しました。写真アプリへの保存完了を示すものではありません。",
        );
        preparedFileRef.current = null;
        operationRef.current = null;
      },
      (error: unknown) => {
        if (isAbortError(error)) {
          setStatus("canceled");
          setStatusMessage(
            "Sharing was canceled. / 共有はキャンセルされました。",
          );
          operationRef.current = null;
          return;
        }

        if (!isRetry && isActivationError(error)) {
          setStatus("ready");
          setStatusMessage(
            "The map is ready. Tap “Save Map” again to open sharing. / 地図の準備ができました。もう一度「地図を保存」を押してください。",
          );
          return;
        }

        trackError("share", error);
        setStatus("error");
        setStatusMessage(
          "Sharing could not be opened. Please download the PNG or open the full-size map. / 共有画面を開けませんでした。PNGのダウンロードまたは地図の拡大表示をご利用ください。",
        );
      },
    );
  };

  const prepareAndShare = async () => {
    setStatus("preparing");
    setStatusMessage(
      "Preparing the full-quality PNG… / 高画質PNGを準備しています…",
    );

    try {
      const response = await fetch(mapPath);
      const contentType = response.headers.get("content-type")?.split(";", 1)[0];

      if (!response.ok || contentType !== "image/png") {
        throw new Error("InvalidMapResponse");
      }

      const blob = await response.blob();
      const file = new File([blob], mapFilename, { type: "image/png" });
      const shareData: ShareData = { files: [file] };

      if (!navigator.canShare?.(shareData)) {
        triggerDownloadFallback("file_share_unsupported");
        return;
      }

      preparedFileRef.current = file;
      sharePreparedFile(file, false);
    } catch (error) {
      trackError("fetch", error);
      setStatus("error");
      setStatusMessage(
        "The map could not be prepared. Check your connection and try again, or use the links below. / 地図を準備できませんでした。通信状況を確認して再試行するか、下のリンクをご利用ください。",
      );
    }
  };

  const handleSave = () => {
    if (isBusy) {
      return;
    }

    const preparedFile = preparedFileRef.current;

    if (status === "ready" && preparedFile) {
      sharePreparedFile(preparedFile, true);
      return;
    }

    preparedFileRef.current = null;

    if (typeof navigator.share !== "function" || typeof navigator.canShare !== "function") {
      startOperation("download");
      triggerDownloadFallback("web_share_unavailable");
      return;
    }

    startOperation("web_share");
    void prepareAndShare();
  };

  const handleManualDownload = () => {
    if (automaticDownloadRef.current) {
      automaticDownloadRef.current = false;
      return;
    }

    trackFallback("manual_download");
  };

  const handleOpenImage = () => {
    trackFallback("direct_image");
  };

  const buttonLabel =
    status === "preparing"
      ? "Preparing map… / 地図を準備中…"
      : status === "sharing"
        ? "Opening share… / 共有画面を表示中…"
        : "Save Map / 地図を保存";

  return (
    <div className="map-save-panel" aria-describedby="map-save-instructions">
      <div className="map-save-actions">
        <button
          className="map-save-button"
          type="button"
          onClick={handleSave}
          disabled={isBusy}
          aria-busy={isBusy}
        >
          {buttonLabel}
        </button>

        <a
          className="map-download-link"
          href={mapPath}
          download={mapFilename}
          onClick={handleManualDownload}
          ref={downloadLinkRef}
        >
          Download PNG / PNGをダウンロード
        </a>

        <a
          className="map-enlarge-link"
          href={mapPath}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenImage}
        >
          Open full-size map / 地図を拡大
        </a>
      </div>

      {statusMessage && (
        <p className={`map-save-status map-save-status-${status}`} role="status">
          {statusMessage}
        </p>
      )}

      <div className="map-save-instructions" id="map-save-instructions">
        <p>
          On iPhone, choose “Save Image” in the share sheet. You can also download
          the PNG or open the full-size map and press and hold the image.
        </p>
        <p lang="ja">
          iPhoneでは共有画面の「画像を保存」を選んでください。PNGをダウンロードするか、地図を拡大表示して画像を長押しする方法も利用できます。
        </p>
      </div>
    </div>
  );
}
