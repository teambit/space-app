import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { News } from './news.js';

describe('News Component', () => {
  it('should render the component with a heading', () => {
    render(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
    // More specific query for the main heading
    const headingElement = screen.getByRole('heading', { level: 1, name: /Latest News & Announcements/i });
    expect(headingElement).not.toBeNull();
  });

  it('should render the default categories', () => {
    render(
      <MemoryRouter>
        <News />
      </MemoryRouter>
    );
    // Check for existence of category buttons
    const allCategoryButton = screen.getByRole('button', { name: 'All' });
    expect(allCategoryButton).not.toBeNull();
    const technologyCategoryButton = screen.getByRole('button', { name: 'Technology' });
    expect(technologyCategoryButton).not.toBeNull();
  });

  it('should display "No news articles available in this category" when no news is passed and a category other than "All" is selected', () => {
    render(
      <MemoryRouter>
        <News news={[]} categories={['All', 'SpecificEmptyCategory']} />
      </MemoryRouter>
    );
    // Click a specific category to trigger the empty state for that category
    const specificCategoryButton = screen.getByRole('button', { name: 'SpecificEmptyCategory' });
    specificCategoryButton.click();

    const noNewsMessage = screen.getByText(/No news articles available in this category. Please check back later./i);
    expect(noNewsMessage).not.toBeNull();
  });

  it('should render featured news when "All" category is selected and featured news is provided', () => {
    const featured = [{
      id: 'feat-test-1',
      title: 'Featured Test News',
      summary: 'This is a featured test.',
      date: '2024-01-01',
      category: 'TestCategory'
    }];
    render(
      <MemoryRouter>
        <News featuredNews={featured} news={[]} />
      </MemoryRouter>
    );
    const featuredHeading = screen.getByRole('heading', { level: 2, name: /Featured Stories/i });
    expect(featuredHeading).not.toBeNull();
    const featuredArticleTitle = screen.getByText('Featured Test News');
    expect(featuredArticleTitle).not.toBeNull();
  });

  it('should not render featured news section if "All" is not selected or no featured news', () => {
    render(
      <MemoryRouter>
        <News featuredNews={[]} news={[]} categories={['All', 'OtherCategory']} />
      </MemoryRouter>
    );
    const otherCategoryButton = screen.getByRole('button', { name: 'OtherCategory' });
    otherCategoryButton.click();

    const featuredHeading = screen.queryByRole('heading', { level: 2, name: /Featured Stories/i });
    expect(featuredHeading).toBeNull();
  });

  it('should render "Load More Articles" button if there are more articles to load', () => {
    const manyNewsItems = Array.from({ length: 10 }, (_, i) => ({
      id: `news-${i}`,
      title: `News Item ${i}`,
      summary: `Summary ${i}`,
      date: '2024-01-01',
      category: 'Technology'
    }));
    render(
      <MemoryRouter>
        <News news={manyNewsItems} />
      </MemoryRouter>
    );
    const loadMoreButton = screen.getByRole('button', { name: /Load More Articles/i });
    expect(loadMoreButton).not.toBeNull();
  });

  it('should not render "Load More Articles" button if all articles are visible', () => {
    const fewNewsItems = Array.from({ length: 3 }, (_, i) => ({
      id: `news-${i}`,
      title: `News Item ${i}`,
      summary: `Summary ${i}`,
      date: '2024-01-01',
      category: 'Technology'
    }));
    render(
      <MemoryRouter>
        <News news={fewNewsItems} />
      </MemoryRouter>
    );
    const loadMoreButton = screen.queryByRole('button', { name: /Load More Articles/i });
    expect(loadMoreButton).toBeNull();
  });
});