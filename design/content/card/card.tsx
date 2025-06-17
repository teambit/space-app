import React from 'react';
import type { CardType } from './card-type.js';
import styles from './card.module.scss';

export interface CardProps extends CardType {
  /**
   * Content to render inside the card
   */
  children?: React.ReactNode;
  
  /**
   * Additional CSS class name for custom styling
   */
  className?: string;
  
  /**
   * Inline style properties
   */
  style?: React.CSSProperties;
  
  /**
   * Callback when card is clicked, only used when interactive is true
   */
  onClick?: () => void;
}

/**
 * A versatile card component that serves as a container for various content types.
 * Supports different variants, header/footer sections, and interactive states.
 */
export function Card({
  children,
  title,
  variant = 'default',
  header,
  footer,
  image,
  imageAlt,
  interactive = false,
  className,
  style,
  onClick
}: CardProps) {
  const classList = [
    styles.card,
    styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
  ];

  if (interactive) {
    classList.push(styles.interactive);
  }
  if (className) {
    classList.push(className);
  }
  const cardClasses = classList.join(' ');

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={cardClasses} 
      style={style}
      onClick={interactive ? handleClick : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      {(image || header) && (
        <div className={styles.cardHeader}>
          {image && (
            <div className={styles.imageContainer}>
              <img src={image} alt={imageAlt || 'Card image'} className={styles.image} />
            </div>
          )}
          {header && <div className={styles.headerContent}>{header}</div>}
        </div>
      )}
      
      <div className={styles.cardContent}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.children}>{children}</div>
      </div>
      
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
}