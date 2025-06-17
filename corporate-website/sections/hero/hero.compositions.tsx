import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Hero } from './hero.js';

export const BasicHero = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Hero
        title="Pioneering Mars: Humanity's Next Frontier"
        description="Corporate Inc. is at the vanguard of space technology, developing innovative solutions to establish a thriving human civilization on Mars. Join us as we shape the future of interplanetary exploration."
        imageUrl="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0"
        imageAlt="SpaceX Falcon Heavy Demo Mission launching towards the sky"
        ctaText="Explore Our Mission"
        ctaUrl="/mission"
        onCtaClick={() => console.log('Explore Our Mission clicked')}
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const DarkOverlayHero = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Hero
        title="Innovate. Explore. Colonize."
        description="Our vision extends beyond Earth. We're building the technologies that will transport humanity to Mars and sustain life on a new world. Witness the dawn of a new era."
        imageUrl="https://images.unsplash.com/photo-1516801967339-cb50a3ce7781?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw4fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0"
        imageAlt="Soyuz rocket launch trail at night"
        ctaText="Discover Our Technologies"
        ctaUrl="/technology"
        variant="darkOverlay"
        onCtaClick={() => console.log('Discover Our Technologies clicked')}
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const SplitLayoutHero = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Hero
        title="Join the Martian Endeavor"
        description="Corporate Inc. seeks brilliant minds and bold spirits to contribute to our Mars colonization program. From engineers to scientists, your expertise can help build a new home for humanity."
        imageUrl="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0"
        imageAlt="Falcon 9 rocket launching with a beautiful sky backdrop"
        ctaText="View Open Positions"
        ctaUrl="/careers"
        variant="split"
        onCtaClick={() => console.log('View Open Positions clicked')}
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const HeroWithExternalCta = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Hero
        title="Partner with Us: The Future of Space"
        description="We collaborate with leading organizations and research institutions to accelerate the development of space colonization technologies. Learn more about partnership opportunities."
        imageUrl="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0"
        imageAlt="Ray of light near body of water, symbolizing new horizons"
        ctaText="Contact Our Partnerships Team"
        ctaUrl="mailto:partnerships@corporateinc.com"
        ctaExternal={true}
        onCtaClick={() => console.log('Contact Partnerships clicked')}
      />
    </CorporateTheme>
  </MemoryRouter>
);