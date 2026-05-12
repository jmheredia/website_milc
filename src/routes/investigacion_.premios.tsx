import { createFileRoute } from "@tanstack/react-router";
import iconTrofeo from "@/assets/icono-trofeo.png";

export const Route = createFileRoute("/investigacion_/premios")({
  head: () => ({
    meta: [
      { title: "Premios — MILC" },
      {
        name: "description",
        content:
          "Algunos reconocimientos que obtuvimos por nuestra investigación sobre el cáncer de mama.",
      },
    ],
  }),
  component: Page,
});

const ORANGE = "#EAA04D";

type Item = {
  year: string;
  title: string;
};

const ITEMS: Item[] = [
  {
    year: "2022",
    title: "ASCO International Women Who Conquer Cancer Mentorship Award.",
  },
  {
    year: "2021",
    title: "Reconocimiento al Mérito Cívico “Presea Estado de Nuevo León”",
  },
  {
    year: "2019",
    title: "Patient Advocacy Innovation Challenge.",
  },
];

function Card({ year, title }: Item) {
  return (
    <div
      className="reveal rounded-2xl shadow-md p-7 md:p-8 flex flex-col h-full"
      style={{ backgroundColor: ORANGE }}
    >
      <div className="flex items-center gap-4">
        <span className="text-white text-sm">Premios</span>
        <span className="block w-px h-10 bg-white/60" />
        <img src={iconTrofeo} alt="" className="h-9 w-auto" />
        <span className="text-white text-sm">{year}</span>
      </div>

      <h3 className="mt-8 text-white text-xl md:text-2xl font-bold leading-snug flex-1">
        {title}
      </h3>
    </div>
  );
}

function Page() {
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="container-milc pt-14 md:pt-20 pb-10 reveal">
        <h1 className="text-3xl md:text-4xl font-extrabold text-milc-gray">
          Premios
        </h1>
        <div className="gradient-bar my-6" />
        <h2
          className="text-3xl md:text-5xl font-extrabold leading-tight max-w-5xl"
          style={{ color: ORANGE }}
        >
          Algunos reconocimientos que obtuvimos por nuestra investigación sobre el cáncer de mama
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
