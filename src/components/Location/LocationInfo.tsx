import { useTranslation } from "react-i18next";
import {LocationInfoProps} from "../../types/Location.type.ts";

export default function LocationInfo({ loading = false, weatherInfo, currentTime }: Readonly<LocationInfoProps>) {
  const { t } = useTranslation();
  const weatherKey = `weatherNames.${weatherInfo?.weather ?? "Unknown"}`;

  return (
    <div>
      {(!loading && weatherInfo) && (
        <div className="p-4 lg:p-6 h-full flex flex-col font-medium smooth-text-color tracking-tight">
          <span className="text-sm">
            {t('location.based')}
          </span>
          <div className="h-full flex lg:flex-col justify-between">
            <div>
              <p className="default-text-color font-bold text-lg">{t('location.city')}</p>
              <span className="text-sm">{weatherInfo.coordinates.latitude}, {weatherInfo.coordinates.longitude}</span>
            </div>

            <div>
              <div className="flex items-center">
                <p className="default-text-color font-bold text-lg">{currentTime}</p>
                &nbsp;
                <span className="text-sm">GMT-3</span>
              </div>

              <div className="flex items-center justify-start">
                <p className="default-text-color font-bold text-lg">{weatherInfo.temperature}°C</p>
                &nbsp;
                <span className="text-sm">
  {t(weatherKey, { defaultValue: t("weatherNames.Unknown") })}
</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
