import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spots } from "@/data/spots";

export const metadata: Metadata = {
  title: "Umaji Village Illustrated Guide Map",
  description:
    "Explore Umaji Village with an illustrated guide map and links to visitor spots.",
};

type MapSpot = {
  id: string;
  label: string;
  position: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
};

const mapSpots: MapSpot[] = [
  {
    id: "umaji-forest-railway",
    label: "馬路村森林鉄道 / Umaji Forest Railway",
    position: { left: "3%", top: "14%", width: "11.5%", height: "17%" },
  },
  {
    id: "umaji-incline",
    label: "インクライン / Incline",
    position: { left: "14.5%", top: "14%", width: "11.5%", height: "17%" },
  },
  {
    id: "umaji-onsen",
    label: "うまじ温泉",
    position: { left: "27%", top: "14%", width: "19%", height: "17%" },
  },
  {
    id: "umaji-village-office",
    label: "馬路村役場 / Umaji Village Office",
    position: { left: "29%", top: "30%", width: "19%", height: "19%" },
  },
  {
    id: "yamanami-shokudo",
    label: "やまなみ食堂 / Yamanami Shokudo",
    position: { left: "49%", top: "31%", width: "21%", height: "17%" },
  },
  {
    id: "umapan-bakery",
    label: "うまじのパン屋 / Umaji Bakery",
    position: { left: "15%", top: "49%", width: "20%", height: "17%" },
  },
  {
    id: "yuzu-no-mori-factory",
    label: "ゆずの森加工場 / Yuzu no Mori Factory",
    position: { left: "8%", top: "61%", width: "25%", height: "14%" },
  },
  {
    id: "makaichotteya",
    label: "まかいちょって家 / Makaichotteya",
    position: { left: "34%", top: "61%", width: "19%", height: "21%" },
  },
  {
    id: "gomi-tunnel",
    label: "五味隧道 / Gomi Tunnel",
    position: { left: "29%", top: "81%", width: "19%", height: "14%" },
  },
  {
    id: "asahideyama-osugi",
    label: "朝日出山の大杉 / Mt. Asahideyama Osugi",
    position: { left: "75%", top: "18%", width: "23%", height: "76%" },
  },
];

const requestedSpotGroups = [
  {
    name: "馬路村森林鉄道・インクライン",
    ids: ["umaji-forest-railway", "umaji-incline"],
  },
  { name: "うまじ温泉", ids: ["umaji-onsen"] },
  { name: "馬路村役場", ids: ["umaji-village-office"] },
  { name: "やまなみ食堂", ids: ["yamanami-shokudo"] },
  { name: "うまじのパン屋", ids: ["umapan-bakery"] },
  { name: "ゆずの森加工場", ids: ["yuzu-no-mori-factory"] },
  { name: "金林寺", ids: [] },
  { name: "まかいちょって家", ids: ["makaichotteya"] },
  { name: "五味隧道", ids: ["gomi-tunnel"] },
  { name: "朝日出山の大杉", ids: ["asahideyama-osugi"] },
];

const spotsById = new Map(spots.map((spot) => [spot.id, spot]));

export default function IllustratedMapPage() {
  return (
    <main className="map-page">
      <section className="page-title map-page-title">
        <p className="eyebrow">Explore Umaji Village</p>
        <h1>Umaji Village Illustrated Guide Map</h1>
        <div className="map-instructions">
          <p>Tap a spot on the map to view details.</p>
          <p lang="ja">地図上のスポットを押すと詳細ページを開きます。</p>
        </div>
      </section>

      <section className="section compact map-section" aria-label="Illustrated guide map">
        <div className="illustrated-map-wrap">
          <Image
            className="illustrated-map-image"
            src="/images/map/umaji-illustrated-guide-map.png"
            alt="馬路村の観光スポットを描いたイラストガイドマップ"
            width={1511}
            height={1041}
            sizes="(min-width: 1500px) 1436px, calc(100vw - 36px)"
            priority
          />

          {mapSpots.map((mapSpot) => (
            <Link
              className="map-hotspot"
              href={`/spots/${mapSpot.id}`}
              aria-label={`${mapSpot.label} の詳細を見る`}
              data-label={mapSpot.label}
              key={mapSpot.id}
              style={mapSpot.position}
            />
          ))}

          <span
            className="map-hotspot map-hotspot-unavailable"
            aria-label="金林寺（詳細ページ未登録）"
            data-label="金林寺（詳細ページ未登録）"
            style={{ left: "3%", top: "70%", width: "23%", height: "21%" }}
          />
        </div>

        <a
          className="map-enlarge-link"
          href="/images/map/umaji-illustrated-guide-map.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open full-size map / 地図を拡大
        </a>

        <div className="map-note">
          <p>
            This is an illustrated guide. Locations, distances, and buildings are simplified. Please use Google Maps for navigation.
          </p>
          <p lang="ja">
            この地図は観光案内用のイラストです。位置・距離・建物は簡略化されています。実際の経路案内にはGoogleマップをご利用ください。
          </p>
        </div>
      </section>

      <section className="section map-spot-section" aria-labelledby="map-spot-list-title">
        <div className="section-heading">
          <p className="eyebrow">Spot links</p>
          <h2 id="map-spot-list-title">Spots on the map</h2>
        </div>

        <ul className="map-spot-list">
          {requestedSpotGroups.map((group) => {
            const groupSpots = group.ids
              .map((id) => spotsById.get(id))
              .filter((spot) => spot !== undefined);

            return (
              <li className="map-spot-list-item" key={group.name}>
                <div>
                  <h3>{group.name}</h3>
                  {groupSpots.length > 0 ? (
                    <p>{[...new Set(groupSpots.map((spot) => spot.category))].join(" / ")}</p>
                  ) : (
                    <p>詳細ページ未登録 / Detail page not available</p>
                  )}
                </div>

                {groupSpots.length > 0 && (
                  <div className="map-spot-links">
                    {groupSpots.map((spot) => (
                      <Link
                        className="detail-link"
                        href={`/spots/${spot.id}`}
                        id={`map-${spot.id}`}
                        key={spot.id}
                      >
                        {groupSpots.length > 1 ? spot.name : "View details / 詳細を見る"}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
