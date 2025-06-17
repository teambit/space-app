import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { News } from './news.js';
import type { NewsItem } from './news-item-type.js';

const commonWrapperStyle: React.CSSProperties = {
  minHeight: '100vh', // Ensure theme background covers viewport in compositions
};

export const BasicNewsPage = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <News />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

const customFeaturedNews: NewsItem[] = [
  {
    id: 'custom-feat-1',
    title: "Mars Rover 'Pathfinder II' Begins Historic Soil Sampling Mission",
    summary: "Our advanced rover, Pathfinder II, has successfully collected its first Martian soil samples from the Jezero Crater, a key step in searching for signs of ancient life and understanding the planet's geology.",
    date: '2024-07-20',
    imageUrl: 'https://images.unsplash.com/photo-1614728263955-2def04594100?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Mars Rover Pathfinder II collecting soil samples on Mars',
    category: 'Mission Updates',
    author: 'Mars Mission Control',
    tags: ['Mars Rover', 'Jezero Crater', 'Soil Sampling', 'Astrobiology']
  },
  {
    id: 'custom-feat-2',
    title: "Corporate Inc. Unveils 'Project Oasis': A Plan for Martian Terraforming",
    summary: "Project Oasis outlines a multi-decade strategy to gradually transform Mars' atmosphere and surface, creating conditions more hospitable for human life and Earth-based ecosystems.",
    date: '2024-07-18',
    imageUrl: 'https://images.unsplash.com/photo-1583344438315-06a95550a0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Conceptual image of a terraformed Mars with water and greenery',
    category: 'Terraforming',
    author: 'Dr. Evelyn Reed, Head of Planetary Science',
    tags: ['Terraforming', 'Mars Atmosphere', 'Future Tech', 'Planetary Engineering']
  }
];

const customNews: NewsItem[] = [
  {
    id: 'custom-news-1',
    title: 'Breakthrough in Terraforming Tech: Oxygen Generation Prototype Success',
    summary: "Corporate Inc. scientists achieve a major milestone with a prototype device that successfully extracts and stores breathable oxygen from Martian atmospheric CO2, using a novel electrolysis process.",
    date: '2024-07-15',
    imageUrl: 'https://images.unsplash.com/photo-1632105928815-a09f35398762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Advanced scientific equipment in a futuristic lab setting',
    category: 'Research',
    tags: ['Oxygen Generation', 'Mars Research', 'Terraforming']
  },
  {
    id: 'custom-news-2',
    title: "Corporate Inc. Announces 'Mars Scholars' Program for STEM Students",
    summary: "Investing in the next generation of space explorers, we're launching a global scholarship program for university students in STEM fields focused on space exploration and Martian colonization.",
    date: '2024-07-10',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Diverse group of students in a modern university setting',
    category: 'Education',
    tags: ['Scholarship', 'STEM', 'Next Generation', 'Education Initiative']
  },
  {
    id: 'custom-news-3',
    title: "Phase 1 of Mars Orbital Station 'Gateway' Completed",
    summary: "The first habitation and docking module of our orbital station around Mars, 'Gateway One', is now operational. It will serve as a crucial staging point for surface missions and interplanetary logistics.",
    date: '2024-07-05',
    imageUrl: 'https://images.unsplash.com/photo-1637973230808-f3135803de23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Concept art of a futuristic orbital space station around Mars',
    category: 'Infrastructure',
    tags: ['Space Station', 'Mars Orbit', 'Gateway Program', 'Logistics']
  },
   {
    id: 'custom-news-4',
    title: "Deep Space Network Upgrade Boosts Mars Communication",
    summary: "Corporate Inc. has completed a major upgrade to its deep space communication network, tripling data transmission speeds to and from Mars, enhancing mission control capabilities.",
    date: '2024-06-28',
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Large satellite dishes part of a deep space network array',
    category: 'Technology',
    tags: ['Communication', 'Deep Space Network', 'Technology Upgrade']
  }
];

const customCategories = ['All', 'Mission Updates', 'Terraforming', 'Research', 'Education', 'Infrastructure', 'Technology'];

export const NewsPageWithCustomContent = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <News
            featuredNews={customFeaturedNews}
            news={customNews}
            categories={customCategories}
            pageTitle="Corporate Inc. Mars Chronicles: The Latest Breakthroughs"
            pageDescription="Explore groundbreaking news and updates from Corporate Inc. as we pave the way for humanity's future on Mars. Discover our latest missions, research, and technological advancements."
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const NewsPageEmptyState = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={commonWrapperStyle}>
          <News
            featuredNews={[]}
            news={[]}
            categories={['All', 'NoNewsCategory']} // 'All' will show featured (empty), 'NoNewsCategory' will show empty regular news
            pageTitle="No Current News | Corporate Inc."
            pageDescription="Check back soon for the latest updates from Corporate Inc.'s Mars missions."
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};