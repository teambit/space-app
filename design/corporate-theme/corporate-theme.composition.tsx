import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useTheme } from './corporate-theme-provider.js';
import { CorporateTheme } from './corporate-theme.js';
import { TokenViewer } from '@bitdesign/sparks.sparks-theme';
import { useThemeController } from './theme-controller.js';

// Private component to display tokens and a theme toggle button
function ViewTokensAndToggle() {
  const theme = useTheme();
  const { themeMode, toggleTheme } = useThemeController();

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    fontFamily: theme.typography.fontFamily || 'sans-serif',
    fontSize: theme.typography.sizes.body.default || '16px',
    backgroundColor: theme.colors.primary.default,
    color: theme.colors.text.inverse,
    border: 'none',
    borderRadius: theme.borders.radius.medium || '8px',
    cursor: 'pointer',
    boxShadow: theme.effects.shadows.medium || '0px 4px 12px rgba(0,0,0,0.15)',
    zIndex: theme.interactions.zIndex.floating || 50,
  };

  const containerStyle: React.CSSProperties = {
    padding: theme.spacing.large || '32px',
    color: theme.colors.text.primary,
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.heading.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.medium,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.body.default,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.lineHeight.base,
    marginBottom: theme.spacing.large,
  };


  return (
    <div style={containerStyle}>
      <button onClick={toggleTheme} style={buttonStyle}>
        Toggle to {themeMode === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <h1 style={headingStyle}>Corporate Inc. Theme Tokens</h1>
      <p style={textStyle}>
        Explore the foundational design tokens for Corporate Inc.'s space technology endeavors.
        This theme reflects our vision of a modern, high-tech future on Mars.
        Current mode: {themeMode}.
      </p>
      <TokenViewer theme={theme} />
    </div>
  );
}

export const LightTheme = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme='light'>
        <ViewTokensAndToggle />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const DarkTheme = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme='dark'>
        <ViewTokensAndToggle />
      </CorporateTheme>
    </MemoryRouter>
  );
};

function SampleContent() {
  const theme = useTheme();
  const { toggleTheme, themeMode } = useThemeController();

  const sectionStyle: React.CSSProperties = {
    padding: theme.spacing.xl,
    borderBottom: `1px solid ${theme.borders.default.color}`,
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.heading.h1,
    color: theme.colors.primary.default,
    marginBottom: theme.spacing.medium,
    letterSpacing: theme.typography.letterSpacing.tight,
  };

  const subHeadingStyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.heading.h3,
    color: theme.colors.secondary.default,
    marginBottom: theme.spacing.small,
  };

  const paragraphStyle: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.body.large,
    color: theme.colors.text.primary,
    lineHeight: theme.typography.lineHeight.base,
    maxWidth: theme.layout.narrowWidth,
  };

  const buttonStyle: React.CSSProperties = {
    padding: `${theme.spacing.small} ${theme.spacing.default}`,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.body.default,
    fontWeight: theme.typography.fontWeight.semiBold,
    backgroundColor: theme.colors.primary.default,
    color: theme.colors.text.inverse,
    border: 'none',
    borderRadius: theme.borders.radius.pill,
    cursor: 'pointer',
    boxShadow: theme.effects.shadows.small,
    transition: `background-color ${theme.interactions.transitions.duration.fast} ${theme.interactions.transitions.easing.easeInOut}`,
    marginTop: theme.spacing.medium,
  };

  const toggleButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: theme.colors.tertiary.default,
    position: 'fixed',
    top: theme.spacing.medium,
    right: theme.spacing.medium,
    zIndex: theme.interactions.zIndex.floating,
  };

  return (
    <div style={{ backgroundColor: theme.colors.surface.background, minHeight: '100vh' }}>
      <button onClick={toggleTheme} style={toggleButtonStyle}>
        Toggle Theme ({themeMode})
      </button>
      <header style={{ ...sectionStyle, background: theme.effects.gradients.spaceEffect }}>
        <h1 style={{ ...headingStyle, color: theme.colors.text.inverse }}>Pioneering the Future on Mars</h1>
        <p style={{ ...paragraphStyle, color: theme.colors.text.inverse, opacity: 0.8 }}>
          Corporate Inc. is dedicated to advancing space technology to make Mars a habitable reality.
          Our mission is to build the infrastructure for a thriving Martian colony.
        </p>
      </header>

      <section style={sectionStyle}>
        <h2 style={subHeadingStyle}>Our Vision: A New Frontier</h2>
        <p style={paragraphStyle}>
          We believe in a future where humanity is a multi-planetary species.
          Our high-tech solutions range from advanced propulsion systems to sustainable life support.
          The {themeMode === 'light' ? 'bright clarity of our light theme' : 'vast expanse of our dark theme'} reflects our ambitious goals.
        </p>
        <button style={buttonStyle}>
          Learn More About Our Mission
        </button>
      </section>

      <section style={{...sectionStyle, background: theme.colors.surface.secondary }}>
        <h2 style={subHeadingStyle}>Technological Marvels</h2>
        <p style={paragraphStyle}>
          Discover the cutting-edge innovations powering our journey to the Red Planet.
          From terraforming technologies to autonomous robotic explorers, we are pushing the boundaries of what's possible.
          Our design system, powered by these tokens, aims to inspire and inform.
        </p>
         <button style={{...buttonStyle, backgroundColor: theme.colors.secondary.default}}>
          Explore Technologies
        </button>
      </section>
    </div>
  );
}

export const ThemeInAction = () => {
  return (
    <MemoryRouter>
      <CorporateTheme initialTheme='light'>
        <SampleContent />
      </CorporateTheme>
    </MemoryRouter>
  );
};
