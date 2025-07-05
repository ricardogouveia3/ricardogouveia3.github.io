import { images } from '@assets/images.ts';
import { WeatherInfoType } from '../types/WeatherInfo.type.ts';

export const MAP_SP_BR = {
  imgSrcLight: images.map_spbr_light,
  imgSrcDark: images.map_spbr_dark,
  alt: 'São Paulo Downtown Map',
  link: 'https://www.openstreetmap.org/#map=13/-23.55085/-46.63130',
};

export const TIMEZONES = {
  SAO_PAULO: 'America/Sao_Paulo',
};

export const COORDINATES = {
  SAO_PAULO: {
    LATITUDE: -23.5506507,
    LONGITUDE: -46.6333824,
  },
};

export const MOCK_WEATHER_DATA: WeatherInfoType = {
  coordinates: {
    latitude: COORDINATES.SAO_PAULO.LATITUDE,
    longitude: COORDINATES.SAO_PAULO.LONGITUDE,
  },
  location: 'São Paulo, Brazil',
  temperature: 20,
  weather: 'Clear',
};
