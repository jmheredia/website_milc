import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/gicamx-hero.png";
import sobreGicamx from "@/assets/gicamx-hero.png";
import cynthiaImg from "@/assets/gicamx/cynthia.png";
import yaninImg from "@/assets/gicamx/yanin.png";
import pubAdopcion from "@/assets/gicamx/pub-adopcion.jpeg";
import pubDensidad from "@/assets/gicamx/pub-densidad.jpeg";
import pubAdherencia from "@/assets/gicamx/pub-adherencia.jpeg";
import projModelo from "@/assets/gicamx/proj-modelo.jpeg";
import projPetrha from "@/assets/gicamx/proj-petrha.jpeg";
import projBriga from "@/assets/gicamx/proj-briga.jpeg";
import projEvidencia from "@/assets/gicamx/proj-evidencia.jpeg";
import projMindfulness from "@/assets/gicamx/proj-mindfulness.jpeg";

export const Route = createFileRoute("/investigacion_/gicamx")({
  head: () => ({
    meta: [
      { title: "GICAMx — MILC" },
      {
        name: "description",
        content:
          "GICAMx, Grupo de Investigación en Cáncer de Mama en México, una iniciativa de MILC dedicada a impulsar la investigación sobre el cáncer de mama.",
      },
    ],
  }),
  component: Page,
});

const PURPLE = "#7B54A3";
const PINK_TITLE = "#F4B3CF";
const PINK_CARD = "#EF538F";

const PUBLICACIONES = [
  {
    title:
      "Adopción de medidas de reducción de riesgo entre personas con riesgo elevado de cáncer de mama hereditario en México",
    href: "https://ascopubs.org/doi/pdf/10.1200/GO.23.00417",
    img: pubAdopcion,
  },
  {
    title: "Densidad ósea baja en mujeres jóvenes con cáncer de mama",
    href: "https://www.clinical-breast-cancer.com/article/S1526-8209(24)00112-5/abstract",
    img: pubDensidad,
  },
  {
    title:
      "Adherencia a cirugías reductoras de riesgo en una cohorte internacional de mujeres hispanas",
    href: "https://ascopubs.org/doi/10.1200/GO.24.00097",
    img: pubAdherencia,
  },
];

const PROYECTOS = [
  {
    title:
      "Modelo de comunicación sistematizado para compartir información con pacientes con cáncer de mama metastásico",
    img: projModelo,
  },
  {
    title:
      "Pembrolizumab en cáncer de mama triple negativo temprano: Datos del mundo real en mujeres hispano-americanas (PETRHA)",
    img: projPetrha,
  },
  {
    title:
      "El impacto del genotipo de BRCA1 en las características clinicopatológicas y los desenlaces de pacientes con cáncer de mama: el estudio BRIGA",
    img: projBriga,
  },
  {
    title:
      "Estudio de evidencia real sobre patrones de tratamiento y características clínicas en pacientes con cáncer de mama metastásico en México",
    img: projEvidencia,
  },
  {
    title:
      "Intervención de mindfulness en línea para pacientes con cáncer de mama recibiendo quimioterapia",
    img: projMindfulness,
  },
];

