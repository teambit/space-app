import type { ReactNode, CSSProperties } from 'react';
import type { TabItem } from '@corporate/design.navigation.tabs';
import type { MetaTag } from './meta-tag-type.js';

export type PageLayoutProps = {
  /**
   * Page title to be set in the document head
   */
  title?: string;
  
  /**
   * Page meta description for SEO
   */
  description?: string;
  
  /**
   * Keywords for SEO
   */
  keywords?: string;
  
  /**
   * Additional meta tags to include in the head
   */
  metaTags?: MetaTag[];
  
  /**
   * Main content of the page
   */
  pageContent?: ReactNode;
  
  /**
   * Side navigation component
   */
  sideNavigation?: ReactNode;
  
  /**
   * Tab items to display if using tabbed layout
   */
  tabs?: TabItem[];
  
  /**
   * Whether to show tabs navigation
   */
  showTabs?: boolean;
  
  /**
   * Visual variant of the tabs
   */
  tabsVariant?: 'default' | 'boxed' | 'underlined' | 'pills';
  
  /**
   * Alignment of the tabs
   */
  tabsAlignment?: 'left' | 'center' | 'right';
  
  /**
   * Children elements for the page
   */
  children?: ReactNode;
  
  /**
   * CSS class name for custom styling
   */
  className?: string;
  
  /**
   * Inline styles for the component
   */
  style?: CSSProperties;
};