import React, { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './text-input.module.scss';

export type TextInputProps = {
  /**
   * The ID attribute of the input element
   */
  id?: string;
  /**
   * The current value of the input
   */
  value?: string;
  /**
   * Callback function triggered when the input value changes
   */
  onChange?: (value: string) => void;
  /**
   * Placeholder text displayed when the input is empty
   */
  placeholder?: string;
  /**
   * The type of input (text, password, email, etc.)
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  /**
   * The name attribute of the input element
   */
  name?: string;
  /**
   * Additional CSS class name for styling
   */
  className?: string;
  /**
   * Inline styles to be applied to the input
   */
  style?: React.CSSProperties;
  /**
   * Determines if the input is disabled
   */
  disabled?: boolean;
  /**
   * Determines if the input is required
   */
  required?: boolean;
  /**
   * Determines if the input should have an error state
   */
  error?: boolean;
  /**
   * Error message to be displayed when error is true
   */
  errorMessage?: string;
  /**
   * Label text for the input
   */
  label?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      value = '',
      onChange,
      placeholder = '',
      type = 'text',
      name,
      className,
      style,
      disabled = false,
      required = false,
      error = false,
      errorMessage,
      label,
    }: TextInputProps,
    ref
  ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    };

    const inputClassName = classNames(
      styles.input,
      {
        [styles.disabled]: disabled,
        [styles.error]: error,
      },
      className
    );

    return (
      <div className={styles.container} style={style}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
            {required && <span className={styles.requiredMark}>*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClassName}
          disabled={disabled}
          required={required}
          aria-invalid={error}
        />
        {error && errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';