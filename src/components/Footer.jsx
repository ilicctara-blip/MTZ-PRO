import { COMPANY } from "../content.js";
import Logo from "./Logo.jsx";
import { mutedText, sectionWidth } from "./ui.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 pb-[max(2rem,env(safe-area-inset-bottom))] dark:border-zinc-800">
      <div
        className={`${sectionWidth} flex flex-col gap-6 pt-10 md:flex-row md:items-center md:justify-between`}
      >
        <div className="flex flex-col gap-3">
          <Logo />
          <p className={`text-sm ${mutedText}`}>{COMPANY.tagline}</p>
        </div>
        <p className={`text-sm ${mutedText}`}>
          © {new Date().getFullYear()} <span translate="no">{COMPANY.name}</span>
        </p>
      </div>
    </footer>
  );
}
