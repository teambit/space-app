import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Image } from './image.js';

const compositionWrapperStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium, 20px)',
  backgroundColor: 'var(--colors-surface-background)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-large, 30px)',
};

const imageCardStyle: React.CSSProperties = {
  padding: 'var(--spacing-small, 10px)',
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid var(--borders-default-color)',
  borderRadius: 'var(--borders-radius-medium)',
  backgroundColor: 'var(--colors-surface-primary)',
  boxShadow: 'var(--effects-shadows-small)',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'var(--typography-font-family)',
  color: 'var(--colors-text-primary)',
  fontSize: 'var(--typography-sizes-heading-h5)',
  marginBottom: 'var(--spacing-small, 10px)',
  textAlign: 'center',
};

export const BasicCorporateImage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <div style={imageCardStyle}>
          <h3 style={titleStyle}>Mars Rover Schematics</h3>
          <Image
            src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw0fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBjb3Jwb3JhdGV8ZW58MXwwfHxibHVlfDE3NDcyMjMxNDV8MA&ixlib=rb-4.1.0"
            alt="Digital tablet displaying schematics for a Mars rover, vital for Corporate Inc.'s exploration."
            width="400"
            onLoad={() => console.log('BasicCorporateImage loaded: Mars Rover Schematics')}
            onError={() => console.error('BasicCorporateImage failed to load: Mars Rover Schematics')}
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const StyledCorporateImage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <div style={imageCardStyle}>
          <h3 style={titleStyle}>Orbital Research Drone</h3>
          <Image
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBjb3Jwb3JhdGV8ZW58MXwwfHxibHVlfDE3NDcyMjMxNDV8MA&ixlib=rb-4.1.0"
            alt="Advanced drone technology, representing Corporate Inc.'s orbital and atmospheric research vehicles."
            width="450"
            height="300"
            objectFit="cover"
            borderRadius="medium"
            shadow="medium"
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const ContainedLaunchSystemImage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <div style={imageCardStyle}>
          <h3 style={titleStyle}>Launch System Overview</h3>
          <Image
            src="https://images.unsplash.com/photo-1516801967339-cb50a3ce7781?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw5fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBjb3Jwb3JhdGV8ZW58MXwwfHxibHVlfDE3NDcyMjMxNDV8MA&ixlib=rb-4.1.0"
            alt="Artistic depiction of a rocket launch trail, symbolizing Corporate Inc.'s launch capabilities."
            width="450"
            height="300"
            objectFit="contain"
            borderRadius="small"
            shadow="none"
            style={{ backgroundColor: 'var(--colors-surface-tertiary)' }}
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const CircularMissionImage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <div style={imageCardStyle}>
          <h3 style={titleStyle}>Mars Mission Emblem</h3>
          <Image
            src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw2fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBjb3Jwb3JhdGV8ZW58MXwwfHxibHVlfDE3NDcyMjMxNDV8MA&ixlib=rb-4.1.0"
            alt="A mission emblem featuring a rocket launch, symbolizing Corporate Inc.'s Mars colonization efforts."
            width="250"
            height="250"
            objectFit="cover"
            borderRadius="circle"
            shadow="large"
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);