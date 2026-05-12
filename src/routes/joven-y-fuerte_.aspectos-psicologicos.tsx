import { createFileRoute } from "@tanstack/react-router";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import banner from "@/assets/banner-aspectos-psicologicos.png";
import linea from "@/assets/linea-milc.png";
import imagenAspectosPsicologicos from "@/assets/imagen-aspectos-psicologicos.png";
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

export const Route = createFileRoute("/joven-y-fuerte_/aspectos-psicologicos")({
  head: () => ({
    meta: [
      { title: "Aspectos psicológicos — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "Aspectos psicológicos en pacientes jóvenes con cáncer de mama: malestar emocional, entorno familiar y cambios cognitivos.",
      },
      { property: "og:title", content: "Aspectos psicológicos — Joven & Fuerte | MILC" },
      {
        property: "og:description",
        content:
          "Información sobre malestar emocional, entorno familiar y cambios cognitivos durante el tratamiento.",
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
          alt="Cambios cognitivos"
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-milc text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Cambios cognitivos
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-white text-base md:text-lg leading-relaxed drop-shadow">
              Las funciones cognitivas son la atención, la concentración, la memoria a corto y
              largo plazo, así como la habilidad para hacer diversas tareas al mismo tiempo y
              pueden verse afectadas por los tratamientos contra el Cáncer de Mama.
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
        <section id="aspectos-psicologicos" className="reveal grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-milc-purple">
              Aspectos psicológicos
            </h2>
            <img src={linea} alt="" aria-hidden className="mt-3 h-3 w-52 object-contain" />
            <div className="mt-6 space-y-4 text-milc-gray leading-relaxed">
              <p>
                Enfrentarse a un diagnóstico de cáncer es una situación que provoca un cambio
                en la vida de la persona y sus seres queridos.
              </p>
              <p>
                Cada persona tiene su forma de ser, su modo de afrontar las situaciones
                difíciles, tiene un conjunto de creencias y valores y una forma determinada de
                ver el mundo; por lo tanto, será única la manera con la que cada quien
                afrontará el proceso de la enfermedad.
              </p>
              <p>
                Es normal que te sientas afligida y al mismo tiempo tener emociones intensas a
                la vez.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={imagenAspectosPsicologicos}
              alt="Aspectos psicológicos"
              className="w-full max-w-xs rounded-2xl object-cover"
            />
          </div>
        </section>

        <Section id="malestar-emocional" title="Malestar emocional">
          <p>
            La sensación de incertidumbre e inseguridad es la que probablemente caracteriza
            mejor esta experiencia. Otras reacciones emocionales que se pueden experimentar
            suelen ser:
          </p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Enojo: «¿por qué a mí?, no es justo».</li>
            <li>Tristeza: «soy una carga para mi familia».</li>
            <li>Negación: «no es posible, tiene que haber un error».</li>
            <li>Miedo: «¿me voy a morir?, ¿qué pasará con mis hijos?».</li>
          </ul>
          <p>
            Entre muchas otras, hay tantas reacciones emocionales como personas. Ten en cuenta
            que no existen emociones negativas o positivas, todas las emociones son necesarias
            y tienen una función concreta. Algo que es muy importante, es no confundir estas
            reacciones emocionales con un trastorno psicopatológico.
          </p>
          <p>
            Una forma de medir tu malestar emocional es mediante el termómetro del distrés. Si
            tu malestar es muy intenso y muy frecuente, es importante que pidas apoyo
            psicológico.
          </p>
          <p className="font-semibold text-milc-purple">Algunas recomendaciones son:</p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-2">
            <li>
              Busca apoyo emocional en familiares, amigos y asociaciones que te brinden un
              espacio para compartir tu experiencia con otras personas que estén atravesando
              por la misma situación.
            </li>
            <li>
              Identifica los pensamientos negativos. Cuando experimentas una emoción que no te
              gusta, date un momento para reconocer qué es lo que no te hace sentir bien y
              trata de evaluar si hay una solución a este sentimiento y/o trata de explorar
              cuáles serían las formas para acercarte a esta posible solución.
            </li>
            <li>
              Recuerda que no hay sentimientos buenos y malos. Estás en un momento en donde
              experimentarás muchas emociones y todas ellas son válidas, date permiso de
              sentirlas y si alguna de éstas te está limitando en tu día a día pide ayuda a un
              profesional.
            </li>
            <li>
              Expresa tus emociones. Puedes expresarlas hablando con alguien a quien le tengas
              la suficiente confianza, escribiendo, pintando o incluso haciendo ejercicio.
            </li>
            <li>Evita exigirte sentirte siempre bien y las actitudes heroicas.</li>
            <li>
              Trata de ser activa, involúcrate, participa, pregunta, conoce sobre el Cáncer de
              Mama y los tratamientos que vas a necesitar.
            </li>
            <li>
              Al inicio, te sentirás muy abrumada con los cambios que se presentarán en tu vida
              diaria y con el exceso de información que estarás recibiendo. Asistir a las
              consultas médicas acompañada por algún ser querido te brindará confianza y
              tranquilidad.
            </li>
            <li>
              Ten la confianza de hacerle preguntas al médico; aun cuando esas dudas ya hayan
              sido resueltas en un momento anterior y no hayan quedado del todo claras o hayas
              olvidado la información que te dio.
            </li>
            <li>
              Tener información veraz y oportuna te permite prepararte psicológicamente para
              los cambios y los tratamientos que vayas a necesitar.
            </li>
            <li>
              Una forma de afrontar las situaciones difíciles es el apoyo en la religión, si
              tienes alguna, o apoyarte en lo espiritual porque da una mayor fortaleza interna
              y una orientación positiva.
            </li>
            <li>
              No te compares con otras personas. El comparar tu situación con la de otras
              personas puede provocarte dudas, temores o generar falsas expectativas.
            </li>
            <li>
              Pon énfasis en tus metas prioritarias, continúa realizando tus actividades y
              aquello que le da sentido a tu vida.
            </li>
            <li>Vive un día a la vez. Reconoce tus fortalezas y tus áreas de oportunidad.</li>
            <li>Esta experiencia permitirá que aprendas de ti y de los demás.</li>
          </ul>
          <Recuerda
            items={[
              "Si el malestar es muy intenso o persiste debes acudir con un especialista.",
              "No todos los aspectos psicológicos relacionados al Cáncer de Mama en mujeres jóvenes son negativos: se ha encontrado que las pacientes jóvenes con Cáncer de Mama, en comparación con mujeres de su edad sin cáncer, desarrollan mayor crecimiento personal, incluyendo la capacidad de interacción con otros, cambios espirituales y encontrarle un nuevo significado a la vida.",
            ]}
          />
        </Section>

        <Section id="entorno-familiar" title="Entorno familiar y emocional">
          <p className="font-semibold text-milc-purple">Familiar</p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Tus familiares cercanos que te acompañan durante el proceso de la enfermedad
              suelen experimentar la enfermedad de manera directa, como si fuera propia,
              sienten emociones muy intensas, temen, se cuestionan, padecen y aprenden junto
              contigo.
            </li>
            <li>
              Comunicarles a tus familiares la información sobre tus tratamientos, las
              consecuencias de éstos y cómo te sientes los hará sentir a ellos y a ti con
              menos incertidumbre, de tal forma que se podrán acompañar y sentir más apoyados
              durante el camino.
            </li>
          </ul>
          <p className="font-semibold text-milc-purple">Pareja</p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              El hablar en pareja sobre sus miedos, el sexo, la intimidad y los hijos, les
              ayudará a mantenerse unidos.
            </li>
            <li>
              Cuando tu pareja es tu principal cuidador, es importante que esté dispuesto a
              pedir ayuda cuando lo necesite, y que reconozca y exprese cómo se siente.
            </li>
            <li>
              Es importante que le reconozcas el apoyo y el cariño que te brinda, trata de
              reforzar aquellos detalles únicos que tiene hacia ti.
            </li>
            <li>
              Tu pareja puede ser un apoyo fundamental para ti, pero puede darse el caso de
              que sea un estresor extra, sobre todo cuando hay problemas previos en la pareja
              que se agravan durante la enfermedad. Tómate tu tiempo y hazle frente a estas
              dificultades.
            </li>
          </ul>
          <p className="font-semibold text-milc-purple">Hijos</p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              El ocultar el diagnóstico a los hijos para evitar que se preocupen, no es una
              buena alternativa.
            </li>
            <li>
              Ante todos los cambios que sucederán en tus rutinas, los niños pueden asumir que
              algo no anda bien e imaginar que lo que sucede es peor que la realidad.
            </li>
            <li>Trata de no aislar a tus hijos, ellos te necesitan, como tú los necesitas a ellos.</li>
            <li>
              En nuestro manual y la sección de herramientas, te compartimos tips y enlaces
              para comunicar la noticia a tus hijos de acuerdo a su edad.
            </li>
          </ul>
          <p className="font-semibold text-milc-purple">Escuela y/o trabajo</p>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Compartir la noticia en este ámbito no es obligatorio.</li>
            <li>
              Puedes compartir la noticia con todos o exclusivamente con tu jefe directo o
              directivos para que te apoyen en caso de que los tratamientos influyan en tu
              capacidad para desempeñar tu trabajo o que necesites faltar para asistir a tus
              consultas médicas, tratamientos, etc.
            </li>
            <li>
              El seguir estudiando, trabajando o comenzar a trabajar con horarios flexibles
              favorece que tengas una mejor calidad de vida. Trata de mantener tu rutina
              diaria lo más estable posible o mantenerte ocupada en actividades que te sean
              placenteras.
            </li>
          </ul>
        </Section>

        <Section id="cambios-cognitivos" title="Cambios cognitivos">
          <p>
            Las funciones cognitivas son la atención, la concentración, la memoria a corto y
            largo plazo, así como la habilidad para hacer diversas tareas al mismo tiempo y
            pueden verse afectadas por los tratamientos contra el Cáncer de Mama.
          </p>
          <p>
            El proceso del diagnóstico de la enfermedad y de los tratamientos no es fácil, por
            lo que es probable que puedas sentirte preocupada y tu mente no esté tan atenta
            como siempre. Sin embargo, si tú identificas que, a pesar de hacer un esfuerzo por
            poner atención en tus actividades cotidianas, no te es sencillo finalizarlas o no
            logras recordar eventos importantes de tu día a día, es posible que estés
            presentando cambios en tus funciones cognitivas.
          </p>
          <p>
            Algunos de los efectos secundarios de los tratamientos contra el Cáncer de Mama no
            pueden ser evitados; sin embargo, la estimulación de las funciones cognitivas y el
            ejercitar tu actividad mental te será de gran ayuda para combatir los cambios
            cognitivos.
          </p>
          <p className="font-semibold text-milc-purple">
            Algunas de las estrategias que puedes utilizar en tu día a día son:
          </p>

          <h3 className="text-2xl font-bold text-milc-purple mt-6">Atención</h3>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Evitar distractores como ruido de la televisión, música, etc.</li>
            <li>Sugerir hacer preguntas, tomar notas, confirmar si ha comprendido todo.</li>
            <li>No mantenerse en la misma tarea por más de 90 minutos.</li>
            <li>Tomar descansos de 10 o 15 minutos durante las actividades.</li>
          </ul>

          <h3 className="text-2xl font-bold text-milc-purple mt-6">Memoria</h3>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>
              Llevar una libreta en donde puedas escribir las tareas que necesitas hacer y
              ordenarlas por orden de importancia.
            </li>
            <li>Utilizar una agenda para recordar actividades programadas.</li>
            <li>Otorgar más tiempo que antes para recordar algo.</li>
            <li>Hacer preguntas que acerquen a lo que se quiere recordar.</li>
          </ul>

          <h3 className="text-2xl font-bold text-milc-purple mt-6">Funciones ejecutivas</h3>
          <ul className="list-disc pl-6 marker:text-milc-pink space-y-1">
            <li>Fraccionar las actividades en pasos y ejecutarlas una a una.</li>
            <li>Realizar las actividades de acuerdo a su prioridad.</li>
            <li>Otorgar más tiempo que antes para recordar algo.</li>
            <li>Establecer rutinas para las actividades diarias.</li>
          </ul>

          <Recuerda
            items={[
              "En ocasiones, estos cambios pueden ser prolongados.",
              "Por lo general, después de un año de haber finalizado el tratamiento, estos síntomas mejoran en gran medida o desaparecen por completo.",
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
