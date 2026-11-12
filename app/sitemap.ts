import type { MetadataRoute } from "next";
import { spots } from "@/data/spots";

const baseUrl = "https://umaji-village-guide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/spots", "/map", "/guide/rental-cycle", "/privacy"];

  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}` })),
    ...spots.map((spot) => ({ url: `${baseUrl}/spots/${spot.id}` })),
  ];
}
