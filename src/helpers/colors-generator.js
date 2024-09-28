import { colors } from './colors.js'; // Adjust the path as needed

export function generateSCSSVariables(colors) {
  return Object.entries(colors)
    .map(([key, value]) => `$color-${key}: ${value};`)
    .join('\n');
}

export function generateCSSVariables(colors) {
  return Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join('\n');
}

export function generateTailwindColors(colors) {
  return Object.fromEntries(Object.entries(colors).map(([key, value]) => [`color-${key}`, value]));
}

export const generatedSCSS = generateSCSSVariables(colors);
export const generatedCSS = `:root {\n${generateCSSVariables(colors)}\n}`;
export const generatedTailwind = generateTailwindColors(colors);
