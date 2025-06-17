import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { LinkedInIcon } from './linkedin-icon.js';

const CompositionWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: 'var(--spacing-large)', padding: 'var(--spacing-default)', border: '1px solid var(--borders-default-color)', borderRadius: 'var(--borders-radius-medium)', backgroundColor: 'var(--colors-surface-primary)' }}>
    <h3 style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', marginTop: 0, marginBottom: 'var(--spacing-medium)' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', gap: 'var(--spacing-medium)', alignItems: 'center', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

export const BasicLinkedInIcon = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', backgroundColor: 'var(--colors-surface-background)', minHeight: '100vh' }}>
        <CompositionWrapper title="Default LinkedIn Icon">
          <LinkedInIcon />
          <p>Default size (24px) and color (var(--colors-primary-default)).</p>
        </CompositionWrapper>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const StyledLinkedInIcon = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', backgroundColor: 'var(--colors-surface-background)', minHeight: '100vh' }}>
        <CompositionWrapper title="Styled LinkedIn Icon">
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', fontSize: 'var(--typography-sizes-caption-default)' }}>Large (48px), Secondary Color</p>
            <LinkedInIcon size={48} color="var(--colors-secondary-default)" />
          </div>
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', fontSize: 'var(--typography-sizes-caption-default)' }}>Small (16px), Text Tertiary Color</p>
            <LinkedInIcon size={16} color="var(--colors-text-tertiary)" />
          </div>
          <div>
            <p style={{ margin: '0 0 var(--spacing-xs) 0', fontSize: 'var(--typography-sizes-caption-default)' }}>Custom Color (#0077B5 - LinkedIn Blue)</p>
            <LinkedInIcon size={32} color="#0077B5" />
          </div>
        </CompositionWrapper>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const InteractiveLinkedInIcon = () => {
  const handleClick = () => {
    // In a real app, this would navigate to a LinkedIn profile or share page
    alert('LinkedIn icon clicked! You would normally be redirected to LinkedIn.');
  };

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', backgroundColor: 'var(--colors-surface-background)', minHeight: '100vh' }}>
          <CompositionWrapper title="Interactive LinkedIn Icon">
            <LinkedInIcon
              size={40}
              color="var(--colors-primary-hover)"
              onClick={handleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
              aria-label="Visit our LinkedIn Profile"
              style={{ cursor: 'var(--interactions-cursor-pointer)' }}
              title="Visit our LinkedIn Profile (Click me!)"
            />
            <p>Clickable icon (40px). Click to see an alert.</p>
          </CompositionWrapper>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};