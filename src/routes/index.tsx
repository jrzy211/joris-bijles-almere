import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  GraduationCap,
  Laptop,
  MapPin,
  MessageSquare,
  Star,
} from "lucide-react";
import { Page, CtaPair } from "@/components/site/Layout";
import {
  Bullets,
  FaqBlock,
  FinalCta,
  QuickContact,
  Section,
  SectionHeading,
} from "@/components/site/Blocks";
import { subjects, levels } from "@/content/vakken";
import { generalFaq } from "@/content/faq";
import { areas, faqSchema, localBusinessSchema, pageMeta } from "@/lib/site";

const title =
  "Online bijles & bijles Almere | Wiskunde, natuurkunde, scheikunde & economie — Joris Abma";
const description =
  "Persoonlijke online bijles in heel Nederland, en aan huis in Almere rond de Literatuurwijk en Muziekwijk. Wiskunde, natuurkunde, scheikunde en economie voor MAVO, HAVO en VWO. €30 per uur, gratis kennismaking.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    ...pageMeta({ title, description, path: "/" }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(generalFaq)) },
    ],
  }),
});

const trust = [
  { icon: GraduationCap, label: "VU Amsterdam" },
  { icon: Clock, label: "Bijles sinds 2025" },
  { icon: Laptop, label: "Online, heel NL" },
  { icon: CheckCircle2, label: "MAVO / HAVO / VWO" },
];

const steps = [
  {
    t: "Gratis kennismaking",
    d: "Een gesprek van ongeveer 15 minuten over het vak, het niveau en waar het misgaat. Vrijblijvend.",
  },
  {
    t: "We bespreken niveau en leerdoelen",
    d: "In de eerste les zoeken we op waar de basis hapert en wat we als eerste willen bereiken.",
  },
  {
    t: "Persoonlijke bijles, online of in Almere",
    d: "Wekelijkse lessen op een vast moment, aangepast aan toetsweken en het examenrooster.",
  },
];

const availability = [
  { d: "Maandag", t: "Hele dag" },
  { d: "Dinsdag", t: "Hele dag" },
  { d: "Woensdag", t: "Tot 18:00" },
  { d: "Donderdag", t: "Hele dag" },
  { d: "Vrijdag", t: "Geen bijles", off: true },
  { d: "Zaterdag", t: "Hele dag" },
  { d: "Zondag", t: "Geen bijles", off: true },
];

const reviews = [
  {
    quote:
      "Altijd fijne lessen met Joris. Sinds hem heb ik stabiel hogere resultaten, met een keer zelfs een 10 en een 9!",
    place: "Almere",
  },
  {
    quote:
      "Joris heeft echt harde achterstanden naar voldoendes weten te halen, door goede samenwerking en gestructureerder werken. Al een keer overgegaan, mede door zijn hulp.",
    place: "Almere",
  },
  {
    quote:
      "Ik moest dit jaar wiskunde goed bijspijkeren en met de hulp van de bijlessen gaat dat erg goed: van cijfers rond de 3–4 naar voldoendes rond de 7 (:",
    place: "Almere",
  },
];

