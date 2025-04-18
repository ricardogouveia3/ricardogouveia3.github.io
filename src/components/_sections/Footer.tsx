import { GridClassNames } from "@constants/layout.ts";
import Card from "../Card/Card.tsx";
import { currentYear } from "@utils/date.ts";
import {useTranslation} from "react-i18next";
import { images } from "@assets/images.ts";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Card classNames={`${GridClassNames.footer} rounded-lg text-sm default-text-color text-center`}>
      <div className="flex justify-center gap-4 mb-3">
        <img
          src={images.flag_pe}
          alt="Bandeira de Pernambuco"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border`}
        />
        <img
          src={images.flag_pa}
          alt="Bandeira do Pará"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border`}
        />
        <img
          src={images.flag_sp}
          alt="Bandeira de São Paulo"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border`}
        />
        <img
          src={images.flag_br2}
          alt="Bandeira do Brasil"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border`}
        />
      </div>

      <p className="text-center font-semibold">
        {currentYear} - Ricardo Gouveia - <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR" target="_blank" className="underline">CC BY-SA 4.0</a><span className="text-xs smooth-text-color font-normal block mt-1">{t('footer.copy')}</span>
      </p>
      <p className="italic text-xs smooth-text-color mt-3">
        <a className="underline" href="https://github.com/ricardogouveia3/rcrd-beta" target="_blank">{t('footer.source')}</a> - {t('footer.madeWith')} - {t('footer.inspired')}&nbsp;<a className="underline" href="https://www.joshuabrigati.com/" target="_blank">Joshua Brigati</a>
      </p>
    </Card>
  );
}


