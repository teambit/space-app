/**
 * Type definition for announcement items
 */
export type AnnouncementType = {
  /**
   * The title of the announcement
   */
  title: string;
  /**
   * Summary or brief description of the announcement
   */
  summary: string;
  /**
   * Date when the announcement was made (ISO format)
   */
  date?: string;
  /**
   * URL to the full announcement
   */
  linkUrl: string;
  /**
   * Custom text for the link (defaults to "Read More" in the component)
   */
  linkText?: string;
  /**
   * Optional image URL related to the announcement
   */
  imageUrl?: string;
};