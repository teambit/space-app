import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SectionLayout } from './section-layout.js';
import styles from './section-layout.module.scss';
import { Paragraph } from '@corporate/design.typography.paragraph';

describe('SectionLayout', () => {
  it('should render title and subtitle', () => {
    const { container } = render(
      <MemoryRouter>
        <SectionLayout title="Test Title" subtitle="Test Subtitle">
          <div>Test Content</div>
        </SectionLayout>
      </MemoryRouter>
    );

    const titleElement = container.querySelector(`.${styles.title}`);
    const subtitleElement = container.querySelector(`.${styles.subtitle}`);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Test Title');
    expect(subtitleElement).toHaveTextContent('Test Subtitle');
  });

  it('should apply the correct alignment class', () => {
    const { container } = render(
      <MemoryRouter>
        <SectionLayout title="Test Title" subtitle="Test Subtitle" alignment="center">
          <div>Test Content</div>
        </SectionLayout>
      </MemoryRouter>
    );

    const sectionElement = container.querySelector(`.${styles.section}`);
    expect(sectionElement).toHaveClass(styles.alignmentCenter);
  });

  it('should render children content', () => {
    const { container } = render(
      <MemoryRouter>
        <SectionLayout title="Test Title" subtitle="Test Subtitle">
          <Paragraph>Test Content</Paragraph>
        </SectionLayout>
      </MemoryRouter>
    );

    const contentElement = container.querySelector(`.${styles.content}`);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent('Test Content');
  });
});