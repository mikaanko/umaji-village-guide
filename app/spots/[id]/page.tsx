import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { spots } from "@/data/spots";

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
        <a className="map-button" href={spot.googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Open in Google Maps
        </a>
      </section>
    </main>
  );
}
