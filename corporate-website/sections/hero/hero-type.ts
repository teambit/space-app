import type React from 'react';

export type HeroProps = {
  /**
   * Main title of the hero section
   */
  title: string;
  
  /**
   * Subtitle or description text
   */
  description: string;
  
  /**
   * URL for the background or feature image
   */
  imageUrl: string;
  
  /**
   * Alt text for the image
   */
  imageAlt: string;
  
  /**
   * Text for the call-to-action button
   */
  ctaText: string;
  
  /**
   * URL the CTA button should link to
   */
  ctaUrl: string;
  
  /**
   * Whether the CTA button links to an external site
   */
  ctaExternal?: boolean;
  
  /**
   * Visual style of the hero section
   */
  variant?: 'default' | 'darkOverlay' | 'split';
  
  /**
   * Additional CSS class name for custom styling
   */
  className?: string;
  
  /**
   * Additional inline styles for the hero container
   */
  style?: React.CSSProperties;
  
  /**
   * Function to be called when the CTA button is clicked
   */
  onCtaClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};