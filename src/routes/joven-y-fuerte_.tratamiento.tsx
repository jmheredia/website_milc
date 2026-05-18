import { createFileRoute, Link } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import heroBg from "@/assets/deteccion-hero.png";
import sideImg from "@/assets/deteccion-2.png";
import iconFolleto from "@/assets/icono-folleto.png";
import iconInfografia from "@/assets/icono-infografia.png";
import iconVideo from "@/assets/icono-video.png";
import cardImg1 from "@/assets/deteccion-card-1.png";
import cardImg2 from "@/assets/deteccion-card-2.png";

export const Route = createFileRoute("/joven-y-fuerte_/tratamiento")({
  head: () => ({
    meta: [
      { title: "Tratamiento — Joven & Fuerte | MILC" },
      { name: "description", content: "Información sobre tratamiento del cáncer de mama en mujeres jóvenes." },
    ],
  }),
  component: Page,
});

const PDF_URL =
  "https://www.milc.org.mx/_files/ugd/d3bdf4_80d51eda3d36419989c3a9c2e9469dbf.pdf";
const VIDEO_URL =
  "https://video.wixstatic.com/video/d3bdf4_9f1f104069564ed8b0b2bd0a66252704/file";

function Page() {
  return (
    <div className="bg-white">
      <JovenSubnav />

      {/* Hero with background image */}
      <section className="relative bg-[#f4f4f5]">
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-cover bg-right"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <img src={heroBg} alt="" className="block md:hidden w-full h-auto object-cover" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-10 md:py-24">
          <div className="max-w-xl reveal">
            <p className="text-2xl md:text-3xl font-bold text-milc-gray">
              Detección oportuna
            </p>
            <div className="gradient-bar my-5" />
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-milc-pink">
              Detectarlo a tiempo
              <br /> está en tus manos
            </h1>
            <p className="mt-6 text-milc-gray text-base md:text-lg leading-relaxed">
              La importancia de la detección temprana del cáncer de mama mediante el uso
              de la mamografía y otras técnicas es fundamental, ya que cambian el
              pronóstico de la enfermedad.{" "}
              <strong>
                El diagnóstico precoz es vital, pues de él dependen las posibilidades de
                curación, que pueden ser del 100% si se detecta a tiempo.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Two-column section */}
      <section className="grid md:grid-cols-2">
        <div
          className="min-h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${sideImg})` }}
        />
        <div className="bg-[#FAC2D9] px-6 md:px-12 py-12 md:py-16 reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-milc-pink">
            El cáncer de mama es el tumor maligno más frecuente entre la población
            femenina.
          </h2>
          <div className="mt-6 space-y-5 text-white leading-relaxed">
            <p>
              La mujer debe aprender a conocer bien su cuerpo y así apreciar cualquier
              signo de alarma. Los especialistas recomiendan a todas las mujeres mayores
              de 20 años que realicen la autoexploración mamaria cada mes. Después de
              los 25 años, lo mejor es que un especialista explore sus mamas anualmente.
              Y a partir de los 40 años de edad, es conveniente que se someta
              periódicamente a una mamografía.
            </p>
            <p>
              Es importante estar atenta a cualquier cambio en las mamas y si se aprecia
              alguno, acudir inmediatamente con el médico, el único capacitado para
              valorar por medio de pruebas específicas, como la mamografía, ecografía o
              resonancia magnética si se trata de un cáncer de mama.
            </p>
          </div>

          <h3 className="mt-10 text-xl md:text-2xl font-bold text-milc-pink text-center">
            Descubre el siguiente material informativo para saber como detectarlo a
            tiempo
          </h3>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href={PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <img src={iconFolleto} alt="Folleto" className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105" />
              <div className="w-16 h-px bg-white/70 my-3" />
              <span className="text-white text-lg md:text-xl font-semibold">Folleto</span>
            </a>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <img src={iconInfografia} alt="Infografía" className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105" />
              <div className="w-16 h-px bg-white/70 my-3" />
              <span className="text-white text-lg md:text-xl font-semibold">Infografía</span>
            </a>
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <img src={iconVideo} alt="Video" className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105" />
              <div className="w-16 h-px bg-white/70 my-3" />
              <span className="text-white text-lg md:text-xl font-semibold">Video</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content cards */}
      <section className="container-milc py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Video */}
          <div className="reveal flex flex-col overflow-hidden shadow-lg">
            <div
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${cardImg1})` }}
            />
            <div className="bg-[#EF538F] p-8 flex flex-col flex-1 text-white">
              <div className="flex items-center gap-4">
                <span className="text-sm md:text-base leading-tight">
                  Detección
                  <br />
                  Oportuna
                </span>
                <span className="h-8 w-px bg-white/60" />
                <img src={iconVideo} alt="" className="h-10 w-auto brightness-0 invert" />
                <span className="text-sm md:text-base">Video</span>
              </div>
              <h3 className="mt-6 text-3xl md:text-4xl font-bold">Autoexploración</h3>
              <div className="mt-6">
                <Link
                  to="/informada-soy-fuerte/deteccion-oportuna/video"
                  className="inline-block border-2 border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-[#EF538F] transition-colors"
                >
                  Ver Contenido
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 - PDF */}
          <div className="reveal flex flex-col overflow-hidden shadow-lg">
            <div
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: `url(${cardImg2})` }}
            />
            <div className="bg-[#EF538F] p-8 flex flex-col flex-1 text-white">
              <div className="flex items-center gap-4">
                <span className="text-sm md:text-base leading-tight">
                  Detección
                  <br />
                  Oportuna
                </span>
                <span className="h-8 w-px bg-white/60" />
                <img src={iconFolleto} alt="" className="h-10 w-auto brightness-0 invert" />
                <span className="text-sm md:text-base">Folleto</span>
              </div>
              <h3 className="mt-6 text-3xl md:text-4xl font-bold">Informada soy más fuerte</h3>
              <div className="mt-6">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-2 border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-[#EF538F] transition-colors"
                >
                  Ver Contenido
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