function Index() {
  return (
    <Page>
      {/* 1. HERO */}
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.3rem]">
              Persoonlijke bijles, online in heel Nederland
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-foreground">
              Wiskunde, natuurkunde, scheikunde en economie voor MAVO, HAVO en VWO.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Rustige, duidelijke begeleiding van een afgestudeerde VU-student. Gericht op begrip,
              betere cijfers en meer zelfvertrouwen.
            </p>
            <CtaPair className="mt-8" />
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trust.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-medium"
                >
                  <t.icon className="size-4 shrink-0 text-sky" />
                  {t.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. LOW-FRICTION INTRO */}
      <QuickContact />

      {/* 3. SUBJECTS */}
      <Section tone="muted" id="vakken">
        <SectionHeading
          eyebrow="Vakken"
          title="Waar ik bijles in geef"
          intro="Vier vakken die ik echt goed ken, plus huiswerkbegeleiding en examenvoorbereiding."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {subjects.map((s) => (
            <article key={s.key} className="surface-card flex flex-col p-7">
              <h3 className="text-xl">{s.name}</h3>
              <p className="mt-2 text-sm font-medium text-sky">{s.levels}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <Link
                to={s.to}
                className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full border border-border bg-card px-5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Meer informatie
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* 4. LEVELS */}
      <Section id="niveaus">
        <SectionHeading
          eyebrow="Niveaus"
          title="MAVO, HAVO en VWO — alle leerjaren"
          intro="Van huiswerk en toetsvoorbereiding tot achterstanden wegwerken en eindexamenvoorbereiding."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {levels.map((l) => (
            <article key={l.id} className="surface-card p-7">
              <h3 className="text-xl">{l.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{l.desc}</p>
              <ul className="mt-5 space-y-2">
                {l.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link
          to="/niveaus"
          className="mt-8 inline-flex min-h-12 items-center rounded-full border border-border px-6 text-base font-semibold hover:bg-secondary"
        >
          Meer over de niveaus
        </Link>
      </Section>

      {/* 5. EXAMENHULP */}
      <section className="bg-navy py-18 text-primary-foreground lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
              Eindexamenhulp
            </p>
            <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
              Eindexamenhulp voor MAVO, HAVO &amp; VWO
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/75">
              In het examenjaar is overzicht belangrijker dan nog meer stof. We werken gericht met
              oude examens en herhalen precies de onderwerpen die jou punten kosten.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/examenhulp-almere"
                className="inline-flex min-h-12 items-center rounded-full bg-primary-foreground px-6 text-base font-semibold text-navy"
              >
                Bespreek mijn examenvoorbereiding
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:mt-14">
            {[
              "Oefenen met examenvragen",
              "Aanpak van oude examens",
              "Onderwerpen gericht herhalen",
              "Leerstrategieën",
              "Werken onder tijdsdruk",
              "Rustige voorbereiding op het examen",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 rounded-xl border border-primary-foreground/15 px-4 py-3 text-sm"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-foreground/70" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. ABOUT */}
      <Section id="over">
        <div className="max-w-3xl">
          <div>
            <SectionHeading eyebrow="Over Joris" title="Wie je voor je hebt" />
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ik ben Joris Abma. In 2026 rondde ik de bachelor Bedrijfskunde met hoofdrichting
                Economie af aan de Vrije Universiteit Amsterdam. Sinds 2025 geef ik bijles aan
                middelbare scholieren in Almere en online.
              </p>
              <p>
                Mijn achtergrond is analytisch, en zo leg ik ook uit: eerst zoeken waar het
                denkstapje misgaat, dan pas oefenen. Begrijpen werkt langer dan stampen — en het
                geeft veel meer rust voor een toets.
              </p>
            </div>
            <div className="mt-7">
              <Bullets
                items={[
                  "BSc Bedrijfskunde (Economie), VU Amsterdam",
                  "Bijlesdocent sinds 2025",
                  "Geduldige, duidelijke uitleg",
                  "Focus op begrip in plaats van stampen",
                ]}
              />
            </div>
            <Link
              to="/over-joris"
              className="mt-7 inline-flex min-h-12 items-center rounded-full border border-border px-6 text-base font-semibold hover:bg-secondary"
            >
              Meer over Joris
            </Link>
          </div>
        </div>
      </Section>

      {/* 7. RESULTS */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Ervaring"
          title="Gericht op echte vooruitgang"
          intro="Bij eerdere leerlingen zijn cijfers verbeterd van ongeveer 4–5 naar 7–8. Ik geef geen garanties op cijfers: vooruitgang komt uit wekelijkse lessen, oefenen tussendoor en een basis die weer klopt. Wat je wel krijgt, is een eerlijke inschatting vooraf."
        />
      </Section>

      {/* 8. HOW IT WORKS */}
      <Section id="werkwijze">
        <SectionHeading eyebrow="Zo werkt het" title="In drie stappen van start" />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="surface-card p-7">
              <span className="font-display text-2xl text-sky">0{i + 1}</span>
              <h3 className="mt-3 text-xl">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 9. PRICING */}
      <Section tone="muted" id="tarieven">
        <SectionHeading
          eyebrow="Tarieven"
          title="Transparante prijzen"
          intro="Geen abonnement. Geen langdurige verplichting."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="surface-card p-8">
            <h3 className="text-xl">Reguliere bijles</h3>
            <p className="mt-4 font-display text-5xl">€30</p>
            <p className="mt-1 text-sm text-muted-foreground">per uur</p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Wiskunde, natuurkunde, scheikunde, economie en huiswerkbegeleiding, online in heel
              Nederland of aan huis in Almere.
            </p>
          </article>
          <article className="rounded-xl bg-navy p-8 text-primary-foreground shadow-[var(--shadow-lift)]">
            <h3 className="text-xl text-primary-foreground">Examenvoorbereiding</h3>
            <p className="mt-4 font-display text-5xl">€30</p>
            <p className="mt-1 text-sm text-primary-foreground/70">per uur</p>
            <p className="mt-5 text-[15px] leading-relaxed text-primary-foreground/80">
              Eindexamenhulp en gevorderde bijles: oude examens, foutenanalyse en examenstrategie.
            </p>
          </article>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/tarieven"
            className="inline-flex min-h-12 items-center rounded-full border border-border bg-card px-6 text-base font-semibold hover:bg-secondary"
          >
            Alle details over tarieven
          </Link>
          <p className="text-sm text-muted-foreground">
            De kennismaking van ongeveer 15 minuten is gratis.
          </p>
        </div>
      </Section>

      {/* 10 + 11. AVAILABILITY & LOCATION */}
      <Section id="beschikbaarheid">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Beschikbaarheid"
              title="Wanneer ik lesgeef"
              intro="We plannen een vast wekelijks moment. Rond toetsweken is er ruimte voor extra sessies."
            />
            <div className="surface-card mt-8 overflow-hidden">
              {availability.map((a) => (
                <div
                  key={a.d}
                  className="flex items-center justify-between border-b border-border px-6 py-4 last:border-0"
                >
                  <span
                    className={`text-sm font-semibold ${a.off ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {a.d}
                  </span>
                  <span
                    className={`text-sm ${a.off ? "text-muted-foreground" : "font-medium text-sky"}`}
                  >
                    {a.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Locatie"
              title="Online in heel Nederland, aan huis rond de Literatuurwijk en Muziekwijk"
              intro="Online bijles is de standaard en kan overal in Nederland. Aan huis kom ik alleen als het dichtbij genoeg is: in de regio Literatuurwijk en Muziekwijk in Almere. Ik werk zonder eigen praktijkadres."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  <MapPin className="size-4 text-sky" />
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Woon je ergens anders? Dan is{" "}
              <Link
                to="/online-bijles"
                className="font-semibold text-sky underline-offset-4 hover:underline"
              >
                online bijles
              </Link>{" "}
              de oplossing — even effectief en zonder reistijd.
            </p>
          </div>
        </div>
      </Section>

      {/* 12. REVIEWS */}
      <Section tone="muted" id="reviews">
        <SectionHeading
          eyebrow="Reviews"
          title="Ervaringen van leerlingen en ouders"
          intro="Echte reacties, anoniem geplaatst. Heb je bij mij bijles gehad en wil je ook iets achterlaten? Stuur het gerust door."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.quote} className="surface-card flex flex-col p-7">
              <div className="flex gap-0.5 text-sky" aria-label="5 van 5 sterren">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MessageSquare className="size-4 shrink-0" aria-hidden="true" />
                <span>
                  <span className="font-semibold text-foreground">Anoniem</span> · {r.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 13. FAQ */}
      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Veelgestelde vragen"
            intro="Staat je vraag er niet bij? Stuur gerust een WhatsApp-bericht."
          />
          <FaqBlock items={generalFaq} />
        </div>
      </Section>

      {/* 14. FINAL CTA */}
      <FinalCta />
    </Page>
  );
}