const COMITE = [
  {
    name: "Dra. Paula Anel Cabrera Galeana",
    bio: "Médico Cirujano formada en la Universidad Juárez del Estado de Durango, con especialidad en Oncología Médica por la UNAM. Jefa del Departamento de Oncología Médica del Instituto Nacional de Cancerología desde marzo de 2019. Co-investigadora principal en la SWOG Cancer Research Network y atiende en el Centro de Cáncer del Centro Médico ABC.",
  },
  {
    name: "Dr. Alejandro Mohar Betancourt",
    bio: "Médico mexicano especializado en oncología y epidemiología, egresado de la UNAM con maestría y doctorado en Epidemiología por Harvard. Fue director del Instituto Nacional de Cancerología (2003-2013). Su trabajo se centra en la investigación del VPH y los marcadores en cáncer de mama, con más de 190 publicaciones científicas.",
  },
  {
    name: "Psic. Alejandra Platas de la Mora",
    bio: "Psicóloga por la Universidad Iberoamericana, maestría en Neuropsicología por la Universidad Autónoma de Barcelona con especialidad en Psicooncología por el INCan. Presidenta y Cofundadora de MILC. Ha dedicado su vida profesional a la atención de pacientes con cáncer de mama y trabaja con profesionales de salud para fomentar la comunicación efectiva.",
  },
  {
    name: "Dra. Fernanda Mesa Chávez",
    bio: "Coordinadora de investigación en cáncer de mama en MILC y del Grupo de Investigación en Oncología del Centro de Cáncer de Mama de TecSalud. Sus intereses incluyen el diseño e implementación de estudios con aplicación clínica directa, enfocados en mejorar el cuidado y la calidad de vida de las pacientes.",
  },
  {
    name: "Dra. Daniela Vázquez Juárez",
    bio: "Oncóloga médica en el Centro de Cáncer de Mama del Hospital Zambrano Hellion TecSalud. Médico cirujano por la Universidad Veracruzana y especialista en oncología médica por la UNAM. Realizó alta especialidad en oncología mamaria en TecSalud y un postdoctorado en investigación en cáncer en la IARC, Lyon, Francia.",
  },
  {
    name: "Dr. Enrique José Zamudio Lozoya",
    bio: "Médico cirujano egresado de la Universidad Autónoma de Ciudad Juárez, con especialidad en Oncología Médica por la UNAM. Realizó alta especialidad en cáncer de mama en TecSalud. Se desempeña en práctica privada y en la Unidad de Cáncer de Mama del Centro Estatal de Cancerología de Chihuahua. Catedrático en la Universidad Autónoma de Chihuahua.",
  },
  {
    name: "Dr. Brizio Moreno Jaime",
    bio: "Oncólogo médico en el ISSSTE Regional León. Egresado del Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán y con alta especialidad en oncología mamaria por TecSalud. En 2015 recibió el Premio Nacional de Oncología \"Dr. Guillermo Montaño\" otorgado por la Sociedad Mexicana de Oncología.",
  },
  {
    name: "Dr. Gregorio Quintero Beuló",
    bio: "Oncólogo especializado en cirugía oncológica, egresado de la UNAM. Cuenta con maestría en Administración de Hospitales y Salud Pública y doctorado en Alta Dirección. Médico adscrito al Hospital General de México y al Hospital Ángeles Metropolitano. Fue presidente de la Sociedad Mexicana de Oncología (2018-2019).",
  },
  {
    name: "Dr. Roberto Sánchez Reyes",
    bio: "Médico cirujano egresado de la UNAM, con formación en medicina interna y oncología médica en el INCMNSZ. Realizó un curso en alta especialidad en oncología torácica en el Instituto Nacional de Cancerología. Médico adscrito a la Clínica de Mama y tumores ginecológicos del CMN La Raza del IMSS.",
  },
];



