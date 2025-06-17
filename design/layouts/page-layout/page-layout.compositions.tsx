import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PageLayout } from './page-layout.js';
import type { TabItem } from '@corporate/design.navigation.tabs';
import type { MetaTag } from './meta-tag-type.js';

const commonTextStyle = {
  fontSize: 'var(--typography-sizes-body-default)',
  lineHeight: 'var(--typography-line-height-base)',
  color: 'var(--colors-text-secondary)',
  fontFamily: 'var(--typography-font-family)',
};

const headingStyleH1 = {
  fontSize: 'var(--typography-sizes-heading-h1)',
  color: 'var(--colors-text-primary)',
  marginBottom: 'var(--spacing-default)',
  fontFamily: 'var(--typography-font-family)',
  fontWeight: 'var(--typography-font-weight-bold)',
};

const headingStyleH3 = {
  fontSize: 'var(--typography-sizes-heading-h3)',
  color: 'var(--colors-primary-default)',
  marginBottom: 'var(--spacing-small)',
  fontFamily: 'var(--typography-font-family)',
  fontWeight: 'var(--typography-font-weight-semi-bold)',
};

export const BasicPageLayout = () => (
  <MemoryRouter>
    <PageLayout
      title="The Martian Frontier - Corporate Inc."
      pageContent={
        <div style={{ padding: 'var(--spacing-medium)' }}>
          <h1 style={headingStyleH1}>The Martian Frontier</h1>
          <p style={{ ...commonTextStyle, fontSize: 'var(--typography-sizes-body-large)', marginBottom: 'var(--spacing-medium)' }}>
            Corporate Inc. is at the forefront of space exploration, dedicated to establishing a sustainable human presence on Mars. Our vision is to transform the Red Planet into a new home for humanity.
          </p>
          <p style={commonTextStyle}>
            This page layout component provides the foundational structure for our digital experiences, ensuring consistency and a high-tech aesthetic across all our platforms. We leverage advanced space technologies and a robust design system to project our pioneering spirit.
          </p>
        </div>
      }
    />
  </MemoryRouter>
);

const SideNavigationContent = () => (
  <div style={{
    padding: 'var(--spacing-medium)',
    backgroundColor: 'var(--colors-surface-secondary)',
    borderRadius: 'var(--borders-radius-medium)',
    height: '100%',
    boxSizing: 'border-box'
  }}>
    <h2 style={{ 
        fontSize: 'var(--typography-sizes-heading-h4)', 
        color: 'var(--colors-text-primary)', 
        marginBottom: 'var(--spacing-medium)',
        fontFamily: 'var(--typography-font-family)',
        fontWeight: 'var(--typography-font-weight-semi-bold)',
    }}>
      Mars Initiatives
    </h2>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--typography-font-family)' }}>
      {['Ares Program', 'Olympus Mons Base', 'Terraforming Initiative', 'Research Division', 'Colonial Infrastructure'].map(item => (
         <li key={item} style={{ marginBottom: 'var(--spacing-small)' }}>
            <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} style={{ 
                textDecoration: 'none', 
                color: 'var(--colors-primary-default)', 
                fontSize: 'var(--typography-sizes-body-default)',
                display: 'block',
                padding: 'var(--spacing-xs) 0',
            }}>
              {item}
            </a>
        </li>
      ))}
    </ul>
  </div>
);

export const PageWithSideNavigation = () => (
  <MemoryRouter>
    <PageLayout
      title="Strategic Missions - Corporate Inc."
      sideNavigation={<SideNavigationContent />}
      pageContent={
        <div style={{ padding: 'var(--spacing-medium)' }}>
          <h1 style={headingStyleH1}>Our Strategic Missions</h1>
          <p style={{ ...commonTextStyle, fontSize: 'var(--typography-sizes-body-large)', marginBottom: 'var(--spacing-large)' }}>
            Corporate Inc. undertakes a series of interconnected missions to achieve our goal of Martian colonization. Each program is a critical step towards a self-sustaining civilization on Mars, powered by cutting-edge space technology.
          </p>
          <div style={{ 
            marginTop: 'var(--spacing-large)', 
            padding: 'var(--spacing-medium)', 
            backgroundColor: 'var(--colors-surface-primary)', 
            borderRadius: 'var(--borders-radius-medium)',
            boxShadow: 'var(--effects-shadows-small)'
          }}>
            <h3 style={headingStyleH3}>Ares Program: Advanced Propulsion</h3>
            <p style={commonTextStyle}>
              Focuses on the development of next-generation launch systems and interplanetary transport capable of carrying significant payloads and crew to Mars efficiently and safely. This includes research into fusion rockets and solar sails.
            </p>
          </div>
           <div style={{ 
            marginTop: 'var(--spacing-medium)', 
            padding: 'var(--spacing-medium)', 
            backgroundColor: 'var(--colors-surface-primary)', 
            borderRadius: 'var(--borders-radius-medium)',
            boxShadow: 'var(--effects-shadows-small)'
          }}>
            <h3 style={headingStyleH3}>Olympus Mons Base: First Permanent Outpost</h3>
            <p style={commonTextStyle}>
              The establishment of a permanent, self-sufficient research base near Olympus Mons. This base will serve as a hub for geological studies, resource extraction, and preparations for larger-scale colonization.
            </p>
          </div>
        </div>
      }
    />
  </MemoryRouter>
);

