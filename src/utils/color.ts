export function getContrastColor(hexColor: string) {
  const hex = hexColor.replace('#', '');
  const isShort = hex.length === 3;

  const r = parseInt(isShort ? hex[0] + hex[0] : hex.substring(0, 2), 16);
  const g = parseInt(isShort ? hex[1] + hex[1] : hex.substring(2, 4), 16);
  const b = parseInt(isShort ? hex[2] + hex[2] : hex.substring(4, 6), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#1A202C' : '#FFFFFF';
}
