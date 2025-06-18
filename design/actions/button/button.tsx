import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Link } from '@corporate/design.navigation.link';
import type { ButtonAppearance, ButtonHTMLType } from './button-type.js';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * Content to be displayed inside the button
   */
  children: React.ReactNode;
  
  /**
   * Function to be called when button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  
  /**
   * URL the button should navigate to when clicked
   * If provided, renders as a Link component
   */
  href?: string;
  
  /**
   * Whether the button should be disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the link points to an external resource
   * Only applies when href is provided
   */
  external?: boolean;
  
  /**
   * HTML button type attribute
   */
  type?: ButtonHTMLType;
  
  /**
   * Visual style variant of the button
   */
  appearance?: ButtonAppearance;
  
  /**
   * Additional class name for custom styling
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
};

/**
 * A versatile and accessible button component for Corporate Inc.'s website
 * that prioritizes user experience and visual consistency with a modern,
 * high-tech aesthetic suitable for a space technology company.
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      onClick,
      href,
      disabled = false,
      external = false,
      type = 'button',
      appearance = 'primary',
      className,
      style,
    },
    ref
  ) => {
    const buttonClasses = classNames(
      styles.button,
      styles[appearance],
      className
    );

    // If href is provided, render as a Link
    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          external={external}
          onClick={onClick as (event: React.MouseEvent<HTMLAnchorElement>) => void}
          className={buttonClasses}
          style={style}
        >
          {children}
        </Link>
      );
    }

    // Otherwise render as a button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick as (event: React.MouseEvent<HTMLButtonElement>) => void}
        className={buttonClasses}
        style={style}
      >
        {children}
      </button>
    );
  }
);
