import { WeatherInfoType } from "../types/WeatherInfo.type.ts";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getWeatherApiUrl = (
  latitude: number,
  longitude: number
): string => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
};

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherInfoType | void> {
  try {
    const response = await fetch(getWeatherApiUrl(latitude, longitude));
    const data = await response.json();

    const location = data.name;
    const coordinates = {
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    };
    const temperature = Math.round(data.main.temp);
    const weather = data.weather[0].main;

    return {
      coordinates,
      location,
      temperature,
      weather,
    };
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    return;
  }
}
