import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/tratamiento-hero.png";
import sideImg from "@/assets/tratamiento-2.png";
import iconFolleto from "@/assets/icono-folleto.png";
import iconInfografia from "@/assets/icono-infografia.png";
import iconVideo from "@/assets/icono-video.png";
import card1 from "@/assets/tratamiento-cards/c1.jpg";
import card2 from "@/assets/tratamiento-cards/c2.jpg";
import card3 from "@/assets/tratamiento-cards/c3.jpg";
import card4 from "@/assets/tratamiento-cards/c4.jpg";
import card5 from "@/assets/tratamiento-cards/c5.jpg";
import card6 from "@/assets/tratamiento-cards/c6.jpg";
import card7 from "@/assets/tratamiento-cards/c7.jpg";
import card8 from "@/assets/tratamiento-cards/c8.jpg";

export const Route = createFileRoute("/informada-soy-fuerte_/tratamiento")({
  head: () => ({
    meta: [
      { title: "Tratamiento — MILC" },
      {
        name: "description",
        content:
          "Información y material para acompañarte en tu proceso de tratamiento de cáncer de mama.",
      },
    ],
  }),
  component: Page,
});

const TEAL = "#7FC9C6";

const CARDS = [
  {
    title: "Tipos de tratamiento para cáncer de mama",
    type: "Video",
    icon: iconVideo,
    img: card1,
    vimeoId: "1191294951",
  },
  {
    title: "Tratamiento Anti Her 2",
    type: "Video",
    icon: iconVideo,
    img: card2,
    vimeoId: "1191295067",
  },
  {
    title: "Quimioterapia",
    type: "Folleto",
    icon: iconFolleto,
    img: card3,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_67adedb4cdc04faab26478f814082f00.pdf",
  },
  {
    title: "Quimioterapia",
    type: "Video",
    icon: iconVideo,
    img: card4,
    ytId: "f1CBonLWVNM",
  },
  {
    title: "Tratamiento para cáncer de mama sensible a hormonas",
    type: "Video",
    icon: iconVideo,
    img: card5,
    ytId: "UUgs3z8NIjs",
  },
  {
    title: "Informada soy más fuerte",
    type: "Folleto",
    icon: iconFolleto,
    img: card6,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_80d51eda3d36419989c3a9c2e9469dbf.pdf",
  },
  {
    title: "Linfedema",
    type: "Video",
    icon: iconVideo,
    img: card7,
    ytId: "agTJhAFJ8R8",
  },
  {
    title: "Reconstrucción Mamaria",
    type: "Video",
    icon: iconVideo,
    img: card8,
    ytId: "n2IF3ZQ5UJI",
  },
] as Array<{
  title: string;
  type: string;
  icon: string;
  img: string;
  vimeoId?: string;
  ytId?: string;
  href?: string;
}>;

function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative bg-[#f4f4f5] bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:py-24">
          <div className="max-w-xl reveal">
            <p className="text-2xl md:text-3xl font-bold text-milc-gray">Tratamiento</p>
            <div className="gradient-bar my-5" />
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: "var(--milc-purple)" }}
            >
              No estás sola
              <br /> en este proceso
            </h1>
            <p className="mt-6 text-milc-gray text-base md:text-lg leading-relaxed">
              No todas las pacientes reciben el mismo tipo de tratamiento. Algunas
              únicamente requieren cirugía y en otros casos es necesario complementar
              con terapia adicional.
            </p>
            <p className="mt-4 text-milc-gray text-base md:text-lg leading-relaxed">
              Tu doctor te indicará cuál es el mejor tratamiento para ti y, en algunos
              casos, también puede informarte sobre varias opciones para que tú
              participes en la toma de decisiones.
            </p>
          </div>
        </div>
      </section>

      {/* Two columns with parallax image */}
      <section className="grid md:grid-cols-2">
        <div
          className="min-h-[400px] md:min-h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${sideImg})` }}
        />
        <div
          className="px-6 md:px-12 py-12 md:py-16 reveal flex flex-col justify-center"
          style={{ backgroundColor: TEAL }}
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

      {/* Content cards grid - 3 columns */}
      <section className="container-milc py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              className="reveal flex flex-col overflow-hidden shadow-lg rounded-md"
            >
              <div
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url(${c.img})` }}
              />
              <div
                className="p-6 flex flex-col flex-1 text-white"
                style={{ backgroundColor: TEAL }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs leading-tight">Tratamiento</span>
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
                      onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
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
                      onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
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
                      onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
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
