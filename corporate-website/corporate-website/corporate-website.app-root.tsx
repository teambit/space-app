import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CorporateWebsite } from "./corporate-website.js";
import { CorporateTheme } from '@corporate/design.corporate-theme';

/**
 * mounting for client side rendering.
 */
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <CorporateTheme>
        <CorporateWebsite />
      </CorporateTheme>
    </BrowserRouter>
  );
}

if (import.meta.hot) {
  import.meta.hot.accept();
}