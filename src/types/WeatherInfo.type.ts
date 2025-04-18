export type WeatherInfoType = {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  location: string | null;
  temperature: number | null;
  weather: string | null;
};
