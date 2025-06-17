import { ReactNode, useCallback, useState } from 'react';
import classNames from 'classnames';
import { CorporateThemeProvider } from './corporate-theme-provider.js';
import { CorporateThemeSchema } from './corporate-tokens.js';
import { ThemeContext, ThemeContextValue, ThemeMode } from './theme-controller.js';
import { themeOptions } from './theme-options.js';
import styles from './corporate-theme.module.scss';

export type CorporateThemeProps = {
  /**
   * A root ReactNode for the component tree 
   * applied with the theme.
   */
  children?: ReactNode;

  /**
   * Inject a class name to override the theme.
   * This allows people to affect your theme.
   */
  className?: string;

  /**
   * Override tokens in the schema
   */
  overrides?: Partial<CorporateThemeSchema>;

  /**
   * Preset of the theme.
   */
  initialTheme?: ThemeMode;

  /**
   * Style tags to include.
   */
  style?: React.CSSProperties;
};

/**
 * A theme for the Corporate organization.
 * It provides tokens, fonts and general styling for all components,
 * with a modern, high-tech aesthetic for a space technology company.
 */
export function CorporateTheme({ 
  children, 
  initialTheme = 'light', 
  className, 
  style, 
  ...rest 
}: CorporateThemeProps) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(initialTheme);
  const themePreset = themeOptions[themeMode];

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeModeState(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }, []);

  const themeContextValue: ThemeContextValue = {
    themeMode,
    toggleTheme,
    setThemeMode,
  };
  
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <CorporateThemeProvider.ThemeProvider
        className={classNames(styles.corporateTheme, className)}
        overrides={themePreset}
        style={style}
        {...rest}
      >
        {children}
      </CorporateThemeProvider.ThemeProvider>
    </ThemeContext.Provider>
  );
}