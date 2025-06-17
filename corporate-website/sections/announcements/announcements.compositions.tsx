import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Announcements } from './announcements.js';
import { AnnouncementType } from './announcement-type.js';

const sampleAnnouncements: AnnouncementType[] = [
  {
    title: "Mars Colony 'Odyssey' Achieves Self-Sufficiency",
    summary: "Corporate Inc. celebrates a historic milestone as Mars Colony Odyssey successfully operates independently, marking a new era in human space colonization and our relentless pursuit of Martian habitation.",
    date: "2045-07-20T10:00:00Z",
    linkUrl: "/news/odyssey-self-sufficient",
    linkText: "Explore Odyssey's Journey",
    imageUrl: "https://images.unsplash.com/photo-1614726340000-829a19a7b2c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtYXJzJTIwY29sb255JTIwaW50ZXJpb3J8ZW58MHwwfHxibGFja3wxNzE5NTg1NzUwfDA&ixlib=rb-4.0.3&w=400&h=300&fit=crop",
  },
  {
    title: "New 'Helios' Fusion Reactor Powers Martian Outposts",
    summary: "The revolutionary 'Helios' compact fusion reactor is now online, providing sustainable and abundant energy to Corporate Inc.'s expanding network of Martian outposts. This breakthrough ensures our long-term operational capacity.",
    date: "2045-06-15T14:30:00Z",
    linkUrl: "/news/helios-fusion-reactor",
    imageUrl: "https://images.unsplash.com/photo-1517976547714-720226b86441?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzcGFjZXNoaXAlMjBlbmdpbmV8ZW58MHwwfHxibGFja3wxNzE2NDc1MDI5fDA&ixlib=rb-4.0.3&w=400&h=300&fit=crop",
  },
  {
    title: "Breakthrough in Martian Agriculture: First 'Red Harvest'",
    summary: "Corporate Inc. agronomists announce the first successful large-scale harvest of genetically engineered crops on Mars, securing a vital food source for colonists and proving the viability of sustainable life on the Red Planet.",
    date: "2045-05-10T09:00:00Z",
    linkUrl: "/news/martian-red-harvest",
    imageUrl: "https://images.unsplash.com/photo-1631075209317-813790073f68?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZmFybWluZ3xlbnwwfDB8fGJsYWNrfDE3MTY0NzUxMDV8MA&ixlib=rb-4.0.3&w=400&h=300&fit=crop",
  },
  {
    title: "Interstellar Communications Network Expanded",
    summary: "The 'StarLink-Mars' constellation now provides enhanced high-speed communication between Earth and Mars, supporting growing data needs and real-time collaboration for our pioneers.",
    date: "2045-04-02T11:00:00Z",
    linkUrl: "/news/starlink-mars-expanded",
    imageUrl: "https://images.unsplash.com/photo-1580180049184-4917b3503983?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBuZXR3b3JrJTIwc3BhY2V8ZW58MHwwfHxibGFja3wxNzE5NTg2MTI5fDA&ixlib=rb-4.0.3&w=400&h=300&fit=crop",
  },
  {
    title: "AI 'Pathfinder' Discovers Vast Water Ice Deposits",
    summary: "Corporate Inc.'s AI-powered exploration drone 'Pathfinder' has identified significant subsurface water ice deposits in the Martian polar regions, a crucial resource for future expansion.",
    date: "2045-03-18T16:30:00Z",
    linkUrl: "/news/pathfinder-water-discovery",
    // No image for this one to show variety
  },
];

export const BasicAnnouncementsSection = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Announcements
        title="Recent News from the Red Planet"
        subtitle="Discover the latest updates from Corporate Inc.'s pioneering efforts on Mars."
        announcements={sampleAnnouncements.slice(0, 3)}
        maxDisplay={3}
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const AnnouncementsWithViewAllLink = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Announcements
        title="Corporate Inc. Headlines"
        subtitle="Stay informed about our major breakthroughs and ongoing projects in space technology."
        announcements={sampleAnnouncements}
        maxDisplay={3}
        viewAllUrl="/all-news"
        viewAllText="See All Corporate News"
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const ListLayoutAnnouncements = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Announcements
        title="Mars Mission Updates"
        subtitle="A chronological list of our recent achievements and mission milestones."
        announcements={sampleAnnouncements.slice(0, 3)}
        maxDisplay={3}
        layout="list"
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const EmptyAnnouncementsSection = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Announcements
        title="No Current Updates"
        subtitle="There are no new announcements at this time. Please check back later for news from Corporate Inc."
        announcements={[]}
      />
    </CorporateTheme>
  </MemoryRouter>
);