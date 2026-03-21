"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  Bot,
  MessageSquare,
  Workflow,
  Brain,
  Sparkles,
  FileSearch,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "AI ჩატბოტები და ასისტენტები",
    description:
      "ინტელექტუალური ჩატბოტების ინტეგრაცია თქვენს ვებსაიტზე — 24/7 მომხმარებლის მხარდაჭერა, FAQ ავტომატიზაცია, ლიდების გენერაცია და გაყიდვების ასისტენტი.",
    icon: MessageSquare,
  },
  {
    title: "ბიზნეს პროცესების ავტომატიზაცია",
    description:
      "განმეორებადი სამუშაო პროცესების ავტომატიზაცია AI-ით — ელ-ფოსტის დამუშავება, დოკუმენტების ანალიზი, მონაცემთა შეყვანა და ანგარიშგება.",
    icon: Workflow,
  },
  {
    title: "კონტენტის გენერაცია",
    description:
      "AI-ზე დაფუძნებული კონტენტის შექმნა — ბლოგ-პოსტები, პროდუქტის აღწერები, სოციალური მედიის პოსტები, SEO ტექსტები და მარკეტინგული მასალები.",
    icon: Sparkles,
  },
  {
    title: "მონაცემთა ანალიტიკა და ინსაითები",
    description:
      "მომხმარებლის ქცევის ანალიზი, გაყიდვების პროგნოზირება, ტრენდების ამოცნობა და პერსონალიზებული რეკომენდაციების სისტემები.",
    icon: Brain,
  },
  {
    title: "დოკუმენტების ინტელექტუალური დამუშავება",
    description:
      "PDF-ების, ინვოისების, კონტრაქტების ავტომატური წაკითხვა და დამუშავება. OCR + AI კომბინაცია ქართული და ინგლისური ტექსტებისთვის.",
    icon: FileSearch,
  },
  {
    title: "AI ინტეგრაცია არსებულ სისტემებში",
    description:
      "OpenAI, Claude, Gemini და სხვა AI მოდელების ინტეგრაცია თქვენს CRM, ERP ან ვებ აპლიკაციაში. API დიზაინი და ოპტიმიზაცია.",
    icon: Bot,
  },
];

const useCases = [
  {
    industry: "ელ-კომერცია",
    examples: [
      "პროდუქტის რეკომენდაციები მომხმარებლის ქცევის მიხედვით",
      "ავტომატური პროდუქტის აღწერების გენერაცია",
      "ჩატბოტი შეკვეთების სტატუსის ინფორმაციისთვის",
      "ფასების დინამიური ოპტიმიზაცია",
    ],
  },
  {
    industry: "ფინანსები",
    examples: [
      "დოკუმენტების ავტომატური დამუშავება და კლასიფიკაცია",
      "რისკის შეფასების ავტომატიზაცია",
      "კლიენტის მომსახურების ჩატბოტი",
      "ანგარიშგების ავტომატური გენერაცია",
    ],
  },
  {
    industry: "მომსახურება",
    examples: [
      "ჯავშნების და განრიგის ავტომატიზაცია",
      "მომხმარებლის კმაყოფილების ანალიზი",
      "ავტომატური ელ-ფოსტის პასუხები",
      "სოციალური მედიის მართვა AI-ით",
    ],
  },
];

const techStack = [
  "OpenAI API",
  "Claude API",
  "LangChain",
  "Python",
  "Node.js",
  "Vector DB",
  "RAG",
  "Fine-tuning",
  "Whisper",
  "GPT Vision",
];

const faqItems = [
  {
    id: 1,
    title: "რა ღირს AI ინტეგრაციის სერვისი?",
    content:
      "ფასი დამოკიდებულია პროექტის სირთულეზე. მარტივი ჩატბოტის ინტეგრაცია იწყება 1,500 ლარიდან, ხოლო კომპლექსური AI ავტომატიზაციის სისტემა — 5,000 ლარიდან. კონსულტაცია უფასოა.",
  },
  {
    id: 2,
    title: "რამდენ ხანს სჭირდება AI პროექტის განხორციელებას?",
    content:
      "მარტივი ჩატბოტის ინტეგრაცია 1-2 კვირაში ხორციელდება. კომპლექსური ავტომატიზაციის სისტემა 1-3 თვეს მოითხოვს. ზუსტ ვადებს კონსულტაციის ეტაპზე განვსაზღვრავთ.",
  },
  {
    id: 3,
    title: "უსაფრთხოა თუ არა AI სისტემების გამოყენება?",
    content:
      "ჩვენ ვიცავთ მონაცემთა უსაფრთხოების მაღალ სტანდარტებს. მგრძნობიარე მონაცემები არ იგზავნება გარე სერვისებზე შეთანხმების გარეშე, ვიყენებთ დაშიფვრას და წვდომის კონტროლს.",
  },
  {
    id: 4,
    title: "შეიძლება AI არსებულ ვებსაიტში ჩაშენდეს?",
    content:
      "რა თქმა უნდა. AI ფუნქციონალის ინტეგრაცია შესაძლებელია ნებისმიერ ვებსაიტში ან აპლიკაციაში — WordPress, React, Laravel და სხვა პლატფორმებზე. მინიმალური ცვლილებებით დიდ შედეგს მიიღებთ.",
  },
  {
    id: 5,
    title: "რომელ AI მოდელებს იყენებთ?",
    content:
      "ვიყენებთ საუკეთესო მოდელებს კონკრეტული ამოცანისთვის: OpenAI GPT-4o ტექსტისთვის, Claude კომპლექსური ანალიზისთვის, Whisper ხმის ამოცნობისთვის. ტექნოლოგიის არჩევა პროექტის მოთხოვნებზეა დამოკიდებული.",
  },
  {
    id: 6,
    title: "მჭირდება თუ არა ტექნიკური ცოდნა AI სისტემის სამართავად?",
    content:
      "არა. ჩვენ ვქმნით მარტივ ადმინ-პანელებს, სადაც ტექნიკური ცოდნის გარეშე შეძლებთ AI სისტემის მართვას, კონფიგურაციას და მონიტორინგს.",
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: { title: string; description: string };
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
      <motion.div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold"
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
      <div className="pt-2">
        <h3 className="text-lg font-semibold">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--c-fg-muted)]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

