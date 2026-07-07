import Link from "next/link";
import { categories, spots } from "@/data/spots";
import { SpotCard } from "@/components/SpotCard";

const featuredSpots = spots.slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Draft visitor guide</p>
          <h1>Umaji Village Travel Guide</h1>
          <p>
            A compact, mobile-first guide for international visitors. Spot
            details are draft data and can be replaced as photos and confirmed
            information become available.
          </p>
          <Link className="primary-link" href="/spots">
            Browse spots
          </Link>
        </div>
        <div className="hero-panel" aria-label="Guide highlights">
          <span>Maps first</span>
          <strong>{spots.length} draft spots</strong>
          <span>Photos optional</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Categories</p>
          <h2>Explore by interest</h2>
        </div>
        <div className="category-list" aria-label="Spot categories">
          {categories.map((category) => (
            <span className="category-chip" key={category}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading with-action">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Starter spots</h2>
          </div>
          <Link className="text-link" href="/spots">
            View all
          </Link>
        </div>
        <div className="spot-grid">
          {featuredSpots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      </section>
    </main>
  );
}
