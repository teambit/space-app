import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { createIcon } from './icon.js';
// import type { IconProps } from './icon.js'; // Not strictly needed for these compositions

// Define SVG content components
const StarSvgContent = () => (
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
);
StarSvgContent.displayName = 'StarSymbol';

const MoonSvgContent = () => (
  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.64-.11 2.42-.32-.33-.39-.6-.83-.79-1.32-.29-.73-.44-1.5-.44-2.36 0-2.48 2.02-4.5 4.5-4.5.86 0 1.63.15 2.36.44.49.19.93.46 1.32.79.21-.78.32-1.59.32-2.42 0-4.97-4.03-9-9-9z" />
);
MoonSvgContent.displayName = 'MoonSymbol';

const PlanetOrbitSvgContent = () => (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2a10 10 0 0 0-9.16 14.16A9.94 9.94 0 0 0 12 22a10 10 0 0 0 9.16-7.84A9.94 9.94 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </>
);
PlanetOrbitSvgContent.displayName = 'PlanetOrbitSymbol';

// Create Icon Components
const StarIcon = createIcon(StarSvgContent);
const MoonIcon = createIcon(MoonSvgContent);
const PlanetOrbitIcon = createIcon(PlanetOrbitSvgContent);

const CompositionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: 'var(--spacing-large)', padding: 'var(--spacing-default)', border: '1px solid var(--borders-default-color)', borderRadius: 'var(--borders-radius-medium)' }}>
    <h3 style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', marginTop: 0, marginBottom: 'var(--spacing-medium)' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', gap: 'var(--spacing-medium)', alignItems: 'center', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

export const DefaultIcons = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)' }}>
        <CompositionWrapper title="Default Icons (24px, currentColor)">
          <StarIcon />
          <MoonIcon />
          <PlanetOrbitIcon />
        </CompositionWrapper>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const SizedAndColoredIcons = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)' }}>
        <CompositionWrapper title="Sized and Colored Icons">
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>Star (36px, Primary)</p>
            <StarIcon size={36} color="var(--colors-primary-default)" />
          </div>
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>Moon (48px, Secondary)</p>
            <MoonIcon size={48} color="var(--colors-secondary-default)" />
          </div>
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>Planet (64px, Tertiary)</p>
            <PlanetOrbitIcon size={64} color="var(--colors-tertiary-default)" />
          </div>
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>Star (Default size, Custom color #8A2BE2)</p>
            <StarIcon color="#8A2BE2" />
          </div>
        </CompositionWrapper>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const InteractiveAndAccessibleIcon = () => {
  const [clickCount, setClickCount] = React.useState(0);
  const handleClick = () => {
    setClickCount(prev => prev + 1);
    // In a real app, you might navigate, open a modal, etc.
    console.log(`Planet Orbit Icon clicked! Current count: ${clickCount + 1}`);
  };

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)' }}>
          <CompositionWrapper title="Interactive and Accessible Icon">
            <PlanetOrbitIcon
              size={48}
              onClick={handleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
              aria-label="Launch space mission"
              style={{ cursor: 'var(--interactions-cursor-pointer)', color: 'var(--colors-status-info-default)' }}
              title="Launch space mission (Click me!)"
            />
            <p style={{ color: 'var(--colors-text-primary)' }}>
              Click count: {clickCount}. (Check console for logs)
            </p>
          </CompositionWrapper>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};