const processSteps = [
  {
    title: "ანალიზი",
    description:
      "ვაანალიზებთ თქვენს ბიზნეს პროცესებს და ვპოულობთ ადგილებს, სადაც AI რეალურ სარგებელს მოიტანს.",
  },
  {
    title: "პროტოტიპი",
    description:
      "ვქმნით სწრაფ პროტოტიპს (POC), რომ რეალურ მონაცემებზე შეამოწმოთ AI-ს ეფექტურობა.",
  },
  {
    title: "ინტეგრაცია",
    description:
      "ვაკეთებთ სრულ ინტეგრაციას თქვენს არსებულ სისტემებთან — API, ვებსაიტი, CRM.",
  },
  {
    title: "ოპტიმიზაცია",
    description:
      "ვაანალიზებთ შედეგებს, ვაუმჯობესებთ მოდელის სიზუსტეს და ვამატებთ ახალ ფუნქციებს.",
  },
];

export default function AIServicesPage() {
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
              <span className="text-[var(--c-fg)]">AI სერვისები</span>
            </nav>
          </ScrollReveal>

          <TextReveal
            text="AI ავტომატიზაცია"
            as="h1"
            className="text-4xl font-bold tracking-tight md:text-6xl"
          />

          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--c-fg-muted)]">
              ხელოვნური ინტელექტის ძალა თქვენი ბიზნესისთვის — ავტომატიზაცია,
              ანალიტიკა და ინტელექტუალური გადაწყვეტილებები, რომლებიც დროსა და
              ხარჯებს ზოგავს.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              რას ვთავაზობთ
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08} className="h-full">
                <div className="group h-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-7 transition-all duration-300 hover:border-[var(--c-accent)] hover:shadow-lg">
                  <div className="mb-5 inline-flex rounded-lg bg-[var(--c-bg2)] p-3 transition-colors duration-300 group-hover:bg-[var(--c-accent)]/10">
                    <service.icon
                      size={28}
                      className="text-[var(--c-accent)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--c-fg-muted)]">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              გამოყენების სფეროები
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, i) => (
              <ScrollReveal key={useCase.industry} delay={i * 0.1}>
                <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6">
                  <h3 className="mb-4 text-lg font-bold">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.examples.map((example) => (
                      <li
                        key={example}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--c-fg-muted)]"
                      >
                        <Zap
                          size={14}
                          className="mt-1 shrink-0 text-[var(--c-accent)]"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl">
              სამუშაო პროცესი
            </h2>
          </ScrollReveal>
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--c-border)]" />
            {processSteps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              ტექნოლოგიები
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-center text-[var(--c-fg-muted)]">
              ვიყენებთ წამყვან AI პლატფორმებს და ინსტრუმენტებს
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--c-border)] bg-[var(--c-surface)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why AI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              რატომ AI?
            </h2>
          </ScrollReveal>
          <div className="grid gap-0 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "სიჩქარე",
                description:
                  "AI ამუშავებს მონაცემებს წამებში — რაც ადამიანს საათები დასჭირდებოდა, AI წუთებში აკეთებს.",
              },
              {
                icon: ShieldCheck,
                title: "სიზუსტე",
                description:
                  "ადამიანური შეცდომების ელიმინაცია — AI თანმიმდევრულად ზუსტ შედეგებს იძლევა 24/7 რეჟიმში.",
              },
              {
                icon: Brain,
                title: "მასშტაბირება",
                description:
                  "ზრდის პარალელურად AI სისტემა იზრდება — დამატებითი თანამშრომლების აყვანის გარეშე.",
              },
            ].map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={i * 0.15}
                className="relative px-6 py-8 md:px-8 md:py-10"
              >
                {i > 0 && (
                  <div className="absolute left-0 top-6 bottom-6 hidden w-px bg-[var(--c-border)] md:block" />
                )}
                {i > 0 && (
                  <div className="absolute left-6 right-6 top-0 h-px bg-[var(--c-border)] md:hidden" />
                )}
                <item.icon size={28} className="mb-4 text-[var(--c-accent)]" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--c-fg-muted)]">
                  {item.description}
                </p>
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
              მზად ხართ AI-ს ძალა გამოიყენოთ?
            </h2>
            <p className="mt-4 text-[var(--c-fg-muted)]">
              დაგვიკავშირდით და ერთად განვსაზღვრავთ, სად მოიტანს AI ყველაზე
              მეტ სარგებელს თქვენი ბიზნესისთვის.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                უფასო კონსულტაცია
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
