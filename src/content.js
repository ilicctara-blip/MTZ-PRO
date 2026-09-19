/* Toutes les informations de l'entreprise au même endroit (source : carte de visite). */

export const COMPANY = {
  name: "MTZ PRO",
  tagline: "Spécialiste dans les travaux généraux",
  phoneDisplay: "06\u00a095\u00a061\u00a011\u00a009",
  phoneHref: "tel:+33695611109",
  email: "zoran.ilic39@gmail.com",
  emailHref:
    "mailto:zoran.ilic39@gmail.com?subject=Demande%20de%20devis%20pour%20des%20travaux",
};

/* Les valeurs width/height/srcSet sont générées à partir de public/images. */
const img = (name, small, large, width, height) => ({
  src: `${import.meta.env.BASE_URL}images/${name}-${large}.webp`,
  srcSet:
    `${import.meta.env.BASE_URL}images/${name}-${small}.webp ${small}w, ` +
    `${import.meta.env.BASE_URL}images/${name}-${large}.webp ${large}w`,
  width,
  height,
});

export const PHOTOS = {
  salon: {
    ...img("salon-parquet", 640, 1200, 1200, 1600),
    alt: "Séjour avec un parquet en chêne fraîchement posé et une grande baie vitrée",
  },
  couloir: {
    ...img("couloir-parquet", 640, 1200, 1200, 1600),
    alt: "Couloir avec un parquet en chêne posé entre les portes de placards",
  },
  carrelage: {
    ...img("carrelage-croisillons", 640, 1152, 1152, 2048),
    alt: "Carrelage posé au sol avec des croisillons de mise à niveau bleus",
  },
  colle: {
    ...img("parquet-colle", 640, 1200, 1200, 1600),
    alt: "Lames de parquet en chêne collées au seuil d'une pièce, avec la spatule et le maillet",
  },
  sol: {
    ...img("sol-prepare-chambre", 640, 1200, 1200, 1600),
    alt: "Chambre aux murs repeints avec la sous-couche du sol posée et les premières lames de parquet",
  },
  couloir2: {
    ...img("couloir-parquet-2", 640, 1200, 1200, 1600),
    alt: "Couloir desservant plusieurs pièces, avec un parquet en chêne posé",
  },
  papierPeint: {
    ...img("salle-a-manger-papier-peint", 640, 1200, 1200, 900),
    alt: "Salle à manger avec un papier peint panoramique de paysage tropical, un lustre et un miroir doré",
  },
  salonPeinture: {
    ...img("salon-peinture", 640, 1200, 1200, 1600),
    alt: "Salon aux murs et aux moulures peints, avec un éclairage indirect au plafond",
  },
  papierPeint: {
    ...img("papier-peint-salle-a-manger", 640, 1200, 1200, 900),
    alt: "Salle à manger avec un papier peint panoramique de paysage tropical en noir et blanc, des moulures et un lustre",
  },
  peintureSalon: {
    ...img("peinture-salon", 640, 1200, 1200, 1600),
    alt: "Salon avec moulures peintes en blanc et boiseries laquées en noir, éclairées en lumière indirecte",
  },
  salleDeBain: {
    ...img("salle-de-bain", 640, 900, 900, 1600),
    alt: "Salle de bain en cours de rénovation avec le sol préparé pour le carrelage",
  },
};

/* Photos de la section Réalisations, avec légende factuelle. */
export const GALLERY = [
  { photo: PHOTOS.colle, caption: "Pose de parquet collé" },
  { photo: PHOTOS.sol, caption: "Sol préparé avant la pose du parquet" },
  { photo: PHOTOS.salleDeBain, caption: "Salle de bain en cours de rénovation" },
  { photo: PHOTOS.couloir2, caption: "Parquet posé dans un couloir" },
];
