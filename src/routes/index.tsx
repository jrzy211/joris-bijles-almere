import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE, whatsappUrl } from "@/lib/site";
import heroImg from "@/assets/joris-hero.jpg";
import deskImg from "@/assets/desk.jpg";
import {
  Atom,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  FlaskConical,
  Laptop,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Quote,
  Star,
  X,
} from "lucide-react";

const title = "Bijles Almere | Wiskunde, Natuurkunde, Scheikunde & Economie — Joris Abma";
const description =
  "Persoonlijke bijles in Almere en online in heel Nederland. Wiskunde, natuurkunde, scheikunde en economie voor havo en vwo. Plan een gratis kennismaking met Joris Abma.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "bijles Almere, wiskunde bijles Almere, natuurkunde bijles Almere, scheikunde bijles, economie bijles, online bijles",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "/#bijlesjorisabma",
          name: "Bijles Joris Abma",
          description,
          areaServed: [
            { "@type": "City", name: "Almere" },
            { "@type": "Country", name: "Nederland" },
          ],
          address: { "@type": "PostalAddress", addressLocality: "Almere", addressCountry: "NL" },
          telephone: SITE.whatsappDisplay,
          email: SITE.email,
          priceRange: "€€",
          founder: { "@type": "Person", name: "Joris Abma" },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Thursday", "Saturday"],
              opens: "09:00",
              closes: "21:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Wednesday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
        }),
      },
    ],
  }),
});

