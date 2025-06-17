import React from 'react';
import classNames from 'classnames';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import styles from './section-layout.module.scss';

export type SectionLayoutProps = {
  /**
   * The main title of the section
   */
  title?: string;
  
  /**
   * Optional subtitle to provide additional context
   */
  subtitle?: string;
  
  /**
   * Optional caption displayed above the title
   */
  caption?: string;
  
  /**
   * The main content of the section
   */
  children: React.ReactNode;
  
  /**
   * Optional alignment for the section content
   * @default 'left'
   */
  alignment?: 'left' | 'center' | 'right';
  
  /**
   * Optional background variant for the section
   * @default 'default'
   */
  background?: 'default' | 'primary' | 'secondary' | 'tertiary';
  
  /**
   * Optional padding size for the section
   * @default 'default'
   */
  padding?: 'small' | 'default' | 'large';
  
  /**
   * Optional full width setting to extend beyond content width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Optional custom className for additional styling
   */
  className?: string;
  
  /**
   * Optional custom styles
   */
  style?: React.CSSProperties;
};

export function SectionLayout({
  title,
  subtitle,
  caption,
  children,
  alignment = 'left',
  background = 'default',
  padding = 'default',
  fullWidth = false,
  className,
  style
}: SectionLayoutProps) {
  const sectionClasses = classNames(
    styles.section,
    styles[`alignment${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`],
    styles[`background${background.charAt(0).toUpperCase() + background.slice(1)}`],
    styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
    {
      [styles.fullWidth]: fullWidth
    },
    className
  );

  return (
    <section className={sectionClasses} style={style}>
      <div className={styles.container}>
        {(caption || title || subtitle) && (
          <header className={styles.header}>
            {caption && (
              <div className={styles.caption}>
                <Paragraph size="small" element="span">{caption}</Paragraph>
              </div>
            )}
            
            {title && (
              <Heading level={2} className={styles.title}>{title}</Heading>
            )}
            
            {subtitle && (
              <Paragraph size="large" className={styles.subtitle}>{subtitle}</Paragraph>
            )}
          </header>
        )}
        
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}