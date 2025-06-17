import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Footer } from './footer.js';
import { FooterLinkType } from './footer-link-type.js';

const sampleLinks: FooterLinkType[][] = [
  [
    { title: 'Corporate Inc.', isHeading: true },
    { title: 'Our Story', url: '/about' },
    { title: 'Mission to Mars', url: '/mission' },
    { title: 'Join Our Team', url: '/careers' },
    { title: 'Investor Relations', url: '/investors' }
  ],
  [
    { title: 'Technology', isHeading: true },
    { title: 'Mars Colonization Tech', url: '/technology/colonization' },
    { title: 'Advanced Propulsion', url: '/technology/propulsion' },
    { title: 'Terraforming Research', url: '/technology/terraforming' },
    { title: 'Space Habitats', url: '/technology/habitats' }
  ],
  [
    { title: 'Resources', isHeading: true },
    { title: 'Mars Chronicles (Blog)', url: '/blog' },
    { title: 'Technical Whitepapers', url: '/docs' },
    { title: 'Media Inquiries', url: '/press' },
    { title: 'Partnerships', url: '/partners' }
  ],
  [
    { title: 'Legal', isHeading: true },
    { title: 'Privacy Policy', url: '/legal/privacy' },
    { title: 'Terms of Service', url: '/legal/terms' },
    { title: 'Accessibility', url: '/legal/accessibility' }
  ]
];

export const BasicFooter = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ paddingTop: '50px', backgroundColor: 'var(--colors-surface-background)' }}>
          <Footer />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const CustomizedFooterWithSpecificLinks = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ paddingTop: '50px', backgroundColor: 'var(--colors-surface-background)' }}>
          <Footer 
            linkColumns={sampleLinks}
            copyrightText="© 2042 Corporate Inc. Building the Future on Mars."
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const FooterWithoutSocialOrAttribution = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ paddingTop: '50px', backgroundColor: 'var(--colors-surface-background)' }}>
          <Footer 
            showSocialLinks={false}
            showPhotoAttribution={false}
            copyrightText="Corporate Inc. Internal Use Only."
          />
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const FooterWithCustomSocialIconsAndContent = () => {
  const customSocials = [
    <a key="custom-x" href="https://x.com/corporateinc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--colors-primary-default)'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>,
    <a key="custom-mars" href="https://mars.gov/corporateinc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--colors-secondary-default)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
    </a>
  ];
  return (
    <MemoryRouter>
      <CorporateTheme>
        <div style={{ paddingTop: '50px', backgroundColor: 'var(--colors-surface-background)' }}>
          <Footer
            socialComponents={customSocials}
            copyrightText="Innovate. Explore. Colonize. Corporate Inc. Mars Division."
          >
            <div style={{ 
              textAlign: 'center', 
              padding: 'var(--spacing-medium) 0', 
              borderTop: '1px solid var(--borders-default-color)', 
              borderBottom: '1px solid var(--borders-default-color)',
              margin: 'var(--spacing-medium) 0',
              backgroundColor: 'var(--colors-surface-secondary)',
              borderRadius: 'var(--borders-radius-medium)'
            }}>
              <h4 style={{margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-primary-default)'}}>
                Project Ares: Phase III Update
              </h4>
              <p style={{margin: 0, fontSize: 'var(--typography-sizes-body-small)', color: 'var(--colors-text-secondary)'}}>
                First human-crewed mission scheduled for Q2 2043. 
                <a href="/mission-updates/ares-phase-3" style={{marginLeft: 'var(--spacing-xs)'}}>Learn More</a>
              </p>
            </div>
          </Footer>
        </div>
      </CorporateTheme>
    </MemoryRouter>
  );
};