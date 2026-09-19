import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/*
  Hébergement sur GitHub Pages.

  Un site de projet est servi à https://<utilisateur>.github.io/<nom-du-depot>/
  Il faut donc que "base" soit égal au nom exact du dépôt GitHub.

  - REPO_NAME : à remplacer par le nom de ton dépôt.
  - Si tu utilises un domaine personnalisé, ou un dépôt nommé <utilisateur>.github.io,
    mets REPO_NAME = "" (le site sera alors servi à la racine).
  - En développement (npm run dev), la base reste "/".
*/
const REPO_NAME = "MTZ-PRO";

export default defineConfig(({ command }) => ({
  base: command === "build" && REPO_NAME ? `/${REPO_NAME}/` : "/",
  plugins: [react(), tailwindcss()],
}));
