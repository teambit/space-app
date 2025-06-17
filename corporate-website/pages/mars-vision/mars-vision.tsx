import React from 'react';
import { PageLayout } from '@corporate/design.layouts.page-layout';
import { Image } from '@corporate/design.content.image';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import classNames from 'classnames';
import styles from './mars-vision.module.scss';

export type MarsVisionProps = {
  /**
   * Custom class name for the component
   */
  className?: string;
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
};

export function MarsVision({ className, style }: MarsVisionProps): React.JSX.Element {
  return (
    <PageLayout
      title="Mars Vision - Corporate Inc."
      description="Corporate Inc.'s vision for Mars colonization and population, detailing our plans, technologies, and missions for humanity's future on the Red Planet."
      keywords="Mars colonization, space technology, Mars settlements, Corporate Inc., Mars mission, multiplanetary species"
      metaTags={[
        { name: 'og:title', content: 'The Future of Humanity on Mars - Corporate Inc.' },
        { name: 'og:image', content: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcGxhbmV0fGVufDF8MHx8fDE3MTUyNDU2ODB8MA&ixlib=rb-4.0.3' },
      ]}
      className={classNames(styles.marsVision, className)}
      style={style}
    >
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <Heading level={1} className={styles.heroTitle}>
            Pioneering Humanity's Future on Mars
          </Heading>
          <Paragraph size="large" className={styles.heroSubtitle}>
            Building the foundation for a thriving Martian civilization by 2050
          </Paragraph>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <Heading level={2}>Our Vision</Heading>
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <Paragraph>
                At Corporate Inc., we envision a future where humanity has expanded beyond Earth to become a multi-planetary species. Mars, our neighboring planet, represents the next frontier in human exploration and settlement. We believe that establishing a permanent, self-sustaining presence on Mars is not just a scientific achievement, but a necessary step to ensure the long-term survival and prosperity of humanity.
              </Paragraph>
              <Paragraph>
                By 2050, we aim to establish a thriving community of 10,000 people living and working on Mars, with the infrastructure to support continued growth and development. This ambitious vision drives every technology we develop, every mission we plan, and every partnership we forge.
              </Paragraph>
            </div>
            <div className={styles.imageContainer}>
              <Image 
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw0fHxtYXJzJTIwc3VyZmFjZXxlbnwxfDB8fHwxNzE1MjQ1NjgwfDA&ixlib=rb-4.0.3" 
                alt="Futuristic visualization of a Mars settlement with domes and habitation units" 
                borderRadius="medium"
                shadow="medium"
                objectFit="cover"
                className={styles.sectionImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <Heading level={2}>The Mars Initiative Timeline</Heading>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025-2030</div>
              <div className={styles.timelineContent}>
                <Heading level={3}>Reconnaissance & Resource Mapping</Heading>
                <Paragraph>
                  Our first phase focuses on detailed mapping of Mars' surface, identifying resource-rich regions and potential settlement sites. Advanced rovers and orbital satellites will conduct comprehensive surveys to locate water ice deposits, minerals, and areas protected from radiation.
                </Paragraph>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2030-2035</div>
              <div className={styles.timelineContent}>
                <Heading level={3}>Infrastructure Development</Heading>
                <Paragraph>
                  Deploying autonomous construction robots to build the initial habitation modules, power generation facilities, and life support systems. Our patented 3D printing technology will utilize Martian regolith to create structures, reducing the need for Earth-transported materials.
                </Paragraph>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2035-2040</div>
              <div className={styles.timelineContent}>
                <Heading level={3}>First Crewed Missions</Heading>
                <Paragraph>
                  Our crews of scientists, engineers, and specialists will begin establishing the first permanent human presence on Mars. These pioneers will expand the habitation facilities, initiate agricultural operations in controlled environments, and set up materials processing plants.
                </Paragraph>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2040-2050</div>
              <div className={styles.timelineContent}>
                <Heading level={3}>Colony Expansion</Heading>
                <Paragraph>
                  Scaling operations to accommodate increasing numbers of settlers, developing specialized industries, establishing research institutions, and beginning the process of terraforming selected regions to create more Earth-like conditions over time.
                </Paragraph>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <Heading level={2}>Key Technologies Powering Our Vision</Heading>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <div className={styles.techIconContainer}>
                <div className={styles.techIcon}>🚀</div>
              </div>
              <Heading level={3}>Advanced Propulsion</Heading>
              <Paragraph>
                Our next-generation plasma propulsion systems reduce travel time to Mars from months to weeks, making regular transport between Earth and Mars practical and economical.
              </Paragraph>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techIconContainer}>
                <div className={styles.techIcon}>🏠</div>
              </div>
              <Heading level={3}>Habitat Construction</Heading>
              <Paragraph>
                Revolutionary 3D printing technology using Martian regolith creates radiation-shielded, pressure-tight habitats that can be expanded modularly as the colony grows.
              </Paragraph>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techIconContainer}>
                <div className={styles.techIcon}>🌱</div>
              </div>
              <Heading level={3}>Life Support Systems</Heading>
              <Paragraph>
                Closed-loop ecological systems that recycle air, water, and nutrients with minimal waste, making long-term habitation sustainable with minimal resupply from Earth.
              </Paragraph>
            </div>

            <div className={styles.techCard}>
              <div className={styles.techIconContainer}>
                <div className={styles.techIcon}>⚡</div>
              </div>
              <Heading level={3}>Energy Production</Heading>
              <Paragraph>
                Compact fusion reactors and high-efficiency solar arrays designed specifically for Mars' environment provide abundant, reliable power for all colony operations.
              </Paragraph>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <Heading level={2} className={styles.ctaTitle}>Join Us in Building a New World</Heading>
            <Paragraph size="large" className={styles.ctaText}>
              The journey to Mars is humanity's greatest adventure. Whether you're an engineer, scientist, investor, or visionary, there's a place for you in shaping this historic endeavor.
            </Paragraph>
            <button className={styles.ctaButton}>
              Join the Mars Initiative
            </button>
          </div>
          <div className={styles.ctaImageContainer}>
            <Image 
              src="https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxMHx8bWFycyUyMHRlcnJhZm9ybWluZ3xlbnwxfDB8fHwxNzE1MjQ1NzIxfDA&ixlib=rb-4.0.3"
              alt="Artist's concept of a terraformed Mars region showing early atmospheric transformation"
              borderRadius="medium"
              objectFit="cover"
              className={styles.ctaImage}
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}