const marsOutpostTabs: TabItem[] = [
  {
    id: 'outpost-alpha',
    label: 'Outpost Alpha',
    content: (
      <div style={{ padding: 'var(--spacing-medium)', minHeight: '250px', backgroundColor: 'var(--colors-surface-primary)', borderRadius: 'var(--borders-radius-medium)' }}>
        <h3 style={headingStyleH3}>Outpost Alpha: The Pioneer Habitation</h3>
        <p style={commonTextStyle}>
          Outpost Alpha is our first operational habitat on Mars, designed for long-duration stays and initial geological surveys. It features state-of-the-art life support, 3D-printed structures from Martian regolith, and advanced radiation shielding.
        </p>
      </div>
    ),
  },
  {
    id: 'outpost-beta',
    label: 'Outpost Beta',
    content: (
      <div style={{ padding: 'var(--spacing-medium)', minHeight: '250px', backgroundColor: 'var(--colors-surface-primary)', borderRadius: 'var(--borders-radius-medium)' }}>
        <h3 style={headingStyleH3}>Outpost Beta: R&D Hub</h3>
        <p style={commonTextStyle}>
          Scheduled for completion in 2045, Outpost Beta will serve as the primary Research & Development center on Mars. Its focus includes in-situ resource utilization (ISRU), advanced agriculture in controlled environments, and testing terraforming technologies.
        </p>
      </div>
    ),
  },
  {
    id: 'research-labs',
    label: 'Central Research Labs',
    content: (
      <div style={{ padding: 'var(--spacing-medium)', minHeight: '250px', backgroundColor: 'var(--colors-surface-primary)', borderRadius: 'var(--borders-radius-medium)' }}>
        <h3 style={headingStyleH3}>Advanced Martian Laboratories</h3>
        <p style={commonTextStyle}>
          Our central research labs are equipped with cutting-edge instrumentation to study Martian geology, astrobiology, atmospheric sciences, and the potential for past or present indigenous life. These labs are critical for understanding Mars and ensuring sustainable colonization.
        </p>
      </div>
    ),
  },
];

export const PageWithTabsNavigation = () => (
  <MemoryRouter>
    <PageLayout
      title="Martian Research Outposts - Corporate Inc."
      showTabs={true}
      tabs={marsOutpostTabs}
      tabsVariant="pills"
      tabsAlignment="center"
    />
  </MemoryRouter>
);

const customMetaTags: MetaTag[] = [
  { name: 'og:title', content: 'Join the Mars Initiative with Corporate Inc.' },
  { name: 'og:description', content: 'Corporate Inc. is pioneering Mars colonization. Explore careers and help shape the future of humanity.' },
  { name: 'og:image', content: 'https://example.com/images/mars-og-image.jpg' }, // Placeholder
  { name: 'twitter:card', content: 'summary_large_image' },
];

export const PageWithCustomSEOAndAction = () => (
  <MemoryRouter>
    <PageLayout
      title="Join the Mars Initiative - Corporate Inc."
      description="Become a part of the mission to colonize Mars. Explore opportunities at Corporate Inc. to build humanity's future among the stars."
      keywords="Mars careers, space technology jobs, Corporate Inc. hiring, Martian colony, aerospace engineering, interplanetary exploration"
      metaTags={customMetaTags}
      pageContent={
        <div style={{ padding: 'var(--spacing-large)', textAlign: 'center' as const }}>
          <h1 style={{ 
            fontSize: 'var(--typography-sizes-display-medium)', 
            color: 'var(--colors-primary-default)', 
            marginBottom: 'var(--spacing-default)',
            fontFamily: 'var(--typography-font-family)',
            fontWeight: 'var(--typography-font-weight-bold)',
           }}>
            Shape the Future: Build Mars with Us
          </h1>
          <p style={{ 
            ...commonTextStyle,
            fontSize: 'var(--typography-sizes-heading-h5)', 
            maxWidth: '700px', 
            margin: '0 auto var(--spacing-large) auto',
            color: 'var(--colors-text-primary)',
            }}>
            Corporate Inc. is seeking passionate engineers, scientists, technicians, and visionaries to join our ambitious mission to populate Mars. Your expertise can help humanity take its next giant leap.
          </p>
          <button style={{
            padding: 'var(--spacing-medium) var(--spacing-xl)',
            fontSize: 'var(--typography-sizes-body-large)',
            fontWeight: 'var(--typography-font-weight-semi-bold)',
            color: 'var(--colors-text-inverse) !important',
            backgroundColor: 'var(--colors-primary-default)',
            border: 'none',
            borderRadius: 'var(--borders-radius-pill)',
            cursor: 'var(--interactions-cursor-pointer)',
            transition: 'background-color var(--interactions-transitions-duration-fast) var(--interactions-transitions-easing-ease-out), transform var(--interactions-transitions-duration-fast)',
            fontFamily: 'var(--typography-font-family)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--colors-primary-hover)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--colors-primary-default)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            Explore Career Opportunities
          </button>
        </div>
      }
    />
  </MemoryRouter>
);