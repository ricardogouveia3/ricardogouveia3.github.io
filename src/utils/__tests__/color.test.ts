import { describe, it, expect } from 'vitest';
import { getContrastColor } from '../color';

describe('getContrastColor', () => {
  it('should return black for white background', () => {
    expect(getContrastColor('#ffffff')).toBe('#1A202C');
    expect(getContrastColor('#FFFFFF')).toBe('#1A202C');
  });

  it('should return white for black background', () => {
    expect(getContrastColor('#000000')).toBe('#FFFFFF');
    expect(getContrastColor('#000000')).toBe('#FFFFFF');
  });

  it('should handle short hex codes', () => {
    expect(getContrastColor('#fff')).toBe('#1A202C');
    expect(getContrastColor('#000')).toBe('#FFFFFF');
  });

  // Testes para cores intermediárias podem variar dependendo da implementação
  // Se for YIQ, #7F7F7F deve ser limítrofe
});
