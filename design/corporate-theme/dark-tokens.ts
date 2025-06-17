import { DeepPartial } from '@bitdesign/sparks.sparks-theme';
import { CorporateThemeSchema } from "./corporate-tokens.js";

/**
 * Override tokens for the dark theme.
 * Overrides the default light theme tokens with a space-like dark theme.
 */
export const darkThemeSchema: DeepPartial<CorporateThemeSchema> = {
  colors: {
    primary: {
      default: '#3B7DE9', // Brighter blue for dark mode visibility
      hover: '#5491F5', // Lighter blue for hover
      active: '#2D63BA', // Slightly darker blue for active
    },
    secondary: {
      default: '#FF7F5C', // Brighter Mars orange for dark mode
      hover: '#FF9B7D', // Lighter orange for hover
      active: '#E45A36', // Darker orange for active
    },
    tertiary: {
      default: '#1CD6C7', // Brighter teal for dark mode
      hover: '#30E8D9', // Lighter teal for hover
      active: '#16B5A8', // Darker teal for active
    },
    surface: {
      background: '#0A1220', // Deep space dark background
      primary: '#131F30', // Slightly lighter surface for content
      secondary: '#1C2B3F', // Medium blue-tinted surface
      tertiary: '#253650', // Lighter blue-tinted surface for contrast
    },
    text: {
      primary: '#F0F4FA', // Nearly white for main text
      secondary: '#AEC0D6', // Light blue-gray for secondary text
      tertiary: '#8095B7', // Deeper blue-gray for tertiary text
      inverse: '#0A1E3C', // Dark text on light backgrounds
    },
    status: {
      positive: { default: '#1ECC8E', subtle: '#0A2F20' }, // Brighter green with dark subtle
      negative: { default: '#FF5252', subtle: '#301111' }, // Brighter red with dark subtle
      warning: { default: '#FFB74D', subtle: '#302111' }, // Brighter orange with dark subtle
      info: { default: '#42A5F5', subtle: '#112130' }, // Brighter blue with dark subtle
    },
    overlay: 'rgba(6, 13, 23, 0.8)', // Darker space-like overlay
  },
  borders: {
    default: {
      color: '#2D3B4D', // Darker blue-gray border for dark mode
    },
    focus: {
      color: '#3B7DE9', // Brighter blue for focus in dark mode
    },
  },
  effects: {
    shadows: {
      xs: '0px 1px 2px rgba(0, 0, 0, 0.3)',
      small: '0px 2px 4px rgba(0, 0, 0, 0.4)',
      medium: '0px 4px 12px rgba(0, 0, 0, 0.5)',
      large: '0px 8px 24px rgba(0, 0, 0, 0.6)',
      xLarge: '0px 16px 36px rgba(0, 0, 0, 0.7)',
      innerGlow: 'inset 0px 0px 20px rgba(59, 125, 233, 0.15)', // Subtle inner blue glow
    },
    gradients: {
      primary: 'linear-gradient(135deg, #3B7DE9, #42A5F5)', // Brighter blue gradient
      secondary: 'linear-gradient(135deg, #FF7F5C, #FFAB91)', // Brighter orange gradient
      spaceEffect: 'linear-gradient(to bottom, #0A1220, #1C2B3F)', // Dark space effect
      futuristic: 'linear-gradient(90deg, #1CD6C7, #3B7DE9)', // Brighter teal to blue gradient
      subtleBackground: 'linear-gradient(180deg, rgba(19, 31, 48, 0.5) 0%, rgba(37, 54, 80, 0.5) 100%)',
    },
  },
  spaceElements: {
    constellation: {
      color: '#FFFFFF',
      density: 'high',
      size: 'medium',
    },
    orbit: {
      pathColor: 'rgba(59, 125, 233, 0.3)',
      objectColor: '#3B7DE9',
    },
    mars: {
      surfaceColor: '#E45A36',
      atmosphereColor: 'rgba(255, 127, 92, 0.3)',
      highlightColor: '#FF9B7D',
    },
  },
};