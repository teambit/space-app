import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './image.js';
import styles from './image.module.scss';
import { MemoryRouter } from 'react-router-dom';

describe('Image Component', () => {
  it('should render the image with src and alt attributes', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    const { container } = render(
      <MemoryRouter>
        <Image src={src} alt={alt} />
      </MemoryRouter>
    );
    const imgElement = container.querySelector('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', src);
    expect(imgElement).toHaveAttribute('alt', alt);
  });

  it('should apply custom class names to the image container', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    const className = 'custom-class';
    const { container } = render(
      <MemoryRouter>
        <Image src={src} alt={alt} className={className} />
      </MemoryRouter>
    );
    const imageContainer = container.querySelector(`.${styles.imageContainer}`);
    expect(imageContainer).toHaveClass(className);
  });

  it('should apply border radius class based on borderRadius prop', () => {
    const src = 'https://example.com/image.jpg';
    const alt = 'Example Image';
    const borderRadius = 'medium';
    const { container } = render(
      <MemoryRouter>
        <Image src={src} alt={alt} borderRadius={borderRadius} />
      </MemoryRouter>
    );
    const imageContainer = container.querySelector(`.${styles.imageContainer}`);
    expect(imageContainer).toHaveClass(styles.borderRadiusMedium);
  });
});