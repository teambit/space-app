import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Technologies } from './technologies.js';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import styles from './technologies.module.scss';

describe('Technologies Component', () => {
  it('should render the Technologies component with default data', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <Technologies />
        </CorporateTheme>
      </MemoryRouter>
    );

    const headingElement = screen.getByRole('heading', { name: /Pioneering Technologies for Mars/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the Technologies component with custom class name', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Technologies className="custom-class" />
        </CorporateTheme>
      </MemoryRouter>
    );

    const technologiesPageElement = container.querySelector(`.${styles.technologiesPage}`);
    expect(technologiesPageElement).toBeInTheDocument();
    expect(technologiesPageElement).toHaveClass('custom-class');
  });

  it('should render technology cards when technologies prop is provided', () => {
    const technologiesData = [
      {
        id: 'test-tech-001',
        title: 'Test Technology 1',
        description: 'Description for Test Technology 1.',
        imageUrl: 'https://example.com/test-image-1.jpg',
        category: 'Testing',
      },
    ];

    render(
      <MemoryRouter>
        <CorporateTheme>
          <Technologies technologies={technologiesData} />
        </CorporateTheme>
      </MemoryRouter>
    );

    const technologyCardTitle = screen.getByRole('heading', { name: /Test Technology 1/i });
    expect(technologyCardTitle).toBeInTheDocument();
  });
});