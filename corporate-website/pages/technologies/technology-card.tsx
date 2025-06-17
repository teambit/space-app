import React from 'react';
import { Image } from '@corporate/design.content.image';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import classNames from 'classnames';
import type { TechnologyType } from './technology-type.js';
import styles from './technology-card.module.scss';

export type TechnologyCardProps = {
  /**
   * Technology data to display
   */
  technology: TechnologyType;
  
  /**
   * Optional custom class name
   */
  className?: string;
  
  /**
   * Optional custom inline styles
   */
  style?: React.CSSProperties;
};

export function TechnologyCard({ technology, className, style }: TechnologyCardProps) {
  return (
    <div className={classNames(styles.card, className)} style={style}>
      <div className={styles.imageContainer}>
        <Image 
          src={technology.imageUrl}
          alt={`${technology.title} - ${technology.category} technology by Corporate Inc.`}
          objectFit="cover"
          borderRadius="medium"
          className={styles.image}
        />
        <div className={styles.category}>{technology.category}</div>
      </div>
      <div className={styles.content}>
        <Heading level={3} className={styles.title}>{technology.title}</Heading>
        <Paragraph size="default" className={styles.description}>
          {technology.description}
        </Paragraph>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    </div>
  );
}