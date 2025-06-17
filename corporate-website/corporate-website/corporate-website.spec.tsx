import { describe, it, expect } from 'vitest';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateWebsite } from './corporate-website.js';
import styles from './corporate-website.module.scss';

describe('CorporateWebsite Component', () => {
  it('renders the component with navigation links', () => {
    const { container } = render(
      <CorporateTheme>
        <MemoryRouter>
          <CorporateWebsite />
        </MemoryRouter>
      </CorporateTheme>
    );

    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();

    const navigationLinks = container.querySelectorAll('header nav ul li a');
    expect(navigationLinks.length).toBe(6);
  });

  it('renders the main content area', () => {
    const { container } = render(
      <CorporateTheme>
        <MemoryRouter>
          <CorporateWebsite />
        </MemoryRouter>
      </CorporateTheme>
    );

    const mainContent = container.querySelector(`.${styles.mainContent}`);
    expect(mainContent).toBeInTheDocument();
  });
});
