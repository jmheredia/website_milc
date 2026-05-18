import { createFileRoute } from "@tanstack/react-router";
import wixImg1 from "@/assets/external/wix_fa94b4040e5a.png";
import wixImg2 from "@/assets/external/wix_c26d291afd58.png";
import wixImg3 from "@/assets/external/wix_c0d32ec6b0be.jpg";
import wixImg4 from "@/assets/external/wix_d4723f6ee8a9.png";
import wixImg5 from "@/assets/external/wix_10d730b6a618.png";
import wixImg6 from "@/assets/external/wix_e445bf4da641.png";
import wixImg7 from "@/assets/external/wix_e50e299be31f.png";
import wixImg8 from "@/assets/external/wix_f0602845a3fb.png";
import wixImg9 from "@/assets/external/wix_7bfd9ca5be74.png";
import wixImg10 from "@/assets/external/wix_03eadfdac1a3.png";
import wixImg11 from "@/assets/external/wix_96982081e991.png";
import wixImg12 from "@/assets/external/wix_9bd0c815ac4e.png";
import wixImg13 from "@/assets/external/wix_39ab52b84a49.jpg";
import wixImg14 from "@/assets/external/wix_223511606274.png";
import wixImg15 from "@/assets/external/wix_fb37fdd1940f.png";
import wixImg16 from "@/assets/external/wix_4f0e02b86e0d.png";
import wixImg17 from "@/assets/external/wix_4bbef5c96946.png";
import wixImg18 from "@/assets/external/wix_d7e86b622bca.jpg";
import wixImg19 from "@/assets/external/wix_9060558fa496.png";
import wixImg20 from "@/assets/external/wix_d2d19e5e865a.png";
import wixImg21 from "@/assets/external/wix_e2b667e2f544.png";
import wixImg22 from "@/assets/external/wix_237833f901e8.png";
import wixImg23 from "@/assets/external/wix_90902af84faf.jpg";
import wixImg24 from "@/assets/external/wix_5e3172555c6a.png";

export const Route = createFileRoute("/colaboradores")({
  head: () => ({
    meta: [
      { title: "Colaboradores — MILC" },
      { name: "description", content: "MILC es miembro de diferentes redes y coaliciones a nivel nacional e internacional." },
    ],
  }),
  component: Page,
});


const REDES = [
  { name: "Comesama", url: wixImg1 },
  { name: "Juntos Contra el Cáncer", url: wixImg2 },
  { name: "Red contra el cáncer", url: wixImg3 },
  { name: "ABC GlobAlliance", url: wixImg4 },
  { name: "INCAN", url: wixImg5 },
  { name: "Tec Salud", url: wixImg6 },
];

const COLABORADORES = [
  { name: "Roche", url: wixImg7 },
  { name: "Sanofi", url: wixImg8 },
  { name: "Impuls", url: wixImg9 },
  { name: "Prosankin", url: wixImg10 },
  { name: "Christus Muguerza", url: wixImg11 },
  { name: "Pfizer", url: wixImg12 },
  { name: "APCECM", url: wixImg13 },
  { name: "Mercedes Benz", url: wixImg14 },
  { name: "Transportes Milán", url: wixImg15 },
  { name: "Tigres", url: wixImg16 },
  { name: "Novartis", url: wixImg17 },
  { name: "Sisamex", url: wixImg18 },
  { name: "Banorte", url: wixImg19 },
  { name: "Xignux", url: wixImg20 },
  { name: "Amgen", url: wixImg21 },
  { name: "Cemex", url: wixImg22 },
  { name: "Heineken", url: wixImg23 },
  { name: "Medicamex", url: wixImg24 },
];

function LogoCard({ name, url }: { name: string; url: string }) {
  return (
    <div className="reveal flex items-center justify-center aspect-square">
      <img src={url} alt={name} className="max-h-32 max-w-full object-contain" loading="lazy" />
    </div>
  );
}

function Page() {
  return (
    <div>
      <section className="reveal" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container-milc py-14 md:py-20">
          <h1 className="heading-xl text-milc-pink leading-[1.1] max-w-4xl">
            MILC es miembro de diferentes redes y coaliciones a nivel nacional e internacional:
          </h1>
          <div className="gradient-bar my-6" />
        </div>
      </section>

      <section className="container-milc py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {REDES.map((c) => <LogoCard key={c.name} {...c} />)}
        </div>
      </section>

      <section className="reveal" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="container-milc py-14 md:py-20">
          <h2 className="heading-lg text-milc-pink leading-[1.1] max-w-4xl">
            Nuestros colaboradores en la lucha contra el cáncer de mama
          </h2>
          <div className="gradient-bar my-6" />
        </div>
      </section>

      <section className="container-milc py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {COLABORADORES.map((c) => <LogoCard key={c.name} {...c} />)}
        </div>
      </section>
    </div>
  );
}
