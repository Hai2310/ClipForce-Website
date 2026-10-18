import React from 'react';
import { Download, CheckCircle2, Terminal } from 'lucide-react';
import { InteractiveHeroCanvas } from './InteractiveHeroCanvas';
import { ClipForceHeroSlideshow } from './ClipForceHeroSlideshow';
import { DOWNLOAD_CONFIG } from '../constants/download';

interface HeroProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreDemo }) => {
  return (
    <section className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-gradient">
      {/* 3D Interactive Canvas Backdrop */}
      <InteractiveHeroCanvas />

      {/* Atmospheric lighting layers: Electric Lime and Lavender glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4FF54]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#A78BFA]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Impact Typography matching Screenshot 1 */}
          <div className="lg:col-span-6 space-y-6 text-left relative z-20">
            
            {/* Eyebrow matching image: • YOUR FOOTAGE. A NEW DIMENSION. */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D4FF54] animate-pulse" />
              <span className="text-[#D4FF54] font-semibold">YOUR FOOTAGE. A NEW DIMENSION.</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">CLIPFORCE DESKTOP</span>
            </div>

            {/* Headline matching screenshot 1: "Long video. Short clips. Big energy." */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] text-balance">
              Long video.<br />
              Short clips.<br />
              <span className="font-serif italic font-normal text-[#D4FF54] tracking-normal inline-block pt-1">
                Big energy.
              </span>
            </h1>

            {/* Subheadline matching screenshot 1 */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
              Find the moments worth watching.<br className="hidden sm:inline" />
              Turn them into clips worth sharing.
            </p>

            {/* Multi-Platform Auto-Publish Indicator (TikTok, YouTube Shorts, Facebook Reels — NO Instagram) */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151821] border border-white/10 text-xs text-slate-300 shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF54] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF54]"></span>
              </span>
              <span className="font-semibold text-white">Auto-Publish:</span>
              <div className="flex items-center gap-2">
                {/* TikTok */}
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#00f2fe] bg-black/60 px-2 py-0.5 rounded border border-[#00f2fe]/30 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.69 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.16 8.16 0 0 0 4.92 1.62v-3.5a4.85 4.85 0 0 1-1-.51z"/>
                  </svg>
                  TikTok
                </span>
                {/* YouTube Shorts */}
                <span className="flex items-center gap-1 font-mono text-[11px] text-red-400 bg-black/60 px-2 py-0.5 rounded border border-red-500/30 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Shorts
                </span>
                {/* Facebook Reels */}
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#1877F2] bg-black/60 px-2 py-0.5 rounded border border-[#1877F2]/30 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook Reels
                </span>
              </div>
            </div>

            {/* Primary & Secondary Download CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Windows CTA styled like the screenshot button "Let's make a clip →" */}
              <button
                onClick={() => onOpenDownload('windows', 'pro')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-[#0F1115] bg-[#D4FF54] hover:bg-[#C4F03F] active:scale-[0.98] transition-all shadow-xl shadow-[#D4FF54]/25 cursor-pointer overflow-hidden"
              >
                <Download className="w-5 h-5 text-[#0F1115] shrink-0" />
                <div className="text-left flex flex-col leading-tight">
                  <span className="font-black">Download for Windows</span>
                  <span className="text-[11px] font-mono text-[#0F1115] opacity-80">64-bit .exe · {DOWNLOAD_CONFIG.windows.size}</span>
                </div>
              </button>

              {/* Secondary Linux CTA */}
              <button
                onClick={() => onOpenDownload('linux', 'pro')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-semibold text-base text-slate-200 bg-[#161922] hover:bg-[#1E222D] border border-white/10 hover:border-[#D4FF54]/40 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#D4FF54]" />
                <div className="text-left flex flex-col leading-tight">
                  <span>Download for Linux</span>
                  <span className="text-[11px] font-mono text-slate-400">.AppImage · {DOWNLOAD_CONFIG.linux.size}</span>
                </div>
              </button>
            </div>

            {/* Trust checklist matching Screenshot 1 */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF54]" />
                <span>No watermark</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF54]" />
                <span>Fully editable timeline</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF54]" />
                <span>Built on OpenShorts</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span>Free Edition &amp; $129 Pro PayPal unlock</span>
              </span>
            </div>

          </div>

          {/* Right Column: Dynamic Animated Showcase Slideshow */}
          <div className="lg:col-span-6 relative z-10 w-full">
            <ClipForceHeroSlideshow
              onOpenDownload={onOpenDownload}
              onExploreDemo={onExploreDemo}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
