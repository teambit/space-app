import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph } from './paragraph.js';
import styles from './paragraph.module.scss';

describe('Paragraph Component', () => {
  it('should render a default paragraph', () => {
    const { getByText } = render(<Paragraph>Hello, Corporate Inc.!</Paragraph>);
    const paragraphElement = getByText('Hello, Corporate Inc.!');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName.toLowerCase()).toBe('p');
    expect(paragraphElement).toHaveClass(styles.paragraph);
    expect(paragraphElement).toHaveClass(styles.default);
  });

  it('should apply the large size class when size is "large"', () => {
    const { getByText } = render(<Paragraph size="large">Large Text</Paragraph>);
    const paragraphElement = getByText('Large Text');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveClass(styles.paragraph);
    expect(paragraphElement).toHaveClass(styles.large);
    expect(paragraphElement.tagName.toLowerCase()).toBe('p');
  });

  it('should render as a div when element is "div"', () => {
    const { getByText } = render(<Paragraph element="div">This is a div</Paragraph>);
    const divElement = getByText('This is a div');
    expect(divElement).toBeInTheDocument();
    expect(divElement.tagName.toLowerCase()).toBe('div');
    expect(divElement).toHaveClass(styles.paragraph);
    expect(divElement).toHaveClass(styles.default);
  });
});