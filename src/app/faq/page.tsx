"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

type Category = "all" | "general" | "pricing" | "technical";

interface FaqItem {
  id: number;
  title: string;
  content: string;
  category: "general" | "pricing" | "technical";
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    title: "რა სერვისებს სთავაზობთ კლიენტებს?",
    content:
      "ჩვენ ვთავაზობთ ციფრული მარკეტინგის, ვებ-დიზაინის, ბრენდინგის, SEO ოპტიმიზაციის, სოციალური მედიის მართვისა და მობილური აპლიკაციების შექმნის სერვისებს.",
    category: "general",
  },
  {
    id: 2,
    title: "რამდენი ხანი სჭირდება ვებსაიტის შექმნას?",
    content:
      "პროექტის მასშტაბიდან გამომდინარე, სტანდარტული ვებსაიტის შექმნას 4-8 კვირა სჭირდება. კომპლექსური პროექტები 3-6 თვემდე შეიძლება გაგრძელდეს.",
    category: "general",
  },
  {
    id: 3,
    title: "რა ღირს ვებსაიტის დამზადება?",
    content:
      "ფასი დამოკიდებულია პროექტის სირთულესა და მოთხოვნებზე. სავიზიტო ვებსაიტი იწყება 2,000 ლარიდან, ხოლო ინტერნეტ-მაღაზია — 5,000 ლარიდან. დეტალური შეფასებისთვის დაგვიკავშირდით.",
    category: "pricing",
  },
  {
    id: 4,
    title: "რა ტექნოლოგიებს იყენებთ?",
    content:
      "ჩვენ ვიყენებთ თანამედროვე ტექნოლოგიებს: React, Next.js, Vue.js, Laravel, WordPress, ასევე მობილურისთვის React Native და Flutter. ტექნოლოგიის არჩევა ხდება პროექტის სპეციფიკიდან გამომდინარე.",
    category: "technical",
  },
  {
    id: 5,
    title: "გთავაზობთ თუ არა უფასო კონსულტაციას?",
    content:
      "დიახ, პირველი კონსულტაცია უფასოა. ჩვენ განვიხილავთ თქვენს საჭიროებებს, მიზნებს და შევთავაზებთ ოპტიმალურ გადაწყვეტილებას.",
    category: "general",
  },
  {
    id: 6,
    title: "არის თუ არა შესაძლებელი განვადებით გადახდა?",
    content:
      "დიახ, ჩვენ ვთავაზობთ მოქნილ გადახდის პირობებს. პროექტი ჩვეულებრივ იყოფა ეტაპებად და გადახდა ხდება ეტაპობრივად. ასევე შესაძლებელია ბანკის განვადება.",
    category: "pricing",
  },
  {
    id: 7,
    title: "რა ხდება პროექტის დასრულების შემდეგ?",
    content:
      "პროექტის დასრულების შემდეგ ვთავაზობთ მხარდაჭერის სხვადასხვა პაკეტს, რომელიც მოიცავს ტექნიკურ სუპორტს, კონტენტის განახლებას და უსაფრთხოების მონიტორინგს.",
    category: "general",
  },
  {
    id: 8,
    title: "შეგიძლიათ არსებული ვებსაიტის რედიზაინი?",
    content:
      "რა თქმა უნდა. ჩვენ ვაფასებთ არსებულ საიტს, ვაანალიზებთ მომხმარებლის ქცევას და ვქმნით თანამედროვე, ეფექტურ დიზაინს, ამასთან ვინარჩუნებთ SEO პოზიციებს.",
    category: "general",
  },
  {
    id: 9,
    title: "რა ღირს SEO ოპტიმიზაცია?",
    content:
      "SEO პაკეტები იწყება თვეში 500 ლარიდან. ფასი დამოკიდებულია ინდუსტრიის კონკურენტულობასა და საკვანძო სიტყვების რაოდენობაზე. შედეგები ჩვეულებრივ 3-6 თვეში ჩანს.",
    category: "pricing",
  },
  {
    id: 10,
    title: "რომელ CMS პლატფორმას გირჩევთ?",
    content:
      "პლატფორმის არჩევა დამოკიდებულია პროექტის მოთხოვნებზე. WordPress შესანიშნავია ბლოგებისა და კორპორატიული საიტებისთვის, Shopify — ე-კომერციისთვის, ხოლო custom გადაწყვეტილებები — უნიკალური მოთხოვნებისთვის.",
    category: "technical",
  },
  {
    id: 11,
    title: "უზრუნველყოფთ თუ არა ჰოსტინგს?",
    content:
      "დიახ, ჩვენ ვთავაზობთ მაღალხარისხიან ჰოსტინგს სწრაფი სერვერებით, SSL სერტიფიკატით, ავტომატური ბექაპებითა და 99.9% uptime გარანტიით.",
    category: "technical",
  },
  {
    id: 12,
    title: "რამდენია სოციალური მედიის მართვის ფასი?",
    content:
      "სოციალური მედიის მართვის პაკეტები იწყება თვეში 800 ლარიდან და მოიცავს კონტენტის შექმნას, პუბლიკაციების დაგეგმვას, კომუნიკაციის მართვას და ანგარიშგებას.",
    category: "pricing",
  },
  {
    id: 13,
    title: "როგორ მიმდინარეობს პროექტზე მუშაობა?",
    content:
      "ჩვენი პროცესი მოიცავს: ბრიფინგი და კვლევა, სტრატეგიის შემუშავება, დიზაინი და პროტოტიპი, დეველოპმენტი, ტესტირება და გაშვება. ყოველ ეტაპზე კლიენტი აქტიურად არის ჩართული.",
    category: "general",
  },
  {
    id: 14,
    title: "შეგიძლიათ API ინტეგრაციების განხორციელება?",
    content:
      "დიახ, ჩვენ გვაქვს გამოცდილება სხვადასხვა API-ს ინტეგრაციაში: გადახდის სისტემები (BOG, TBC), CRM, ERP, სოციალური ქსელები, საფოსტო სერვისები და სხვა.",
    category: "technical",
  },
  {
    id: 15,
    title: "რა ღირს მობილური აპლიკაციის შექმნა?",
    content:
      "მარტივი მობილური აპლიკაცია იწყება 8,000 ლარიდან. კომპლექსური აპლიკაციები, რომლებიც მოიცავს backend-ს, შეიძლება 20,000-50,000 ლარი ღირდეს პროექტის მასშტაბიდან გამომდინარე.",
    category: "pricing",
  },
  {
    id: 16,
    title: "რამდენად უსაფრთხოა თქვენ მიერ შექმნილი ვებსაიტები?",
    content:
      "უსაფრთხოება ჩვენი პრიორიტეტია. ვიყენებთ SSL/TLS დაშიფვრას, ავტორიზაციის უსაფრთხო მეთოდებს, SQL injection-ისა და XSS-ის პრევენციას, რეგულარულ განახლებებსა და მონიტორინგს.",
    category: "technical",
  },
  {
    id: 17,
    title: "მოიცავს თუ არა ფასი კონტენტის შექმნას?",
    content:
      "სტანდარტული პაკეტი მოიცავს საიტის სტრუქტურის და UX ტექსტების შექმნას. დამატებითი კონტენტი — ბლოგ-პოსტები, ფოტოგრაფია, ვიდეო — ცალკე ფასდება.",
    category: "pricing",
  },
  {
    id: 18,
    title: "მუშაობთ თუ არა საერთაშორისო კლიენტებთან?",
    content:
      "დიახ, ჩვენ გვაქვს საერთაშორისო გამოცდილება და ვმუშაობთ კლიენტებთან ევროპიდან, აზიიდან და ჩრდილოეთ ამერიკიდან. კომუნიკაცია შესაძლებელია ქართულ, ინგლისურ და რუსულ ენებზე.",
    category: "general",
  },
  {
    id: 19,
    title: "რა ბრაუზერებს და მოწყობილობებს უჭერს მხარს ვებსაიტი?",
    content:
      "ყველა ჩვენ მიერ შექმნილი ვებსაიტი არის სრულად რესპონსიული და მუშაობს ყველა თანამედროვე ბრაუზერში: Chrome, Firefox, Safari, Edge — როგორც დესკტოპზე, ასევე მობილურ მოწყობილობებზე.",
    category: "technical",
  },
  {
    id: 20,
    title: "არის თუ არა დამატებითი ხარჯები პროექტის დასრულების შემდეგ?",
    content:
      "დომენის და ჰოსტინგის გადასახადი ყოველწლიურია. მხარდაჭერის პაკეტი ოფციონალურია. ჩვენ წინასწარ გაცნობებთ ყველა შესაძლო ხარჯს, რომ მოულოდნელი გადასახადები არ შეგხვდეთ.",
    category: "pricing",
  },
];

