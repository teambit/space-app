import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from './heading.js';
import styles from './heading.module.scss';

describe('Heading Component', () => {
  it('should render the correct heading level', () => {
    render(
      <Heading level={1} data-testid="heading-element">
        Test Heading
      </Heading>
    );
    const headingElement = screen.getByTestId('heading-element');
    expect(headingElement).toBeInstanceOf(HTMLHeadingElement);
    expect(headingElement.tagName).toBe('H1');
  });

  it('should apply the correct CSS class based on visual level', () => {
    render(
      <Heading level={2} visualLevel={1} data-testid="heading-element">
        Test Heading
      </Heading>
    );
    const headingElement = screen.getByTestId('heading-element');
    expect(headingElement.classList.contains(styles.heading1)).toBe(true);
  });

  it('should render children correctly', () => {
    render(
      <Heading level={3} data-testid="heading-element">
        <span>Test Heading</span>
      </Heading>
    );
    const headingElement = screen.getByTestId('heading-element');
    expect(headingElement.textContent).toBe('Test Heading');
  });
});