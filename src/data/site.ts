export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  github: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  social: SocialLinks;
  nav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "SAMSIANI",
  description:
    "ვებ დეველოპმენტის სააგენტო, რომელიც ქმნის თანამედროვე, მაღალი ხარისხის ვებსაიტებსა და ციფრულ გადაწყვეტილებებს ქართული და საერთაშორისო ბიზნესებისთვის.",
  address: "თბილისი, საქართველო",
  phone: "+995 555 12 34 56",
  email: "info@samsiani.com",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    github: "#",
  },
  nav: [
    { label: "მთავარი", href: "/" },
    {
      label: "სერვისები",
      href: "/services/web",
      children: [
        { label: "ვებ დეველოპმენტი", href: "/services/web" },
        { label: "SEO ოპტიმიზაცია", href: "/services/seo" },
        { label: "ტექნიკური მხარდაჭერა", href: "/services/support" },
      ],
    },
    { label: "პორტფოლიო", href: "/portfolio" },
    { label: "ბლოგი", href: "/blog" },
    { label: "ჩვენს შესახებ", href: "/about" },
    { label: "კონტაქტი", href: "/contact" },
  ],
};
