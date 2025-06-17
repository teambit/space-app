import React, { type ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { Tabs, type TabItem } from '@corporate/design.navigation.tabs';
import styles from './page-layout.module.scss';
import type { PageLayoutProps } from './page-layout-props-type.js';

export function PageLayout({
  title = 'Corporate Inc. - Building the Future on Mars',
  description = 'Corporate Inc. is a leading space technology company with the vision to populate Mars and expand human presence beyond Earth.',
  keywords = 'space technology, Mars colonization, aerospace engineering, interplanetary travel',
  metaTags = [],
  pageContent,
  sideNavigation,
  tabs,
  showTabs = false,
  tabsVariant = 'default',
  tabsAlignment = 'left',
  className,
  style,
  children
}: PageLayoutProps) {
  return (
    <>
      <div className={classNames(styles.pageLayout, className)} style={style}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          {metaTags.map((tag, index) => (
            <meta key={index} name={tag.name} content={tag.content} />
          ))}
        </Helmet>

        <div className={styles.contentContainer}>
          {sideNavigation && (
            <aside className={styles.sideNav}>
              {sideNavigation}
            </aside>
          )}

          <main className={styles.mainContent}>
            {showTabs && tabs && tabs.length > 0 ? (
              <div className={styles.tabsContainer}>
                <Tabs 
                  tabs={tabs}
                  variant={tabsVariant}
                  alignment={tabsAlignment}
                />
              </div>
            ) : (
              <div className={styles.pageContent}>
                {pageContent || children}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}