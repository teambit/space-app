export type LogoProps = {
  /**
   * The name to display alongside the logo
   */
  name?: string;
  
  /**
   * A slogan or tagline to display below the name
   */
  slogan?: string;
  
  /**
   * URL for the logo to navigate to when clicked
   */
  href?: string;
  
  /**
   * Size of the logo SVG in pixels
   */
  size?: number;
  
  /**
   * Custom SVG source to override the default logo
   */
  src?: string;
  
  /**
   * Display only the logo without text
   */
  minimal?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
};