import { render, screen } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import Header from '../Header';

// Mock das dependências
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
    },
  }),
}));

vi.mock('@context/ThemeContext', () => ({
  useTheme: () => ({
    darkMode: true,
    toggleDarkMode: vi.fn(),
  }),
}));

// Mock do hook useTheme personalizado
vi.mock('@hooks/useTheme.ts', () => ({
  useTheme: () => ({
    darkMode: true,
    toggleDarkMode: vi.fn(),
  }),
}));

// Mock do barro-ui se necessário, ou confiar no JSDOM
// Se o Button usa SVG não suportado, pode precisar de mock, mas JSDOM lida bem com render básico
// O Header usa imagens (flags), que são imports. Vite lida com isso em testes?
// Precisamos garantir que assets importados sejam strings.
// Vitest deve lidar com assets se configurado, mas vamos ver.

// Mock images
vi.mock('@assets/flags', () => ({
  flags: {
    gb_emoji: 'gb-flag-url',
    br_emoji: 'br-flag-url',
  },
}));

describe('Header Component', () => {
  it('should render language toggle', () => {
    const handleLanguageToggle = vi.fn();
    render(<Header language="pt-br" handleLanguageToggle={handleLanguageToggle} />);

    // Header tem botões. Como não têm text role, podemos procurar por role button
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1); // Apenas Toggle de linguagem (Toggle de tema oculto)
  });
});
