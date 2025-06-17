import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './spinner.js';
import styles from './spinner.module.scss';

describe('Spinner Component', () => {
  it('should render the default spinner', () => {
    const { container } = render(<Spinner />);
    const spinnerElement = container.querySelector(`.${styles.spinner}`);
    expect(spinnerElement).toBeInTheDocument();
  });

  it('should render the spinner with loading text', () => {
    render(<Spinner loadingText="Loading..." />);
    const loadingTextElement = screen.getByText('Loading...');
    expect(loadingTextElement).toBeInTheDocument();
  });

  it('should apply overlay class when overlay prop is true', () => {
    const { container } = render(<Spinner overlay />);
    const spinnerContainer = container.querySelector(`.${styles.spinnerContainer}`);
    expect(spinnerContainer).toHaveClass(styles.overlay);
  });
});