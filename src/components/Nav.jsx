import { Phone } from "@phosphor-icons/react";
import { COMPANY } from "../content.js";
import Logo from "./Logo.jsx";
import { Button, focusRing, mutedText, sectionWidth } from "./ui.jsx";

const linkClass = `hidden rounded-xl px-2 py-1 text-sm font-medium ${mutedText} transition-colors hover:text-zinc-950 dark:hover:text-zinc-50 md:inline-block ${focusRing}`;

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className={`${sectionWidth} flex h-16 items-center justify-between gap-4`}>
        <Logo />
        <nav aria-label="Navigation principale" className="flex items-center gap-2 md:gap-4">
          <a href="#services" className={linkClass}>
            Services
          </a>
          <a href="#realisations" className={linkClass}>
            Réalisations
          </a>
          <Button href={COMPANY.phoneHref} size="sm" icon={Phone}>
            Appeler
          </Button>
        </nav>
      </div>
    </header>
  );
}
