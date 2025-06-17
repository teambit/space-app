import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput } from './text-input.js';
import styles from './text-input.module.scss';
import { MemoryRouter } from 'react-router-dom';

describe('TextInput Component', () => {
  it('should render a basic text input', () => {
    const { container } = render(
      <MemoryRouter>
        <TextInput id="test-input" name="test" />
      </MemoryRouter>
    );
    const inputElement = container.querySelector<HTMLInputElement>('input');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    const onChange = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <TextInput id="test-input" name="test" onChange={(value) => onChange(value)} />
      </MemoryRouter>
    );
    const inputElement = container.querySelector<HTMLInputElement>('input');
    if (!inputElement) {
      throw new Error('Input element not found');
    }
    fireEvent.change(inputElement, { target: { value: 'test value' } });
    expect(onChange).toHaveBeenCalledWith('test value');
  });

  it('should display an error message when error is true', () => {
    const errorMessage = 'This is an error message';
    const { container } = render(
      <MemoryRouter>
        <TextInput id="test-input" name="test" error errorMessage={errorMessage} />
      </MemoryRouter>
    );
    const errorElement = container.querySelector(`.${styles.errorMessage}`);
    expect(errorElement).toHaveTextContent(errorMessage);
  });
});