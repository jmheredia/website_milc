import { createFileRoute } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dato1 from "@/assets/jyf-pacientes/1.png";
import dato2 from "@/assets/jyf-pacientes/2.png";
import dato3 from "@/assets/jyf-pacientes/3.png";
import dato4 from "@/assets/jyf-pacientes/4.png";
import dato5 from "@/assets/jyf-pacientes/5.png";
import dato6 from "@/assets/jyf-pacientes/6.png";
import dato7 from "@/assets/jyf-pacientes/7.png";
import dato8 from "@/assets/jyf-pacientes/8.png";
import dato9 from "@/assets/jyf-pacientes/9.png";

export const Route = createFileRoute("/joven-y-fuerte_/pacientes")({
  head: () => ({
    meta: [
      { title: "Pacientes — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "Bienvenida guerrera, llegaste a casa. Información para pacientes jóvenes con cáncer de mama.",
      },
    ],
  }),
  component: Page,
});

// TODO: reemplazar con el ID real de Vimeo cuando lo compartas
const WELCOME_VIMEO_ID = "1191291339";

const DATOS = [dato1, dato2, dato3, dato4, dato5, dato6, dato7, dato8, dato9];

function Page() {
  return (
    <div>
      <JovenSubnav />

      <div className="container-milc py-14 md:py-20">
        <section className="reveal">
          {/* Encabezado en dos columnas: texto + video */}
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-milc-pink leading-tight">
                Bienvenida guerrera,<br />llegaste a casa
              </h1>
              <p className="mt-6 text-lg text-milc-gray leading-relaxed">
                La Dra. Cynthia Villarreal Garza les da la bienvenida al primer sitio en la lucha
                contra el Cáncer de Mama en mujeres jóvenes de México y explica las necesidades
                particulares en esta población.
              </p>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${WELCOME_VIMEO_ID}?title=0&byline=0&portrait=0&dnt=1`}
                title="Bienvenida — Dra. Cynthia Villarreal Garza"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Misión / Visión */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-milc-pink-soft/40 p-8">
              <h3 className="text-2xl font-bold text-milc-dark">Nuestra Misión</h3>
              <p className="mt-3 text-milc-gray leading-relaxed">
                Atender integralmente a las mujeres jóvenes con cáncer de mama en nuestro país a
                través de programas especializados y de alta calidad que integren el cuidado médico
                multidisciplinario, la investigación, prevención, educación y apoyo social que
                directamente se relacione con un impacto en mejores condiciones de vida de este
                grupo de mujeres.
              </p>
            </div>
            <div className="rounded-2xl bg-milc-pink-soft/40 p-8">
              <h3 className="text-2xl font-bold text-milc-dark">Nuestra Visión</h3>
              <p className="mt-3 text-milc-gray leading-relaxed">
                Ser líder y modelo en América Latina para la Atención de Mujeres Jóvenes con Cáncer
                de Mama, basada en la experiencia de los profesionales de salud para la atención
                integral a la paciente y el desarrollo de estrategias de educación e investigación
                que impacten en una mejor calidad de vida para esta población de pacientes.
              </p>
            </div>
          </div>

          {/* Datos importantes — slider */}
          <div className="mt-14">
            <h3 className="text-3xl font-bold text-milc-purple">Datos importantes</h3>
            <div className="mt-6 rounded-2xl bg-white p-6 md:p-10 shadow-md ring-1 ring-black/5">
              <Carousel
                opts={{ loop: true, align: "start" }}
                className="w-full max-w-5xl mx-auto px-8 md:px-12"
              >
                <CarouselContent>
                  {DATOS.map((src, i) => (
                    <CarouselItem key={i}>
                      <div className="flex items-center justify-center p-4">
                        <img
                          src={src}
                          alt={`Dato importante ${i + 1}`}
                          className="max-h-[460px] w-auto object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
