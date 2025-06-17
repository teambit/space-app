import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MarsVision } from './mars-vision.js';
import styles from './mars-vision.module.scss';

describe('MarsVision Component', () => {
  it('should render the main title', () => {
    render(
      <MemoryRouter>
        <MarsVision />
      </MemoryRouter>
    );
    const titleElement = screen.getByRole('heading', { level: 1, name: /Pioneering Humanity's Future on Mars/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('should apply the marsVision class to the PageLayout', () => {
    const { container } = render(
      <MemoryRouter>
        <MarsVision />
      </MemoryRouter>
    );
    const pageLayoutElement = container.querySelector(`.${styles.marsVision}`);
    expect(pageLayoutElement).toBeInTheDocument();
  });

  it('should render the CTA button', () => {
    render(
      <MemoryRouter>
        <MarsVision />
      </MemoryRouter>
    );
    const ctaButton = screen.getByRole('button', { name: /Join the Mars Initiative/i });
    expect(ctaButton).toBeInTheDocument();
  });
});