import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Button } from './button.js';

const CompositionContainer: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBlockEnd: 'var(--spacing-large)', padding: 'var(--spacing-medium)', border: '1px solid var(--borders-default-color)', borderRadius: 'var(--borders-radius-medium)', backgroundColor: 'var(--colors-surface-primary)' }}>
    <h3 style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', fontSize: 'var(--typography-sizes-heading-h4)', marginBlockStart: 0, marginBlockEnd: 'var(--spacing-medium)' }}>{title}</h3>
    <div style={{ display: 'flex', gap: 'var(--spacing-medium)', alignItems: 'center', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

export const ButtonAppearances = () => (
  <CorporateTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)', backgroundColor: 'var(--colors-surface-background)' }}>
        <CompositionContainer title="Button Appearances">
          <Button appearance="primary" onClick={() => alert('Primary button clicked!')}>
            Primary Action
          </Button>
          <Button appearance="secondary" onClick={() => alert('Secondary button clicked!')}>
            Secondary Action
          </Button>
          <Button appearance="tertiary" onClick={() => alert('Tertiary button clicked!')}>
            Tertiary Action
          </Button>
        </CompositionContainer>
      </div>
    </MemoryRouter>
  </CorporateTheme>
);

export const ButtonsAsLinks = () => (
  <CorporateTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)', backgroundColor: 'var(--colors-surface-background)' }}>
        <CompositionContainer title="Buttons as Links">
          <Button href="/mars-missions" appearance="primary">
            Explore Mars Missions (Internal)
          </Button>
          <Button href="https://www.spacex.com" external appearance="secondary">
            Visit SpaceX (External)
          </Button>
          <Button href="/contact" appearance="tertiary" external>
            Contact Us (External Tertiary)
          </Button>
        </CompositionContainer>
      </div>
    </MemoryRouter>
  </CorporateTheme>
);

export const DisabledButtons = () => (
  <CorporateTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)', backgroundColor: 'var(--colors-surface-background)' }}>
        <CompositionContainer title="Disabled Buttons">
          <Button appearance="primary" disabled>
            Primary Disabled
          </Button>
          <Button appearance="secondary" disabled>
            Secondary Disabled
          </Button>
          <Button appearance="tertiary" disabled>
            Tertiary Disabled
          </Button>
          <Button href="/wont-navigate" appearance="primary" disabled>
            Link Disabled
          </Button>
        </CompositionContainer>
      </div>
    </MemoryRouter>
  </CorporateTheme>
);

export const ButtonsWithDifferentTypes = () => (
  <CorporateTheme>
    <MemoryRouter>
      <div style={{ padding: 'var(--spacing-large)', backgroundColor: 'var(--colors-surface-background)' }}>
        <CompositionContainer title="Buttons with HTML Types">
          <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
            <Button type="submit" appearance="primary" style={{ marginRight: 'var(--spacing-small)' }}>
              Submit Form
            </Button>
            <Button type="reset" appearance="secondary" onClick={() => alert('Form reset!')} style={{ marginRight: 'var(--spacing-small)' }}>
              Reset Form
            </Button>
            <Button type="button" appearance="tertiary" onClick={() => alert('Generic button clicked!')}>
              Generic Button
            </Button>
          </form>
        </CompositionContainer>
      </div>
    </MemoryRouter>
  </CorporateTheme>
);