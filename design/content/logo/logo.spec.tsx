import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Logo } from './logo.js';
import styles from './logo.module.scss';

describe('Logo Component', () => {
  it('should render the default logo with name and slogan', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const nameElement = container.querySelector(`.${styles.name}`);
    const sloganElement = container.querySelector(`.${styles.slogan}`);

    expect(nameElement).not.toBeNull();
    expect(nameElement?.textContent).toBe('Corporate Inc.');
    expect(sloganElement).not.toBeNull();
    expect(sloganElement?.textContent).toBe('Mars Awaits');
  });

  it('should render a custom logo with provided name and slogan', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo name="Custom Corp" slogan="New Slogan" />
      </MemoryRouter>
    );

    const nameElement = container.querySelector(`.${styles.name}`);
    const sloganElement = container.querySelector(`.${styles.slogan}`);

    expect(nameElement).not.toBeNull();
    expect(nameElement?.textContent).toBe('Custom Corp');
    expect(sloganElement).not.toBeNull();
    expect(sloganElement?.textContent).toBe('New Slogan');
  });

  it('should render a minimal logo with only the SVG', () => {
    const { container } = render(
      <MemoryRouter>
        <Logo minimal />
      </MemoryRouter>
    );

    const nameElement = container.querySelector(`.${styles.name}`);
    const sloganElement = container.querySelector(`.${styles.slogan}`);
    const logoIconElement = container.querySelector('svg');

    expect(nameElement).toBeNull();
    expect(sloganElement).toBeNull();
    expect(logoIconElement).not.toBeNull();
  });
});