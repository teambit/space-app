import { ComponentType, forwardRef, SVGAttributes } from 'react';
import classNames from 'classnames';
import styles from './icon.module.scss';

export type IconProps = {
  /**
   * The size of the icon in pixels.
   */
  size?: number;
  
  /**
   * Additional class name for styling.
   */
  className?: string;
  
  /**
   * The color of the icon.
   * If not provided, will inherit from parent.
   */
  color?: string;
  
  /**
   * Click handler for the icon.
   */
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  
  /**
   * Style object for additional inline styling.
   */
  style?: React.CSSProperties;

  /**
   * Advisory information for the icon, typically shown as a tooltip.
   */
  title?: string;
} & Omit<SVGAttributes<SVGSVGElement>, 'width' | 'height' | 'color' | 'title'>;

/**
 * A generic icon component for Corporate Inc.'s space technology website.
 * Used as a base for all icon components to ensure consistency.
 */
export const Icon = forwardRef<SVGSVGElement, IconProps>(({
  size = 24,
  className,
  color,
  onClick,
  children,
  style,
  ...rest
}, ref) => {
  const iconStyle: React.CSSProperties = {
    ...(color && { fill: color }),
    ...style
  };

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(styles.icon, className)}
      onClick={onClick}
      style={iconStyle}
      {...rest}
    >
      {children}
    </svg>
  );
});

Icon.displayName = 'Icon';

/**
 * Creates a new icon component with the provided SVG content.
 * 
 * @param SvgContent - The SVG content to render within the icon
 * @returns A new icon component
 */
export function createIcon(SvgContent: ComponentType<Partial<IconProps>>): ComponentType<IconProps> {
  const IconComponent = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return <Icon ref={ref} {...props}><SvgContent {...props} /></Icon>;
  });
  
  IconComponent.displayName = SvgContent.displayName || 'CustomIcon';
  return IconComponent;
}