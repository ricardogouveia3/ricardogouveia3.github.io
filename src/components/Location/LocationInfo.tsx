import { useTranslation } from 'react-i18next';
import { LocationInfoProps } from '../../types/Location.type.ts';

export default function LocationInfo({
  loading = false,
  weatherInfo,
  currentTime,
  mockInfo = false,
}: Readonly<LocationInfoProps>) {
  const { t } = useTranslation();
  const weatherKey = `weatherNames.${weatherInfo?.weather ?? 'Unknown'}`;

  return (
    <div className={`relative`}>
      {!loading && weatherInfo && (
        <div className="smooth-text-color relative flex h-full min-w-[200px] flex-col p-4 font-medium tracking-tight lg:p-6">
          <span className="text-sm">{t('location.based')}</span>
          <div className="flex h-full justify-between md:flex-col">
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
      {mockInfo && (
        <div className="absolute bottom-0 flex w-full items-center justify-between bg-amber-500 text-center">
          <span className="w-full text-center text-xs font-bold">USING MOCK DATA</span>
        </div>
      )}
    </div>
  );
}
