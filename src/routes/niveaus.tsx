import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Page } from "@/components/site/Layout";
import { FinalCta, Section, SectionHeading } from "@/components/site/Blocks";
import { levels } from "@/content/vakken";
import { pageMeta } from "@/lib/site";

const title = "Niveaus | MAVO, HAVO en VWO bijles in Almere en online";
const description =
  "Bijles voor MAVO, HAVO en VWO in alle leerjaren: huiswerk, toetsvoorbereiding, achterstanden wegwerken en eindexamenvoorbereiding. In Almere of online.";

export const Route = createFileRoute("/niveaus")({
  component: NiveausPage,
  head: () => pageMeta({ title, description, path: "/niveaus" }),
});

function NiveausPage() {
  return (
    <Page>
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="eyebrow">Niveaus</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
            Bijles voor MAVO, HAVO en VWO
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Alle leerjaren van het voortgezet onderwijs, van de brugklas tot en met het
            eindexamenjaar. De aanpak verschilt per niveau, want de vraag die school stelt verschilt
            ook.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-6">
          {levels.map((l) => (
            <article key={l.id} id={l.id} className="surface-card p-8 scroll-mt-28">
              <h2 className="text-2xl">{l.name} bijles</h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                {l.desc}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {l.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-sky" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading
            title="Examenjaar?"
            intro="Voor eindexamenkandidaten werk ik met oude examens, gerichte herhaling en examenstrategie."
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/examenhulp-almere"
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
            >
              Eindexamenhulp bekijken
            </Link>
            <Link
              to="/vakken"
              className="inline-flex min-h-12 items-center rounded-full border border-border px-6 text-base font-semibold hover:bg-secondary"
            >
              Alle vakken
            </Link>
          </div>
        </div>
      </Section>

      <FinalCta />
    </Page>
  );
}
