import { createFileRoute, Link } from "@tanstack/react-router";
import { A } from "@/lib/milc-assets";

export const Route = createFileRoute("/programas")({
  head: () => ({
    meta: [
      { title: "Programas — MILC" },
      { name: "description", content: "Conoce nuestros programas: Empresa Rosa, Alerta Rosa, Joven & Fuerte y EvaRisk." },
    ],
  }),
  component: Page,
});

type Program = { id: string; logo: string; img: string; title: string; desc: string; href: string; internal?: boolean };
const PROGRAMAS: Program[] = [
  { id: "alerta-rosa", logo: A.alertaRosa, img: A.progAlerta, title: "Alerta Rosa", desc: "En Alerta Rosa te llevaremos de la mano a través de todos los pasos a seguir para asegurarnos de que hagas lo necesario para una detección oportuna de cáncer de mama.", href: "https://alertarosa.com/" },
  { id: "joven-fuerte", logo: A.jovenFuerte, img: A.progJoven, title: "Joven & Fuerte", desc: "Joven & Fuerte es un programa creado para atender necesidades específicas de mujeres menores de 40 años.", href: "/joven-y-fuerte", internal: true },
  { id: "empresa-rosa", logo: A.empresaRosa, img: A.progEmpresa, title: "Empresa Rosa", desc: "Empresa Rosa es un programa dirigido a empresas especialmente responsables que buscan realmente hacer un cambio en la mortalidad por cáncer de mama.", href: "https://empresarosa.com/" },
  { id: "evarisk", logo: A.evarisk, img: A.progEvarisk, title: "EvaRisk", desc: "EvaRisk es un programa que evalúa tu riesgo de desarrollar cáncer de mama.", href: "http://www.evarisk.com.mx/" },
];

function Page() {
  return (
    <div>
      <section className="container-milc text-center py-14 md:py-20 reveal">
        <h1 className="heading-xl text-milc-dark">Programas</h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-milc-gray">
          Queremos estar contigo en cada paso que des, es por eso que en este apartado encontrarás el programa de acompañamiento perfecto que se adapte a tus necesidades.
        </p>
        <div className="gradient-bar mx-auto my-8" />
      </section>

      {PROGRAMAS.map((p, i) => {
        const imgRight = i % 2 === 1;
        return (
          <section
            key={p.id}
            id={p.id}
            className={`scroll-mt-24 grid lg:grid-cols-2 items-stretch ${imgRight ? "bg-milc-pink-soft/30" : ""}`}
          >
            <div className={`reveal relative min-h-[360px] lg:min-h-[560px] ${imgRight ? "lg:order-2" : ""}`}>
              <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="reveal flex items-center">
              <div className={`container-milc py-12 lg:py-20 ${imgRight ? "lg:pr-16" : "lg:pl-16"}`}>
                <img src={p.logo} alt={`${p.title} logo`} className="h-24 object-contain mb-6" />
                <p className="text-lg text-milc-dark leading-relaxed max-w-xl">{p.desc}</p>
                {p.internal ? (
                  <Link to="/joven-y-fuerte" className="btn-pink mt-8 inline-block">Conoce el programa</Link>
                ) : (
                  <a href={p.href} target="_blank" rel="noreferrer" className="btn-pink mt-8 inline-block">Conoce el programa</a>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
