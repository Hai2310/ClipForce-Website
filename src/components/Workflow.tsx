import React, { useState } from 'react';
import { Upload, Sparkles, SlidersHorizontal, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Import Long Video',
      subtitle: 'Drag & drop raw files or paste YouTube URLs',
      description: 'Supports MP4, MKV, MOV, and Apple ProRes up to 8K resolution. Reads directly from your local NVMe/SSD drive with zero cloud upload wait times.',
      badge: 'Zero Upload Latency',
      icon: Upload,
      previewInfo: {
        filename: 'Tech_Talk_Episode_104_Final.mp4',
        duration: '01:14:22',
        resolution: '3840 × 2160 (4K 60fps)',
        size: '4.8 GB'
      }
    },
    {
      number: '02',
      title: 'AI Scans Highlights & Hooks',
      subtitle: 'Analyzes energy, pitch & conversational peaks',
      description: 'Proprietary local models pinpoint the top 3-second retention hooks and emotional climaxes, calculating an objective Virality Score (1–100) for every detected segment.',
      badge: 'Hook Virality Score',
      icon: Sparkles,
      previewInfo: {
        highlightsDetected: '6 high-potential viral clips',
        topHookScore: '98/100 (At 04:12 mark)',
        averageDuration: '45 seconds / clip',
        silenceRemoved: '12 dead pauses purged'
      }
    },
    {
      number: '03',
      title: 'Polish Cuts & Kinetic Subtitles',
      subtitle: 'Automatic face-tracking & animated captions',
      description: 'Smart algorithms keep the speaker dead-center in 9:16 vertical frames. Choose signature subtitle styles (Hormozi, MrBeast, Minimalist) with animated word highlights.',
      badge: 'Auto Face Tracking 9:16',
      icon: SlidersHorizontal,
      previewInfo: {
        subtitleStyle: 'Bold Karaoke Lime Highlight',
        font: 'Montserrat ExtraBold',
        safeZonePadding: 'TikTok / YouTube calibrated',
        punchInZooms: '3 dynamic speaker cuts'
      }
    },
    {
      number: '04',
      title: 'Batch Export & Schedule',
      subtitle: '1-Click ZIP bundle or direct social queue',
      description: 'Export all clips simultaneously in crisp 1080×1920 60FPS. Generate platform-specific titles, descriptions, and trending hashtags ready for TikTok, Shorts & Facebook Reels.',
      badge: 'Hardware Turbo Render',
      icon: Send,
      previewInfo: {
        exportTime: '18 seconds on local GPU',
        format: 'H.264 / AAC 320kbps',
        publishingStatus: 'Scheduled for 7:30 PM',
        metadataReady: '5 viral hashtags included'
      }
    }
  ];

  return (
    <section id="workflow" className="py-24 relative bg-[#090C12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4FF54] uppercase mb-3">
            <span>4-STEP WORKFLOW</span>
            <span aria-hidden="true">·</span>
            <span>FROM RAW FOOTAGE TO VIRAL VIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            A frictionless pipeline engineered for creators.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            No complex NLE timelines, no cloud rendering queues, no per-minute billing surprises. Everything is streamlined into four intuitive steps.
          </p>
        </div>

        {/* Step Selector & Details Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 4-step Timeline Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#151822] border-[#D4FF54]/50 shadow-xl shadow-[#D4FF54]/5 ring-1 ring-[#D4FF54]/20'
                      : 'bg-[#101218] border-white/5 hover:border-white/20 hover:bg-[#131620]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-sm shrink-0 transition-all ${
                        isActive
                          ? 'bg-[#D4FF54] text-[#0F1115] shadow-md shadow-[#D4FF54]/20'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {step.title}
                        </h3>
                        {isActive && (
                          <span className="text-[11px] font-mono text-[#D4FF54] bg-[#D4FF54]/10 px-2 py-0.5 rounded font-bold">
                            {step.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Step Deep-Dive */}
          <div className="lg:col-span-7 bg-[#12151D] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF54]" />
                <span className="font-mono text-slate-300">
                  STEP {steps[activeStep].number} · {steps[activeStep].badge}
                </span>
              </div>
              <span className="text-slate-400 font-mono">Status: Ready</span>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <h4 className="text-2xl font-bold text-white">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Data Inspector Box */}
            <div className="bg-[#0D0F14] border border-white/5 rounded-xl p-5 space-y-3 font-mono text-xs">
              <div className="text-[#D4FF54] font-bold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>INSPECTOR TELEMETRY</span>
              </div>

              {Object.entries(steps[activeStep].previewInfo).map(([key, val], idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                  <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                  <span className="text-slate-200 font-semibold">{val}</span>
                </div>
              ))}
            </div>

            {/* Step Controls */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors cursor-pointer"
              >
                ← Previous Step
              </button>

              <button
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4FF54] hover:bg-[#C4F03F] text-[#0F1115] font-black text-xs disabled:opacity-30 transition-all cursor-pointer shadow-md"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0F1115]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
