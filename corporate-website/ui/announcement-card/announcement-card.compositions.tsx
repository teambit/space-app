import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { AnnouncementCard } from './announcement-card.js';

const commonWrapperStyle: React.CSSProperties = {
  padding: 'var(--spacing-large)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-large)',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'var(--colors-surface-background)',
};

const cardContainerStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '400px',
};

export const BasicMarsAnnouncement = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={commonWrapperStyle}>
        <div style={cardContainerStyle}>
          <AnnouncementCard
            title="Mars Habitation Module Alpha: Online!"
            summary="Corporate Inc. proudly announces the successful deployment and activation of the first sustainable habitat module on the Martian surface. This marks a significant milestone in our mission to populate Mars."
            date="2042-10-28T10:00:00Z"
            linkUrl="/news/mars-habitat-alpha-online"
            linkText="Discover More"
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const TerraformingBreakthroughWithImage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={commonWrapperStyle}>
        <div style={cardContainerStyle}>
          <AnnouncementCard
            title="Breakthrough in Terraforming Technology Achieved"
            summary="Our advanced research division has achieved a monumental breakthrough in atmospheric processing, significantly accelerating our timeline for creating a breathable Martian environment. This technology is key to long-term colonization."
            date="2043-03-15T14:30:00Z"
            linkUrl="/news/terraforming-breakthrough"
            imageUrl="https://images.unsplash.com/photo-1610296669458-193205820a42?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtYXJzJTIwY29sb255JTIwZnV0dXJpc3RpY3xlbnwwfDB8fGJsYWNrfDE3MTY0NzQ2NTB8MA&ixlib=rb-4.0.3"
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const JoinMarsMissionPrimaryAnnouncement = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={commonWrapperStyle}>
        <div style={cardContainerStyle}>
          <AnnouncementCard
            title="Join the Ares V Mission to Mars!"
            summary="Applications are now open for the historic Ares V mission. Corporate Inc. is seeking visionary scientists, engineers, and pioneers to help establish our burgeoning Martian colony and shape the future of humanity."
            linkUrl="/careers/ares-v-mission"
            linkText="Apply Today"
            imageUrl="https://images.unsplash.com/photo-1570032257806-7272438f38da?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcm92ZXJ8ZW58MHwwfHxibGFja3wxNzE2NDc0NTY0fDA&ixlib=rb-4.0.3"
            variant="primary"
            date="2043-05-01T09:00:00Z"
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

export const MultipleAnnouncementsGrid = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={{ ...commonWrapperStyle, padding: 'var(--spacing-xl)' }}>
        <h2 style={{ color: 'var(--colors-text-primary)', fontSize: 'var(--typography-sizes-heading-h2)', marginBottom: 'var(--spacing-medium)'}}>
          Latest Corporate Inc. News
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-large)', width: '100%', maxWidth: '1200px' }}>
          <AnnouncementCard
            title="New Interstellar Propulsion System Unveiled"
            summary="Corporate Inc. reveals its next-generation 'WarpSprint' drive, promising to reduce travel time to Mars to mere weeks. This changes everything for interplanetary logistics."
            date="2043-07-22T11:00:00Z"
            linkUrl="/news/warpsprint-drive"
            imageUrl="https://images.unsplash.com/photo-1517976547714-720226b86441?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzcGFjZXNoaXAlMjBlbmdpbmV8ZW58MHwwfHxibGFja3wxNzE2NDc1MDI5fDA&ixlib=rb-4.0.3"
            variant="elevated"
          />
          <AnnouncementCard
            title="First Martian-Grown Food Harvested"
            summary="A historic moment: our bio-domes on Mars have yielded the first successful harvest of Earth crops, a crucial step towards self-sufficiency for the colony."
            date="2043-08-05T16:00:00Z"
            linkUrl="/news/martian-harvest"
            imageUrl="https://images.unsplash.com/photo-1631075209317-813790073f68?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZmFybWluZ3xlbnwwfDB8fGJsYWNrfDE3MTY0NzUxMDV8MA&ixlib=rb-4.0.3"
          />
           <AnnouncementCard
            title="Education Partnership: Mars Academy"
            summary="Corporate Inc. launches 'Mars Academy' initiative in partnership with leading universities to train the next generation of space explorers and colonist."
            date="2043-09-01T09:00:00Z"
            linkUrl="/news/mars-academy"
            variant="outlined"
            linkText="Learn About Program"
          />
        </div>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);