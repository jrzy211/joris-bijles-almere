import { useState } from "react";
import { SITE } from "@/lib/site";

const subjects = ["Wiskunde", "Natuurkunde", "Scheikunde", "Economie", "Meerdere vakken"];
const forms = ["Online bijles", "Bijles bij mij thuis (Almere e.o.)", "Nog niet zeker"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Naam: ${data.get("naam")}`,
      `E-mail: ${data.get("email")}`,
      `Telefoon: ${data.get("telefoon")}`,
      `Niveau / klas: ${data.get("niveau")}`,
      `Vak: ${data.get("vak")}`,
      `Vorm: ${data.get("vorm")}`,
      "",
      `Bericht:`,
      `${data.get("bericht")}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Aanvraag gratis kennismaking",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/25";
  const label = "mb-1.5 block text-sm font-semibold text-foreground";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="naam">
            Naam
          </label>
          <input id="naam" name="naam" required className={field} placeholder="Voor- en achternaam" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="naam@voorbeeld.nl"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="telefoon">
            Telefoonnummer
          </label>
          <input id="telefoon" name="telefoon" className={field} placeholder="06 - " />
        </div>
        <div>
          <label className={label} htmlFor="niveau">
            Niveau en klas
          </label>
          <input id="niveau" name="niveau" className={field} placeholder="bijv. 4 havo" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="vak">
            Vak
          </label>
          <select id="vak" name="vak" className={field}>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="vorm">
            Voorkeur
          </label>
          <select id="vorm" name="vorm" className={field}>
            {forms.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="bericht">
          Waar loopt het vast?
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          className={field}
          placeholder="Vertel kort waar je tegenaan loopt en wanneer je zou willen starten."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
      >
        Plan een gratis kennismaking
      </button>

      {sent && (
        <p className="text-sm text-muted-foreground">
          Je mailprogramma is geopend met je gegevens. Geen mailprogramma? Stuur dan een
          WhatsApp-bericht — meestal reageer ik binnen een paar uur.
        </p>
      )}
      <p className="text-xs text-muted-foreground">
        Een kennismaking van 20 minuten is altijd gratis en vrijblijvend.
      </p>
    </form>
  );
}
