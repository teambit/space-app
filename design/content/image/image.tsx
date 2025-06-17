import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type ImageProps = {
  /**
   * The source URL of the image
   */
  src: string;
  
  /**
   * Alternative text for the image, important for accessibility
   */
  alt: string;
  
  /**
   * Optional width of the image
   */
  width?: number | string;
  
  /**
   * Optional height of the image
   */
  height?: number | string;
  
  /**
   * Optional CSS class name for additional styling
   */
  className?: string;
  
  /**
   * Optional object-fit property for the image
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  
  /**
   * Optional object-position property for the image
   */
  objectPosition?: string;
  
  /**
   * Optional loading strategy ('lazy' is recommended for performance)
   */
  loading?: 'lazy' | 'eager';
  
  /**
   * Optional border radius style
   */
  borderRadius?: 'none' | 'small' | 'medium' | 'large' | 'circle';
  
  /**
   * Optional shadow effect
   */
  shadow?: 'none' | 'small' | 'medium' | 'large';
  
  /**
   * Optional callback when image is loaded
   */
  onLoad?: () => void;
  
  /**
   * Optional callback when image fails to load
   */
  onError?: () => void;
  
  /**
   * Optional inline style overrides
   */
  style?: CSSProperties;
};

/**
 * A responsive and visually appealing image component for Corporate Inc.'s website.
 * Features automatic responsive sizing, loading strategies, and visual enhancement options.
 */
export function Image({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  objectPosition,
  loading = 'lazy',
  borderRadius = 'none',
  shadow = 'none',
  onLoad,
  onError,
  style
}: ImageProps): React.JSX.Element {
  return (
    <div 
      className={classNames(
        styles.imageContainer,
        styles[`borderRadius${borderRadius.charAt(0).toUpperCase() + borderRadius.slice(1)}`],
        styles[`shadow${shadow.charAt(0).toUpperCase() + shadow.slice(1)}`],
        className
      )}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={onLoad}
        onError={onError}
        className={styles.image}
        style={{
          objectFit,
          objectPosition,
        }}
      />
    </div>
  );
}