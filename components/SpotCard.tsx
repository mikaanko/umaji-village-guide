import type { Spot } from "@/data/spots";

type SpotCardProps = {
  spot: Spot;
};

export function SpotCard({ spot }: SpotCardProps) {
  return (
    <article className="spot-card">
      <div className="spot-image-wrap">
        {spot.imageUrl ? (
          // Use a regular img so draft external URLs can be swapped without config.
          <img src={spot.imageUrl} alt={spot.imageAlt || spot.name} />
        ) : (
          <div className="image-placeholder" aria-label="Photo not set">
            <span>{spot.category}</span>
            <strong>Photo coming soon</strong>
          </div>
        )}
      </div>

      <div className="spot-content">
        <div className="spot-title-row">
          <h3>{spot.name}</h3>
          <span className="category-chip small">{spot.category}</span>
        </div>
        <p>{spot.summary}</p>

        <dl className="spot-details">
          <div>
            <dt>Hours</dt>
            <dd>{spot.hours}</dd>
          </div>
          <div>
            <dt>Fee</dt>
            <dd>{spot.fee}</dd>
          </div>
          <div>
            <dt>Notes</dt>
            <dd>{spot.notes}</dd>
          </div>
        </dl>

        <a
          className="map-button"
          href={spot.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    </article>
  );
}
