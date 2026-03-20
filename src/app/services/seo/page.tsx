"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { StatsCounter } from "@/components/animations/StatsCounter";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const checklistItems = [
  "ტექნიკური აუდიტი",
  "საიტის სიჩქარის ოპტიმიზაცია",
  "მეტა ტეგების ოპტიმიზაცია",
  "XML საიტმაპის კონფიგურაცია",
  "მობილური ადაპტაცია",
  "სტრუქტურირებული მონაცემები (Schema)",
  "შიდა ბმულების ოპტიმიზაცია",
  "კონტენტ სტრატეგია",
  "საკვანძო სიტყვების კვლევა",
  "ბექლინკების აუდიტი",
  "Google Search Console-ის კონფიგურაცია",
  "Core Web Vitals ოპტიმიზაცია",
  "კონკურენტების ანალიზი",
];

const metrics = [
  {
    label: "ორგანული ტრაფიკი",
    before: "1,200",
    afterValue: 8500,
    suffix: "",
    percent: 85,
  },
  {
    label: "საკვანძო სიტყვების პოზიციები",
    before: "45",
    afterValue: 320,
    suffix: "+",
    percent: 92,
  },
  {
    label: "კონვერსიის მაჩვენებელი",
    before: "1.2%",
    afterValue: 4,
    suffix: ".8%",
    percent: 75,
  },
];

const faqItems = [
  {
    id: 1,
    title: "რა არის SEO და რატომ არის მნიშვნელოვანი?",
    content:
      "SEO (Search Engine Optimization) არის ვებსაიტის ოპტიმიზაციის პროცესი საძიებო სისტემებისთვის. კარგი SEO ზრდის თქვენი საიტის ხილვადობას Google-ში, რაც მეტ ორგანულ ტრაფიკს და პოტენციურ კლიენტებს მოიტანს.",
  },
  {
    id: 2,
    title: "რამდენი ხანი სჭირდება SEO-ს შედეგების მიღებას?",
    content:
      "SEO გრძელვადიანი სტრატეგიაა. პირველი შედეგები ჩვეულებრივ 2-3 თვეში ჩანს, ხოლო მნიშვნელოვანი ზრდა 4-6 თვეში. კონკურენტული ნიშებისთვის შესაძლოა 6-12 თვე დასჭირდეს.",
  },
  {
    id: 3,
    title: "რა განსხვავებაა ორგანულ და ფასიან ტრაფიკს შორის?",
    content:
      "ორგანული ტრაფიკი მოდის საძიებო შედეგებიდან უფასოდ და გრძელვადიანია, ხოლო ფასიანი ტრაფიკი (Google Ads) მოითხოვს მუდმივ ინვესტიციას. SEO უზრუნველყოფს სტაბილურ, უფასო ტრაფიკს დროთა განმავლობაში.",
  },
  {
    id: 4,
    title: "აკეთებთ თუ არა ლოკალურ SEO-ს?",
    content:
      "დიახ, ლოკალური SEO ჩვენი ერთ-ერთი ძლიერი მხარეა. ვმუშაობთ Google Business Profile-ის ოპტიმიზაციაზე, ლოკალურ ციტირებებზე და გეოგრაფიულად მიზნობრივ კონტენტზე.",
  },
  {
    id: 5,
    title: "როგორ ზომავთ SEO-ს წარმატებას?",
    content:
      "ვიყენებთ Google Analytics, Search Console და სპეციალიზებულ ინსტრუმენტებს. ვაკვირდებით ორგანულ ტრაფიკს, საკვანძო სიტყვების პოზიციებს, კონვერსიის მაჩვენებელს და Domain Authority-ს.",
  },
  {
    id: 6,
    title: "რა ღირს SEO სერვისი?",
    content:
      "ფასი დამოკიდებულია პროექტის მოცულობაზე, კონკურენციის დონეზე და მიზნებზე. გთავაზობთ ყოველთვიურ პაკეტებს, რომლებიც მორგებულია თქვენი ბიზნესის საჭიროებებზე. საწყისი აუდიტი უფასოა.",
  },
  {
    id: 7,
    title: "შეუძლია თუ არა SEO-ს ზიანის მოტანა საიტს?",
    content:
      'არასწორმა SEO პრაქტიკამ (ე.წ. "Black Hat SEO") შეიძლება გამოიწვიოს Google-ის სანქციები. ჩვენ ვიყენებთ მხოლოდ ეთიკურ, "White Hat" მეთოდებს, რომლებიც შეესაბამება Google-ის გაიდლაინებს.',
  },
];

export default function SeoPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <nav className="mb-6 text-sm text-[var(--c-fg-muted)]">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--c-accent)]"
              >
                მთავარი
              </Link>
              {" / "}
              <Link
                href="/services"
                className="transition-colors hover:text-[var(--c-accent)]"
              >
                სერვისები
              </Link>
              {" / "}
              <span className="text-[var(--c-fg)]">SEO ოპტიმიზაცია</span>
            </nav>
          </ScrollReveal>

          <TextReveal
            text="SEO ოპტიმიზაცია"
            as="h1"
            className="text-4xl font-bold tracking-tight md:text-6xl"
          />

          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--c-fg-muted)]">
              გაზარდეთ თქვენი საიტის ხილვადობა საძიებო სისტემებში და მოიზიდეთ
              მეტი ორგანული ტრაფიკი მონაცემებზე დაფუძნებული SEO სტრატეგიით.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Checklist */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              SEO ჩეკლისტი
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {checklistItems.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06} direction="up">
                <div className="flex items-center gap-4 rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-5 py-4 transition-colors hover:border-[var(--c-accent)]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--c-accent)] text-xs font-bold text-white">
                    &#10003;
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
              რეალური შედეგები
            </h2>
          </ScrollReveal>

          <div className="grid gap-12 md:grid-cols-3">
            {metrics.map((metric, i) => (
              <ScrollReveal key={metric.label} delay={i * 0.15}>
                <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-[var(--c-fg-muted)]">
                    {metric.label}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-4">
                    <span className="text-2xl font-light text-[var(--c-fg-muted)] line-through">
                      {metric.before}
                    </span>
                    <span className="text-[var(--c-fg-muted)]">&rarr;</span>
                    <StatsCounter
                      value={metric.afterValue}
                      suffix={metric.suffix}
                      label=""
                      className="[&>p]:hidden"
                    />
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--c-border)]">
                      <ScrollReveal>
                        <div
                          className="h-full rounded-full bg-[var(--c-accent)] transition-all duration-1000"
                          style={{ width: `${metric.percent}%` }}
                        />
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
              ხშირად დასმული კითხვები
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Accordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              მზად ხართ ტრაფიკის გაზრდისთვის?
            </h2>
            <p className="mt-4 text-[var(--c-fg-muted)]">
              მიიღეთ უფასო SEO აუდიტი და გაიგეთ, რა პოტენციალი აქვს თქვენს
              საიტს.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                დაგვიკავშირდით
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
