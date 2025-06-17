import React from 'react';
import classNames from 'classnames';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { Image } from '@corporate/design.content.image';
import { CtaButton } from '@corporate/design.actions.cta-button';
import { Link } from '@corporate/design.navigation.link';
import type { HeroProps } from './hero-type.js';
import styles from './hero.module.scss';

/**
 * A visually impactful hero section component for Corporate Inc.'s website.
 * Features a bold heading, descriptive text, background image, and call-to-action button.
 * Perfect for landing pages and key section introductions.
 */
export const Hero = ({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaText,
  ctaUrl,
  ctaExternal = false,
  variant = 'default',
  className,
  style,
  onCtaClick
}: HeroProps) => {
  const containerClasses = classNames(
    styles.heroContainer,
    {
      [styles.darkOverlay]: variant === 'darkOverlay',
      [styles.split]: variant === 'split'
    },
    className
  );

  return (
    <section className={containerClasses} style={style}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageUrl}
          alt={imageAlt}
          objectFit="cover"
          borderRadius="none"
          className={styles.heroImage}
          loading="eager"
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <Heading level={1} className={styles.title}>
            {title}
          </Heading>
          
          <Paragraph size="large" className={styles.description}>
            {description}
          </Paragraph>
        </div>

        <div className={styles.ctaWrapper}>
          {ctaUrl ? (
            <Link href={ctaUrl} external={ctaExternal}>
              <CtaButton 
                appearance="primary"
                size="large"
                animated
                glowing
                onClick={onCtaClick}
              >
                {ctaText}
              </CtaButton>
            </Link>
          ) : (
            <CtaButton 
              appearance="primary"
              size="large"
              animated
              glowing
              onClick={onCtaClick}
            >
              {ctaText}
            </CtaButton>
          )}
        </div>
      </div>
    </section>
  );
};