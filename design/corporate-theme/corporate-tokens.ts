/**
 * Corporate tokens theme.
 * Include all tokens in this object.
 */
export function corporateTokens() {
  const tokens = {
    /**
     * Color Palette
     */
    colors: {
      primary: {
        default: '#0C54C0', // Deep space blue - main brand color
        hover: '#1A65D1', // Lighter blue for hover states
        active: '#0A42A0', // Darker blue for active states
      },
      secondary: {
        default: '#FF5E3A', // Mars red/orange - accent color
        hover: '#FF7F5C', // Lighter orange for hover states
        active: '#E44C29', // Darker orange for active states
      },
      tertiary: {
        default: '#16C5B7', // Futuristic teal - tertiary accent
        hover: '#1CD6C7', // Lighter teal for hover
        active: '#12A799', // Darker teal for active
      },
      surface: {
        background: '#F8F9FC', // Light, airy background (like space)
        primary: '#FFFFFF', // Clean white for primary surfaces
        secondary: '#EEF1F8', // Slightly blue-tinted secondary surface
        tertiary: '#E0E7F2', // Deeper blue-tinted tertiary surface
      },
      text: {
        primary: '#0A1E3C', // Deep space blue-black for main text
        secondary: '#506580', // Muted blue-gray for secondary text
        tertiary: '#8A99AD', // Light blue-gray for tertiary text
        inverse: '#FFFFFF', // White text for dark backgrounds
      },
      status: {
        positive: { default: '#05A66B', subtle: '#E6F7F0' }, // Success green
        negative: { default: '#E02C2C', subtle: '#FDECEC' }, // Error red
        warning: { default: '#FFA726', subtle: '#FFF4E5' }, // Warning orange
        info: { default: '#0C7CD5', subtle: '#E8F1FD' }, // Info blue
      },
      overlay: 'rgba(10, 30, 60, 0.7)', // Space-like semi-transparent overlay
    },

    borders: {
      default: {
        color: '#D2DCE8', // Subtle blue-gray border
        width: '1px',
        style: 'solid',
      },
      focus: {
        color: '#0C54C0', // Primary blue for focus
        width: '2px',
        style: 'solid',
        offset: '2px',
      },
      radius: {
        small: '4px', // Subtle rounding for small elements
        medium: '8px', // Standard rounding for components
        large: '16px', // Generous rounding for large elements
        pill: '24px', // Pill shape for buttons or tags
        circle: '50%', // Perfect circle for avatars or icons
      },
    },

    /**
     * Typography System
     */
    typography: {
      fontFamily: "'Space Grotesk', 'Inter', sans-serif", // Modern, tech-forward typefaces
      sizes: {
        display: { large: '72px', medium: '56px', small: '40px' },
        heading: {
          h1: '36px',
          h2: '30px',
          h3: '24px',
          h4: '20px',
          h5: '18px',
          h6: '16px',
        },
        body: { large: '18px', medium: '16px', default: '16px', small: '14px' },
        caption: { default: '12px', medium: '14px' },
      },
      lineHeight: {
        base: '1.6', // Comfortable reading for body text
        heading: '1.3', // Tighter for headings
        display: '1.1', // Very tight for large display text
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
      },
      letterSpacing: {
        tight: '-0.02em', // For large display text
        normal: '0',
        wide: '0.03em', // For small caps or emphasis
        extraWide: '0.1em', // For special text effects
      },
    },

    /**
     * Spacing & Layout
     */
    spacing: {
      xxs: '2px',
      xs: '4px',
      small: '8px',
      default: '16px',
      medium: '24px',
      large: '32px',
      xl: '48px',
      xxl: '64px',
      xxxl: '96px',
    },

    layout: {
      maxPageWidth: '1440px', // Wide but controlled max width
      contentWidth: '1200px', // Standard content width
      narrowWidth: '900px', // For text-focused sections
      gutter: '24px', // Space between columns
      sectionSpacing: '80px', // Vertical rhythm between major sections
    },

    /**
     * Visual Effects
     */
    effects: {
      shadows: {
        xs: '0px 1px 2px rgba(10, 30, 60, 0.08)', // Subtle shadow
        small: '0px 2px 4px rgba(10, 30, 60, 0.12)',
        medium: '0px 4px 12px rgba(10, 30, 60, 0.16)',
        large: '0px 8px 24px rgba(10, 30, 60, 0.2)',
        xLarge: '0px 16px 36px rgba(10, 30, 60, 0.25)',
        innerGlow: 'inset 0px 0px 20px rgba(12, 84, 192, 0.05)', // Subtle inner blue glow
      },
      opacity: { 
        disabled: '0.5', 
        hover: '0.8', 
        faint: '0.2', 
        semiOpaque: '0.7',
        overlay: '0.9',
      },
      gradients: {
        primary: 'linear-gradient(135deg, #0C54C0, #127ED9)', // Blue gradient
        secondary: 'linear-gradient(135deg, #FF5E3A, #FF8B6B)', // Orange gradient (Mars-like)
        spaceEffect: 'linear-gradient(to bottom, #0A1E3C, #0C54C0)', // Deep space effect
        futuristic: 'linear-gradient(90deg, #16C5B7, #0C54C0)', // Teal to blue futuristic gradient
        subtleBackground: 'linear-gradient(180deg, rgba(248, 249, 252, 0.5) 0%, rgba(224, 231, 242, 0.5) 100%)',
      },
      blur: {
        small: 'blur(4px)',
        medium: 'blur(8px)',
        large: 'blur(16px)',
        glassmorphism: 'blur(12px) saturate(180%)', // For glass-like effect
      },
    },    

    /**
     * Interaction & Motion
     */
    interactions: {
      cursor: { 
        pointer: 'pointer', 
        disabled: 'not-allowed',
        text: 'text', 
        grab: 'grab', 
        grabbing: 'grabbing',
        zoomIn: 'zoom-in',
      },
      zIndex: { 
        base: '1', 
        elevated: '10',
        floating: '50',
        sticky: '100',
        modal: '500', 
        tooltip: '600', 
        overlay: '1000',
      },
      transitions: {
        duration: { 
          instant: '0.1s',
          fast: '0.2s', 
          medium: '0.3s', 
          slow: '0.5s', 
          verySlow: '0.8s',
          extraSlow: '1.2s',
        },
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)', // Standard smooth transition
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)', // Deceleration curve
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)', // Acceleration curve
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)', // Standard curve, more emphasis
          spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Springy effect
          spaceWarp: 'cubic-bezier(0.19, 1, 0.22, 1)', // Extreme curve for special effects
        },
        property: {
          all: 'all',
          transform: 'transform',
          opacity: 'opacity',
          color: 'color',
          backgroundColor: 'background-color',
          shadow: 'box-shadow',
          size: 'width, height',
        },
      },
      hoverEffect: {
        lift: 'translateY(-4px)', // Lift element up slightly
        scale: 'scale(1.03)', // Subtle scaling effect
        glow: '0px 0px 16px rgba(12, 84, 192, 0.3)', // Subtle glow effect
        highlight: 'brightness(1.05)', // Subtle brightness increase
      },
    },
    
    /**
     * Space Technology Specific Tokens
     */
    spaceElements: {
      constellation: {
        color: '#FFFFFF',
        density: 'medium',
        size: 'small',
      },
      orbit: {
        pathColor: 'rgba(12, 84, 192, 0.2)',
        objectColor: '#0C54C0',
        speed: 'medium',
      },
      mars: {
        surfaceColor: '#C1440E',
        atmosphereColor: 'rgba(255, 94, 58, 0.2)',
        highlightColor: '#FF8B6B',
      },
    },
  };

  return tokens;
}

/**
 * Use tokens from this schema as css variables in your components.
 * For example, use `colors.primary.default` as css variable `--colors-primary-default`
 */
export type CorporateThemeSchema = ReturnType<typeof corporateTokens>;