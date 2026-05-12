import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { A, SOCIAL_LINKS } from "@/lib/milc-assets";
import waIcon from "@/assets/logowhatsappgris.png";
import fbIcon from "@/assets/logofacebookgris.png";
import igIcon from "@/assets/logoinstagra.png";
import twIcon from "@/assets/logotwitergris.png";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — MILC" },
      { name: "description", content: "Nos encantaría conocerte. Un especialista está listo para apoyarte en lo que necesites." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="grid lg:grid-cols-2 items-stretch">
      <div className="reveal container-milc py-10 md:py-12 lg:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold text-milc-pink leading-[1.05]">
          Nos encantaría<br />conocerte
        </h1>
        <div className="gradient-bar my-4" />
        <p className="text-base text-milc-gray max-w-md">
          Un especialista está listo para apoyarte en lo que necesites.
        </p>

        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-milc-pink-soft text-milc-pink">
              <Phone className="h-4 w-4" />
            </span>
            <span className="text-base text-milc-gray">55 5525-9644</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-milc-pink-soft text-milc-pink">
              <Mail className="h-4 w-4" />
            </span>
            <a href="mailto:contacto@milc.org.mx" className="text-base text-milc-gray hover:text-milc-pink">
              contacto@milc.org.mx
            </a>
          </li>
          <li className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-milc-pink-soft text-milc-pink shrink-0">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="text-base text-milc-gray">
              Eugenia 13-603. Colonia Nápoles.<br />Alcaldía Benito Juárez. C.P. 03810. CDMX
            </span>
          </li>
        </ul>

        <div className="mt-6 flex gap-4">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110">
            <img src={igIcon} alt="Instagram" className="h-8 w-8" />
          </a>
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-transform hover:scale-110">
            <img src={fbIcon} alt="Facebook" className="h-8 w-8" />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-transform hover:scale-110">
            <img src={twIcon} alt="Twitter" className="h-8 w-8" />
          </a>
        </div>

        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-white shadow-md transition-transform hover:scale-[1.01]"
          style={{ backgroundColor: "var(--milc-teal)" }}
        >
          <div className="flex items-center gap-3">
            <img src={waIcon} alt="" className="h-8 w-8 brightness-0 invert" />
            <span className="text-lg font-semibold leading-tight">
              Envíanos un<br />Whatsapp
            </span>
          </div>
          <span className="rounded-full border-2 border-white px-5 py-1.5 text-sm font-semibold whitespace-nowrap">
            Click Aquí
          </span>
        </a>
      </div>

      <div className="reveal relative min-h-[400px] lg:min-h-full">
        <img src={A.contactImg} alt="Contacto MILC" className="absolute inset-0 h-full w-full object-cover" />
      </div>
    </section>
  );
}
