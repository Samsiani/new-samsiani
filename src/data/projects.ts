export type ProjectCategory =
  | "e-commerce"
  | "corporate"
  | "landing"
  | "web-app"
  | "portal"
  | "blog";

export interface Project {
  id: number;
  name: string;
  slug: string;
  category: ProjectCategory;
  year: number;
  description: string;
  techStack: string[];
  externalUrl: string;
  imagePlaceholder: string;
}

export interface ProjectCategoryOption {
  value: "all" | ProjectCategory;
  label: string;
}

export const projectCategories: ProjectCategoryOption[] = [
  { value: "all", label: "ყველა" },
  { value: "e-commerce", label: "ონლაინ მაღაზია" },
  { value: "corporate", label: "კორპორატიული" },
  { value: "landing", label: "ლენდინგი" },
  { value: "web-app", label: "ვებ აპლიკაცია" },
  { value: "portal", label: "პორტალი" },
  { value: "blog", label: "ბლოგი" },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "ონლაინ მაღაზია — GN.ge",
    slug: "gn-ge",
    category: "e-commerce",
    year: 2024,
    description:
      "მულტენოვანი ელექტრონული კომერციის პლატფორმა სრული WooCommerce ინტეგრაციით და მობილური აპლიკაციით.",
    techStack: ["WordPress", "WooCommerce", "React Native", "WPML"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/gn-ge.jpg",
  },
  {
    id: 2,
    name: "კორპორატიული საიტი — TBC ლიზინგი",
    slug: "tbc-leasing",
    category: "corporate",
    year: 2023,
    description:
      "TBC ლიზინგის კორპორატიული ვებსაიტი ონლაინ განაცხადის სისტემით და საკალკულატორო მოდულით.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/tbc-leasing.jpg",
  },
  {
    id: 3,
    name: "სამედიცინო პორტალი — MediHub",
    slug: "medihub",
    category: "portal",
    year: 2023,
    description:
      "ექიმების ჩაწერისა და სამედიცინო ისტორიის მართვის პორტალი პაციენტებისა და კლინიკებისთვის.",
    techStack: ["Vue.js", "Laravel", "MySQL", "Docker"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/medihub.jpg",
  },
  {
    id: 4,
    name: "ონლაინ მაღაზია — VinoShop",
    slug: "vinoshop",
    category: "e-commerce",
    year: 2022,
    description:
      "ქართული ღვინის ონლაინ მაღაზია საერთაშორისო მიწოდებით, ასაკის ვერიფიკაციითა და ღვინის რეკომენდაციის სისტემით.",
    techStack: ["Shopify", "Liquid", "JavaScript", "Stripe"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/vinoshop.jpg",
  },
  {
    id: 5,
    name: "ლენდინგი — Capex Credit",
    slug: "capex-credit",
    category: "landing",
    year: 2024,
    description:
      "საკრედიტო კომპანიის ლენდინგ გვერდი ონლაინ სესხის განაცხადის ფორმით და CreditInfo SSO ინტეგრაციით.",
    techStack: ["WordPress", "PHP", "JavaScript", "REST API"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/capex-credit.jpg",
  },
  {
    id: 6,
    name: "CRM სისტემა — AutoDeal",
    slug: "autodeal-crm",
    category: "web-app",
    year: 2023,
    description:
      "ავტომობილების დილერის CRM სისტემა გაყიდვების მართვის, ანალიტიკისა და კლიენტების ბაზის ფუნქციონალით.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/autodeal-crm.jpg",
  },
  {
    id: 7,
    name: "კორპორატიული საიტი — Georgian Airways",
    slug: "georgian-airways",
    category: "corporate",
    year: 2022,
    description:
      "ავიაკომპანიის კორპორატიული ვებსაიტი ბილეთების ძიებისა და ონლაინ ჩექ-ინის ინტეგრაციით.",
    techStack: ["Nuxt.js", "Vuetify", "REST API", "Redis"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/georgian-airways.jpg",
  },
  {
    id: 8,
    name: "ბლოგ-პლატფორმა — LitGeo",
    slug: "litgeo",
    category: "blog",
    year: 2021,
    description:
      "ქართული ლიტერატურის ბლოგ-პლატფორმა ავტორების პროფილებითა და წიგნების მიმოხილვის სისტემით.",
    techStack: ["WordPress", "Gutenberg", "PHP", "MySQL"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/litgeo.jpg",
  },
  {
    id: 9,
    name: "ონლაინ მაღაზია — TechZone",
    slug: "techzone",
    category: "e-commerce",
    year: 2021,
    description:
      "ტექნიკის ონლაინ მაღაზია პროდუქტის შედარების ფუნქციითა და განვადების ინტეგრაციით.",
    techStack: ["WooCommerce", "PHP", "jQuery", "TBC Pay"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/techzone.jpg",
  },
  {
    id: 10,
    name: "ლენდინგი — Mountain Trails",
    slug: "mountain-trails",
    category: "landing",
    year: 2020,
    description:
      "სამოგზაურო კომპანიის ლენდინგ გვერდი ტურების დაჯავშნის სისტემით და ინტერაქტიული რუკით.",
    techStack: ["Astro", "TypeScript", "Mapbox", "Netlify"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/mountain-trails.jpg",
  },
  {
    id: 11,
    name: "საგანმანათლებლო პორტალი — EduGeorgia",
    slug: "edu-georgia",
    category: "portal",
    year: 2019,
    description:
      "ონლაინ სწავლების პლატფორმა ვიდეო კურსებით, ტესტირებისა და სერტიფიკატების სისტემით.",
    techStack: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/edu-georgia.jpg",
  },
  {
    id: 12,
    name: "უძრავი ქონების პორტალი — HomeFinder",
    slug: "homefinder",
    category: "web-app",
    year: 2018,
    description:
      "უძრავი ქონების ძიების პლატფორმა რუკაზე ფილტრაციით, ფოტო გალერეითა და აგენტების პროფილებით.",
    techStack: ["Angular", "Node.js", "PostgreSQL", "Google Maps API"],
    externalUrl: "#",
    imagePlaceholder: "/images/projects/homefinder.jpg",
  },
];
