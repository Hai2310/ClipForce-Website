import React from 'react';
import { HardDrive, Zap, Send } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  return (
    <section className="relative py-10 bg-[#0B0D12] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quantitative Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#D4FF54]">10x</span>
              <span className="text-xs font-sans font-normal text-slate-400">faster</span>
            </div>
            <p className="text-xs text-slate-400">Than scrubbing hours of footage manually in Premiere</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#A78BFA]">100%</span>
              <span className="text-xs font-sans font-normal text-slate-400">local-first</span>
            </div>
            <p className="text-xs text-slate-400">Complete privacy, runs entirely on your own GPU</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#D4FF54]">$0</span>
              <span className="text-xs font-sans font-normal text-slate-400">credit fees</span>
            </div>
            <p className="text-xs text-slate-400">No recurring per-minute charges like cloud tools</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-center justify-center sm:justify-start gap-1">
              <span className="text-[#A78BFA]">&lt; 3 mins</span>
              <span className="text-xs font-sans font-normal text-slate-400">for 60m video</span>
            </div>
            <p className="text-xs text-slate-400">Instant AI speech & energy parsing across long streams</p>
          </div>
        </div>

        {/* Multi-Platform Auto-Publishing Bar (TikTok, YouTube Shorts, Facebook Reels — NO Instagram) */}
        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-[#D4FF54]" />
              <span>1-Click Auto-Publishing Supported Platforms:</span>
            </span>
            
            <div className="flex flex-wrap items-center gap-2.5">
              {/* TikTok Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-[#00f2fe]/30 text-white font-medium shadow-xs hover:border-[#00f2fe]/60 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
                <svg className="w-3.5 h-3.5 text-[#00f2fe]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.69 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.16 8.16 0 0 0 4.92 1.62v-3.5a4.85 4.85 0 0 1-1-.51z"/>
                </svg>
                <span>TikTok</span>
              </div>

              {/* YouTube Shorts Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-red-500/30 text-white font-medium shadow-xs hover:border-red-500/60 transition-all">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-100" />
                <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube Shorts</span>
              </div>

              {/* Facebook Reels Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-[#1877F2]/30 text-white font-medium shadow-xs hover:border-[#1877F2]/60 transition-all">
                <span className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse delay-200" />
                <svg className="w-3.5 h-3.5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Reels</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-[#D4FF54]" />
              <span>Native Windows &amp; Linux</span>
            </span>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <Zap className="w-4 h-4 text-[#A78BFA]" />
              <span>NVIDIA &amp; AMD GPU Accelerated</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
