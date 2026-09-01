import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site/Layout";
import { FaqBlock, FinalCta, Section, SectionHeading } from "@/components/site/Blocks";
import { generalFaq } from "@/content/faq";
import { faqSchema, pageMeta } from "@/lib/site";

const title = "Veelgestelde vragen over bijles in Almere | Joris Abma Bijles";
const description =
  "Antwoord op de meestgestelde vragen over bijles in Almere en online: leerjaren, vakken, eindexamenhulp, tarieven, bijles aan huis en vrijblijvend kennismaken.";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    ...pageMeta({ title, description, path: "/faq" }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(generalFaq)) }],
  }),
});

function FaqPage() {
  return (
    <Page>
      <section className="border-b border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
            Veelgestelde vragen over bijles
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Korte, eerlijke antwoorden op de vragen die ouders en leerlingen me het vaakst stellen.
            Staat je vraag er niet bij? Stuur gerust een WhatsApp-bericht.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading title="Alles op een rij" />
          <FaqBlock items={generalFaq} />
        </div>
      </Section>
      <FinalCta />
    </Page>
  );
}
