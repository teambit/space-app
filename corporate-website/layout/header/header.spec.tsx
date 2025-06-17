import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header.js';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import styles from './header.module.scss';

describe('Header Component', () => {
  it('should render the logo with default values', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Header />
        </CorporateTheme>
      </MemoryRouter>
    );

    const logo = container.querySelector(`.${styles.logoSection} a`);
    expect(logo).toBeInTheDocument();
  });

  it('should render the navigation links', () => {
    const links = [
      { label: 'Mission', href: '/mission' },
      { label: 'Technology', href: '/technology' },
    ];
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Header links={links} />
        </CorporateTheme>
      </MemoryRouter>
    );

    const missionLink = container.querySelector(`.${styles.navLink}[href="/mission"]`);
    expect(missionLink).toBeInTheDocument();
    expect((missionLink as HTMLAnchorElement).textContent).toBe('Mission');

    const technologyLink = container.querySelector(`.${styles.navLink}[href="/technology"]`);
    expect(technologyLink).toBeInTheDocument();
    expect((technologyLink as HTMLAnchorElement).textContent).toBe('Technology');
  });

  it('should render the theme toggler', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Header showThemeToggler />
        </CorporateTheme>
      </MemoryRouter>
    );

    const themeToggler = container.querySelector(`.${styles.themeToggler}`);
    expect(themeToggler).toBeInTheDocument();
  });
});