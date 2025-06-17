import React from 'react';
import { render } from '@testing-library/react';
import { Flex } from './flex.js';
import styles from './flex.module.scss';
import { MemoryRouter } from 'react-router-dom';

describe('Flex Component', () => {
  it('should render children within a Flex container', () => {
    const { container } = render(
      <MemoryRouter>
        <Flex>
          <div>Child 1</div>
          <div>Child 2</div>
        </Flex>
      </MemoryRouter>
    );
    expect(container.querySelector(`.${styles.flex}`)).toBeInTheDocument();
    expect(container.textContent).toContain('Child 1');
    expect(container.textContent).toContain('Child 2');
  });

  it('should apply direction column modifier', () => {
    const { container } = render(
      <MemoryRouter>
        <Flex direction="column">
          <div>Item 1</div>
        </Flex>
      </MemoryRouter>
    );
    expect(container.querySelector(`.${styles.directionColumn}`)).toBeInTheDocument();
  });

  it('should apply justify content space-between modifier', () => {
    const { container } = render(
      <MemoryRouter>
        <Flex justify="space-between">
          <div>Item 1</div>
          <div>Item 2</div>
        </Flex>
      </MemoryRouter>
    );
    expect(container.querySelector(`.${styles.justifySpaceBetween}`)).toBeInTheDocument();
  });
});