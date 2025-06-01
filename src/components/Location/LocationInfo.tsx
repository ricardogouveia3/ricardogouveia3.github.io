import { useTranslation } from 'react-i18next';
import { LocationInfoProps } from '../../types/Location.type.ts';

export default function LocationInfo({
  loading = false,
  weatherInfo,
  currentTime,
}: Readonly<LocationInfoProps>) {
  const { t } = useTranslation();
  const weatherKey = `weatherNames.${weatherInfo?.weather ?? 'Unknown'}`;

  return (
    <div>
      {!loading && weatherInfo && (
        <div className="smooth-text-color flex h-full flex-col p-4 font-medium tracking-tight lg:p-6">
          <span className="text-sm">{t('location.based')}</span>
          <div className="flex h-full justify-between lg:flex-col">
            <div>
              <p className="default-text-color text-lg font-bold">{t('location.city')}</p>
              <span className="text-sm">
                {weatherInfo.coordinates.latitude}, {weatherInfo.coordinates.longitude}
              </span>
            </div>

            <div>
              <div className="flex items-center">
                <p className="default-text-color text-lg font-bold">{currentTime}</p>
                &nbsp;
                <span className="text-sm">GMT-3</span>
              </div>

              <div className="flex items-center justify-start">
                <p className="default-text-color text-lg font-bold">{weatherInfo.temperature}°C</p>
                &nbsp;
                <span className="text-sm">
                  {t(weatherKey, { defaultValue: t('weatherNames.Unknown') })}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
