import React, { ReactNode, ComponentType } from 'react';
import classNames from 'classnames';
import { Logo } from '@corporate/design.content.logo';
import { Link } from '@corporate/design.navigation.link';
import { ThemeToggler } from '@corporate/design.actions.theme-toggler';
import styles from './header.module.scss';
import { HeaderLinkType } from './header-link-type.js';

export type HeaderProps = {
  /**
   * The header links to be displayed in the navigation
   */
  links?: HeaderLinkType[];

  /**
   * Call to action components displayed at the right of the header
   */
  actions?: ComponentType[];

  /**
   * Custom logo name
   */
  logoName?: string;

  /**
   * Custom logo slogan
   */
  logoSlogan?: string;

  /**
   * Custom logo source URL
   */
  logoSrc?: string;

  /**
   * Logo size in pixels
   */
  logoSize?: number;

  /**
   * Show a theme toggler button
   */
  showThemeToggler?: boolean;

  /**
   * Homepage URL for the logo link
   */
  homeUrl?: string;

  /**
   * Optional children to render in the header
   */
  children?: ReactNode;

  /**
   * Additional CSS class
   */
  className?: string;

  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
};

export function Header({
  links = [
    { label: 'Mission', href: '/mission' },
    { label: 'Technology', href: '/technology' },
    { label: 'Mars Project', href: '/mars-project' },
    { label: 'Careers', href: '/careers' },
    { label: 'About', href: '/about' }
  ],
  actions = [],
  logoName = 'Corporate Inc.',
  logoSlogan = 'Mars Awaits',
  logoSrc,
  logoSize = 40,
  showThemeToggler = true,
  homeUrl = '/',
  children,
  className,
  style
}: HeaderProps) {
  return (
    <header className={classNames(styles.header, className)} style={style}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href={homeUrl}>
            <Logo 
              name={logoName} 
              slogan={logoSlogan} 
              src={logoSrc}
              size={logoSize}
            />
          </Link>
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {links.map((link, index) => (
              <li key={index} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actionsSection}>
          {actions.map((Action, index) => (
            <div key={index} className={styles.actionItem}>
              <Action />
            </div>
          ))}
          
          {showThemeToggler && (
            <div className={styles.themeToggler}>
              <ThemeToggler variant="compact" />
            </div>
          )}
        </div>

        {children && <div className={styles.children}>{children}</div>}
      </div>
    </header>
  );
}