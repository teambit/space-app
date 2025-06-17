import React from 'react';
import { Hero } from '@corporate/corporate-website.sections.hero';
import { Services } from '@corporate/corporate-website.sections.services';
import { Announcements } from '@corporate/corporate-website.sections.announcements';
// import { CorporateTheme } from '@corporate/design.corporate-theme'; // Removed as per purity rule
import type { AnnouncementType } from './announcement-type.js';
import type { ServiceType } from './service-type.js';
import classNames from 'classnames';
import styles from './homepage.module.scss';

export type HomepageProps = {
  /**
   * Hero section title
   */
  heroTitle?: string;
  /**
   * Hero section description
   */
  heroDescription?: string;
  /**
   * Hero section image URL
   */
  heroImageUrl?: string;
  /**
   * Hero section image alt text
   */
  heroImageAlt?: string;
  /**
   * Hero section CTA text
   */
  heroCtaText?: string;
  /**
   * Hero section CTA URL
   */
  heroCtaUrl?: string;
  /**
   * Hero section variant
   */
  heroVariant?: 'default' | 'darkOverlay' | 'split';
  /**
   * Services section title
   */
  servicesTitle?: string;
  /**
   * Services section subtitle
   */
  servicesSubtitle?: string;
  /**
   * Array of services to display
   */
  services?: ServiceType[];
  /**
   * Services section background
   */
  servicesBackground?: 'default' | 'primary' | 'secondary' | 'tertiary';
  /**
   * Announcements section title
   */
  announcementsTitle?: string;
  /**
   * Announcements section subtitle
   */
  announcementsSubtitle?: string;
  /**
   * Array of announcements to display
   */
  announcements?: AnnouncementType[];
  /**
   * Maximum number of announcements to display
   */
  maxAnnouncementsDisplay?: number;
  /**
   * Announcements view all URL
   */
  announcementsViewAllUrl?: string;
  /**
   * Announcements view all text
   */
  announcementsViewAllText?: string;
  /**
   * Announcements layout
   */
  announcementsLayout?: 'grid' | 'list';
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

const DEFAULT_SERVICES: ServiceType[] = [
  {
    id: 's1',
    title: 'Mars Habitat Development',
    description: 'Pioneering self-sustaining habitats designed to withstand Mars\' harsh environment while providing comfort and functionality for colonists.',
    image: 'https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMHJvYm90fGVufDB8MHx8YmxhY2t8MTc3MTE3MDEwMHww&ixlib=rb-4.0.3',
    imageAlt: 'Futuristic Mars habitat interior with hydroponic gardens',
  },
  {
    id: 's2',
    title: 'Interplanetary Transportation',
    description: 'Developing revolutionary propulsion systems and spacecraft designed for regular, reliable Earth-Mars transit for both people and cargo.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0',
    imageAlt: 'Spacecraft launching from Earth towards Mars',
  },
  {
    id: 's3',
    title: 'Martian Resource Utilization',
    description: 'Creating technologies to harness and process Mars\' natural resources for water, oxygen, construction materials, and fuel production.',
    image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtYXJzJTIwc3VyZmFjZXxlbnwwfDB8fGJsYWNrfDE3NzExNzA1MTB8MA&ixlib=rb-4.0.3',
    imageAlt: 'Robotic equipment extracting resources from Martian soil',
  },
  {
    id: 's4',
    title: 'Life Support Systems',
    description: 'Engineering closed-loop environmental systems that recycle air, water, and waste while maintaining optimal living conditions for colonists.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxzcGFjZSUyMGFpfGVufDB8MHx8YmxhY2t8MTc3MTE3MDEwMHww&ixlib=rb-4.0.3',
    imageAlt: 'Advanced life support system with oxygen generation modules',
  },
];

const DEFAULT_ANNOUNCEMENTS: AnnouncementType[] = [
  {
    title: 'Mars Colony "Odyssey" Construction Begins',
    summary: 'Corporate Inc. breaks ground on the first permanent Martian settlement, projected to house 1,200 colonists by 2045.',
    date: '2042-11-15T09:00:00Z',
    linkUrl: '/news/odyssey-construction',
    imageUrl: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Fusion-Powered Mars Transit Vehicle Unveiled',
    summary: 'Our new spacecraft cuts Earth-Mars travel time to just 45 days, revolutionizing interplanetary transport capabilities.',
    date: '2042-09-28T14:30:00Z',
    linkUrl: '/news/fusion-transit-unveiling',
    imageUrl: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBjb3Jwb3JhdGV8ZW58MXwwfHxibHVlfDE3NDcyMjMxNDV8MA&ixlib=rb-4.1.0',
  },
  {
    title: 'Mars Atmospheric Processing Facility Achieves Milestone',
    summary: 'Our MAPF system has produced its first 1,000 kg of breathable oxygen directly from the Martian atmosphere.',
    date: '2042-08-12T10:45:00Z',
    linkUrl: '/news/mapf-milestone',
    imageUrl: 'https://images.unsplash.com/photo-1516801967339-cb50a3ce7781?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw5fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBjb3Jwb3JhdGV8ZW58MXwwfHxibHVlfDE3NDcyMjMxNDV8MA&ixlib=rb-4.1.0',
  },
];

export function Homepage({
  heroTitle = 'Pioneering Humanity\'s Future on Mars',
  heroDescription = 'Corporate Inc. leads the way in developing the revolutionary technologies needed to establish the first permanent human settlement on the Red Planet.',
  heroImageUrl = 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw1fHxzcGFjZSUyMHRlY2hub2xvZ3klMjBtYXJzJTIwY29sb25pemF0aW9ufGVufDF8MHx8Ymx1ZXwxNzQ3MjI0NDk5fDA&ixlib=rb-4.1.0',
  heroImageAlt = 'Spacecraft launching towards Mars with red planet visible in the background',
  heroCtaText = 'Explore Our Mission',
  heroCtaUrl = '/mission',
  heroVariant = 'darkOverlay',
  servicesTitle = 'Our Mars Colonization Technologies',
  servicesSubtitle = 'Corporate Inc. delivers cutting-edge solutions to make Mars colonization a reality. Explore our specialized services designed to overcome the unique challenges of establishing humanity\'s presence on the Red Planet.',
  services = DEFAULT_SERVICES,
  servicesBackground = 'default',
  announcementsTitle = 'Latest Mars Mission Updates',
  announcementsSubtitle = 'Stay informed about our groundbreaking achievements and milestones as we progress toward establishing humanity\'s first foothold on Mars.',
  announcements = DEFAULT_ANNOUNCEMENTS,
  maxAnnouncementsDisplay = 3,
  announcementsViewAllUrl = '/news',
  announcementsViewAllText = 'View All Updates',
  announcementsLayout = 'grid',
  className,
  style,
}: HomepageProps): React.JSX.Element {
  return (
    <>
      <div className={classNames(styles.homepage, className)} style={style}>
        <section className={styles.heroSection}>
          <Hero
            title={heroTitle}
            description={heroDescription}
            imageUrl={heroImageUrl}
            imageAlt={heroImageAlt}
            ctaText={heroCtaText}
            ctaUrl={heroCtaUrl}
            variant={heroVariant}
            onCtaClick={() => console.log('Hero CTA clicked')}
          />
        </section>
        
        <section className={styles.servicesSection}>
          <Services
            title={servicesTitle}
            subtitle={servicesSubtitle}
            services={services}
            background={servicesBackground}
          />
        </section>
        
        <section className={styles.announcementsSection}>
          <Announcements
            title={announcementsTitle}
            subtitle={announcementsSubtitle}
            announcements={announcements}
            maxDisplay={maxAnnouncementsDisplay}
            viewAllUrl={announcementsViewAllUrl}
            viewAllText={announcementsViewAllText}
            layout={announcementsLayout}
          />
        </section>
      </div>
    </>
  );
}