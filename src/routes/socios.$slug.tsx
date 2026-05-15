import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { A } from "@/lib/milc-assets";

type Socio = {
  name: string;
  subtitle: string;
  img: string;
  paragraphs: string[];
};

const SOCIOS: Record<string, Socio> = {
  "cynthia-villarreal-garza": {
    name: "Dra. Cynthia Mayté Villarreal Garza",
    subtitle: "Socia-fundadora",
    img: A.cynthia,
    paragraphs: [
      "La Dra. Cynthia Villarreal estudió la carrera de Medicina en el Tec de Monterrey y realizó las especialidades de Medicina Interna y Oncología Médica en el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán. Es Maestra y Doctora en Ciencias Médicas egresada de la Universidad Nacional Autónoma de México y realizó una subespecialidad en cáncer de mama en el Sunnybrook Odette Cancer Center, afilado a la Universidad de Toronto.",
      "Actualmente es la Directora de Oncología del Centro de Cáncer de Mama – TecSalud y es profesora e investigadora en el Instituto Tecnológico y de Estudios Superiores de Monterrey. Fundó y dirige “Joven y Fuerte: Programa para la Atención e Investigación de Mujeres Jóvenes con Cáncer de Mama” y es socia-fundadora de la Asociación Civil “Médicos e Investigadores en la Lucha contra el Cáncer de Mama”.",
      "Ha publicado más de 120 artículos indexados, es miembro del Sistema Nacional de Investigadores, nivel II y funge como líder del Grupo de Trabajo de Cáncer de Mama del Latin American Cooperative Oncology Group. Ha sido acreedora del International Women Who Conquer Cancer Mentorship Award 2022, el XXXI Premio “Miguel Aleman Valdés” en el Área de Salud y del Premio Mujer Tec en Salud y pertenece a la Academia Nacional de Medicina de México y de la Academia Mexicana de Ciencias.",
      "Sus proyectos dedicados a mejorar las condiciones de vida de las pacientes con cáncer de mama en México han recibido financiamiento de CONACYT, Susan G. Komen, SPARC MCB Challenge y Avon México, entre otros.",
    ],
  },
  "alejandra-platas-de-la-mora": {
    name: "Dra. Alejandra Platas de la Mora",
    subtitle: "Socia-fundadora",
    img: A.alejandra,
    paragraphs: [
      "Psicóloga por la Universidad Iberoamericana, maestría en Neuropsicología por la Universidad Autónoma Barcelona con especialidad en Psicooncología por el Instituto Nacional de Cancerología. Presidenta y Cofundadora de Médicos e Investigadores en la Lucha contra el Cáncer de Mama, MILC. Ha dedicado su vida profesional a la atención de pacientes con cáncer de mama, desarrollando una profunda sensibilidad de la realidad que viven estas mujeres en nuestro país.",
      "Trabaja en iniciativas dirigidas para mejorar la calidad de vida de las pacientes a través de intervenciones emocionales dirigidas de acuerdo a las necesidades de cada paciente y sus familiares. También trabaja con profesionales de salud para fomentar la comunicación efectiva.",
    ],
  },
  "maria-teresa-mireles-aguilar": {
    name: "Dra. María Teresa Mireles Aguilar",
    subtitle: "Co-fundadora",
    img: A.tere,
    paragraphs: [
      "La Dra. Teresa Mireles es cirujana general con Alta Especialidad en Mastología por el Tec de Monterrey, con Máster en Innovación y Emprendimiento por la Universidad de Barcelona. Certificada por el Consejo Mexicano de Cirugía General, afiliada al Colegio Mexicano de Mastología.",
      "Profesora de pregrado y posgrado en la Escuela de Medicina del Instituto Tecnológico y de Estudios Superiores de Monterrey, desarrolló y gestionó la apertura de la Alta Especialidad en Mastología en dicha escuela. Recibió el premio Mujer Tec 2015, categoría Mentoring. Sus proyectos dedicados a mejorar la problemática en torno al cáncer de mama en México, han sido financiados, durante los últimos diez años, por Susan G. Komen for the Cure, Avon México y Roche, entre otros. Ha colaborado en la implementación de programas comunitarios y mejoras en el Programa Estatal de Cáncer de Mama de la Secretaría de Salud del estado de Nuevo León y ONG's como CIMAB, Cruz Rosa, Fuerza Rosa, Unidas Contigo.",
      "Es además co-fundadora de MILC (Médicos e Investigadores en la Lucha contra el Cáncer de mama), ONG dedicada a: “Transformar la atención y el cuidado de las mujeres con cáncer de mama en México”, donde creó y lidera a la fecha los programas “Alerta Rosa”: reconocido a nivel internacional por la OMS, finalista nacional del programa “Accelerate 2030” y con dos publicaciones científicas en revistas médicas de alto impacto; y “Empresa Rosa”: implementado en múltiples empresas mexicanas y reconocido con el premio CLAUT 2017 (Clúster Automotriz de Nuevo León) al mejor programa de Desarrollo Humano. Miembro activo de Health IDS: ONG dedicada a la creación y desarrollo de un ecosistema de emprendimiento en salud en México.",
    ],
  },
  "jaime-jose-tamez-salazar": {
    name: "Dr. Jaime José Tamez Salazar",
    subtitle: "Socio-fundador",
    img: A.jaime,
    paragraphs: [
      "El Dr. Jaime Tamez es Cirujano Mastólogo del Centro de Cáncer de Mama del Hospital Zambrano Hellion. Actualmente es profesor clínico del TecSalud, así como profesor de pregrado y posgrado en cirugía general y oncología en el Tecnológico de Monterrey.",
      "Es Socio Fundador de la asociación civil MILC (Médicos e investigadores en la lucha contra en cáncer de mama) donde funge como Codirector del programa Alerta Rosa y Director del programa EvaRisk. Ha participado junto a otras asociaciones civiles en iniciativas de política pública como #ElCáncerEnLaAgenda y #UnDíaContraElCáncer en el Estado de Nuevo León, que busca impactar en la detección y diagnóstico de cáncer de mama en las mujeres del país.",
    ],
  },
};

