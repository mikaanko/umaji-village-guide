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
  {
    id: "yanase-forest-railway",
    name: "Yanase Forest Railway",
    category: "Culture",
    summary:
      "A local heritage experience connected to the historic forest railway of the area.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Yanase+Forest+Railway+Umaji",
    hours: "Seasonal schedule to be confirmed / 要確認",
    fee: "To be confirmed / 要確認",
    notes: "Check operating days before recommending to visitors.",
  },
  {
    id: "yuzu-no-mori",
    name: "Yuzu no Mori",
    category: "Shopping",
    summary:
      "A visitor-friendly stop for yuzu products and local souvenirs from Umaji Village.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yuzu+no+Mori+Umaji",
    hours: "To be confirmed / 要確認",
    fee: "Free entry, purchases optional. Details to be confirmed / 要確認",
    notes: "Good candidate for English product notes once confirmed.",
  },
  {
    id: "yasuda-river",
    name: "Yasuda River",
    category: "Nature",
    summary:
      "Clear mountain river scenery for a calm outdoor stop near the village.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Yasuda+River+Umaji",
    hours: "Open outdoor area. Safety conditions to be confirmed / 要確認",
    fee: "Free. Access details to be confirmed / 要確認",
    notes: "Add caution text for weather, river levels, and parking after confirmation.",
  },
  {
    id: "local-yuzu-food",
    name: "Local Yuzu Food",
    category: "Food",
    summary:
      "Placeholder listing for restaurants, cafes, or tasting spots featuring Umaji yuzu.",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Umaji+Village+yuzu+food",
    hours: "To be confirmed / 要確認",
    fee: "Menu prices to be confirmed / 要確認",
    notes: "Replace with confirmed shop names, menus, and vegetarian/allergy notes.",
  },
];
