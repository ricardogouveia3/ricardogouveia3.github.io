import { useState, useEffect } from 'react';
import { getWeather } from '@apis/weather.ts';
import { WeatherInfoType } from '../../types/WeatherInfo.type.ts';
import { getCurrentTime } from '@utils/time.ts';
import LocationMap from '../Location/LocationMap.tsx';
import LocationInfo from '../Location/LocationInfo.tsx';
import { COORDINATES, MAP_SP_BR, MOCK_WEATHER_DATA, TIMEZONES } from '@constants/location.ts';
import { GridClassNames } from '@constants/layout.ts';
import { Card } from 'barro-ui';

export default function LocationSection() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType | null>(null);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [loading, setLoading] = useState(true);
  const map = { ...MAP_SP_BR };
  const coordinates = COORDINATES.SAO_PAULO;
  const timezones = TIMEZONES.SAO_PAULO;

  const handleInteraction = () => {
    setIsHoveredOrFocused(true);
  };

  const handleLeaveOrBlur = () => {
    setIsHoveredOrFocused(false);
  };

  useEffect(() => {
    async function fetchWeather() {
      try {
        const weatherData = await getWeather(coordinates.LATITUDE, coordinates.LONGITUDE);
        if (weatherData) {
          setWeatherInfo(weatherData);
        } else if (import.meta.env.MODE !== 'production') {
          setWeatherInfo(MOCK_WEATHER_DATA);
        } else {
          setWeatherInfo(null);
        }
      } catch (error) {
        console.error('Error fetching weather data: ', error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather().then();
  }, [coordinates]);

  return (
    <Card
      classNames={`${GridClassNames.location}`}
      contentClassnames="w-full h-full"
      containerClassnames="flex flex-row"
      loading={loading}
      animatedBorder={false}
    >
      <div
        className="flex h-full flex-col md:flex-row"
        onMouseOver={handleInteraction}
        onFocus={handleInteraction}
        onMouseLeave={handleLeaveOrBlur}
        onBlur={handleLeaveOrBlur}
      >
        <LocationMap map={map} info={!!weatherInfo} hover={isHoveredOrFocused} />
        {weatherInfo && (
          <LocationInfo
            loading={loading}
            weatherInfo={weatherInfo}
            currentTime={getCurrentTime(timezones)}
          />
        )}
      </div>
    </Card>
  );
}
