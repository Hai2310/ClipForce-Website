import React from 'react';

export const ElectricLimeRibbon: React.FC = () => {
  const items = [
    'MAKE IT MOVE',
    'CAPTION THE MOMENT',
    'POST WITH PURPOSE',
    'FIND YOUR HOOK',
    'TIKTOK · YOUTUBE · REELS AUTO-POST',
    '100% LOCAL GPU PROCESSING',
    'ZERO CLOUD FEES',
    'Alex Hormozi & MrBeast Captions',
  ];

  return (
    <div className="w-full bg-[#D4FF54] text-[#0F1115] py-3.5 overflow-hidden shadow-lg select-none relative z-30">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.concat(items).concat(items).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs sm:text-sm font-black tracking-widest uppercase font-mono">
            <span>{item}</span>
            <span className="text-[#0F1115]/50 text-base">✱</span>
          </div>
        ))}
      </div>
    </div>
  );
};
