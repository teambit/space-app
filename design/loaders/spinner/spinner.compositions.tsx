import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Spinner } from './spinner.js';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-large)',
  padding: 'var(--spacing-large)',
  minHeight: '300px', // Ensure enough space for overlay spinner to be visible
  position: 'relative', // For overlay spinner context
  justifyContent: 'center',
  alignItems: 'center',
  background: 'var(--colors-surface-background)'
};

const sectionStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium)',
  borderRadius: 'var(--borders-radius-medium)',
  background: 'var(--colors-surface-primary)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--spacing-small)',
  color: 'var(--colors-text-primary)',
  fontFamily: 'var(--typography-font-family)',
  boxShadow: 'var(--effects-shadows-small)',
};

const sectionTitleStyle: React.CSSProperties = {
    fontSize: 'var(--typography-sizes-body-large)',
    fontWeight: 'var(--typography-font-weight-medium)',
    color: 'var(--colors-text-primary)',
    marginBottom: 'var(--spacing-default)'
};


export const BasicSpinner = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={containerStyle}>
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Default Spinner</div>
            <Spinner />
          </div>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const SpinnerWithLoadingText = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={containerStyle}>
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Spinner with Loading Text</div>
            <Spinner loadingText="Initializing Systems..." />
          </div>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const CustomSizeAndColorSpinner = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={containerStyle}>
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Custom Size & Colors</div>
            <Spinner
              size={60}
              color="var(--colors-secondary-default)"
              secondaryColor="var(--colors-status-info-default)"
              loadingText="Calibrating Trajectory"
            />
          </div>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const OverlaySpinner = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{...containerStyle, height: '250px', border: '1px solid var(--borders-default-color)', borderRadius: 'var(--borders-radius-large)' }}>
          <div style={sectionTitleStyle}>Overlaying Parent Container...</div>
          <p style={{color: 'var(--colors-text-secondary)', fontFamily: 'var(--typography-font-family)'}}>This text will be covered by the spinner.</p>
          <Spinner overlay loadingText="Engaging Warp Drive" />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

const MockSatelliteIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ animation: 'spin 2s linear infinite', color: 'var(--spinner-color)' }}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h2.55C9.76 8.84 10.82 7.23 12 6.56v3.94c-1.18.67-2.24 2.28-2.45 4.5H7zm7.45-4.5c.21 2.22 1.27 3.83 2.45 4.5V6.56c-1.18.67-2.24 2.28-2.45 4.5zM12 17.44c-1.18-.67-2.24-2.28-2.45-4.5h4.9c-.21 2.22-1.27 3.83-2.45 4.5z"
      fill="currentColor"
    />
  </svg>
);


export const CustomIconSpinner = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={containerStyle}>
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>Spinner with Custom Icon</div>
            <Spinner
              customIcon={MockSatelliteIcon}
              size={50}
              loadingText="Acquiring Signal"
              color="var(--colors-tertiary-default)"
            />
          </div>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};