import { createFileRoute, useRouter } from "@tanstack/react-router";
import { z } from "zod";

const searchSchema = z.object({
  title: z.string().optional(),
});

export const Route = createFileRoute("/video/$vimeoId")({
  validateSearch: searchSchema,
  head: ({ params, match }) => ({
    meta: [
      {
        title: `${(match.search as { title?: string })?.title ?? "Video"} — MILC`,
      },
    ],
  }),
  component: VimeoPlayerPage,
});

function VimeoPlayerPage() {
  const { vimeoId } = Route.useParams();
  const { title } = Route.useSearch();
  const router = useRouter();

  // Vimeo embed URL — privado a tu dominio si lo configuras desde Vimeo
  const src = `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&autoplay=1&dnt=1`;

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl aspect-video shadow-2xl rounded-lg overflow-hidden bg-black">
          <iframe
            src={src}
            title={title ?? "Video MILC"}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
      <div className="text-center pb-8">
        {title && (
          <p className="text-white/80 mb-4 text-lg">{title}</p>
        )}
        <button
          onClick={() => router.history.back()}
          className="btn-pink inline-block"
        >
          Volver
        </button>
      </div>
    </div>
  );
}
