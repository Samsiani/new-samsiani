"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const values = [
  {
    num: "01",
    title: "ინოვაცია",
    description:
      "ჩვენ მუდმივად ვეძებთ ახალ მიდგომებს და ტექნოლოგიებს, რომლებიც ჩვენს კლიენტებს კონკურენტულ უპირატესობას ანიჭებს. ინოვაცია ჩვენი მუშაობის საფუძველია.",
  },
  {
    num: "02",
    title: "ხარისხი",
    description:
      "ყოველი პროექტი გადის ხარისხის მრავალსაფეხურიან კონტროლს. დეტალებზე ყურადღება და სრულყოფილებისკენ სწრაფვა ჩვენი გუნდის განმასხვავებელი ნიშანია.",
  },
  {
    num: "03",
    title: "პარტნიორობა",
    description:
      "ჩვენ ვაშენებთ გრძელვადიან ურთიერთობებს. კლიენტის წარმატება ჩვენი წარმატებაა — ამიტომ ყოველ პროექტს ვეკიდებით როგორც საკუთარ საქმეს.",
  },
];

const milestones = [
  { year: "2015", event: "კომპანიის დაფუძნება და პირველი პროექტების განხორციელება" },
  { year: "2012", event: "გუნდის გაფართოება და ციფრული მარკეტინგის მიმართულების დამატება" },
  { year: "2015", event: "საერთაშორისო პროექტების დაწყება და პარტნიორული ქსელის გაფართოება" },
  { year: "2018", event: "ტექნოლოგიური ტრანსფორმაციის სერვისების გაშვება" },
  { year: "2024", event: "AI-ზე დაფუძნებული გადაწყვეტილებების ინტეგრაცია სერვისებში" },
];

const team = [
  { name: "გიორგი მაისურაძე", role: "აღმასრულებელი დირექტორი", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "ნინო კაპანაძე", role: "კრეატიული დირექტორი", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "დავით ჩხეიძე", role: "ტექნიკური დირექტორი", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6">
        <div className="mx-auto max-w-7xl">
          <TextReveal
            text="ჩვენს შესახებ"
            as="h1"
            splitBy="chars"
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          />
        </div>
      </section>

      {/* Split Story */}
      <section ref={parallaxRef} className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6 text-[var(--c-fg-muted)] leading-relaxed">
              <p>
                სამსიანი 2015 წელს დაარსდა ერთი მარტივი ხედვით — შეექმნა ციფრული
                გადაწყვეტილებები, რომლებიც რეალურ შედეგებს მოიტანს. წლების განმავლობაში
                ჩვენ გავიზარდეთ პატარა სტუდიიდან სრულფასოვან სააგენტოდ, რომელიც
                ასობით ბრენდს ეხმარება ციფრულ სივრცეში წარმატების მიღწევაში.
              </p>
              <p>
                ჩვენი მისია მარტივია: ვაქციოთ რთული ბიზნეს-გამოწვევები ელეგანტურ
                ციფრულ გადაწყვეტილებებად. ვაერთიანებთ სტრატეგიულ აზროვნებას,
                თანამედროვე დიზაინს და მოწინავე ტექნოლოგიებს, რათა შევქმნათ
                პროდუქტები, რომლებიც მომხმარებლებს უყვართ.
              </p>
              <p>
                ჩვენი მიდგომა ეფუძნება თანამშრომლობას. ყოველი პროექტი იწყება
                კლიენტის ბიზნესის ღრმა გაცნობით — მხოლოდ ასე შეგვიძლია შევქმნათ
                ნამდვილად ეფექტური გადაწყვეტილებები, რომლებიც დროის გამოცდას უძლებს.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative overflow-hidden aspect-[3/4] rounded-xl bg-[var(--c-bg2)]">
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="სამსიანის გუნდი სამუშაო პროცესში"
                loading="lazy"
                className="absolute inset-0 h-[120%] w-full object-cover"
                style={{ y: parallaxY }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12">
              ჩვენი ღირებულებები
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-[var(--c-border)]">
            {values.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 0.1}>
                <div className="grid gap-4 py-10 md:grid-cols-[80px_1fr_2fr] md:gap-8 items-start">
                  <span className="text-3xl font-black text-[var(--c-accent)] opacity-40 md:text-5xl">
                    {v.num}
                  </span>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="text-[var(--c-fg-muted)] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-16">
              ჩვენი გზა
            </h2>
          </ScrollReveal>
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="relative flex min-w-max gap-0">
              {/* Connecting line */}
              <div className="absolute top-3 left-3 right-3 h-px bg-[var(--c-border)]" />
              {milestones.map((m, i) => (
                <ScrollReveal
                  key={m.year}
                  delay={i * 0.15}
                  className="relative flex-1 min-w-[180px] pr-8"
                >
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full border-2 border-[var(--c-accent)] bg-[var(--c-bg)] relative z-10" />
                    <p className="mt-4 text-2xl font-black">{m.year}</p>
                    <p className="mt-2 text-sm text-[var(--c-fg-muted)] leading-relaxed max-w-[200px]">
                      {m.event}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12">
              ჩვენი გუნდი
            </h2>
          </ScrollReveal>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <img src={member.img} alt={member.name} loading="lazy" className="w-32 h-32 rounded-full object-cover mb-5" />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-[var(--c-fg-muted)] mt-1">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <TextReveal
            text="მზად ვართ თქვენი იდეისთვის"
            as="h2"
            className="justify-center text-2xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
          />
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
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
