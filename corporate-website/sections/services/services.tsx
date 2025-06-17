import React from 'react';
import { SectionLayout } from '@corporate/design.layouts.section-layout';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { Card } from '@corporate/design.content.card';
import { Flex } from '@corporate/design.layouts.flex';
import classNames from 'classnames';
import styles from './services.module.scss';
import type { ServiceType } from './service-type.js';

export interface ServicesProps {
  /**
   * Section title
   */
  title?: string;
  /**
   * Section subtitle
   */
  subtitle?: string;
  /**
   * List of services to display
   */
  services?: ServiceType[];
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * Additional CSS style
   */
  style?: React.CSSProperties;
  /**
   * Background variant for the section
   */
  background?: 'default' | 'primary' | 'secondary' | 'tertiary';
}

// Default services data if none provided
const DEFAULT_SERVICES: ServiceType[] = [
  {
    id: '1',
    title: 'Mars Habitat Solutions',
    description: 'Cutting-edge living quarters designed to withstand the harsh Martian environment while providing comfortable, sustainable habitation for long-term colonists.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw2fHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0',
    imageAlt: 'Futuristic Mars habitat dome with advanced environmental controls',
  },
  {
    id: '2',
    title: 'Terraforming Technology',
    description: 'Revolutionary systems designed to gradually transform the Martian atmosphere and surface conditions to eventually support Earth-like ecosystems and human life.',
    image: 'https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw3fHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0',
    imageAlt: 'Advanced terraforming equipment operating on the Martian surface',
  },
  {
    id: '3',
    title: 'Resource Extraction',
    description: 'Efficient mining and processing technologies to harvest valuable Martian resources for construction, fuel production, and sustainable colony operations.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0',
    imageAlt: 'Robotic equipment extracting resources from Martian soil',
  },
  {
    id: '4',
    title: 'Space Transportation',
    description: 'Advanced spacecraft and launch systems enabling reliable, cost-effective transit between Earth and Mars for personnel, supplies, and equipment.',
    image: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0',
    imageAlt: 'Next-generation spacecraft designed for Mars missions',
  },
  {
    id: '5',
    title: 'Life Support Systems',
    description: 'Closed-loop ecological systems providing sustainable air, water, and food production for long-term Mars colonization efforts.',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHwzfHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0',
    imageAlt: 'Advanced life support systems with hydroponic gardens',
  },
  {
    id: '6',
    title: 'Mars Communications',
    description: 'High-bandwidth communication networks enabling seamless connectivity between Mars colonies and Earth, despite the vast distances involved.',
    image: 'https://images.unsplash.com/photo-1516801967339-cb50a3ce7781?ixid=M3w3MDc2NDF8MHwxfHNlYXJjaHw5fHxzcGFjZSUyMHRlY2hub2xvZ3klMkMlMjBmdXR1cmlzdGljfGVufDF8MHx8Ymx1ZXwxNzQ3MjIzMTQ1fDA&ixlib=rb-4.1.0',
    imageAlt: 'Mars communication array transmitting data to Earth',
  }
];

export function Services({
  title = 'Our Space Technology Services',
  subtitle = 'Corporate Inc. delivers cutting-edge solutions to make Mars colonization a reality. Explore our specialized services designed to overcome the unique challenges of establishing humanity\'s presence on the Red Planet.',
  services = DEFAULT_SERVICES,
  className,
  style,
  background = 'default'
}: ServicesProps) {
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      background={background}
      padding="large"
      className={classNames(styles.servicesSection, className)}
      style={style}
    >
      <Flex
        direction="row"
        wrap="wrap"
        justify="center"
        gap="large"
        className={styles.servicesGrid}
      >
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCardWrapper}>
            <Card
              variant="elevated"
              image={service.image}
              imageAlt={service.imageAlt}
              className={styles.serviceCard}
            >
              <Heading level={3} className={styles.serviceTitle}>
                {service.title}
              </Heading>
              <Paragraph className={styles.serviceDescription}>
                {service.description}
              </Paragraph>
            </Card>
          </div>
        ))}
      </Flex>
    </SectionLayout>
  );
}