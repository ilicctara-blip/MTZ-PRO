import { Lightning } from "@phosphor-icons/react";
import { focusRing } from "./ui.jsx";

/* Version web du logo : éclair jaune de la carte de visite + nom en Poppins ExtraBold. */
export default function Logo() {
  return (
    <a
      href="#top"
      aria-label="MTZ PRO, retour en haut de la page"
      className={`inline-flex items-center gap-2.5 rounded-xl ${focusRing}`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-brand text-zinc-950">
        <Lightning weight="fill" className="size-5" aria-hidden="true" />
      </span>
      <span translate="no" className="text-xl font-extrabold tracking-tight">
        MTZ&nbsp;PRO
      </span>
    </a>
  );
}
