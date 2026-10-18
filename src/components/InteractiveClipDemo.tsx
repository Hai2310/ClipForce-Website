import React, { useState } from 'react';
import { X, Play, Pause, Sparkles, Download, CheckCircle2 } from 'lucide-react';

interface InteractiveClipDemoProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
}

export const InteractiveClipDemo: React.FC<InteractiveClipDemoProps> = ({
  isOpen,
  onClose,
  onOpenDownload
}) => {
  if (!isOpen) return null;

  const [activeHook, setActiveHook] = useState(0);
  const [activeStyle, setActiveStyle] = useState<'hormozi' | 'beast' | 'minimal'>('hormozi');
  const [isPlaying, setIsPlaying] = useState(true);
  const [showSafeZone, setShowSafeZone] = useState(true);

  const hooks = [
    {
      title: 'The Secret to 3-Second Retention',
      timestamp: '04:12 - 04:55',
      score: '98/100 Hook Rate',
      transcript: 'Most creators fail on Shorts because their opening hook takes too long to get to the point.',
      punchline: 'THIS IS THE 3-SECOND RETENTION FORMULA THAT HOOKS 80% OF SCROLLING VIEWERS',
      highlightWord: '3-SECOND RETENTION FORMULA'
    },
    {
      title: 'The Algorithmic Distribution Pitfall',
      timestamp: '18:20 - 19:04',
      score: '95/100 Hook Rate',
      transcript: 'Never post a short video to TikTok and immediately DM the link to your personal group chats.',
      punchline: 'THE ALGORITHM PENALIZES IRREGULAR CLICK PATTERNS BEFORE ORGANIC TESTING OCCURS',
      highlightWord: 'PENALIZES IRREGULAR CLICK PATTERNS'
    },
    {
      title: 'How to Scale 100K Views Without Ads',
      timestamp: '32:10 - 32:58',
      score: '92/100 Hook Rate',
      transcript: 'A single 60-minute podcast episode holds at least eight stand-alone micro-lessons.',
      punchline: 'POSTING 3 CLIPS DAILY MULTIPLIES YOUR ORGANIC DISCOVERY OPPORTUNITIES BY 5X',
      highlightWord: 'MULTIPLIES YOUR ORGANIC DISCOVERY'
    }
  ];

  const currentHook = hooks[activeHook];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#0F1116] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4FF54] mb-1 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CLIPPER INTERACTIVE PLAYGROUND</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Simulate the Automated Video Clipping Pipeline
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid md:grid-cols-12 gap-6 overflow-y-auto pr-1">
          
          {/* Left Column: 9:16 Video Canvas */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[260px] aspect-[9/16] rounded-2xl bg-black border-2 border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between p-3 select-none">
              
              {/* Background Video Mock Image */}
              <img
                src="/src/assets/images/podcast_creator_studio_1792312097601.jpg"
                alt="Studio footage"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

              {/* Safe zone overlay */}
              {showSafeZone && (
                <div className="absolute inset-x-2.5 top-8 bottom-16 border border-dashed border-[#D4FF54]/40 rounded pointer-events-none flex items-start justify-end p-1">
                  <span className="text-[9px] font-mono text-[#D4FF54] bg-black/70 px-1 rounded">Safe Zone</span>
                </div>
              )}

              {/* Top bar info */}
              <div className="relative z-10 flex items-center justify-between text-[10px]">
                <span className="bg-black/80 px-2 py-0.5 rounded text-white font-mono">{currentHook.timestamp}</span>
                <span className="bg-[#D4FF54] text-[#0F1115] font-black px-2 py-0.5 rounded font-mono">{currentHook.score}</span>
              </div>

              {/* Dynamic Styled Subtitle in Middle */}
              <div className="relative z-10 text-center px-1 py-4">
                {activeStyle === 'hormozi' && (
                  <div className="bg-black/90 p-2.5 rounded-xl border border-[#D4FF54]/50 shadow-xl">
                    <p className="text-xs sm:text-sm font-black text-white uppercase leading-snug tracking-wide">
                      {currentHook.punchline.split(currentHook.highlightWord)[0]}
                      <span className="text-[#D4FF54] underline decoration-[#D4FF54] decoration-2">
                        {currentHook.highlightWord}
                      </span>
                      {currentHook.punchline.split(currentHook.highlightWord)[1]}
                    </p>
                  </div>
                )}
                {activeStyle === 'beast' && (
                  <div className="bg-[#00F2FE] text-black p-2.5 rounded-xl shadow-2xl transform -rotate-1">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-wider">
                      {currentHook.punchline}
                    </p>
                  </div>
                )}
                {activeStyle === 'minimal' && (
                  <div className="drop-shadow-lg px-2">
                    <p className="text-sm font-serif italic text-white leading-relaxed">
                      "{currentHook.transcript}"
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Video Controls */}
              <div className="relative z-10 flex items-center justify-between pt-1">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setShowSafeZone(!showSafeZone)}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300 hover:text-white border border-white/10"
                >
                  {showSafeZone ? 'Hide Safe Zone' : 'Show Safe Zone'}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Controls */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Hook Selector */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#D4FF54] uppercase tracking-wider block font-bold">
                1. Select AI-Detected Hook Moment
              </span>
              <div className="space-y-2">
                {hooks.map((h, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveHook(i)}
                    className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                      activeHook === i
                        ? 'bg-[#151924] border-[#D4FF54] text-white shadow-md'
                        : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{h.title}</span>
                      <span className="font-mono text-[#D4FF54] font-bold">{h.score}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 block">{h.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtitle Style Switcher */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider block font-bold">
                2. Switch Kinetic Caption Style
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'hormozi', name: 'Alex Hormozi' },
                  { id: 'beast', name: 'MrBeast Bouncy' },
                  { id: 'minimal', name: 'Editorial Serif' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStyle(s.id as any)}
                    className={`py-2 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      activeStyle === s.id
                        ? 'bg-[#D4FF54] text-[#0F1115] shadow-md shadow-[#D4FF54]/20'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Download Strip */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#D4FF54]" />
                <span>Ready to process your own raw footage?</span>
              </div>
              <p className="text-xs text-slate-400">
                Download ClipForce on your workstation or unlock the lifetime license.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenDownload('windows', 'free');
                  }}
                  className="py-2.5 px-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenDownload('windows', 'pro');
                  }}
                  className="py-2.5 px-3 rounded-full bg-[#D4FF54] hover:bg-[#C4F03F] text-[#0F1115] font-black text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <Download className="w-3.5 h-3.5 text-[#0F1115]" />
                  <span>Download Pro ($129)</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
