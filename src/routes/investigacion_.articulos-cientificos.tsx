import { createFileRoute } from "@tanstack/react-router";
import iconDocumento from "@/assets/icono-documento.png";

export const Route = createFileRoute("/investigacion_/articulos-cientificos")({
  head: () => ({
    meta: [
      { title: "Artículos científicos — MILC" },
      {
        name: "description",
        content:
          "Documentos y artículos científicos sobre cáncer de mama que pueden ayudarte en tu proceso.",
      },
    ],
  }),
  component: Page,
});

const PINK = "#EE75A4";

const ARTICULOS: { title: string; href: string }[] = [
  { title: "Young women with breast cancer in resource-limited settings: what we know and what we need to do better.", href: "https://www.milc.org.mx/_files/ugd/588355_6ffdb59881414657aa5f055e993ed64b.pdf" },
  { title: "Challenges of treating young women with cancer in the era of new oncologic treatments.", href: "https://www.milc.org.mx/_files/ugd/588355_5b25bafe93c4450f8f27e69d7b58c223.pdf" },
  { title: "Factor structure, internal consistency and distribution of Female Sexual Function Index among Mexican women with early diagnostic of breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_c94d014de9e14b2e9f9d0d5b066fad6b.pdf" },
  { title: "Prospective study of fertility preservation in young women with breast cancer in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_8f56285c9b124dd1bd5d3207dc4ee423.pdf" },
  { title: "Adjuvant endocrine therapy for premenopausal women with breast cancer: Patient adherence and physician prescribing practices in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_789e8059e3304d0bb0242766ec0a7210.pdf" },
  { title: "Attitudes and Factors Associated With COVID-19 Vaccine Hesitancy Among Patients With Breast Cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_918de3c9fc374b34bdb8c520b62f389e.pdf" },
  { title: "Adherence to adjuvant tamoxifen in Mexican young women with breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_6da6010c4abe4ed79b978c5025b13b72.pdf" },
  { title: "Improving Collection of Real-World Data: The Experience of the Joven & Fuerte Prospective Cohort for Mexican Young Women With Breast Cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_0b80746a49e144e8aa2febef499d6ec3.pdf" },
  { title: "Unmet needs among breast cancer patients in a developing country and supportive care needs survey validation.", href: "https://www.milc.org.mx/_files/ugd/588355_a89a1a4aeb8442bdb8932c99bc506abe.pdf" },
  { title: "The challenges of breast cancer care in Mexico during health-care reforms and COVID-19.", href: "https://www.milc.org.mx/_files/ugd/588355_903e95c7ab4a48ec957486bc6e72e698.pdf" },
  { title: "Prioritization of Patients with Abnormal Breast Findings in the Alerta Rosa Navigation Program to Reduce Diagnostic Delays.", href: "https://www.milc.org.mx/_files/ugd/588355_229ec40bd2c64b048adba87f1f6043ce.pdf" },
  { title: "Highlights 2020: framing health stories.", href: "https://www.milc.org.mx/_files/ugd/588355_157dc98c1bf34ff294c5209d08de67bc.pdf" },
  { title: "Factor structure and reliability of MOS Social Support Survey among Mexican women with breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_1bb87193a8124043865100a0b360bc82.pdf" },
  { title: "Short inter-pregnancy interval and pregnancy-associated breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_c7c02ff02b404091ae8d36affdc1682a.pdf" },
  { title: "Physicians' attitudes, knowledge, and perceived barriers toward fertility preservation in young breast cancer patients in a developing country.", href: "https://www.milc.org.mx/_files/ugd/588355_fb47689fad0a4e5ca39a30784806f4bb.pdf" },
  { title: "Gaps in knowledge and understanding of patients With metastatic breast cancer in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_3305fd3b98bf4a13a3fbeac41e7b9063.pdf" },
  { title: "Young women with breast cancer in Mexico: results of the pilot phase of the Joven & Fuerte prospective cohort.", href: "https://www.milc.org.mx/_files/ugd/588355_ec1e3605390943368533080b7fd070ea.pdf" },
  { title: "Communication challenges among oncologists in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_02ff504fe3c44a778aacab428a46d471.pdf" },
  { title: "Patients' satisfaction with a supportive care program for young breast cancer patients in Mexico: Joven & Fuerte supports patients' needs and eases their illness process.", href: "https://www.milc.org.mx/_files/ugd/588355_ea5f3e8a4dd94289b9144c90a7945831.pdf" },
  { title: "Medical and information needs among young women with breast cancer in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_485cb387c2704a4785bc5df64c110f38.pdf" },
  { title: "Locally advanced breast cancer in young women in Latin America.", href: "https://www.milc.org.mx/_files/ugd/588355_3224e7bea4d74318916c7e2933106478.pdf" },
  { title: "Mujeres Jóvenes con Cáncer de Mama: Necesidades de Apoyo en Atención y Resiliencia.", href: "https://www.milc.org.mx/_files/ugd/588355_8e8694cde71e4bd59a29111d7d7245b3.pdf" },
  { title: "Suboptimal use of effective contraceptive methods in young Mexican women with breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_20ae3f6ab0d54043a06303ec87bc3ab6.pdf" },
  { title: "Alerta Rosa: Novel Alert and Navigation Breast Cancer Program in Nuevo Leon, Mexico, for Reducing Health System Interval Delays.", href: "https://www.milc.org.mx/_files/ugd/588355_1ccf18ada4b44cf1a8c4e029e9c62bfb.pdf" },
  { title: "Validation of the Cognitive Emotional Regulation Questionnaire in Mexican patients with breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_7f1001e94c324e2fbdfafa576ef0d4de.pdf" },
  { title: "Psychosocial needs of young breast cancer survivors in Mexico City, Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_5b265533d7ce4476941f71f86c4dff0b.pdf" },
  { title: "\"Joven & Fuerte\": Program for Young Women with Breast Cancer in Mexico - Initial Results.", href: "https://www.milc.org.mx/_files/ugd/588355_a1e52913bc554f73a177cc748ae89602.pdf" },
  { title: "Special Needs of Young Women with Breast Cancer in Limited Resource Settings.", href: "https://www.milc.org.mx/_files/ugd/588355_64649a3706534cfe9fa66d2617dfe1dc.pdf" },
  { title: "Preface (Cancer treatment and research).", href: "https://www.milc.org.mx/_files/ugd/588355_6537a49dc1ba41dc8dcc0952dda15e1d.pdf" },
  { title: "Preface (Breast Cancer in Young Women).", href: "https://www.milc.org.mx/_files/ugd/588355_9c12fe53e3da459b84f773af89492ce6.pdf" },
  { title: "Fertility concerns among breast cancer patients in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_b7fc63586c06465492e78c7fe7c09c9d.pdf" },
  { title: "Information needs and internet use of breast cancer survivors in Mexico.", href: "https://www.milc.org.mx/_files/ugd/588355_5947c406742540779a3fe7cc45f905f1.pdf" },
  { title: "Specialized programs to support young women with breast cancer.", href: "https://www.milc.org.mx/_files/ugd/588355_63621828223d44dfa549e729600cfbc2.pdf" },
  { title: "Cáncer de mama en mujeres jóvenes: Experiencia en el Instituto Nacional de Cancerología.", href: "https://www.milc.org.mx/_files/ugd/588355_e4ddcb10322a44d2a44f8a40f9b6af55.pdf" },
];

