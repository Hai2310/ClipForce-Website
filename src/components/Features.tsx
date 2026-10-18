import React from 'react';
import { Sparkles, Scissors, Type, Crop, Cpu, CalendarClock, Flame } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative bg-[#0E1015] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4FF54]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4FF54] uppercase mb-3">
            <span>CORE CAPABILITIES</span>
            <span aria-hidden="true">·</span>
            <span>BUILT FOR HIGH-OUTPUT CREATORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            Everything you need to turn{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF54] via-[#C5F344] to-[#A78BFA]">
              1 long video into 10 viral clips
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Engineered specifically for short-form creators, clipper editors, and podcast production teams who want to scale content output with minimal turnaround time.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Highlight Detection (Large Col-Span 2) */}
          <div className="lg:col-span-2 group relative rounded-2xl bg-[#141720] border border-white/5 hover:border-[#D4FF54]/40 p-6 sm:p-8 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4FF54]/10 border border-[#D4FF54]/20 flex items-center justify-center text-[#D4FF54] mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Automated Highlight &amp; Hook Detection
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Advanced speech cadence and audio spectral algorithms isolate the most engaging hooks from long podcasts, livestreams, and interviews (60–120 mins).
              </p>
            </div>

            {/* Visual Mini Demo */}
            <div className="mt-6 pt-6 border-t border-white/5 bg-[#0C0E14] rounded-xl p-4 border border-white/5">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-mono text-[#D4FF54] font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#D4FF54]" />
                  Virality Hook Score: 98/100
                </span>
                <span className="font-mono text-slate-400">Timestamp: 08:14 - 09:02</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="w-[35%] bg-slate-700 opacity-40" />
                <div className="w-[45%] bg-gradient-to-r from-[#D4FF54] to-[#A78BFA] rounded-full shadow-lg" />
                <div className="w-[20%] bg-slate-700 opacity-40" />
              </div>
            </div>
          </div>

          {/* Card 2: Smart Trimming */}
          <div className="group relative rounded-2xl bg-[#141720] border border-white/5 hover:border-[#D4FF54]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA] mb-4 group-hover:scale-105 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Beat &amp; Speech Precision Trimming
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Removes dead air, filler pauses, and coughs automatically. Keeps clips paced at lightning speed to maximize viewer retention.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Silence Removal:</span>
              <span className="text-emerald-400 font-bold">Auto-Purged</span>
            </div>
          </div>

          {/* Card 3: Kinetic Subtitles */}
          <div className="group relative rounded-2xl bg-[#141720] border border-white/5 hover:border-[#D4FF54]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4FF54]/10 border border-[#D4FF54]/20 flex items-center justify-center text-[#D4FF54] mb-4 group-hover:scale-105 transition-transform">
                <Type className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Animated Kinetic Captions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Word-by-word karaoke animations in viral creator styles (Alex Hormozi, MrBeast, Minimalist). 99.4% speech accuracy with custom emojis.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <span className="inline-block bg-black/60 px-3 py-1.5 rounded-lg border border-[#D4FF54]/30 text-xs font-bold text-white font-mono">
                THE SECRET <span className="text-[#D4FF54]">HOOK</span>
              </span>
            </div>
          </div>

          {/* Card 4: Auto Face Tracking */}
          <div className="group relative rounded-2xl bg-[#141720] border border-white/5 hover:border-[#D4FF54]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/20 flex items-center justify-center text-[#A78BFA] mb-4 group-hover:scale-105 transition-transform">
                <Crop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                AI Active-Speaker Tracking (9:16)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Automatically pans and reframes wide landscape footage so the speaking guest or streamer stays perfectly centered for TikTok and Shorts.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Framing Target:</span>
              <span className="text-[#D4FF54] font-bold">Center Face Lock</span>
            </div>
          </div>

          {/* Card 5: Local GPU Acceleration */}
          <div className="group relative rounded-2xl bg-[#141720] border border-white/5 hover:border-[#D4FF54]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4FF54]/10 border border-[#D4FF54]/20 flex items-center justify-center text-[#D4FF54] mb-4 group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                100% Offline Local GPU Speed
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Harnesses NVIDIA NVENC, Apple Metal, and AMD hardware encoders. Render a batch of 10 full HD clips in under 60 seconds locally on your workstation.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 bg-black/40 p-3 rounded-lg border border-white/5 font-mono">
              <span>Rendering Speed:</span>
              <span className="text-[#D4FF54] font-bold">60 FPS 1080p/4K</span>
            </div>
          </div>

          {/* Card 6: Publishing Workflow (Large Col-Span 3, NO Instagram!) */}
          <div className="lg:col-span-3 group relative rounded-2xl bg-[#141720] border border-white/5 hover:border-[#D4FF54]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF54]">
                <CalendarClock className="w-4 h-4" />
                <span>DIRECT PUBLISHING QUEUE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Multi-Platform Auto-Publishing &amp; Scheduling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Generate viral titles, trending hashtags, and queue your clips for instant direct posting to TikTok, YouTube Shorts &amp; Facebook Reels.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-[#00f2fe]/40 text-xs text-white font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00f2fe]" />
                <span>TikTok Ready</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-red-500/40 text-xs text-white font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>YouTube Shorts</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/60 border border-[#1877F2]/40 text-xs text-white font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#1877F2]" />
                <span>Facebook Reels</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
