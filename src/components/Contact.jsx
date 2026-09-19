import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { COMPANY } from "../content.js";
import { focusRing, mutedText, sectionWidth } from "./ui.jsx";

function ContactLink({ href, icon: Icon, label, value }) {
  return (
    <a
      href={href}
      className={`group flex min-w-0 items-center gap-4 rounded-xl border border-zinc-300 bg-zinc-50 p-4 sm:gap-5 sm:p-6 transition-colors hover:border-brand hover:bg-brand hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:border-brand ${focusRing}`}
    >
      <Icon className="size-8 shrink-0" aria-hidden="true" />
      <span className="min-w-0">
        <span className={`block text-sm group-hover:text-zinc-800 ${mutedText}`}>{label}</span>
        <span className="block text-base font-semibold break-words tabular-nums sm:text-lg lg:text-2xl">
          {value}
        </span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className={`${sectionWidth} scroll-mt-20 pb-20 md:pb-28`}>
      <div className="rounded-xl bg-zinc-100 p-6 sm:p-8 md:p-14 dark:bg-zinc-900">
        <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">
          Un projet de travaux&nbsp;?
        </h2>
        <p className={`mt-4 max-w-[60ch] text-lg text-pretty ${mutedText}`}>
          Appelez ou envoyez un email avec une description du chantier et quelques photos.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <ContactLink
            href={COMPANY.phoneHref}
            icon={Phone}
            label="Téléphone"
            value={COMPANY.phoneDisplay}
          />
          <ContactLink
            href={COMPANY.emailHref}
            icon={EnvelopeSimple}
            label="Email"
            value={COMPANY.email}
          />
        </div>
      </div>
    </section>
  );
}
