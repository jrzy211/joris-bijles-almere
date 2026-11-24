export const SITE = {
  name: "Joris Abma Bijles",
  tutor: "Joris Abma",
  city: "Almere",
  region: "Flevoland",
  country: "Nederland",
  phoneDisplay: "06 22555557",
  phoneLink: "+31622555557",
  whatsappNumber: "31622555557",
  email: "jorisabma25@gmail.com",
  origin: "https://www.bijlesjoris.nl",
  whatsappMessage:
    "Hoi Joris! Ik heb een vraag over bijles en wil graag vrijblijvend kennismaken.",
};

export const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

export const telUrl = `tel:${SITE.phoneLink}`;
export const mailUrl = `mailto:${SITE.email}`;

export const areas = ["Almere Literatuurwijk", "Almere Muziekwijk"];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.origin}/#business`,
    name: SITE.name,
    description:
      "Persoonlijke online bijles in wiskunde, natuurkunde, scheikunde en economie in heel Nederland, en aan huis in Almere rond de Literatuurwijk en Muziekwijk, voor MAVO, HAVO en VWO.",
    url: SITE.origin,
    telephone: SITE.phoneLink,
    email: SITE.email,
    priceRange: "€30",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Almere",
      addressRegion: "Flevoland",
      addressCountry: "NL",
    },
    areaServed: [
      { "@type": "City", name: "Almere" },
      { "@type": "Country", name: "Nederland" },
    ],
    founder: {
      "@type": "Person",
      name: "Joris Abma",
      jobTitle: "Bijlesdocent",
      alumniOf: { "@type": "CollegeOrUniversity", name: "Vrije Universiteit Amsterdam" },
    },
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
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function pageMeta(opts: { title: string; description: string; path: string }) {
  const url = `${SITE.origin}${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
