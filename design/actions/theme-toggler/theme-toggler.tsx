import React, { ReactNode } from 'react';
import { useThemeController } from '@corporate/design.corporate-theme';
import { MoonIcon } from './moon-icon.js';
import { SunIcon } from './sun-icon.js';
import styles from './theme-toggler.module.scss';

export type ThemeTogglerProps = {
  /**
   * Optional class name for styling the toggler container
   */
  className?: string;

  /**
   * Optional style attributes
   */
  style?: React.CSSProperties;

  /**
   * Display variant of the theme toggler
   * - 'default': Shows icon and text
   * - 'compact': Shows only icon
   */
  variant?: 'default' | 'compact';

  /**
   * Shape of the toggler
   * - 'pill': Fully rounded edges (default)
   * - 'rounded': Slightly rounded corners
   */
  shape?: 'pill' | 'rounded';

  /**
   * Color scheme for the toggler
   * - 'default': Uses surface colors
   * - 'primary': Uses primary brand colors
   */
  colorScheme?: 'default' | 'primary';

  /**
   * Custom light mode icon
   */
  lightIcon?: ReactNode;

  /**
   * Custom dark mode icon
   */
  darkIcon?: ReactNode;

  /**
   * Custom light mode label text
   */
  lightLabel?: string;

  /**
   * Custom dark mode label text
   */
  darkLabel?: string;
  
  /**
   * Function to execute after theme toggle
   */
  onToggle?: () => void;
};

export function ThemeToggler({ 
  className,
  style,
  variant = 'default',
  shape = 'pill',
  colorScheme = 'default',
  lightIcon,
  darkIcon,
  lightLabel = 'Light',
  darkLabel = 'Dark',
  onToggle
}: ThemeTogglerProps) {
  const { themeMode, toggleTheme } = useThemeController();
  
  const handleToggle = () => {
    toggleTheme();
    if (onToggle) {
      onToggle();
    }
  };

  const isDarkMode = themeMode === 'dark';
  
  const combinedClasses = [
    styles.toggler,
    styles[variant],
    styles[shape],
    colorScheme === 'primary' ? styles.primary : undefined,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={combinedClasses}
      style={style}
    >
      <button 
        className={styles.button}
        onClick={handleToggle}
        type="button"
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <span className={styles.icon}>
          {isDarkMode 
            ? (darkIcon || <MoonIcon />)
            : (lightIcon || <SunIcon />)
          }
        </span>
        <span className={styles.label}>
          {isDarkMode ? darkLabel : lightLabel}
        </span>
      </button>
    </div>
  );
}