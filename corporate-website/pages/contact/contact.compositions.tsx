import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Contact } from './contact.js';
import type { ContactFormData } from './contact-form-type.js';

export const BasicContactPage = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Contact />
    </CorporateTheme>
  </MemoryRouter>
);

export const ContactPageWithCustomMarsBaseInfo = () => (
  <MemoryRouter>
    <CorporateTheme>
      <Contact
        officeAddress="Mars Research Outpost Alpha, Valles Marineris Sector, Mars"
        contactPhone="+MARS-OUTPOST-ALPHA-COMMS"
        contactEmail="alpha.operations@corporateinc.mars"
        mapImageUrl="https://images.unsplash.com/photo-1506703719100-a0f3b48c0f85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80"
        // This image is a placeholder for a futuristic Mars base map view
      />
    </CorporateTheme>
  </MemoryRouter>
);

export const ContactPageWithInquirySubmission = () => {
  const handleMarsMissionInquiry = (formData: ContactFormData) => {
    // In a real application, this would send data to a server.
    // For demonstration, we'll use an alert.
    const submissionDetails = `
      New Mars Mission Inquiry:
      --------------------------
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Subject: ${formData.subject}
      Message: 
      ${formData.message}
      --------------------------
      (Simulated submission - data not actually sent)
    `;
    alert(submissionDetails);
  };

  return (
    <MemoryRouter>
      <CorporateTheme>
        <Contact onSubmitForm={handleMarsMissionInquiry} />
      </CorporateTheme>
    </MemoryRouter>
  );
};