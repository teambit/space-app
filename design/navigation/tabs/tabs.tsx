import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './tabs.module.scss';

export type TabItem = {
  /**
   * Label text to display on the tab
   */
  label: string;
  
  /**
   * Content to render when tab is active
   */
  content: ReactNode;
  
  /**
   * Optional ID for the tab
   */
  id?: string;
  
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export type TabsProps = {
  /**
   * Array of tab items to display
   */
  tabs: TabItem[];
  
  /**
   * Default selected tab index
   */
  defaultActiveIndex?: number;
  
  /**
   * Callback fired when tab changes
   */
  onTabChange?: (index: number, id?: string) => void;
  
  /**
   * Class name for the tabs container
   */
  className?: string;
  
  /**
   * Additional styles for the component
   */
  style?: React.CSSProperties;
  
  /**
   * Class name for the tab list container
   */
  tabListClassName?: string;
  
  /**
   * Class name for the active tab
   */
  activeTabClassName?: string;
  
  /**
   * Class name for the tab content area
   */
  tabContentClassName?: string;
  
  /**
   * Alignment of the tabs
   */
  alignment?: 'left' | 'center' | 'right';
  
  /**
   * Visual variant of the tabs
   */
  variant?: 'default' | 'boxed' | 'underlined' | 'pills';
}

export function Tabs({
  tabs,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  style,
  tabListClassName,
  activeTabClassName,
  tabContentClassName,
  alignment = 'left',
  variant = 'default'
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number, disabled?: boolean) => {
    if (disabled) return;
    
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index, tabs[index]?.id);
    }
  };

  return (
    <div 
      className={classNames(styles.tabsContainer, className, styles[variant])}
      style={style}
    >
      <div 
        className={classNames(
          styles.tabList, 
          tabListClassName, 
          styles[`align${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`]
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id || index}
            className={classNames(
              styles.tab,
              {
                [styles.activeTab]: index === activeIndex,
                [styles.disabledTab]: tab.disabled,
                [activeTabClassName || '']: index === activeIndex && activeTabClassName
              }
            )}
            onClick={() => handleTabClick(index, tab.disabled)}
            disabled={tab.disabled}
            aria-selected={index === activeIndex}
            role="tab"
            tabIndex={index === activeIndex ? 0 : -1}
          >
            {tab.label}
            <span className={styles.tabHighlight} />
          </button>
        ))}
      </div>
      <div className={classNames(styles.tabContent, tabContentClassName)}>
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}