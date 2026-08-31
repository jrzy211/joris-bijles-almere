import { useState } from "react";
import { SITE } from "@/lib/site";

const vakken = [
  "Wiskunde",
  "Natuurkunde",
  "Scheikunde",
  "Economie",
  "Huiswerkbegeleiding",
  "Examenvoorbereiding",
];

export function ContactForm({ id = "kennismaking" }: { id?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Naam: ${d.get("naam")}`,
      `Contact: ${d.get("contact")}`,
      `Vak: ${d.get("vak")}`,
      `Niveau / leerjaar: ${d.get("niveau")}`,
      "",
      "Waar hulp bij nodig:",
      `${d.get("hulp")}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Gratis kennismaking aanvragen",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/25";
  const label = "mb-1.5 block text-sm font-semibold text-foreground";

  return (
    <form id={id} onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${id}-naam`}>
            Naam
          </label>
          <input id={`${id}-naam`} name="naam" required className={field} placeholder="Je naam" />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-contact`}>
            E-mail of telefoonnummer
          </label>
          <input
            id={`${id}-contact`}
            name="contact"
            required
            className={field}
            placeholder="Waar mag ik je bereiken?"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${id}-vak`}>
            Vak
          </label>
          <select id={`${id}-vak`} name="vak" className={field}>
            {vakken.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor={`${id}-niveau`}>
            Niveau / leerjaar
          </label>
          <input
            id={`${id}-niveau`}
            name="niveau"
            className={field}
            placeholder="bijv. 4 HAVO"
          />
        </div>
      </div>

      <div>
        <label className={label} htmlFor={`${id}-hulp`}>
          Waar heb je hulp bij nodig?
        </label>
        <textarea
          id={`${id}-hulp`}
          name="hulp"
          rows={3}
          className={field}
          placeholder="Vertel kort waar je tegenaan loopt."
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
      >
        Gratis kennismaking aanvragen
      </button>

      {sent ? (
        <p className="text-sm text-muted-foreground">
          Je e-mailprogramma is geopend met je gegevens. Liever direct contact? Stuur dan een
          WhatsApp-bericht.
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          Vrijblijvend kennismaken van ongeveer 15 minuten. Geen verplichting.
        </p>
      )}
    </form>
  );
}
