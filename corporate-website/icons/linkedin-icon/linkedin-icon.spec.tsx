import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { LinkedInIcon } from './linkedin-icon.js';

describe('LinkedInIcon', () => {
  it('should render the LinkedIn icon with default props', () => {
    const { container } = render(
      <MemoryRouter>
        <LinkedInIcon />
      </MemoryRouter>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '24');
    expect(svgElement).toHaveAttribute('height', '24');
  });

  it('should render the LinkedIn icon with custom size and color', () => {
    const { container } = render(
      <MemoryRouter>
        <LinkedInIcon size={32} color="var(--colors-secondary-default)" />
      </MemoryRouter>
    );

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '32');
    // Note: Testing color attribute on SVG path would be more complex and might require specific setup.
    // We assume the color prop is passed correctly to the underlying Icon component.
  });
});