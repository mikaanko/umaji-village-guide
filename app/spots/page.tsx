import { SpotCard } from "@/components/SpotCard";
import { categories, spots } from "@/data/spots";

const leadingSpotIds = [
  "yuzu-no-mori-factory",
  "umapan-bakery",
  "yuzu-no-mori-market",
  "gomi-tunnel",
] as const;

const leadingSpotIdSet = new Set<string>(leadingSpotIds);
const spotsForDisplay = [
  ...leadingSpotIds.flatMap((id) => spots.filter((spot) => spot.id === id)),
  ...spots.filter((spot) => !leadingSpotIdSet.has(spot.id)),
];

export const metadata = {
  title: "Spots | Umaji Village Travel Guide",
};

export default function SpotsPage() {
  return (
    <main>
      <section className="page-title">
        <p className="eyebrow">Visitor spot guide</p>
        <h1>Places to Visit</h1>
        <p>
          Browse places around Umaji Village, with practical details, photos,
          and quick access to Google Maps.
        </p>
      </section>

      <section className="section compact">
        <div className="category-list" aria-label="Spot categories">
          {categories.map((category) => (
            <span className="category-chip" key={category}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="section compact">
        <div className="spot-grid">
          {spotsForDisplay.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </section>
    </main>
  );
}
