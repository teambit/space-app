import React, { forwardRef } from 'react';
import { Button } from '@corporate/design.actions.button';
import classNames from 'classnames';
import styles from './cta-button.module.scss';

export type CtaButtonProps = {
  /**
   * Button text content
   */
  children: React.ReactNode;
  
  /**
   * Function to be called when button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  
  /**
   * URL the button should navigate to when clicked
   */
  href?: string;
  
  /**
   * Whether the link points to an external resource
   */
  external?: boolean;
  
  /**
   * Visual style variant of the button
   */
  appearance?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether to show hover animation effect
   */
  animated?: boolean;
  
  /**
   * Whether to add pulsing effect to draw attention
   */
  pulsing?: boolean;
  
  /**
   * Whether the button should have a glow effect
   */
  glowing?: boolean;
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  
  /**
   * HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Additional class name for custom styling
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
};

export const CtaButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CtaButtonProps
>(({
  children,
  onClick,
  href,
  external = false,
  appearance = 'primary',
  size = 'medium',
  animated = true,
  pulsing = false,
  glowing = false,
  disabled = false,
  type = 'button',
  className,
  style
}, ref) => {
  const buttonClasses = classNames(
    styles.ctaButton,
    styles[size],
    {
      [styles.animated]: animated,
      [styles.pulsing]: pulsing,
      [styles.glowing]: glowing
    },
    className
  );

  return (
    <div className={styles.ctaButtonWrapper}>
      {pulsing && <div className={styles.pulseRing} />}
      <Button
        ref={ref}
        onClick={onClick}
        href={href}
        external={external}
        appearance={appearance}
        disabled={disabled}
        type={type}
        className={buttonClasses}
        style={style}
      >
        <span className={styles.content}>
          {children}
        </span>
        {animated && (
          <span className={styles.arrow}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 8H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </Button>
    </div>
  );
});

CtaButton.displayName = 'CtaButton';