import { Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "@/components/site/ContactForm";
import { CtaPair } from "@/components/site/Layout";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

export function Section({
  id,
  tone = "plain",
  children,
}: {
  id?: string;
  tone?: "plain" | "muted";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone === "muted" ? "bg-secondary/60 py-18 lg:py-24" : "py-18 lg:py-24"}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5 text-base text-foreground">
          <CheckCircle2 className="mt-1 size-4 shrink-0 text-sky" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqBlock({ items, id = "faq" }: { items: { q: string; a: string }[]; id?: string }) {
  return (
    <Accordion type="single" collapsible className="w-full" id={id}>
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`i-${i}`}>
          <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
          <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FinalCta({
  title = "Kunnen we je helpen?",
  text = "Vertel kort waar je tegenaan loopt. We kijken samen wat de beste aanpak is.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-navy py-18 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/75">{text}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center rounded-full bg-primary-foreground px-7 text-base font-semibold text-navy"
          >
            Gratis kennismaking
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/30 px-7 text-base font-semibold text-primary-foreground"
          >
            <MessageCircle className="size-5" />
            WhatsApp
          </a>
          <a
            href={telUrl}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/30 px-7 text-base font-semibold text-primary-foreground"
          >
            <Phone className="size-5" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function QuickContact({
  title = "Even kennismaken?",
  intro = "Stuur een kort bericht zonder dat je je ergens aan vastlegt. Ik laat weten of en hoe ik kan helpen, en er is altijd eerst een vrijblijvende kennismaking van ongeveer 15 minuten.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <Section id="kennismaken">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Vrijblijvend" title={title} intro={intro} />
          <div className="mt-8 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center gap-3 rounded-xl border border-border bg-card px-5 transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-5 text-whatsapp" />
              <span className="text-sm">
                <span className="block font-semibold">Liever direct via WhatsApp</span>
                <span className="text-muted-foreground">{SITE.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={telUrl}
              className="flex min-h-14 items-center gap-3 rounded-xl border border-border bg-card px-5 transition-colors hover:bg-secondary"
            >
              <Phone className="size-5 text-sky" />
              <span className="text-sm">
                <span className="block font-semibold">Even bellen</span>
                <span className="text-muted-foreground">{SITE.phoneDisplay}</span>
              </span>
            </a>
          </div>
          <div className="mt-6">
            <CtaPair />
          </div>
        </div>
        <div className="surface-card p-6 sm:p-9">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
