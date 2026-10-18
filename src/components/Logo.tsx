import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showWordmark = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-9 h-9 rounded-xl',
    lg: 'w-11 h-11 rounded-2xl',
  }[size];

  const textSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Precision Scissors / Shear Badge exactly matching Clipper app */}
      <div
        className={`relative ${iconDimensions} bg-[#D4FF54] p-1.5 shadow-lg shadow-[#D4FF54]/20 group-hover:shadow-[#D4FF54]/40 transition-all duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0F1115"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full"
        >
          {/* Authentic Clipper Crossed Shears Icon */}
          <circle cx="6" cy="6" r="3" strokeWidth="2.2" />
          <circle cx="6" cy="18" r="3" strokeWidth="2.2" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" strokeWidth="2.4" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" strokeWidth="2.4" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" strokeWidth="2.4" />
        </svg>
      </div>

      {/* Brand Wordmark: ClipForce */}
      {showWordmark && (
        <span className={`font-black tracking-tight text-white whitespace-nowrap flex items-center ${textSize}`}>
          <span>Clip</span>
          <span className="text-[#D4FF54] group-hover:text-white transition-colors">Force</span>
          <span className="text-[#D4FF54]">.</span>
        </span>
      )}
    </div>
  );
};
