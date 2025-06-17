import React from 'react';
import { createMounter } from '@teambit/react.mounter';
import { CorporateTheme } from '@corporate/design.corporate-theme';

/**
 * Provides the CorporateTheme to all component compositions (previews).
 * This ensures that components are previewed with the correct styling
 * and theming defined for Corporate Inc.
 * @param {object} props - The properties for the provider.
 * @param {React.ReactNode} props.children - The child components to be rendered within the theme.
 * @returns {JSX.Element} The CorporateTheme provider wrapping the children.
 */
export function CorporateEnvPreviewProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return <CorporateTheme initialTheme="light">{children}</CorporateTheme>;
}

/**
 * The entry point for the preview runtime that renders component compositions.
 * It uses the `CorporateEnvPreviewProvider` to wrap all compositions with the
 * `CorporateTheme`, ensuring they are displayed with the company's standard look and feel.
 * @see https://bit.dev/docs/react-env/component-previews#composition-mounter
 */
export default createMounter(CorporateEnvPreviewProvider);