const navItems = [
  { href: "#over", label: "Over Joris" },
  { href: "#vakken", label: "Vakken" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#beschikbaarheid", label: "Beschikbaarheid" },
  { href: "#tarieven", label: "Tarieven" },
  { href: "#faq", label: "FAQ" },
];

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "sm:gap-4"}`}>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
      >
        Plan een gratis kennismaking
        <ChevronRight className="size-4" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
      >
        <MessageCircle className="size-4 text-whatsapp" />
        WhatsApp Joris
      </a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">Joris Abma</span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Bijles Almere
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground sm:inline-flex"
          >
            Gratis kennismaking
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-foreground"
            >
              {i.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Plan een gratis kennismaking
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent/60 to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="eyebrow">Bijles in Almere &amp; online in heel Nederland</p>
          <h1 className="mt-5 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Van onvoldoende naar zelfvertrouwen in wiskunde, natuurkunde, scheikunde en economie
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Ik ben Joris Abma, bijlesdocent uit Almere. Ik werk met een klein aantal leerlingen
            tegelijk, zodat elke les precies aansluit op de stof, de toetsweek en het tempo van
            jouw zoon of dochter.
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "4–5 → 7–8", v: "gemiddelde cijferontwikkeling" },
              { k: "4 vakken", v: "wiskunde, na, sk, economie" },
              { k: "Online & thuis", v: "Almere en omstreken" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-xl text-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden size-40 rounded-full bg-accent/70 blur-2xl lg:block" />
          <img
            src={heroImg}
            width={1200}
            height={1504}
            alt="Joris Abma legt tijdens bijles in Almere een wiskundeopgave uit aan een leerling"
            className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="surface-card absolute -bottom-6 left-4 right-4 flex items-center gap-3 p-4 sm:left-8 sm:right-auto sm:w-72">
            <CheckCircle2 className="size-5 shrink-0 text-sky" />
            <p className="text-sm font-medium leading-snug">
              Eerste kennismaking van 20 minuten is gratis en vrijblijvend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="over" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Over Joris</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Exacte vakken uitleggen in gewone taal
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            In 2026 rondde ik mijn BSc Bedrijfskunde met hoofdrichting Economie af aan de Vrije
            Universiteit Amsterdam (gemiddeld 7,0). Sinds 2025 geef ik bijles aan middelbare
            scholieren — eerst aan leerlingen uit mijn eigen omgeving, inmiddels aan leerlingen uit
            heel Almere en online door het hele land.
          </p>
          <p>
            Wat ik in die tijd heb gezien: bijna niemand is &quot;slecht in wiskunde&quot;. Meestal
            ontbreekt er één schakel uit een eerdere klas, en gaat daardoor alles wat erop volgt
            wringen. Ik zoek die schakel op, herstel hem, en bouw daarna rustig verder tot de stof
            vanzelfsprekend wordt.
          </p>
          <p>
            Ik ben geen strenge docent en geen huiswerkpolitie. Ik ben iemand die naast je gaat
            zitten, jouw manier van denken volgt en de stof zo lang blijft herformuleren tot het
            klikt.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {[
              "BSc Bedrijfskunde (Economie), VU Amsterdam, 2026",
              "Bijlesdocent sinds 2025",
              "Havo, vwo en examentraining",
              "Online én bij jou thuis in Almere",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-base text-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const subjectList = [
  {
    icon: Calculator,
    name: "Wiskunde",
    desc: "Wiskunde A, B en C. Van algebra en formules herleiden tot differentiëren, integreren en goniometrie.",
    tags: ["Wiskunde A", "Wiskunde B", "Wiskunde C"],
  },
  {
    icon: Atom,
    name: "Natuurkunde",
    desc: "Krachten, bewegingen, elektriciteit en energie. Met veel nadruk op het lezen en ontleden van de vraag.",
    tags: ["Mechanica", "Elektriciteit", "Energie"],
  },
  {
    icon: FlaskConical,
    name: "Scheikunde",
    desc: "Rekenen aan reacties, molberekeningen, zuren en basen en organische chemie — stap voor stap.",
    tags: ["Rekenen", "Zuren & basen", "Organisch"],
  },
  {
    icon: LineChart,
    name: "Economie",
    desc: "Micro, macro en bedrijfseconomie. Mijn eigen studierichting, dus met voorbeelden uit de praktijk.",
    tags: ["Micro", "Macro", "M&O"],
  },
];

function Subjects() {
  return (
    <section id="vakken" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow">Vakken</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Bijles in vier exacte vakken</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Voor onderbouw, bovenbouw havo/vwo en eindexamenleerlingen. Zoek je specifiek wiskunde
            bijles in Almere of natuurkunde bijles online? Dan zit je hier goed.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {subjectList.map((s) => (
            <article key={s.name} className="surface-card p-7 transition-shadow hover:shadow-[var(--shadow-lift)]">
              <s.icon className="size-6 text-sky" />
              <h3 className="mt-5 text-xl">{s.name}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    t: "Gratis kennismaking",
    d: "In 20 minuten bespreken we het vak, het niveau, de cijfers en wat er misgaat. Daarna weet je precies of bijles zinvol is.",
  },
  {
    n: "02",
    t: "Diagnose van de basis",
    d: "In de eerste les zoek ik op waar de kennis begint te haperen. Vaak ligt dat een hoofdstuk of zelfs een schooljaar eerder.",
  },
  {
    n: "03",
    t: "Wekelijkse lessen van 60 of 90 minuten",
    d: "Uitleg, samen oefenen en daarna zelfstandig oefenen met mij ernaast. Aansluitend op de planning en toetsen van school.",
  },
  {
    n: "04",
    t: "Toetsweek en examen",
    d: "Rond toetsen en examens plannen we extra sessies met oefentoetsen, oude examens en gerichte foutenanalyse.",
  },
];

function HowItWorks() {
  return (
    <section id="werkwijze" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Werkwijze</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Hoe een traject eruitziet</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Geen standaardprogramma. Elke leerling start op een ander punt, dus elke les wordt
            opgebouwd rond wat er die week écht nodig is.
          </p>
          <img
            src={deskImg}
            width={1408}
            height={912}
            loading="lazy"
            alt="Bureau met natuurkundeformules, rekenmachine en laptop tijdens online bijles"
            className="mt-9 hidden w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] lg:block"
          />
        </div>
        <ol className="space-y-8">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-5">
              <span className="font-display text-2xl text-sky">{s.n}</span>
              <div className="border-b border-border pb-8">
                <h3 className="text-xl">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="resultaten" className="bg-navy py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
            Ervaring &amp; resultaten
          </p>
          <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
            Van een wankele 4 naar een stabiele 7 of 8
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/75">
            Sinds 2025 begeleid ik leerlingen in de exacte vakken. Leerlingen die bij mij starten
            met een 4 of 5 halen na een aantal maanden structureel een 7 of 8 — niet door trucjes,
            maar doordat de basis eindelijk klopt.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {[
            { k: "4–5 → 7–8", v: "typische cijferontwikkeling van leerlingen die een traject afmaken" },
            { k: "Sinds 2025", v: "bijles aan havo- en vwo-leerlingen in Almere en online" },
            { k: "1-op-1", v: "geen groepsklas: volledige aandacht voor één leerling per les" },
          ].map((s) => (
            <div key={s.k} className="border-t border-primary-foreground/20 pt-6">
              <p className="font-display text-3xl text-primary-foreground">{s.k}</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const availability = [
  { d: "Maandag", t: "Hele dag" },
  { d: "Dinsdag", t: "Hele dag" },
  { d: "Woensdag", t: "Tot 18:00" },
  { d: "Donderdag", t: "Hele dag" },
  { d: "Vrijdag", t: "Geen bijles", off: true },
  { d: "Zaterdag", t: "Hele dag" },
  { d: "Zondag", t: "Geen bijles", off: true },
];

function Availability() {
  return (
    <section id="beschikbaarheid" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Beschikbaarheid</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Wanneer ik lesgeef</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lessen plannen we op een vast wekelijks moment, zodat het ritme erin blijft. In
            toetsweken is er ruimte voor extra sessies.
          </p>
          <div className="mt-8 space-y-3">
            <p className="flex items-center gap-2.5 text-sm text-foreground">
              <Laptop className="size-4 text-sky" /> Online bijles in heel Nederland
            </p>
            <p className="flex items-center gap-2.5 text-sm text-foreground">
              <MapPin className="size-4 text-sky" /> Bijles aan huis in Almere en omgeving
            </p>
            <p className="flex items-center gap-2.5 text-sm text-foreground">
              <Clock className="size-4 text-sky" /> Lessen van 60 of 90 minuten
            </p>
          </div>
        </div>
        <div className="surface-card overflow-hidden">
          {availability.map((a) => (
            <div
              key={a.d}
              className="flex items-center justify-between border-b border-border px-6 py-4 last:border-0"
            >
              <span className={`text-sm font-semibold ${a.off ? "text-muted-foreground" : "text-foreground"}`}>
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
    </section>
  );
}

const pricing = [
  {
    name: "Losse les",
    price: "€ 35",
    unit: "per 60 minuten",
    desc: "Voor als je even wilt proberen of alleen hulp nodig hebt voor één toets.",
    points: ["Online of bij jou thuis", "Geen abonnement", "Flexibel inplannen"],
  },
  {
    name: "Wekelijks traject",
    price: "€ 32,50",
    unit: "per 60 minuten",
    desc: "De meest gekozen vorm: elke week een vast moment, met opbouw over de maanden heen.",
    points: ["Vast wekelijks tijdstip", "Planning op schooltoetsen", "Kort verslag voor ouders"],
    featured: true,
  },
  {
    name: "Examentraining",
    price: "€ 45",
    unit: "per 90 minuten",
    desc: "Intensieve sessies met oude examens, tijdsdruk en gerichte foutenanalyse.",
    points: ["Oefenexamens", "Foutenanalyse", "Examenstrategie"],
  },
];

function Pricing() {
  return (
    <section id="tarieven" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="eyebrow">Tarieven</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Heldere prijzen, geen inschrijfkosten</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Bijles aan huis binnen Almere is inclusief reistijd. Buiten Almere reken ik een kleine
            reisvergoeding — dat bespreken we vooraf.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-xl border p-7 ${
                p.featured
                  ? "border-transparent bg-navy text-primary-foreground shadow-[var(--shadow-lift)]"
                  : "surface-card"
              }`}
            >
              {p.featured && (
                <span className="mb-4 w-fit rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Meest gekozen
                </span>
              )}
              <h3 className={`text-xl ${p.featured ? "text-primary-foreground" : ""}`}>{p.name}</h3>
              <p className="mt-4 font-display text-4xl">{p.price}</p>
              <p className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
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
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  p.featured
                    ? "bg-primary-foreground text-navy"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Plan een gratis kennismaking
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    q: "Onze zoon stond een 4 voor wiskunde B in 4 vwo en zag het niet meer zitten. Joris pakte rustig de basis van klas 3 opnieuw op. Bij de laatste toets stond er een 7,4.",
    a: "Ouder van leerling 4 vwo",
    p: "Almere Buiten",
  },
  {
    q: "Natuurkunde was voor mij vooral formules gokken. Joris liet me eerst de vraag ontleden voordat ik iets ging rekenen. Dat scheelde echt.",
    a: "Leerling 5 havo",
    p: "Almere Stad",
  },
  {
    q: "We hadden online les vanuit een andere provincie en het voelde nooit afstandelijk. Duidelijke uitleg en altijd goed voorbereid.",
    a: "Ouder van leerling 4 havo",
    p: "Online bijles",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Wat leerlingen en ouders zeggen</h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.a} className="surface-card flex flex-col p-7">
            <Quote className="size-6 text-sky" />
            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground">
              {r.q}
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-sky text-sky" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold">{r.a}</p>
              <p className="text-xs text-muted-foreground">{r.p}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Geef je bijles bij ons thuis in Almere?",
    a: "Ja. Binnen Almere en de directe omgeving kom ik bij je thuis, zonder extra reiskosten. Woon je iets verder weg, dan bespreken we vooraf een kleine reisvergoeding.",
  },
  {
    q: "Hoe werkt online bijles?",
    a: "Online les gaat via videobellen met een digitaal whiteboard, zodat we samen op hetzelfde scherm kunnen schrijven en rekenen. Dat werkt in de praktijk net zo goed als aan tafel, en het kan vanuit heel Nederland.",
  },
  {
    q: "Vanaf welk niveau geef je les?",
    a: "Ik begeleid leerlingen van de onderbouw tot en met eindexamenklassen havo en vwo, in wiskunde, natuurkunde, scheikunde en economie.",
  },
  {
    q: "Hoe lang duurt een les?",
    a: "Standaard 60 minuten. Voor examentraining of een zwaar hoofdstuk werkt 90 minuten vaak beter, omdat er dan ook tijd is om zelfstandig te oefenen met mij ernaast.",
  },
  {
    q: "Hoeveel lessen zijn er nodig?",
    a: "Dat verschilt per leerling. Voor één toets is soms twee of drie keer genoeg. Om structureel van een 4–5 naar een 7–8 te gaan, is wekelijkse begeleiding gedurende een aantal maanden realistisch.",
  },
  {
    q: "Kan ik een les verzetten?",
    a: "Ja, tot 24 uur van tevoren kosteloos verzetten. Bij later afzeggen reken ik de les door, omdat het tijdslot dan niet meer opnieuw te vullen is.",
  },
];

