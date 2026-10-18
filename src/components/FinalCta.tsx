import React from 'react';
import { Download, ShieldCheck, Terminal } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../constants/download';

interface FinalCtaProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-28 relative bg-[#090C12] border-t border-white/5 overflow-hidden text-center">
      {/* Dynamic ambient backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D4FF54]/10 via-[#A78BFA]/10 to-[#D4FF54]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4FF54] uppercase mb-4">
          <span>ACCELERATE YOUR CONTENT PRODUCTION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance mb-6">
          Ready to turn long videos into million–view short clips?
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Download ClipForce today and start building a high-speed, local-first clipping and auto-publishing pipeline on your computer.
        </p>

        {/* Clean 2-button CTA layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenDownload('windows', 'pro')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-base text-[#0F1115] bg-[#D4FF54] hover:bg-[#C4F03F] active:scale-[0.98] transition-all shadow-xl shadow-[#D4FF54]/25 cursor-pointer"
          >
            <Download className="w-5 h-5 text-[#0F1115] shrink-0" />
            <div className="text-left flex flex-col leading-tight">
              <span>Download for Windows</span>
              <span className="text-[11px] font-mono text-[#0F1115] opacity-80">64-bit .exe · {DOWNLOAD_CONFIG.windows.size}</span>
            </div>
          </button>

          <button
            onClick={() => onOpenDownload('linux', 'pro')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-slate-200 bg-[#161922] hover:bg-[#1E222D] border border-white/10 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Terminal className="w-5 h-5 text-[#D4FF54] shrink-0" />
            <div className="text-left flex flex-col leading-tight">
              <span>Download for Linux</span>
              <span className="text-[11px] font-mono text-slate-400">.AppImage · {DOWNLOAD_CONFIG.linux.size}</span>
            </div>
          </button>
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#D4FF54]" />
            100% Local GPU Processing &amp; Privacy
          </span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span>Free Edition &amp; Pro $129 Lifetime Unlock</span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span>30-Day Money-Back Guarantee via PayPal</span>
        </div>

      </div>
    </section>
  );
};
