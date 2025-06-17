import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Announcements } from './announcements.js';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { AnnouncementType } from './announcement-type.js';

const mockAnnouncements: AnnouncementType[] = [
  {
    title: 'Test Announcement 1',
    summary: 'This is a test summary 1.',
    linkUrl: '/test1',
  },
  {
    title: 'Test Announcement 2',
    summary: 'This is a test summary 2.',
    linkUrl: '/test2',
  },
];

describe('Announcements Component', () => {
  it('should render title and subtitle', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <Announcements
            title="Test Title"
            subtitle="Test Subtitle"
            announcements={mockAnnouncements}
          />
        </CorporateTheme>
      </MemoryRouter>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('should render announcements', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <Announcements announcements={mockAnnouncements} />
        </CorporateTheme>
      </MemoryRouter>
    );

    expect(screen.getByText('Test Announcement 1')).toBeInTheDocument();
    expect(screen.getByText('Test Announcement 2')).toBeInTheDocument();
  });

  it('should render "View All Announcements" link when viewAllUrl is provided and announcements exceed maxDisplay', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <Announcements
            announcements={mockAnnouncements} // mockAnnouncements.length is 2
            viewAllUrl="/all"
            viewAllText="View All"
            maxDisplay={1} // Set maxDisplay to be less than announcements.length
          />
        </CorporateTheme>
      </MemoryRouter>
    );
    const viewAllLink = screen.getByRole('link', { name: 'View All' });
    expect(viewAllLink).toBeInTheDocument();
    expect(viewAllLink).toHaveAttribute('href', '/all');
  });

  it('should not render "View All Announcements" link if announcements do not exceed maxDisplay', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <Announcements
            announcements={mockAnnouncements} // mockAnnouncements.length is 2
            viewAllUrl="/all"
            viewAllText="View All"
            maxDisplay={3} // Set maxDisplay to be greater than or equal to announcements.length
          />
        </CorporateTheme>
      </MemoryRouter>
    );
    expect(screen.queryByRole('link', { name: 'View All' })).not.toBeInTheDocument();
  });

  it('should display empty state when no announcements are provided', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <Announcements
            title="No News Today"
            announcements={[]}
          />
        </CorporateTheme>
      </MemoryRouter>
    );
    expect(screen.getByText('No announcements available')).toBeInTheDocument();
    expect(screen.getByText('Check back soon for updates from Corporate Inc.')).toBeInTheDocument();
  });
});