import { createFileRoute } from "@tanstack/react-router";
import iconLibros from "@/assets/icono-libros.png";

export const Route = createFileRoute("/investigacion_/libros")({
  head: () => ({
    meta: [
      { title: "Libros — MILC" },
      {
        name: "description",
        content:
          "Libros y capítulos de libros sobre cáncer de mama: lecturas que pueden ayudarte a comprender mejor tu proceso.",
      },
    ],
  }),
  component: Page,
});

const PURPLE_SOFT = "#B8A4D4";

type Item = {
  tag: string;
  title: string;
  href: string | null;
};

const ITEMS: Item[] = [
  {
    tag: "Libros\nCompletos",
    title: "Informada soy más fuerte: Guía para entender mejor el cáncer de mama.",
    href: "https://www.milc.org.mx/_files/ugd/588355_59bb71208ba24c56ac5135d718a1f8fd.pdf",
  },
  {
    tag: "Libros\nCompletos",
    title:
      "Juntas contra el Cáncer de Mama. ¿Qué puedo hacer yo? Guía práctica para mujeres en busca de bienestar.",
    href: "https://www.milc.org.mx/_files/ugd/588355_f36c97064126459c8684164672e298d1.pdf",
  },
  {
    tag: "Capítulos\nde Libros",
    title: "Role of GnRH agonists for fertility preservation in breast cancer.",
    href: "https://www.milc.org.mx/_files/ugd/588355_b5471ef91c0c4f8ca5bafd4c3b365b14.pdf",
  },
  {
    tag: "Capítulos\nde Libros",
    title: "Cáncer de Mama en Mujeres Jóvenes.",
    href: null,
  },
];

function Card({ tag, title, href }: Item) {
  const inner = (
    <div className="flex flex-col h-full p-7 md:p-8">
      <div className="flex items-center gap-4">
        <span className="text-white text-sm leading-tight whitespace-pre-line">
          {tag}
        </span>
        <span className="block w-px h-10 bg-white/60" />
        <img src={iconLibros} alt="" className="h-9 w-auto" />
        <span className="text-white text-sm">PDF</span>
      </div>

      <h3 className="mt-8 text-white text-xl md:text-2xl font-bold leading-snug flex-1">
        {title}
      </h3>

      <span className="mt-8 inline-block self-start border border-white text-white px-6 py-2.5 rounded-full text-sm">
        {href ? "Descarga el PDF" : "Próximamente"}
      </span>
    </div>
  );

  const baseClass =
    "reveal block rounded-2xl shadow-md hover:-translate-y-1 transition-transform h-full";

  if (!href) {
    return (
      <div
        className={baseClass}
        style={{ backgroundColor: PURPLE_SOFT, opacity: 0.85 }}
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={baseClass}
      style={{ backgroundColor: PURPLE_SOFT }}
    >
      {inner}
    </a>
  );
}

function Page() {
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="container-milc pt-14 md:pt-20 pb-10 reveal">
        <h1 className="text-3xl md:text-4xl font-extrabold text-milc-gray">
          Libros
        </h1>
        <div className="gradient-bar my-6" />
        <h2
          className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl"
          style={{ color: "#7B54A3" }}
        >
          Una lectura ligera que puedes llevar a todos lados
        </h2>
      </section>

      <section className="container-milc pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((it) => (
            <Card key={it.title} {...it} />
          ))}
        </div>
      </section>
    </div>
  );
}
