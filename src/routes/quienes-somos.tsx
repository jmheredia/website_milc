import { createFileRoute, Link } from "@tanstack/react-router";
import { A } from "@/lib/milc-assets";
import wixImg1 from "@/assets/external/wix_32b5d1db422b.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "¿Quiénes somos? — MILC" },
      { name: "description", content: "Médicos e Investigadores en la Lucha contra el Cáncer de Mama: misión, visión, valores y equipo." },
    ],
  }),
  component: Page,
});

const SOCIOS = [
  { img: A.cynthia, name: "Dra. Cynthia Mayté Villarreal Garza", desc: "Profesora e investigadora en el Instituto Tecnológico y de Estudios Superiores de Monterrey.", slug: "cynthia-villarreal-garza" },
  { img: A.alejandra, name: "Dra. Alejandra Platas de la Mora", desc: "Trabaja en iniciativas dirigidas para mejorar la calidad de vida de las pacientes.", slug: "alejandra-platas-de-la-mora" },
  { img: A.tere, name: "Dra. María Teresa Mireles Aguilar", desc: "Cirujana general con Alta Especialidad en Mastología por el Tec de Monterrey.", slug: "maria-teresa-mireles-aguilar" },
  { img: A.jaime, name: "Dr. Jaime José Tamez Salazar", desc: "Cirujano Mastólogo del Centro de Cáncer de Mama del Hospital Zambrano Hellion.", slug: "jaime-jose-tamez-salazar" },
];

const EQUIPO = [
  { img: A.anaPlatas, name: "Ana Platas de la Mora", role: "Directora de Proyectos" },
  { img: A.anaLaura, name: "Ana Laura Rodríguez Velázquez", role: "Asesoría Psicológica y Navegación de Pacientes" },
  { img: A.veronica, name: "Verónica Adriana Fuentes Vargas", role: "Navegación de Pacientes Programa Alerta Rosa" },
  { img: A.andres, name: "Andrés Raúl García Toba", role: "Gerente Comercial y de Operaciones Programa Empresa Rosa" },
];

function Page() {
  return (
    <div>
      <section className="container-milc grid gap-12 py-14 md:py-20 lg:grid-cols-2 items-center">
        <div className="reveal">
          <img src={A.doctorCover} alt="Equipo MILC" className="rounded-2xl w-full" />
        </div>
        <div className="reveal">
          <h1 className="heading-xl">
            <span className="text-milc-gray">¡Hola!</span>
            <br />
            <span className="text-milc-pink">Somos MILC</span>
          </h1>
          <div className="mt-6 inline-block rounded-full bg-milc-pink-soft px-5 py-2 text-milc-purple font-semibold">
            Médicos e Investigadores en la Lucha contra el Cáncer de Mama
          </div>
          <p className="mt-6 text-milc-gray text-lg leading-relaxed">
            Una organización conformada por profesionales de salud que lucha por <strong>mejorar la problemática en el diagnóstico y calidad de vida de las pacientes con cáncer de mama en México.</strong>
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: "#DEDEDF" }} className="py-20">
        <div className="container-milc grid gap-8 md:grid-cols-3">
          {[
            { icon: A.iconMision, title: "Misión", text: "Transformar el panorama del cáncer de mama en México a través de acciones que eliminen las barreras que obstaculizan su diagnóstico temprano y tratamiento oportuno y que garanticen la atención integral y el cuidado humano de las pacientes." },
            { icon: A.iconVision, title: "Visión", text: "Ser el primer modelo de atención integral en México que cambie verdaderamente el curso de vida de las pacientes con cáncer de mama." },
            { icon: A.iconValores, title: "Valores", text: "Honestidad · Profesionalismo · Compromiso · Calidez" },
          ].map((c) => (
            <div key={c.title} className="reveal rounded-2xl bg-white p-8 shadow-sm text-center">
              <img src={c.icon} alt="" className="mx-auto h-20 w-20" />
              <h3 className="mt-4 heading-lg text-milc-pink" style={{ fontSize: "1.75rem" }}>{c.title}</h3>
              <p className="mt-3 text-milc-gray">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-milc py-20 text-center">
        <div className="reveal">
          <h2 className="heading-lg text-milc-dark">Objetivos</h2>
          <div className="gradient-bar mx-auto my-5" />
          <p className="max-w-3xl mx-auto text-milc-gray text-lg">
            Promover la detección temprana, diagnóstico certero y tratamiento oportuno del cáncer de mama.
          </p>
        </div>
      </section>

      <section id="equipo" className="bg-milc-pink-soft/30 py-20 scroll-mt-24">
        <div className="container-milc">
          <div className="reveal text-center">
            <h2 className="heading-lg text-milc-pink">Socios fundadores</h2>
            <div className="gradient-bar mx-auto my-5" />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIOS.map((s) => (
              <div key={s.name} className="reveal text-center flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <img src={s.img} alt={s.name} className="w-full aspect-[4/5] object-cover" />
                </div>
                <h3 className="mt-4 font-semibold text-milc-purple">{s.name}</h3>
                <p className="mt-2 text-sm text-milc-gray flex-1">{s.desc}</p>
                <div className="mt-4">
                  <Link
                    to="/socios/$slug"
                    params={{ slug: s.slug }}
                    className="inline-block rounded-full border-2 border-milc-pink px-6 py-2 text-sm font-semibold text-milc-pink hover:bg-milc-pink hover:text-white transition-colors"
                  >
                    Conoce más
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-20">
            <h2 className="heading-lg text-milc-pink">Equipo de Trabajo</h2>
            <div className="gradient-bar mx-auto my-5" />
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPO.map((s) => (
              <div key={s.name} className="reveal text-center">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <img src={s.img} alt={s.name} className="w-full aspect-[4/5] object-cover" />
                </div>
                <h3 className="mt-4 font-semibold text-milc-purple">{s.name}</h3>
                <p className="text-sm text-milc-gray">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-milc py-20">
        <div className="reveal text-center">
          <h2 className="heading-lg text-milc-pink">Eventos y Campañas</h2>
          <div className="gradient-bar mx-auto my-5" />
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className="reveal rounded-2xl overflow-hidden bg-white shadow-sm">
            <img
              src={wixImg1}
              alt="Comunicado de prensa #DetecciónMásAcción"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-milc-purple">
                Comunicado de prensa sobre la campaña #DetecciónMásAcción
              </h3>
              <a href="#" className="mt-4 inline-block text-milc-pink font-semibold hover:underline">
                Más información →
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
