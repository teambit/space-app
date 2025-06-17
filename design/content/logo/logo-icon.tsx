import React from 'react';

interface LogoIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 40, 
  color = 'currentColor',
  className 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--colors-primary-default)" />
          <stop offset="100%" stopColor="var(--colors-tertiary-default)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Orbit Ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="var(--space-elements-orbit-path-color, #6B7280)" 
        strokeWidth="1.5" 
        fill="none" 
        opacity="0.6" 
      />
      
      {/* Planet */}
      <circle 
        cx="50" 
        cy="50" 
        r="25" 
        fill="url(#logo-gradient)" 
        filter="url(#glow)" 
      />
      
      {/* Surface Details - Mars-like */}
      <path 
        d="M40 40C42 35 48 38 50 35C52 32 58 30 62 35C66 40 70 45 65 55C60 65 55 60 50 62C45 64 30 60 40 40Z" 
        fill="var(--space-elements-mars-highlight-color, #D97706)" 
        opacity="0.4" 
      />
      
      {/* Satellite in Orbit */}
      <circle 
        cx="85" 
        cy="50" 
        r="5" 
        fill="var(--space-elements-orbit-object-color, #E5E7EB)" 
      />
      
      {/* Corporate Initial "C" */}
      <path 
        d="M46 45H54C57.3137 45 60 47.6863 60 51V51C60 54.3137 57.3137 57 54 57H46V45Z" 
        fill="var(--colors-text-inverse, #FFFFFF)" 
      />
      <path 
        d="M46 45V57H40V45H46Z" 
        fill="var(--colors-text-inverse, #FFFFFF)" 
      />
    </svg>
  );
};