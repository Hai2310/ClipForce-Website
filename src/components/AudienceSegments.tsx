import React from 'react';
import { Video, Scissors, Mic, Building2, CheckCircle2 } from 'lucide-react';

export const AudienceSegments: React.FC = () => {
  const audiences = [
    {
      icon: Video,
      title: 'Solo Creators & YouTubers',
      description: 'You spend hours recording high-value long-form content. Turn each upload into 5-10 short clips to capture millions of algorithmic views across TikTok, Reels, and Shorts.',
      points: [
        'Multiply inbound channel traffic',
        'No expensive monthly editing retainers',
        'Full control over your creative voice'
      ]
    },
    {
      icon: Scissors,
      title: 'Professional Clipper Editors',
      description: 'Accelerate client delivery turnaround times by 3x. Let AI locate candidate hooks so you can focus entirely on high-touch polish, humor, and sound design.',
      points: [
        'Triple client project capacity',
        'Millisecond-accurate caption sync',
        'Native aspect-ratio presets'
      ]
    },
    {
      icon: Mic,
      title: 'Podcast & Talkshow Hosts',
      description: 'Long conversations hold incredible nuggets of wisdom. ClipForge isolates poignant quotes and debate peaks without requiring you to re-listen from start to finish.',
      points: [
        'Automatic split-screen for dual guests',
        'Cleans up audio coughs & silent gaps',
        'Highlights discussion climaxes'
      ]
    },
    {
      icon: Building2,
      title: 'Agencies & Media Teams',
      description: 'Scale multi-client short-form production pipelines. Standardize quality control, maintain brand asset libraries, and render batches on high-end local workstations.',
      points: [
        'Unlimited video footage processing',
        'Confidential client IP stays offline',
        'Easy team workstation handoffs'
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-[#080a0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>TARGET AUDIENCE</span>
            <span aria-hidden="true">·</span>
            <span>WHO USES CLIPFORGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            Tailored for every tier of short-form video production
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Whether you are an independent creator or a multi-brand digital marketing agency, ClipForge solves the core bottleneck: turning time into attention.
          </p>
        </div>

        {/* 4 Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#0e121a] border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {aud.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-slate-300">
                  {audiences[index].points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
