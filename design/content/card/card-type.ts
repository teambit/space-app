import type { ReactNode } from 'react';

export type CardType = {
  /**
   * The title to display in the card
   */
  title?: string;
  
  /**
   * Variant of the card appearance
   */
  variant?: 'default' | 'elevated' | 'outlined' | 'primary' | 'secondary';
  
  /**
   * Image URL to display at the top of the card
   */
  image?: string;
  
  /**
   * Alt text for the image (for accessibility)
   */
  imageAlt?: string;
  
  /**
   * Whether the card is interactive (clickable)
   */
  interactive?: boolean;
  
  /**
   * Optional custom header content
   */
  header?: ReactNode;
  
  /**
   * Optional footer content
   */
  footer?: ReactNode;
};