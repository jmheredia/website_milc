import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { JovenSubnav } from "@/components/site/JovenSubnav";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import banner from "@/assets/banner-testimonios.png";
import linea from "@/assets/linea-milc.png";
import logoSusan from "@/assets/logo-susan.png";
import logoAvon from "@/assets/logo-avon.png";
import logoTec from "@/assets/logo-tec.png";
import logoMedicina from "@/assets/logo-medicina.png";
import logoMujer from "@/assets/logo-mujer.png";
import logoMilc from "@/assets/logo-milc.png";
import fotoMariaPilar from "@/assets/testimonio-mariadelpilar.png";
import fotoYanoel from "@/assets/testimonio-yanoel.png";
import fotoMagda from "@/assets/testimonio-magda.png";

const PARTNERS = [
  { src: logoSusan, alt: "Susan G. Komen" },
  { src: logoAvon, alt: "Avon - Promesa contra el cáncer de mama" },
  { src: logoTec, alt: "Tecnológico de Monterrey - Escuela de Medicina" },
  { src: logoMedicina, alt: "Instituto Nacional de Cancerología" },
  { src: logoMujer, alt: "Octubre, mes de lucha contra el cáncer de la mujer" },
  { src: logoMilc, alt: "MILC" },
];

type Testimonio = {
  nombre: string;
  iniciales: string;
  foto: string;
  parrafos: string[];
};

const TESTIMONIOS: Testimonio[] = [
  {
    nombre: "María del Pilar Sarabia Pedraza",
    iniciales: "MP",
    foto: fotoMariaPilar,
    parrafos: [
      "Me diagnosticaron con cáncer de seno en marzo de 2016. Lo primero que pasó por mi cabeza fue ¿por qué a mí? Si soy tan joven. Creía que esta enfermedad sólo pasaba en mujeres mayores, no podía creerlo y después… miedo, fue el sentimiento que me invadió durante los primeros días, pensaba que me iba a morir, porque según yo, todas las personas con cáncer sufren y mueren, pensaba que ya no podría seguir con mi vida.",
      "Tenía muchas dudas sobre lo que iba a pasar, dónde atenderme, qué era lo que yo tenía que hacer para curarme. Me habían dicho que tendría que cambiar mi vida porque después de la operación tendría que tener muchos cuidados de por vida y que no podría realizar muchas actividades y la verdad es que cuando llegué al Instituto me explicaron que gracias a la detección temprana y a los múltiples tratamientos que hay hoy en día (sobre todo para las mujeres jóvenes), las mujeres que padecemos esta enfermedad podemos continuar con nuestra vida. Sí, con algunos cuidados, pero sin dejar de realizar las actividades cotidianas.",
      "La manera en la que yo enfrenté esto fue siendo siempre positiva, aceptando la enfermedad y sin duda el apoyo de mi familia y amigos me motivó a poner siempre todo de mi parte para vencer esta enfermedad. Me prometí nunca más volver a sentir miedo por el cáncer.",
    ],
  },
  {
    nombre: "Yanoel Morales",
    iniciales: "YM",
    foto: fotoYanoel,
    parrafos: [
      "Al enterarme que tenía Cáncer de Mama mi mente se saturó de miedos relacionados con la dependencia, el sufrimiento, el dolor y la muerte. Así que la noticia de una mastectomía, dentro de todo, era lo que me asustaba menos. Al contrario, sentí que tenía sobre mi pecho dos bombas de tiempo y lo único que deseaba era que quitaran el seno donde se alojaba el tumor, y estaba de acuerdo con que también retiraran el seno contrario para reducir el riesgo de que pudiera regresar ahí. Ya que, en mi caso, había antecedentes familiares importantes, puesto que mi madre y cuatro de sus hermanas ya habían tenido Cáncer de Mama.",
      "Para sobreponerme al diagnóstico y poder continuar con lo que seguía, fue importante comprender que cada diagnóstico, cada tratamiento y cada cuerpo era diferente. Que lo que le había pasado a alguien más no necesariamente me pasaría a mí. Trabajar en ello. Con el apoyo del equipo de psicología bajó mi ansiedad y me ayudó a estar más tranquila para responder mejor a los tratamientos, y hacer a un lado las ideas fatalistas que bloqueaban mi objetividad inicialmente, ya que en ocasiones puede llegar a ser mayor el malestar emocional que incluso el mismo malestar físico, y esto nos puede dificultar la toma de decisiones importantes como es el caso de la decisión de someterse o no a la cirugía de mama. Mis senos no eran como los de las mujeres de las revistas. Su belleza era diferente, radicaba en otra cosa, para mí eran un símbolo de amor, porque me habían permitido amamantar. Eran pequeños y marcados por la maternidad, eran imperfectos, pero eran parte de mi identidad y me pertenecían. Y a veces es difícil renunciar a lo que nos pertenece.",
      "Una vez que me habían realizado la cirugía sentí alivio porque ya habían retirado de mi cuerpo el tumor, fui candidata a reconstrucción, mi recuperación fue muy rápida y no tuve complicación alguna. Más que la cirugía, las ideas que tenía acerca de ella, eran lo que me asustaba más. Si bien, es cierto que la cirugía se llevó un trozo de mi piel, un tejido importante de mi cuerpo, estoy infinitamente agradecida porque la mastectomía también me dio la oportunidad de recuperar mi salud y retomar mi vida con más fuerza, para hacer lo que me gusta y disfrutar a las personas que amo.",
      "Gracias al trabajo del equipo multidisciplinario de especialistas, hoy a un año de la cirugía estoy sana, llena de sueños y decidida a vivir intensamente cada momento que tengo.",
    ],
  },
  {
    nombre: "Magda García",
    iniciales: "MG",
    foto: fotoMagda,
    parrafos: [
      "Fue en mayo del 2014 que acudí al Hospital Civil, con 7 meses de gestación con 32 años de edad. Ahí le expliqué al ginecólogo que bañándome detecte una bolita en el seno derecho, como una semilla de lenteja dura, sin dolor y sin movimiento. La doctora me palpó y me dijo que sólo se trataba de grasa o leche acumulada a causa del embarazo, que cuando naciera el bebé la bolita desaparecería. Nace el bebé en julio 2014 y tras un par de meses de lactancia vuelvo a acudir con la doctora y de nuevo insisto con la bolita que sigue ahí, no sentí ningún cambio, pero seguía ahí. La doctora dice que cuando termine la lactancia desaparecería la bolita. Mi bebé cumple 1 año 2 meses, lo sigo tocando y acudo con otra doctora del centro de salud, un médico familiar.",
      "Le comenté de la bolita, me palpa y me hace saber que eso no está bien, me manda hacer un ultrasonido mamario para descartar anomalías lo más pronto. 30 de septiembre de 2015 me mandaron hacer un ultrasonido con el radiólogo y el me da la primera conclusión: condición fibroquística, micro calcificaciones y bordes irregulares. BIRADS 4a. Me dijo que le diera seguimiento inmediato, y que con la conclusión que anotó en el resultado me darían pase a una mastografía para descartar algo maligno. Salí del consultorio y rápidamente busqué en el internet las interpretaciones del resultado del doctor.",
      "Creo que fue el primer error que cometí, dejarme llevar por todo lo que se dice en el Internet, imaginando lo peor: cáncer. Me veía prácticamente muerta y enterrada, con mi familia destruida, con mis hijos solos con una vida que ya no tenía esperanzas para mí. Comencé a sentir como si en ese momento estuviera pagando todos los errores de mi vida. Como si Dios se hubiera olvidado de mí. Estaba angustiada preguntándome cuánto me quedará de vida. Pero en el fondo necesitaba saber y que me dijeran que había solución.",
    ],
  },
];

