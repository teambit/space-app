import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from '@corporate/corporate-website.layout.header';
import { Footer } from '@corporate/corporate-website.layout.footer';
import { Homepage } from '@corporate/corporate-website.pages.homepage';
import { Spinner } from '@corporate/design.loaders.spinner';
import styles from './corporate-website.module.scss';

// Lazy-loaded page components for better performance
const AboutUs = lazy(() => import('@corporate/corporate-website.pages.about-us').then(module => ({ default: module.AboutUs })));
const Technologies = lazy(() => import('@corporate/corporate-website.pages.technologies').then(module => ({ default: module.Technologies })));
const MarsVision = lazy(() => import('@corporate/corporate-website.pages.mars-vision').then(module => ({ default: module.MarsVision })));
const News = lazy(() => import('@corporate/corporate-website.pages.news').then(module => ({ default: module.News })));
const Contact = lazy(() => import('@corporate/corporate-website.pages.contact').then(module => ({ default: module.Contact })));

/**
 * The main component for the Corporate Inc. website application.
 * Integrates header, footer, and various pages into a complete website experience.
 */
export function CorporateWebsite() {
  // Navigation links for the header
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Mars Vision', href: '/mars-vision' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact' }
  ];

  // Fallback loader for lazy-loaded pages
  const PageLoader = () => (
    <div className={styles.loaderContainer}>
      <Spinner 
        size={60} 
        loadingText="Preparing for launch..." 
        color="var(--colors-primary-default)"
        secondaryColor="var(--colors-tertiary-default)"
      />
    </div>
  );

  return (
    <div className={styles.corporateWebsite}>
      <Header links={navigationLinks} logoName="Corporate Inc." logoSlogan="Mars Awaits" />
      
      <main className={styles.mainContent}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/mars-vision" element={<MarsVision />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}