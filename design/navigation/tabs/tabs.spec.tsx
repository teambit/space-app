import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { Tabs } from './tabs.js';
import styles from './tabs.module.scss';

describe('Tabs Component', () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Content 1</div>, id: 'tab1' },
    { label: 'Tab 2', content: <div>Content 2</div>, id: 'tab2' },
  ];

  it('should render tabs correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Tabs tabs={tabs} />
      </MemoryRouter>
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(container.querySelector(`.${styles.tabContent}`)).toBeInTheDocument();
  });

  it('should switch tabs when clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Tabs tabs={tabs} />
      </MemoryRouter>
    );
    const tab2Button = screen.getByText('Tab 2');

    fireEvent.click(tab2Button);

    expect(container.querySelector(`.${styles.tabContent}`)?.textContent).toBe('Content 2');
  });

  it('should call onTabChange when a tab is clicked', () => {
    const onTabChange = vi.fn();
    render(
      <MemoryRouter>
        <Tabs tabs={tabs} onTabChange={onTabChange} />
      </MemoryRouter>
    );
    const tab2Button = screen.getByText('Tab 2');
    fireEvent.click(tab2Button);
    expect(onTabChange).toHaveBeenCalledTimes(1);
    expect(onTabChange).toHaveBeenCalledWith(1, 'tab2');
  });
});