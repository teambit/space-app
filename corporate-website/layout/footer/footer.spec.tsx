import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from './footer.js';
import styles from './footer.module.scss';

describe('Footer Component', () => {
  it('should render the copyright text', () => {
    const copyrightText = '© 2024 Corporate Inc.';
    render(
      <MemoryRouter>
        <Footer copyrightText={copyrightText} />
      </MemoryRouter>
    );
    const copyrightElement = screen.getByText(copyrightText);
    expect(copyrightElement).toBeInTheDocument();
  });

  it('should render the default links when no links are passed', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const companyHeading = screen.getByText('Company');
    expect(companyHeading).toBeInTheDocument();
  });

  it('should not render social links when showSocialLinks is false', () => {
    render(
      <MemoryRouter>
        <Footer showSocialLinks={false} />
      </MemoryRouter>
    );
    const socialLinksElement = document.querySelector(`.${styles.socialLinks}`);
    expect(socialLinksElement).toBeNull();
  });
});