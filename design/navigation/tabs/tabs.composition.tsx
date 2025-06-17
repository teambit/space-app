import React from 'react';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Tabs, type TabItem } from './tabs.js';

const commonTabStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium)',
  color: 'var(--colors-text-primary)',
  fontFamily: 'var(--typography-font-family)',
  minHeight: '150px',
};

const marsExplorationTabs: TabItem[] = [
  {
    id: 'mission-overview',
    label: 'Mission Overview',
    content: (
      <div style={commonTabStyle}>
        <h3 style={{ fontSize: 'var(--typography-sizes-heading-h4)', color: 'var(--colors-primary-default)', marginBottom: 'var(--spacing-small)' }}>
          Project Ares: Colonizing Mars
        </h3>
        <p style={{ fontSize: 'var(--typography-sizes-body-default)', lineHeight: 'var(--typography-line-height-base)' }}>
          Corporate Inc. is leading the charge in humanity's next giant leap: establishing a sustainable presence on Mars. Our mission encompasses advanced research, technological development, and the pioneering spirit needed to overcome the challenges of interplanetary colonization.
        </p>
      </div>
    ),
  },
  {
    id: 'technology',
    label: 'Our Technology',
    content: (
      <div style={commonTabStyle}>
        <h3 style={{ fontSize: 'var(--typography-sizes-heading-h4)', color: 'var(--colors-primary-default)', marginBottom: 'var(--spacing-small)' }}>
          Cutting-Edge Spacecraft & Habitats
        </h3>
        <p style={{ fontSize: 'var(--typography-sizes-body-default)', lineHeight: 'var(--typography-line-height-base)' }}>
          We are developing next-generation rockets, terraforming equipment, and self-sustaining habitats. Our focus is on modular design, advanced life support systems, and autonomous robotics to ensure the success and safety of future Martian inhabitants.
        </p>
      </div>
    ),
  },
  {
    id: 'timeline',
    label: 'Project Timeline',
    content: (
      <div style={commonTabStyle}>
        <h3 style={{ fontSize: 'var(--typography-sizes-heading-h4)', color: 'var(--colors-primary-default)', marginBottom: 'var(--spacing-small)' }}>
          Roadmap to the Red Planet
        </h3>
        <ul style={{ fontSize: 'var(--typography-sizes-body-default)', lineHeight: 'var(--typography-line-height-base)', paddingLeft: 'var(--spacing-medium)' }}>
          <li style={{ marginBottom: 'var(--spacing-xs)'}}>Phase 1: Orbital Research Station (2030)</li>
          <li style={{ marginBottom: 'var(--spacing-xs)'}}>Phase 2: First Robotic Landing & Site Prep (2035)</li>
          <li style={{ marginBottom: 'var(--spacing-xs)'}}>Phase 3: Manned Mission & Base Establishment (2040)</li>
          <li style={{ marginBottom: 'var(--spacing-xs)'}}>Phase 4: Colony Expansion (2050 onwards)</li>
        </ul>
      </div>
    ),
    disabled: true,
  },
  {
    id: 'join-us',
    label: 'Join Us',
    content: (
      <div style={commonTabStyle}>
        <h3 style={{ fontSize: 'var(--typography-sizes-heading-h4)', color: 'var(--colors-primary-default)', marginBottom: 'var(--spacing-small)' }}>
          Be Part of History
        </h3>
        <p style={{ fontSize: 'var(--typography-sizes-body-default)', lineHeight: 'var(--typography-line-height-base)' }}>
          Corporate Inc. seeks brilliant minds and bold spirits. Explore career opportunities, investment partnerships, or academic collaborations to help us build the future on Mars.
        </p>
      </div>
    ),
  },
];


export const BasicTabs = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-large)' }}>
      <Tabs tabs={marsExplorationTabs.filter(tab => !tab.disabled)} />
    </div>
  </CorporateTheme>
);

export const CenteredPillTabs = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-large)' }}>
      <Tabs
        tabs={marsExplorationTabs.filter(tab => tab.id !== 'timeline')}
        alignment="center"
        variant="pills"
        onTabChange={(index, id) => console.log('Pill tab changed:', index, id)}
      />
    </div>
  </CorporateTheme>
);

export const BoxedTabsWithDisabled = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-large)' }}>
      <Tabs
        tabs={marsExplorationTabs}
        variant="boxed"
        defaultActiveIndex={0}
      />
    </div>
  </CorporateTheme>
);


export const UnderlinedTabsRightAligned = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-large)' }}>
      <Tabs
        tabs={marsExplorationTabs.slice(0, 2)}
        variant="underlined"
        alignment="right"
        defaultActiveIndex={1}
      />
    </div>
  </CorporateTheme>
);