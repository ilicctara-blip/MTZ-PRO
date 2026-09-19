# MTZ PRO, site vitrine

React 19 + Vite + Tailwind CSS v4. Icônes Phosphor, police Poppins auto-hébergée (Fontsource).

## Lancer le projet

```bash
npm install
npm run dev      # développement sur http://localhost:5173
npm run build    # version de production dans dist/
```

## Où modifier quoi

- `src/content.js` : téléphone, email, phrase d'accroche, photos et légendes de la galerie.
- `src/components/Services.jsx` : textes des 5 services.
- `src/index.css` : couleur de marque (`--color-brand`) et police.
- `public/images/` : photos en WebP (deux tailles chacune : 640 px et taille maximale).

## Ajouter une photo

1. Exporter la photo en WebP, en deux largeurs (`nom-640.webp` et `nom-1200.webp`).
2. La déposer dans `public/images/`.
3. Ajouter une entrée dans `PHOTOS` puis dans `GALLERY` (`src/content.js`), avec un texte `alt` qui décrit la photo.

## Hébergement

Le dossier `dist/` est un site statique : Netlify, Vercel, Cloudflare Pages ou n'importe quel hébergeur classique.
Le site est prévu pour être servi à la racine du domaine (chemins `/images/...`).
