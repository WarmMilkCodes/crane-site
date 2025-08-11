import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc: string;      // e.g. "/header.jpg"
  heightClass?: string;  // override height if needed
};

export default function HeroHeader({
  title,
  subtitle,
  imageSrc,
  heightClass = "h-56 md:h-72 lg:h-80",
}: Props) {
  return (
    <div className={`relative w-full ${heightClass} overflow-hidden rounded-[var(--radius-xl)] shadow-sm`}>
      <Image src={imageSrc} alt={title} fill priority className="object-cover" />
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      {/* text */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <h1
          className="text-2xl md:text-3xl font-semibold text-white drop-shadow-sm"
          style={{ fontFamily: "var(--font-serif)" as any }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="text-white/90 text-sm md:text-base drop-shadow-sm">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
