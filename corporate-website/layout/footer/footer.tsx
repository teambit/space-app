import React, { ReactNode } from 'react';
import { Link } from '@corporate/design.navigation.link';
import { GithubIcon } from '@corporate/corporate-website.icons.github-icon';
import { LinkedInIcon } from '@corporate/corporate-website.icons.linkedin-icon';
import { FooterLinkType } from './footer-link-type.js';
import styles from './footer.module.scss';

export type FooterProps = {
  /**
   * Footer links organized in columns
   */
  linkColumns?: FooterLinkType[][];
  
  /**
   * Copyright text for the footer
   */
  copyrightText?: string;
  
  /**
   * Show social media links
   */
  showSocialLinks?: boolean;
  
  /**
   * Show photo attribution to Unsplash
   */
  showPhotoAttribution?: boolean;
  
  /**
   * Additional classname for the footer
   */
  className?: string;
  
  /**
   * Optional custom social media components
   */
  socialComponents?: ReactNode[];
  
  /**
   * Additional content for the footer
   */
  children?: ReactNode;
  
  /**
   * Custom style for the footer
   */
  style?: React.CSSProperties;
};

const DEFAULT_COPYRIGHT = `© ${new Date().getFullYear()} Corporate Inc. All rights reserved.`;

const DEFAULT_LINKS: FooterLinkType[][] = [
  [
    { title: 'Company', isHeading: true },
    { title: 'About', url: '/about' },
    { title: 'Careers', url: '/careers' },
    { title: 'Contact', url: '/contact' },
    { title: 'Press', url: '/press' }
  ],
  [
    { title: 'Technology', isHeading: true },
    { title: 'Mars Habitat', url: '/tech/habitat' },
    { title: 'Propulsion', url: '/tech/propulsion' },
    { title: 'Life Support', url: '/tech/life-support' },
    { title: 'Research', url: '/tech/research' }
  ],
  [
    { title: 'Resources', isHeading: true },
    { title: 'Blog', url: '/blog' },
    { title: 'Documentation', url: '/docs' },
    { title: 'Media Kit', url: '/media-kit' },
    { title: 'Partners', url: '/partners' }
  ]
];

export function Footer({
  linkColumns = DEFAULT_LINKS,
  copyrightText = DEFAULT_COPYRIGHT,
  showSocialLinks = true,
  showPhotoAttribution = true,
  className,
  socialComponents,
  children,
  style
}: FooterProps) {
  const footerClasses = [styles.footer, className].filter(Boolean).join(' ');
  return (
    <footer className={footerClasses} style={style}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          {linkColumns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className={styles.linkColumn}>
              {column.map((link, linkIndex) => {
                if (link.isHeading) {
                  return (
                    <h3 key={`heading-${columnIndex}-${linkIndex}`} className={styles.columnHeading}>
                      {link.title}
                    </h3>
                  );
                }
                
                return (
                  <Link 
                    key={`link-${columnIndex}-${linkIndex}`}
                    href={link.url || '#'}
                    external={link.external}
                    className={styles.footerLink}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
        
        {children && (
          <div className={styles.customContent}>
            {children}
          </div>
        )}
        
        <div className={styles.bottomSection}>
          <div className={styles.copyrightSection}>
            <p className={styles.copyright}>{copyrightText}</p>
            {showPhotoAttribution && (
              <p className={styles.attribution}>
                Photos courtesy of <Link href="https://unsplash.com" external className={styles.attributionLink}>Unsplash</Link>
              </p>
            )}
          </div>
          
          {showSocialLinks && (
            <div className={styles.socialLinks}>
              {socialComponents || (
                <>
                  <Link href="https://github.com/corporateinc" external className={styles.socialLink}>
                    <GithubIcon size={24} className={styles.socialIcon} />
                  </Link>
                  <Link href="https://linkedin.com/company/corporateinc" external className={styles.socialLink}>
                    <LinkedInIcon size={24} className={styles.socialIcon} />
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}