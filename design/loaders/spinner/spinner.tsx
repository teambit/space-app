import React, { ComponentType, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './spinner.module.scss';

export type SpinnerProps = {
  /**
   * Optional custom size for the spinner (in pixels)
   */
  size?: number;

  /**
   * Optional custom color for the spinner
   */
  color?: string;

  /**
   * Optional secondary color for the spinner (for gradient or dual-color effects)
   */
  secondaryColor?: string;

  /**
   * Optional text to display below the spinner
   */
  loadingText?: string;

  /**
   * Optional overlay mode to cover its parent container
   */
  overlay?: boolean;

  /**
   * Optional custom icon component to use instead of the default spinner
   */
  customIcon?: ComponentType;

  /**
   * Optional content to render inside the spinner (for composite spinners)
   */
  children?: ReactNode;

  /**
   * Optional additional class name
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
};

export function Spinner({
  size = 40,
  color,
  secondaryColor,
  loadingText,
  overlay = false,
  customIcon,
  children,
  className,
  style
}: SpinnerProps) {
  const CustomIcon = customIcon;
  
  const spinnerStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    ...style
  };
  
  const colorStyle: any = {
    ...(color && { '--spinner-color': color }),
    ...(secondaryColor && { '--spinner-secondary-color': secondaryColor })
  };

  return (
    <div 
      className={classNames(
        styles.spinnerContainer,
        { [styles.overlay]: overlay },
        className
      )}
      style={colorStyle}
    >
      <div className={styles.spinnerWrapper}>
        {CustomIcon ? (
          <CustomIcon />
        ) : (
          <div className={styles.spinner} style={spinnerStyle}>
            <div className={styles.orbitRing}></div>
            <div className={styles.planetCore}></div>
            {children}
          </div>
        )}
        
        {loadingText && (
          <div className={styles.loadingText}>{loadingText}</div>
        )}
      </div>
    </div>
  );
}