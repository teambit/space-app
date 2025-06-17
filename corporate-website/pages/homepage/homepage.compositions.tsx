import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Homepage } from './homepage.js';
import type { AnnouncementType } from './announcement-type.js';
import type { ServiceType } from './service-type.js';

export const BasicHomepage = () => {
  return (
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );
};

const customServicesData: ServiceType[] = [
  {
    id: 'custom-s1',
    title: 'Advanced Terraforming Solutions',
    description: 'Deploying cutting-edge atmospheric processors and soil regeneration technologies to transform Mars into a habitable planet. Our systems are designed for large-scale, autonomous operation.',
    image: 'https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxtYXJzJTIwdGVycmFmb3JtaW5nfGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0', // Replaced original with a more relevant one
    imageAlt: 'Concept art of terraforming equipment on Mars changing the landscape',
  },
  {
    id: 'custom-s2',
    title: 'AI-Driven Colonial Management',
    description: 'Utilizing sophisticated AI to optimize resource allocation, life support systems, and daily operations for Martian colonies, ensuring efficiency and safety for all inhabitants.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxtYXJzJTIwYWklMjBjb250cm9sfGVufDB8MHx8YmxhY2t8MTc3MTE3MDEwMHww&ixlib=rb-4.0.3', // Replaced original with a more relevant one
    imageAlt: 'AI interface showing complex data for Mars colony management and logistics',
  },
  {
    id: 'custom-s3',
    title: 'Martian Agriculture Systems',
    description: 'Developing advanced hydroponic and aeroponic farms to grow sustainable food sources within controlled environments on Mars, critical for long-term colonization.',
    image: 'https://images.unsplash.com/photo-1631075209317-813790073f68?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZmFybWluZ3xlbnwwfDB8fGJsYWNrfDE3MTY0NzUxMDV8MA',
    imageAlt: 'Interior of a Martian hydroponic farm with rows of green plants under LED lights',
  },
];

const customAnnouncementsData: AnnouncementType[] = [
  {
    title: 'New Partnership for Deep Space Exploration',
    summary: 'Corporate Inc. announces a strategic alliance with Interstellar Dynamics to accelerate research into faster-than-light travel technologies and expand humanity\'s reach beyond Mars.',
    date: '2043-03-10T11:00:00Z',
    linkUrl: '/news/deep-space-partnership',
    imageUrl: 'https://images.unsplash.com/photo-1580180049184-4917b3503983?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBuZXR3b3JrJTIwc3BhY2V8ZW58MHwwfHxibGFja3wxNzE5NTg2MTI5fDA&ixlib=rb-4.0.3',
  },
  {
    title: 'First Martian-Born Child Thrives',
    summary: 'A historic moment as the first child born on Mars, Elara Vance, celebrates her first birthday in good health at Odyssey Colony, symbolizing hope for future generations.',
    date: '2043-02-20T08:30:00Z',
    linkUrl: '/news/first-martian-child',
    // No image for variety
  },
  {
    title: 'Water Ice Discovery on Mars Equator',
    summary: 'Our robotic probes have confirmed vast deposits of water ice near the Martian equator, a significant find for future colony expansion and resource utilization.',
    date: '2043-01-15T16:00:00Z',
    linkUrl: '/news/mars-water-ice-discovery',
    imageUrl: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtYXJzJTIwaWNlJTIwZGlzY292ZXJ5fGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0',
  },
];

export const HomepageWithCustomContent = () => {
  return (
    <MemoryRouter>
      <Homepage
        heroTitle="Building Tomorrow's Worlds, Today"
        heroDescription="Join Corporate Inc. as we engineer the future of interplanetary civilization, starting with a thriving, sustainable colony on Mars. Our vision is bold, our technology is groundbreaking."
        heroImageUrl="https://images.unsplash.com/photo-1516801967339-cb50a3ce7781?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw4fHxtYXJzJTIwY29sb255JTIwZnV0dXJlfGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0"
        heroImageAlt="Futuristic Martian colony dome with Earth visible in the sky"
        heroCtaText="Discover Our Vision"
        heroCtaUrl="/vision"
        servicesTitle="Key Technologies for Mars"
        servicesSubtitle="We are developing a comprehensive suite of technologies essential for establishing and sustaining life on Mars."
        services={customServicesData}
        servicesBackground="secondary"
        announcementsTitle="Corporate Inc. Milestones"
        announcementsSubtitle="The latest breakthroughs and news from our ongoing mission to colonize Mars and beyond."
        announcements={customAnnouncementsData}
        maxAnnouncementsDisplay={2}
        announcementsViewAllText="Read All Corporate News"
      />
    </MemoryRouter>
  );
};

export const HomepageWithSplitHeroAndListAnnouncements = () => {
  return (
    <MemoryRouter>
      <Homepage
        heroTitle="Join the Martian Frontier"
        heroDescription="Corporate Inc. offers unparalleled opportunities for scientists, engineers, and pioneers to contribute to humanity's most ambitious endeavor: colonizing Mars."
        heroImageUrl="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0"
        heroImageAlt="Astronaut overlooking a Martian landscape with a colony in the distance"
        heroCtaText="Explore Careers"
        heroCtaUrl="/careers"
        heroVariant="split"
        servicesBackground="tertiary"
        announcementsLayout="list"
        announcementsTitle="Mission Log"
        announcementsSubtitle="Chronological updates on our progress."
      />
    </MemoryRouter>
  );
};