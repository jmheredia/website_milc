import { createFileRoute, Link } from "@tanstack/react-router";
import { Ribbon, ClipboardPlus, Bandage, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/informada-soy-fuerte")({
  head: () => ({
    meta: [
      { title: "Informada soy Fuerte — MILC" },
      { name: "description", content: "Detección oportuna, diagnóstico, tratamiento y sobrevida. Información para cuidarte." },
    ],
  }),
  component: Page,
});

const CARDS = [
  {
    to: "/informada-soy-fuerte/deteccion-oportuna",
    Icon: Ribbon,
    color: "var(--milc-pink)",
    title: "Detección oportuna",
    text: "Lograr una detección oportuna a través de hábitos puede salvar tu vida.",
  },
  {
    to: "/informada-soy-fuerte/diagnostico",
    Icon: ClipboardPlus,
    color: "var(--milc-purple)",
    title: "Diagnóstico",
    text: "Descubre los temas más relevantes del cáncer de mama que debes conocer.",
  },
  {
    to: "/informada-soy-fuerte/tratamiento",
    Icon: Bandage,
    color: "var(--milc-teal)",
    title: "Tratamiento",
    text: "El tratamiento y su aplicación depende de la situación en la que se encuentre cada persona.",
  },
  {
    to: "/informada-soy-fuerte/sobrevida",
    Icon: HeartHandshake,
    color: "var(--milc-orange)",
    title: "Sobrevida",
    text: "Ser paciente de cáncer de mama no significa que la vida se detenga.",
  },
] as const;

function Page() {
  return (
    <div className="bg-[#f4f4f5]">
      <section className="container-milc text-center pt-16 md:pt-20 pb-10 reveal">
        <h1 className="heading-xl text-milc-purple">Informada soy Fuerte</h1>
        <p className="mt-4 text-lg text-milc-gray">
          Da click sobre alguna categoría y comienza a cuidarte
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="reveal group flex min-h-[440px] flex-col rounded-2xl bg-white p-9 shadow-md ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <c.Icon size={52} strokeWidth={1.75} style={{ color: c.color }} />
            <div className="mt-6 h-px w-16 bg-milc-gray/30" />
            <h2 className="mt-4 text-2xl font-bold text-milc-dark whitespace-nowrap">
              {c.title}
            </h2>
            <p className="mt-4 text-milc-gray leading-relaxed">{c.text}</p>
            <div className="mt-auto pt-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <span
                className="inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold"
                style={{ backgroundColor: "var(--milc-purple-soft)", color: "var(--milc-purple)" }}
              >
                Leer contenidos
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
