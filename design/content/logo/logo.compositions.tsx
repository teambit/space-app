import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Logo } from './logo.js';
// Given Flex was not in the approved list, I'll create a simple div wrapper with flex styles for layout.

const CompositionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ padding: 'var(--spacing-large, 32px)', borderBottom: '1px solid var(--borders-default-color, #ccc)', marginBottom: 'var(--spacing-large, 32px)' }}>
    <h3 style={{ fontFamily: 'var(--typography-font-family, sans-serif)', color: 'var(--colors-text-primary, #333)', marginBottom: 'var(--spacing-medium, 16px)' }}>{title}</h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-medium, 16px)' }}>
      {children}
    </div>
  </div>
);


export const DefaultLogo = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionWrapper title="Default Logo">
        <Logo />
      </CompositionWrapper>
    </CorporateTheme>
  </MemoryRouter>
);

export const CustomTextAndSizeLogo = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionWrapper title="Custom Name, Slogan, and Size">
        <Logo 
          name="Mars Colonizers Co." 
          slogan="Building New Worlds" 
          size={60} 
          href="/about-us" 
        />
         <Logo 
          name="Stellar Navigation" 
          slogan="Guiding Your Journey Through Space" 
          size={30} 
          href="/services/navigation" 
        />
      </CompositionWrapper>
    </CorporateTheme>
  </MemoryRouter>
);

export const MinimalLogo = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionWrapper title="Minimal Logo (SVG Only)">
        <Logo minimal={true} size={50} href="/minimal-home" />
        <Logo minimal={true} size={80} href="/minimal-large" name="This name is hidden" />
      </CompositionWrapper>
    </CorporateTheme>
  </MemoryRouter>
);

export const CustomSvgLogo = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionWrapper title="Custom SVG Logo">
        <Logo 
          src="https://storage.googleapis.com/static.bit.dev/extensions-icons/sparks.svg" // Placeholder SVG
          name="External Tech Division" 
          slogan="Innovating with Partners" 
          size={50} 
          href="/partnerships"
        />
         <Logo 
          src="https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/rocket.svg" // Placeholder SVG
          name="Launch Systems" 
          slogan="To The Stars!" 
          size={70} 
          href="/launch-systems"
          minimal={false}
        />
        <Logo 
          src="https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/planet.svg" // Placeholder SVG
          name="Planetary Research" 
          slogan="Exploring Mars" 
          size={60} 
          href="/research/mars"
          minimal={true}
        />
      </CompositionWrapper>
    </CorporateTheme>
  </MemoryRouter>
);

export const LogoWithoutLink = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionWrapper title="Logo Without Hyperlink">
        <Logo 
          name="Corporate Archives" 
          slogan="Preserving Our Legacy" 
          size={45} 
          href={undefined} // No href
        />
      </CompositionWrapper>
    </CorporateTheme>
  </MemoryRouter>
);

export const VariousSizesAndConfigurations = () => (
    <MemoryRouter>
        <CorporateTheme>
            <CompositionWrapper title="Various Logo Configurations">
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Logo name="Compact Corp" slogan="Small & Mighty" size={30} href="/compact" />
                    <Logo name="Standard Systems" slogan="Reliable & Robust" size={40} />
                    <Logo name="Large Ventures" slogan="Boldly Go" size={70} href="/ventures" />
                    <Logo minimal={true} size={60} href="/minimal-icon" />
                    <Logo 
                        src="https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/brand-svelte.svg" 
                        name="Svelte Division" 
                        slogan="Lean & Fast" 
                        size={50} 
                        href="/svelte-div" 
                    />
                     <Logo 
                        name="No Slogan Inc." 
                        size={50} 
                        href="/no-slogan"
                        slogan={undefined}
                    />
                 </div>
            </CompositionWrapper>
        </CorporateTheme>
    </MemoryRouter>
);