export const Route = createFileRoute("/socios/$slug")({
  loader: ({ params }) => {
    const socio = SOCIOS[params.slug];
    if (!socio) throw notFound();
    return socio;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Socio"} — MILC` },
      { name: "description", content: loaderData?.paragraphs[0]?.slice(0, 155) ?? "" },
    ],
  }),
  component: Page,
  notFoundComponent: () => (
    <div className="container-milc py-20 text-center">
      <h1 className="heading-lg text-milc-pink">Perfil no encontrado</h1>
      <Link to="/quienes-somos" className="mt-6 inline-block text-milc-purple font-semibold hover:underline">
        ← Volver a Quiénes somos
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-milc py-20 text-center">
      <p className="text-milc-gray">{error.message}</p>
    </div>
  ),
});

function Page() {
  const socio = Route.useLoaderData();

  return (
    <div className="bg-white">
      <div className="container-milc pt-8">
        <Link
          to="/quienes-somos"
          hash="equipo"
          className="inline-flex items-center gap-2 text-milc-gray hover:text-milc-pink transition-colors text-lg"
        >
          <ArrowLeft className="h-5 w-5" /> Regresar
        </Link>
      </div>

      <section className="container-milc grid gap-12 py-10 md:py-16 lg:grid-cols-2 items-start">
        <div className="reveal">
          <div className="overflow-hidden rounded-2xl bg-[#A8E6CF]">
            <img src={socio.img} alt={socio.name} className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
        <div className="reveal">
          <div className="gradient-bar mb-6" />
          <h1 className="heading-xl text-milc-purple">{socio.name}</h1>
          <p className="mt-4 text-xl text-milc-gray font-medium">{socio.subtitle}</p>
          <div className="mt-8 space-y-5 text-milc-gray leading-relaxed">
            {socio.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/quienes-somos"
              hash="equipo"
              className="inline-flex items-center gap-2 rounded-full border-2 border-milc-pink px-8 py-3 text-milc-pink font-semibold hover:bg-milc-pink hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Regresar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
