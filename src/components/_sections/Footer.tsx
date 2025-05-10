import { GridClassNames } from "@constants/layout.ts";
import Card from "../Card/Card.tsx";
import { currentYear } from "@utils/date.ts";
import {useTranslation} from "react-i18next";
import {flags} from "@assets/images.ts";
import Icon from "@components/Icon.tsx";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Card classNames={`${GridClassNames.footer} rounded-lg text-sm default-text-color text-center`}>
      <div className="flex justify-center gap-4 mb-3 items-center">
        <a href="/">
          <Icon
            name="rcrd"
            className="max-w-10 max-h-10"
          />
        </a>
        <p>•</p>
        <img
          src={flags.br_pe}
          alt="Bandeira de Pernambuco"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border max-h-7`}
        />
        <img
          src={flags.br_pa}
          alt="Bandeira do Pará"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border max-h-7`}
        />
        <img
          src={flags.br_sp}
          alt="Bandeira de São Paulo"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border max-h-7`}
        />
        <p>•</p>
        <img
          src={flags.brazil}
          alt="Bandeira do Brasil"
          width="40"
          height="27"
          loading="lazy"
          decoding="async"
          className={`default-border max-h-7`}
        />
      </div>

      <p className="text-center font-semibold">
        {currentYear} - Ricardo Gouveia - <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR" target="_blank" className="underline">CC BY-SA 4.0</a><span className="text-xs smooth-text-color font-normal block mt-1">{t('footer.copy')}</span>
      </p>
      <p className="italic text-xs smooth-text-color mt-3">
        <a className="underline" href="https://github.com/ricardogouveia3/ricardogouveia3.github.io" target="_blank">{t('footer.source')}</a> - {t('footer.madeWith')} - {t('footer.inspired')}&nbsp;<a className="underline" href="https://www.joshuabrigati.com/" target="_blank">Joshua Brigati</a>
      </p>
    </Card>
  );
}


