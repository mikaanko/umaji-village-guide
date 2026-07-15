import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { rentalCyclePageCopy, rentalCycles } from "@/data/rental-cycles";
import { spots } from "@/data/spots";

export const metadata: Metadata = {
  title: "Bicycle Rental in Umaji Village | Umaji Village Travel Guide",
  description:
    "Compare standard and electric-assist bicycle rentals in Umaji Village, with prices, hours, and rental conditions in English and Japanese.",
};

const spotsById = new Map(spots.map((spot) => [spot.id, spot]));

export default function RentalCyclePage() {
  return (
    <main className="rental-page">
      <section className="page-title rental-title">
        <p className="eyebrow">{rentalCyclePageCopy.eyebrow}</p>
        <h1 lang="en">{rentalCyclePageCopy.title.en}</h1>
        <p className="rental-title-ja" lang="ja">{rentalCyclePageCopy.title.ja}</p>
        <div className="bilingual-introduction">
          <p lang="en">{rentalCyclePageCopy.introduction.en}</p>
          <p className="ja-support" lang="ja">{rentalCyclePageCopy.introduction.ja}</p>
        </div>
      </section>

      <section className="section compact rental-comparison" aria-label="Compare two bicycle rental facilities / レンタサイクル2施設の比較">
        {rentalCycles.map((rental) => {
          const spot = spotsById.get(rental.spotId);

          return (
            <article className="rental-card" key={rental.spotId}>
              <div className={rental.spotId === "umaji-onsen" ? "rental-main-image rental-main-image-umaji-onsen" : "rental-main-image"}>
                <Image
                  src={rental.imageUrl}
                  alt={`${rental.imageAlt.en} / ${rental.imageAlt.ja}`}
                  fill
                  sizes="(min-width: 720px) 50vw, 100vw"
                  priority
                />
              </div>

              <div className="rental-card-content">
                <header className="rental-card-header">
                  <p className="rental-service-label" lang="en">{rental.category.en}</p>
                  <p className="rental-service-label-ja" lang="ja">{rental.category.ja}</p>
                  <h2 lang="en">{rental.name.en}</h2>
                  <p className="rental-name-ja" lang="ja">{rental.name.ja}</p>
                </header>

                <div className="rental-price">
                  {rental.priceHighlights.map((price) => (
                    <div className="bilingual-line" key={price.en}>
                      <strong lang="en">{price.en}</strong>
                      <span lang="ja">{price.ja}</span>
                    </div>
                  ))}
                </div>
                <div className="rental-recommendation bilingual-copy">
                  <p lang="en">{rental.recommendation.en}</p>
                  <p className="ja-support" lang="ja">{rental.recommendation.ja}</p>
                </div>

                <ul className="rental-badges" aria-label="Features / 特徴">
                  {rental.badges.map((badge) => (
                    <li key={badge.en}>
                      <span lang="en">{badge.en}</span>
                      <small lang="ja">{badge.ja}</small>
                    </li>
                  ))}
                </ul>

                <div className="rental-info-block">
                  <h3>
                    <span lang="en">{rentalCyclePageCopy.sectionLabels.information.en}</span>
                    <small lang="ja">{rentalCyclePageCopy.sectionLabels.information.ja}</small>
                  </h3>
                  <ul>{rental.information.map((item) => (
                    <li key={item.en}>
                      <span lang="en">{item.en}</span>
                      <small lang="ja">{item.ja}</small>
                    </li>
                  ))}</ul>
                </div>

                <aside className="rental-cautions" aria-label="Before you ride / 利用上の注意">
                  <h3>
                    <span lang="en">{rentalCyclePageCopy.sectionLabels.notice.en}</span>
                    <small lang="ja">{rentalCyclePageCopy.sectionLabels.notice.ja}</small>
                  </h3>
                  <ul>{rental.notices.map((notice) => (
                    <li key={notice.en}>
                      <span lang="en">{notice.en}</span>
                      <small lang="ja">{notice.ja}</small>
                    </li>
                  ))}</ul>
                </aside>

                {rental.secondaryImageUrl && (
                  <figure className="rental-secondary-image">
                    <div className="rental-secondary-image-wrap">
                      <Image
                        src={rental.secondaryImageUrl}
                        alt={rental.secondaryImageAlt ? `${rental.secondaryImageAlt.en} / ${rental.secondaryImageAlt.ja}` : ""}
                        fill
                        sizes="(min-width: 720px) 260px, 70vw"
                      />
                    </div>
                    <figcaption>
                      <span lang="en">{rentalCyclePageCopy.pricePhotoCaption.en}</span>
                      <span className="ja-support" lang="ja">{rentalCyclePageCopy.pricePhotoCaption.ja}</span>
                    </figcaption>
                  </figure>
                )}

                <div className="rental-actions">
                  {rental.phone && (
                    <a
                      className="phone-button"
                      href={rental.phone.href}
                      aria-label={`Call ${rental.name.en} at ${rental.phone.display}`}
                    >
                      <span lang="en">{rentalCyclePageCopy.buttons.call.en}</span>
                      <small lang="ja">{rentalCyclePageCopy.buttons.call.ja}</small>
                      <strong>{rental.phone.display}</strong>
                    </a>
                  )}
                  {spot?.googleMapsUrl && (
                    <a
                      className={rental.mapPriority ? "map-button map-button-priority" : "map-button"}
                      href={spot.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span lang="en">{rentalCyclePageCopy.buttons.map.en}</span>
                      <small lang="ja">{rentalCyclePageCopy.buttons.map.ja}</small>
                    </a>
                  )}
                  {spot && (
                    <Link className="detail-link" href={`/spots/${spot.id}`}>
                      <span lang="en">{rentalCyclePageCopy.buttons.details.en}</span>
                      <small lang="ja">{rentalCyclePageCopy.buttons.details.ja}</small>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
