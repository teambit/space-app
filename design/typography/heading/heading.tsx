import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './heading.module.scss';

export type HeadingProps = {
  /**
   * The heading level (h1-h6) determining the semantic HTML element used
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * Optional visual level that can differ from the semantic level
   * For example, an h2 that visually appears as an h1
   */
  visualLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * The content of the heading
   */
  children: ReactNode;
  
  /**
   * Additional CSS class name for customization
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLHeadingElement>;

export function Heading({
  level = 2,
  visualLevel,
  children,
  className,
  style,
  ...rest
}: HeadingProps) {
  const effectiveVisualLevel = visualLevel || level;
  const headingClass = classNames(
    styles.heading,
    styles[`heading${effectiveVisualLevel}`],
    className
  );
  
  // Dynamically create the appropriate heading element based on level
  const Component = `h${level}` as any;
  
  return (
    <Component className={headingClass} style={style} {...rest}>
      {children}
    </Component>
  );
}