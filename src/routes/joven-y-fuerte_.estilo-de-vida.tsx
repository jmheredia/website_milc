import { createFileRoute } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import banner from "@/assets/banner-actividad-fisica.png";
import linea from "@/assets/linea-milc.png";
import imagenEstiloVida from "@/assets/imagen-estilo-vida.png";
import logoSusan from "@/assets/logo-susan.png";
import logoAvon from "@/assets/logo-avon.png";
import logoTec from "@/assets/logo-tec.png";
import logoMedicina from "@/assets/logo-medicina.png";
import logoMujer from "@/assets/logo-mujer.png";
import logoMilc from "@/assets/logo-milc.png";

const PARTNERS = [
  { src: logoSusan, alt: "Susan G. Komen" },
  { src: logoAvon, alt: "Avon - Promesa contra el cáncer de mama" },
  { src: logoTec, alt: "Tecnológico de Monterrey - Escuela de Medicina" },
  { src: logoMedicina, alt: "Instituto Nacional de Cancerología" },
  { src: logoMujer, alt: "Octubre, mes de lucha contra el cáncer de la mujer" },
  { src: logoMilc, alt: "MILC" },
];

export const Route = createFileRoute("/joven-y-fuerte_/estilo-de-vida")({
  head: () => ({
    meta: [
      { title: "Estilo de vida — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "Estilo de vida en pacientes jóvenes con cáncer de mama: actividad física, nutrición e imagen corporal.",
      },
      { property: "og:title", content: "Estilo de vida — Joven & Fuerte | MILC" },
      {
        property: "og:description",
        content:
          "Recomendaciones de actividad física, nutrición e imagen corporal durante y después del tratamiento.",
      },
    ],
  }),
  component: Page,
});

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="reveal">
      <h2 className="text-3xl md:text-4xl font-bold text-milc-purple">{title}</h2>
      <img src={linea} alt="" aria-hidden className="mt-3 h-3 w-52 object-contain" />
      <div className="mt-6 space-y-4 text-milc-gray leading-relaxed">{children}</div>
    </section>
  );
}

