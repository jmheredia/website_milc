import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/joven-y-fuerte")({
  head: () => ({
    meta: [
      { title: "Joven & Fuerte — MILC" },
      { name: "description", content: "Joven & Fuerte: programa de MILC enfocado en mujeres menores de 40 años con cáncer de mama." },
    ],
  }),
  component: Page,
});

const W = "https://static.wixstatic.com/media/";
const HERO = `${W}d3bdf4_7b9241a26d5743bc8f5ce5371e54c8d7~mv2.jpg/v1/fill/w_1905,h_700,al_t,q_85,enc_avif,quality_auto/d3bdf4_7b9241a26d5743bc8f5ce5371e54c8d7~mv2.jpg`;
const LOGO_WHITE = `${W}d3bdf4_c624b7ffc4f4451181b8ac9529fdc8a5~mv2.png/v1/fill/w_403,h_249,al_c,q_85,enc_avif,quality_auto/Joven-y-Fuerte_White.png`;

const ACERCA = [
  { label: "Diagnóstico", to: "/joven-y-fuerte/diagnostico" },
  { label: "Tratamiento", to: "/joven-y-fuerte/tratamiento" },
  { label: "Aspectos relevantes", to: "/joven-y-fuerte/aspectos-relevantes" },
  { label: "Estilo de vida", to: "/joven-y-fuerte/estilo-de-vida" },
  { label: "Aspectos psicológicos", to: "/joven-y-fuerte/aspectos-psicologicos" },
  { label: "La supervivencia", to: "/joven-y-fuerte/supervivencia" },
] as const;

function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img src={HERO} alt="Joven y Fuerte" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative z-10 h-full container-milc flex items-center justify-center">
          <img src={LOGO_WHITE} alt="Joven & Fuerte" className="h-40 md:h-56 object-contain drop-shadow-2xl" />
        </div>
      </section>

      {/* 3 cards */}
      <section className="container-milc py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Pacientes */}
          <div className="reveal rounded-2xl bg-milc-pink-soft/40 p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-milc-dark">Pacientes</h2>
            <p className="mt-4 text-milc-gray flex-1">
              Si eres paciente joven con diagnóstico de cáncer de mama, encuentra orientación,
              recursos y una comunidad que te acompaña en cada paso del proceso.
            </p>
            <Link
              to="/joven-y-fuerte/pacientes"
              className="mt-6 inline-flex self-start items-center justify-center rounded-full px-6 py-2 font-semibold text-milc-purple transition-all hover:brightness-95"
              style={{ backgroundColor: "var(--milc-teal)" }}
            >
              Ver más
            </Link>
          </div>

          {/* Acerca de */}
          <div className="reveal rounded-2xl bg-milc-pink-soft/40 p-8">
            <h2 className="text-3xl font-bold text-milc-dark">Acerca de</h2>
            <ul className="mt-4 space-y-2 list-disc list-inside marker:text-milc-pink">
              {ACERCA.map((a) => (
                <li key={a.label}>
                  <Link
                    to={a.to}
                    className="text-milc-purple font-medium hover:text-milc-pink hover:underline"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonios */}
          <div className="reveal rounded-2xl bg-milc-pink-soft/40 p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-milc-dark">Testimonios</h2>
            <p className="mt-4 text-milc-gray flex-1">
              Conoce las historias de mujeres jóvenes que han enfrentado el cáncer de mama
              y hoy comparten su experiencia para acompañar a otras.
            </p>
            <Link
              to="/joven-y-fuerte/testimonios"
              className="mt-6 inline-flex self-start items-center justify-center rounded-full px-6 py-2 font-semibold text-milc-purple transition-all hover:brightness-95"
              style={{ backgroundColor: "var(--milc-teal)" }}
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
