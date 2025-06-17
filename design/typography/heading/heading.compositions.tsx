import React from 'react';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Heading } from './heading.js';

export const BasicH1 = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-medium)' }}>
      <Heading level={1}>Pioneering Mars: Our Grand Vision</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-small)' }}>
        Corporate Inc. is leading the charge to make humanity a multi-planetary species. This H1 sets the stage for our ambitious mission.
      </p>
    </div>
  </CorporateTheme>
);

export const H2StyledAsH1 = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-medium)' }}>
      <Heading level={2} visualLevel={1}>
        Core Technologies for Martian Habitation
      </Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-small)' }}>
        This heading is semantically an H2, crucial for document structure and SEO, but visually styled as an H1 to give it prominence. This flexibility is key for designing complex content hierarchies.
      </p>
    </div>
  </CorporateTheme>
);

export const AllHeadingLevels = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-medium)', backgroundColor: 'var(--colors-surface-primary)', borderRadius: 'var(--borders-radius-medium)', margin: 'var(--spacing-medium)' }}>
      <Heading level={1}>Project Ares: Roadmap to Mars</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-xxs)', marginBottom: 'var(--spacing-large)' }}>
        A hierarchical demonstration of heading levels within our mission framework.
      </p>

      <Heading level={2}>Phase I: Terraforming Infrastructure</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-xxs)', marginBottom: 'var(--spacing-default)' }}>
        Laying the groundwork for a sustainable Martian environment.
      </p>

      <Heading level={3}>Module 1.A: Atmospheric Processors</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-xxs)', marginBottom: 'var(--spacing-default)' }}>
        Development and deployment of advanced oxygen extraction systems.
      </p>

      <Heading level={4}>Sub-System: CO2 Intake & Filtration</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-xxs)', marginBottom: 'var(--spacing-default)' }}>
        Ensuring optimal efficiency and durability in the harsh Martian conditions.
      </p>

      <Heading level={5}>Component Spec: Advanced Zeolite Filters</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-xxs)', marginBottom: 'var(--spacing-default)' }}>
        Material selection and performance metrics under simulated Martian dust storms.
      </p>

      <Heading level={6}>Manufacturer Note: Requires enhanced radiation shielding</Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-xxs)' }}>
        Critical consideration for long-term deployment and astronaut safety.
      </p>
    </div>
  </CorporateTheme>
);

export const CustomStyledMarsHeading = () => (
  <CorporateTheme>
    <style>
      {`
        .mars-themed-heading {
          color: var(--colors-primary-default);
          text-shadow: 1px 1px 2px var(--colors-overlay);
          border-bottom: var(--borders-default-width) var(--borders-default-style) var(--colors-secondary-default);
          padding-bottom: var(--spacing-xs);
          display: inline-block;
        }
        .mars-themed-heading::after {
          content: ' 🚀';
          font-size: var(--typography-sizes-heading-h4); /* Match visual size */
        }
      `}
    </style>
    <div style={{ padding: 'var(--spacing-medium)' }}>
      <Heading level={2} className="mars-themed-heading">
        Join the Interstellar Journey
      </Heading>
      <p style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-body-default)', marginTop: 'var(--spacing-small)' }}>
        This heading utilizes a custom CSS class ('mars-themed-heading') to apply unique, brand-aligned styles, demonstrating easy extensibility for specific campaign or section theming within the Corporate Inc. website.
      </p>
    </div>
  </CorporateTheme>
);