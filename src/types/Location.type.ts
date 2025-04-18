import {WeatherInfoType} from "./WeatherInfo.type.ts";

export type LocationMapProps = {
  map: {
    imgSrc: string,
    alt: string,
    link: string,
  };
  info: boolean;
  hover?: boolean;
};

export type LocationInfoProps = {
  loading: boolean;
  weatherInfo: WeatherInfoType | null;
  currentTime: string;
};
