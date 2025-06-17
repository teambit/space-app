import React from 'react';
import { PageLayout } from '@corporate/design.layouts.page-layout';
import { Image } from '@corporate/design.content.image';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import classNames from 'classnames';
import styles from './technologies.module.scss';
import { TechnologyCard } from './technology-card.js';
import type { TechnologyType } from './technology-type.js';

export type TechnologiesProps = {
  /**
   * Array of technology data
   */
  technologies?: TechnologyType[];
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
};

const defaultTechnologies: TechnologyType[] = [
  {
    id: '1',
    title: 'Advanced Propulsion Systems',
    description: 'Our revolutionary plasma-based propulsion technology reduces travel time to Mars by 40%, making regular missions more feasible and cost-effective.',
    imageUrl: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Transportation',
  },
  {
    id: '2',
    title: 'Martian Habitation Modules',
    description: 'Self-sustaining habitation units designed to withstand the harsh Martian environment while providing Earth-like comfort for long-term residents.',
    imageUrl: 'https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Infrastructure',
  },
  {
    id: '3',
    title: 'Atmospheric Processing',
    description: 'Our ISRU (In-Situ Resource Utilization) technology converts Mars\' CO2-rich atmosphere into breathable oxygen and fuel components.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Life Support',
  },
  {
    id: '4',
    title: 'Radiation Shielding',
    description: 'Innovative nanomaterial composite shields that protect colonists from cosmic radiation while maintaining structural integrity in Martian conditions.',
    imageUrl: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Safety',
  },
  {
    id: '5',
    title: 'Autonomous Construction Robots',
    description: 'Intelligent robotic systems capable of constructing and maintaining infrastructure before human arrival and during Mars colony expansion.',
    imageUrl: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Robotics',
  },
  {
    id: '6',
    title: 'Mars Communication Network',
    description: 'High-bandwidth, low-latency communication system enabling real-time data transfer between Earth and Mars through our proprietary satellite constellation.',
    imageUrl: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Communications',
  }
];

export function Technologies({ 
  technologies = defaultTechnologies,
  className,
  style
}: TechnologiesProps) {
  return (
    <PageLayout
      title="Space Technologies - Corporate Inc."
      description="Explore the cutting-edge technologies developed by Corporate Inc. to enable sustainable Mars colonization and interplanetary travel."
      keywords="space technology, Mars colonization, propulsion systems, life support, habitation modules, radiation shielding"
      className={classNames(styles.technologiesPage, className)}
      style={style}
      pageContent={
        <div className={styles.container}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <Heading level={1}>Pioneering Technologies for Mars</Heading>
              <Paragraph size="large">
                At Corporate Inc., we're developing the revolutionary technologies needed to make humanity a multi-planetary species. Our innovations span propulsion, habitation, life support, and more - all designed to overcome the unique challenges of Martian colonization.
              </Paragraph>
            </div>
            <div className={styles.heroImageContainer}>
              <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Futuristic Mars colony concept with Corporate Inc. technology"
                objectFit="cover"
                borderRadius="medium"
                className={styles.heroImage}
              />
            </div>
          </section>

          <section className={styles.mission}>
            <Heading level={2}>Our Technological Mission</Heading>
            <Paragraph>
              Corporate Inc. is committed to solving the fundamental challenges of space exploration and Martian habitation. Our integrated technology ecosystem works together to make life on Mars not just possible, but sustainable and prosperous.
            </Paragraph>
          </section>

          <section className={styles.technologiesGrid}>
            {technologies.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </section>

          <section className={styles.futureOutlook}>
            <div className={styles.futureContent}>
              <Heading level={2}>The Future of Space Technology</Heading>
              <Paragraph>
                Our research and development roadmap extends decades into the future, with ambitious goals for terraforming, expanded colonization, and eventually, making Mars a self-sustaining civilization independent of Earth. Each technological breakthrough brings us one step closer to this vision.
              </Paragraph>
            </div>
            <div className={styles.futureImageContainer}>
              <Image 
                src="https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Future vision of expanded Mars colony"
                objectFit="cover"
                borderRadius="medium"
                className={styles.futureImage}
              />
            </div>
          </section>

          <section className={styles.callToAction}>
            <Heading level={2}>Join Our Technological Revolution</Heading>
            <Paragraph>
              Corporate Inc. is always seeking brilliant minds to contribute to our mission. Whether you're an engineer, scientist, designer, or visionary, there's a place for you in shaping humanity's interplanetary future.
            </Paragraph>
            <button className={styles.ctaButton}>
              Explore Career Opportunities
            </button>
          </section>
        </div>
      }
    />
  );
}