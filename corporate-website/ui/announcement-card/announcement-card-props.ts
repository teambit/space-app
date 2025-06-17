import { CardType } from '@corporate/design.content.card';

export interface AnnouncementCardProps {
  /**
   * The title of the announcement
   */
  title: string;
  
  /**
   * Brief summary or description of the announcement
   */
  summary: string;
  
  /**
   * Date of the announcement (ISO string format)
   */
  date?: string;
  
  /**
   * URL to redirect to when clicking the announcement card or read more link
   */
  linkUrl: string;
  
  /**
   * Text to display for the link
   * @default "Read More"
   */
  linkText?: string;
  
  /**
   * URL of the image to display
   */
  imageUrl?: string;
  
  /**
   * Variant of the card appearance
   * @default "default"
   */
  variant?: CardType['variant'];
  
  /**
   * Additional CSS class name for custom styling
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}