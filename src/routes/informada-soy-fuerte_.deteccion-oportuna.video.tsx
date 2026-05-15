import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/informada-soy-fuerte_/deteccion-oportuna/video")({
  head: () => ({
    meta: [{ title: "Autoexploración — MILC" }],
  }),
  component: VideoPage,
});

function VideoPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <video
          src="/videos/autoexploracion-milc.mp4"
          controls
          autoPlay
          className="max-h-[85vh] w-auto max-w-full rounded-lg shadow-2xl"
        />
      </div>
      <div className="text-center pb-8">
        <Link
          to="/informada-soy-fuerte/deteccion-oportuna"
          className="btn-pink inline-block"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}
