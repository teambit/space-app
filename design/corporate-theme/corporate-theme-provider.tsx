import { createTheme } from '@bitdesign/sparks.sparks-theme';
import { CorporateThemeSchema, corporateTokens } from './corporate-tokens.js';

/**
 * Creating and declaring the Corporate theme.
 * Define the theme schema as a type variable for proper type completions.
 */
export const CorporateThemeProvider = createTheme<CorporateThemeSchema>({
  tokens: corporateTokens,
});

/**
 * A React hook for contextual access to design tokens
 * from components.
 */
export const { useTheme } = CorporateThemeProvider;
 