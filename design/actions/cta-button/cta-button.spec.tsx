import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CtaButton } from './cta-button.js';
import styles from './cta-button.module.scss';

describe('CtaButton', () => {
  it('should render the button with the correct text', () => {
    const { container } = render(<CtaButton>Explore Mars</CtaButton>, { wrapper: MemoryRouter });
    const button = container.querySelector(`.${styles.ctaButton}`);
    expect(button).toHaveTextContent('Explore Mars');
  });

  it('should apply the correct class based on the size prop', () => {
    const { container } = render(<CtaButton size="large">Large Button</CtaButton>, { wrapper: MemoryRouter });
    const button = container.querySelector(`.${styles.ctaButton}`);
    expect(button).toHaveClass(styles.large);
  });
});
