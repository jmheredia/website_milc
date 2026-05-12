import { createFileRoute, useRouter } from "@tanstack/react-router";
import { z } from "zod";

const searchSchema = z.object({
  title: z.string().optional(),
});

export const Route = createFileRoute("/youtube/$ytId")({
  validateSearch: searchSchema,
  head: ({ match }) => ({
    meta: [
      {
        title: `${(match.search as { title?: string })?.title ?? "Video"} — MILC`,
      },
    ],
  }),
  component: YouTubeLoopPage,
});

function YouTubeLoopPage() {
  const { ytId } = Route.useParams();
  const { title } = Route.useSearch();
  const router = useRouter();

  // youtube-nocookie + loop requires playlist=ID; hide chrome as much as possible
  const params = new URLSearchParams({
    autoplay: "1",
    loop: "1",
    playlist: ytId,
    controls: "1",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
    playsinline: "1",
    fs: "1",
  });
  const src = `https://www.youtube-nocookie.com/embed/${ytId}?${params.toString()}`;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl aspect-video shadow-2xl rounded-lg overflow-hidden bg-black">
          <iframe
            src={src}
            title={title ?? "Video MILC"}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
      <div className="text-center pb-8">
        {title && <p className="text-milc-gray mb-4 text-lg">{title}</p>}
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
