import React, { useState } from 'react';
import { PageLayout } from '@corporate/design.layouts.page-layout';
import { Heading } from '@corporate/design.typography.heading';
import { Paragraph } from '@corporate/design.typography.paragraph';
import { Card } from '@corporate/design.content.card';
import classNames from 'classnames';
import styles from './news.module.scss';
import type { NewsItem } from './news-item-type.js';

export type NewsProps = {
  /**
   * Featured news articles to display prominently
   */
  featuredNews?: NewsItem[];
  
  /**
   * Regular news articles to display in the grid
   */
  news?: NewsItem[];
  
  /**
   * List of available news categories for filtering
   */
  categories?: string[];
  
  /**
   * Page title for SEO
   */
  pageTitle?: string;
  
  /**
   * Page description for SEO
   */
  pageDescription?: string;
  
  /**
   * Additional CSS class name
   */
  className?: string;
  
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

// Default featured news items
const DEFAULT_FEATURED_NEWS: NewsItem[] = [
  {
    id: 'feat-1',
    title: 'Corporate Inc. Successfully Tests New Mars Habitat Prototype',
    summary: 'Our latest Mars habitat prototype has completed a year-long Earth-based test with outstanding results, bringing us one step closer to sustainable living on the Red Planet.',
    date: '2024-06-15',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80b',
    imageAlt: 'Mars habitat dome prototype in desert testing environment',
    category: 'Technology',
    author: 'Dr. Sarah Chen, Chief Technology Officer',
    tags: ['Mars Colonization', 'Habitat', 'Technology', 'R&D']
  },
  {
    id: 'feat-2',
    title: 'New Partnership Announced with Global Space Agency',
    summary: 'Corporate Inc. has entered into a strategic partnership with the Global Space Agency to accelerate our Mars mission timeline and share resources for interplanetary exploration.',
    date: '2024-06-10',
    imageUrl: 'https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Corporate Inc. and Global Space Agency leaders shaking hands',
    category: 'Partnership',
    author: 'Marcus Zhang, Chief Executive Officer',
    tags: ['Partnership', 'Global Space Agency', 'Collaboration']
  }
];

// Default regular news items
const DEFAULT_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Corporate Inc. Launches New Mars Rover Design',
    summary: 'Our engineering team has unveiled a revolutionary rover design capable of traversing previously inaccessible Martian terrain.',
    date: '2024-06-05',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'New Mars rover prototype in test facility',
    category: 'Technology',
    tags: ['Mars Exploration', 'Rover', 'Technology']
  },
  {
    id: 'news-2',
    title: 'Q2 Financial Results Exceed Expectations',
    summary: 'Corporate Inc. reports strong Q2 2024 results with revenues up 28% year-over-year, driven by increased investments in our Mars infrastructure projects.',
    date: '2024-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Corporate Inc. financial report chart',
    category: 'Financial',
    tags: ['Financial Results', 'Investor Relations', 'Growth']
  },
  {
    id: 'news-3',
    title: 'Corporate Inc. Expands Research Campus',
    summary: 'Our research and development capabilities are growing with a new 50-acre campus dedicated to Mars atmospheric and geological studies.',
    date: '2024-05-10',
    imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Aerial view of the new Corporate Inc. research campus',
    category: 'Facilities',
    tags: ['R&D', 'Expansion', 'Research']
  },
  {
    id: 'news-4',
    title: 'New Life Support System Beats Industry Standards',
    summary: "Corporate Inc.'s next-generation life support system has shown 30% greater efficiency in closed-environment testing, a critical advancement for Mars habitation.",
    date: '2024-04-28',
    imageUrl: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Engineer testing new life support system components',
    category: 'Technology',
    tags: ['Life Support', 'Engineering', 'Technology']
  },
  {
    id: 'news-5',
    title: 'Corporate Inc. Hosts Mars Colony Design Competition',
    summary: 'Global architects and designers invited to participate in our competition to envision the future of human habitation on Mars.',
    date: '2024-04-15',
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Artistic rendering of a futuristic Mars colony design',
    category: 'Event',
    tags: ['Design', 'Competition', 'Architecture', 'Mars Colony']
  },
  {
    id: 'news-6',
    title: 'Corporate Inc. Chief Scientist Awarded Prestigious Honor',
    summary: 'Dr. Elena Rodriguez receives the International Space Innovation Medal for her groundbreaking work on Martian soil remediation.',
    date: '2024-04-03',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Dr. Rodriguez receiving award at ceremony',
    category: 'Recognition',
    tags: ['Award', 'Science', 'Innovation']
  }
];

// Default categories
const DEFAULT_CATEGORIES = ['All', 'Technology', 'Partnership', 'Financial', 'Facilities', 'Event', 'Recognition'];
const DEFAULT_NEWS_ITEMS_PER_PAGE = 6;
const NEWS_ITEMS_TO_LOAD = 3;

/**
 * News page component that displays featured news articles and regular news in a grid layout.
 * Supports filtering by categories and loading more articles.
 */
