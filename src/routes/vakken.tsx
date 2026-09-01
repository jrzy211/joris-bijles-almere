import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site/Layout";
import { FinalCta, Section, SectionHeading } from "@/components/site/Blocks";
import { subjects } from "@/content/vakken";
import { pageMeta } from "@/lib/site";

const title = "Vakken | Bijles wiskunde, natuurkunde, scheikunde & economie Almere";
const description =
  "Bijles in wiskunde, natuurkunde, scheikunde en economie voor MAVO, HAVO en VWO. In Almere aan huis of online in heel Nederland, vanaf €25 per uur.";

export const Route = createFileRoute("/vakken")({
  component: VakkenPage,
  head: () => pageMeta({ title, description, path: "/vakken" }),
});

function VakkenPage() {
  return (
    <Page>
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="eyebrow">Vakken</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
            Bijles in de exacte vakken en economie
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vier vakken die ik echt goed ken, in plaats van een lijst waar alles op staat. Daarnaast
            help ik met huiswerkbegeleiding, planning en examenvoorbereiding.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {subjects.map((s) => (
            <article key={s.key} className="surface-card flex flex-col p-7">
              <h2 className="text-xl">{s.name}</h2>
              <p className="mt-2 text-sm font-medium text-sky">{s.levels}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <Link
                to={s.to}
                className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Meer informatie
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <article className="surface-card p-7">
            <h2 className="text-xl">Huiswerkbegeleiding &amp; studiebegeleiding</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Soms is de stof niet het probleem, maar het overzicht. We maken samen een werkbare
              planning, oefenen met leren leren en zorgen dat huiswerk niet meer op de avond voor de
              toets belandt.
            </p>
          </article>
          <article className="surface-card p-7">
            <h2 className="text-xl">Examenvoorbereiding</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Oefenen met oude examens, gericht herhalen op basis van je eigen fouten en werken
              onder tijdsdruk.{" "}
              <Link
                to="/examenhulp-almere"
                className="font-semibold text-sky underline-offset-4 hover:underline"
              >
                Lees meer over eindexamenhulp
              </Link>
              .
            </p>
          </article>
        </div>

        <div className="mt-10">
          <SectionHeading
            title="Welk niveau?"
            intro="Ik begeleid leerlingen op MAVO, HAVO en VWO in alle leerjaren."
          />
          <Link
            to="/niveaus"
            className="mt-5 inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
          >
            Bekijk de niveaus
          </Link>
        </div>
      </Section>

      <FinalCta />
    </Page>
  );
}
