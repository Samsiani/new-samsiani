"use client";

import { useState, FormEvent } from "react";
import { Shield, Clock, Server, RefreshCw, BarChart, Headphones } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";
import Link from "next/link";

const services = [
  {
    icon: Shield,
    title: "უსაფრთხოება",
    description:
      "მუდმივი მონიტორინგი, firewall კონფიგურაცია, მავნე კოდის სკანირება და უსაფრთხოების პატჩების დროული ინსტალაცია.",
  },
  {
    icon: Clock,
    title: "24/7 მონიტორინგი",
    description:
      "საიტის ხელმისაწვდომობის უწყვეტი მონიტორინგი, ავტომატური შეტყობინებები და სწრაფი რეაგირება ინციდენტებზე.",
  },
  {
    icon: Server,
    title: "სერვერის მართვა",
    description:
      "ჰოსტინგის ოპტიმიზაცია, სერვერის კონფიგურაცია, მასშტაბირება და რესურსების მონიტორინგი.",
  },
  {
    icon: RefreshCw,
    title: "რეგულარული განახლებები",
    description:
      "CMS, პლაგინების და ბიბლიოთეკების განახლება, თავსებადობის შემოწმება და რეგრესიული ტესტირება.",
  },
  {
    icon: BarChart,
    title: "ანალიტიკა და რეპორტინგი",
    description:
      "ყოველთვიური ანგარიშები საიტის მუშაობის, ტრაფიკის, სიჩქარის და uptime-ის შესახებ.",
  },
  {
    icon: Headphones,
    title: "ტექნიკური დახმარება",
    description:
      "პრიორიტეტული მხარდაჭერა ელ-ფოსტით და ტელეფონით, სწრაფი პრობლემების გადაჭრა და კონსულტაცია.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "199",
    recommended: false,
    features: [
      "ყოველთვიური განახლებები",
      "უსაფრთხოების მონიტორინგი",
      "ყოველკვირეული ბექაპი",
      "ელ-ფოსტით მხარდაჭერა",
      "რეაგირება 24 საათში",
    ],
  },
  {
    name: "Professional",
    price: "499",
    recommended: true,
    features: [
      "ყოველკვირეული განახლებები",
      "24/7 მონიტორინგი",
      "ყოველდღიური ბექაპი",
      "პრიორიტეტული მხარდაჭერა",
      "რეაგირება 4 საათში",
      "სიჩქარის ოპტიმიზაცია",
      "ყოველთვიური ანგარიში",
    ],
  },
  {
    name: "Enterprise",
    price: "999",
    recommended: false,
    features: [
      "რეალ-ტაიმ განახლებები",
      "24/7 მონიტორინგი + ავტო-აღდგენა",
      "რეალ-ტაიმ ბექაპი",
      "გამოყოფილი მენეჯერი",
      "რეაგირება 1 საათში",
      "სიჩქარის ოპტიმიზაცია",
      "ყოველკვირეული ანგარიში",
      "SLA გარანტია 99.9%",
      "კონტენტის განახლება (5სთ/თვე)",
    ],
  },
];

const faqItems = [
  {
    id: 1,
    title: "რა შედის ტექნიკური მხარდაჭერის პაკეტში?",
    content:
      "პაკეტი მოიცავს რეგულარულ განახლებებს, უსაფრთხოების მონიტორინგს, ბექაპებს, სიჩქარის ოპტიმიზაციას და ტექნიკურ კონსულტაციას. კონკრეტული მოცულობა დამოკიდებულია არჩეულ გეგმაზე.",
  },
  {
    id: 2,
    title: "რა ხდება თუ საიტი გათიშვა?",
    content:
      "ჩვენი მონიტორინგის სისტემა ავტომატურად აფიქსირებს გათიშვას და გუნდი დაუყოვნებლივ იწყებს პრობლემის გადაჭრას. Professional და Enterprise გეგმებზე 24/7 მონიტორინგია.",
  },
  {
    id: 3,
    title: "შემიძლია თუ არა გეგმის შეცვლა?",
    content:
      "რა თქმა უნდა. შეგიძლიათ ნებისმიერ დროს გადახვიდეთ უფრო მაღალ ან დაბალ გეგმაზე. ცვლილება ამოქმედდება მომდევნო ბილინგის ციკლიდან.",
  },
  {
    id: 4,
    title: "უზრუნველყოფთ თუ არა WordPress საიტების მხარდაჭერას?",
    content:
      "დიახ, WordPress ჩვენი ერთ-ერთი ძირითადი სპეციალიზაციაა. ვაკეთებთ თემების და პლაგინების განახლებას, უსაფრთხოების გამაგრებას და სიჩქარის ოპტიმიზაციას.",
  },
  {
    id: 5,
    title: "რამდენ საიტს მოიცავს ერთი პაკეტი?",
    content:
      "თითოეული პაკეტი ერთ ვებსაიტზეა გათვლილი. მრავალი საიტისთვის გთავაზობთ სპეციალურ ფასდაკლებას — დაგვიკავშირდით ინდივიდუალური შეთავაზებისთვის.",
  },
  {
    id: 6,
    title: "როგორ ხდება კომუნიკაცია?",
    content:
      "კომუნიკაცია ხდება ელ-ფოსტით, Slack-ით ან ტელეფონით. Enterprise გეგმაზე გამოყოფილი მენეჯერი გყავთ, რომელიც ყოველთვის ხელმისაწვდომია.",
  },
];

