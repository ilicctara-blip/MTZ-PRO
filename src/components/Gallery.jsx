import { GALLERY } from "../content.js";
import { mutedText, sectionWidth } from "./ui.jsx";

/*
  Réalisations : grille de photos, 2 colonnes sur mobile, 4 sur desktop
  avec un décalage vertical une photo sur deux. Légendes sous les photos.
*/
export default function Gallery() {
  return (
    <section id="realisations" className={`${sectionWidth} scroll-mt-20 pb-20 md:pb-28`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
        Réalisations
      </h2>
      <p className={`mt-4 max-w-[60ch] text-lg text-pretty ${mutedText}`}>
        Photos de chantiers de parquet, de carrelage et de rénovation.
      </p>

      {GALLERY.length > 0 && (
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
          {GALLERY.map(({ photo, caption }, i) => (
            <li key={photo.src} className={i % 2 === 1 ? "lg:mt-12" : undefined}>
              <figure>
                <img
                  src={photo.src}
                  srcSet={photo.srcSet}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full rounded-xl object-cover"
                />
                <figcaption className={`mt-3 text-sm text-pretty ${mutedText}`}>{caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
