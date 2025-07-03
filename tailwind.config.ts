// @ts-expect-error tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/barro-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        quartz: {
          50: '#070707',
          100: '#0f0f0f',
          150: '#161616',
          200: '#1e1e1e',
          250: '#252525',
          300: '#2c2c2c',
          350: '#343434',
          400: '#3b3b3b',
          450: '#434343',
          500: '#4a4a4a',
          550: '#5c5c5c',
          600: '#6e6e6e',
          650: '#808080',
          700: '#929292',
          750: '#a5a5a5',
          800: '#b7b7b7',
          850: '#c9c9c9',
          900: '#dbdbdb',
          950: '#ededed',
        },
      },
      backgroundImage: {
        'noise-light': "url('./assets/noise-light.webp')",
        'noise-dark': "url('./assets/noise-dark.webp')",
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
