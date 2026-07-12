export type SpotCategory =
  | "Nature"
  | "Food"
  | "Culture"
  | "Shopping"
  | "Stay";

export type Spot = {
  id: string;
  name: string;
  category: SpotCategory;
  summary: string;
  googleMapsUrl: string;
  imageUrl?: string;
  imageAlt?: string;
  images?: string[];
  hours: string;
  fee: string;
  notes: string;
};

export const categories: SpotCategory[] = [
  "Nature",
  "Food",
  "Culture",
  "Shopping",
  "Stay",
];

export const spots: Spot[] = [
  {
    id: "gomi-tunnel",
    name: "Gomi Tunnel / 五味隧道",
    category: "Culture",
    summary:
      "Part of the Yanase Forest Railway heritage, the Gomi Tunnel area preserves traces of the former railway once used to transport timber through the mountains. Entry into the tunnel is prohibited, but visitors can view the remains and surrounding scenery from outside.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gomi+Tunnel+Umaji",
    imageUrl: "/images/spots/gomi-tunnel-railway-bridge-01.jpg",
    imageAlt: "Railway bridge remains near Gomi Tunnel in Umaji Village",
    images: [
      "/images/spots/gomi-tunnel-railway-bridge-01.jpg",
      "/images/spots/gomi-tunnel-sign-01.jpg",
      "/images/spots/gomi-tunnel-no-entry-01.jpg",
    ],
    hours: "Viewable from outside. Follow local signs.",
    fee: "Free exterior viewing.",
    notes:
      "Tunnel entry is prohibited. Please view the site from outside and follow local signs.",
  },
  {
    id: "umapan-bakery",
    name: "Umapan Bakery",
    category: "Food",
    summary:
      "A local bakery stop in Umaji with an easy roadside exterior and recognizable shop sign.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umapan+Umaji",
    imageUrl: "/images/spots/umapan-shop-exterior-01.jpg",
    imageAlt: "Exterior view of Umapan Bakery in Umaji Village",
    images: [
      "/images/spots/umapan-shop-exterior-01.jpg",
      "/images/spots/umapan-shop-sign-01.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "Menu prices to be confirmed / 要確認",
    notes: "Use exterior as the main photo and the shop sign as a secondary view.",
  },
  {
    id: "yuzu-no-mori-market",
    name: "Yuzu no Mori Market",
    category: "Shopping",
    summary:
      "A visitor-friendly direct sales stop for yuzu products and local souvenirs from Umaji Village.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Yuzu+no+Mori+Market+Umaji",
    imageUrl: "/images/spots/yuzu-mori-market-exterior-01.jpg",
    imageAlt: "Exterior view of Yuzu no Mori Market in Umaji Village",
    images: [
      "/images/spots/yuzu-mori-market-exterior-01.jpg",
      "/images/spots/yuzu-mori-market-entrance-01.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "Free entry, purchases optional. Details to be confirmed / 要確認",
    notes: "Use the exterior as the main photo and the entrance as a secondary view.",
  },
  {
    id: "yuzu-no-mori-factory",
    name: "Yuzu no Mori Factory",
    category: "Culture",
    summary:
      "A production-site stop connected to Umaji's yuzu processing and village identity.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Yuzu+no+Mori+Factory+Umaji",
    imageUrl: "/images/spots/yuzu-mori-factory-exterior-01.jpg",
    imageAlt: "Exterior view of Yuzu no Mori Factory in Umaji Village",
    images: [
      "/images/spots/yuzu-mori-factory-exterior-01.jpg",
      "/images/spots/yuzu-mori-factory-entrance-01.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "Exterior visit information to be confirmed / 要確認",
    notes: "Use the exterior as the main photo and the entrance as a secondary view.",
  },
  {
    id: "common-parking-access",
    name: "Common Parking and Access",
    category: "Culture",
    summary:
      "Shared parking and approach guidance for visitors arriving by car and walking into the area.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Umaji+Village+Parking",
    imageUrl: "/images/spots/common-parking-path-01.jpg",
    imageAlt: "Path view from the shared parking area in Umaji Village",
    images: [
      "/images/spots/common-parking-path-01.jpg",
      "/images/spots/common-parking-01.jpg",
    ],
    hours: "Open access point. On-site signs should still be checked / 要確認",
    fee: "Parking conditions to be confirmed / 要確認",
    notes: "Use the walking path as the main photo and the parking area as a secondary view.",
  },
  {
    id: "umaji-onsen",
    name: "Umaji Onsen",
    category: "Stay",
    summary:
      "A relaxing hot spring inn that can work as a gentle base for exploring the village.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umaji+Onsen",
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Draft listing. Confirm bathing hours, lodging availability, and access.",
  },
];
