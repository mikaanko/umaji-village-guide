import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { spots } from "@/data/spots";
import { rentalCyclePageCopy } from "@/data/rental-cycles";

type SpotDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return spots.map((spot) => ({ id: spot.id }));
}

export default async function SpotDetailPage({ params }: SpotDetailPageProps) {
  const { id } = await params;
  const spot = spots.find((item) => item.id === id);

  if (!spot) {
    notFound();
  }

  const images = spot.images ?? (spot.imageUrl ? [spot.imageUrl] : []);
  const hasRentalCycle = spot.id === "umaji-onsen" || spot.id === "makaichotteya";

  return (
    <main>
      <section className="page-title spot-detail-title">
        <Link className="text-link" href="/spots">
          Back to all spots
        </Link>
        <span className="category-chip small">{spot.category}</span>
        <h1>{spot.name}</h1>
        <p>{spot.summary}</p>
      </section>

      {hasRentalCycle && (
        <section className="section compact">
          <aside className="rental-spot-notice">
            <div>
              <p className="eyebrow">{rentalCyclePageCopy.spotNotice.label}</p>
              <h2 lang="en">{rentalCyclePageCopy.spotNotice.title.en}</h2>
              <p className="spot-notice-ja" lang="ja">{rentalCyclePageCopy.spotNotice.title.ja}</p>
            </div>
            <Link className="detail-link" href="/guide/rental-cycle">
              <span lang="en">{rentalCyclePageCopy.spotNotice.link.en}</span>
              <small lang="ja">{rentalCyclePageCopy.spotNotice.link.ja}</small>
            </Link>
          </aside>
        </section>
      )}

      {images.length > 0 && (
        <section className="section compact">
          <div className="spot-gallery" aria-label={`${spot.name} photo gallery`}>
            {images.map((image, index) => (
              <figure className="gallery-item" key={image}>
                <Image
                  src={image}
                  alt={index === 0 ? spot.imageAlt || spot.name : `${spot.name} photo ${index + 1}`}
                  fill
                  sizes={index === 0 ? "(min-width: 720px) 1056px, 100vw" : "(min-width: 720px) 50vw, 100vw"}
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="section compact spot-detail-info">
        <dl className="spot-details">
          <div><dt>Hours</dt><dd>{spot.hours}</dd></div>
          <div><dt>Fee</dt><dd>{spot.fee}</dd></div>
          <div><dt>Notes</dt><dd>{spot.notes}</dd></div>
        </dl>
        <div className="spot-detail-map-links">
          <Link className="detail-link" href={`/map#map-${spot.id}`}>
            View on illustrated map<br />
            <span lang="ja">イラストマップで見る</span>
          </Link>
          {spot.googleMapsUrl && (
            <a className="map-button" href={spot.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
