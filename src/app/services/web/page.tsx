"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const pillars = [
  {
    title: "Frontend",
    description:
      "თანამედროვე, რესპონსიული და ინტერაქტიული ინტერფეისების შექმნა React, Next.js და Vue ტექნოლოგიებით. ყურადღება UX/UI დეტალებზე, ანიმაციებსა და წვდომადობაზე.",
  },
  {
    title: "Backend",
    description:
      "საიმედო და მასშტაბირებადი სერვერული არქიტექტურა Laravel, Node.js და WordPress პლატფორმებზე. API დიზაინი, მონაცემთა ბაზის ოპტიმიზაცია და უსაფრთხოება.",
  },
  {
    title: "ინფრასტრუქტურა",
    description:
      "Cloud ჰოსტინგი, CI/CD პაიპლაინები, Docker კონტეინერიზაცია და მონიტორინგი. თქვენი პროექტის სტაბილური მუშაობა და სწრაფი განახლება.",
  },
];

const processSteps = [
  {
    title: "კონსულტაცია",
    description:
      "ვისმენთ თქვენს იდეას, ვაანალიზებთ ბიზნეს მოთხოვნებს და ვადგენთ პროექტის ჩარჩოს.",
  },
  {
    title: "დაგეგმვა",
    description:
      "ვქმნით დეტალურ ტექნიკურ სპეციფიკაციას, ვირჩევთ ტექნოლოგიურ სტეკს და ვადგენთ ვადებს.",
  },
  {
    title: "დიზაინი",
    description:
      "UI/UX პროტოტიპის შექმნა, ვიზუალური კონცეფციის დამტკიცება და დიზაინ სისტემის აგება.",
  },
  {
    title: "დეველოპმენტი",
    description:
      "აგილე მეთოდოლოგიით კოდის წერა, რეგულარული დემოები და უწყვეტი ინტეგრაცია.",
  },
  {
    title: "გაშვება",
    description:
      "ტესტირება, ოპტიმიზაცია, deploy და პოსტ-გაშვების მხარდაჭერა პირველი თვის განმავლობაში.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "Vue",
  "Laravel",
  "WordPress",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
];

const faqItems = [
  {
    id: 1,
    title: "რამდენი ხანი სჭირდება ვებსაიტის შექმნას?",
    content:
      "პროექტის სირთულიდან გამომდინარე, სტანდარტული ვებსაიტი 2-4 კვირაში მზადდება, ხოლო რთული ვებ აპლიკაცია 2-4 თვეს მოითხოვს. ზუსტ ვადებს კონსულტაციის ეტაპზე განვსაზღვრავთ.",
  },
  {
    id: 2,
    title: "რა ტექნოლოგიებს იყენებთ?",
    content:
      "ვიყენებთ თანამედროვე ტექნოლოგიებს: React, Next.js, Vue.js ფრონტენდისთვის, Laravel და Node.js ბექენდისთვის, PostgreSQL მონაცემთა ბაზისთვის. ტექნოლოგიის არჩევანი პროექტის მოთხოვნებზეა დამოკიდებული.",
  },
  {
    id: 3,
    title: "შესაძლებელია არსებული საიტის რედიზაინი?",
    content:
      "რა თქმა უნდა. ვაკეთებთ როგორც სრულ რედიზაინს, ასევე ეტაპობრივ მოდერნიზაციას. არსებული კონტენტი და SEO პოზიციები შენარჩუნდება მიგრაციის პროცესში.",
  },
  {
    id: 4,
    title: "რა ღირს ვებ დეველოპმენტის სერვისი?",
    content:
      "ფასი დამოკიდებულია პროექტის მოცულობაზე, ფუნქციონალზე და ვადებზე. საწყისი კონსულტაცია უფასოა — დაგვიკავშირდით და მოგაწვდით ინდივიდუალურ შეფასებას.",
  },
  {
    id: 5,
    title: "უზრუნველყოფთ თუ არა ჰოსტინგს?",
    content:
      "დიახ, გთავაზობთ მართულ ჰოსტინგს AWS და სხვა cloud პლატფორმებზე. ასევე ვუზრუნველყოფთ SSL სერტიფიკატს, ბექაპებს და 99.9% uptime გარანტიას.",
  },
  {
    id: 6,
    title: "გაქვთ თუ არა მხარდაჭერის პაკეტები?",
    content:
      "გვაქვს სხვადასხვა მხარდაჭერის გეგმა, რომელიც მოიცავს რეგულარულ განახლებებს, უსაფრთხოების მონიტორინგს, ბექაპებს და ტექნიკურ კონსულტაციას. დეტალებისთვის იხილეთ მხარდაჭერის გვერდი.",
  },
];

function ProcessTimeline() {
  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--c-border)]" />

      {processSteps.map((step, i) => (
        <TimelineStep key={i} step={step} index={i} />
      ))}
    </div>
  );
}

function TimelineStep({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Step number */}
      <motion.div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2 text-sm font-bold"
        animate={
          isInView
            ? {
                borderColor: "var(--c-accent)",
                backgroundColor: "var(--c-accent)",
                color: "#fff",
              }
            : {
                borderColor: "var(--c-border)",
                backgroundColor: "transparent",
                color: "var(--c-fg-muted)",
              }
        }
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      >
        {index + 1}
      </motion.div>

      {/* Content */}
      <div className="pt-2">
        <h3 className="text-lg font-semibold">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--c-fg-muted)]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WebDevelopmentPage() {
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
              <span className="text-[var(--c-fg)]">ვებ დეველოპმენტი</span>
            </nav>
          </ScrollReveal>

          <TextReveal
            text="ვებ დეველოპმენტი"
            as="h1"
            className="text-4xl font-bold tracking-tight md:text-6xl"
          />

          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--c-fg-muted)]">
              ვქმნით თანამედროვე, სწრაფ და მასშტაბირებად ვებ გადაწყვეტილებებს,
              რომლებიც თქვენს ბიზნესს ზრდის ახალ შესაძლებლობებს აძლევს.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-0 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal
              key={pillar.title}
              delay={i * 0.15}
              className="relative px-6 py-8 md:px-8 md:py-10"
            >
              {/* Decorative divider */}
              {i > 0 && (
                <div className="absolute left-0 top-6 bottom-6 hidden w-px bg-[var(--c-border)] md:block" />
              )}
              {i > 0 && (
                <div className="absolute left-6 right-6 top-0 h-px bg-[var(--c-border)] md:hidden" />
              )}

              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--c-fg-muted)]">
                {pillar.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
              სამუშაო პროცესი
            </h2>
          </ScrollReveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
              ტექნოლოგიები
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-[var(--c-border)] bg-[var(--c-surface)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
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
              მზად ხართ პროექტის დასაწყებად?
            </h2>
            <p className="mt-4 text-[var(--c-fg-muted)]">
              დაგვიკავშირდით და ერთად შევქმნით თქვენი ბიზნესისთვის იდეალური ვებ
              გადაწყვეტილება.
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
