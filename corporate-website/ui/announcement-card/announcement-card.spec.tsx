import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AnnouncementCard } from './announcement-card.js';
import styles from './announcement-card.module.scss';

describe('AnnouncementCard', () => {
  const testProps = {
    title: 'Test Announcement',
    summary: 'This is a test summary.',
    date: '2024-01-01T00:00:00Z',
    linkUrl: '/test-link',
    linkText: 'Test Link',
    imageUrl: 'test-image.jpg',
    variant: 'default' as const,
  };

  it('renders the AnnouncementCard with correct content', () => {
    const { container } = render(
      <MemoryRouter>
        <AnnouncementCard {...testProps} />
      </MemoryRouter>
    );

    const titleElement = container.querySelector(`.${styles.title}`);
    expect(titleElement).toHaveTextContent('Test Announcement');

    const summaryElement = container.querySelector(`.${styles.summary}`);
    expect(summaryElement).toHaveTextContent('This is a test summary.');

    const linkElement = container.querySelector(`.${styles.link}`);
    expect(linkElement).toHaveTextContent('Test Link');
  });

  it('formats the date correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <AnnouncementCard {...testProps} />
      </MemoryRouter>
    );
    const dateElement = container.querySelector(`.${styles.date}`);
    expect(dateElement).toHaveTextContent('January 1, 2024');
  });

  it('renders the image when imageUrl is provided', () => {
    render(
      <MemoryRouter>
        <AnnouncementCard {...testProps} />
      </MemoryRouter>
    );
    const image = screen.getByAltText('Test Announcement');
    expect((image as HTMLImageElement).src).toContain('test-image.jpg');
  });
});