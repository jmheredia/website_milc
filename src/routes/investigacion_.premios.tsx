import { createFileRoute } from "@tanstack/react-router";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import iconTrofeo from "@/assets/icono-trofeo.png";

import p2022_1 from "@/assets/premios/2022_1.jpeg";
import p2022_2 from "@/assets/premios/2022_2.jpeg";
import p2022_3 from "@/assets/premios/2022_3.jpeg";
import p2021_1 from "@/assets/premios/2021_1.jpeg";
import p2021_2 from "@/assets/premios/2021_2.jpeg";
import p2021_3 from "@/assets/premios/2021_3.jpeg";
import p2019_1 from "@/assets/premios/2019_1.jpg";
import p2019_2 from "@/assets/premios/2019_2.jpg";
import p2017a_1 from "@/assets/premios/2017a_1.jpeg";
import p2017a_2 from "@/assets/premios/2017a_2.jpeg";
import p2017a_3 from "@/assets/premios/2017a_3.jpeg";
import p2017b_1 from "@/assets/premios/2017b_1.jpeg";
import p2017b_2 from "@/assets/premios/2017b_2.jpeg";
import p2017b_3 from "@/assets/premios/2017b_3.jpeg";

=======
import iconTrofeo from "@/assets/icono-trofeo.png";

>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
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
<<<<<<< HEAD
  images: string[];
=======
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
};

const ITEMS: Item[] = [
  {
    year: "2022",
    title: "ASCO International Women Who Conquer Cancer Mentorship Award.",
<<<<<<< HEAD
    images: [p2022_1, p2022_2, p2022_3],
=======
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
  },
  {
    year: "2021",
    title: "Reconocimiento al Mérito Cívico “Presea Estado de Nuevo León”",
<<<<<<< HEAD
    images: [p2021_1, p2021_2, p2021_3],
=======
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
  },
  {
    year: "2019",
    title: "Patient Advocacy Innovation Challenge.",
<<<<<<< HEAD
    images: [p2019_1, p2019_2],
  },
  {
    year: "2017",
    title: "XXXI Premio “Miguel Alemán Valdés” en el Área de Salud.",
    images: [p2017a_1, p2017a_2, p2017a_3],
  },
  {
    year: "2017",
    title: "Mujer Tec en Salud.",
    images: [p2017b_1, p2017b_2, p2017b_3],
  },
];

function Card({ item, onOpen }: { item: Item; onOpen: (i: number) => void }) {
  const [idx, setIdx] = useState(0);
  const total = item.images.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div
      className="reveal rounded-2xl shadow-md p-6 md:p-7 flex flex-col h-full"
=======
  },
];

function Card({ year, title }: Item) {
  return (
    <div
      className="reveal rounded-2xl shadow-md p-7 md:p-8 flex flex-col h-full"
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
      style={{ backgroundColor: ORANGE }}
    >
      <div className="flex items-center gap-4">
        <span className="text-white text-sm">Premios</span>
        <span className="block w-px h-10 bg-white/60" />
        <img src={iconTrofeo} alt="" className="h-9 w-auto" />
<<<<<<< HEAD
        <span className="text-white text-sm">{item.year}</span>
      </div>

      <h3 className="mt-6 text-white text-xl md:text-2xl font-bold leading-snug">
        {item.title}
      </h3>

      <div className="mt-6 relative group">
        <button
          type="button"
          onClick={() => onOpen(idx)}
          className="block w-full overflow-hidden rounded-xl bg-white/10 aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Ver imagen ampliada"
        >
          <img
            src={item.images[idx]}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </button>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/85 text-milc-gray opacity-0 group-hover:opacity-100 transition shadow"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full bg-white/85 text-milc-gray opacity-0 group-hover:opacity-100 transition shadow"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {item.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "bg-white w-5" : "bg-white/60 w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onChange, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/90 hover:text-white"
        aria-label="Cerrar"
      >
        <X className="h-7 w-7" />
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-8 grid place-items-center h-11 w-11 rounded-full bg-white/15 hover:bg-white/25 text-white"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % images.length);
            }}
            className="absolute right-4 md:right-8 grid place-items-center h-11 w-11 rounded-full bg-white/15 hover:bg-white/25 text-white"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] rounded-lg shadow-2xl object-contain"
      />
=======
        <span className="text-white text-sm">{year}</span>
      </div>

      <h3 className="mt-8 text-white text-xl md:text-2xl font-bold leading-snug flex-1">
        {title}
      </h3>
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
    </div>
  );
}

function Page() {
<<<<<<< HEAD
  const [open, setOpen] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="container-milc pt-14 md:pt-20 pb-10 reveal">
        <h1 className="text-3xl md:text-4xl font-extrabold text-milc-gray">Premios</h1>
=======
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      <section className="container-milc pt-14 md:pt-20 pb-10 reveal">
        <h1 className="text-3xl md:text-4xl font-extrabold text-milc-gray">
          Premios
        </h1>
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
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
<<<<<<< HEAD
            <Card
              key={it.title}
              item={it}
              onOpen={(i) => setOpen({ images: it.images, index: i })}
            />
          ))}
        </div>
      </section>

      {open && (
        <Lightbox
          images={open.images}
          index={open.index}
          onClose={() => setOpen(null)}
          onChange={(i) => setOpen({ images: open.images, index: i })}
        />
      )}
=======
            <Card key={it.title} {...it} />
          ))}
        </div>
      </section>
>>>>>>> 2cd7c657978e4915ff4086e40db8aaf03d0fa01d
    </div>
  );
}
