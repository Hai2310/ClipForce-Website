import React from 'react';
import { Clock, TrendingUp, Eye, ShieldCheck, Palette, DollarSign } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Save 80% of editing time',
      description: 'Instead of spending hours scrubbing 2-hour podcasts or livestreams, ClipForge identifies the highest-impact moments in under 3 minutes.',
      highlight: 'From 4 hours down to 15 minutes'
    },
    {
      icon: TrendingUp,
      title: '5x your publishing volume',
      description: 'Post 2-3 high-retention clips daily across TikTok, Reels, and Shorts. Maximize algorithm recommendations without burning out.',
      highlight: 'Consistent daily posting frequency'
    },
    {
      icon: Eye,
      title: 'Hook viewers in the first 3 seconds',
      description: 'Pinpoint curiosity-inducing hooks, paired with dynamic kinetic subtitles and automated punch-in zooms to stop the infinite scroll.',
      highlight: 'Optimized audience retention rate'
    },
    {
      icon: ShieldCheck,
      title: '100% private local-first architecture',
      description: 'Raw video footage never touches a third-party cloud server. Everything renders locally on your own NVMe drive and GPU.',
      highlight: 'Complete data ownership'
    },
    {
      icon: Palette,
      title: 'Unified brand typography & presets',
      description: 'Configure fonts, brand colors, and watermark placement once. Every exported short inherits your signature visual identity.',
      highlight: '1-click brand preset synchronization'
    },
    {
      icon: DollarSign,
      title: 'Zero recurring cloud credit fees',
      description: 'Unlike web-based tools that charge per minute of footage, ClipForge runs on your computer with unlimited video processing.',
      highlight: 'No per-minute billing models'
    }
  ];

  return (
    <section id="benefits" className="py-24 relative bg-[#0b0e14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>REAL BUSINESS VALUE</span>
            <span aria-hidden="true">·</span>
            <span>WHY CREATORS CHOOSE CLIPFORGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            Focus on creative storytelling. Let ClipForge handle the tedious cuts.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Built from the ground up by short-form creators to eliminate the repetitive friction of repurposing long-form content.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={index}
                className="group p-6 sm:p-7 rounded-2xl bg-[#0e121a] border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 group-hover:bg-amber-500/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    ✓ {b.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
