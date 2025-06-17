import React from 'react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { Link, useLocation, useParams, useNavigate, useSearchQuery } from './link.js';
import styles from './link-compositions.module.scss';

const compositionWrapperStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium)',
  fontFamily: 'var(--typography-font-family)',
  color: 'var(--colors-text-primary)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-small)',
};

const compositionSectionStyle: React.CSSProperties = {
  padding: 'var(--spacing-medium)',
  border: '1px solid var(--borders-default-color)',
  borderRadius: 'var(--borders-radius-medium)',
  backgroundColor: 'var(--colors-surface-primary)',
};

/**
 * Demonstrates internal links using React Router.
 */
export const InternalLinks = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <h3>Internal Navigation: Exploring Mars</h3>
        <p>Navigate to different sections of our Mars colonization project.</p>
        <Link href="/missions">Our Current Missions</Link>
        <Link href="/technology/propulsion">Advanced Propulsion Systems</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

/**
 * Demonstrates external links.
 */
export const ExternalLinks = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <h3>External Resources: Space Exploration</h3>
        <p>Explore valuable external resources related to space and technology.</p>
        <Link href="https://www.nasa.gov" external>
          NASA Official Website
        </Link>
        <Link href="https://www.spacex.com" external target="_blank">
          SpaceX (Opens in new tab)
        </Link>
        <Link href="https://www.esa.int" external rel="noopener">
          European Space Agency
        </Link>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

/**
 * Demonstrates a link with custom styling via className.
 */
export const CustomStyledLink = () => (
  <MemoryRouter>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <h3>Special Announcement Link</h3>
        <p>This link uses a custom class for enhanced visual presence.</p>
        <Link href="/careers/mars-colonist" className={styles.customCallToAction}>
          Apply Now: Become a Mars Colonist!
        </Link>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);

/**
 * Helper component to display information from React Router hooks.
 */
const HooksDisplayComponent = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const searchQuery = useSearchQuery();

  const preStyle: React.CSSProperties = {
    backgroundColor: 'var(--colors-surface-secondary)',
    padding: 'var(--spacing-small)',
    borderRadius: 'var(--borders-radius-small)',
    fontSize: 'var(--typography-sizes-body-small)',
    overflowX: 'auto',
    color: 'var(--colors-text-secondary)',
    border: '1px solid var(--borders-default-color)',
  };

  const buttonStyle: React.CSSProperties = {
    fontFamily: 'var(--typography-font-family)',
    fontSize: 'var(--typography-sizes-body-default)',
    padding: 'var(--spacing-xs) var(--spacing-small)',
    backgroundColor: 'var(--colors-secondary-default)',
    color: 'var(--colors-text-inverse)',
    border: 'none',
    borderRadius: 'var(--borders-radius-medium)',
    cursor: 'var(--interactions-cursor-pointer)',
    transition: 'background-color var(--interactions-transitions-duration-fast)',
  };


  return (
    <div style={compositionSectionStyle}>
      <h4>Current Route Details:</h4>
      <pre style={preStyle}>
        <code>
          Pathname: {location.pathname}
          <br />
          Search Params (e.g., 'query'): {searchQuery.get('query') || 'N/A'}
          <br />
          URL Params: {JSON.stringify(params, null, 2)}
        </code>
      </pre>
      <button
        style={buttonStyle}
        onClick={() => navigate('/overview?query=from_button', { state: { navigatedFrom: location.pathname } })}
      >
        Navigate to Overview Page
      </button>
    </div>
  );
};

/**
 * Demonstrates the usage of exposed React Router hooks.
 */
export const LinkWithHooksDemo = () => (
  <MemoryRouter initialEntries={['/research/terraforming?query=initial_page_load']}>
    <CorporateTheme>
      <div style={compositionWrapperStyle}>
        <h3>Interactive Research Portal</h3>
        <p>
          Click links to navigate and observe how URL parameters and location details change.
          These are powered by hooks exposed from our Link component.
        </p>
        <nav style={{ display: 'flex', gap: 'var(--spacing-default)', marginBottom: 'var(--spacing-medium)', flexWrap: 'wrap' }}>
          <Link href="/research/terraforming?query=terraforming_docs">
            Terraforming Studies
          </Link>
          <Link href="/research/life-support/oxygen_generation?query=life_support_tech">
            Oxygen Generation Tech
          </Link>
          <Link href="/simulations/colony_alpha/population_dynamics?query=simulation_data">
            Colony Alpha Simulation
          </Link>
        </nav>

        <Routes>
          <Route path="/research/:area" element={<Outlet />}>
            <Route path=":topic" element={<HooksDisplayComponent />} />
            <Route index element={<HooksDisplayComponent />} />
          </Route>
          <Route path="/simulations/:colonyName/:dataType" element={<HooksDisplayComponent />} />
          <Route path="/overview" element={<HooksDisplayComponent />} />
          <Route path="*" element={
            <div style={compositionSectionStyle}>
              <p>Select a research topic or simulation link above to view details.</p>
            </div>
          } />
        </Routes>
      </div>
    </CorporateTheme>
  </MemoryRouter>
);