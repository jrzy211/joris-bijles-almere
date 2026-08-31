import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { SITE, telUrl, whatsappUrl, mailUrl } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/vakken", label: "Vakken" },
  { to: "/niveaus", label: "Niveaus" },
  { to: "/examenhulp-almere", label: "Eindexamenhulp" },
  { to: "/over-joris", label: "Over Joris" },
  { to: "/tarieven", label: "Tarieven" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function CtaPair({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Link
        to="/contact"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
      >
        Plan een gratis kennismaking
      </Link>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-7 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
      >
        <MessageCircle className="size-5 text-whatsapp" />
        WhatsApp mij
      </a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight">Joris Abma Bijles</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Almere &amp; online
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.slice(1).map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground sm:inline-flex"
          >
            Gratis kennismaking
          </Link>
          <button
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-border p-2.5 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-1 xl:hidden">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3.5 text-base font-medium text-foreground"
            >
              {i.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
          >
            Gratis kennismaking
          </Link>
        </nav>
      )}
    </header>
  );
}

const footerLinks = [
  { to: "/wiskunde-bijles-almere", label: "Wiskunde bijles Almere" },
  { to: "/natuurkunde-bijles-almere", label: "Natuurkunde bijles Almere" },
  { to: "/scheikunde-bijles-almere", label: "Scheikunde bijles Almere" },
  { to: "/economie-bijles-almere", label: "Economie bijles Almere" },
  { to: "/bijles-almere", label: "Bijles Almere" },
  { to: "/examenhulp-almere", label: "Eindexamenhulp Almere" },
  { to: "/online-bijles", label: "Online bijles Nederland" },
] as const;

function Footer() {
  return (
    <footer className="mt-auto bg-navy py-14 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl">Joris Abma Bijles</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
              Persoonlijke bijles in Almere, Flevoland en online in heel Nederland. Voor MAVO,
              HAVO en VWO.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Vakken &amp; pagina&apos;s</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Niveaus</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/niveaus" hash="mavo" className="hover:text-primary-foreground">
                  MAVO bijles
                </Link>
              </li>
              <li>
                <Link to="/niveaus" hash="havo" className="hover:text-primary-foreground">
                  HAVO bijles
                </Link>
              </li>
              <li>
                <Link to="/niveaus" hash="vwo" className="hover:text-primary-foreground">
                  VWO bijles
                </Link>
              </li>
              <li>
                <Link to="/tarieven" className="hover:text-primary-foreground">
                  Tarieven
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-foreground">
                  Veelgestelde vragen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href={telUrl} className="hover:text-primary-foreground">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailUrl} className="break-all hover:text-primary-foreground">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>Almere, Flevoland, Nederland</li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Joris Abma Bijles · Almere · Bijles wiskunde, natuurkunde,
          scheikunde en economie
        </p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-whatsapp text-base font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-5" />
          WhatsApp
        </a>
        <a
          href={telUrl}
          aria-label={`Bel ${SITE.phoneDisplay}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-base font-semibold text-foreground"
        >
          <Phone className="size-5 text-sky" />
          Bellen
        </a>
      </div>
    </div>
  );
}

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}
