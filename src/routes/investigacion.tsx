import { createFileRoute } from "@tanstack/react-router";
import { A } from "@/lib/milc-assets";

export const Route = createFileRoute("/investigacion")({
  head: () => ({
    meta: [
      { title: "Investigación — MILC" },
      { name: "description", content: "Artículos científicos, libros, premios y GICAMx — investigación en cáncer de mama." },
    ],
  }),
  component: Page,
});

const ITEMS = [
  { id: "gicamx", icon: A.iconDocument, title: "GICAMx", text: "Grupo de Investigación en Cáncer de Mama de México." },
  { id: "articulos", icon: A.iconDocument, title: "Artículos científicos", text: "Contenido presentado en congresos nacionales e internacionales." },
  { id: "libros", icon: A.iconBook, title: "Libros", text: "Lecturas que pueden ayudarte a pasar el rato y comprender mejor tu proceso." },
  { id: "premios", icon: A.iconTrophy, title: "Premios", text: "Reconocimientos que recibimos gracias a nuestra investigación continua sobre el tema." },
];

function Page() {
  return (
    <div>
      <section className="container-milc text-center py-14 md:py-20 reveal">
        <h1 className="heading-xl text-milc-pink">Nuestra investigación sobre el cáncer de mama</h1>
        <div className="gradient-bar mx-auto my-6" />
        <p className="max-w-3xl mx-auto text-lg text-milc-gray">
          Estas son algunas de las fuentes de información que utilizamos para construir nuestro material.
        </p>
      </section>
      <section className="container-milc pb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((c) => (
          <div key={c.id} id={c.id} className="reveal scroll-mt-24 rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-black/5">
            <img src={c.icon} alt="" className="mx-auto h-16 w-16" />
            <h2 className="mt-4 font-semibold text-milc-pink text-xl">{c.title}</h2>
            <p className="mt-3 text-sm text-milc-gray">{c.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
