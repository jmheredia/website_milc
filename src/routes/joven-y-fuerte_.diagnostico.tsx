import { createFileRoute } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import bannerDiagnostico from "@/assets/banner-diagnostico.avif";
import linea from "@/assets/linea-milc.png";
import iconoEstudio from "@/assets/icono-estudio.png";
import iconoInyeccion from "@/assets/icono-inyeccion.png";
import diagnosticoLogo from "@/assets/jyf-diagnostico/diagnostico-logo.png";
import tiposCancerImg from "@/assets/jyf-diagnostico/tipos-cancer.png";
import cancerInflamatorioImg from "@/assets/jyf-diagnostico/cancer-inflamatorio.png";
import etapaClinicaImg from "@/assets/jyf-diagnostico/etapa-clinica.png";
import clasificacionReceptoresImg from "@/assets/jyf-diagnostico/clasificacion-receptores.png";

export const Route = createFileRoute("/joven-y-fuerte_/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "Información sobre el diagnóstico de cáncer de mama: tipos, etapas clínicas y clasificación por receptores.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div>
      <JovenSubnav />

      {/* Banner */}
      <section className="relative w-full">
        <img
          src={bannerDiagnostico}
          alt="Diagnóstico — Joven & Fuerte"
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-milc text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Lo tienes que saber
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-white text-base md:text-lg leading-relaxed drop-shadow">
              El Cáncer de Mama es una enfermedad multifactorial que le puede pasar a cualquier mujer.
            </p>
            <img
              src={linea}
              alt=""
              aria-hidden
              className="mt-5 mx-auto h-3 w-52 object-contain"
            />
          </div>
        </div>
      </section>

      <div className="container-milc py-14 md:py-20 space-y-16">
        {/* Intro */}
        <section className="reveal">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="heading-xl text-milc-purple">Diagnóstico</h1>
              <p className="mt-6 text-lg text-milc-gray leading-relaxed">
                Es muy probable que tengas muchas dudas y te sientas abrumada por tanta información. Sin
                embargo es muy importante que conozcas que puedes tener una vida activa y plena durante,
                y después del tratamiento para el cáncer.
              </p>
              <p className="mt-4 text-lg text-milc-gray leading-relaxed">
                En las siguientes secciones, podrás encontrar consejos e información que te pueda ser
                útil en las diferentes etapas de la enfermedad.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={diagnosticoLogo}
                alt="Diagnóstico"
                className="w-full max-w-[420px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-milc-pink-soft/40 p-8">
            <h3 className="text-xl font-bold text-milc-dark">Lo más importante que tienes que saber:</h3>
            <ul className="mt-4 space-y-3 list-disc list-inside marker:text-milc-pink text-milc-gray">
              <li>No hay <strong>nada</strong> que hayas hecho o dejado de hacer para que esto pasara.</li>
              <li>El Cáncer de Mama es una enfermedad multifactorial que le puede pasar a <strong>cualquier</strong> mujer.</li>
              <li>
                Todos los casos de Cáncer de Mama son diferentes, habrá mucha gente que te quiera
                comparar y dar recomendaciones de acuerdo a sus propias experiencias o experiencias
                de familiares que han pasado por lo mismo. Tómalas con cautela e infórmate.
              </li>
              <li>
                Es importante conocer cuál es el tipo de cáncer que tú tienes, su clasificación y en
                qué etapa clínica se encuentra.
              </li>
            </ul>
          </div>
        </section>

      </div>

      {/* Biopsia - full width purple */}
      <section className="reveal w-full py-14 md:py-20" style={{ backgroundColor: "#7B54A3" }}>
        <div className="container-milc">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10">
            <img
              src={iconoInyeccion}
              alt=""
              aria-hidden
              className="hidden md:block h-28 lg:h-36 w-auto object-contain"
            />
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold">
                ¿Cómo se confirma si una bolita o tumor es Cáncer de Mama?
              </h2>
              <img
                src={linea}
                alt=""
                aria-hidden
                className="mt-3 mx-auto h-3 w-52 object-contain"
              />
              <p className="mt-6 font-semibold leading-relaxed">
                Cuando el médico considera que el tumor en la mama puede ser cáncer, se debe tomar
                una muestra del tumor. Este procedimiento se llama biopsia, la cual permite a los
                médicos confirmar si se trata de cáncer y determinar cuál es el tipo.
              </p>
              <p className="mt-4 leading-relaxed text-white/90">
                La biopsia es un procedimiento en el que se toma una muestra pequeña del tumor para
                poder examinarla después en un laboratorio de patología. La biopsia se puede
                obtener por medio de una aguja gruesa o por cirugía. El médico decidirá qué tipo de
                biopsia se necesitará en tu caso.
              </p>
            </div>
            <img
              src={iconoEstudio}
              alt=""
              aria-hidden
              className="hidden md:block h-28 lg:h-36 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      <div className="container-milc py-14 md:py-20 space-y-16">

        <section className="reveal">
          <h2 className="text-3xl font-bold text-milc-purple">Tipos de Cáncer de Mama</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-milc-gray">
                No todos los casos de cáncer de mama son iguales. Según el lugar donde se inicia el
                cáncer, es el nombre que recibe el tumor. Por esto, es importante que conozcas la
                estructura y componentes de la mama.
              </p>

              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Lobulillos",
                    items: [
                      "Región de la mama donde se produce leche.",
                      "Cáncer lobulillar: originado en las células que recubren los lobulillos.",
                    ],
                  },
                  {
                    title: "Conductos",
                    items: [
                      "Son los tubos que llevan la leche, estos conectan los lobulillos al pezón.",
                      "Cáncer ductal: originado en los conductos.",
                    ],
                  },
                  {
                    title: "Estroma",
                    items: [
                      "Tejido que rodea los conductos y los lobulillos.",
                      "Otros tipos: existe un pequeño número de tumores que se originan en el tejido del estroma.",
                    ],
                  },
                ].map((c) => (
                  <div key={c.title}>
                    <h3 className="text-lg font-bold text-milc-pink">{c.title}</h3>
                    <ul className="mt-2 space-y-1 list-disc list-inside marker:text-milc-pink text-milc-gray">
                      {c.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src={tiposCancerImg}
                alt="Anatomía de la mama: estroma, grasa, músculo, lobulillos, conductos, areola y pezón"
                className="w-full max-w-[480px] h-auto rounded-lg shadow-md object-contain"
              />
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 items-center rounded-2xl border-l-4 border-milc-pink bg-white p-6 shadow-sm">
            <p className="text-milc-gray leading-relaxed">
              <strong className="text-milc-dark">Cáncer inflamatorio:</strong> es un tipo de cáncer
              poco común, puede ser tanto lobulillar como ductal. Se presenta con piel enrojecida y
              caliente. Este tipo de cáncer suele tener un comportamiento muy agresivo, por lo que
              es importante su atención inmediata y la instauración de estrategias de tratamiento
              complementarias.
            </p>
            <div className="flex justify-center md:justify-end">
              <img
                src={cancerInflamatorioImg}
                alt="Cáncer inflamatorio: piel enrojecida y con apariencia de piel de naranja"
                className="w-full max-w-[420px] h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Etapa clínica */}
        <section className="reveal">
          <h2 className="text-3xl font-bold text-milc-purple">Etapa clínica del Cáncer de Mama</h2>
          <p className="mt-4 text-milc-gray max-w-4xl">
            El estadio clínico del cáncer de mama describe la extensión del cáncer en el cuerpo y
            depende de 3 características:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { letter: "T", text: "Tamaño del tumor" },
              { letter: "N", text: "Cantidad de ganglios linfáticos afectados" },
              { letter: "M", text: "Si el cáncer ha llegado a otras partes del cuerpo" },
            ].map((b) => (
              <div key={b.letter} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 text-center">
                <div className="text-5xl font-extrabold text-milc-pink">{b.letter}</div>
                <p className="mt-3 text-milc-gray">{b.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-milc-gray max-w-4xl">
            Después de conocer el estadio clínico del tumor, el médico puede clasificar al cáncer en
            una etapa. Existen 5 etapas clínicas:
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-milc-purple text-white">
                <tr>
                  <th className="px-6 py-3 font-semibold">Etapa</th>
                  <th className="px-6 py-3 font-semibold">Significado</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { e: "Etapa 0", s: "El tumor está encapsulado en la mama (en un conducto o lobulillo). Conocido como cáncer in situ. No ha invadido los ganglios de la axila." },
                  { e: "Etapa I", s: "El tumor es menor de 2 cm y no se ha extendido a los ganglios de la axila." },
                  { e: "Etapa II y III", s: "El tumor mide más de 2 cm y puede haberse extendido." },
                  { e: "Etapa IV / Metástasis", s: "El tumor de la mama se ha extendido a otros órganos (pulmón, huesos, hígado, cerebro u otros órganos)." },
                ].map((r) => (
                  <tr key={r.e} className="border-t border-milc-pink-soft/60">
                    <td className="px-6 py-4 font-bold text-milc-pink whitespace-nowrap align-top">{r.e}</td>
                    <td className="px-6 py-4 text-milc-gray">{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-milc-pink-soft/40 p-6">
            <p className="font-semibold text-milc-pink uppercase tracking-wide">Pregunta a tu médico:</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold text-milc-dark">
              ¿Cuál es la etapa clínica en la que fui diagnosticada?
            </p>
            <div className="mt-6 flex justify-center">
              <img
                src={etapaClinicaImg}
                alt="Etapas clínicas del cáncer de mama: Etapa 0, I, II, III y IV"
                className="w-full max-w-3xl h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Clasificación por receptores */}
        <section className="reveal">
          <h2 className="text-3xl font-bold text-milc-purple">Clasificación del Cáncer de Mama</h2>
          <p className="mt-4 text-milc-gray max-w-4xl font-semibold">
            El resultado de la biopsia proporcionará detalles sobre el tumor para determinar si
            tiene receptores o no.
          </p>
          <p className="mt-4 text-milc-gray leading-relaxed max-w-4xl">
            Para explicar qué son los receptores, pensemos en la cerradura de una puerta junto con
            una llave (única) la cual es capaz de abrirla. Ahora imagina que cada célula de tu tumor
            tiene muchas de esas cerraduras y cuando son abiertas por una o varias de esas llaves
            específicas, el tumor aumenta de tamaño.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                {["Receptor de Estrógeno", "Receptor de Progesterona", "Receptor de HER2"].map((r) => (
                  <div key={r} className="rounded-2xl bg-milc-purple text-white p-6 text-center font-semibold shadow-md">
                    {r}
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3 list-disc list-inside marker:text-milc-pink text-milc-gray">
                <li>
                  Si tu tumor tiene un receptor (una cerradura) que se activa con estrógenos,
                  progesterona o ambos, se le conoce como <strong>Cáncer de Mama con receptores hormonales positivos</strong>.
                </li>
                <li>
                  Si tu tumor tiene otra cerradura llamada HER2, se le conoce como <strong>cáncer de mama HER2 positivo</strong>.
                </li>
                <li>
                  Si tu tumor no tiene ningún receptor en sus células, se le conoce como <strong>cáncer de mama triple negativo</strong>.
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={clasificacionReceptoresImg}
                alt="Clasificación del cáncer de mama según receptores hormonales y HER2"
                className="w-full max-w-[520px] h-auto rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          <p className="mt-6 text-milc-gray font-medium max-w-4xl">
            Es necesario conocer cuáles son los receptores que tiene tu tumor para poder determinar
            cuál va a ser tu tratamiento.
          </p>
        </section>
      </div>
    </div>
  );
}
