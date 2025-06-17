import React, { ComponentType, FunctionComponent } from 'react';
import { IconProps, createIcon } from '@corporate/design.content.icon';

/**
 * LinkedIn icon SVG content component
 */
const LinkedInSvgContent: ComponentType = () => (
  <>
    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.830 6.922 6.317 7.779 6.317C8.550 6.317 9.065 6.830 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.930 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" />
  </>
);
LinkedInSvgContent.displayName = 'LinkedInSvgContent';

// Create the base icon using the SvgContent
const BaseLinkedInIcon = createIcon(LinkedInSvgContent);

/**
 * LinkedIn icon component based on the base Icon component
 * Renders a standard LinkedIn logo icon.
 * This wrapper applies default props for color and title.
 */
export const LinkedInIcon: FunctionComponent<IconProps> = ({
  size, // Relies on the underlying Icon component's default for size (24px)
  color = 'var(--colors-primary-default)', // Default color for LinkedInIcon
  title = 'LinkedIn', // Default title for LinkedInIcon
  ...rest
}) => {
  return <BaseLinkedInIcon size={size} color={color} title={title} {...rest} />;
};

// Default props are handled by default parameter values in the FunctionComponent above.
// The original `LinkedInIcon.defaultProps = { ... }` assignment caused a type error
// because `defaultProps` is not a standard property on the type returned by `createIcon`
// in a way that TypeScript could directly assign.

export type { IconProps as LinkedInIconProps };