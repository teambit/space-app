import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Homepage } from './homepage.js';

describe('Homepage Component', () => {
  it('renders the hero section with a title', () => {
    render(
      <MemoryRouter>
        <Homepage heroTitle="Test Hero Title" />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Hero Title')).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(
      <MemoryRouter>
        <Homepage servicesTitle="Our Services" />
      </MemoryRouter>
    );
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  it('renders the announcements section', () => {
    render(
      <MemoryRouter>
        <Homepage announcementsTitle="Latest News" />
      </MemoryRouter>
    );
    expect(screen.getByText('Latest News')).toBeInTheDocument();
  });
});