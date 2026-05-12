import { createFileRoute, Link } from "@tanstack/react-router";
import { A } from "@/lib/milc-assets";
import imagenHome from "@/assets/imagen-home.png";
import manoCelImg from "@/assets/manocel.png";
import parallaxImg from "@/assets/parallax-home.png";
import descubreImg from "@/assets/descubre-new.png";
import redesImg from "@/assets/milc-redes-home.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MILC — Somos más fuertes cuando nos informamos" },
      { name: "description", content: "Promovemos acciones que eliminan las barreras que obstaculizan el diagnóstico y tratamiento oportuno del cáncer de mama." },
    ],
  }),
  component: Home,
});

function GradientBar({ className = "" }: { className?: string }) {
  return <div className={`gradient-bar ${className}`} />;
}

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="container-milc grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
        <div className="reveal order-2 lg:order-1">
          <GradientBar className="mb-6" />
          <h1 className="heading-xl">
            <span className="text-milc-pink">Somos más fuertes</span>
            <br />
            <span className="text-milc-dark">cuando nos informamos</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-milc-gray">
            Promovemos acciones que eliminan las barreras que obstaculizan el diagnóstico y tratamiento oportuno del cáncer de mama.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/informada-soy-fuerte" className="btn-pink-outline">Quiero informarme</Link>
            <Link to="/contacto" className="btn-pink">Contáctanos</Link>
          </div>
        </div>
        <div className="reveal order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-milc-pink-soft -z-10" />
            <img src={A.hero} alt="Lucha contra el cáncer de mama" className="rounded-2xl w-full object-cover" />
          </div>
        </div>
      </section>

      {/* PINK STRIP */}
      <section className="py-14 md:py-20 text-white text-center" style={{ backgroundColor: "var(--milc-pink-strip)" }}>
        <div className="container-milc reveal">
          <h2 className="heading-lg">¡Nosotros te acompañamos!</h2>
          <p className="mt-4 text-white/95 max-w-3xl mx-auto text-lg">
            Es probable que tengas muchas dudas y miedos, y esto es normal, pero recuerda que a pesar del cáncer puedes tener una vida plena y feliz.
          </p>
        </div>
      </section>

      {/* IMG + TEXT — 50/50 full-bleed */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="reveal">
          <img src={imagenHome} alt="MILC acompaña" className="w-full h-full object-cover" />
        </div>
        <div className="reveal flex items-center" style={{ backgroundColor: "#F4A4C3" }}>
          <div className="px-8 py-12 md:px-16 md:py-20 text-white">
            <p className="text-lg mb-6">
              Nuestros programas tienen como objetivo atender las siguientes necesidades específicas:
            </p>
            <ul className="space-y-3">
              {[
                "Apoyo psicológico",
                "Asesoría si quieres tener más hijos",
                "Atención en las alteraciones de la sexualidad",
                "Abordaje de problemas de memoria y concentración causados por los tratamientos",
                "Soporte para pacientes en etapas avanzadas y metastásicas",
                "Talleres, pláticas informativas y grupos de apoyo",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0"/> {t}</li>
              ))}
            </ul>
            <p className="mt-6">Comunícate con nosotros para recibir más información.</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS LOGOS */}
      <section className="bg-milc-pink-soft/40 py-16 md:py-24">
        <div className="container-milc text-center">
          <div className="reveal">
            <h2 className="heading-lg text-milc-dark">Conoce Nuestros Programas</h2>
            <p className="mt-3 text-milc-gray">Da click sobre alguno y descubre de qué trata</p>
            <div className="mx-auto mt-5"><GradientBar className="mx-auto" /></div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { src: A.alertaRosa, href: "https://alertarosa.com/", label: "Alerta Rosa" },
              { src: A.jovenFuerte, href: "/programas#joven-fuerte", label: "Joven & Fuerte", internal: true },
              { src: A.empresaRosa, href: "https://empresarosa.com/", label: "Empresa Rosa" },
              { src: A.evarisk, href: "http://www.evarisk.com.mx/", label: "EvaRisk" },
            ].map((p) =>
              p.internal ? (
                <Link key={p.label} to="/programas" hash="joven-fuerte" className="reveal group rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <img src={p.src} alt={p.label} className="mx-auto h-32 w-32 object-contain group-hover:scale-105 transition-transform" />
                </Link>
              ) : (
                <a key={p.label} href={p.href} target="_blank" rel="noreferrer" className="reveal group rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                  <img src={p.src} alt={p.label} className="mx-auto h-32 w-32 object-contain group-hover:scale-105 transition-transform" />
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* SOBRE MILC */}
      <section className="relative pt-20 md:pt-28" style={{ backgroundColor: "#53396C" }}>
        <div className="container-milc grid gap-12 lg:grid-cols-3 items-end">
          <div className="reveal text-white pb-20 md:pb-28 lg:col-span-2">
            <p className="text-white/70 text-lg mb-6">Sobre MILC</p>
            <h2 className="heading-lg text-white">
              MILC surge a partir de la fusión de profesionales de salud con una ideología común:
            </h2>
            <div className="mt-8 flex gap-4 items-start">
              <span className="block h-[2px] w-16 bg-white/60 mt-4 shrink-0" />
              <p className="italic text-white/95 text-lg leading-relaxed">
                Mejorar la problemática en el diagnóstico y calidad de vida de las pacientes con cáncer de mama en México.
              </p>
            </div>
            <div className="mt-10">
              <Link to="/quienes-somos" className="inline-flex items-center gap-2 text-white text-lg font-semibold hover:opacity-80">
                Saber más <span aria-hidden>→</span>
              </Link>
              <div className="mt-4"><GradientBar /></div>
            </div>
          </div>
          <div className="reveal self-end lg:scale-125 lg:origin-bottom-right">
            <img src={manoCelImg} alt="Sobre MILC" className="w-full block" />
          </div>
        </div>
      </section>

      {/* GRACIAS POR SER PARTE DEL CAMBIO */}
      <section
        className="relative min-h-[520px] flex items-center text-white"
        style={{
          backgroundImage: `url(${parallaxImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-milc reveal">
          <div className="max-w-xl">
            <h2 className="heading-xl text-white">Gracias por ser parte del cambio</h2>
            <GradientBar className="my-6" />
            <p className="text-white/95 text-lg leading-relaxed">
              Gracias por ayudarnos a transformar la atención y el cuidado de las mujeres con cáncer de mama en México.
            </p>
            <Link to="/contacto" className="btn-pink mt-8 inline-block">Quiero Donar</Link>
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="container-milc grid gap-10 py-20 md:py-28 lg:grid-cols-2 items-center">
        <div className="reveal">
          <h2 className="heading-lg">
            <span className="text-milc-pink font-bold">Nuestra</span>{" "}
            <span className="text-milc-gray font-light">misión</span>
          </h2>
          <GradientBar className="my-5" />
          <p className="text-lg text-milc-gray leading-relaxed">
            Trabajamos para mejorar la situación del cáncer de mama en nuestro entorno y unimos esfuerzos para potenciar nuestro alcance y beneficiar a más mujeres.
          </p>
          <Link to="/quienes-somos" className="btn-pink-outline mt-8">Conócenos</Link>
        </div>
        <div className="reveal">
          <img src={A.mision} alt="Nuestra misión" className="rounded-2xl shadow-lg w-full" />
        </div>
      </section>

      {/* INFORMADA SOY FUERTE */}
      <section className="py-20" style={{ backgroundColor: "#e7e5e5" }}>
        <div className="container-milc grid gap-12 lg:grid-cols-2 items-start">
          <div className="reveal lg:sticky lg:top-24">
            <h2 className="heading-xl text-milc-gray">Informada<br/>soy Fuerte</h2>
            <p className="mt-6 text-milc-gray text-lg max-w-md">
              Como se dice "el conocimiento es poder", con esta información estarás preparada para cualquier cosa, te invitamos a saber más.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: A.iconDeteccion, title: "Detección Oportuna", desc: "Lograr una detección oportuna a través de hábitos puede salvar tu vida.", hash: "deteccion" },
              { icon: A.iconDiagnostico, title: "Diagnóstico", desc: "Descubre los temas más relevantes del cáncer de mama que debes conocer.", hash: "diagnostico" },
              { icon: A.iconTratamiento, title: "Tratamiento", desc: "El tratamiento depende de la situación de cada persona. Descubre los procesos.", hash: "tratamiento" },
              { icon: A.iconSobrevida, title: "Sobrevida", desc: "Ser paciente de cáncer de mama no significa que la vida se detenga.", hash: "sobrevida" },
            ].map((c) => (
              <Link key={c.title} to="/informada-soy-fuerte" hash={c.hash} className="reveal group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <img src={c.icon} alt="" className="h-14 w-14 group-hover:scale-110 transition-transform" />
                <div className="mt-4 h-px w-16 bg-gray-200" />
                <h3 className="mt-6 font-bold text-xl text-milc-gray">{c.title}</h3>
                <p className="mt-3 text-milc-gray">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGACIÓN */}
      <section className="py-20 md:py-28">
        <div className="container-milc">
          <div className="relative">
            <h2 className="absolute top-0 left-0 text-milc-pink font-bold leading-none z-10" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Descubre
            </h2>
            <div className="flex justify-center reveal">
              <img src={descubreImg} alt="Descubre Investigación" className="max-w-xl w-full rotate-[-6deg]" />
            </div>
            <h2 className="absolute bottom-0 right-0 text-milc-pink font-bold leading-none z-10" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Investigación
            </h2>
          </div>
          <div className="text-center mt-12 max-w-2xl mx-auto reveal">
            <p className="text-milc-gray text-lg">
              Descarga nuestras publicaciones. Son totalmente gratuitas y te ayudarán a conocer las buenas prácticas en el abordaje del cáncer de mama.
            </p>
            <Link to="/investigacion" className="btn-pink mt-8">Ir a Publicaciones</Link>
          </div>
        </div>
      </section>

      {/* QUE NO TE TOME DESPREVENIDA */}
      <section className="py-20" style={{ backgroundColor: "#FAF8F8" }}>
        <div className="container-milc grid gap-10 lg:grid-cols-2 items-center">
          <div className="reveal flex justify-center">
            <img src={redesImg} alt="MILC Redes" className="w-full max-w-md" />
          </div>
          <div className="reveal">
            <GradientBar className="mb-6" />
            <h2 className="heading-xl text-milc-pink">¡Que no te tome desprevenida!</h2>
            <p className="mt-6 text-milc-gray text-lg font-semibold">
              Forma parte de una comunidad que se informa para tomar decisiones acertadas.
            </p>
            <p className="mt-4 text-milc-gray">
              Síguenos en nuestras redes, donde publicamos temas relevantes que te interesarán.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