function AuditForm() {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [urlError, setUrlError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    let valid = true;
    setUrlError("");
    setEmailError("");

    if (!url.trim()) {
      setUrlError("URL აუცილებელია");
      valid = false;
    } else if (!/^https?:\/\/.+\..+/.test(url.trim())) {
      setUrlError("გთხოვთ შეიყვანოთ სწორი URL");
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("ელ-ფოსტა აუცილებელია");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("გთხოვთ შეიყვანოთ სწორი ელ-ფოსტა");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    toast("თქვენი მოთხოვნა მიღებულია!", "success");
    setUrl("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input
        label="საიტის URL"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        error={urlError}
        placeholder=" "
      />
      <Input
        label="ელ-ფოსტა"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        placeholder=" "
      />
      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading ? "იგზავნება..." : "უფასო აუდიტის მოთხოვნა"}
      </Button>
    </form>
  );
}

export default function SupportPage() {
  const { toast } = useToast();

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
              <span className="text-[var(--c-fg)]">ტექნიკური მხარდაჭერა</span>
            </nav>
          </ScrollReveal>

          <TextReveal
            text="ტექნიკური მხარდაჭერა"
            as="h1"
            className="text-4xl font-bold tracking-tight md:text-6xl"
          />

          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--c-fg-muted)]">
              თქვენი ვებსაიტის უწყვეტი და უსაფრთხო მუშაობა ჩვენი
              პასუხისმგებლობაა. პროაქტიული მხარდაჭერა, რომელიც პრობლემებს
              აღმოფხვრის მანამ, სანამ ისინი წარმოიშობიან.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center text-3xl font-bold tracking-tight md:text-4xl">
              რას მოიცავს მხარდაჭერა
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-7 transition-all duration-300 hover:border-[var(--c-accent)] hover:shadow-lg">
                  <div className="mb-5 inline-flex rounded-lg bg-[var(--c-bg2)] p-3 transition-transform duration-300 group-hover:-translate-y-1">
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

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              ფასები
            </h2>
            <p className="mx-auto mb-14 max-w-xl text-center text-[var(--c-fg-muted)]">
              აირჩიეთ თქვენი ბიზნესისთვის შესაფერისი გეგმა
            </p>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.15}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-6 md:p-8 transition-shadow duration-300 hover:shadow-xl ${
                    tier.recommended
                      ? "border-[var(--c-accent)] bg-[var(--c-accent)]/5 shadow-lg"
                      : "border-[var(--c-border)] bg-[var(--c-surface)]"
                  }`}
                >
                  {tier.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--c-accent)] px-4 py-1 text-xs font-bold text-white">
                      რეკომენდებული
                    </span>
                  )}

                  <h3 className="text-xl font-bold">{tier.name}</h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black">
                      {tier.price}
                    </span>
                    <span className="text-sm text-[var(--c-fg-muted)]">
                      &#8382;/თვე
                    </span>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="mt-0.5 text-[var(--c-accent)]">
                          &#10003;
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      variant={tier.recommended ? "filled" : "outline"}
                      className="w-full"
                      onClick={() =>
                        toast("მალე დაგიკავშირდებით!", "success")
                      }
                    >
                      არჩევა
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Form */}
      <section className="px-6 py-20 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
              უფასო აუდიტი
            </h2>
            <p className="mb-10 text-center text-[var(--c-fg-muted)]">
              შეიყვანეთ თქვენი საიტის მისამართი და მიიღეთ უფასო ტექნიკური
              აუდიტის ანგარიში.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <AuditForm />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
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
      <section className="px-6 py-24 bg-[var(--c-bg2)]">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              მზად ხართ პროექტის დასაწყებად?
            </h2>
            <p className="mt-4 text-[var(--c-fg-muted)]">
              დაგვიკავშირდით და შევარჩიოთ თქვენთვის ოპტიმალური მხარდაჭერის
              გეგმა.
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
