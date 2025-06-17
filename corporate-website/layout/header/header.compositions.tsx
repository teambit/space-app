import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Link } from '@corporate/design.navigation.link';
import { Header } from './header.js';

const LoginButton = () => (
  <a
    href="/login"
    style={{
      backgroundColor: 'var(--colors-primary-default)',
      color: 'var(--colors-text-inverse)',
      padding: 'var(--spacing-xs) var(--spacing-medium)',
      borderRadius: 'var(--borders-radius-pill)',
      fontWeight: 'var(--typography-font-weight-medium)',
      textDecoration: 'none',
      fontSize: 'var(--typography-sizes-body-default)',
      cursor: 'var(--interactions-cursor-pointer)',
      transition: 'background-color var(--interactions-transitions-duration-fast)',
      display: 'inline-block',
      lineHeight: 'var(--typography-line-height-base)',
    }}
  >
    Login
  </a>
);

const SignUpButton = () => (
  <a
    href="/signup"
    style={{
      backgroundColor: 'var(--colors-secondary-default)',
      color: 'var(--colors-text-inverse)',
      padding: 'var(--spacing-xs) var(--spacing-medium)',
      borderRadius: 'var(--borders-radius-pill)',
      fontWeight: 'var(--typography-font-weight-medium)',
      textDecoration: 'none',
      fontSize: 'var(--typography-sizes-body-default)',
      cursor: 'var(--interactions-cursor-pointer)',
      transition: 'background-color var(--interactions-transitions-duration-fast)',
      display: 'inline-block',
      lineHeight: 'var(--typography-line-height-base)',
    }}
  >
    Sign Up
  </a>
);

export const BasicHeader = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ minHeight: '150px', backgroundColor: 'var(--colors-surface-secondary)', paddingBlockStart: 'var(--spacing-large)' }}>
          <Header />
          <p style={{fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', textAlign: 'center', marginTop: 'var(--spacing-default)'}}> Default header with standard links and theme toggler.</p>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const HeaderWithActionsAndCustomLogo = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ minHeight: '150px', backgroundColor: 'var(--colors-surface-secondary)', paddingBlockStart: 'var(--spacing-large)' }}>
          <Header
            actions={[LoginButton, SignUpButton]}
            logoName="Mars Initiative"
            logoSlogan="Pioneering the Red Planet"
            logoSrc="https://raw.githubusercontent.com/tabler/tabler-icons/master/icons/rocket.svg" // Example SVG icon
            logoSize={48}
          />
          <p style={{fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', textAlign: 'center', marginTop: 'var(--spacing-default)'}}> Header with custom action buttons and a unique Mars Initiative logo.</p>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const HeaderWithCustomLinksAndNoThemeToggler = () => {
  const customNavLinks = [
    { label: 'Our Vision', href: '/vision' },
    { label: 'Colony Alpha', href: '/colony-alpha' },
    { label: 'Research', href: '/research' },
    { label: 'Partnerships', href: '/partnerships' },
  ];

  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ minHeight: '150px', backgroundColor: 'var(--colors-surface-secondary)', paddingBlockStart: 'var(--spacing-large)' }}>
          <Header
            links={customNavLinks}
            actions={[LoginButton]}
            showThemeToggler={false}
            logoName="TerraCorp"
            logoSlogan="Shaping New Worlds"
          />
          <p style={{fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', textAlign: 'center', marginTop: 'var(--spacing-default)'}}> Header with specific navigation links for TerraCorp and theme toggler hidden.</p>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const HeaderWithBannerChild = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ minHeight: '200px', backgroundColor: 'var(--colors-surface-secondary)', paddingBlockStart: 'var(--spacing-large)' }}>
          <Header
            logoSlogan="Frontier Technologies"
          >
            <div style={{
              backgroundColor: 'var(--colors-status-info-subtle)',
              color: 'var(--colors-text-primary)',
              padding: 'var(--spacing-small)',
              textAlign: 'center',
              marginTop: 'var(--spacing-medium)', // Ensures it's below the main header items
              borderRadius: 'var(--borders-radius-small)',
              border: '1px solid var(--colors-status-info-default)',
              fontFamily: 'var(--typography-font-family)',
              fontSize: 'var(--typography-sizes-body-default)'
            }}>
              Important Announcement: Join our live webinar on Martian Lava Tube Habitats! <Link href="/webinar-signup" style={{color: 'var(--colors-primary-default)', fontWeight: 'var(--typography-font-weight-semi-bold)'}}>Sign Up Now</Link>
            </div>
          </Header>
           <p style={{fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', textAlign: 'center', marginTop: 'var(--spacing-large)'}}> Header featuring an announcement banner as a child element.</p>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};