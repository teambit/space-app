import React from 'react';
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { GithubIcon } from './github-icon.js';

const CompositionWrapper: React.FC<{ title: string; children: React.ReactNode, description?: string }> = ({ title, description, children }) => (
  <div style={{ marginBottom: 'var(--spacing-large)', padding: 'var(--spacing-default)', border: '1px solid var(--borders-default-color)', borderRadius: 'var(--borders-radius-medium)', backgroundColor: 'var(--colors-surface-primary)' }}>
    <h3 style={{ fontFamily: 'var(--typography-font-family)', color: 'var(--colors-text-primary)', marginTop: 0, marginBottom: description ? 'var(--spacing-xs)' : 'var(--spacing-medium)' }}>
      {title}
    </h3>
    {description && <p style={{fontFamily: 'var(--typography-font-family)', fontSize: 'var(--typography-sizes-body-small)', color: 'var(--colors-text-secondary)', margin: '0 0 var(--spacing-medium) 0'}}>{description}</p>}
    <div style={{ display: 'flex', gap: 'var(--spacing-medium)', alignItems: 'center', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

export const BasicGithubIcon = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)', backgroundColor: 'var(--colors-surface-background)', minHeight: '100vh' }}>
      <CompositionWrapper title="Default Github Icon">
        <GithubIcon />
      </CompositionWrapper>
    </div>
  </CorporateTheme>
);

export const SizedAndColoredGithubIcons = () => (
  <CorporateTheme>
    <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)', backgroundColor: 'var(--colors-surface-background)', minHeight: '100vh' }}>
      <CompositionWrapper title="Sized and Colored Github Icons">
        <div>
          <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>36px, Primary Color</p>
          <GithubIcon size={36} color="var(--colors-primary-default)" />
        </div>
        <div>
          <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>48px, Secondary Color</p>
          <GithubIcon size={48} color="var(--colors-secondary-default)" />
        </div>
        <div>
          <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>64px, Text Color</p>
          <GithubIcon size={64} color="var(--colors-text-primary)" />
        </div>
        <div>
          <p style={{ margin: '0 0 var(--spacing-xs) 0', color: 'var(--colors-text-secondary)', fontSize: 'var(--typography-sizes-caption-default)' }}>Default size, Custom color #FF5733</p>
          <GithubIcon color="#FF5733" />
        </div>
      </CompositionWrapper>
    </div>
  </CorporateTheme>
);

export const InteractiveGithubIcon = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    alert('Github Icon Clicked! Navigating to Corporate Inc. Github page...');
    // In a real app, you might navigate or perform an action
    // window.open('https://github.com/corporateinc', '_blank');
  };

  return (
    <CorporateTheme>
      <div style={{ padding: 'var(--spacing-large)', fontFamily: 'var(--typography-font-family)', backgroundColor: 'var(--colors-surface-background)', minHeight: '100vh' }}>
        <CompositionWrapper 
          title="Interactive Github Icon"
          description="This icon can be clicked and includes accessibility attributes."
        >
          <GithubIcon
            size={48}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
            aria-label="Visit Corporate Inc. on Github"
            style={{ 
              cursor: 'var(--interactions-cursor-pointer)', 
              color: isHovered ? 'var(--colors-primary-hover)' : 'var(--colors-primary-default)',
              transition: 'color var(--interactions-transitions-duration-fast) var(--interactions-transitions-easing-ease-in-out)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Visit Corporate Inc. on Github"
          />
          <p style={{ color: 'var(--colors-text-primary)', fontSize: 'var(--typography-sizes-body-default)'}}>
            Click the icon to simulate navigation.
          </p>
        </CompositionWrapper>
      </div>
    </CorporateTheme>
  );
};