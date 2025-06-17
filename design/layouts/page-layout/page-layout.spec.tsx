import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PageLayout } from './page-layout.js';
import styles from './page-layout.module.scss';

describe('PageLayout', () => {
  it('should render the page content', () => {
    const { container } = render(
      <MemoryRouter>
        <PageLayout pageContent={<p>Test Content</p>} />
      </MemoryRouter>
    );
    const contentElement = container.querySelector(`.${styles.pageContent}`);
    expect(contentElement).toBeInTheDocument();
    expect(contentElement?.textContent).toBe('Test Content');
  });

  it('should render the side navigation', () => {
    const { container } = render(
      <MemoryRouter>
        <PageLayout sideNavigation={<aside>Side Nav</aside>} />
      </MemoryRouter>
    );
    const sideNavElement = container.querySelector(`.${styles.sideNav}`);
    expect(sideNavElement).toBeInTheDocument();
    expect(sideNavElement?.textContent).toBe('Side Nav');
  });

  it('should render tabs when showTabs is true and tabs are provided', () => {
    const tabs = [{ label: 'Tab 1', content: <div>Content 1</div> }];
    const { container } = render(
      <MemoryRouter>
        <PageLayout showTabs={true} tabs={tabs} />
      </MemoryRouter>
    );

    const tabsContainer = container.querySelector(`.${styles.tabsContainer}`);
    expect(tabsContainer).toBeInTheDocument();
  });
});