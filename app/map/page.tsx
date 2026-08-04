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
    position: { left: "4%", top: "21.5%", width: "9%", height: "6.5%" },
  },
  {
    id: "umaji-incline",
    label: "インクライン / Incline",
    position: { left: "13%", top: "21.5%", width: "7%", height: "6.5%" },
  },
  {
    id: "umaji-onsen",
    label: "うまじ温泉",
    position: { left: "33.5%", top: "17.5%", width: "12%", height: "6%" },
  },
  {
    id: "umaji-village-office",
    label: "馬路村役場 / Umaji Village Office",
    position: { left: "31.3%", top: "32.4%", width: "13.8%", height: "6%" },
  },
  {
    id: "yamanami-shokudo",
    label: "やまなみ食堂 / Yamanami Shokudo",
    position: { left: "51.7%", top: "33.3%", width: "13.7%", height: "6%" },
  },
  {
    id: "yuzu-no-mori-market",
    label: "ゆずの森直売所 / Yuzu no Mori Market",
    position: { left: "4.2%", top: "52.6%", width: "13%", height: "6%" },
  },
  {
    id: "umapan-bakery",
    label: "うまじのパン屋 / Umaji Bakery",
    position: { left: "5.4%", top: "58.2%", width: "11.4%", height: "6%" },
  },
  {
    id: "yuzu-no-mori-factory",
    label: "ゆずの森加工場 / Yuzu no Mori Factory",
    position: { left: "7.7%", top: "65.1%", width: "14.2%", height: "6%" },
  },
  {
    id: "konrinji-temple",
    label: "金林寺 / Konrinji Temple",
    position: { left: "3.6%", top: "73.2%", width: "11%", height: "6%" },
  },
  {
    id: "makaichotteya",
    label: "まかいちょって家 / Makaichotteya",
    position: { left: "36.6%", top: "62%", width: "10.5%", height: "6.5%" },
  },
  {
    id: "gomi-tunnel",
    label: "五味隧道 / Gomi Tunnel",
    position: { left: "32.1%", top: "84.2%", width: "10.5%", height: "6%" },
  },
  {
    id: "asahideyama-osugi",
    label: "朝日出山の大杉 / Mt. Asahideyama Osugi",
    position: { left: "75.5%", top: "71.2%", width: "21%", height: "19%" },
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
  { name: "ゆずの森直売所", ids: ["yuzu-no-mori-market"] },
  { name: "ゆずの森加工場", ids: ["yuzu-no-mori-factory"] },
  { name: "金林寺", ids: ["konrinji-temple"] },
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
            src="/images/map/umaji-village-guide-map.png"
            alt="馬路村の観光スポットを描いたイラストガイドマップ"
            width={1448}
            height={1086}
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

        </div>

        <a
          className="map-enlarge-link"
          href="/images/map/umaji-village-guide-map.png"
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
              <li
                className={`map-spot-list-item${groupSpots.length > 1 ? " map-spot-list-item-multiple" : ""}`}
                key={group.name}
              >
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
