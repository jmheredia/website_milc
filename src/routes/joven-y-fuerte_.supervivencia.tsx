import { createFileRoute } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
// TODO: reemplazar por banner_superviviencia.png cuando se suba
import banner from "@/assets/banner-aspectos-psicologicos.png";
import linea from "@/assets/linea-milc.png";
import imagenSupervivencia from "@/assets/imagen-supervivencia.png";
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

export const Route = createFileRoute("/joven-y-fuerte_/supervivencia")({
  head: () => ({
    meta: [
      { title: "La supervivencia — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "La supervivencia en pacientes jóvenes con cáncer de mama: cuidados médicos, salud ósea y linfedema.",
      },
      { property: "og:title", content: "La supervivencia — Joven & Fuerte | MILC" },
      {
        property: "og:description",
        content:
          "Seguimiento médico, salud ósea y prevención del linfedema tras el tratamiento contra el cáncer de mama.",
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
          alt="Cuidados médicos"
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-milc text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Cuidados médicos
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-white text-base md:text-lg leading-relaxed drop-shadow">
              Al terminar el tratamiento anticáncer, el médico deberá seguir valorando a la
              paciente: tanto para vigilar que el cáncer no regrese, como para atender problemas
              derivados de los tratamientos anticáncer.
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
        <section id="supervivencia" className="reveal grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-milc-purple">Supervivencia</h2>
            <img src={linea} alt="" aria-hidden className="mt-3 h-3 w-52 object-contain" />
            <div className="mt-6 space-y-4 text-milc-gray leading-relaxed">
              <p className="text-2xl md:text-3xl font-bold text-milc-pink">
                ¡MUCHAS FELICIDADES!
              </p>
              <p>Haber terminado tu tratamiento es digno de admiración y respeto.</p>
              <p>Tómate un momento para disfrutarlo y por qué no, para festejarlo.</p>
              <p>
                Y ahora ¿qué sigue? Es importante saber que debes seguir acudiendo al médico a
                revisiones periódicas. Además, requerirás mamografías, exámenes ginecológicos
                y, en algunos casos, exámenes de tus huesos.
              </p>
              <p>
                Cuando un cáncer regresa después del tratamiento, se le llama recurrencia:
                esto es una preocupación muy común en las personas que han tenido cáncer. En
                la mayoría de mujeres que son tratadas con los estándares actuales, lo más
                probable es que el cáncer no regrese. Sin embargo, a pesar de todos los
                tratamientos recibidos existe la posibilidad de tener una recurrencia.
              </p>
              <p>
                Puede que pasado un tiempo tus temores disminuyan. No obstante, puede que sea
                útil saber que muchas sobrevivientes de Cáncer de Mama han aprendido a vivir
                con esta incertidumbre y hoy día viven vidas plenas.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={imagenSupervivencia}
              alt="Supervivencia"
              className="w-full max-w-xs rounded-2xl object-cover"
            />
          </div>
        </section>

        <Section id="cuidados-medicos" title="Cuidados médicos">
          <p>
            Al terminar el tratamiento anticáncer, el médico deberá seguir valorando a la
            paciente: tanto para vigilar que el cáncer no regrese, como para atender problemas
            derivados de los tratamientos anticáncer.
          </p>
          <p>
            Para el seguimiento con los médicos oncólogos, se recomienda acudir a sus citas
            dependiendo del tiempo de seguimiento:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Años 1 y 2: cada 3 a 4 meses.</li>
            <li>Años 3 al 5: cada 6 meses.</li>
            <li>A partir del año 5: cada año.</li>
          </ul>
          <p>
            Es importante que el tiempo puede ser variable, y si la paciente presenta malestar
            o algún síntoma debe buscar ayuda médica lo más pronto posible.
          </p>

          <h3 className="text-2xl font-bold text-milc-purple mt-6">Mamografía</h3>
          <p>
            Además, parte de la valoración médica debe incluir cada año una mamografía. Te
            recomendamos escoger un mes al año para realizártela de forma muy rigurosa cada
            año.
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Si te has sometido a una cirugía conservadora de la mama, se necesitarán hacer
              mamografías cada año.
            </li>
            <li>
              Si te has sometido a una mastectomía debes continuar con las mamografías anuales
              de la otra mama.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-milc-purple mt-6">Examen ginecológico</h3>
          <p>
            Finalmente, si la paciente se encuentra en hormonoterapia con tamoxifeno debe
            acudir anualmente con un médico ginecólogo, para realizar una exploración pélvica
            y, en ocasiones, un ultrasonido de útero. Esto es de especial importancia porque,
            a pesar de ser mínimo (menos del 1%), el tamoxifeno confiere un aumento del riesgo
            de cáncer de endometrio.
          </p>
        </Section>

        <Section id="salud-osea" title="Salud ósea">
          <p>
            Las mujeres que fueron tratadas por Cáncer de Mama tienen mayor riesgo de
            desarrollar osteoporosis, en comparación con las mujeres de la misma edad, ya sea
            por la menopausia temprana inducida por la quimioterapia o por algunos de los
            tratamientos recomendados.
          </p>
          <p>
            Inicialmente la osteoporosis no da ningún síntoma, pero hace que las pacientes
            tengan un riesgo mayor de fracturas y lesiones importantes, por lo que es muy
            importante identificar a las pacientes con más alto riesgo de menopausia:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Menopausia temprana (antes de los 40 años).</li>
            <li>Uso de inhibidores de aromatasa (anastrozol, letrozol, exemestano).</li>
            <li>Mayores a 65 años.</li>
            <li>De 60 a 64 años con antecedente familiar de osteoporosis y bajo peso.</li>
          </ul>
          <p>
            A este grupo de pacientes se les debe complementar su valoración médica con una
            densitometría ósea cada 1 o 2 años. La densitometría ósea es un estudio que le
            permite al médico determinar la calidad del hueso de la paciente, a partir de una
            especie de radiografías de la columna y la cadera, y de esta manera determinar si
            requiere algún fármaco complementario.
          </p>
          <p>
            Se recomienda consumir suplementos que contengan calcio más vitamina D y una dieta
            balanceada. En caso de diagnosticarse osteoporosis, se requerirán de otros
            medicamentos para su tratamiento.
          </p>
        </Section>

        <Section id="linfedema" title="Linfedema">
          <p>
            El linfedema es la hinchazón del brazo debido a acumulación excesiva de líquido.
            Las pacientes que tienen mayor riesgo de padecerlo son en las que se retiran los
            ganglios axilares o si se administra radiación en la región axilar.
          </p>
          <p>
            No existe un método para predecir quién padecerá linfedema y quién no. Puede
            ocurrir inmediatamente después de la cirugía, meses e incluso hasta años después.
          </p>
          <p>
            Si se tiene cuidado, se puede disminuir el riesgo de linfedema o, en caso de que
            aparezca, se puede mantener bajo control. Una lesión o una infección en el brazo o
            mano afectada puede contribuir a la aparición de linfedema o empeorarlo, de manera
            que las medidas preventivas se deben enfocar en la protección del brazo y la mano.
          </p>
          <p className="font-semibold text-milc-purple">
            Las principales recomendaciones para disminuir la aparición de linfedema y las
            molestias relacionadas son:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Utilizar el brazo del linfedema para las actividades del día a día (peinarse,
              bañarse, vestirte, comer).
            </li>
            <li>Mantener el brazo elevado apoyándolo sobre almohadas.</li>
            <li>Abre y cierra la mano de 15 a 25 veces al estar acostada.</li>
            <li>Diariamente cuida y limpia la piel del brazo.</li>
          </ul>
          <p>Además, tu médico te puede recomendar una manga en caso necesario.</p>
          <Recuerda
            items={[
              "Uno de los primeros síntomas más frecuentes de la aparición de linfedema es la sensación de opresión en el brazo o mano del lado de la cirugía. Debes notificarle inmediatamente a los médicos o enfermeras cualquier inflamación, sensación de opresión o lesión en el brazo o mano.",
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
