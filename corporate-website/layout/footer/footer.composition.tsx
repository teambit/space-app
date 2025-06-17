import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Footer } from './footer.js';
import { FooterLinkType } from './footer-link-type.js';

// Sample link columns for demonstration
const sampleLinks: FooterLinkType[][] = [
  [
    { title: 'Company', isHeading: true },
    { title: 'About Us', url: '/about' },
    { title: 'Our Mission', url: '/mission' },
    { title: 'Leadership', url: '/leadership' },
    { title: 'Careers', url: '/careers' }
  ],
  [
    { title: 'Mars Projects', isHeading: true },
    { title: 'Habitat Research', url: '/projects/habitat' },
    { title: 'Terraforming', url: '/projects/terraform' },
    { title: 'Resource Extraction', url: '/projects/resources' },
    { title: 'Life Support Systems', url: '/projects/life-support' }
  ],
  [
    { title: 'Resources', isHeading: true },
    { title: 'Research Papers', url: '/resources/research' },
    { title: 'Press Kit', url: '/resources/press' },
    { title: 'Media Library', url: '/resources/media' },
    { title: 'FAQ', url: '/resources/faq' }
  ],
  [
    { title: 'Connect', isHeading: true },
    { title: 'Contact Us', url: '/contact' },
    { title: 'Newsletter', url: '/newsletter' },
    { title: 'Events', url: '/events' },
    { title: 'Support', url: '/support' }
  ]
];

export const BasicFooter = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <Footer />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const CustomizedFooter = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <Footer 
          linkColumns={sampleLinks}
          copyrightText="© 2024 Corporate Inc. Pioneering the future on Mars."
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const FooterWithoutSocialLinks = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <Footer 
          showSocialLinks={false}
          copyrightText="© 2024 Corporate Inc. All rights reserved."
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const FooterWithCustomContent = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <Footer>
          <div style={{ 
            padding: 'var(--spacing-medium)',
            backgroundColor: 'var(--colors-surface-secondary)',
            borderRadius: 'var(--borders-radius-medium)',
            marginBottom: 'var(--spacing-medium)'
          }}>
            <h3 style={{ 
              margin: '0 0 var(--spacing-small) 0',
              fontSize: 'var(--typography-sizes-heading-h4)',
              color: 'var(--colors-primary-default)'
            }}>
              Join Our Mars Pioneer Program
            </h3>
            <p style={{ 
              margin: '0 0 var(--spacing-small) 0',
              fontSize: 'var(--typography-sizes-body-default)'
            }}>
              Be among the first humans to set foot on the Red Planet.
              Subscribe to our newsletter for updates on our Mars colonization progress.
            </p>
            <div style={{ 
              display: 'flex',
              gap: 'var(--spacing-small)',
              marginTop: 'var(--spacing-medium)'
            }}>
              <input 
                type="email"
                placeholder="Your email address"
                style={{
                  padding: 'var(--spacing-small)',
                  borderRadius: 'var(--borders-radius-small)',
                  border: 'var(--borders-default-width) var(--borders-default-style) var(--borders-default-color)',
                  flex: '1'
                }}
              />
              <button style={{
                padding: 'var(--spacing-small) var(--spacing-medium)',
                backgroundColor: 'var(--colors-primary-default)',
                color: 'var(--colors-text-inverse)',
                border: 'none',
                borderRadius: 'var(--borders-radius-small)',
                fontWeight: 'var(--typography-font-weight-medium)',
                cursor: 'pointer'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </Footer>
      </CorporateTheme>
    </MemoryRouter>
  );
};