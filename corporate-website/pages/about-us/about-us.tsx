import React from 'react';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { Link } from '@corporate/design.navigation.link';
import { PageLayout } from '@corporate/design.layouts.page-layout';
import { Image } from '@corporate/design.content.image';
import classNames from 'classnames';
import styles from './about-us.module.scss';
import type { TimelineItemType } from './timeline-item-type.js';
import type { MissionCardType } from './mission-card-type.js';
import type { TeamMemberType } from './team-member-type.js';

export type AboutUsProps = {
  /**
   * Custom class name
   */
  className?: string;
  
  /**
   * Custom inline styles
   */
  style?: React.CSSProperties;
  
  /**
   * Timeline items for the history section
   */
  timelineItems?: TimelineItemType[];
  
  /**
   * Mission cards for the mission section
   */
  missionCards?: MissionCardType[];
  
  /**
   * Team members for the leadership section
   */
  teamMembers?: TeamMemberType[];
};

const defaultTimelineItems: TimelineItemType[] = [
  {
    year: '2025',
    title: 'Corporate Inc. Founded',
    description: 'Founded by visionary aerospace engineers and scientists, Corporate Inc. was established with the mission to make humanity a multi-planetary species.'
  },
  {
    year: '2028',
    title: 'First Rocket Launch',
    description: 'Successfully launched our first reusable rocket, marking a significant milestone in our journey to reduce the cost of space travel.'
  },
  {
    year: '2031',
    title: 'Mars Rover Deployment',
    description: 'Deployed advanced rovers on Mars to conduct comprehensive analysis of the Martian surface and identify optimal locations for human settlement.'
  },
  {
    year: '2035',
    title: 'Habitat Research Center',
    description: 'Established the Mars Habitat Research Center to develop sustainable living environments capable of supporting human life on Mars.'
  },
  {
    year: '2042',
    title: 'First Human Mission to Mars',
    description: 'Successfully sent the first human mission to Mars, establishing a temporary research base and conducting groundbreaking scientific experiments.'
  },
  {
    year: '2045',
    title: 'Permanent Mars Base',
    description: 'Established the first permanent human settlement on Mars, marking the beginning of a new era for humanity as a multi-planetary species.'
  }
];

const defaultMissionCards: MissionCardType[] = [
  {
    title: 'Mars Colonization',
    description: 'Establishing a self-sustaining colony on Mars through advanced life support systems, habitation modules, and resource utilization technologies.'
  },
  {
    title: 'Space Transportation',
    description: 'Developing reusable spacecraft and propulsion systems to make interplanetary travel efficient, safe, and economically viable.'
  },
  {
    title: 'Terraforming Technologies',
    description: 'Researching and implementing technologies to gradually transform the Martian environment to become more hospitable for human habitation.'
  },
  {
    title: 'Sustainable Resources',
    description: 'Creating systems for in-situ resource utilization to generate breathable air, potable water, and construction materials from Martian resources.'
  },
  {
    title: 'Advanced Robotics',
    description: 'Building autonomous robotic systems to assist in construction, exploration, and maintenance operations in the harsh Martian environment.'
  },
  {
    title: 'Scientific Discovery',
    description: 'Conducting pioneering research to expand our understanding of Mars, its history, and potential for supporting various forms of life.'
  }
];

const defaultTeamMembers: TeamMemberType[] = [
  {
    name: 'Dr. Elena Martinez',
    role: 'Chief Executive Officer',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Dr. Marcus Chen',
    role: 'Chief Technology Officer',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Dr. Sophia Williams',
    role: 'Lead Mars Habitat Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Dr. James Lee',
    role: 'Director of Propulsion Systems',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

export function AboutUs({
  className,
  style,
  timelineItems = defaultTimelineItems,
  missionCards = defaultMissionCards,
  teamMembers = defaultTeamMembers
}: AboutUsProps) {
  const pageContent = (
    <div className={classNames(styles.aboutContainer, className)} style={style}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Heading level={1} className={styles.heroHeading}>About Corporate Inc.</Heading>
          <Paragraph size="large" className={styles.heroText}>
            We are a pioneering space technology company with a vision to make humanity a multi-planetary species by establishing a sustainable presence on Mars.
          </Paragraph>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineHeader}>
            <Heading level={2}>Our Journey</Heading>
            <Paragraph>
              From our humble beginnings to our ambitious Mars colonization efforts, explore the key milestones that have shaped our company's history.
            </Paragraph>
          </div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{item.year}</div>
              <div className={styles.timelineContent}>
                <Heading level={3} className={styles.timelineTitle}>{item.title}</Heading>
                <Paragraph>{item.description}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <div className={styles.missionHeader}>
            <Heading level={2}>Our Mission</Heading>
            <Paragraph>
              At Corporate Inc., we are driven by a singular purpose: to extend human presence beyond Earth and create a sustainable civilization on Mars.
            </Paragraph>
          </div>
          
          {missionCards.map((card, index) => (
            <div key={index} className={styles.missionCard}>
              <Heading level={3} className={styles.missionCardTitle}>{card.title}</Heading>
              <Paragraph>{card.description}</Paragraph>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <div className={styles.teamHeader}>
            <Heading level={2}>Our Leadership</Heading>
            <Paragraph>
              Meet the visionary team leading our mission to Mars. With decades of combined experience in aerospace engineering, planetary science, and technology innovation.
            </Paragraph>
          </div>
          
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <Image 
                  src={member.imageUrl} 
                  alt={`${member.name}, ${member.role}`} 
                  className={styles.memberImage}
                  objectFit="cover"
                  borderRadius="none"
                />
                <div className={styles.memberInfo}>
                  <Heading level={4} className={styles.memberName}>{member.name}</Heading>
                  <div className={styles.memberRole}>{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <Heading level={2} className={styles.ctaHeading}>Join Us in Shaping the Future</Heading>
          <Paragraph className={styles.ctaText}>
            Be part of humanity's greatest adventure. Together, we can build a sustainable future on Mars and become a multi-planetary species.
          </Paragraph>
          <Link href="/careers" className={styles.ctaButton}>
            Explore Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );

  return (
    <PageLayout
      title="About Us - Corporate Inc. | Building the Future on Mars"
      description="Learn about Corporate Inc.'s mission to make humanity a multi-planetary species through our Mars colonization efforts."
      keywords="Corporate Inc., Mars colonization, space technology, multi-planetary species, about us"
      pageContent={pageContent}
    />
  );
}