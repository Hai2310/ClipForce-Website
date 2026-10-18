import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scissors,
  Volume2,
  Sparkles,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Send,
  Layers,
  Crop,
  Type,
  Share2,
  Heart,
  TrendingUp,
  Flame,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface ClipForceHeroSlideshowProps {
  onOpenDownload?: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
  onExploreDemo?: () => void;
}

export const ClipForceHeroSlideshow: React.FC<ClipForceHeroSlideshowProps> = ({
  onOpenDownload,
  onExploreDemo,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeCaptionStyle, setActiveCaptionStyle] = useState<'hormozi' | 'beast' | 'minimal'>('hormozi');
  const [activeAspect, setActiveAspect] = useState<'9:16' | '1:1'>('9:16');
  const [isSimulatingPublish, setIsSimulatingPublish] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(148200);

  const SLIDE_DURATION = 6000; // 6 seconds per slide

  // Slides configuration
  const slides = [
    {
      id: 0,
      title: '01. AI Hook Detection',
      tagline: 'From 2-Hour Raw Video to 5 Viral Clips in Seconds',
      description: 'Isolates peak speech emotional energy, punchlines, and reaction moments without scrubbing.',
    },
    {
      id: 1,
      title: '02. Kinetic Karaoke Captions',
      tagline: '99.4% Speech Accuracy with Animated Word Highlights',
      description: 'Tested retention caption animations inspired by Alex Hormozi and MrBeast with auto emoji placement.',
    },
    {
      id: 2,
      title: '03. Smart Auto-Reframe',
      tagline: 'Active Speaker Face Tracking with 9:16 Safe Zones',
      description: 'Keeps faces perfectly centered in vertical frame without clipping captions or platform UI icons.',
    },
    {
      id: 3,
      title: '04. Multi-Platform Auto-Publish',
      tagline: '1-Click Direct Scheduling to TikTok, Shorts & Reels',
      description: 'Connect official creator accounts and schedule an entire week of viral shorts in under 30 seconds.',
    },
  ];

  // Auto-advance slideshow timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  // Live heart counter increment
  useEffect(() => {
    const likeTimer = setInterval(() => {
      setLikesCount((prev) => prev + Math.floor(Math.random() * 4 + 1));
    }, 2200);
    return () => clearInterval(likeTimer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSimulatePublish = () => {
    setIsSimulatingPublish(true);
    setTimeout(() => {
      setIsSimulatingPublish(false);
    }, 2500);
  };

  return (
    <div
      className="relative w-full rounded-3xl bg-[#0D0F14] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Ambient background light leaks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4FF54]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A78BFA]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Top Header: Story Tabs with animated progress bars */}
      <div className="relative z-10 p-4 sm:p-5 border-b border-white/5 bg-[#12151D]/80 backdrop-blur-md">
        
        {/* Progress Nav Tabs */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className="text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-white transition-colors mb-1 truncate">
                <span className={currentSlide === idx ? 'text-[#D4FF54] font-bold' : ''}>
                  {slide.title}
                </span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                {currentSlide === idx ? (
                  <motion.div
                    className="h-full bg-[#D4FF54]"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: isPlaying ? SLIDE_DURATION / 1000 : 0,
                      ease: 'linear',
                    }}
                    key={`progress-${currentSlide}-${isPlaying}`}
                  />
                ) : (
                  <div
                    className={`h-full ${
                      idx < currentSlide ? 'bg-white/30' : 'bg-transparent'
                    }`}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Slide headline & playback control */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-semibold text-white truncate max-w-[260px] sm:max-w-md">
              {slides[currentSlide].tagline}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 font-mono"
              title={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#D4FF54]" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Main Slide Body */}
      <div className="relative z-10 p-4 sm:p-6 min-h-[460px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          
          {/* SLIDE 0: AI HOOK DETECTION */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid lg:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Spectral Timeline with Energy Spike */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-[#141722] rounded-2xl p-4 border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold flex items-center gap-2">
                      <Scissors className="w-4 h-4 text-[#D4FF54]" />
                      <span>Input Video: 01:48:20 (Podcast Episode #142)</span>
                    </span>
                    <span className="text-[#D4FF54] font-bold">● Highlight Detected</span>
                  </div>

                  {/* Spectral waveform with scanning needle */}
                  <div className="h-20 bg-[#0B0D12] rounded-xl p-2.5 relative flex items-center justify-between gap-1 overflow-hidden">
                    {/* Highlight Box Overlay */}
                    <div className="absolute left-[44%] width-[24%] inset-y-1.5 bg-[#D4FF54]/15 border-2 border-[#D4FF54] rounded-lg pointer-events-none flex items-center justify-center">
                      <span className="text-[10px] font-mono font-bold text-[#0F1115] bg-[#D4FF54] px-1.5 py-0.5 rounded shadow">
                        99.4% VIRAL HOOK
                      </span>
                    </div>

                    {/* Scanning Laser Line */}
                    <motion.div
                      className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_#ffffff] z-10"
                      initial={{ left: '0%' }}
                      animate={{ left: '100%' }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Audio bars */}
                    {Array.from({ length: 48 }).map((_, i) => {
                      const isHigh = i >= 21 && i <= 32;
                      const h = isHigh ? Math.sin(i) * 35 + 50 : Math.sin(i * 1.5) * 15 + 25;
                      return (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-full transition-all ${
                            isHigh ? 'bg-[#D4FF54]' : 'bg-slate-700/50'
                          }`}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>00:00</span>
                    <span className="text-[#D4FF54] font-bold">14:28 — Punchline Peak</span>
                    <span>01:48:20</span>
                  </div>
                </div>

                {/* Instant clip extraction metrics */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#141722] p-3.5 rounded-xl border border-white/5">
                    <span className="text-slate-400 block text-[11px] font-mono mb-1">ANALYSIS SPEED</span>
                    <span className="text-base font-bold text-white font-mono">1.8s scan time</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Local GPU Whisper engine</span>
                  </div>
                  <div className="bg-[#141722] p-3.5 rounded-xl border border-white/5">
                    <span className="text-slate-400 block text-[11px] font-mono mb-1">HOOK TYPE</span>
                    <span className="text-base font-bold text-[#D4FF54] font-mono">Pattern Interrupt</span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Emotional contrast score 9.8</span>
                  </div>
                </div>
              </div>

              {/* Right Column: 9:16 Vertical Phone Showcase with Real Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                  <img
                    src="/src/assets/images/creator_interview_clip_1792324425886.jpg"
                    alt="Podcast Interview Clip"
                    className="w-full h-full object-cover scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Phone Info */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur">STREAM → SHORT</span>
                    <span className="bg-[#D4FF54] text-[#0F1115] font-black px-1.5 py-0.5 rounded">00:28</span>
                  </div>

                  {/* Kinetic Subtitle Overlay */}
                  <div className="absolute bottom-16 left-3 right-3 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      className="bg-black/85 backdrop-blur-md p-2.5 rounded-xl border border-[#D4FF54]/40"
                    >
                      <span className="text-xs font-black uppercase text-white tracking-wide block">
                        THE 3-SECOND HOOK THAT MADE US
                      </span>
                      <span className="text-lg font-black text-[#D4FF54] tracking-wider block drop-shadow-[0_0_8px_#D4FF54]">
                        $1.2M IN 30 DAYS
                      </span>
                    </motion.div>
                  </div>

                  {/* Bottom Platform Icons & Metrics */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      <span>98% Viral Score</span>
                    </span>
                    <span className="flex items-center gap-1 text-rose-400">
                      <Heart className="w-3 h-3 fill-rose-500" />
                      <span>{(likesCount / 1000).toFixed(1)}k</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 1: KINETIC KARAOKE CAPTIONS */}
          {currentSlide === 1 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid lg:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Preset Style Switcher */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Interactive Viral Typography Styles</h4>
                  <p className="text-xs text-slate-400">
                    Switch styles live to see how captions bounce word-by-word with speech rhythm.
                  </p>
                </div>

                {/* Style selector buttons */}
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveCaptionStyle('hormozi')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeCaptionStyle === 'hormozi'
                        ? 'bg-[#181D28] border-[#D4FF54] shadow-md shadow-[#D4FF54]/10'
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className={`text-xs font-bold block ${activeCaptionStyle === 'hormozi' ? 'text-[#D4FF54]' : 'text-white'}`}>
                      Hormozi Kinetic
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Electric lime pop-in</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCaptionStyle('beast')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeCaptionStyle === 'beast'
                        ? 'bg-[#181D28] border-[#00F2FE] shadow-md shadow-[#00F2FE]/10'
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className={`text-xs font-bold block ${activeCaptionStyle === 'beast' ? 'text-[#00F2FE]' : 'text-white'}`}>
                      MrBeast Punch
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Angled bold tags</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveCaptionStyle('minimal')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeCaptionStyle === 'minimal'
                        ? 'bg-[#181D28] border-purple-400 shadow-md shadow-purple-400/10'
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className={`text-xs font-bold block ${activeCaptionStyle === 'minimal' ? 'text-purple-300' : 'text-white'}`}>
                      Minimalist
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Clean serif italic</span>
                  </button>
                </div>

                {/* Sound & ducking intelligence badge */}
                <div className="bg-[#141722] p-4 rounded-xl border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-[#D4FF54]" />
                      <span>Context-Aware Audio Ducking</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#D4FF54]">-14dB Ducked</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Background music automatically lowers when dialogue begins, and surges during hype pauses.
                  </p>
                </div>
              </div>

              {/* Right Column: Phone Mockup showing the Selected Caption Style */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                  <img
                    src="/src/assets/images/creator_gaming_clip_1792324426766.jpg"
                    alt="Gaming Clip"
                    className="w-full h-full object-cover scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Active Subtitle Preview Based on Style */}
                  <div className="absolute bottom-16 left-3 right-3 text-center">
                    {activeCaptionStyle === 'hormozi' && (
                      <div className="bg-black/90 p-3 rounded-xl border border-[#D4FF54]/50 shadow-xl">
                        <span className="text-xs font-black uppercase text-white block">
                          I TRIED THIS FOR 30 DAYS
                        </span>
                        <motion.span
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                          className="text-lg font-black text-[#D4FF54] uppercase block mt-1 tracking-wider"
                        >
                          AND IT CHANGED EVERYTHING 🔥
                        </motion.span>
                      </div>
                    )}

                    {activeCaptionStyle === 'beast' && (
                      <motion.div
                        animate={{ rotate: [-1, 1, -1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="bg-[#00F2FE] text-black font-black p-3 rounded-xl shadow-2xl"
                      >
                        <span className="text-xs uppercase block">
                          WINNING THE FINAL ROUND
                        </span>
                        <span className="text-lg uppercase block mt-0.5 font-extrabold tracking-tight">
                          IMPOSSIBLE 1V4 CLUTCH! ⚡
                        </span>
                      </motion.div>
                    )}

                    {activeCaptionStyle === 'minimal' && (
                      <div className="bg-black/75 backdrop-blur p-3 rounded-xl border border-white/20">
                        <span className="font-serif italic text-base text-white block">
                          "Keep the reaction. Land the punchline."
                        </span>
                        <span className="text-[11px] font-mono text-purple-300 block mt-1">
                          9:16 Vertical Video · 00:24
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 2: SMART AUTO REFRAME */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid lg:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Reframe Controls & Crop Visualizer */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Dynamic Face &amp; Action Tracking</h4>
                  <p className="text-xs text-slate-400">
                    Converts horizontal widescreen (16:9) into vertical (9:16) while keeping the speaker dead-center.
                  </p>
                </div>

                {/* Aspect ratio switchers */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveAspect('9:16')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeAspect === '9:16'
                        ? 'bg-[#D4FF54] text-[#0F1115] shadow-lg'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    9:16 (TikTok &amp; Shorts)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveAspect('1:1')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeAspect === '1:1'
                        ? 'bg-[#D4FF54] text-[#0F1115] shadow-lg'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    1:1 (Square Feed)
                  </button>
                </div>

                {/* Tracking stats */}
                <div className="bg-[#141722] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Speaker Confidence:</span>
                    <span className="text-[#D4FF54] font-mono font-bold">99.8% Locked</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Safe Zone Margin:</span>
                    <span className="text-white font-mono">Calibrated for TikTok UI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Background Fill:</span>
                    <span className="text-white font-mono">Gaussian Optical Blur</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Tracking Box Animation on Speaker */}
              <div className="lg:col-span-5 flex justify-center">
                <div className={`relative ${activeAspect === '9:16' ? 'w-64 aspect-[9/16]' : 'w-64 aspect-square'} rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black transition-all duration-300`}>
                  <img
                    src="/src/assets/images/creator_interview_clip_1792324425886.jpg"
                    alt="Face Tracking Demo"
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />

                  {/* Face Tracking Neon Reticle */}
                  <div className="absolute top-[22%] left-[28%] w-[44%] h-[32%] border-2 border-[#D4FF54] rounded-xl pointer-events-none shadow-[0_0_15px_#D4FF54]">
                    <span className="absolute -top-3 left-2 bg-[#D4FF54] text-[#0F1115] font-mono text-[9px] font-bold px-1 rounded">
                      SPEAKER #1 LOCKED
                    </span>
                    {/* Reticle corner marks */}
                    <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur p-2 rounded-xl text-center text-[10px] font-mono text-slate-300">
                    <span>9:16 Safe Zone Active · 1080×1920</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SLIDE 3: MULTI-PLATFORM AUTO PUBLISH */}
          {currentSlide === 3 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-lg font-bold text-white mb-0.5">Automated Multi-Channel Pipeline</h4>
                  <p className="text-xs text-slate-400">
                    Distribute clips directly to TikTok, YouTube Shorts &amp; Facebook Reels simultaneously.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSimulatePublish}
                  disabled={isSimulatingPublish}
                  className="px-4 py-2 rounded-xl bg-[#D4FF54] hover:bg-[#C4F03F] text-[#0F1115] font-black text-xs flex items-center gap-2 shadow-lg shadow-[#D4FF54]/20 cursor-pointer disabled:opacity-60 transition-all active:scale-[0.98]"
                >
                  <Send className={`w-3.5 h-3.5 ${isSimulatingPublish ? 'animate-bounce' : ''}`} />
                  <span>{isSimulatingPublish ? 'Publishing All Channels...' : 'Simulate 1-Click Post'}</span>
                </button>
              </div>

              {/* 3 Synchronized Channel Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* TikTok */}
                <div className="bg-[#141722] p-4 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#00F2FE] flex items-center gap-1 font-mono">
                      <span>TikTok API</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {isSimulatingPublish ? 'Uploading...' : 'Auto-Scheduled'}
                    </span>
                  </div>
                  <div className="text-left space-y-1">
                    <h5 className="text-xs font-bold text-white truncate">The #1 Hook to Retain Views</h5>
                    <p className="text-[11px] font-mono text-slate-400">Scheduled: 7:00 PM Tonight</p>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Hook: 98%</span>
                    <span className="text-[#D4FF54]">#entrepreneur</span>
                  </div>
                </div>

                {/* YouTube Shorts */}
                <div className="bg-[#141722] p-4 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-red-400 flex items-center gap-1 font-mono">
                      <span>YouTube Shorts</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {isSimulatingPublish ? 'Uploading...' : 'Auto-Scheduled'}
                    </span>
                  </div>
                  <div className="text-left space-y-1">
                    <h5 className="text-xs font-bold text-white truncate">Why 90% of Creators Quit Early</h5>
                    <p className="text-[11px] font-mono text-slate-400">Scheduled: 8:15 PM Tonight</p>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>1080p60</span>
                    <span className="text-red-400">#shorts</span>
                  </div>
                </div>

                {/* Facebook Reels */}
                <div className="bg-[#141722] p-4 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1877F2] flex items-center gap-1 font-mono">
                      <span>Facebook Reels</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {isSimulatingPublish ? 'Uploading...' : 'Auto-Scheduled'}
                    </span>
                  </div>
                  <div className="text-left space-y-1">
                    <h5 className="text-xs font-bold text-white truncate">The Unexpected Reaction Twist</h5>
                    <p className="text-[11px] font-mono text-slate-400">Scheduled: 9:30 PM Tonight</p>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Auto-Thumb</span>
                    <span className="text-[#1877F2]">#reels</span>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="p-3 bg-[#11131A] rounded-xl border border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#D4FF54]" />
                  <span>Encrypted Local Tokens · Direct Official Graph APIs (No Ban Risk)</span>
                </span>
                <span className="font-mono text-[#D4FF54]">Zero Cloud Queues</span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom Action Footer */}
      <div className="relative z-10 p-4 sm:p-5 border-t border-white/5 bg-[#0B0D13]/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Hardware & Privacy Trust Badges */}
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Zap className="w-3.5 h-3.5 text-[#D4FF54]" />
            <span>Local GPU NVENC 120 FPS</span>
          </span>
          <span className="text-slate-700 hidden sm:inline">·</span>
          <span className="hidden sm:inline">100% Private Offline Storage</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {onExploreDemo && (
            <button
              type="button"
              onClick={onExploreDemo}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium transition-colors cursor-pointer"
            >
              Interactive Clip Demo
            </button>
          )}

          {onOpenDownload && (
            <button
              type="button"
              onClick={() => onOpenDownload('windows', 'pro')}
              className="px-5 py-2 rounded-xl bg-[#D4FF54] hover:bg-[#C4F03F] text-[#0F1115] font-black shadow-md shadow-[#D4FF54]/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Download ClipForce Pro</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
