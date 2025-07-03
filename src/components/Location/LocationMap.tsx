import { LocationMapProps } from '../../types/Location.type.ts';
import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext.tsx';

export default function LocationMap({
  map,
  info = false,
  hover = false,
}: Readonly<LocationMapProps>) {
  const { darkMode } = useContext(ThemeContext) ?? { darkMode: true };
  const mapStyleIfInfoLoaded = info ? `lg:w-[60%]` : 'lg:w-full max-h-80';
  const hoverMapClassnames = hover ? `scale-125` : ``;

  return (
    <div
      className={`h-full w-full ${mapStyleIfInfoLoaded} max-h-full overflow-hidden transition-all`}
    >
      <a href={map.link} target="_blank" className="relative block h-full max-h-full w-full">
        <div className={`absolute h-full max-h-full w-full bg-black opacity-0 dark:opacity-40`} />
        <picture
          className={`absolute top-[50%] left-[50%] h-full max-h-full w-full -translate-x-[50%] -translate-y-[50%]`}
        >
          <source srcSet={darkMode ? map.imgSrcDark : map.imgSrcLight} type="image/webp" />
          <img
            src={darkMode ? map.imgSrcDark : map.imgSrcLight}
            alt={map.alt}
            className={`h-full max-h-full w-full object-cover object-center transition-all ${hoverMapClassnames}`}
            decoding="async"
          />
        </picture>
      </a>
    </div>
  );
}
