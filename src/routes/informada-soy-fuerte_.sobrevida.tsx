import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/sobrevida-hero.png";
import sideImg from "@/assets/sobrevida-2.png";
import iconFolleto from "@/assets/icono-folleto.png";
import iconInfografia from "@/assets/icono-infografia.png";
import iconVideo from "@/assets/icono-video.png";

export const Route = createFileRoute("/informada-soy-fuerte_/sobrevida")({
  head: () => ({
    meta: [
      { title: "Sobrevida — MILC" },
      {
        name: "description",
        content:
          "Da cada paso con seguridad. Información para acompañarte después del tratamiento de cáncer de mama.",
      },
    ],
  }),
  component: Page,
});

const ORANGE = "#F6931F";

const CARDS: Array<{
  title: string;
  type: string;
  icon: string;
  href?: string;
  vimeoId?: string;
  ytId?: string;
}> = [
  {
    title: "Fertilidad",
    type: "Folleto",
    icon: iconFolleto,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_86216cab6081476aa6184eb0e8bdebf0.pdf",
  },
  {
    title: "Sexualidad y fertilidad",
    type: "Video",
    icon: iconVideo,
    ytId: "5H9SbFSdNpw",
  },
  {
    title: "Sexualidad",
    type: "Folleto",
    icon: iconFolleto,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_9050a26f25f94354bec44e13df6dae07.pdf",
  },
  {
    title: "Cambios en el estilo de vida",
    type: "Video",
    icon: iconVideo,
    ytId: "X83PwHLHKYg",
  },
  {
    title: "Cambios emocionales y familiares",
    type: "Video",
    icon: iconVideo,
    ytId: "9F8x18uE2M8",
  },
  {
    title: "Linfedema",
    type: "Video",
    icon: iconVideo,
    ytId: "agTJhAFJ8R8",
  },
  {
    title: "Informada soy más fuerte",
    type: "Folleto",
    icon: iconFolleto,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_80d51eda3d36419989c3a9c2e9469dbf.pdf",
  },
  {
    title: "Reconstrucción Mamaria",
    type: "Video",
    icon: iconVideo,
    ytId: "n2IF3ZQ5UJI",
  },
];

function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#f4f4f5]">
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-cover bg-right"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <img src={heroBg} alt="" className="block md:hidden w-full h-auto object-cover" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-10 md:py-24">
          <div className="max-w-xl reveal">
            <p className="text-2xl md:text-3xl font-bold text-milc-gray">Sobrevida</p>
            <div className="gradient-bar my-5" />
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: ORANGE }}
            >
              Da cada paso
              <br /> con seguridad
            </h1>
            <p className="mt-6 text-milc-gray text-base md:text-lg leading-relaxed">
              Aun después de que finalice el tratamiento, los médicos continuarán
              revisándote frecuentemente.
            </p>
            <p className="mt-4 text-milc-gray text-base md:text-lg leading-relaxed">
              Durante estas visitas, te harán preguntas sobre cualquier problema o
              síntoma que tengas y te harán una revisión clínica. Dependiendo de los
              hallazgos, en caso de ser necesario, solicitarán exámenes, análisis de
              laboratorio, radiografías u otros estudios de imagen para determinar que
              el cáncer no haya regresado o para tratar efectos secundarios de los
              tratamientos.
            </p>
          </div>
        </div>
      </section>

      {/* Two columns */}
      <section className="grid md:grid-cols-2">
        <div
          className="min-h-[400px] md:min-h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${sideImg})` }}
        />
        <div
          className="px-6 md:px-12 py-12 md:py-16 reveal flex flex-col justify-center"
          style={{ backgroundColor: ORANGE }}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed text-center">
            Encuentra material informativo acerca de todo lo que debes de saber para
            acompañarte en tu proceso.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
            {[
              { icon: iconFolleto, label: "Folleto" },
              { icon: iconInfografia, label: "Infografía" },
              { icon: iconVideo, label: "Video" },
            ].map((it) => (
              <div key={it.label} className="flex flex-col items-center text-center">
                <img src={it.icon} alt={it.label} className="h-20 md:h-24 w-auto" />
                <div className="w-16 h-px bg-white/70 my-3" />
                <span className="text-white text-lg md:text-xl font-semibold">
                  {it.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards grid - 3 columns */}
      <section className="container-milc py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              className="reveal flex flex-col overflow-hidden shadow-lg rounded-md"
            >
              <div
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url(${sideImg})` }}
              />
              <div
                className="p-6 flex flex-col flex-1 text-white"
                style={{ backgroundColor: ORANGE }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs leading-tight">Sobrevida</span>
                  <span className="h-6 w-px bg-white/60" />
                  <img
                    src={c.icon}
                    alt=""
                    className="h-7 w-auto brightness-0 invert"
                  />
                  <span className="text-xs">{c.type}</span>
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-bold flex-1">{c.title}</h3>
                <div className="mt-4">
                  {c.ytId ? (
                    <Link
                      to="/youtube/$ytId"
                      params={{ ytId: c.ytId }}
                      search={{ title: c.title }}
                      className="inline-block border-2 border-white px-6 py-2 rounded-full text-white text-sm font-medium hover:bg-white transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                    >
                      Ver Contenido
                    </Link>
                  ) : c.vimeoId ? (
                    <Link
                      to="/video/$vimeoId"
                      params={{ vimeoId: c.vimeoId }}
                      search={{ title: c.title }}
                      className="inline-block border-2 border-white px-6 py-2 rounded-full text-white text-sm font-medium hover:bg-white transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                    >
                      Ver Contenido
                    </Link>
                  ) : (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border-2 border-white px-6 py-2 rounded-full text-white text-sm font-medium hover:bg-white transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                    >
                      Ver Contenido
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
