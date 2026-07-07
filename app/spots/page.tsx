import { SpotCard } from "@/components/SpotCard";
import { categories, spots } from "@/data/spots";

export const metadata = {
  title: "Spots | Umaji Village Travel Guide",
};

export default function SpotsPage() {
  return (
    <main>
      <section className="page-title">
        <p className="eyebrow">Draft spot list</p>
        <h1>Places to Visit</h1>
        <p>
          Each card keeps map access visible and supports unconfirmed opening
          hours, fees, notes, and missing photos.
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
          {spots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </section>
    </main>
  );
}