const categoryTabs = [
  { value: "all", label: "ყველა" },
  { value: "general", label: "ზოგადი" },
  { value: "pricing", label: "ფასები" },
  { value: "technical", label: "ტექნიკური" },
];

export default function FaqPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="mx-auto max-w-7xl">
          <TextReveal
            text="ხშირად დასმული კითხვები"
            as="h1"
            splitBy="chars"
            className="text-3xl font-black tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          />
        </div>
      </section>

      {/* Search + Tabs + Accordion */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Search */}
          <ScrollReveal>
            <div className="relative mb-10">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-fg-muted)]"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="მოძებნეთ კითხვა..."
                className="w-full rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] py-3 pl-11 pr-4 text-[16px] text-[var(--c-fg)] placeholder:text-[var(--c-fg-muted)] outline-none transition-colors focus:border-[var(--c-accent)] form-input-hover"
              />
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={0.1}>
            <Tabs
              tabs={categoryTabs}
              defaultValue="all"
              onChange={(v) => setActiveCategory(v as Category)}
              className="mb-8"
            />
          </ScrollReveal>

          {/* FAQ List */}
          <ScrollReveal delay={0.2}>
            {filtered.length > 0 ? (
              <Accordion items={filtered} />
            ) : (
              <p className="py-12 text-center text-[var(--c-fg-muted)]">
                კითხვა ვერ მოიძებნა. სცადეთ სხვა საძიებო სიტყვა.
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <TextReveal
            text="ვერ იპოვეთ პასუხი?"
            as="h2"
            className="justify-center text-2xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-4 text-[var(--c-fg-muted)]">
              დაგვიკავშირდით და ჩვენი გუნდი სიამოვნებით უპასუხებს თქვენს შეკითხვებს.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="filled" size="lg">
                დაგვიკავშირდით
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
