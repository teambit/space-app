import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { AboutUs } from './about-us.js';
import type { TimelineItemType } from './timeline-item-type.js';
import type { MissionCardType } from './mission-card-type.js';
import type { TeamMemberType } from './team-member-type.js';

export const BasicAboutUsPage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <AboutUs />
    </CorporateTheme>
  </MemoryRouter>
);

const customTimelineItems: TimelineItemType[] = [
  {
    year: '2024',
    title: 'Project Phoenix Initiative Launched',
    description: 'Corporate Inc. officially launched Project Phoenix, a focused initiative on developing advanced bio-domes for sustainable agriculture on Mars.',
  },
  {
    year: '2029',
    title: 'Terraforming Research Breakthrough',
    description: 'Significant breakthrough in atmospheric processing research, paving the way for localized terraforming efforts.',
  },
  {
    year: '2036',
    title: 'Martian Water Ice Extraction Plant Operational',
    description: 'Successfully established and operationalized the first automated water ice extraction and purification plant in the Martian polar regions.',
  },
  {
    year: '2040',
    title: 'First Self-Sustaining Bio-Dome',
    description: 'Phoenix-1, the first self-sustaining agricultural bio-dome, achieves full operational capacity, producing a variety of crops on Mars.',
  }
];

const customMissionCards: MissionCardType[] = [
  {
    title: 'Planetary Habitats',
    description: 'Engineering resilient and adaptive habitats that provide safe and sustainable living conditions for Martian pioneers.',
  },
  {
    title: 'Resource Independence',
    description: 'Achieving resource independence through innovative in-situ resource utilization (ISRU) technologies, minimizing reliance on Earth supplies.',
  },
  {
    title: 'Interstellar Research',
    description: 'Leading scientific research in astrobiology, geology, and atmospheric science to unlock the secrets of Mars and the wider cosmos.',
  }
];

const customTeamMembers: TeamMemberType[] = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief Futurist & Mars Visionary',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Dr. Evelyn Reed',
    role: 'Head of Exogeology',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Kenjiro Sato',
    role: 'Lead AI & Robotics Systems Architect',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Dr. Zara Al-Jamil',
    role: 'Director of Bio-Sustainable Ecosystems',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
];

export const AboutUsWithCustomData = () => (
  <MemoryRouter>
    <CorporateTheme>
      <AboutUs
        timelineItems={customTimelineItems}
        missionCards={customMissionCards}
        teamMembers={customTeamMembers}
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const AboutUsMinimalContent = () => (
  <MemoryRouter>
    <CorporateTheme>
      <AboutUs
        timelineItems={[]}
        missionCards={[]}
        teamMembers={[]}
      />
    </CorporateTheme>
  </MemoryRouter>
);