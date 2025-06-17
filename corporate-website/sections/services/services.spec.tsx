import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Services } from './services.js';
import styles from './services.module.scss';

describe('Services Component', () => {
  it('should render with default props', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Services />
        </CorporateTheme>
      </MemoryRouter>
    );

    const sectionElement = container.querySelector(`.${styles.servicesSection}`);
    expect(sectionElement).toBeInTheDocument();

    const cardElements = container.querySelectorAll(`.${styles.serviceCard}`);
    expect(cardElements.length).toBeGreaterThan(0);
  });

  it('should render with custom title and subtitle', () => {
    const titleText = 'Custom Title';
    const subtitleText = 'Custom Subtitle';

    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Services title={titleText} subtitle={subtitleText} />
        </CorporateTheme>
      </MemoryRouter>
    );
    const sectionElement = container.querySelector(`.${styles.servicesSection}`);
    expect(sectionElement).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: titleText })).toBeInTheDocument();
    expect(screen.getByText(subtitleText)).toBeInTheDocument();
  });

  it('should apply a custom class name to the section', () => {
    const customClassName = 'custom-services-section';
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Services className={customClassName} />
        </CorporateTheme>
      </MemoryRouter>
    );

    const sectionElement = container.querySelector(`.${customClassName}`);
    expect(sectionElement).toBeInTheDocument();
  });
});