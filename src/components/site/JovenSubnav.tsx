import { Link, useRouterState } from "@tanstack/react-router";

const ITEMS = [
  { to: "/joven-y-fuerte/pacientes", label: "Pacientes" },
  { to: "/joven-y-fuerte/diagnostico", label: "Diagnóstico" },
  { to: "/joven-y-fuerte/tratamiento", label: "Tratamiento" },
  { to: "/joven-y-fuerte/aspectos-relevantes", label: "Aspectos relevantes" },
  { to: "/joven-y-fuerte/estilo-de-vida", label: "Estilo de vida" },
  { to: "/joven-y-fuerte/aspectos-psicologicos", label: "Aspectos psicológicos" },
  { to: "/joven-y-fuerte/supervivencia", label: "La supervivencia" },
  { to: "/joven-y-fuerte/testimonios", label: "Testimonios" },
] as const;

export function JovenSubnav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="sticky top-[80px] z-30 border-y border-milc-pink-soft bg-white/95 backdrop-blur shadow-sm"
      aria-label="Navegación Joven & Fuerte"
    >
      <div className="container-milc">
        <ul className="flex gap-1 overflow-x-auto py-3 no-scrollbar">
          {ITEMS.map((it) => {
            const active = pathname === it.to;
            return (
              <li key={it.to} className="shrink-0">
                <Link
                  to={it.to}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-milc-pink text-white"
                      : "text-milc-purple hover:bg-milc-pink-soft hover:text-milc-pink"
                  }`}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
