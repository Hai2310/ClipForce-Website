import React, { useState } from 'react';
import { Layers, Type, Crop, Send, Check, Download, Scissors, RefreshCw, Film, Volume2, Sparkles, Sliders } from 'lucide-react';
import { Logo } from './Logo';

interface ProductShowcaseProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenDownload }) => {
  const [activeTab, setActiveTab] = useState<'workspace' | 'subtitles' | 'reframe' | 'publishing'>('workspace');
  const [selectedPreset, setSelectedPreset] = useState<'hormozi' | 'beast' | 'minimal' | 'neon'>('hormozi');
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '1:1' | '16:9'>('9:16');

  return (
    <section id="showcase" className="py-24 relative bg-[#0B0D12] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4FF54]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4FF54] uppercase mb-3">
            <span>OFFICIAL DESKTOP INTERFACE</span>
            <span aria-hidden="true">·</span>
            <span>OBSIDIAN &amp; ELECTRIC LIME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            The local creative studio designed for pure speed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            All the precision of Premiere Pro or DaVinci Resolve, stripped of clunky timelines and laser-focused on short-form viral hooks.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#141720] border border-white/10 rounded-xl mb-8 w-fit">
          <button
            onClick={() => setActiveTab('workspace')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'workspace'
                ? 'bg-[#D4FF54] text-[#0F1115] font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Workspace &amp; Spectral Timeline</span>
          </button>

          <button
            onClick={() => setActiveTab('subtitles')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'subtitles'
                ? 'bg-[#D4FF54] text-[#0F1115] font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Kinetic Captions &amp; Fonts</span>
          </button>

          <button
            onClick={() => setActiveTab('reframe')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'reframe'
                ? 'bg-[#D4FF54] text-[#0F1115] font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Crop className="w-4 h-4" />
            <span>Auto Reframe 9:16</span>
          </button>

          <button
            onClick={() => setActiveTab('publishing')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'publishing'
                ? 'bg-[#D4FF54] text-[#0F1115] font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Publishing Queue</span>
          </button>
        </div>

        {/* Master Stylized Desktop App Frame (Faithfully rendering Screenshot 2) */}
        <div className="rounded-2xl bg-[#0D0F14] border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Top Title Bar of Application */}
          <div className="bg-[#12151D] px-4 py-3 border-b border-white/5 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <Logo size="sm" showWordmark={true} />
              
              <div className="hidden sm:flex items-center gap-2 font-mono text-slate-300">
                <span className="text-white font-bold">Home</span>
                <span>&gt;</span>
                <span className="text-[#D4FF54] font-medium">Workspace</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-ping" />
                <span className="text-[#A78BFA] font-medium">5 jobs running</span>
                <RefreshCw className="w-3.5 h-3.5 text-slate-500 hover:text-white transition-colors cursor-pointer" />
              </div>

              <button
                onClick={() => onOpenDownload('windows', 'pro')}
                className="px-3 py-1 rounded bg-[#D4FF54] text-[#0F1115] font-black text-xs hover:bg-[#C4F03F] transition-colors cursor-pointer"
              >
                Download App
              </button>
            </div>
          </div>

          {/* Interactive Tab Body */}
          <div className="p-4 sm:p-6 min-h-[460px]">
            {activeTab === 'workspace' && (
              <div className="grid grid-cols-12 gap-6 items-stretch">
                
                {/* Left Sidebar (Matching Screenshot 2) */}
                <div className="hidden md:flex md:col-span-3 flex-col justify-between space-y-6 border-r border-white/5 pr-4">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-slate-500 tracking-wider uppercase block">
                      YOUR CREATIVE SPACE
                    </span>
                    <nav className="space-y-1.5 font-medium text-xs">
                      {/* Active Workspace item in Electric Lime Pill */}
                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#D4FF54] text-[#0F1115] font-bold shadow-md cursor-pointer">
                        <Layers className="w-4 h-4 text-[#0F1115]" />
                        <span>Workspace</span>
                      </div>

                      <div className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 cursor-pointer transition-colors">
                        <div className="flex items-center gap-2.5">
                          <Film className="w-4 h-4 text-slate-400" />
                          <span>Clips</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">15</span>
                      </div>

                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 cursor-pointer transition-colors">
                        <Volume2 className="w-4 h-4 text-slate-400" />
                        <span>Sound &amp; assets</span>
                      </div>

                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 cursor-pointer transition-colors">
                        <Send className="w-4 h-4 text-slate-400" />
                        <span>Publishing</span>
                      </div>

                      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 cursor-pointer transition-colors">
                        <Sparkles className="w-4 h-4 text-[#A78BFA]" />
                        <span>Connections &amp; AI</span>
                      </div>
                    </nav>
                  </div>

                  {/* Sidebar bottom */}
                  <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                    <div className="flex items-center gap-2 text-slate-300 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF54]" />
                      <span>Local workspace</span>
                    </div>
                    <span>OpenShorts foundation · MIT</span>
                  </div>
                </div>

                {/* Main Workspace Area (Matching Screenshot 2) */}
                <div className="col-span-12 md:col-span-9 flex flex-col justify-between space-y-5">
                  
                  {/* Top Project Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#D4FF54] font-bold mb-0.5">
                        <span>← All projects</span>
                        <span>·</span>
                        <span className="bg-[#D4FF54]/10 px-1.5 py-0.5 rounded">GAMING / 9:16</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-mono font-medium text-white truncate max-w-sm sm:max-w-lg">
                        2900890013-220476955-c18baac1-6517-4a2b-97ef-585a1c7c226e.mp4
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">18:16 · 1920 × 1080 · 5 highlights</span>
                    </div>

                    <button className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4FF54]/50 text-xs text-slate-200 font-mono flex items-center gap-2 cursor-pointer w-fit transition-colors">
                      <Scissors className="w-3.5 h-3.5 text-[#D4FF54]" />
                      <span>Manual cut</span>
                    </button>
                  </div>

                  {/* Spectral Waveform Card with Lavender/Purple bars */}
                  <div className="bg-[#141720] rounded-xl p-4 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300 flex items-center gap-2">
                        <span className="text-[#A78BFA] font-bold text-sm">|||</span>
                        <span>Video energy</span>
                      </span>
                      <span className="text-slate-400 text-[11px]">Audio intensity · selected moments</span>
                    </div>

                    {/* Timeline track with scrub and highlights */}
                    <div className="h-12 bg-[#0C0E14] rounded-lg p-2 flex items-center justify-between gap-1 relative overflow-hidden">
                      {/* Lavender highlight zones */}
                      <div className="absolute left-[26%] width-[16%] inset-y-1 bg-[#A78BFA]/25 border-x border-[#A78BFA]/60 rounded pointer-events-none" />
                      <div className="absolute left-[64%] width-[14%] inset-y-1 bg-[#A78BFA]/25 border-x border-[#A78BFA]/60 rounded pointer-events-none" />

                      {Array.from({ length: 50 }).map((_, i) => {
                        const heights = [10, 15, 30, 45, 80, 95, 40, 20, 60, 85, 90, 75, 50, 25, 40, 70, 95, 60, 30, 45, 80, 90, 60, 40, 75, 90, 35, 20, 50, 85, 95, 70, 40, 60, 80, 90, 50, 30, 45, 60, 40, 25, 70, 90, 85, 50, 30, 60, 75, 40];
                        const h = heights[i % heights.length];
                        const isHighlighted = (i >= 12 && i <= 21) || (i >= 31 && i <= 39);
                        return (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className={`w-full rounded-full transition-all ${
                              isHighlighted ? 'bg-[#A78BFA]' : 'bg-slate-700/60'
                            }`}
                          />
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                      <span>00:00</span>
                      <span>18:16</span>
                    </div>
                  </div>

                  {/* Selected Moments Section */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white font-mono text-sm block">Selected moments</span>
                        <span className="text-[11px] text-slate-400">Editorial scores help review; they do not predict views.</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Ready
                      </span>
                    </div>

                    {/* 3 Moments Cards from Screenshot 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Card 01 */}
                      <div className="bg-[#141720] rounded-xl p-4 border border-[#D4FF54]/40 flex flex-col justify-between min-h-[110px] shadow-lg">
                        <span className="text-[11px] font-mono text-[#D4FF54] px-2 py-0.5 rounded bg-black/60 w-fit font-bold">01</span>
                        <div className="text-center py-2">
                          <Film className="w-6 h-6 text-[#A78BFA] mx-auto mb-1.5 animate-pulse" />
                          <span className="text-xs font-mono text-slate-200 block font-semibold">Rendering segment 2/4</span>
                        </div>
                      </div>

                      {/* Card 02 */}
                      <div className="bg-[#141720] rounded-xl p-4 border border-white/5 flex flex-col justify-between min-h-[110px]">
                        <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-black/40 w-fit">02</span>
                        <div className="text-center py-2">
                          <Film className="w-6 h-6 text-slate-500 mx-auto mb-1.5" />
                          <span className="text-xs font-mono text-slate-400 block">Waiting to render</span>
                        </div>
                      </div>

                      {/* Card 03 */}
                      <div className="bg-[#141720] rounded-xl p-4 border border-white/5 flex flex-col justify-between min-h-[110px]">
                        <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-black/40 w-fit">03</span>
                        <div className="text-center py-2">
                          <Film className="w-6 h-6 text-slate-500 mx-auto mb-1.5" />
                          <span className="text-xs font-mono text-slate-400 block">Waiting to render</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 2: Subtitles & Typography */}
            {activeTab === 'subtitles' && (
              <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-5 bg-black rounded-xl border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
                  <img
                    src="/src/assets/images/podcast_creator_studio_1792312097601.jpg"
                    alt="Preview"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between text-xs">
                    <span className="bg-black/80 px-2 py-1 rounded text-white font-mono">00:42s</span>
                    <span className="bg-[#D4FF54] text-[#0F1115] font-black px-2 py-0.5 rounded text-[11px]">98% Hook</span>
                  </div>

                  <div className="relative z-10 text-center px-4 py-8">
                    {selectedPreset === 'hormozi' && (
                      <span className="inline-block bg-black/90 px-4 py-2.5 rounded-xl border border-[#D4FF54]/50 text-base font-black text-white uppercase tracking-wide">
                        THE NUMBER ONE <span className="text-[#D4FF54] underline decoration-[#D4FF54]">SECRET</span> TO VIRALITY
                      </span>
                    )}
                    {selectedPreset === 'beast' && (
                      <span className="inline-block bg-[#00F2FE] text-black px-4 py-2.5 rounded-xl text-base font-black uppercase tracking-wider transform -rotate-1 shadow-2xl">
                        I SPENT 50 HOURS TESTING THIS
                      </span>
                    )}
                    {selectedPreset === 'minimal' && (
                      <span className="inline-block text-white font-serif italic text-xl drop-shadow-md">
                        "Wait for the twist."
                      </span>
                    )}
                    {selectedPreset === 'neon' && (
                      <span className="inline-block text-[#D4FF54] font-mono text-base font-bold drop-shadow-[0_0_12px_#D4FF54]">
                        [ALGORITHM CALIBRATED HOOK]
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 text-xs font-mono text-slate-300">
                    Kinetic Subtitle Synchronization: <span className="text-[#D4FF54]">0.02s</span>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Preset Caption Styles</h3>
                    <p className="text-sm text-slate-400 mb-4">
                      Select proven viral subtitle animations with 1 click or create custom branded templates.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { id: 'hormozi', name: 'Alex Hormozi Style', desc: 'Electric lime & yellow word highlights' },
                        { id: 'beast', name: 'MrBeast Kinetic', desc: 'Punchy bouncy colored tags' },
                        { id: 'minimal', name: 'Minimalist Editorial', desc: 'Clean serif italic drop-shadow' },
                        { id: 'neon', name: 'Cyber Neon Terminal', desc: 'Monospace glowing outline' },
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => setSelectedPreset(preset.id as any)}
                          className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                            selectedPreset === preset.id
                              ? 'bg-[#151821] border-[#D4FF54] shadow-md shadow-[#D4FF54]/10'
                              : 'bg-white/5 border-white/5 hover:border-white/20'
                          }`}
                        >
                          <span className={`text-xs font-bold block ${selectedPreset === preset.id ? 'text-[#D4FF54]' : 'text-white'}`}>
                            {preset.name}
                          </span>
                          <span className="text-[11px] text-slate-400 mt-0.5 block">{preset.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#141720] p-4 rounded-xl border border-white/5 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D4FF54]" />
                      <span>Speech-to-text accuracy: 99.4% in 90+ languages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D4FF54]" />
                      <span>Automatic emoji injection based on emotion</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Auto Reframe 9:16 */}
            {activeTab === 'reframe' && (
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5 bg-black rounded-xl border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
                  <img
                    src="/src/assets/images/editor_workspace_studio_1792312097601.jpg"
                    alt="Workspace Reframe"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between text-xs">
                    <span className="bg-black/90 px-2 py-1 rounded text-[#D4FF54] font-mono font-bold">Aspect: {aspectRatio}</span>
                    <span className="bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded font-mono">Face Tracked</span>
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-black/80 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                      <Crop className="w-3.5 h-3.5 text-[#D4FF54]" />
                      <span>Dynamic Active Speaker Center</span>
                    </div>
                  </div>

                  <div className="relative z-10 text-[11px] font-mono text-slate-400">
                    Safe-Zone Bounds: TikTok &amp; YouTube Shorts calibrated
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl font-bold text-white">Smart Aspect Ratio Switching</h3>
                  <p className="text-sm text-slate-400">
                    Convert 16:9 widescreen footage into 9:16 vertical or 1:1 square without chopping off key subject matter.
                  </p>

                  <div className="flex gap-3">
                    {['9:16', '1:1', '16:9'].map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio as any)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                          aspectRatio === ratio
                            ? 'bg-[#D4FF54] text-[#0F1115] shadow-lg'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {ratio} {ratio === '9:16' ? '(Shorts & Reels)' : ratio === '1:1' ? '(Square Feed)' : '(Landscape)'}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 pt-3">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D4FF54]" />
                      <span>Tracks speaker mouth and eye line continuously</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D4FF54]" />
                      <span>Gaussian background fill for multi-speaker wide shots</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: Publishing Queue (NO Instagram!) */}
            {activeTab === 'publishing' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Multi-Platform Publishing Queue</h3>
                    <p className="text-sm text-slate-400">Scheduled directly to TikTok, YouTube Shorts &amp; Facebook Reels</p>
                  </div>
                  <button
                    onClick={() => onOpenDownload('windows', 'pro')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4FF54] text-[#0F1115] font-black text-xs hover:bg-[#C4F03F] transition-colors w-fit cursor-pointer shadow-md"
                  >
                    <Download className="w-4 h-4 text-[#0F1115]" />
                    <span>Download App &amp; Start Queue</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {[
                    { title: 'The 3-second hook framework explained', platform: 'TikTok · YouTube Shorts', duration: '00:48s', status: 'Scheduled for 7:00 PM', virality: '98%' },
                    { title: 'The deadly mistake 90% of creators make', platform: 'Facebook Reels', duration: '00:52s', status: 'Scheduled for 8:30 PM', virality: '95%' },
                    { title: 'Script formula to hold viewer retention', platform: 'TikTok · Facebook Reels', duration: '00:39s', status: 'Rendered .mp4 1080p', virality: '92%' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#141720] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center font-mono text-xs text-[#D4FF54] font-bold">
                          #{idx + 1}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.title}</h4>
                          <span className="text-xs text-slate-400 font-mono">{item.platform} · {item.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs">
                        <span className="font-mono text-[#D4FF54] bg-[#D4FF54]/10 px-2.5 py-1 rounded-full font-bold">
                          {item.virality} Hook Score
                        </span>
                        <span className="text-slate-300 font-medium">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
