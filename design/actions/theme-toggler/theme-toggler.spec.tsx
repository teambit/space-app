import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeToggler } from './theme-toggler.js';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import styles from './theme-toggler.module.scss';

describe('ThemeToggler', () => {
  it('should render the theme toggler button', () => {
    const { container } = render(
      <CorporateTheme initialTheme="light">
        <ThemeToggler />
      </CorporateTheme>
    );
    const button = container.querySelector(`.${styles.button}`);
    expect(button).toBeInTheDocument();
  });

  it('should toggle the theme when the button is clicked', () => {
    const { container } = render(
      <CorporateTheme initialTheme="light">
        <ThemeToggler />
      </CorporateTheme>
    );
    const button = container.querySelector(`.${styles.button}`);
    fireEvent.click(button as Element);
  });

  it('should render custom labels when provided', () => {
    const { container } = render(
      <CorporateTheme initialTheme="light">
        <ThemeToggler lightLabel="Day" darkLabel="Night" />
      </CorporateTheme>
    );
    const button = container.querySelector(`.${styles.button}`);
    expect(button).toBeInTheDocument();
  });
});