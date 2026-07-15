export type SpotCategory =
  | "Nature"
  | "Food"
  | "Culture"
  | "Shopping"
  | "Stay";

export type Spot = {
  id: string;
  name: string;
  nameEn?: string;
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
    name: "うまじ温泉",
    nameEn: "Umaji Onsen",
    category: "Stay",
    summary:
      "A relaxing hot spring inn that can work as a gentle base for exploring the village.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umaji+Onsen",
    imageUrl: "/images/spots/umaji-onsen-main.jpg",
    imageAlt: "うまじ温泉の外観",
    images: [
      "/images/spots/umaji-onsen-main.jpg",
      "/images/spots/umaji-onsen-exterior.jpg",
      "/images/spots/umaji-onsen-entrance.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Draft listing. Confirm bathing hours, lodging availability, and access.",
  },
  {
    id: "umaji-village-office",
    name: "馬路村役場",
    category: "Culture",
    summary: "The village office in central Umaji. The current main photo is temporary while exterior construction is underway.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umaji+Village+Office",
    imageUrl: "/images/spots/umaji-village-office-sign.jpg",
    imageAlt: "馬路村役場の案内表示",
    images: [
      "/images/spots/umaji-village-office-sign.jpg",
      "/images/spots/umaji-village-office-exterior.jpg",
      "/images/spots/umaji-village-office-entrance.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Temporary exterior photo during construction. Replace the main image later using the same filename.",
  },
  {
    id: "yamanami-shokudo",
    name: "やまなみ食堂",
    category: "Food",
    summary: "A local dining spot in Umaji Village.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yamanami+Shokudo+Umaji",
    imageUrl: "/images/spots/yamanami-shokudo-sign.jpg",
    imageAlt: "やまなみ食堂の看板",
    images: [
      "/images/spots/yamanami-shokudo-sign.jpg",
      "/images/spots/yamanami-shokudo-exterior.jpg",
      "/images/spots/yamanami-shokudo-entrance.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Opening hours, closing days, menu prices, and contact details are not yet confirmed.",
  },
  {
    id: "umaji-forest-railway",
    name: "馬路村森林鉄道",
    category: "Culture",
    summary: "A forest railway attraction connected to Umaji Village's timber heritage.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umaji+Forest+Railway",
    imageUrl: "/images/spots/umaji-forest-railway-train.jpg",
    imageAlt: "馬路村森林鉄道の車両",
    images: [
      "/images/spots/umaji-forest-railway-train.jpg",
      "/images/spots/umaji-forest-railway-front.jpg",
      "/images/spots/umaji-forest-railway-track.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Operating dates, times, fares, and contact details are not yet confirmed.",
  },
  {
    id: "umaji-incline",
    name: "インクライン",
    category: "Culture",
    summary: "An incline attraction set against Umaji's mountain landscape.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Umaji+Incline",
    imageUrl: "/images/spots/umaji-incline-main.jpg",
    imageAlt: "馬路村のインクライン",
    images: [
      "/images/spots/umaji-incline-main.jpg",
      "/images/spots/umaji-incline-sign.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Operating dates, times, fares, and contact details are not yet confirmed.",
  },
  {
    id: "makaichotteya",
    name: "まかいちょって家",
    category: "Shopping",
    summary: "A village stop with visitor information visible at the entrance.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Makaichotteya+Umaji",
    imageUrl: "/images/spots/makaichotteya-exterior.jpg",
    imageAlt: "まかいちょって家の外観",
    images: [
      "/images/spots/makaichotteya-exterior.jpg",
      "/images/spots/makaichotteya-entrance.jpg",
      "/images/spots/makaichotteya-sign.jpg",
      "/images/spots/makaichotteya-rental-bike.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Opening hours, closing days, services, and contact details are not yet confirmed.",
  },
  {
    id: "asahideyama-osugi",
    name: "朝日出山の大杉",
    category: "Nature",
    summary: "A monumental cedar whose height and powerful trunk stand out in the forest setting.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Asahideyama+Osugi+Umaji",
    imageUrl: "/images/spots/asahideyama-osugi-main.jpg",
    imageAlt: "朝日出山の大杉を見上げた縦写真",
    images: [
      "/images/spots/asahideyama-osugi-main.jpg",
      "/images/spots/asahideyama-osugi-trunk.jpg",
      "/images/spots/asahideyama-osugi-trunk-closeup.jpg",
      "/images/spots/asahideyama-osugi-trailhead.jpg",
      "/images/spots/asahideyama-osugi-information.jpg",
    ],
    hours: "To be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Access conditions, address, and visitor guidance are not yet confirmed.",
  },
];
