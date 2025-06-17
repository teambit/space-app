import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Button } from './button.js';
import styles from './button.module.scss';

describe('Button Component', () => {
  it('should render a button with the correct text', () => {
    const { container } = render(
      <Button>Click me</Button>,
    );
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('should call onClick function when clicked', () => {
    const onClick = vi.fn();
    const { container } = render(
      <Button onClick={onClick}>Click me</Button>,
    );
    const button = container.querySelector('button');
    fireEvent.click(button as HTMLButtonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a disabled button', () => {
    const { container } = render(
      <Button disabled>Click me</Button>,
    );
    const button = container.querySelector('button');
    expect(button).toBeDisabled();
  });

  it('should render a primary button with the correct class', () => {
    const { container } = render(
      <Button appearance="primary">Click me</Button>,
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass(styles.primary);
  });

  it('should render a link when href is provided', () => {
    const { container } = render(
      <MemoryRouter>
        <Button href="/test">Click me</Button>
      </MemoryRouter>
    );
    const link = container.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
});