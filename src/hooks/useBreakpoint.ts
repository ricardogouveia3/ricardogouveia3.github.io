import { useMediaQuery } from 'react-responsive';

const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export function useBreakpoint<K extends keyof typeof breakpoints>(breakpointKey: K) {
  const breakpointValue = breakpoints[breakpointKey];

  const isBelow = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  });

  const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.slice(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(breakpointValue.replace(/\D/g, '')),
    [`isAbove${capitalizedKey}`]: !isBelow,
    [`isBelow${capitalizedKey}`]: isBelow,
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
}