export function News({
  featuredNews = DEFAULT_FEATURED_NEWS,
  news = DEFAULT_NEWS,
  categories = DEFAULT_CATEGORIES,
  pageTitle = 'Latest News | Corporate Inc. - Building the Future on Mars',
  pageDescription = 'Stay updated with the latest news, press releases, and announcements from Corporate Inc., the leading space technology company pioneering Mars colonization.',
  className,
  style
}: NewsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleNewsCount, setVisibleNewsCount] = useState(DEFAULT_NEWS_ITEMS_PER_PAGE);
  
  // Filter news based on selected category
  const filteredNews = selectedCategory === 'All' 
    ? news 
    : news.filter(item => item.category === selectedCategory);
  
  // Visible news items based on the current limit
  const visibleNews = filteredNews.slice(0, visibleNewsCount);
  
  // Format date to more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    try {
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch (e) {
      return dateString; // Fallback for invalid date
    }
  };
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleNewsCount(DEFAULT_NEWS_ITEMS_PER_PAGE); // Reset visible count when changing category
  };
  
  // Handle loading more news
  const handleLoadMore = () => {
    setVisibleNewsCount(prevCount => prevCount + NEWS_ITEMS_TO_LOAD);
  };
  
  return (
    <PageLayout
      title={pageTitle}
      description={pageDescription}
      keywords="Mars colonization, space technology, corporate news, press releases, space exploration, Mars mission"
      pageContent={
        <div className={classNames(styles.newsContainer, className)} style={style}>
          {/* Header Section */}
          <div className={styles.headerSection}>
            <Heading level={1}>Latest News & Announcements</Heading>
            <Paragraph size="large" className={styles.subtitle}>
              Stay updated with Corporate Inc.&apos;s journey towards Mars colonization
            </Paragraph>
          </div>
          
          {/* Categories Filter */}
          {categories && categories.length > 0 && (
            <div className={styles.categoriesContainer}>
              {categories.map(category => (
                <button
                  key={category}
                  className={classNames(
                    styles.categoryButton,
                    selectedCategory === category && styles.categoryButtonActive
                  )}
                  onClick={() => handleCategoryChange(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          
          {/* Featured News Section - Only show if All category is selected and there are featured news */}
          {selectedCategory === 'All' && featuredNews && featuredNews.length > 0 && (
            <section className={styles.featuredNews}>
              <Heading level={2}>Featured Stories</Heading>
              <div className={styles.featuredNewsGrid}>
                {featuredNews.map(item => (
                  <Card
                    key={item.id}
                    title={item.title}
                    image={item.imageUrl}
                    imageAlt={item.imageAlt || 'News image'}
                    variant="elevated"
                    interactive
                    footer={
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <span>{formatDate(item.date)}</span>
                        {item.category && (
                          <span style={{ 
                            marginLeft: 'var(--spacing-small)',
                            backgroundColor: 'var(--colors-primary-default)',
                            color: 'var(--colors-text-inverse)',
                            padding: 'var(--spacing-xxs) var(--spacing-xs)',
                            borderRadius: 'var(--borders-radius-small)',
                            fontSize: 'var(--typography-sizes-caption-default)'
                          }}>
                            {item.category}
                          </span>
                        )}
                      </div>
                    }
                  >
                    <div>
                      <Paragraph size="large">{item.summary}</Paragraph>
                      {item.author && (
                        <Paragraph size="small" style={{ marginTop: 'var(--spacing-default)' }}>
                          By {item.author}
                        </Paragraph>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}
          
          {/* Latest News Section */}
          <section className={styles.latestNews}>
            <Heading level={2}>
              {selectedCategory === 'All' ? 'Latest Updates' : `${selectedCategory} News`}
            </Heading>
            
            {visibleNews.length > 0 ? (
              <div className={styles.newsGrid}>
                {visibleNews.map(item => (
                  <Card
                    key={item.id}
                    title={item.title}
                    image={item.imageUrl}
                    imageAlt={item.imageAlt || 'News image'}
                    variant="default"
                    interactive
                    footer={
                       <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                        <span>{formatDate(item.date)}</span>
                        {item.category && (
                          <span style={{ 
                            marginLeft: 'var(--spacing-small)',
                            backgroundColor: 'var(--colors-surface-secondary)',
                            padding: 'var(--spacing-xxs) var(--spacing-xs)',
                            borderRadius: 'var(--borders-radius-small)',
                            fontSize: 'var(--typography-sizes-caption-default)'
                          }}>
                            {item.category}
                          </span>
                        )}
                      </div>
                    }
                  >
                    <Paragraph>{item.summary}</Paragraph>
                  </Card>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 'var(--spacing-xl) 0' }}>
                <Paragraph>
                  No news articles available in this category. Please check back later.
                </Paragraph>
              </div>
            )}
            
            {/* Load More Button - Show only if there are more articles to load */}
            {visibleNews.length < filteredNews.length && (
              <div className={styles.loadMoreContainer}>
                <button 
                  className={styles.loadMoreButton}
                  onClick={handleLoadMore}
                  type="button"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </section>
        </div>
      }
    />
  );
}