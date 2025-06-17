import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { CtaButton } from './cta-button.js';

const CompositionSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ 
    marginBottom: 'var(--spacing-xl, 48px)', 
    padding: 'var(--spacing-large, 32px)', 
    backgroundColor: 'var(--colors-surface-primary, #1A1A2E)', 
    borderRadius: 'var(--borders-radius-large, 16px)',
    boxShadow: 'var(--effects-shadows-medium, 0px 8px 24px rgba(0,0,0,0.1))'
  }}>
    <h2 style={{ 
        fontFamily: 'var(--typography-font-family, "Space Grotesk", sans-serif)', 
        fontSize: 'var(--typography-sizes-heading-h3, 24px)', 
        color: 'var(--colors-text-primary, #E0E0E0)', 
        borderBottom: '1px solid var(--borders-default-color, #3A3A5E)', 
        paddingBottom: 'var(--spacing-small, 12px)',
        marginBottom: 'var(--spacing-medium, 24px)',
        fontWeight: 'var(--typography-font-weight-bold, 700)'
    }}>{title}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-medium, 24px)', alignItems: 'center' }}>
      {children}
    </div>
  </div>
);

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 'var(--spacing-xl, 48px)', backgroundColor: 'var(--colors-surface-background, #0F0F1A)', minHeight: '100vh' }}>
    {children}
  </div>
);

export const PrimaryCallToAction = () => (
  <CorporateTheme>
    <MemoryRouter>
      <PageWrapper>
        <CompositionSection title="Primary Call to Actions">
          <CtaButton onClick={() => alert('Launch sequence initiated!')}>
            Launch Initiative
          </CtaButton>
          <CtaButton appearance="primary" size="large" onClick={() => alert('Exploring Martian Frontiers!')}>
            Explore Martian Frontiers
          </CtaButton>
          <CtaButton appearance="primary" size="small" onClick={() => alert('Quick access panel opened!')}>
            Access Mars Data
          </CtaButton>
        </CompositionSection>
      </PageWrapper>
    </MemoryRouter>
  </CorporateTheme>
);

export const VariedStylesAndEffects = () => (
  <CorporateTheme>
    <MemoryRouter>
      <PageWrapper>
        <CompositionSection title="Varied Styles & Visual Effects">
          <CtaButton appearance="secondary" size="large" onClick={() => alert('Viewing research data...')}>
            View Research Data
          </CtaButton>
          <CtaButton appearance="tertiary" size="medium" onClick={() => alert('Contacting engineering team...')}>
            Contact Engineering
          </CtaButton>
          <CtaButton appearance="primary" size="medium" animated={false} onClick={() => alert('Manual override activated.')}>
            Manual Override
          </CtaButton>
          <CtaButton appearance="primary" pulsing={true} onClick={() => alert('Joining the mission!')}>
            Join the Mission
          </CtaButton>
          <CtaButton appearance="secondary" glowing={true} size="large" onClick={() => alert('Hyperjump sequence activated!')}>
            Activate Hyperjump
          </CtaButton>
          <CtaButton appearance="primary" pulsing={true} glowing={true} animated={true} size="large" onClick={() => alert('Going Interstellar!')}>
            Go Interstellar!
          </CtaButton>
        </CompositionSection>
      </PageWrapper>
    </MemoryRouter>
  </CorporateTheme>
);

export const FunctionalVariations = () => (
  <CorporateTheme>
    <MemoryRouter>
      <PageWrapper>
        <CompositionSection title="Functional Variations (Links & States)">
          <CtaButton href="/our-vision" appearance="primary">
            Read Our Vision
          </CtaButton>
          <CtaButton href="https://www.nasa.gov" external={true} appearance="secondary">
            NASA Archives
          </CtaButton>
          <CtaButton disabled={true} appearance="primary" onClick={() => alert('This should not fire!')}>
            System Standby (Disabled)
          </CtaButton>
          <form onSubmit={(e) => { e.preventDefault(); alert('Application for Mars Program Submitted!'); }} style={{display: 'contents'}}>
            <CtaButton type="submit" appearance="tertiary" size="medium">
              Submit Mars Application
            </CtaButton>
          </form>
        </CompositionSection>
      </PageWrapper>
    </MemoryRouter>
  </CorporateTheme>
);