function Faq() {
  return (
    <section id="faq" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Veelgestelde vragen</h2>
          <p className="mt-4 text-muted-foreground">
            Staat je vraag er niet bij? Stuur gerust een WhatsApp-bericht.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Plan een gratis kennismaking</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Vertel kort waar het vastloopt. Binnen een dag laat ik weten of en hoe ik kan helpen,
            en of er ruimte is in mijn agenda.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-5 text-whatsapp" />
              <span className="text-sm">
                <span className="block font-semibold">WhatsApp</span>
                <span className="text-muted-foreground">{SITE.whatsappDisplay}</span>
              </span>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:bg-secondary"
            >
              <Mail className="size-5 text-sky" />
              <span className="text-sm">
                <span className="block font-semibold">E-mail</span>
                <span className="text-muted-foreground">{SITE.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
              <MapPin className="size-5 text-sky" />
              <span className="text-sm">
                <span className="block font-semibold">Werkgebied</span>
                <span className="text-muted-foreground">
                  Almere en omstreken · online in heel Nederland
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="surface-card p-7 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-14 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xl">Joris Abma · Bijles Almere</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              Persoonlijke bijles wiskunde, natuurkunde, scheikunde en economie in Almere,
              Almere Buiten, Almere Haven, Almere Poort en online in heel Nederland.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="hover:text-primary-foreground">
                {i.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} {SITE.name}. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur een WhatsApp-bericht naar Joris"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Subjects />
        <HowItWorks />
        <Results />
        <Availability />
        <Pricing />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
