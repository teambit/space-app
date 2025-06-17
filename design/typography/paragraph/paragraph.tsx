import React from 'react';
import styles from './paragraph.module.scss';

export interface ParagraphProps {
  /**
   * The element type to render the paragraph as.
   * @default 'p'
   */
  element?: 'p' | 'div' | 'span';
  
  /**
   * The content of the paragraph.
   */
  children: React.ReactNode;
  
  /**
   * Additional CSS class name for custom styling.
   */
  className?: string;
  
  /**
   * Size variant of the paragraph.
   * @default 'default'
   */
  size?: 'large' | 'default' | 'small';
  
  /**
   * Additional inline styles for the paragraph.
   */
  style?: React.CSSProperties;
}

export function Paragraph({
  element = 'p',
  children,
  className,
  size = 'default',
  style,
}: ParagraphProps): React.JSX.Element {
  const Element = element as keyof React.JSX.IntrinsicElements;
  
  const classList = [styles.paragraph];

  if (size === 'large') {
    classList.push(styles.large);
  } else if (size === 'small') {
    classList.push(styles.small);
  } else {
    classList.push(styles.default);
  }

  if (className) {
    classList.push(className);
  }
  
  const paragraphClasses = classList.join(' ');

  return (
    <Element className={paragraphClasses} style={style}>
      {children}
    </Element>
  );
}