export type LocalizedText = {
  en: string;
  ja: string;
};

export type RentalCycle = {
  spotId: "umaji-onsen" | "makaichotteya";
  name: LocalizedText;
  category: LocalizedText;
  recommendation: LocalizedText;
  priceHighlights: LocalizedText[];
  imageUrl: string;
  imageAlt: LocalizedText;
  secondaryImageUrl?: string;
  secondaryImageAlt?: LocalizedText;
  information: LocalizedText[];
  notices: LocalizedText[];
  badges: LocalizedText[];
  phone?: {
    display: string;
    href: string;
  };
  mapPriority?: boolean;
};

export const rentalCyclePageCopy = {
  eyebrow: "Getting around Umaji",
  title: {
    en: "Bicycle Rental in Umaji Village",
    ja: "馬路村のレンタサイクル",
  },
  introduction: {
    en: "Umaji Village offers both affordable standard bicycles and electric-assist bicycles for exploring the area. Choose the option that best suits your route and travel style.",
    ja: "馬路村では、気軽に使える普通自転車と、坂道にも便利な電動アシスト自転車を借りられます。目的に合わせてお選びください。",
  },
  sectionLabels: {
    information: { en: "Rental Information", ja: "利用案内" },
    notice: { en: "Before You Ride", ja: "ご利用前に" },
  },
  buttons: {
    map: { en: "Open in Google Maps", ja: "Googleマップを開く" },
    details: { en: "View Facility Details", ja: "施設詳細を見る" },
    call: { en: "Call to Enquire", ja: "電話で問い合わせる" },
  },
  pricePhotoCaption: {
    en: "On-site price board. All prices, hours, and rental conditions are also provided in English above.",
    ja: "現地の料金表。料金・時間・利用条件は上記の文字情報でもご確認いただけます。",
  },
  spotNotice: {
    label: "Bicycle rental",
    title: { en: "Bicycle rental is available", ja: "レンタサイクルを利用できます" },
    link: { en: "View prices and rental information", ja: "料金・利用方法を見る" },
  },
} satisfies Record<string, unknown>;

export const rentalCycles: RentalCycle[] = [
  {
    spotId: "umaji-onsen",
    name: { en: "Umaji Onsen", ja: "うまじ温泉" },
    category: { en: "Standard Bicycle Rental", ja: "普通自転車レンタル" },
    recommendation: {
      en: "Recommended for visitors who want to explore the village center at a relaxed pace, using Umaji Onsen as their base.",
      ja: "温泉を拠点に、村の中心部を気軽に巡りたい方におすすめです。",
    },
    priceHighlights: [
      {
        en: "Flat rate: ¥200 for a half day or full day",
        ja: "半日・1日とも一律 200円",
      },
    ],
    imageUrl: "/images/spots/umaji-onsen-rental-bikes.jpg",
    imageAlt: {
      en: "Five standard rental bicycles at Umaji Onsen",
      ja: "うまじ温泉の普通レンタサイクル5台",
    },
    information: [
      { en: "Standard bicycles only", ja: "普通自転車のみ" },
      { en: "5 bicycles available", ja: "全5台" },
      { en: "Flat rate: ¥200 for a half day or full day", ja: "半日・1日とも一律200円" },
      { en: "No reservation required", ja: "予約不要" },
      { en: "Ask at the Umaji Onsen front desk", ja: "うまじ温泉フロントで受付" },
      {
        en: "Bicycles may be rented in rainy weather if the rider considers conditions safe",
        ja: "雨天時も、利用者が問題なければ貸し出し可能",
      },
      { en: "Electric-assist bicycles are not available", ja: "電動アシスト自転車なし" },
      { en: "Helmets are not available", ja: "ヘルメットの貸し出しなし" },
    ],
    notices: [
      { en: "Please confirm the return time at the front desk.", ja: "返却時間は受付時にご確認ください。" },
      { en: "For safety, we recommend riding during daylight hours.", ja: "安全のため、明るい時間帯の利用をおすすめします。" },
      { en: "Please take extra care when riding in rainy or slippery conditions.", ja: "雨天時は路面状況に十分ご注意ください。" },
      { en: "Helmets are not available for rental.", ja: "ヘルメットの貸し出しはありません。" },
    ],
    badges: [
      { en: "Affordable", ja: "お手頃" },
      { en: "Standard bicycle", ja: "普通自転車" },
      { en: "Onsen base", ja: "温泉を拠点に" },
      { en: "Village center", ja: "村中心部向け" },
    ],
  },
  {
    spotId: "makaichotteya",
    name: { en: "Makaichotteya", ja: "まかいちょって家" },
    category: { en: "Electric-Assist Bicycle Rental", ja: "電動アシスト自転車レンタル" },
    recommendation: {
      en: "Recommended for visitors who want an easier ride on hills or plan to travel farther around the village.",
      ja: "坂道や少し遠い場所まで、楽に巡りたい方におすすめです。",
    },
    priceHighlights: [
      { en: "Less than 4 hours: ¥1,000", ja: "4時間未満 1,000円" },
      { en: "4 hours or more: ¥1,500", ja: "4時間以上 1,500円" },
    ],
    imageUrl: "/images/spots/makaichotte-rental-bikes.jpg",
    imageAlt: {
      en: "Five electric-assist rental bicycles at Makaichotteya",
      ja: "まかいちょって家で貸し出す電動アシスト自転車5台",
    },
    secondaryImageUrl: "/images/spots/makaichotte-rental-price.jpg",
    secondaryImageAlt: {
      en: "Japanese bicycle rental price board at Makaichotteya",
      ja: "まかいちょって家のレンタサイクル料金表",
    },
    information: [
      { en: "Electric-assist bicycles only", ja: "電動アシスト自転車のみ" },
      { en: "5 bicycles available", ja: "全5台" },
      { en: "Less than 4 hours: ¥1,000", ja: "4時間未満 1,000円" },
      { en: "4 hours or more: ¥1,500", ja: "4時間以上 1,500円" },
      { en: "Rental hours: 9:00–16:30", ja: "貸出時間 9:00〜16:30" },
      { en: "Last rental check-in: 16:00", ja: "最終受付 16:00" },
      { en: "Same-day return required", ja: "当日返却" },
      { en: "No reservation required", ja: "予約は必須ではありません" },
      { en: "Advance booking by phone is available", ja: "電話での事前受付可" },
      { en: "Helmets are available", ja: "ヘルメットあり" },
      { en: "Luggage storage is available", ja: "荷物預かり可能" },
    ],
    notices: [
      { en: "Bicycle rental is unavailable in November.", ja: "11月は貸し出し休止です。" },
    ],
    badges: [
      { en: "Electric assist", ja: "電動アシスト" },
      { en: "Hills & longer rides", ja: "坂道・長めの移動" },
      { en: "Helmets available", ja: "ヘルメットあり" },
      { en: "Closed in November", ja: "11月休止" },
    ],
    phone: {
      display: "0887-44-2333",
      href: "tel:0887442333",
    },
    mapPriority: true,
  },
];
