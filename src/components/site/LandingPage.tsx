import { Link } from "@tanstack/react-router";
import { Bullets, FaqBlock, FinalCta, QuickContact, Section, SectionHeading } from "@/components/site/Blocks";
import { CtaPair, Page } from "@/components/site/Layout";
import type { LandingContent } from "@/content/landing";
import { MapPin } from "lucide-react";

const related = [
  { to: "/bijles-almere", label: "Bijles Almere" },
  { to: "/wiskunde-bijles-almere", label: "Wiskunde bijles Almere" },
  { to: "/natuurkunde-bijles-almere", label: "Natuurkunde bijles Almere" },
  { to: "/scheikunde-bijles-almere", label: "Scheikunde bijles Almere" },
  { to: "/economie-bijles-almere", label: "Economie bijles Almere" },
  { to: "/examenhulp-almere", label: "Eindexamenhulp Almere" },
  { to: "/online-bijles", label: "Online bijles Nederland" },
  { to: "/tarieven", label: "Tarieven" },
  { to: "/niveaus", label: "MAVO, HAVO en VWO" },
  { to: "/contact", label: "Contact" },
] as const;

export function LandingPage({ c }: { c: LandingContent }) {
  return (
    <Page>
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="eyebrow">Joris Abma Bijles · Almere &amp; online</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl leading-[1.1] sm:text-5xl">{c.h1}</h1>
          <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            {c.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <CtaPair className="mt-8" />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl">{c.forWho.title}</h2>
            <div className="mt-6">
              <Bullets items={c.forWho.items} />
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">{c.topics.title}</h2>
            <div className="mt-6">
              <Bullets items={c.topics.items} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title={c.how.title} />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {c.how.steps.map((s, i) => (
            <li key={s.t} className="surface-card p-7">
              <span className="font-display text-2xl text-sky">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
        {c.local && (
          <div className="surface-card mt-6 flex items-start gap-3 p-6">
            <MapPin className="mt-0.5 size-5 shrink-0 text-sky" />
            <p className="text-[15px] leading-relaxed text-muted-foreground">{c.local}</p>
          </div>
        )}
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Veelgestelde vragen" />
          <FaqBlock items={c.faq} />
        </div>
        <div className="mt-14">
          <p className="text-sm font-semibold text-foreground">Verder lezen</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {related
              .filter((r) => r.to !== c.path)
              .map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {r.label}
                </Link>
              ))}
          </div>
        </div>
      </Section>

      <QuickContact />
      <FinalCta title={c.ctaTitle} text={c.ctaText} />
    </Page>
  );
}
