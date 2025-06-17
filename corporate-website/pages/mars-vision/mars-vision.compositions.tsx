import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { MarsVision } from './mars-vision.js';

export const DefaultMarsVisionPage = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <MarsVision />
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const StyledMarsVisionPage = () => {
  const customStyle: React.CSSProperties = {
    border: '2px solid var(--colors-primary-default)',
    padding: 'var(--spacing-medium)', // PageLayout already has padding, this might be excessive but demonstrates style prop
  };

  return (
    <MemoryRouter>
      <CorporateTheme>
        {/* Example of adding a custom class and style to the MarsVision component's root */}
        {/* Note: The MarsVision component itself is a PageLayout, so these styles apply to it. */}
        {/* The internal styling of MarsVision.module.scss will still take precedence for many aspects. */}
        <style>
          {`
            .custom-mars-vision-wrapper {
              box-shadow: var(--effects-shadows-x-large);
            }
          `}
        </style>
        <MarsVision
          className="custom-mars-vision-wrapper"
          style={customStyle}
        />
      </CorporateTheme>
    </MemoryRouter>
  );
};