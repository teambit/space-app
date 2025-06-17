import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Card } from './card.js';

const containerStyle: React.CSSProperties = {
  padding: 'var(--spacing-large)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-large)',
  alignItems: 'center',
  background: 'var(--colors-surface-background)', // Ensure theme background is visible
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 'var(--spacing-large)',
  width: '100%',
  maxWidth: '1200px',
};

const singleCardContainerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '400px',
};

export const BasicMarsMissionCard = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={containerStyle}>
        <div style={singleCardContainerStyle}>
          <Card
            title="Our Martian Vision"
          >
            Corporate Inc. is dedicated to establishing the first sustainable human colony on Mars. This card outlines our primary goals for pioneering a new frontier.
          </Card>
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const RocketLaunchCardWithDetails = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={containerStyle}>
        <div style={singleCardContainerStyle}>
          <Card
            title="Titan V Launch System"
            image="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0"
            imageAlt="Titan V rocket launching towards Mars"
            footer={<span style={{ fontSize: 'var(--typography-sizes-body-small)', color: 'var(--colors-text-tertiary)'}}>Status: Final Testing Phase</span>}
            variant="elevated"
          >
            The Titan V is our next-generation heavy-lift launch vehicle, designed for interplanetary missions to Mars. It features reusable boosters and advanced cryogenic engines.
          </Card>
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const InteractiveTechDiscoveryCard = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={containerStyle}>
        <div style={singleCardContainerStyle}>
          <Card
            title="Explore Our Technologies"
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0"
            imageAlt="Advanced holographic interface displaying Martian schematics"
            interactive
            onClick={() => alert('Navigating to Technology Showcase...')}
          >
            Dive into the innovative technologies powering our Martian colonization efforts. From advanced life support to terraforming breakthroughs, discover what makes Corporate Inc. a leader in space exploration.
          </Card>
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const PrimaryAnnouncementCard = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={containerStyle}>
        <div style={singleCardContainerStyle}>
          <Card
            title="Join the Mars Initiative!"
            image="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0"
            imageAlt="A hopeful sunrise over a conceptual Martian landscape"
            variant="primary"
            footer={
              <button 
                style={{ 
                  color: 'var(--colors-text-inverse)', 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  border: 'none', 
                  padding: 'var(--spacing-xs) var(--spacing-small)', 
                  borderRadius: 'var(--borders-radius-small)', 
                  cursor: 'pointer',
                  fontSize: 'var(--typography-sizes-body-small)',
                  fontWeight: 'var(--typography-font-weight-medium)'
                }}
                onClick={(e) => { e.stopPropagation(); alert('Redirecting to careers page...'); }}
              >
                Apply Now
              </button>
            }
          >
            Become a part of the historic mission to populate Mars. We are seeking pioneers, scientists, and engineers to shape the future of humanity beyond Earth.
          </Card>
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const OutlinedCardWithCustomHeader = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={containerStyle}>
        <div style={singleCardContainerStyle}>
          <Card
            variant="outlined"
            header={
              <div style={{ padding: 'var(--spacing-small)', backgroundColor: 'var(--colors-surface-secondary)', borderBottom: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)'}}>
                <h4 style={{ margin: 0, color: 'var(--colors-text-primary)', fontSize: 'var(--typography-sizes-heading-h5)'}}>
                  Research & Development Update
                </h4>
              </div>
            }
            title="Terraforming Progress"
            footer={<span style={{fontStyle: 'italic', fontSize: 'var(--typography-sizes-caption-default)'}}>Report Q3 2024</span>}
          >
            Our R&D team has achieved a significant milestone in atmospheric processing technology, bringing us one step closer to a breathable Martian atmosphere. Full report pending.
          </Card>
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const MultipleCardVariants = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={{ ...containerStyle, padding: 'var(--spacing-xl)' }}>
        <h2 style={{ color: 'var(--colors-text-primary)', fontSize: 'var(--typography-sizes-heading-h2)', marginBottom: 'var(--spacing-medium)'}}>
          Showcasing Card Variants
        </h2>
        <div style={gridStyle}>
          <Card title="Default Variant">
            This card uses the default styling, suitable for general content display about our mission to Mars.
          </Card>
          <Card title="Elevated Variant" variant="elevated">
            The elevated variant provides more emphasis, ideal for showcasing key achievements like successful rover landings.
          </Card>
          <Card title="Outlined Variant" variant="outlined">
            An outlined card offers a lighter visual, perfect for secondary information or data points regarding Martian geology.
          </Card>
          <Card title="Primary Variant" variant="primary" image="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0" imageAlt="Space shuttle launching">
            The primary variant grabs attention, excellent for calls to action like "Invest in the Future of Mars".
          </Card>
          <Card title="Secondary Variant" variant="secondary" image="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0" imageAlt="Hybrid tablet showing space data">
            The secondary variant provides an alternative highlight, useful for featuring technological partners.
          </Card>
          <Card title="Interactive Outlined" variant="outlined" interactive onClick={() => alert('Exploring habitat designs!')}>
            This interactive outlined card can link to detailed schematics of our proposed Martian habitats.
          </Card>
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);