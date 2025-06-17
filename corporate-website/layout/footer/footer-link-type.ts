export type FooterLinkType = {
  /**
   * Title of the link or heading
   */
  title: string;

  /**
   * URL for the link (not required for headings)
   */
  url?: string;

  /**
   * Whether this item is a column heading
   */
  isHeading?: boolean;

  /**
   * Whether the link is external and should open in a new tab
   */
  external?: boolean;
};