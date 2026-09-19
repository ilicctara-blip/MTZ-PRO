import { Drop, Lightning, PaintRoller, Rows, SquaresFour } from "@phosphor-icons/react";
import { PHOTOS } from "../content.js";
import { mutedText, sectionWidth } from "./ui.jsx";

/*
  Bento de 5 cellules exactement (5 services, aucune cellule vide) :
  Parquet (7 col, 2 lignes) + Électricité (5) + Carrelage (5), puis Plomberie (5) + Peinture (7).
  Variété visuelle : 2 cellules photo, 1 cellule jaune de marque, 1 cellule sombre, 1 cellule neutre.
  Mobile (< 768px) : une seule colonne, dans l'ordre de lecture.
*/

function CellPhoto({ photo, sizes, className = "", position = "object-center" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 size-full object-cover ${position}`}
      />
    </div>
  );
}

function CellText({ icon: Icon, title, children, tone = "default", className = "" }) {
  const body = {
    default: mutedText,
    brand: "text-zinc-900",
    dark: "text-zinc-300",
  }[tone];

  return (
    <div className={`flex flex-col gap-4 p-6 md:p-8 ${className}`}>
      <Icon className="size-8" aria-hidden="true" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={`mt-2 max-w-[42ch] text-pretty ${body}`}>{children}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className={`${sectionWidth} scroll-mt-20 py-20 md:py-28`}>
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
        Cinq corps de métier pour votre logement
      </h2>
      <p className={`mt-4 max-w-[60ch] text-lg text-pretty ${mutedText}`}>
        Une équipe d’entrepreneurs qui travaillent ensemble, de l’installation électrique à la pose du
        carrelage.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        {/* Parquet : grande cellule photo */}
        <article className="flex flex-col overflow-hidden rounded-xl bg-zinc-100 md:col-span-7 md:row-span-2 dark:bg-zinc-900">
          <CellPhoto
            photo={PHOTOS.couloir}
            sizes="(min-width: 768px) 58vw, 100vw"
            position="object-[center_72%]"
            className="min-h-72 flex-1"
          />
          <CellText icon={Rows} title="Parquet">
            Pose de parquet flottant, massif ou contrecollé, avec préparation du sol.
          </CellText>
        </article>

        {/* Électricité : cellule jaune de marque */}
        <article className="rounded-xl bg-brand text-zinc-950 md:col-span-5">
          <CellText icon={Lightning} title="Électricité" tone="brand">
            Installation de prises, de points lumineux et de tableaux électriques.
          </CellText>
        </article>

        {/* Carrelage : photo + texte */}
        <article className="grid overflow-hidden rounded-xl bg-zinc-100 md:col-span-5 md:grid-cols-5 dark:bg-zinc-900">
          <CellPhoto
            photo={PHOTOS.carrelage}
            sizes="(min-width: 768px) 17vw, 100vw"
            className="min-h-56 md:col-span-2"
          />
          <div className="md:col-span-3">
            <CellText icon={SquaresFour} title="Carrelage">
              Pose de carrelage au sol et au mur (salle de bain, cuisine…), avec mise à niveau soignée.
            </CellText>
          </div>
        </article>

        {/* Plomberie : cellule sombre */}
        <article className="flex flex-col rounded-xl bg-zinc-900 text-zinc-50 md:col-span-5 dark:bg-zinc-800">
          <CellText icon={Drop} title="Plomberie" tone="dark" className="flex-1 justify-between">
            Plomberie pour tout le logement : arrivées d’eau, évacuations et équipements.
          </CellText>
        </article>

        {/* Peinture et papier peint : deux photos puis texte */}
        <article className="flex flex-col overflow-hidden rounded-xl border border-zinc-300 md:col-span-7 dark:border-zinc-700">
          <div className="grid grid-cols-2 gap-2 p-2">
            <CellPhoto
              photo={PHOTOS.papierPeint}
              sizes="(min-width: 768px) 29vw, 50vw"
              className="h-44 rounded-lg sm:h-56"
            />
            <CellPhoto
              photo={PHOTOS.peintureSalon}
              sizes="(min-width: 768px) 29vw, 50vw"
              position="object-[center_60%]"
              className="h-44 rounded-lg sm:h-56"
            />
          </div>
          <CellText icon={PaintRoller} title="Peinture et papier peint">
            Peinture des murs, des plafonds et des boiseries, pose de papier peint, après préparation des supports.
          </CellText>
        </article>
      </div>
    </section>
  );
}
