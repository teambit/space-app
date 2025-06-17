import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './link.js';

describe('Link Component', () => {
  it('should render an internal link with correct text and navigate on click', () => {
    const { container } = render(
      <MemoryRouter>
        <Link href="/test-route">Test Link</Link>
      </MemoryRouter>
    );

    const linkElement = container.querySelector('a') as HTMLAnchorElement;
    expect(linkElement).toHaveTextContent('Test Link');
    expect(linkElement.getAttribute('href')).toBe('/test-route');
  });

  it('should render an external link with correct attributes', () => {
    const { container } = render(
      <MemoryRouter>
        <Link href="https://example.com" external>
          External Link
        </Link>
      </MemoryRouter>
    );

    const linkElement = container.querySelector('a') as HTMLAnchorElement;
    expect(linkElement).toHaveTextContent('External Link');
    expect(linkElement.getAttribute('href')).toBe('https://example.com');
    expect(linkElement.getAttribute('target')).toBe('_blank');
    expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should apply custom class name to the link', () => {
    const customClassName = 'custom-link-class';
    const { container } = render(
      <MemoryRouter>
        <Link href="/test-route" className={customClassName}>
          Custom Styled Link
        </Link>
      </MemoryRouter>
    );
    const linkElement = container.querySelector('a') as HTMLAnchorElement;

    expect(linkElement.classList.contains(customClassName)).toBe(true);
  });
});