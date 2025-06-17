import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Flex } from './flex.js';

const commonItemStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium)',
  backgroundColor: 'var(--colors-surface-secondary)',
  border: 'var(--borders-default-width) var(--borders-default-style) var(--colors-primary-default)',
  borderRadius: 'var(--borders-radius-medium)',
  color: 'var(--colors-text-primary)',
  textAlign: 'center',
  minWidth: '100px',
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--typography-font-family)',
  fontSize: 'var(--typography-sizes-body-default)',
};

const Item = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ ...commonItemStyle, ...style }}>
    {children}
  </div>
);

const CompositionContainer = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div style={{ marginBlockEnd: 'var(--spacing-xl)', padding: 'var(--spacing-medium)', border: '1px solid var(--colors-surface-tertiary)', borderRadius: 'var(--borders-radius-large)' }}>
    <h3 style={{ fontFamily: 'var(--typography-font-family)', fontSize: 'var(--typography-sizes-heading-h5)', color: 'var(--colors-text-secondary)', marginBottom: 'var(--spacing-default)' }}>
      {title}
    </h3>
    {children}
  </div>
);

export const BasicRowFlex = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionContainer title="Basic Row Flex (Default)">
        <Flex>
          <Item>Mars Rover Alpha</Item>
          <Item>Orbital Station</Item>
          <Item>Terraforming Unit</Item>
        </Flex>
      </CompositionContainer>
    </CorporateTheme>
  </MemoryRouter>
);

export const ColumnWithGapAndAlignment = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionContainer title="Column Flex with Medium Gap and Center Alignment">
        <Flex direction="column" gap="medium" align="center" style={{ backgroundColor: 'var(--colors-surface-primary)', padding: 'var(--spacing-default)', borderRadius: 'var(--borders-radius-medium)' }}>
          <Item style={{ width: '200px' }}>Launch System</Item>
          <Item style={{ width: '250px' }}>Life Support Module</Item>
          <Item style={{ width: '150px' }}>Communication Array</Item>
        </Flex>
      </CompositionContainer>
    </CorporateTheme>
  </MemoryRouter>
);

export const JustifySpaceBetweenFlex = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionContainer title="Row Flex with Space-Between Justification">
        <Flex justify="space-between" style={{ border: '1px solid var(--colors-tertiary-default)', padding: 'var(--spacing-small)', borderRadius: 'var(--borders-radius-small)' }}>
          <Item>Mission Control</Item>
          <Item>Navigation</Item>
          <Item>Resources</Item>
        </Flex>
      </CompositionContainer>
    </CorporateTheme>
  </MemoryRouter>
);

export const WrappedFlexItems = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionContainer title="Wrapped Row Flex with Small Gap">
        <Flex wrap="wrap" gap="small" style={{ width: '350px', border: '1px dashed var(--colors-secondary-default)', padding: 'var(--spacing-small)' }}>
          <Item>Module 1</Item>
          <Item>Module 2</Item>
          <Item>Module 3 (Wider)</Item>
          <Item>Module 4</Item>
          <Item>Module 5</Item>
        </Flex>
      </CompositionContainer>
    </CorporateTheme>
  </MemoryRouter>
);

export const CustomElementFlex = () => (
  <MemoryRouter>
    <CorporateTheme>
      <CompositionContainer title="Flex as '<nav>' Element with Column Direction">
        <Flex as="nav" direction="column" gap="xs" style={{ padding: 'var(--spacing-medium)', backgroundColor: 'var(--colors-surface-tertiary)', borderRadius: 'var(--borders-radius-large)' }}>
          <a href="#home" style={{ ...commonItemStyle, textDecoration: 'none', backgroundColor: 'var(--colors-primary-default)', color: 'var(--colors-text-inverse)' }}>Home Base</a>
          <a href="#missions" style={{ ...commonItemStyle, textDecoration: 'none', backgroundColor: 'var(--colors-primary-default)', color: 'var(--colors-text-inverse)' }}>Mars Missions</a>
          <a href="#tech" style={{ ...commonItemStyle, textDecoration: 'none', backgroundColor: 'var(--colors-primary-default)', color: 'var(--colors-text-inverse)'}}>Technology</a>
        </Flex>
      </CompositionContainer>
    </CorporateTheme>
  </MemoryRouter>
);