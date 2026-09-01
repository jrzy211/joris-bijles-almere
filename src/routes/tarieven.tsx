import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Page } from "@/components/site/Layout";
import { FinalCta, Section, SectionHeading } from "@/components/site/Blocks";
import { pageMeta } from "@/lib/site";

const title = "Tarieven bijles Almere | €25 per uur, geen abonnement";
const description =
  "Transparante tarieven van Joris Abma Bijles: €25 per uur voor reguliere bijles en €30 per uur voor examenvoorbereiding. Geen abonnement, geen langdurige verplichting.";

export const Route = createFileRoute("/tarieven")({
  component: TarievenPage,
  head: () => pageMeta({ title, description, path: "/tarieven" }),
});

export const prices = [
  {
    name: "Reguliere bijles",
    price: "€25",
    unit: "per uur",
    desc: "Wiskunde, natuurkunde, scheikunde, economie en huiswerkbegeleiding voor MAVO, HAVO en VWO.",
    points: ["Online of aan huis in Almere", "Vast wekelijks moment mogelijk", "Geen abonnement"],
  },
  {
    name: "Examenvoorbereiding",
    price: "€30",
    unit: "per uur",
    desc: "Eindexamenhulp en gevorderde bijles: oude examens, foutenanalyse en examenstrategie.",
    points: ["Oefenen met oude examens", "Gericht herhalen", "Extra sessies in examenperiode"],
    featured: true,
  },
];

function TarievenPage() {
  return (
    <Page>
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="eyebrow">Tarieven</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
            Heldere prijzen, geen verplicht abonnement
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Je betaalt per les. We plannen wat nodig is en stoppen zodra het weer loopt — er zit
            geen contract of opzegtermijn aan vast.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {prices.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-xl border p-8 ${
                p.featured
                  ? "border-transparent bg-navy text-primary-foreground shadow-[var(--shadow-lift)]"
                  : "surface-card"
              }`}
            >
              <h2 className={`text-xl ${p.featured ? "text-primary-foreground" : ""}`}>{p.name}</h2>
              <p className="mt-4 font-display text-5xl">{p.price}</p>
              <p
                className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {p.unit}
              </p>
              <p
                className={`mt-5 text-[15px] leading-relaxed ${
                  p.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>
              <ul className="mt-6 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-primary-foreground/80" : "text-sky"}`}
                    />
                    {pt}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-semibold ${
                  p.featured
                    ? "bg-primary-foreground text-navy"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Plan een gratis kennismaking
              </Link>
            </article>
          ))}
        </div>

        <div className="surface-card mt-6 p-7">
          <SectionHeading title="Goed om te weten" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Geen abonnement en geen langdurige verplichting.",
              "De kennismaking van ongeveer 15 minuten is gratis.",
              "Bijles aan huis binnen Almere zonder extra reiskosten.",
              "Een les kosteloos verzetten kan tot 24 uur van tevoren.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-base">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-sky" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta />
    </Page>
  );
}
