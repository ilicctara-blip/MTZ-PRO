/*
  Petits éléments partagés.
  Forme : un seul rayon de coins sur toute la page (rounded-xl), boutons compris.
  Z-index : une seule couche, l'en-tête collant (z-40).
*/

/* Anneau de focus visible, contrasté en clair (noir) comme en sombre (jaune). */
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 dark:focus-visible:outline-brand";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold " +
  "transition-[background-color,color,scale] duration-200 motion-safe:active:scale-[0.98] " +
  focusRing;

const variants = {
  primary: "bg-brand text-zinc-950 hover:bg-brand-hover",
  secondary:
    "border border-zinc-400 text-zinc-950 hover:bg-zinc-200 dark:border-zinc-500 dark:text-zinc-50 dark:hover:bg-zinc-800",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
};

export function Button({ href, variant = "primary", size = "md", icon: Icon, children }) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${sizes[size]}`}>
      {Icon && <Icon className="size-5" aria-hidden="true" />}
      {children}
    </a>
  );
}

/* Wrapper de section : largeur maximale et marges communes. */
export const sectionWidth = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export const mutedText = "text-zinc-600 dark:text-zinc-400";
