import React from 'react';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Paragraph } from './paragraph.js';

export const BasicParagraph = () => {
  return (
    <CorporateTheme>
      <Paragraph>
        Corporate Inc. is at the forefront of space technology, driving innovations to make humanity a multi-planetary species. Our mission is to establish a sustainable presence on Mars, pioneering the systems and infrastructure necessary for future generations.
      </Paragraph>
    </CorporateTheme>
  );
};

export const LargeParagraph = () => {
  return (
    <CorporateTheme>
      <Paragraph size="large">
        Our vision for Mars is ambitious yet achievable. We are developing advanced propulsion systems, closed-loop life support, and autonomous construction technologies. These efforts are crucial steps towards creating a self-sufficient Martian colony, heralding a new era of exploration and discovery.
      </Paragraph>
    </CorporateTheme>
  );
};

export const SmallParagraphAsDiv = () => {
  return (
    <CorporateTheme>
      <Paragraph element="div" size="small">
        Join us on this historic journey. Corporate Inc. believes that the future of humanity lies among the stars, and Mars is our next giant leap. We are committed to ethical exploration and sustainable development, ensuring that our expansion into space benefits all of mankind.
      </Paragraph>
    </CorporateTheme>
  );
};

export const ParagraphWithCustomStyling = () => {
  return (
    <CorporateTheme>
      <Paragraph
        className="custom-paragraph-style"
        style={{ fontStyle: 'italic', color: 'var(--colors-secondary-default)' }}
      >
        This paragraph demonstrates custom inline styling and an additional CSS class. Corporate Inc. leverages cutting-edge materials science and artificial intelligence to overcome the unique challenges of Martian colonization.
      </Paragraph>
      <style>{`
        .custom-paragraph-style {
          border-left: 3px solid var(--colors-primary-default);
          padding-left: var(--spacing-small);
        }
      `}</style>
    </CorporateTheme>
  );
};