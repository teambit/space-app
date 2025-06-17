import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutUs } from './about-us.js';
import styles from './about-us.module.scss';

describe('AboutUs Component', () => {
  it('renders the hero section with correct heading', () => {
    const { container } = render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
    const heroHeading = container.querySelector(`.${styles.heroHeading}`);
    expect(heroHeading).toBeInTheDocument();
    expect((heroHeading as HTMLHeadingElement).textContent).toBe('About Corporate Inc.');
  });

  it('renders the timeline section with timeline items', () => {
    const { container } = render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
    const timelineSection = container.querySelector(`.${styles.timelineSection}`);
    expect(timelineSection).toBeInTheDocument();

    const timelineItems = container.querySelectorAll(`.${styles.timelineItem}`);
    expect(timelineItems.length).toBeGreaterThan(0);
  });

  it('renders the mission section with mission cards', () => {
    const { container } = render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
    const missionSection = container.querySelector(`.${styles.missionSection}`);
    expect(missionSection).toBeInTheDocument();

    const missionCards = container.querySelectorAll(`.${styles.missionCard}`);
    expect(missionCards.length).toBeGreaterThan(0);
  });
});