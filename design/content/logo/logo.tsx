import React from 'react';
import classNames from 'classnames';
import { Link } from '@corporate/design.navigation.link';
import { LogoIcon } from './logo-icon.js';
import type { LogoProps } from './logo-type.js';
import styles from './logo.module.scss';

/**
 * A versatile logo component for Corporate Inc. that can display a default logo SVG,
 * custom SVG, or text-based logo with optional slogan.
 */
export function Logo({
  name = 'Corporate Inc.',
  slogan = 'Mars Awaits',
  href = '/',
  size = 40,
  src,
  minimal = false,
  className,
  style
}: LogoProps) {
  const logoContent = (
    <>
      <div className={styles.logo}>
        {src ? (
          <img 
            src={src} 
            alt={`${name} logo`} 
            width={size} 
            height={size}
            className={minimal ? styles.minimal : undefined}
          />
        ) : (
          <LogoIcon size={size} className={minimal ? styles.minimal : undefined} />
        )}
      </div>
      
      {!minimal && (
        <div className={styles.textContainer}>
          <h1 className={styles.name}>{name}</h1>
          {slogan && <p className={styles.slogan}>{slogan}</p>}
        </div>
      )}
    </>
  );

  const containerClassName = classNames(
    styles.container,
    className
  );

  return href ? (
    <Link href={href} className={containerClassName} style={style}>
      {logoContent}
    </Link>
  ) : (
    <div className={containerClassName} style={style}>
      {logoContent}
    </div>
  );
}