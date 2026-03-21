// ──────────────────────────────────────────
// Service overview cards (homepage / services index)
// ──────────────────────────────────────────

export interface ServiceOverview {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export const services: ServiceOverview[] = [
  {
    icon: "Code",
    title: "ვებ დეველოპმენტი",
    description:
      "თანამედროვე, სწრაფი და მობილურზე ადაპტირებული ვებსაიტების შექმნა WordPress, React, Vue.js და Laravel ტექნოლოგიებით.",
    href: "/services/web",
  },
  {
    icon: "Bot",
    title: "AI ავტომატიზაცია",
    description:
      "ჩატბოტები, ბიზნეს პროცესების ავტომატიზაცია, კონტენტის გენერაცია და მონაცემთა ანალიტიკა ხელოვნური ინტელექტის ტექნოლოგიებით.",
    href: "/services/ai",
  },
  {
    icon: "Search",
    title: "SEO ოპტიმიზაცია",
    description:
      "Google-ში თქვენი საიტის პოზიციების გაუმჯობესება ტექნიკური SEO, კონტენტ-სტრატეგიისა და ლინკ-ბილდინგის მეშვეობით.",
    href: "/services/seo",
  },
  {
    icon: "Wrench",
    title: "ტექნიკური მხარდაჭერა",
    description:
      "საიტის უწყვეტი მუშაობის უზრუნველყოფა: განახლებები, backup-ები, უსაფრთხოება და სწრაფი რეაგირება პრობლემებზე.",
    href: "/services/support",
  },
  {
    icon: "Palette",
    title: "UI/UX დიზაინი",
    description:
      "მომხმარებლისთვის მოხერხებული, ვიზუალურად მიმზიდველი ინტერფეისების დაპროექტება Figma-ში პროტოტიპირებითა და ტესტირებით.",
    href: "/services/design",
  },
  {
    icon: "Smartphone",
    title: "მობილური აპლიკაციები",
    description:
      "iOS და Android აპლიკაციების შექმნა React Native-ით — ერთი კოდბაზა, ორი პლატფორმა, ნატივური წარმადობა.",
    href: "/services/mobile",
  },
  {
    icon: "BarChart3",
    title: "ციფრული მარკეტინგი",
    description:
      "Google Ads, სოციალური მედია, email მარკეტინგი და ანალიტიკა — ყოველმხრივი ციფრული სტრატეგია თქვენი ბიზნესის ზრდისთვის.",
    href: "/services/marketing",
  },
];

// ──────────────────────────────────────────
// /services/web — Web Development detail
// ──────────────────────────────────────────

export interface Pillar {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface WebServiceDetail {
  pillars: Pillar[];
  process: ProcessStep[];
  techStack: string[];
}

export const webServiceDetail: WebServiceDetail = {
  pillars: [
    {
      title: "წარმადობა",
      description:
        "ყველა საიტი ოპტიმიზირებულია სიჩქარისთვის: lazy loading, კოდის splitting, CDN და სერვერის ოპტიმიზაცია. მიზანი — Lighthouse 90+ ქულა მობილურზეც.",
    },
    {
      title: "უსაფრთხოება",
      description:
        "SSL, firewall, რეგულარული განახლებები, SQL injection და XSS დაცვა, ავტომატური backup-ები — უსაფრთხოება ჩვენთვის პრიორიტეტია ყველა პროექტში.",
    },
    {
      title: "მასშტაბურობა",
      description:
        "არქიტექტურა თავიდანვე იქმნება ზრდის გათვალისწინებით. მონაცემთა ბაზის ოპტიმიზაცია, caching სტრატეგია და მოდულური კოდი უზრუნველყოფს საიტის სტაბილურობას ტრაფიკის ზრდისას.",
    },
  ],
  process: [
    {
      title: "კონსულტაცია და ანალიზი",
      description:
        "ვაანალიზებთ თქვენი ბიზნესის მოთხოვნებს, სამიზნე აუდიტორიას და კონკურენტულ გარემოს. ვადგენთ ტექნიკურ სპეციფიკაციას და პროექტის გეგმას.",
    },
    {
      title: "დიზაინი და პროტოტიპი",
      description:
        "Figma-ში ვქმნით wireframe-ებსა და ვიზუალურ დიზაინს. ინტერაქტიული პროტოტიპი საშუალებას გაძლევთ ნახოთ საბოლოო შედეგი დეველოპმენტის დაწყებამდე.",
    },
    {
      title: "დეველოპმენტი",
      description:
        "Agile მეთოდოლოგიით ვაშენებთ საიტს სპრინტებად. ყოველი სპრინტის ბოლოს ხედავთ პროგრესს და შეგიძლიათ უკუკავშირის მიწოდება.",
    },
    {
      title: "ტესტირება და QA",
      description:
        "ვტესტავთ ყველა ბრაუზერსა და მოწყობილობაზე: ფუნქციონალური ტესტები, წარმადობის ტესტები, უსაფრთხოების სკანირება და accessibility შემოწმება.",
    },
    {
      title: "გაშვება და მხარდაჭერა",
      description:
        "საიტის გაშვება მოიცავს სერვერის კონფიგურაციას, DNS-ის გადამისამართებას, SSL-ის დაყენებას და ანალიტიკის ინტეგრაციას. გაშვების შემდეგ ვრჩებით მხარდაჭერისთვის.",
    },
  ],
  techStack: [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Astro",
    "TypeScript",
    "Tailwind CSS",
    "WordPress",
    "WooCommerce",
    "Laravel",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
    "Vercel",
  ],
};

// ──────────────────────────────────────────
// /services/seo — SEO detail
// ──────────────────────────────────────────

export interface SeoChecklistItem {
  title: string;
  done: boolean;
}

export interface SeoMetric {
  label: string;
  before: number;
  after: number;
  unit: string;
}

export interface SeoServiceDetail {
  checklist: SeoChecklistItem[];
  metrics: SeoMetric[];
}

export const seoServiceDetail: SeoServiceDetail = {
  checklist: [
    { title: "ტექნიკური SEO აუდიტი", done: true },
    { title: "საკვანძო სიტყვების კვლევა (ქართული + ინგლისური)", done: true },
    { title: "Meta tags ოპტიმიზაცია", done: true },
    { title: "Sitemap.xml და Robots.txt კონფიგურაცია", done: true },
    { title: "სტრუქტურირებული მონაცემები (Schema Markup)", done: true },
    { title: "Core Web Vitals ოპტიმიზაცია", done: true },
    { title: "მობილური ადაპტაციის შემოწმება", done: true },
    { title: "Google My Business ოპტიმიზაცია", done: true },
    { title: "კონტენტ-სტრატეგიის შემუშავება", done: false },
    { title: "ლინკ-ბილდინგი (ხარისხიანი backlinks)", done: false },
    { title: "კონკურენტების მონიტორინგი", done: false },
    { title: "ყოველთვიური ანგარიშგება", done: false },
    { title: "A/B ტესტირება და კონვერსიის ოპტიმიზაცია", done: false },
  ],
  metrics: [
    {
      label: "ორგანული ტრაფიკი",
      before: 1200,
      after: 8500,
      unit: "ვიზიტი/თვე",
    },
    {
      label: "საკვანძო სიტყვების TOP 10",
      before: 5,
      after: 47,
      unit: "სიტყვა",
    },
    {
      label: "Domain Authority",
      before: 12,
      after: 38,
      unit: "DA ქულა",
    },
  ],
};

// ──────────────────────────────────────────
// /services/support — Technical Support detail
// ──────────────────────────────────────────

export interface ServiceBlock {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
}

export interface SupportServiceDetail {
  serviceBlocks: ServiceBlock[];
  pricingTiers: PricingTier[];
}

export const supportServiceDetail: SupportServiceDetail = {
  serviceBlocks: [
    {
      icon: "RefreshCw",
      title: "რეგულარული განახლებები",
      description:
        "WordPress core, თემები, პლაგინები და სერვერის პროგრამული უზრუნველყოფა ყოველთვიურად განახლდება თავსებადობისა და უსაფრთხოების ტესტირებით.",
    },
    {
      icon: "Shield",
      title: "უსაფრთხოების მონიტორინგი",
      description:
        "24/7 malware სკანირება, firewall-ის მართვა, ლოგინის მცდელობების მონიტორინგი და დროული რეაგირება უსაფრთხოების ინციდენტებზე.",
    },
    {
      icon: "Database",
      title: "ავტომატური Backup-ები",
      description:
        "ყოველდღიური ავტომატური backup-ები ფაილებისა და მონაცემთა ბაზისთვის. ბოლო 30 დღის არქივი და მყისიერი აღდგენის შესაძლებლობა.",
    },
    {
      icon: "Activity",
      title: "Uptime მონიტორინგი",
      description:
        "საიტის ხელმისაწვდომობის 24/7 მონიტორინგი 1-წუთიანი ინტერვალით. გათიშვის შემთხვევაში ავტომატური შეტყობინება და სწრაფი რეაგირება.",
    },
    {
      icon: "Zap",
      title: "წარმადობის ოპტიმიზაცია",
      description:
        "სიჩქარის რეგულარული აუდიტი, caching-ის კონფიგურაცია, მონაცემთა ბაზის ოპტიმიზაცია და CDN-ის მართვა საიტის მაქსიმალური სისწრაფისთვის.",
    },
    {
      icon: "HeadphonesIcon",
      title: "ტექნიკური კონსულტაცია",
      description:
        "ახალი ფუნქციების დაგეგმვა, ტექნოლოგიური რჩევები, ინტეგრაციების კონსულტაცია — ჩვენ თქვენი ტექნიკური პარტნიორი ვართ.",
    },
  ],
  pricingTiers: [
    {
      name: "ბაზისური",
      price: "150 ₾/თვე",
      features: [
        "ყოველთვიური განახლებები",
        "ყოველდღიური backup-ები",
        "SSL სერტიფიკატის მართვა",
        "Uptime მონიტორინგი",
        "ელ.ფოსტით მხარდაჭერა",
        "თვეში 1 საათი მცირე ცვლილებები",
      ],
      recommended: false,
    },
    {
      name: "სტანდარტული",
      price: "300 ₾/თვე",
      features: [
        "ყველაფერი ბაზისურიდან",
        "უსაფრთხოების მონიტორინგი",
        "წარმადობის ოპტიმიზაცია",
        "თვეში 3 საათი ცვლილებები",
        "24-საათიანი რეაგირება",
        "ყოველთვიური ანგარიში",
      ],
      recommended: true,
    },
    {
      name: "პრემიუმი",
      price: "400 ₾/თვე",
      features: [
        "ყველაფერი სტანდარტულიდან",
        "SEO მონიტორინგი",
        "თვეში 5 საათი ცვლილებები",
        "პრიორიტეტული მხარდაჭერა",
        "30-წუთიანი რეაგირება",
        "ტელეფონით მხარდაჭერა",
        "კვარტალური სტრატეგიული შეხვედრა",
      ],
      recommended: false,
    },
  ],
};
