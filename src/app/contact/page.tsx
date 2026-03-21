"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Copy, Clock, Facebook, Linkedin } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "web", label: "ვებ დეველოპმენტი" },
  { value: "seo", label: "SEO ოპტიმიზაცია" },
  { value: "support", label: "ტექნიკური მხარდაჭერა" },
  { value: "design", label: "UI/UX დიზაინი" },
  { value: "mobile", label: "მობილური აპლიკაცია" },
  { value: "other", label: "სხვა" },
];

const budgetOptions = [
  { value: "small", label: "₾1,000 - ₾3,000" },
  { value: "medium", label: "₾3,000 - ₾7,000" },
  { value: "large", label: "₾7,000 - ₾15,000" },
  { value: "enterprise", label: "₾15,000+" },
];

const contactInfo = [
  { icon: Phone, label: "ტელეფონი", value: "+995 555 12 34 56", copyValue: "+995555123456" },
  { icon: Mail, label: "ელ-ფოსტა", value: "info@samsiani.com", copyValue: "info@samsiani.com" },
  { icon: MapPin, label: "მისამართი", value: "თბილისი, საქართველო", copyValue: "თბილისი, საქართველო" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "სახელი აუცილებელია";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "სწორი ელ-ფოსტა აუცილებელია";
    if (!form.message.trim()) errs.message = "შეტყობინება აუცილებელია";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast("შეტყობინება წარმატებით გაიგზავნა!", "success");
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    setErrors({});
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("დაკოპირდა!", "success");
  };

  return (
    <div className="pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="mb-16">
          <TextReveal text="მოგვწერეთ" as="h1" className="text-4xl font-black sm:text-5xl md:text-7xl" />
          <p className="mt-4 max-w-lg text-lg text-[var(--c-fg-muted)]">
            გაქვთ პროექტის იდეა? მოგვწერეთ და ერთად შევქმნით თქვენი ბიზნესის ციფრულ სახეს.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[55%_1fr]">
          {/* Form */}
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="სახელი *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  error={errors.name}
                />
                <Input
                  label="ელ-ფოსტა *"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  error={errors.email}
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="ტელეფონი"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Select
                  label="სერვისი"
                  options={serviceOptions}
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                />
              </div>
              <Select
                label="ბიუჯეტი"
                options={budgetOptions}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              />
              <Textarea
                label="შეტყობინება *"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                error={errors.message}
              />
              <Button type="submit" disabled={loading} size="lg">
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin border-2 border-white border-t-transparent" />
                    იგზავნება...
                  </>
                ) : (
                  "გაგზავნა"
                )}
              </Button>
            </form>
          </ScrollReveal>

          {/* Right side */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-8">
              {/* Contact info blocks */}
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 border border-[var(--c-border)] p-5 transition-colors hover:border-[var(--c-accent)]/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[var(--c-accent)]/10">
                    <item.icon size={18} className="text-[var(--c-accent)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-1 font-medium">{item.value}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.copyValue)}
                    className="self-center text-[var(--c-fg-muted)] transition-colors hover:text-[var(--c-accent)] cursor-pointer"
                    aria-label={`Copy ${item.label}`}
                  >
                    <Copy size={14} />
                  </button>
                </div>
              ))}

              {/* Map */}
              <div className="group aspect-[4/3] overflow-hidden bg-[var(--c-bg2)]">
                <img
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
                  alt="თბილისი, საქართველო"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0"
                />
              </div>

              {/* Office hours */}
              <div className="flex items-center gap-3 border border-[var(--c-border)] p-5">
                <Clock size={18} className="text-[var(--c-fg-muted)]" />
                <div>
                  <p className="text-sm font-medium">სამუშაო საათები</p>
                  <p className="text-sm text-[var(--c-fg-muted)]">
                    ორშ — პარ: 10:00 — 19:00
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center border border-[var(--c-border)] transition-colors hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]"
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
