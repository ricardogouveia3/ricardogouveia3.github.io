import { GridClassNames } from '@constants/layout.ts';
import { currentYear } from '@utils/date.ts';
import { useTranslation } from 'react-i18next';
import { flags, logos } from '@assets/images.ts';
import { Card, Icon } from 'barro-ui';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Card
      className={`${GridClassNames.footer} default-text-color rounded-lg text-center text-sm`}
      animatedBorder={false}
    >
      <div className="mb-3 flex items-center justify-center gap-4">
        <a href="/">
          <Icon icon={logos.rcrd} className="max-h-10 max-w-10" />
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
        {currentYear} - Ricardo Gouveia -{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"
          target="_blank"
          className="underline"
        >
          CC BY-SA 4.0
        </a>
        <span className="smooth-text-color mt-1 block text-xs font-normal">{t('footer.copy')}</span>
      </p>
      <p className="smooth-text-color mt-3 text-xs italic">
        <a
          className="underline"
          href="https://github.com/ricardogouveia3/ricardogouveia3.github.io"
          target="_blank"
        >
          {t('footer.source')}
        </a>{' '}
        - {t('footer.madeWith')} - {t('footer.inspired')}&nbsp;
        <a className="underline" href="https://www.joshuabrigati.com/" target="_blank">
          Joshua Brigati
        </a>
      </p>
    </Card>
  );
}
