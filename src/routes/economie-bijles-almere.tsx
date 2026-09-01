import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { economie as c } from "@/content/landing";
import { faqSchema, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/economie-bijles-almere")({
  component: () => <LandingPage c={c} />,
  head: () => ({
    ...pageMeta({ title: c.title, description: c.description, path: c.path }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(c.faq)) }],
  }),
});