export const Route = createFileRoute("/joven-y-fuerte_/testimonios")({
  head: () => ({
    meta: [
      { title: "Testimonios — Joven & Fuerte | MILC" },
      {
        name: "description",
        content:
          "Testimonios de mujeres jóvenes que han enfrentado el cáncer de mama y comparten su experiencia.",
      },
      { property: "og:title", content: "Testimonios — Joven & Fuerte | MILC" },
      {
        property: "og:description",
        content:
          "Historias reales de mujeres jóvenes que enfrentaron el cáncer de mama.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [open, setOpen] = useState<number | null>(null);
  const activo = open !== null ? TESTIMONIOS[open] : null;

  return (
    <div>
      <JovenSubnav />

      {/* Banner */}
      <section className="relative w-full">
        <img
          src={banner}
          alt="Testimonios"
          className="w-full h-[320px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-milc text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Magda García - Testimonio
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-white text-base md:text-lg leading-relaxed drop-shadow">
              Mi bebé cumple 1 año 2 meses lo sigo lactando y acudo con otra Dra. del centro de
              salud un médico familiar le comenté de la bolita me palpa y me hace saber que eso
              no está bien...
            </p>
            <img
              src={linea}
              alt=""
              aria-hidden
              className="mt-5 mx-auto h-3 w-52 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="container-milc py-14 md:py-20">
        <div className="reveal max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-milc-purple">
            Historias que inspiran
          </h2>
          <img
            src={linea}
            alt=""
            aria-hidden
            className="mt-3 mx-auto h-3 w-52 object-contain"
          />
          <p className="mt-6 text-milc-gray leading-relaxed">
            Conoce las historias de mujeres jóvenes que han enfrentado el cáncer de mama y hoy
            comparten su experiencia para acompañar a otras.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <article
              key={t.nombre}
              className="reveal flex flex-col items-center text-center rounded-2xl bg-milc-pink-soft/40 p-8 shadow-sm"
            >
              <img
                src={t.foto}
                alt={t.nombre}
                className="h-32 w-32 rounded-full object-cover shadow-md ring-4 ring-white"
                loading="lazy"
              />
              <h3 className="mt-6 text-xl font-bold text-milc-purple">{t.nombre}</h3>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-milc-purple transition-all hover:brightness-95"
                style={{ backgroundColor: "var(--milc-teal)" }}
              >
                Ver testimonio
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          {activo && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-milc-purple text-left">
                  {activo.nombre}
                </DialogTitle>
                <img
                  src={linea}
                  alt=""
                  aria-hidden
                  className="mt-2 h-3 w-52 object-contain"
                />
              </DialogHeader>
              <div className="mt-4 space-y-4 text-milc-gray leading-relaxed">
                {activo.parrafos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Partner logos */}
      <section
        className="bg-white py-12 md:py-16 border-t border-milc-pink-soft"
        aria-label="Aliados"
      >
        <div className="container-milc">
          <div className="flex items-center justify-between gap-4 md:gap-6 overflow-x-auto">
            {PARTNERS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-10 md:h-14 w-auto object-contain shrink-0 opacity-90 hover:opacity-100 transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
