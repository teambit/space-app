import React from 'react';
import { render, screen } from '@testing-library/react';
import { CorporateTheme } from './corporate-theme.js';
import styles from './corporate-theme.module.scss';
import { MemoryRouter } from 'react-router-dom';

describe('CorporateTheme', () => {
  it('renders with children', () => {
    render(
      <MemoryRouter>
        <CorporateTheme>
          <div>Hello, Corporate Inc.!</div>
        </CorporateTheme>
      </MemoryRouter>
    );
    const element = screen.getByText('Hello, Corporate Inc.!');
    expect(element).toBeInTheDocument();
  });

  it('applies the corporateTheme class', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <div>Content</div>
        </CorporateTheme>
      </MemoryRouter>
    );
    const corporateThemeElement = container.querySelector(`.${styles.corporateTheme}`);
    expect(corporateThemeElement).toBeInTheDocument();
  });

  it('renders with a custom className', () => {
    const customClassName = 'custom-theme';
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme className={customClassName}>
          <div>Content</div>
        </CorporateTheme>
      </MemoryRouter>
    );
    const themeElement = container.querySelector(`.${styles.corporateTheme}`);
    expect(themeElement).toBeInTheDocument();
  });
});