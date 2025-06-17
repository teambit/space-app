import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Services } from './services.js';
import type { ServiceType } from './service-type.js';

const commonWrapperStyle: React.CSSProperties = {
  padding: 'var(--spacing-large)',
  backgroundColor: 'var(--colors-surface-background)',
};

export const BasicServices = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <Services />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const CustomTitleAndSubtitleServices = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <Services
            title="Our Advanced Martian Offerings"
            subtitle="Explore Corporate Inc.'s specialized solutions for conquering the Red Planet and establishing a thriving new world."
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

const customServicesData: ServiceType[] = [
  {
    id: 's1',
    title: 'Advanced Propulsion Systems',
    description: 'Next-generation engines for rapid and efficient interplanetary travel, reducing transit times to Mars significantly.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldHxlbnwwfDB8fGJsYWNrfDE3NzExNzAxMDB8MA&ixlib=rb-4.0.3',
    imageAlt: 'Advanced rocket engine firing with bright plumes',
  },
  {
    id: 's2',
    title: 'Robotic Terraforming Units',
    description: 'Autonomous robotic systems capable of initiating atmospheric processing and soil conditioning on a large scale.',
    image: 'https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMHJvYm90fGVufDB8MHx8YmxhY2t8MTc3MTE3MDEwMHww&ixlib=rb-4.0.3',
    imageAlt: 'Futuristic robot working on a barren landscape',
  },
  {
    id: 's3',
    title: 'AI-Powered Mission Control',
    description: 'Intelligent systems for managing complex Mars missions, optimizing resource allocation, and ensuring astronaut safety.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxzcGFjZSUyMGFpfGVufDB8MHx8YmxhY2t8MTc3MTE3MDEwMHww&ixlib=rb-4.0.3',
    imageAlt: 'Holographic interface displaying complex data streams',
  },
];

export const LimitedServices = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <Services
            title="Key Technologies Showcase"
            subtitle="A glimpse into our core technological innovations for the Mars initiative."
            services={customServicesData}
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const ThemedBackgroundServices = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        {/* No commonWrapperStyle needed here as SectionLayout's background will cover it */}
        <Services
          title="Services in the Stars"
          subtitle="Our vision extends to the cosmos, reflected in our advanced service offerings."
          background="tertiary" // This will use the space-effect gradient
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};