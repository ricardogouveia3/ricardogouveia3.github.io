/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_OPENWEATHER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
