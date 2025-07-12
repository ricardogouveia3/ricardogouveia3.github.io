import { useCallback, useEffect, useState } from 'react';
import { getWeather } from '@apis/weather.ts';
import type { WeatherInfoType } from '../../types/WeatherInfo.type.ts';
import { getCurrentTime } from '@utils/time.ts';
import LocationMap from '../Location/LocationMap.tsx';
import LocationInfo from '../Location/LocationInfo.tsx';
import { COORDINATES, MAP_SP_BR, MOCK_WEATHER_DATA, TIMEZONES } from '@constants/location.ts';
import { GridClassNames } from '@constants/layout.ts';
import { Card } from 'barro-ui';

export default function LocationSection() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType | null>(null);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isUsingMockedData, setIsUsingMockedData] = useState(false);

  const [loading, setLoading] = useState(true);

  const { LATITUDE, LONGITUDE } = COORDINATES.SAO_PAULO;
  const map = { ...MAP_SP_BR };
  const timezones = TIMEZONES.SAO_PAULO;

  const handleInteraction = useCallback(() => setIsHoveredOrFocused(true), []);
  const handleLeaveOrBlur = useCallback(() => setIsHoveredOrFocused(false), []);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        setLoading(true);

        const weatherData = await getWeather(LATITUDE, LONGITUDE);

        if (!isMounted) return;

        if (weatherData) {
          setWeatherInfo(weatherData);
        } else if (import.meta.env.MODE !== 'production') {
          setWeatherInfo(MOCK_WEATHER_DATA);
          setIsUsingMockedData(true);
        } else {
          setWeatherInfo(null);
        }
      } catch (err) {
        if (!isMounted) return;

        console.error('Error fetching weather data:', err);

        if (import.meta.env.MODE !== 'production') {
          setWeatherInfo(MOCK_WEATHER_DATA);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchWeather().then();

    return () => {
      isMounted = false;
    };
  }, [LATITUDE, LONGITUDE]);

  return (
    <Card
      classNames={GridClassNames.location}
      contentClassnames="w-full h-full"
      containerClassnames="flex flex-row"
      loading={loading}
      animatedBorder={false}
    >
      <div
        className="flex h-full flex-col md:flex-row"
        onMouseEnter={handleInteraction}
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
            mockInfo={isUsingMockedData}
          />
        )}
      </div>
    </Card>
  );
}