function PinkCard({
  title,
  img,
  href,
}: {
  title: string;
  img: string;
  href?: string;
}) {
  const inner = (
    <>
      <img
        src={img}
        alt=""
        className="w-full aspect-[4/3] object-cover"
      />
      <div
        className="flex flex-col flex-1 p-6 text-white"
        style={{ backgroundColor: PINK_CARD }}
      >
        <span className="text-xs uppercase tracking-wide opacity-90">Folleto</span>
        <h3 className="mt-2 text-base md:text-lg font-bold flex-1">{title}</h3>
        {href && (
          <span className="mt-5 self-start inline-block border-2 border-white px-5 py-2 rounded-full text-sm font-medium">
            Visitar artículo
          </span>
        )}
      </div>
    </>
  );

  const className =
    "reveal flex flex-col rounded-md overflow-hidden shadow-lg hover:-translate-y-1 transition-transform";

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

function Page() {
  return (
    <div className="bg-white">
      {/* Hero banner */}
      <section
        className="relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-40 md:py-56 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center">
            GICAMx
          </h1>
        </div>
      </section>

      {/* Sobre GICAMx */}
      <section className="relative">
        {/* gray bottom-left backdrop */}
        <div className="absolute inset-x-0 bottom-0 top-1/3 bg-[#f4f4f5]" aria-hidden />
        <div className="relative container-milc py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center reveal">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src={sobreGicamx}
                alt="Investigación GICAMx"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2
                className="text-4xl md:text-5xl font-extrabold"
                style={{ color: PINK_TITLE }}
              >
                Sobre GICAMx
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-6 text-milc-gray text-base leading-relaxed">
                <p>
                  GICAMx, Grupo de Investigación en Cáncer de Mama en México, es
                  una iniciativa de MILC dedicada a impulsar la investigación
                  sobre el cáncer de mama, enfocándose en la presentación
                  clínica, epidemiología, genética, tratamiento, seguimiento,
                  cuidados de soporte y acceso oportuno a los servicios de salud
                  en la población mexicana.
                </p>
                <p>
                  GICAMx nació como una iniciativa visionaria de investigadoras
                  expertas comprometidas a mejorar las condiciones y los
                  desenlaces de los pacientes con cáncer de mama a través de
                  estudios científicos. Decidieron unir sus esfuerzos para
                  fomentar estudios innovadores y generar un impacto
                  significativo en la salud de los pacientes con cáncer de mama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-milc grid md:grid-cols-2 gap-12 reveal">
          <div className="flex flex-col items-center text-center">
            <img
              src={cynthiaImg}
              alt="Dra. Cynthia Villarreal Garza"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-md ring-4 ring-white"
            />
            <h3 className="mt-6 text-2xl font-bold" style={{ color: PURPLE }}>
              Dra. Cynthia Villarreal Garza
            </h3>
            <div className="gradient-bar mx-auto my-4" />
            <p className="text-milc-gray leading-relaxed text-left">
              La Dra. Cynthia Villarreal Garza estudió Medicina en el Tec de
              Monterrey y se especializó en Medicina Interna y Oncología Médica
              en el INCMNSZ. Es Maestra y Doctora en Ciencias Médicas por la
              UNAM y realizó una subespecialidad en Cáncer de Mama en el
              Sunnybrook Odette Cancer Center, afiliado a la Universidad de
              Toronto.
            </p>
            <p className="mt-4 text-milc-gray leading-relaxed text-left">
              Actualmente es Directora del Instituto de Oncología y del Centro
              de Cáncer de Mama de TecSalud, además de profesora e
              investigadora en el Tec de Monterrey. Fundó "Joven y Fuerte" y es
              cofundadora de MILC y Onconecta. Ha publicado más de 180
              artículos indexados, es miembro del Sistema Nacional de
              Investigadores y ha recibido múltiples reconocimientos.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={yaninImg}
              alt="Dra. Yanin Chávarri Guerra"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-md ring-4 ring-white"
            />
            <h3 className="mt-6 text-2xl font-bold" style={{ color: PURPLE }}>
              Dra. Yanin Chávarri Guerra
            </h3>
            <div className="gradient-bar mx-auto my-4" />
            <p className="text-milc-gray leading-relaxed text-left">
              La Dra. Yanin Chávarri es oncóloga médica y Maestra en Ciencias
              Médicas. Estudió Medicina en la Universidad Anáhuac y se formó en
              Oncología en el INCMNSZ, donde actualmente labora. Realizó un
              posdoctorado en cáncer de mama en el Massachusetts General
              Hospital y Harvard Medical School, y otro en genética del cáncer
              en el City of Hope, California.
            </p>
            <p className="mt-4 text-milc-gray leading-relaxed text-left">
              Es investigadora en oncología, con enfoque en cáncer de mama,
              oncogenética, desigualdades en salud y cuidados paliativos.
              Coordina el programa "Te Acompañamos" y la clínica de
              Oncogenética en el INCMNSZ. En 2023 fue presidenta del Consejo de
              Latinoamérica de ASCO.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos & Publicaciones */}
      <section className="container-milc py-14 md:py-20">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center"
          style={{ color: PURPLE }}
        >
          Proyectos & Publicaciones
        </h2>
        <div className="gradient-bar mx-auto my-6" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PUBLICACIONES.map((p) => (
            <PinkCard key={p.title} title={p.title} img={p.img} href={p.href} />
          ))}
        </div>
      </section>

      {/* Proyectos activos */}
      <section className="bg-[#f4f4f5] py-14 md:py-20">
        <div className="container-milc">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center"
            style={{ color: PURPLE }}
          >
            Proyectos Activos
          </h2>
          <div className="gradient-bar mx-auto my-6" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROYECTOS.map((p) => (
              <PinkCard key={p.title} title={p.title} img={p.img} />
            ))}
          </div>
        </div>
      </section>

      {/* Comité científico */}
      <section className="container-milc py-14 md:py-20">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center"
          style={{ color: PURPLE }}
        >
          Nuestro comité científico
        </h2>
        <div className="gradient-bar mx-auto my-6" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMITE.map((m) => (
            <div
              key={m.name}
              className="reveal rounded-md p-8 shadow-md ring-1 ring-black/5 bg-white"
            >
              <h3 className="text-xl font-bold" style={{ color: PURPLE }}>
                {m.name}
              </h3>
              <div className="w-12 h-px bg-milc-gray/40 my-3" />
              <p className="text-milc-gray text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
