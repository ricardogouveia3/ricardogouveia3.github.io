import { FC } from 'react';
import { flags } from '@assets/images.ts';
import { HeaderProps } from '../../types/Header.types.ts';
import { Button } from 'barro-ui';

const Header: FC<HeaderProps> = ({ language, handleLanguageToggle }) => {
  return (
    <header className="flex justify-center gap-3">
      <div className="flex flex-row gap-2">
        <Button
          type="toggle"
          onClick={handleLanguageToggle}
          icon={{
            src: language === 'pt-br' ? flags.gb_emoji : flags.br_emoji,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
