import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '@corporate/design.actions.button';
import { PageLayout } from '@corporate/design.layouts.page-layout';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { TextInput } from '@corporate/design.inputs.text-input';
import { LocationIcon } from './location-icon.js';
import { PhoneIcon } from './phone-icon.js';
import { EmailIcon } from './email-icon.js';
import { MapPinIcon } from './map-pin-icon.js';
import type { ContactFormData } from './contact-form-type.js';
import styles from './contact.module.scss';

export interface ContactProps {
  /**
   * Optional class name for additional styling
   */
  className?: string;
  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
  /**
   * Office location address
   */
  officeAddress?: string;
  /**
   * Contact phone number
   */
  contactPhone?: string;
  /**
   * Contact email address
   */
  contactEmail?: string;
  /**
   * Map image URL
   */
  mapImageUrl?: string;
  /**
   * Function to handle form submissions
   */
  onSubmitForm?: (formData: ContactFormData) => void;
}

export function Contact({
  className,
  style,
  officeAddress = "Corporate Inc. HQ, 1234 Space Boulevard, Houston, TX 77001",
  contactPhone = "+1 (800) 555-MARS",
  contactEmail = "contact@corporateinc.mars",
  mapImageUrl = "https://images.unsplash.com/photo-1545156521-77bd85671d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  onSubmitForm,
}: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});

  const handleInputChange = (field: keyof ContactFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, boolean>> = {};
    let isValid = true;

    // Required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = true;
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = true;
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = true;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (onSubmitForm) {
        onSubmitForm(formData);
      }
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <PageLayout
      title="Contact Us - Corporate Inc."
      description="Get in touch with Corporate Inc. to discuss our space technology initiatives and Mars colonization plans."
      keywords="contact, space technology, Mars colonization, Corporate Inc."
      pageContent={
        <div className={classNames(styles.contactPage, className)} style={style}>
          <div className={styles.contactHeader}>
            <Heading level={1}>Contact Us</Heading>
            <Paragraph size="large">
              Have questions about our Mars colonization initiative or want to join our mission? 
              We'd love to hear from you. Fill out the form below or use our contact information.
            </Paragraph>
          </div>
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <Heading level={3}>Get In Touch</Heading>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <LocationIcon />
                </span>
                <Paragraph>{officeAddress}</Paragraph>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <PhoneIcon />
                </span>
                <Paragraph>{contactPhone}</Paragraph>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <EmailIcon />
                </span>
                <Paragraph>{contactEmail}</Paragraph>
              </div>
              
              <div className={styles.mapContainer}>
                <img 
                  src={mapImageUrl}
                  alt="Office Location Map"
                  className={styles.mapImage}
                />
                <div className={styles.mapPin}>
                  <MapPinIcon />
                </div>
              </div>
            </div>
            
            <div className={styles.formSection}>
              <Heading level={3}>Send Us a Message</Heading>
              <Paragraph>
                Fill out this form and our team will get back to you within 48 hours.
              </Paragraph>
              
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <TextInput
                    id="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange('firstName')}
                    required
                    error={errors.firstName}
                    errorMessage="First name is required"
                  />
                </div>
                
                <div className={styles.formField}>
                  <TextInput
                    id="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange('lastName')}
                    required
                    error={errors.lastName}
                    errorMessage="Last name is required"
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <TextInput
                    id="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                    error={errors.email}
                    errorMessage="A valid email address is required"
                  />
                </div>
                
                <div className={styles.formField}>
                  <TextInput
                    id="phone"
                    label="Phone Number (optional)"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                  />
                </div>
              </div>
              
              <div className={styles.formField}>
                <TextInput
                  id="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleInputChange('subject')}
                  required
                  error={errors.subject}
                  errorMessage="Subject is required"
                />
              </div>
              
              <div className={classNames(styles.formField, styles.messageField)}>
                <TextInput
                  id="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  required
                  error={errors.message}
                  errorMessage="Message is required"
                />
              </div>
              
              <div className={styles.buttonContainer}>
                <Button appearance="primary" onClick={handleSubmit}>
                  Submit Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}