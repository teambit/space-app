import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { SectionLayout } from './section-layout.js';

export const BasicMissionStatementSection = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <SectionLayout
          title="Our Mission: Pioneering Mars"
          subtitle="Corporate Inc. is dedicated to advancing space technology to make humanity a multi-planetary species. We are building the future, one launch at a time."
        >
          <Paragraph>
            At Corporate Inc., our primary objective is to establish a sustainable and thriving human presence on Mars. We believe that the Red Planet holds the key to the long-term survival and evolution of our species. Through relentless innovation and a commitment to excellence, we are developing the foundational technologies required for Martian colonization, from advanced life support systems to revolutionary propulsion.
          </Paragraph>
          <Paragraph>
            Our efforts are grounded in scientific research and engineering prowess, aiming to overcome the immense challenges of interplanetary travel and habitation. We envision a future where Mars is not just a destination, but a new home for humanity.
          </Paragraph>
        </SectionLayout>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const CenteredTechFocusSection = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <SectionLayout
          title="Innovations for the Red Frontier"
          subtitle="Discover the cutting-edge technologies powering our journey to Mars and beyond."
          alignment="center"
          background="primary"
          padding="large"
        >
          <Paragraph>
            Corporate Inc. is at the forefront of space technology. Our dedicated teams are developing next-generation solutions including AI-driven autonomous rovers for exploration, modular habitat designs for sustainable living, and advanced terraforming techniques to make the Martian environment more hospitable. These innovations are not just concepts; they are the building blocks of a new civilization.
          </Paragraph>
          <Paragraph size="small">
            We leverage breakthroughs in materials science, robotics, and biotechnology to create resilient and efficient systems capable of operating in the harsh Martian conditions.
          </Paragraph>
        </SectionLayout>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const FullWidthVisionSection = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <SectionLayout
          caption="The Next Giant Leap"
          title="Envisioning a Future on Mars"
          subtitle="Join us as we embark on the most ambitious endeavor in human history: to populate Mars and secure a multi-planetary future for generations to come."
          fullWidth={true}
          background="tertiary" // Uses space-effect gradient
          alignment="center"
          padding="large"
        >
          <Paragraph>
            Imagine a bustling Martian city, powered by clean energy, with research outposts unlocking the secrets of the universe. This is the future Corporate Inc. is building. Our vision extends beyond mere exploration; we aim to create a vibrant, self-sustaining society on Mars, fostering scientific discovery, economic growth, and a new chapter for humanity. The journey is challenging, but the destiny is stellar.
          </Paragraph>
          <div style={{ marginTop: 'var(--spacing-medium)' }}>
            <Paragraph element="span" style={{ color: 'var(--colors-text-inverse)', fontWeight: 'var(--typography-font-weight-bold)' }}>
              Are you ready to be part of the Martian dream?
            </Paragraph>
          </div>
        </SectionLayout>
      </CorporateTheme>
    </MemoryRouter>
  );
};

export const OurCoreValuesSection = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <SectionLayout
          title="Guiding Principles"
          subtitle="Our work is driven by a core set of values that define our approach to space exploration and technology development."
          background="secondary"
          padding="default"
        >
          <Paragraph>
            <strong>Innovation:</strong> We relentlessly pursue groundbreaking solutions to overcome the unique challenges of space travel and Martian colonization. We foster a culture of curiosity and experimentation.
          </Paragraph>
          <Paragraph>
            <strong>Sustainability:</strong> Our technologies are designed with the long-term well-being of both Earth and Mars in mind. We prioritize closed-loop systems and resource efficiency.
          </Paragraph>
          <Paragraph>
            <strong>Collaboration:</strong> We believe that the grand challenge of populating Mars requires a global effort. We actively seek partnerships with research institutions, governments, and other visionary organizations.
          </Paragraph>
           <Paragraph>
            <strong>Integrity:</strong> We operate with the highest ethical standards, ensuring transparency and accountability in all our endeavors. The future of humanity depends on responsible stewardship.
          </Paragraph>
        </SectionLayout>
      </CorporateTheme>
    </MemoryRouter>
  );
};