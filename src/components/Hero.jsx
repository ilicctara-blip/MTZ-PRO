import { ArrowRight, Phone } from "@phosphor-icons/react";
import { COMPANY, PHOTOS } from "../content.js";
import { Button, mutedText, sectionWidth } from "./ui.jsx";

/* Hero : split asymétrique 7/5, texte à gauche, photo réelle à droite. Pas d'eyebrow, pas de tagline sous les CTA. */
export default function Hero() {
  const photo = PHOTOS.salon;

  return (
    <section
      id="top"
      className={`${sectionWidth} grid min-h-[calc(100dvh-4rem)] items-center gap-10 pt-10 pb-12 md:grid-cols-12 md:gap-12 md:pt-8`}
    >
      <div className="md:col-span-7">
        <h1 className="text-balance text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Spécialiste des{" "}
          <mark className="box-decoration-clone rounded-xl bg-brand px-3 py-0.5 text-zinc-950">
            travaux généraux
          </mark>
        </h1>
        <p className={`mt-6 max-w-[48ch] text-lg text-pretty ${mutedText}`}>
          Électricité, plomberie, peinture, papier peint, parquet et carrelage pour rénover votre logement.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={COMPANY.phoneHref} icon={Phone}>
            Appeler
          </Button>
          <Button href="#realisations" variant="secondary" icon={ArrowRight}>
            Réalisations
          </Button>
        </div>
      </div>

      <div className="md:col-span-5">
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(min-width: 768px) 40vw, 100vw"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          fetchPriority="high"
          decoding="async"
          className="aspect-[4/3] w-full rounded-xl object-cover md:aspect-[4/5] md:max-h-[calc(100dvh-8rem)]"
        />
      </div>
    </section>
  );
}
