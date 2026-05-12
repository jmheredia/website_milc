import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { A } from "@/lib/milc-assets";
import logoColor from "@/assets/milc-logo-color.png";

type SubItem = { label: string; to: string; hash?: string };
type NavItem = { label: string; to: string; sub?: SubItem[] };

const NAV: NavItem[] = [
  { label: "Inicio", to: "/" },
  {
    label: "¿Quiénes somos?",
    to: "/quienes-somos",
    sub: [{ label: "Nuestro equipo", to: "/quienes-somos", hash: "equipo" }],
  },
  {
    label: "Programas",
    to: "/programas",
    sub: [
      { label: "Empresa Rosa", to: "/programas", hash: "empresa-rosa" },
      { label: "Alerta Rosa", to: "/programas", hash: "alerta-rosa" },
      { label: "Joven & Fuerte", to: "/programas", hash: "joven-fuerte" },
      { label: "EvaRisk", to: "/programas", hash: "evarisk" },
    ],
  },
  {
    label: "Informada soy Fuerte",
    to: "/informada-soy-fuerte",
    sub: [
      { label: "Detección Oportuna", to: "/informada-soy-fuerte", hash: "deteccion" },
      { label: "Diagnóstico", to: "/informada-soy-fuerte", hash: "diagnostico" },
      { label: "Tratamiento", to: "/informada-soy-fuerte", hash: "tratamiento" },
      { label: "Sobrevida", to: "/informada-soy-fuerte", hash: "sobrevida" },
    ],
  },
  {
    label: "Investigación",
    to: "/investigacion",
    sub: [
      { label: "GICAMx", to: "/investigacion/gicamx" },
      { label: "Artículos científicos", to: "/investigacion/articulos-cientificos" },
      { label: "Libros", to: "/investigacion/libros" },
      { label: "Premios", to: "/investigacion/premios" },
    ],
  },
  { label: "Colaboradores", to: "/colaboradores" },
  { label: "Contacto", to: "/contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change handled by location pathname
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white"
      }`}
    >
      <div className="container-milc flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" aria-label="Inicio MILC">
          <img src={logoColor} alt="MILC" className="h-12 w-auto" />
          <span className="sr-only">MILC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-milc-dark transition-colors hover:text-milc-pink"
                activeProps={{ className: "text-milc-pink" }}
              >
                {item.label}
                {item.sub && <ChevronDown className="h-4 w-4 opacity-60" />}
              </Link>
              {item.sub && (
                <div className="invisible absolute left-1/2 top-full z-30 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[220px] rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5">
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        hash={s.hash}
                        className="block rounded-xl px-4 py-2 text-sm font-medium text-milc-purple hover:bg-milc-pink-soft hover:text-milc-pink"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-milc-dark hover:bg-milc-pink-soft"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl animate-[slide-in-right_0.25s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <img src={logoColor} alt="MILC" className="h-10" />
              <button aria-label="Cerrar" onClick={() => setOpen(false)} className="h-10 w-10 rounded-full hover:bg-milc-pink-soft inline-flex items-center justify-center">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <div key={item.label}>
                  <div className="flex items-stretch">
                    <Link
                      to={item.to}
                      onClick={() => !item.sub && setOpen(false)}
                      className="flex-1 rounded-xl px-3 py-3 font-semibold text-milc-dark hover:bg-milc-pink-soft hover:text-milc-pink"
                    >
                      {item.label}
                    </Link>
                    {item.sub && (
                      <button
                        aria-label="Expandir"
                        onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                        className="px-3 text-milc-purple"
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform ${openMobile === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.sub && openMobile === item.label && (
                    <div className="ml-3 border-l-2 border-milc-pink-soft pl-3">
                      {item.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          hash={s.hash}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-milc-purple hover:bg-milc-pink-soft"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
