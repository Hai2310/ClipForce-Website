import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Clock, Zap, RefreshCw, Play, Check } from 'lucide-react';

export const AutoPublishShowcase: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<number>(0);
  const [isSimulatingQueue, setIsSimulatingQueue] = useState(false);
  const [syncedCounts, setSyncedCounts] = useState({ tiktok: 14, youtube: 9, facebook: 16 });
  const [queueComplete, setQueueComplete] = useState(false);

  const handleSimulateQueue = () => {
    setIsSimulatingQueue(true);
    setQueueComplete(false);
    setTimeout(() => {
      setSyncedCounts(prev => ({
        tiktok: prev.tiktok + 1,
        youtube: prev.youtube + 1,
        facebook: prev.facebook + 1,
      }));
      setIsSimulatingQueue(false);
      setQueueComplete(true);
      setTimeout(() => setQueueComplete(false), 3000);
    }, 1200);
  };

  const platforms = [
    {
      id: 'tiktok',
      name: 'TikTok',
      color: '#00f2fe',
      borderColor: 'hover:border-[#00f2fe]/50',
      badge: 'Official API Sync',
      scheduledTime: '7:00 PM Peak',
      stats: '1080×1920 · 60 FPS',
      featureNote: 'Auto-adds viral trending sound tags, hashtags & kinetic karaoke subtitles',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.69 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.16 8.16 0 0 0 4.92 1.62v-3.5a4.85 4.85 0 0 1-1-.51z"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube Shorts',
      color: '#FF0000',
      borderColor: 'hover:border-red-500/50',
      badge: 'Native 4K / 60 FPS',
      scheduledTime: '7:30 PM Peak',
      stats: 'Optimized Title & SEO Tags',
      featureNote: 'Auto-generates high-CTR thumbnail frames & retention-focused descriptions',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook Reels',
      color: '#1877F2',
      borderColor: 'hover:border-[#1877F2]/50',
      badge: 'Pages & Groups Sync',
      scheduledTime: '8:00 PM Peak',
      stats: 'Multi-Page Push',
      featureNote: 'Direct publishing across unlimited Facebook Fanpages, Creator Profiles & Groups',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 relative bg-[#090C12] border-b border-white/5 overflow-hidden">
      {/* Dynamic ambient sweep */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4FF54] uppercase mb-2">
              <Zap className="w-3.5 h-3.5 text-[#D4FF54]" />
              <span>DIRECT AUTO-PUBLISHING PIPELINE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              One-click auto-publishing to TikTok, Shorts &amp; Facebook Reels
            </h3>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Zero manual downloading, re-uploading, or tagging. ClipForce connects directly with official creator APIs so you can schedule an entire week of viral short content in 30 seconds.
            </p>
          </div>

          {/* Interactive Simulation Trigger Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <button
              onClick={handleSimulateQueue}
              disabled={isSimulatingQueue}
              className="px-5 py-3 rounded-full bg-[#D4FF54] hover:bg-[#C4F03F] text-[#0F1115] font-black text-xs flex items-center gap-2 shadow-lg shadow-[#D4FF54]/15 cursor-pointer disabled:opacity-50 transition-all active:scale-[0.98]"
            >
              {isSimulatingQueue ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Pushing to TikTok, YouTube &amp; Facebook...</span>
                </>
              ) : queueComplete ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0F1115]" />
                  <span>All 3 Platforms Synced!</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate 1-Click Auto-Queue</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-400 font-semibold">Queue Active</span>
            </div>
          </div>
        </div>

        {/* Exactly 3 Dynamic Animated Platform Cards (TikTok, YouTube Shorts, Facebook Reels — NO Instagram) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {platforms.map((platform, idx) => {
            const isHovered = activePlatform === idx;
            const count = syncedCounts[platform.id as keyof typeof syncedCounts];
            return (
              <div
                key={platform.id}
                onMouseEnter={() => setActivePlatform(idx)}
                className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between group ${
                  isHovered
                    ? `bg-[#151822] border-white/20 shadow-2xl scale-[1.02]`
                    : `bg-[#11131A] border-white/5 hover:border-white/10`
                }`}
              >
                {/* Background platform accent glow */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-40' : 'opacity-10'
                  }`}
                  style={{ backgroundColor: platform.color }}
                />

                <div>
                  {/* Top row: Platform Logo with animated pulse & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${platform.color}15`,
                        color: platform.color,
                        boxShadow: isHovered ? `0 0 20px ${platform.color}30` : 'none'
                      }}
                    >
                      {platform.icon}
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {platform.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1.5 flex items-center justify-between">
                    <span>{platform.name}</span>
                    <span className="text-xs font-mono font-bold text-[#D4FF54] bg-[#D4FF54]/10 px-2.5 py-0.5 rounded">
                      {count} published
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {platform.featureNote}
                  </p>
                </div>

                {/* Bottom status strip */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4FF54]" />
                    <span>{platform.scheduledTime}</span>
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Auto-Sync</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Action Guarantee */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-[#D4FF54]" />
            <span>Zero manual file transfers: ClipForce schedules and posts automatically</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span>Official Graph &amp; Content APIs</span>
            <span>·</span>
            <span>No Account Ban Risk</span>
            <span>·</span>
            <span>100% Privacy &amp; Encrypted Local Auth</span>
          </div>
        </div>

      </div>
    </section>
  );
};
