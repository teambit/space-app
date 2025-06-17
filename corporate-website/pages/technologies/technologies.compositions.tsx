import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Technologies } from './technologies.js';
import type { TechnologyType } from './technology-type.js';

export const BasicTechnologiesPage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Technologies />
    </CorporateTheme>
  </MemoryRouter>
);

const customTechnologiesData: TechnologyType[] = [
  {
    id: 'tech-001',
    title: 'Quantum Entanglement Communicators',
    description: 'Revolutionizing interplanetary communication with instantaneous, secure data transmission across vast cosmic distances using principles of quantum entanglement.',
    imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Communication',
  },
  {
    id: 'tech-002',
    title: 'Bio-Adaptive Terraforming Units',
    description: 'Deployable, self-replicating units that analyze Martian soil and atmosphere, releasing tailored extremophile organisms to gradually terraform the environment.',
    imageUrl: 'https://images.unsplash.com/photo-1570012759830-6f3510450012?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Terraforming',
  },
  {
    id: 'tech-003',
    title: 'Zero-G Advanced Manufacturing',
    description: 'Orbital factories leveraging microgravity to produce flawless crystals, alloys, and biologicals impossible to create on Earth or Mars, supporting both planets.',
    imageUrl: 'https://images.unsplash.com/photo-1633989309671-9319f4a81822?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Manufacturing',
  },
];

export const CustomTechnologiesPage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Technologies technologies={customTechnologiesData} />
    </CorporateTheme>
  </MemoryRouter>
);

const limitedTechnologiesData: TechnologyType[] = [
    {
      id: 'lt-001',
      title: 'Fusion-Powered Interstellar Drive',
      description: 'A compact fusion reactor powering a next-generation engine capable of sustained high-G acceleration, drastically reducing travel times within the solar system.',
      imageUrl: 'https://images.unsplash.com/photo-1608178388197-9b11c1850068?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Propulsion',
    },
    {
      id: 'lt-002',
      title: 'Cryosleep Habitation Pods',
      description: 'Advanced pods enabling long-duration stasis for crew on extended voyages, minimizing life support needs and psychological stress for deep space missions.',
      imageUrl: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Life Support',
    },
];

export const LimitedTechnologiesView = () => (
    <MemoryRouter>
        <CorporateTheme>
            <Technologies technologies={limitedTechnologiesData} />
        </CorporateTheme>
    </MemoryRouter>
);

// Note: The component uses defaultTechnologies if an empty array is passed or if the prop is undefined.
// To show a truly "empty" state (e.g. a message "No technologies to display"),
// the Technologies component itself would need modification to handle an explicitly empty array differently.
// This composition demonstrates passing an empty array, which will currently fall back to defaults.
export const TechnologiesWithEmptyData = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Technologies technologies={[]} />
    </CorporateTheme>
  </MemoryRouter>
);