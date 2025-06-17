import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme, useThemeController } from '@corporate/design.corporate-theme';
import { ThemeToggler } from './theme-toggler.js';

const DemoContent = ({ title }: { title: string }) => {
  const { themeMode } = useThemeController();
  return (
    <div
      style={{
        fontFamily: 'var(--typography-font-family)',
        backgroundColor: 'var(--colors-surface-background)',
        color: 'var(--colors-text-primary)',
        padding: 'var(--spacing-large)',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-medium)',
        transition: 'background-color var(--interactions-transitions-duration-medium) var(--interactions-transitions-easing-ease-in-out), color var(--interactions-transitions-duration-medium) var(--interactions-transitions-easing-ease-in-out)',
        borderRadius: 'var(--borders-radius-large)',
        border: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)'
      }}
    >
      <h2 style={{ fontSize: 'var(--typography-sizes-heading-h3)', margin: 0 }}>{title}</h2>
      <p style={{ fontSize: 'var(--typography-sizes-body-default)', margin: 0 }}>
        Current Theme: {themeMode}
      </p>
      <p style={{textAlign: 'center', maxWidth: '400px', fontSize: 'var(--typography-sizes-body-small)', color: 'var(--colors-text-secondary)'}}>
        Observe how Corporate Inc.'s interface adapts, showcasing our commitment to clarity and focus, whether navigating terrestrial operations or pioneering Martian frontiers.
      </p>
      <ThemeToggler />
    </div>
  );
};

const DemoContentWithCustomToggler = ({ title, togglerProps }: { title: string, togglerProps: any }) => {
  const { themeMode } = useThemeController();
  return (
    <div
      style={{
        fontFamily: 'var(--typography-font-family)',
        backgroundColor: 'var(--colors-surface-background)',
        color: 'var(--colors-text-primary)',
        padding: 'var(--spacing-large)',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-medium)',
        transition: 'background-color var(--interactions-transitions-duration-medium) var(--interactions-transitions-easing-ease-in-out), color var(--interactions-transitions-duration-medium) var(--interactions-transitions-easing-ease-in-out)',
        borderRadius: 'var(--borders-radius-large)',
        border: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)'
      }}
    >
      <h2 style={{ fontSize: 'var(--typography-sizes-heading-h3)', margin: 0 }}>{title}</h2>
      <p style={{ fontSize: 'var(--typography-sizes-body-default)', margin: 0 }}>
        Current Theme: {themeMode}
      </p>
      <p style={{textAlign: 'center', maxWidth: '400px', fontSize: 'var(--typography-sizes-body-small)', color: 'var(--colors-text-secondary)'}}>
        This toggler demonstrates custom properties for a tailored user experience on our space technology platforms.
      </p>
      <ThemeToggler {...togglerProps} />
    </div>
  );
};


export const BasicThemeToggler = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme="light">
        <DemoContent title="Default Theme Toggler" />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const CompactThemeTogglerInDarkMode = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme="dark">
        <DemoContentWithCustomToggler 
          title="Compact Toggler (Dark Mode Start)"
          togglerProps={{ variant: 'compact' }}
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const PrimaryAndRoundedThemeToggler = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme="light">
        <DemoContentWithCustomToggler
          title="Primary & Rounded Toggler"
          togglerProps={{ colorScheme: 'primary', shape: 'rounded' }}
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};

const CustomSunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CustomMoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.27 14.73A9.5 9.5 0 1114.73 4.73 7.5 7.5 0 0019.27 14.73z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export const CustomLabelsAndIconsToggler = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme="dark">
        <DemoContentWithCustomToggler
          title="Custom Labels & Icons Toggler"
          togglerProps={{
            lightIcon: <CustomSunIcon />,
            darkIcon: <CustomMoonIcon />,
            lightLabel: 'Day Mode',
            darkLabel: 'Night Mode',
            onToggle: () => console.log('Theme toggled via custom toggler!'),
          }}
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};