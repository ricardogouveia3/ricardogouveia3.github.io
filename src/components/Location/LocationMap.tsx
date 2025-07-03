import { LocationMapProps } from '../../types/Location.type.ts';

export default function LocationMap({
  map,
  info = false,
  hover = false,
}: Readonly<LocationMapProps>) {
  const mapStyleIfInfoLoaded = info ? `lg:w-[60%]` : 'lg:w-full max-h-80';
  const hoverMapClassnames = hover ? `scale-125` : ``;

  return (
    <div className={`h-full w-full ${mapStyleIfInfoLoaded} overflow-hidden transition-all`}>
      <a href={map.link} target="_blank" className="relative block h-full w-full">
        <div className={`absolute h-full w-full bg-black opacity-0 dark:opacity-40`} />
        <picture>
          <source srcSet={map.imgSrc} type="image/webp" />
          <img
            src={map.imgSrc}
            alt={map.alt}
            className={`h-full w-full object-cover object-center transition-all ${hoverMapClassnames}`}
            decoding="async"
          />
        </picture>
      </a>
    </div>
  );
}
