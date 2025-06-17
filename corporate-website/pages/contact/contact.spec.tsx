import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Contact } from './contact.js';
import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';

describe('Contact Component', () => {
  it('renders the contact form', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Contact />
        </CorporateTheme>
      </MemoryRouter>
    );

    const headingElement = container.querySelector('h1');
    expect(headingElement).toBeInTheDocument();

    const firstNameInput = container.querySelector<HTMLInputElement>('#firstName');
    expect(firstNameInput).toBeInTheDocument();
  });

  it('updates input values correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Contact />
        </CorporateTheme>
      </MemoryRouter>
    );

    const firstNameInput = container.querySelector<HTMLInputElement>('#firstName');
    fireEvent.change(firstNameInput!, { target: { value: 'John' } });
    expect(firstNameInput!.value).toBe('John');
  });

  it('displays error messages when submitting an empty form', () => {
    const { container } = render(
      <MemoryRouter>
        <CorporateTheme>
          <Contact />
        </CorporateTheme>
      </MemoryRouter>
    );

    const submitButton = container.querySelector('button');
    fireEvent.click(submitButton!);

    const firstNameError = container.querySelector('#firstName[aria-invalid="true"]');
    expect(firstNameError).toBeInTheDocument();
  });
});