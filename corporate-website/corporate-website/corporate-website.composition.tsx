import { MemoryRouter } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { CorporateWebsite } from "./corporate-website.js";
    
export const CorporateWebsiteBasic = () => {
  return (
    <MemoryRouter>
      <CorporateTheme>
        <CorporateWebsite />
      </CorporateTheme>
    </MemoryRouter>
  );
};