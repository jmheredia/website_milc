import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/colaboradores")({
  head: () => ({
    meta: [
      { title: "Colaboradores — MILC" },
      { name: "description", content: "MILC es miembro de diferentes redes y coaliciones a nivel nacional e internacional." },
    ],
  }),
  component: Page,
});

const W = "https://static.wixstatic.com/media/";

const REDES = [
  { name: "Comesama", url: `${W}588355_9e46985704a14fe9810b2520a268891f~mv2.png/v1/crop/x_272,y_0,w_737,h_720/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/image_2022-10-05_175855739.png` },
  { name: "Juntos Contra el Cáncer", url: `${W}588355_c1063b692fad4e869595877ee780b5d6~mv2.png/v1/crop/x_0,y_12,w_1080,h_1055/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Juntos-Contra-el-Cancer.png` },
  { name: "Red contra el cáncer", url: `${W}588355_8396ab6e42d74018b68169727d63a876~mv2.jpg/v1/crop/x_0,y_3,w_179,h_175/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/image_2022-10-05_165239973_edited.jpg` },
  { name: "ABC GlobAlliance", url: `${W}588355_a402176663db43b89b8ae55331da6aa3~mv2.png/v1/crop/x_0,y_12,w_1080,h_1055/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/ABC.png` },
  { name: "INCAN", url: `${W}f9a478_f0f7f1ab09d14372b2103e02b8842f53~mv2.png/v1/crop/x_0,y_12,w_1080,h_1055/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/INCAN.png` },
  { name: "Tec Salud", url: `${W}588355_6832dd920a7f4460b2a9968da947395e~mv2.png/v1/crop/x_0,y_5,w_400,h_391/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/image_2022-10-05_174752940.png` },
];

const COLABORADORES = [
  { name: "Roche", url: `${W}f9a478_7572f08b976d436098137725158971ff~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Roche_logo.png` },
  { name: "Sanofi", url: `${W}588355_390d5271232e48529235e9e293e506b8~mv2.png/v1/crop/x_0,y_7,w_935,h_914/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/image_2022-09-23_171910661.png` },
  { name: "Impuls", url: `${W}588355_ab9f273114d549b697ca33972eee82d3~mv2.png/v1/crop/x_64,y_0,w_172,h_168/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/impuls.png` },
  { name: "Prosankin", url: `${W}588355_45a5e6a3c8e34fcfaccdc08f0c2a6fe5~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/prosankin.png` },
  { name: "Christus Muguerza", url: `${W}588355_6d0c636d5b344001861c8ae6a24f1bb4~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Christus-Muguerza.png` },
  { name: "Pfizer", url: `${W}588355_b46b9e3ef0d94302accace02e79a91a3~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Pfizer.png` },
  { name: "APCECM", url: `${W}f9a478_61ac72d8744d4314b496fc3ead2d70bd~mv2.jpg/v1/crop/x_0,y_11,w_977,h_955/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/APCECM_edited.jpg` },
  { name: "Mercedes Benz", url: `${W}f9a478_6cc082998a2647b4ab887f5aedcd301e~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Meredes_Benz.png` },
  { name: "Transportes Milán", url: `${W}588355_22166c4ca4ca469fa287bb1d5f1237f2~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/transportes-milan.png` },
  { name: "Tigres", url: `${W}588355_fa5e2a7de4d840a4bd8d03521b7eb23f~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Tigres.png` },
  { name: "Novartis", url: `${W}f9a478_a1a2c2312926456596e6e9d27ff91c17~mv2.png/v1/crop/x_0,y_12,w_1080,h_1055/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/NOVARTIS.png` },
  { name: "Sisamex", url: `${W}588355_06a7dc75bcd44b4b8ac4bae29c30a406~mv2.jpg/v1/crop/x_136,y_0,w_808,h_790/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/sisamex.jpg` },
  { name: "Banorte", url: `${W}588355_361de6987d9a429b970d818b38620ef5~mv2.png/v1/crop/x_0,y_5,w_400,h_391/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/image_2022-09-26_151623216.png` },
  { name: "Xignux", url: `${W}588355_4be60599271544a78c411983ee113499~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/xignux.png` },
  { name: "Amgen", url: `${W}f9a478_bb460288f7ef49bc8245465b96820ac0~mv2.png/v1/crop/x_0,y_12,w_1080,h_1055/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/AMGEN.png` },
  { name: "Cemex", url: `${W}588355_7d5a783aca26413e8896398bd5bff151~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/Cemex.png` },
  { name: "Heineken", url: `${W}588355_0d382a75b25541859b4e53b489a4bc82~mv2.jpg/v1/crop/x_11,y_0,w_746,h_729/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/image_2022-09-26_151744697_edited.jpg` },
  { name: "Medicamex", url: `${W}588355_a4580a9d06af4417b62fbf490335396e~mv2.png/v1/crop/x_0,y_14,w_1200,h_1173/fill/w_300,h_290,al_c,q_85,enc_avif,quality_auto/medicamex.png` },
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
