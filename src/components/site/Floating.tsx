import { SOCIAL_LINKS } from "@/lib/milc-assets";
import waIcon from "@/assets/logowhatsappgris.png";
import fbIcon from "@/assets/logofacebookgris.png";
import igIcon from "@/assets/logoinstagra.png";
import twIcon from "@/assets/logotwitergris.png";

export function FloatingSocials() {
  const items = [
    { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", src: waIcon },
    { href: SOCIAL_LINKS.facebook, label: "Facebook", src: fbIcon },
    { href: SOCIAL_LINKS.instagram, label: "Instagram", src: igIcon },
    { href: SOCIAL_LINKS.twitter, label: "Twitter", src: twIcon },
  ];
  return (
    <div className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 md:flex flex-col gap-3">
      {items.map(({ href, label, src }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="group transition-transform hover:scale-110"
        >
          <img src={src} alt={label} className="h-9 w-9 object-contain" />
        </a>
      ))}
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--milc-teal)" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.61c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.83-2-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34s-.95.93-.95 2.27.97 2.63 1.11 2.81c.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16 4C9.38 4 4 9.38 4 16c0 2.07.53 4.02 1.46 5.71L4 28l6.45-1.42A11.95 11.95 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4z"/>
      </svg>
    </a>
  );
}
