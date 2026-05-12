import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/diagnostico-hero.png";
import sideImg from "@/assets/diagnostico-2.png";
import iconFolleto from "@/assets/icono-folleto.png";
import iconInfografia from "@/assets/icono-infografia.png";
import iconVideo from "@/assets/icono-video.png";
import imgQueEs from "@/assets/diagnostico-cards/que-es.jpg";
import imgGeneralidades from "@/assets/diagnostico-cards/generalidades.jpg";
import imgMitos from "@/assets/diagnostico-cards/mitos.jpg";
import imgMetastasico from "@/assets/diagnostico-cards/metastasico.jpg";
import imgGenetica from "@/assets/diagnostico-cards/genetica.jpg";
import imgEtapas from "@/assets/diagnostico-cards/etapas.jpg";
import imgHereditario from "@/assets/diagnostico-cards/hereditario.jpg";
import imgInformada from "@/assets/diagnostico-cards/informada.jpg";

export const Route = createFileRoute("/informada-soy-fuerte_/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico — MILC" },
      {
        name: "description",
        content:
          "Te ayudamos a entender tu diagnóstico de cáncer de mama. Información y material para acompañarte.",
      },
    ],
  }),
  component: Page,
});

const PURPLE = "#CDBDE1";

const CARDS = [
  {
    title: "¿Qué es el cáncer de mama?",
    type: "Video",
    icon: iconVideo,
    img: imgQueEs,
    vimeoId: "1191292233",
  },
  {
    title: "Generalidades sobre el cáncer de mama",
    type: "Folleto",
    icon: iconFolleto,
    img: imgGeneralidades,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_51d4e625bf0e4fd698de2164828efb57.pdf",
  },
  {
    title: "Mitos y realidades del cáncer de mama",
    type: "Video",
    icon: iconVideo,
    img: imgMitos,
    vimeoId: "1191293265",
  },
  {
    title: "Cáncer de mama metastásico",
    type: "Video",
    icon: iconVideo,
    img: imgMetastasico,
    vimeoId: "1191293640",
  },
  {
    title: "Cáncer de mama y genética",
    type: "Folleto",
    icon: iconFolleto,
    img: imgGenetica,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_b3e7f6d6369347a8b38fe2044c487c50.pdf",
  },
  {
    title: "Etapas clínicas",
    type: "Video",
    icon: iconVideo,
    img: imgEtapas,
    vimeoId: "1191293909",
  },
  {
    title: "Cáncer hereditario",
    type: "Infografía",
    icon: iconInfografia,
    img: imgHereditario,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_706b6b5e77e54f0ba372b3accb5b8064.pdf",
  },
  {
    title: "Informada soy más fuerte",
    type: "Folleto",
    icon: iconFolleto,
    img: imgInformada,
    href: "https://www.milc.org.mx/_files/ugd/d3bdf4_80d51eda3d36419989c3a9c2e9469dbf.pdf",
  },
];

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
            <p className="text-2xl md:text-3xl font-bold text-milc-gray">Diagnóstico</p>
            <div className="gradient-bar my-5" />
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tight"
              style={{ color: "var(--milc-purple)" }}
            >
              Te ayudamos a entender
              <br /> tu diagnóstico
            </h1>
            <p className="mt-6 text-milc-gray text-base md:text-lg leading-relaxed">
              Es muy probable que tengas muchas dudas y te sientas abrumada por tanta
              información. Sin embargo, es muy importante que conozcas que{" "}
              <strong>
                puedes tener una vida activa y plena durante y después del tratamiento
                para el cáncer.
              </strong>{" "}
              En las siguientes secciones podrás encontrar consejos e información que
              pueden serte de utilidad en las diferentes etapas de la enfermedad.
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
          style={{ backgroundColor: PURPLE }}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed text-center">
            Encuentra material informativo acerca de todo lo que debes de saber para
            acompañarte en tu diagnóstico.
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

      {/* Important info — 4 alternating rectangles */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-milc">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "var(--milc-purple)" }}
          >
            Lo más importante que tienes que saber es que:
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { bg: "#7E57A8", text: "No hay nada que hayas hecho o dejado de hacer para que esto pasara." },
            { bg: "#B79DCD", text: "El cáncer de mama es una enfermedad multifactorial que le puede pasar a cualquier mujer." },
            { bg: "#7E57A8", text: "Todos los casos de cáncer de mama son diferentes, habrá mucha gente que te quiera comparar y dar recomendaciones de acuerdo a sus propias experiencias o experiencias de familiares que han pasado por lo mismo. Tómalas con cautela e infórmate." },
            { bg: "#B79DCD", text: "Es importante conocer cuál es el tipo de cáncer que tú tienes, su clasificación y en qué etapa clínica se encuentra." },
          ].map((b, i) => (
            <div
              key={i}
              className="min-h-[320px] md:min-h-[420px] flex items-center justify-center px-6 py-10"
              style={{ backgroundColor: b.bg }}
            >
              <p className="text-white text-center leading-relaxed max-w-[240px]">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content cards grid */}
      <section className="container-milc py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="reveal flex flex-col overflow-hidden shadow-lg rounded-md"
            >
              <div
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url(${c.img})` }}
              />
              <div
                className="p-6 flex flex-col flex-1 text-white"
                style={{ backgroundColor: PURPLE }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs leading-tight">Diagnóstico</span>
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
                  {c.vimeoId ? (
                    <Link
                      to="/video/$vimeoId"
                      params={{ vimeoId: c.vimeoId }}
                      search={{ title: c.title }}
                      className="inline-block border-2 border-white px-6 py-2 rounded-full text-white text-sm font-medium hover:bg-white transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = PURPLE)}
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
                      onMouseEnter={(e) => (e.currentTarget.style.color = PURPLE)}
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
