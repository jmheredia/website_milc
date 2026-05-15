import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/milc-assets";
import logoBlanco from "@/assets/milc-logo-blanco.png";
import waIcon from "@/assets/logowhatsappgris.png";
import fbIcon from "@/assets/logofacebookgris.png";
import igIcon from "@/assets/logoinstagra.png";
import twIcon from "@/assets/logotwitergris.png";

export function Footer() {
  return (
    <footer className="text-white/95" style={{ backgroundColor: "var(--milc-teal)" }}>
      <div className="container-milc py-12 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logoBlanco} alt="MILC" className="h-16 mb-4" />
          <p className="text-sm leading-relaxed text-white/85">
            Médicos e Investigadores en la Lucha contra el Cáncer de Mama.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white/70">Inicio</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-white/70">¿Quiénes somos?</Link></li>
            <li><Link to="/programas" className="hover:text-white/70">Programas</Link></li>
            <li><Link to="/informada-soy-fuerte" className="hover:text-white/70">Informada soy Fuerte</Link></li>
            <li><Link to="/investigacion" className="hover:text-white/70">Investigación</Link></li>
            <li><Link to="/colaboradores" className="hover:text-white/70">Colaboradores</Link></li>
            <li><Link to="/contacto" className="hover:text-white/70">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5"/> 55 5525-9644</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5"/> <a href="mailto:contacto@milc.org.mx" className="hover:text-white/70">contacto@milc.org.mx</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5"/> Eugenia 13-603. Col. Nápoles. Alcaldía Benito Juárez. CP 03810. CDMX</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-3">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-transform hover:scale-110"><img src={fbIcon} alt="Facebook" className="h-9 w-9"/></a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-transform hover:scale-110"><img src={igIcon} alt="Instagram" className="h-9 w-9"/></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="transition-transform hover:scale-110"><img src={twIcon} alt="Twitter" className="h-9 w-9"/></a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition-transform hover:scale-110"><img src={waIcon} alt="WhatsApp" className="h-9 w-9"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="container-milc py-5 text-center text-xs text-white/85">
          © {new Date().getFullYear()} MILC — Médicos e Investigadores en la Lucha contra el Cáncer de Mama. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
