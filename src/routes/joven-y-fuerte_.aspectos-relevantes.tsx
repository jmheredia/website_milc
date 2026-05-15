import { createFileRoute } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import banner from "@/assets/banner-aspectos-relevantes.png";
import linea from "@/assets/linea-milc.png";
import imagenRelevantes from "@/assets/imagen-relevantes.png";
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

export const Route = createFileRoute("/joven-y-fuerte_/aspectos-relevantes")({
  head: () => ({
    meta: [
      { title: "Aspectos relevantes — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "Aspectos relevantes en mujeres jóvenes con cáncer de mama: fertilidad, genética, anticonceptivos, sexualidad y menopausia.",
      },
      { property: "og:title", content: "Aspectos relevantes — Joven & Fuerte | MILC" },
      {
        property: "og:description",
        content:
          "Información sobre fertilidad, genética, anticonceptivos, sexualidad y menopausia en pacientes jóvenes con cáncer de mama.",
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

      {/* Banner with title + subtitle overlay */}
      <section className="relative w-full">
        <img
          src={banner}
          alt="Genética"
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-milc text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Genética
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-white text-base md:text-lg leading-relaxed drop-shadow">
              En una mujer joven, uno de los factores de riesgo más importantes que explican la
              aparición de cáncer de mama son los antecedentes familiares de cáncer.
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
        {/* Intro - two columns */}
        <section className="reveal grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-milc-purple">
              Aspectos relevantes en mujeres jóvenes
            </h2>
            <img src={linea} alt="" aria-hidden className="mt-3 h-3 w-52 object-contain" />
            <div className="mt-6 space-y-4 text-milc-gray leading-relaxed">
              <p>
                A diferencia de las mujeres mayores con Cáncer de Mama, las mujeres jóvenes
                presentan aspectos particulares y específicos de este grupo de edad.
              </p>
              <p>
                En esta sección podrás encontrar información relevante a la fertilidad, la
                sexualidad, los métodos anticonceptivos y los aspectos genéticos más
                importantes de tu enfermedad.
              </p>
              <p>
                Es importante que conozcas estos aspectos desde el principio. Esto permitirá
                planear con tu médico y tu equipo de salud tu tratamiento, y tomar las medidas
                necesarias para anticipar de forma oportuna las posibles repercusiones.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={imagenRelevantes}
              alt="Aspectos relevantes en mujeres jóvenes"
              className="w-full max-w-xs rounded-2xl object-cover"
            />
          </div>
        </section>

        <Section id="fertilidad" title="Fertilidad">
          <p>
            Algunos tratamientos para el Cáncer de Mama (principalmente la quimioterapia y la
            terapia anti-hormonal), pueden reducir la función de los ovarios y afectar la
            capacidad de tener hijos.
          </p>
          <p>
            El riesgo de infertilidad depende principalmente del tratamiento que se aplique y
            la edad de la paciente; entre mayor sea la paciente, existe más riesgo de
            infertilidad.
          </p>
          <p>
            Es importante mencionarle al médico si se desean tener hijos biológicos después
            del tratamiento, <strong>antes</strong> de iniciar quimioterapia u hormonoterapia
            para poder ser referida a tiempo a un especialista en fertilidad. Algunos
            procedimientos para preservar fertilidad pueden requerir que tomes decisiones y
            acciones relativamente rápido, para evitar demoras en tu tratamiento contra el
            cáncer.
          </p>
          <p>
            El método más comúnmente empleado involucra la congelación de óvulos o embriones,
            llamado crio preservación.
          </p>
          <Recuerda
            items={[
              "Los tratamientos pueden ser costosos, y en muchos casos, no son cubiertos por los seguros de gastos médicos o los sistemas de seguridad social.",
              "Existe poca disponibilidad de centros especializados.",
              "Pregunta a tu médico sobre las opciones para ti. El Programa Joven y Fuerte puede orientarte.",
            ]}
          />
          <p>
            Después de terminar el tratamiento, en el momento que tu médico considere
            adecuado, se puede buscar el embarazo. Es importante conocer que el embarazo NO
            es riesgoso ni para la madre ni para el bebé una vez concluido el tratamiento.
            Se debe discutir con el médico el tiempo adecuado para hacerlo.
          </p>
        </Section>

        <Section id="genetica" title="Genética">
          <p>
            En una mujer joven, uno de los factores de riesgo más importantes que explican la
            aparición de Cáncer de Mama son los antecedentes familiares de cáncer.
          </p>
          <p>
            Aproximadamente 13% (13 de 100) de los casos de Cáncer de Mama que se diagnostica
            en mujeres jóvenes, se debe a mutaciones (cambio en la estructura o función) en
            los genes. Los genes más frecuentemente alterados son los llamados{" "}
            <strong>BRCA1</strong> y <strong>BRCA2</strong>.
          </p>
          <p>
            Las mujeres más propensas para ser portadoras de mutaciones en los genes de BRCA
            incluyen:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Diagnóstico de Cáncer de Mama en edades jóvenes (40 años o menos).</li>
            <li>Antecedente de cáncer de ovario.</li>
            <li>
              Antecedente familiar de 2 o más familiares de primer grado (madre, padre,
              hermanos, hijos con Cáncer de Mama u ovario).
            </li>
            <li>Antecedente propio o familiar de cáncer bilateral (en ambas mamas).</li>
            <li>Cáncer de Mama en familiares hombres.</li>
            <li>Ascendencia judía Ashkenazi.</li>
          </ul>
          <p>
            Las mujeres jóvenes con Cáncer de Mama deben de discutir con su equipo médico
            sobre el riesgo de tener una mutación genética y si son candidatas a realizar
            pruebas especiales.
          </p>
          <p>
            La importancia de conocer si existe una alteración en uno de estos genes, se debe
            a que pueda existir un riesgo alto de desarrollar Cáncer de Mama, ovario y, en
            ocasiones, otros cánceres a lo largo de la vida. En estos casos, se requieren
            emplear medidas preventivas para reducir dichos riesgos, tanto para la paciente
            como para sus familiares.
          </p>
          <p className="font-semibold text-milc-purple">
            Las principales medidas reductoras de riesgo son:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Cirugías preventivas: mastectomía bilateral, salpingo-ooforectomía (extirpar
              los ovarios y las trompas de Falopio).
            </li>
            <li>Medicamentos: tamoxifeno.</li>
            <li>
              Estudios de imagen para seguimiento más estrecho: mamografía y resonancia
              magnética nuclear.
            </li>
          </ul>
          <Recuerda
            items={[
              "Es necesario discutir con tu médico tu riesgo de padecer una mutación.",
              "Valorar la necesidad de envío a un especialista en Genética para realizar una valoración complementaria.",
              "En caso de ser necesario, se tomarán pruebas genéticas para confirmar si existe alteración en los genes.",
            ]}
          />
        </Section>

        <Section id="anticonceptivos" title="Anticonceptivos">
          <p>
            Es muy importante que sepas que, a pesar del tratamiento y de no presentar
            menstruaciones, existe riesgo de embarazo si no tomas las medidas preventivas
            necesarias. Esto es muy relevante, ya que los medicamentos que se utilizan para
            tratar el cáncer NO están permitidos para mujeres embarazadas. Lo anterior es
            debido a que existe riesgo de malformaciones en el cuerpo del bebé causadas por
            los medicamentos, que es mayor en los primeros tres meses del embarazo.
          </p>
          <p>
            Por todo lo anterior, es importante que mientras estés en tratamiento contra el
            Cáncer de Mama utilices métodos eficaces para no embarazarte.
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-2">
            <li>
              Si ya no se desean tener hijos biológicos la opción más recomendada es la
              cirugía.
              <ul className="list-[circle] pl-6 marker:text-milc-purple mt-1 space-y-1">
                <li>Oclusión tubárica bilateral (también llamada salpingoclasia) para la mujer.</li>
                <li>Vasectomía para el hombre.</li>
              </ul>
            </li>
            <li>
              Si aún se desean tener hijos a futuro también existen opciones:
              <ul className="list-[circle] pl-6 marker:text-milc-purple mt-1 space-y-1">
                <li>DIU de cobre.</li>
                <li>Preservativo.</li>
              </ul>
            </li>
          </ul>
          <p>El coito interrumpido y el ritmo NO se consideran métodos efectivos.</p>
          <p>
            Es importante que sepas que los anticonceptivos tomados, inyectados, colocados
            como parches o implantes debajo de la piel, funcionan debido a que son hormonas
            que producen cambios dentro de tu cuerpo que evitan que estés preparada para
            concebir un bebé. Estos anticonceptivos NO se pueden utilizar en pacientes que
            hayan padecido Cáncer de Mama.
          </p>
          <Recuerda
            items={[
              "Debes consultar con el médico cuál es el método más adecuado para ti.",
              "Están prohibidos los métodos anticonceptivos que incluyan hormonas.",
            ]}
          />
        </Section>

        <Section id="sexualidad" title="Sexualidad">
          <p>
            La sexualidad es un aspecto muy importante de nuestras vidas y generalmente,
            suele tener un peso relevante en las relaciones de pareja.
          </p>
          <p>
            Existen muchas cosas que puedes hacer para que la enfermedad afecte lo menos
            posible tu sexualidad y tus relaciones íntimas.
          </p>
          <p>
            Es necesario que conozcas las consecuencias que los tratamientos y la situación
            emocional que atraviesas puedan generar sobre tu sexualidad. Es fundamental
            aclarar que la sexualidad depende, tanto del aspecto físico, como del
            psicológico.
          </p>
          <p>
            A pesar de estos cambios, conociendo estos cambios y manejando las molestias y
            efectos, se puede lograr alcanzar una sexualidad satisfactoria después de haber
            tenido un diagnóstico de cáncer.
          </p>
          <Recuerda
            items={[
              "Considera buscar nuevas formas de dar y recibir placer. Cuando se habla de sexualidad e intimidad no todo gira alrededor de las relaciones sexuales.",
              "Recuerda que independientemente de la etapa de la enfermedad o el tratamiento que estés recibiendo, las caricias y los masajes entre la pareja siempre son posibles.",
              "Habla con tu pareja. Explícale cómo te sientes, infórmale si te sientes lista para iniciar de nuevo tu vida sexual, o bien explícale si no te sientes preparada y necesitas más tiempo.",
            ]}
          />
          <p>
            Las molestias ocasionadas por la sequedad vaginal pueden mejorar y desaparecer
            empleando lubricantes vaginales (no hormonales) antes de cada relación y
            humectantes vaginales. Pregunta a tu médico cuáles son las mejores opciones.
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Es muy importante que busques ayuda para mejorar los síntomas relacionados con
              la afección en tu sexualidad, ya que estas molestias no mejoran por sí solas.
            </li>
            <li>Guía a tu pareja acerca de la forma de acariciarte que te resulta más satisfactoria.</li>
            <li>
              Si es muy complicado hablar de estas molestias con tu pareja, no dudes en pedir
              ayuda a un especialista.
            </li>
          </ul>
        </Section>

        <Section id="menopausia" title="Menopausia">
          <p>
            La menopausia inducida (provocada) o prematura (antes de tiempo) ocurre cuando
            los problemas de salud o diversos tratamientos causan que tu ciclo menstrual se
            suspenda temporalmente, o desaparezca por completo.
          </p>
          <p>
            Los tratamientos que pueden causar esto en mujeres jóvenes con cáncer de mama
            son la quimioterapia y algunos medicamentos anti-hormonales (tamoxifeno u
            otros).
          </p>
          <p>
            Los síntomas de la menopausia incluyen bochornos y sudores nocturnos, problemas
            para conciliar el sueño, problemas de memoria, depresión o ansiedad, y síntomas
            urinarios y/o vaginales.
          </p>
          <Recuerda
            items={[
              "Para manejar los bochornos, evita los detonantes comunes como el estrés, comidas picantes, cafeína, y fumar.",
              "Existen medidas no farmacológicas para controlar tus síntomas tales como: meditación, ejercicio, yoga.",
              "Si tu médico lo considera necesario, puede recetarte medicamentos para controlar los síntomas.",
              "Está contraindicado tomar terapia de reemplazo hormonal.",
            ]}
          />
        </Section>
      </div>

      {/* Partner logos */}
      <section className="bg-white py-12 md:py-16 border-t border-milc-pink-soft" aria-label="Aliados">
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