function Recuerda({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#7FC9AC] py-12 md:py-16 my-10">
      <div className="container-milc text-white">
        <h3 className="text-3xl md:text-4xl font-bold">Recuerda</h3>
        <ul className="mt-6 space-y-3 list-disc pl-6 marker:text-white text-white text-lg">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div>
      <JovenSubnav />

      {/* Banner */}
      <section className="relative w-full">
        <img
          src={banner}
          alt="Actividad física"
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-milc text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Actividad física
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-white text-base md:text-lg leading-relaxed drop-shadow">
              Durante la fase del tratamiento y del seguimiento, se recomienda hacer ejercicio
              (aunque no te debes sobre-esforzar en los días que te sientas más cansada).
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
        <section id="estilo-de-vida" className="reveal grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-milc-purple">Estilo de vida</h2>
            <img src={linea} alt="" aria-hidden className="mt-3 h-3 w-52 object-contain" />
            <div className="mt-6 space-y-4 text-milc-gray leading-relaxed">
              <p>
                Vivir con el diagnóstico de Cáncer de Mama representa muchos retos. En general,
                se deben seguir las mismas recomendaciones de estilo de vida saludable
                existentes para todas las mujeres, por ejemplo:
              </p>
              <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
                <li>Mantener un peso saludable</li>
                <li>Llevar una dieta balanceada</li>
                <li>Ser físicamente activa</li>
                <li>No fumar</li>
                <li>Consumir alcohol de forma moderada</li>
                <li>
                  Regresar a las actividades diarias normales lo antes posible, incluyendo una
                  rutina de ejercicio.
                </li>
              </ul>
              <p>
                Para las sobrevivientes de cáncer de mama es indispensable mantener el peso
                ideal, mediante la implementación a la vida diaria de actividad física y el
                apego a una dieta balanceada, debido a que se conoce que existe mayor
                probabilidad de que el cáncer regrese en las pacientes con sobrepeso y
                obesidad.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={imagenEstiloVida}
              alt="Estilo de vida"
              className="w-full max-w-xs rounded-2xl object-cover"
            />
          </div>
        </section>

        <Section id="actividad-fisica" title="Actividad física">
          <p>
            Durante la fase del tratamiento y del seguimiento, se recomienda hacer ejercicio
            (aunque no te debes sobre-esforzar en los días que te sientas más cansada).
          </p>
          <p>
            Es probable que cuando hayas iniciado tu tratamiento te sientas cansada y sin ganas
            de hacer cosas, pero debes saber que hacer ejercicio en esta etapa es importante y
            tiene muchos beneficios para ti, como:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Favorecer tu descanso</li>
            <li>Reducir el cansancio/fatiga</li>
            <li>Aumentar tu autoestima</li>
            <li>Incrementar tu fuerza muscular</li>
            <li>Disminuir la ganancia de peso</li>
            <li>Disminuir la presencia de algunos efectos secundarios</li>
          </ul>
          <p>Mantener un peso ideal se ha asociado a diferentes beneficios:</p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Menor probabilidad de reaparición del Cáncer de Mama</li>
            <li>Reducción del riesgo de diabetes e hipertensión arterial sistémica</li>
            <li>
              Reducción del riesgo de aparición de cáncer en otros sitios (esófago, estómago,
              colon, hígado, vesícula biliar, cuerpo uterino, ovario, riñón, tiroides)
            </li>
            <li>Disminución de los síntomas menopáusicos</li>
          </ul>
          <Recuerda
            items={[
              "Si antes del diagnóstico y tratamiento realizabas alguna actividad física en especial, es posible que puedas seguir practicándola.",
              "El límite físico lo pones tú, hasta donde tu cuerpo lo permita.",
              "Platica con tu doctor antes de iniciar alguna nueva rutina de ejercicio físico y sigue sus indicaciones.",
            ]}
          />
        </Section>

        <Section id="nutricion" title="Nutrición">
          <p>
            Lejos de lo que podrías pensar, muchas mujeres tienden a ganar peso con la
            quimioterapia, probablemente debido a que los efectos secundarios pueden dificultar
            la actividad física y a que se tiende a comer de más por la errónea idea de que la
            quimioterapia ocasionará baja de peso o al equivocado concepto de que comer más
            ayuda a que no bajen las defensas.
          </p>
          <p>
            Una dieta bien balanceada te ayudará a mantenerte saludable durante y después del
            tratamiento. También te puede ayudar a mantener niveles adecuados de energía
            durante la quimioterapia y radioterapia.
          </p>
          <p>
            Debes procurar llevar una dieta rica en frutas y vegetales y baja en grasa. También
            debes asegurarte de comer carbohidratos saludables (complejos), en vez de los menos
            saludables (simples). Los carbohidratos complejos incluyen pasta integral, arroz
            integral, y leguminosas como frijoles negros y lentejas. Los carbohidratos simples
            incluyen cosas como los pasteles, pays, galletas, arroz blanco y pasta.
          </p>
          <p>
            Junto con una actividad física regular, comer bien te ayudará a alcanzar y
            mantenerte en un peso saludable.
          </p>
          <Recuerda
            items={[
              "Si tienes dudas acerca de tus hábitos alimenticios, debes consultar un nutriólogo.",
              "Existen muchos mitos sobre alimentos que deben ser evitados durante la quimioterapia, ninguno de estos mitos ha sido comprobado científicamente: no hay alimentos prohibidos durante el tratamiento, únicamente se debe procurar llevar una dieta balanceada y mantener un peso adecuado.",
            ]}
          />
        </Section>

        <Section id="imagen-corporal" title="Imagen corporal">
          <p>
            Durante el tiempo que recibas tratamientos, se dará un proceso en el que tienes
            que aprender a mirarte de otra forma y aceptar todos estos cambios físicos que se
            irán presentando como consecuencias de los tratamientos. Recuerda que muchos de
            estos cambios serán temporales, como la pérdida de cabello.
          </p>
          <p className="font-semibold text-milc-purple">
            Pérdida de cabello y cubiertas para la cabeza
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Para muchas mujeres, la pérdida de cabello puede ser una de las partes más
              difíciles del tratamiento contra el cáncer.
            </li>
            <li>
              Si esperas perder el cabello, consigue una peluca o un sombrero o turbante;
              cualquiera de ellos te puede ayudar a sentir mejor y expresar tu estilo personal.
            </li>
            <li>
              La quimioterapia también puede causar que pierdas tus pestañas y cejas. Algunas
              mujeres encuentran técnicas de maquillaje especiales que las hacen sentir más
              como ellas mismas.
            </li>
          </ul>
          <Recuerda
            items={[
              "Poco a poco te acostumbrarás a tu nueva imagen, conforme estos cambios se vayan presentando. No dejes que pase demasiado tiempo: hacerlo paulatinamente desde un inicio te facilitará la adaptación posterior, evitando que tengan un impacto negativo en tu autoestima.",
              "Si fortaleces tu imagen interna, poco a poco será más fácil abrazar tu nueva imagen en el espejo.",
            ]}
          />
        </Section>
      </div>

      {/* Partner logos */}
      <section
        className="bg-white py-12 md:py-16 border-t border-milc-pink-soft"
        aria-label="Aliados"
      >
        <div className="container-milc">
          <div className="flex items-center justify-between gap-4 md:gap-6 overflow-x-auto">
            {PARTNERS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-10 md:h-14 w-auto object-contain shrink-0 opacity-90 hover:opacity-100 transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
