import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { Hero } from './hero.js';
import styles from './hero.module.scss';

describe('Hero Component', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    imageUrl: 'test-image.jpg',
    imageAlt: 'Test Image Alt',
    ctaText: 'Test CTA',
    ctaUrl: '/test',
    onCtaClick: vi.fn(),
  };

  beforeEach(() => {
    // Reset the mock before each test
    mockProps.onCtaClick.mockClear();
  });

  it('should render the hero component with provided props', () => {
    const { container } = render(
      <MemoryRouter>
        <Hero {...mockProps} />
      </MemoryRouter>
    );

    const titleElement = container.querySelector(`.${styles.title}`);
    expect(titleElement).toHaveTextContent('Test Title');

    const descriptionElement = container.querySelector(`.${styles.description}`);
    expect(descriptionElement).toHaveTextContent('Test Description');
  });

  it('should call onCtaClick when the CTA button is clicked', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Hero {...mockProps} />
      </MemoryRouter>
    );

    // The CtaButton component renders a <button> element internally when no href is passed to it.
    // The mockProps.ctaText is the content of this button.
    const ctaButtonElement = getByRole('button', { name: mockProps.ctaText });
    fireEvent.click(ctaButtonElement);
    expect(mockProps.onCtaClick).toHaveBeenCalledTimes(1);
  });

  it('should render the hero component with darkOverlay variant', () => {
    const { container, getByText } = render( 
      <MemoryRouter>
        <Hero {...mockProps} variant="darkOverlay" />
      </MemoryRouter>
    );
    // The Hero component's root element receives the variant class.
    // container.firstChild refers to the <section> element rendered by Hero.
    expect(container.firstChild).toHaveClass(styles.darkOverlay);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('should call onCtaClick when CTA button is clicked and no ctaUrl is provided', () => {
    const propsWithoutUrl = { ...mockProps, ctaUrl: '' }; // Ensure ctaUrl is undefined or empty string based on HeroProps
    const { getByRole } = render(
      <MemoryRouter>
        <Hero {...propsWithoutUrl} />
      </MemoryRouter>
    );
    const ctaButtonElement = getByRole('button', { name: propsWithoutUrl.ctaText });
    fireEvent.click(ctaButtonElement);
    expect(propsWithoutUrl.onCtaClick).toHaveBeenCalledTimes(1);
  });
});