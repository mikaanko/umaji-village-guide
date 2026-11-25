import Link from "next/link";
import { categories, spots } from "@/data/spots";
import { SpotCard } from "@/components/SpotCard";

const starterSpotIds = [
  "yuzu-no-mori-factory",
  "umapan-bakery",
  "yuzu-no-mori-market",
] as const;

const featuredSpots = starterSpotIds.flatMap((id) => {
  const spot = spots.find((candidate) => candidate.id === id);

  if (!spot) {
    return [];
  }

  return [
    id === "yuzu-no-mori-factory"
      ? { ...spot, name: "Yuzu no Mori Factory / ゆずの森加工場" }
      : spot,
  ];
});

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to Umaji</p>
          <h1>Umaji Village Travel Guide</h1>
          <p>
            Discover places to visit, local food, nature, and cultural sites
            around Umaji Village, with practical information and map links to
            help you plan your trip.
          </p>
          <Link className="primary-link" href="/spots">
            Browse spots
          </Link>
        </div>
        <div className="hero-panel" aria-label="Guide highlights">
          <span>Quick map access</span>
          <strong>{spots.length} places to explore</strong>
          <span>Practical travel details</span>
        </div>
      </section>

      <section className="section external-links-section">
        <div className="section-heading">
          <p className="eyebrow">Discover more</p>
          <h2>More ways to experience Umaji</h2>
        </div>
        <div className="external-link-grid">
          <a
            className="external-link-card"
            href="https://www.youtube.com/watch?v=vKWLKzXsWWg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="external-link-label">Video</span>
            <strong>Watch Umaji Village on YouTube</strong>
            <span className="video-details">
              <span className="video-title">
                I Explored This Tiny Yuzu Village in Japan, One Local
                Recommendation at a Time
              </span>
              <span className="video-creator">Creator: maigomika</span>
            </span>
            <span className="external-link-action" aria-hidden="true">
              Watch video <span>↗</span>
            </span>
          </a>

          <div className="external-link-card survey-link-card">
            <span className="external-link-label">Visitor survey</span>
            <strong>Take a Survey &amp; Enjoy a Free Yuzu Drink!</strong>
            <span className="survey-benefit">
              Pick up a free village map at Umaji Bakery, complete the survey
              using the QR code on the map, and enjoy a complimentary “Gokkun”
              yuzu drink!
            </span>
          </div>
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
            <h2>Featured spots</h2>
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
