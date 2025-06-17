import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './flex.module.scss';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
export type FlexGap = 'xxs' | 'xs' | 'small' | 'default' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl';

export type FlexProps = {
  /**
   * The children to be arranged in the flex container
   */
  children?: ReactNode;
  
  /**
   * The direction of the flex container
   * @default 'row'
   */
  direction?: FlexDirection;
  
  /**
   * Controls whether the flex items wrap onto multiple lines
   * @default 'nowrap'
   */
  wrap?: FlexWrap;
  
  /**
   * Defines how flex items are distributed along the main axis
   * @default 'flex-start'
   */
  justify?: FlexJustify;
  
  /**
   * Defines how flex items are aligned along the cross axis
   * @default 'stretch'
   */
  align?: FlexAlign;
  
  /**
   * Defines the space between flex items
   * @default 'default'
   */
  gap?: FlexGap;
  
  /**
   * Class name for additional styling
   */
  className?: string;
  
  /**
   * Inline CSS properties for customizing the flex container
   */
  style?: React.CSSProperties;
  
  /**
   * HTML element type for the container
   * @default 'div'
   */
  as?: keyof React.JSX.IntrinsicElements;
  
  /**
   * Makes the container behave as an inline-flex element
   * @default false
   */
  inline?: boolean;
  
  /**
   * Fills the available width of the parent container
   * @default true
   */
  fullWidth?: boolean;
};

const directionClassMap: Record<FlexDirection, string> = {
  'row': styles.directionRow,
  'column': styles.directionColumn,
  'row-reverse': styles.directionRowReverse,
  'column-reverse': styles.directionColumnReverse,
};

const wrapClassMap: Record<FlexWrap, string> = {
  'nowrap': styles.wrapNowrap,
  'wrap': styles.wrapWrap,
  'wrap-reverse': styles.wrapWrapReverse,
};

const justifyClassMap: Record<FlexJustify, string> = {
  'flex-start': styles.justifyFlexStart,
  'flex-end': styles.justifyFlexEnd,
  'center': styles.justifyCenter,
  'space-between': styles.justifySpaceBetween,
  'space-around': styles.justifySpaceAround,
  'space-evenly': styles.justifySpaceEvenly,
};

const alignClassMap: Record<FlexAlign, string> = {
  'flex-start': styles.alignFlexStart,
  'flex-end': styles.alignFlexEnd,
  'center': styles.alignCenter,
  'stretch': styles.alignStretch,
  'baseline': styles.alignBaseline,
};

const gapClassMap: Record<FlexGap, string> = {
  'xxs': styles.gapXxs,
  'xs': styles.gapXs,
  'small': styles.gapSmall,
  'default': styles.gapDefault,
  'medium': styles.gapMedium,
  'large': styles.gapLarge,
  'xl': styles.gapXl,
  'xxl': styles.gapXxl,
  'xxxl': styles.gapXxxl,
};

export const Flex = forwardRef<HTMLElement, FlexProps>(
  (
    {
      children,
      direction = 'row',
      wrap = 'nowrap',
      justify = 'flex-start',
      align = 'stretch',
      gap = 'default',
      className,
      style,
      as = 'div',
      inline = false,
      fullWidth = true,
    }: FlexProps,
    ref
  ) => {
    const Component = as as keyof React.JSX.IntrinsicElements;
    
    const flexClassName = classNames(
      styles.flex,
      directionClassMap[direction],
      wrapClassMap[wrap],
      justifyClassMap[justify],
      alignClassMap[align],
      gapClassMap[gap],
      inline && styles.inline,
      fullWidth && styles.fullWidth,
      className
    );

    return (
      <Component className={flexClassName} style={style}>
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';