function Page() {
  return (
    <div className="bg-[#f4f4f5] min-h-screen">
      {/* Hero / intro */}
      <section className="container-milc pt-14 md:pt-20 pb-10 reveal">
        <h1 className="text-3xl md:text-4xl font-extrabold text-milc-gray">
          Artículos científicos
        </h1>
        <div className="gradient-bar my-6" />
        <h2
          className="text-3xl md:text-5xl font-extrabold leading-tight max-w-5xl"
          style={{ color: PINK }}
        >
          Documentos que te pueden ayudar en tu proceso
        </h2>
        <p className="mt-6 max-w-3xl text-milc-gray text-base md:text-lg leading-relaxed">
          Una colección de publicaciones científicas en las que MILC ha
          colaborado, enfocadas en mejorar la atención y los desenlaces de
          pacientes con cáncer de mama.
        </p>
      </section>

      {/* Cards grid */}
      <section className="container-milc pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ARTICULOS.map((a) => (
            <div
              key={a.href + a.title}
              className="reveal rounded-2xl shadow-md p-7 md:p-8 flex flex-col h-full"
              style={{ backgroundColor: PINK }}
            >
              <div className="flex items-center gap-4">
                <span className="text-white text-sm leading-tight">
                  Artículos<br />científicos
                </span>
                <span className="block w-px h-10 bg-white/60" />
                <img src={iconDocumento} alt="" className="h-9 w-auto" />
                <span className="text-white text-sm">PDF</span>
              </div>

              <h3 className="mt-8 text-white text-xl md:text-2xl font-bold leading-snug flex-1">
                {a.title}
              </h3>

              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block border border-white text-white px-6 py-2.5 rounded-full text-center hover:bg-white/10 transition-colors"
              >
                Descarga el PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
