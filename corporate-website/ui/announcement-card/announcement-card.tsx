import React from 'react';
import classNames from 'classnames';
import { Link } from '@corporate/design.navigation.link';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { Card } from '@corporate/design.content.card';
import styles from './announcement-card.module.scss';
import { AnnouncementCardProps } from './announcement-card-props.js';

export function AnnouncementCard({
  title,
  summary,
  date,
  linkText = 'Read More',
  linkUrl,
  imageUrl,
  variant = 'default',
  className,
  style,
}: AnnouncementCardProps) {
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <Card
      variant={variant}
      image={imageUrl}
      imageAlt={title}
      className={classNames(styles.announcementCard, className)}
      style={style}
      interactive
    >
      <div className={styles.content}>
        {formattedDate && (
          <span className={styles.date}>{formattedDate}</span>
        )}
        <Heading level={3} className={styles.title}>
          {title}
        </Heading>
        <Paragraph className={styles.summary} size="default">
          {summary}
        </Paragraph>
        <div className={styles.footer}>
          <Link href={linkUrl} className={styles.link}>
            {linkText}
          </Link>
        </div>
      </div>
    </Card>
  );
}