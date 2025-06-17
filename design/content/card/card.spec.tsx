import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card.js';
import styles from './card.module.scss';
import { MemoryRouter } from 'react-router-dom';

describe('Card Component', () => {
  it('should render the card with title and children', () => {
    const titleText = 'Test Card Title';
    const childrenText = 'Test Card Content';
    const { container } = render(
      <MemoryRouter>
        <Card title={titleText}>{childrenText}</Card>
      </MemoryRouter>
    );

    const titleElement = container.querySelector(`.${styles.title}`);
    const childrenElement = container.querySelector(`.${styles.children}`);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement?.textContent).toBe(titleText);
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement?.textContent).toBe(childrenText);
  });

  it('should apply interactive styles when interactive prop is true', () => {
    const { container } = render(
      <MemoryRouter>
        <Card interactive>Interactive Card</Card>
      </MemoryRouter>
    );
    const cardElement = container.querySelector(`.${styles.card}`);
    expect(cardElement).toHaveClass(styles.interactive);
  });

  it('should render with a specific variant style', () => {
    const variant = 'primary';
    const { container } = render(
      <MemoryRouter>
        <Card variant={variant}>Variant Card</Card>
      </MemoryRouter>
    );
    const cardElement = container.querySelector(`.${styles.card}`);
    expect(cardElement).toHaveClass(styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`]);
  });
});