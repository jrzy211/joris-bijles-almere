import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Page } from "@/components/site/Layout";
import { QuickContact, Section, SectionHeading } from "@/components/site/Blocks";
import { SITE, areas, mailUrl, pageMeta, telUrl, whatsappUrl } from "@/lib/site";

const title = "Contact | Joris Abma Bijles Almere — gratis kennismaking";
const description =
  "Neem vrijblijvend contact op met Joris Abma Bijles in Almere. Bel of WhatsApp 06 22555557, mail jorisabma25@gmail.com of vraag een gratis kennismaking aan.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => pageMeta({ title, description, path: "/contact" }),
});

function ContactPage() {
  return (
    <Page>
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
            Vertel kort waar je tegenaan loopt
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Een berichtje sturen kost een minuut en verplicht je tot niets. Ik laat weten of ik kan
            helpen, hoe een traject eruit zou zien en of er ruimte is in mijn agenda.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex min-h-16 items-center gap-3 px-5 transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-5 text-whatsapp" />
              <span className="text-sm">
                <span className="block font-semibold">WhatsApp</span>
                <span className="text-muted-foreground">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={telUrl}
              className="surface-card flex min-h-16 items-center gap-3 px-5 transition-colors hover:bg-secondary"
            >
              <Phone className="size-5 text-sky" />
              <span className="text-sm">
                <span className="block font-semibold">Bellen</span>
                <span className="text-muted-foreground">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={mailUrl}
              className="surface-card flex min-h-16 items-center gap-3 px-5 transition-colors hover:bg-secondary"
            >
              <Mail className="size-5 text-sky" />
              <span className="min-w-0 text-sm">
                <span className="block font-semibold">E-mail</span>
                <span className="block truncate text-muted-foreground">{SITE.email}</span>
              </span>
            </a>
            <div className="surface-card flex min-h-16 items-center gap-3 px-5">
              <MapPin className="size-5 text-sky" />
              <span className="text-sm">
                <span className="block font-semibold">Werkgebied</span>
                <span className="text-muted-foreground">Almere &amp; online</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <QuickContact
        title="Gratis kennismaking aanvragen"
        intro="Vul alleen in wat nodig is om je goed te kunnen antwoorden. Ik reageer meestal dezelfde dag."
      />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Locatie"
          title="Online bijles in heel Nederland, aan huis rond de Literatuurwijk en Muziekwijk"
          intro="Joris Abma Bijles is gevestigd in Almere, Flevoland. Online bijles geef ik in heel Nederland. Aan huis kom ik alleen als het dichtbij genoeg is: in de regio Literatuurwijk en Muziekwijk in Almere. Ik werk zonder eigen praktijkadres, dus lessen vinden online of bij jou thuis plaats."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              {a}
            </span>
          ))}
          <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
            Online in heel Nederland
          </span>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Liever eerst meer lezen? Bekijk de{" "}
          <Link to="/tarieven" className="font-semibold text-sky underline-offset-4 hover:underline">
            tarieven
          </Link>
          , de{" "}
          <Link to="/vakken" className="font-semibold text-sky underline-offset-4 hover:underline">
            vakken
          </Link>{" "}
          of de{" "}
          <Link to="/faq" className="font-semibold text-sky underline-offset-4 hover:underline">
            veelgestelde vragen
          </Link>
          .
        </p>
      </Section>
    </Page>
  );
}
