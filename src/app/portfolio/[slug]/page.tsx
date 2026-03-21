import Link from "next/link";
import { notFound } from "next/navigation";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import wpProjects from "@/data/wp/projects.json";
import wpCategories from "@/data/wp/categories.json";

interface ProjectData {
  name: string;
  slug: string;
  category: string;
  year: number;
  client: string;
  description: string;
  techStack: string[];
  externalUrl: string;
}

const categoryLabelMap: Record<string, string> = Object.fromEntries(
  wpCategories.portfolio.map((c: any) => [c.value, c.label])
);

const PROJECTS: ProjectData[] = wpProjects.map((p: any) => ({
  name: p.name,
  slug: p.slug,
  category: p.categoryLabel || categoryLabelMap[p.category] || p.category || "პროექტი",
  year: p.year ? Number(p.year) : 0,
  client: p.name,
  description: p.description || "",
  techStack: p.techStack || [],
  externalUrl: p.externalUrl || "#",
}));

const PROJECT_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  "gn-ge": {
    hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
  "tbc-corporate": {
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    ],
  },
  "capex-credit": {
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
};

export function generateStaticParams() {
  return wpProjects.map((p: any) => ({ slug: p.slug }));
}

function getProjectIndex(slug: string): number {
  return PROJECTS.findIndex((p) => p.slug === slug);
}

function getPrevNext(slug: string) {
  const idx = getProjectIndex(slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : PROJECTS[PROJECTS.length - 1];
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : PROJECTS[0];
  return { prev, next };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  const { prev, next } = getPrevNext(slug);

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-[var(--c-fg-muted)] transition-colors hover:text-[var(--c-accent)]"
            >
              <ArrowLeft size={14} />
              პორტფოლიო
            </Link>
          </ScrollReveal>

          <TextReveal
            text={project.name}
            as="h1"
            className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
          />

          <ScrollReveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="border border-[var(--c-border)] px-4 py-1.5 text-sm font-medium text-[var(--c-fg-muted)]">
                {project.category}
              </span>
              <span className="text-sm text-[var(--c-fg-muted)]">{project.year}</span>
              {project.externalUrl && project.externalUrl !== "#" && (
                <Button href={project.externalUrl} variant="outline" size="sm">
                  <ExternalLink size={14} />
                  ვებსაიტის ნახვა
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-bleed Screenshot */}
      <section className="px-6 pb-20">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl">
            <div className="aspect-[16/9] overflow-hidden bg-[var(--c-bg2)]">
              <img
                src={PROJECT_IMAGES[slug]?.hero || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1400&q=80"}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Split: Description + Info Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          {/* Left: Description */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="text-2xl font-bold md:text-3xl">პროექტის შესახებ</h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--c-fg-muted)]">
                {project.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Info Grid */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
                    კლიენტი
                  </p>
                  <p className="mt-1 font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
                    წელი
                  </p>
                  <p className="mt-1 font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
                    კატეგორია
                  </p>
                  <p className="mt-1 font-semibold">{project.category}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--c-fg-muted)]">
                    ტექნოლოგიები
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[var(--c-surface)] px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3-Image Gallery */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollReveal className="md:row-span-2">
              <div className="group h-full min-h-[400px] overflow-hidden bg-[var(--c-bg2)]">
                <img src={PROJECT_IMAGES[slug]?.gallery[0] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"} alt={`${project.name} — სკრინშოტი 1`} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="group aspect-[4/3] overflow-hidden bg-[var(--c-bg2)]">
                <img src={PROJECT_IMAGES[slug]?.gallery[1] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"} alt={`${project.name} — სკრინშოტი 2`} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="group aspect-[4/3] overflow-hidden bg-[var(--c-bg2)]">
                <img src={PROJECT_IMAGES[slug]?.gallery[2] || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"} alt={`${project.name} — სკრინშოტი 3`} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[filter] duration-500 group-hover:grayscale-0" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="border-t border-[var(--c-border)]">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group relative flex flex-col justify-center px-6 py-10 transition-colors hover:bg-[var(--c-bg2)] sm:py-16 md:px-12 md:py-24"
          >
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--c-fg-muted)]">
              <ArrowLeft size={14} />
              წინა პროექტი
            </span>
            <span className="mt-2 line-clamp-1 text-lg font-bold sm:text-xl md:text-2xl">{prev.name}</span>
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group relative flex flex-col items-start justify-center border-t border-[var(--c-border)] px-6 py-10 transition-colors hover:bg-[var(--c-bg2)] sm:items-end sm:border-t-0 sm:border-l sm:py-16 sm:text-right md:px-12 md:py-24"
          >
            <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--c-fg-muted)]">
              შემდეგი პროექტი
              <ArrowRight size={14} />
            </span>
            <span className="mt-2 line-clamp-1 text-lg font-bold sm:text-xl md:text-2xl">{next.name}</span>
          </Link>
        </div>
      </section>
    </>
  );
}
