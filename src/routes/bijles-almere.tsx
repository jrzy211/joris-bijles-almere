import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { bijlesAlmere as c } from "@/content/landing";
import { faqSchema, localBusinessSchema, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/bijles-almere")({
  component: () => <LandingPage c={c} />,
  head: () => ({
    ...pageMeta({ title: c.title, description: c.description, path: c.path }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(c.faq)) },
    ],
  }),
});
