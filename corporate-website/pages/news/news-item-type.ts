/**
 * Represents a news article or press release item.
 */
export type NewsItem = {
  /**
   * Unique identifier for the news item
   */
  id: string;
  
  /**
   * Title of the news article or press release
   */
  title: string;
  
  /**
   * Short summary or excerpt of the article
   */
  summary: string;
  
  /**
   * Full content of the news article (may contain HTML)
   */
  content?: string;
  
  /**
   * Publication date of the article
   */
  date: string;
  
  /**
   * URL to the article image
   */
  imageUrl?: string;
  
  /**
   * Alternative text for the image
   */
  imageAlt?: string;
  
  /**
   * Category or type of news (e.g., "Press Release", "Announcement", "Update")
   */
  category?: string;
  
  /**
   * Author of the article
   */
  author?: string;
  
  /**
   * URL to the full article if it exists elsewhere
   */
  externalUrl?: string;
  
  /**
   * Tags associated with the article for categorization
   */
  tags?: string[];
}