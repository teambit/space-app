import React from 'react';
import { render } from '@testing-library/react';
import { GithubIcon } from './github-icon.js';

describe('GithubIcon', () => {
  it('should render the GithubIcon component', () => {
    const { container } = render(<GithubIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('should set the size correctly', () => {
    const size = 48;
    const { container } = render(<GithubIcon size={size} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('width', size.toString());
    expect(svgElement).toHaveAttribute('height', size.toString());
  });
});