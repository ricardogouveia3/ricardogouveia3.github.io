import { FC } from 'react';
import { flags } from '@assets/images.ts';
import { HeaderProps } from '../../types/Header.types.ts';
import { Button } from 'barro-ui';

const Header: FC<HeaderProps> = ({ language, handleLanguageToggle }) => {
  const iconColor = '#FFFFFF';

  return (
    <header className="flex justify-center gap-3">
      <div className="cursor-custom-pointer flex flex-row gap-2">
        <Button
          type="toggle"
          onClick={handleLanguageToggle}
          style={{ color: iconColor }}
          icon={{
            src: language === 'pt-br' ? flags.gb_emoji : flags.br_emoji,
          }}
        />
        {/* <Button
          type="toggle"
          onClick={toggleDarkMode}
          style={{ color: iconColor }}
          icon={{
            name: darkMode ? 'SunIcon' : 'MoonIcon',
          }}
        /> */}
      </div>
    </header>
  );
};

export default Header;
