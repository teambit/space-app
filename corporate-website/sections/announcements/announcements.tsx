import React from 'react';
import classNames from 'classnames';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { SectionLayout } from '@corporate/design.layouts.section-layout';
import { Flex } from '@corporate/design.layouts.flex';
import { AnnouncementCard } from '@corporate/corporate-website.ui.announcement-card';
import { AnnouncementType } from './announcement-type.js';
import styles from './announcements.module.scss';

export type AnnouncementsProps = {
  /**
   * Title for the announcements section
   */
  title?: string;
  
  /**
   * Subtitle text for the announcements section
   */
  subtitle?: string;
  
  /**
   * Array of announcement items to display
   */
  announcements: AnnouncementType[];
  
  /**
   * Maximum number of announcements to display
   */
  maxDisplay?: number;
  
  /**
   * URL to view all announcements
   */
  viewAllUrl?: string;
  
  /**
   * Text for the view all link
   */
  viewAllText?: string;
  
  /**
   * Layout of the announcements grid
   */
  layout?: 'grid' | 'list';
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
};

export function Announcements({
  title = 'Latest Announcements',
  subtitle = 'Stay updated with the latest news and developments from Corporate Inc.',
  announcements = [],
  maxDisplay = 3,
  viewAllUrl = '/news',
  viewAllText = 'View All Announcements',
  layout = 'grid',
  className,
  style
}: AnnouncementsProps) {
  
  const displayAnnouncements = announcements.slice(0, maxDisplay);
  const hasAnnouncements = displayAnnouncements.length > 0;
  
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      background="primary"
      className={classNames(styles.container, className)}
      style={style}
    >
      {hasAnnouncements ? (
        <>
          <Flex 
            direction={layout === 'list' ? 'column' : 'row'} 
            wrap="wrap" 
            gap="large"
            className={styles.announcementsContainer}
          >
            {displayAnnouncements.map((announcement, index) => (
              <div 
                key={`${announcement.title}-${index}`}
                className={classNames(
                  styles.announcementItem,
                  layout === 'list' ? styles.listItem : styles.gridItem
                )}
              >
                <AnnouncementCard
                  title={announcement.title}
                  summary={announcement.summary}
                  date={announcement.date}
                  linkUrl={announcement.linkUrl}
                  linkText={announcement.linkText}
                  imageUrl={announcement.imageUrl}
                  variant={index === 0 ? 'primary' : 'default'}
                />
              </div>
            ))}
          </Flex>
          
          {viewAllUrl && announcements.length > maxDisplay && (
            <div className={styles.viewAllContainer}>
              <a href={viewAllUrl} className={styles.viewAllLink}>
                {viewAllText}
              </a>
            </div>
          )}
        </>
      ) : (
        <div className={styles.emptyState}>
          <Heading level={3}>No announcements available</Heading>
          <Paragraph>Check back soon for updates from Corporate Inc.</Paragraph>
        </div>
      )}
    </SectionLayout>
  );
}