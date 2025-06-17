import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { createIcon } from './icon.js';

describe('Icon Component', () => {
  const MockSvgContent = () => <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />;
  MockSvgContent.displayName = 'MockSvg';
  const MockIcon = createIcon(MockSvgContent);

  it('should render the icon with default size and color', () => {
    const { container } = render(<MockIcon />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement?.getAttribute('width')).toBe('24');
    expect(svgElement?.getAttribute('height')).toBe('24');
    expect(svgElement?.getAttribute('fill')).toBeNull();
  });

  it('should render the icon with specified size and color', () => {
    const { container } = render(<MockIcon size={36} color="red" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement?.getAttribute('width')).toBe('36');
    expect(svgElement?.getAttribute('height')).toBe('36');
    expect(svgElement?.style.fill).toBe('red');
  });

  it('should handle onClick event', () => {
    const onClick = vi.fn();
    const { container } = render(<MockIcon onClick={onClick} />);
    const svgElement = container.querySelector('svg');
    fireEvent.click(svgElement!);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});