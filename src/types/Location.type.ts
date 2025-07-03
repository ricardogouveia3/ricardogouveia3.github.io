import { WeatherInfoType } from './WeatherInfo.type.ts';

export type LocationMapProps = {
  map: {
    imgSrcDark: string;
    imgSrcLight: string;
    alt: string;
    link: string;
  };
  info: boolean;
  hover?: boolean;
};

export type LocationInfoProps = {
  loading: boolean;
  weatherInfo: WeatherInfoType | null;
  currentTime: string;
};
