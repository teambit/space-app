import React, { forwardRef } from 'react';
import { Link as RouterLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

export type LinkProps = {
  /**
   * URL or path to navigate to
   */
  href: string;
  /**
   * Link content
   */
  children: React.ReactNode;
  /**
   * Whether the link points to an external resource
   */
  external?: boolean;
  /**
   * Target attribute for the link
   */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /**
   * Rel attribute for the link
   */
  rel?: string;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /**
   * CSS class name
   */
  className?: string;
  /**
   * Additional style properties
   */
  style?: React.CSSProperties;
};

/**
 * Link component for Corporate Inc.'s website.
 * Supports both internal routing via react-router and external links.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      children,
      external = false,
      target = external ? '_blank' : '_self',
      rel = external ? 'noopener noreferrer' : undefined,
      onClick,
      className,
      style,
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(event);
      }
    };

    const linkClasses = classNames(styles.link, {
      [styles.external]: external,
    }, className);

    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          target={target}
          rel={rel}
          onClick={handleClick}
          className={linkClasses}
          style={style}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterLink
        ref={ref}
        to={href}
        onClick={handleClick}
        className={linkClasses}
        style={style}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';

/**
 * Export react-router hooks for convenience
 */
export { useLocation, useParams, useNavigate };

/**
 * Custom hook to parse and use search query parameters
 */
export function useSearchQuery() {
  const location = useLocation();
  return React.useMemo(() => new URLSearchParams(location.search), [location.search]);
}