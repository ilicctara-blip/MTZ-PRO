import { IconContext } from "@phosphor-icons/react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    /* Une seule famille d'icônes (Phosphor), un seul graisse pour toute la page. */
    <IconContext.Provider value={{ weight: "bold" }}>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-zinc-950"
      >
        Aller au contenu
      </a>
      <Nav />
      <main id="contenu">
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </IconContext.Provider>
  );
}
