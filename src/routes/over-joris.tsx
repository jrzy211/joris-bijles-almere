import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site/Layout";
import { Bullets, FinalCta, Section, SectionHeading } from "@/components/site/Blocks";
import { SITE, pageMeta } from "@/lib/site";
import portret from "@/assets/joris-hero.jpg";

const title = "Over Joris Abma | Bijlesdocent in Almere, VU Amsterdam";
const description =
  "Joris Abma is bijlesdocent in Almere. BSc Bedrijfskunde met hoofdrichting Economie aan de VU Amsterdam, bijles sinds 2025, gericht op begrip in plaats van stampen.";

export const Route = createFileRoute("/over-joris")({
  component: OverPage,
  head: () => ({
    ...pageMeta({ title, description, path: "/over-joris" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Joris Abma",
          jobTitle: "Bijlesdocent",
          email: SITE.email,
          telephone: SITE.phoneLink,
          url: `${SITE.origin}/over-joris`,
          alumniOf: { "@type": "CollegeOrUniversity", name: "Vrije Universiteit Amsterdam" },
          address: { "@type": "PostalAddress", addressLocality: "Almere", addressCountry: "NL" },
          knowsAbout: ["Wiskunde", "Natuurkunde", "Scheikunde", "Economie"],
        }),
      },
    ],
  }),
});

function OverPage() {
  return (
    <Page>
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <img
            src={portret}
            width={1200}
            height={1504}
            alt="Joris Abma, bijlesdocent in Almere, legt een wiskundeopgave uit aan een leerling"
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="eyebrow">Over Joris</p>
            <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">
              Rustige uitleg, gericht op begrijpen
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ik ben Joris Abma, 
                bijlesdocent in Almere. In 2026 rondde ik de bachelor Bedrijfskunde met
                hoofdrichting Economie af aan de Vrije Universiteit Amsterdam, met een gemiddelde
                van 7,0.
              </p>
              <p>
                Sinds 2025 geef ik bijles aan middelbare scholieren: eerst aan leerlingen uit mijn
                eigen omgeving, inmiddels in heel Almere en online door het land. Wat ik in die tijd
                heb geleerd, is dat bijna niemand &quot;slecht is in wiskunde&quot;. Meestal
                ontbreekt er één schakel uit een eerder jaar, en gaat daardoor alles wat erop volgt
                wringen.
              </p>
              <p>
                Mijn achtergrond is analytisch, en dat merk je aan de manier waarop ik uitleg: ik
                zoek eerst waar het denkstapje misgaat en pas daarna gaan we oefenen. Uit je hoofd
                leren werkt tot de volgende toets; begrijpen werkt de rest van het jaar.
              </p>
              <p>
                Ik ben geen huiswerkpolitie. Ik ga naast je zitten, volg jouw manier van denken en
                blijf de stof herformuleren tot het klopt.
              </p>
            </div>
            <div className="mt-8">
              <Bullets
                items={[
                  "BSc Bedrijfskunde (Economie), VU Amsterdam, 2026",
                  "Bijlesdocent sinds 2025",
                  "MAVO, HAVO en VWO, alle leerjaren",
                  "Online en aan huis in Almere",
                ]}
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
              >
                Plan een gratis kennismaking
              </Link>
              <Link
                to="/tarieven"
                className="inline-flex min-h-12 items-center rounded-full border border-border px-6 text-base font-semibold hover:bg-secondary"
              >
                Bekijk de tarieven
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Resultaten"
          title="Gericht op echte vooruitgang"
          intro="Bij eerdere leerlingen zijn cijfers verbeterd van ongeveer 4–5 naar 7–8. Dat is geen garantie en het gaat niet vanzelf: het vraagt wekelijkse lessen en oefenen tussendoor. Wat ik wel beloof, is een eerlijke inschatting vooraf."
        />
      </Section>

      <FinalCta />
    </Page>
  );
}
