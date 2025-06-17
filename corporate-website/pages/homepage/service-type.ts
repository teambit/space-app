/**
 * Type definition for service items
 */
export type ServiceType = {
  /**
   * Unique identifier for the service
   */
  id: string;
  /**
   * Title of the service
   */
  title: string;
  /**
   * Detailed description of the service
   */
  description: string;
  /**
   * URL to the service image
   */
  image: string;
  /**
   * Alt text for the service image
   */
  imageAlt: string;
  /**
   * Optional link to more details about the service
   */
  link?: string;
};