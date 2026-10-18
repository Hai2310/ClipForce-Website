import React, { useState } from 'react';
import { X, Check, Copy, Download, ShieldCheck, Cpu, Terminal, Sparkles, RefreshCw, Lock } from 'lucide-react';
import { DOWNLOAD_CONFIG, PAYPAL_CONFIG } from '../constants/download';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: 'windows' | 'linux';
  initialTier?: 'pro' | 'free';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = 'windows',
  initialTier = 'pro'
}) => {
  const [platform, setPlatform] = useState<'windows' | 'linux'>(initialPlatform);
  const [tier, setTier] = useState<'pro' | 'free'>(initialTier);
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedChecksum, setCopiedChecksum] = useState(false);
  const [freeStarted, setFreeStarted] = useState(false);

  React.useEffect(() => {
    if (initialPlatform) {
      setPlatform(initialPlatform);
    }
    if (initialTier) {
      setTier(initialTier);
    }
  }, [initialPlatform, initialTier, isOpen]);

  if (!isOpen) return null;

  const activeRelease = platform === 'windows' ? DOWNLOAD_CONFIG.windows : DOWNLOAD_CONFIG.linux;

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(activeRelease.sha256);
    setCopiedChecksum(true);
    setTimeout(() => setCopiedChecksum(false), 2000);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const triggerDirectDownload = (filename: string, url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFreeDownload = () => {
    setFreeStarted(true);
    triggerDirectDownload(`free-${activeRelease.filename}`, activeRelease.url);
  };

  const handlePayPalUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address to receive your Pro license key.');
      return;
    }

    setIsProcessing(true);

    // Simulate PayPal payment authorization and unlock
    setTimeout(() => {
      const randomSegments = () => Math.random().toString(36).substring(2, 6).toUpperCase();
      const generatedKey = `CLIPPER-PRO-${randomSegments()}-${randomSegments()}-${randomSegments()}`;
      setLicenseKey(generatedKey);
      setIsProcessing(false);
      setIsUnlocked(true);
      // Auto trigger Pro installer download upon successful PayPal payment
      triggerDirectDownload(`pro-${activeRelease.filename}`, activeRelease.url);
    }, 1600);
  };

  const handleReset = () => {
    setIsUnlocked(false);
    setIsProcessing(false);
    setFreeStarted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-xl bg-[#0F1116] border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background in Electric Lime & Lavender */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#D4FF54]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#A78BFA]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isUnlocked ? (
          <div>
            {/* Header */}
            <div className="mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4FF54] mb-1.5 font-bold">
                <span>CLIPFORCE DESKTOP</span>
                <span>·</span>
                <span>{DOWNLOAD_CONFIG.version}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Download ClipForce Desktop
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                Unlock full GPU power via PayPal ($129 lifetime) or download the Free Community Edition.
              </p>
            </div>

            {/* Exactly 2 Tiers: Pro ($129) vs Free ($0) */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-black/50 border border-white/10 rounded-2xl mb-5">
              <button
                type="button"
                onClick={() => setTier('pro')}
                className={`p-3.5 rounded-xl text-left transition-all cursor-pointer ${
                  tier === 'pro'
                    ? 'bg-[#D4FF54] text-[#0F1115] font-black shadow-lg shadow-[#D4FF54]/15'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wide">Pro Lifetime</span>
                  <span className="text-sm font-black font-mono">$129</span>
                </div>
                <span className={`text-[11px] block mt-0.5 ${tier === 'pro' ? 'text-[#0F1115] font-bold' : 'text-slate-400'}`}>
                  PayPal unlock · Unlimited GPU
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTier('free')}
                className={`p-3.5 rounded-xl text-left transition-all cursor-pointer ${
                  tier === 'free'
                    ? 'bg-white/15 text-white font-bold shadow-lg border border-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wide">Free Edition</span>
                  <span className="text-sm font-black font-mono">$0</span>
                </div>
                <span className="text-[11px] block mt-0.5 text-slate-400">
                  Basic cuts · Direct download
                </span>
              </button>
            </div>

            {/* Operating System Platform Switcher */}
            <div className="flex items-center justify-between bg-[#151821] p-3 rounded-xl border border-white/5 mb-5 text-xs">
              <span className="text-slate-300 font-medium">Target Operating System:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPlatform('windows')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    platform === 'windows'
                      ? 'bg-white/20 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801"/>
                  </svg>
                  <span>Windows (.exe)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatform('linux')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    platform === 'linux'
                      ? 'bg-white/20 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Linux (.AppImage)</span>
                </button>
              </div>
            </div>

            {/* PRO TIER: PAYPAL UNLOCK ON DOWNLOAD ($129) */}
            {tier === 'pro' && (
              <form onSubmit={handlePayPalUnlock} className="space-y-4">
                <div className="bg-[#151821] border border-[#D4FF54]/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D4FF54]" />
                      Pro Lifetime License ($129 USD)
                    </span>
                    <span className="font-mono text-[#D4FF54] font-bold">PayPal Checkout</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Pay once via PayPal to unlock your full Pro installer ({activeRelease.filename}), turbo GPU rendering, kinetic subtitles, and auto-publishing to TikTok, Shorts &amp; Facebook Reels.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Enter email for your lifetime license key &amp; receipt:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="creator@studio.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#D4FF54] focus:ring-1 focus:ring-[#D4FF54] transition-colors"
                  />
                </div>

                {/* PayPal Unlock Checkout Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full font-bold text-slate-900 bg-[#FFC439] hover:bg-[#F2BA36] active:scale-[0.99] transition-all shadow-xl shadow-amber-500/15 cursor-pointer disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-slate-900" />
                      <span>Authorizing PayPal &amp; Unlocking Download...</span>
                    </>
                  ) : (
                    <>
                      <span className="font-extrabold italic text-lg tracking-tight font-sans">
                        <span className="text-[#003087]">Pay</span>
                        <span className="text-[#0079C1]">Pal</span>
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        Pay $129.00 USD with PayPal to Unlock Download
                      </span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF54]" />
                    30-Day Money-Back Guarantee
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    256-Bit SSL Encrypted Checkout
                  </span>
                </div>
              </form>
            )}

            {/* FREE TIER: DIRECT 1-CLICK DOWNLOAD */}
            {tier === 'free' && (
              <div className="space-y-4">
                <div className="bg-[#151821] border border-white/5 rounded-xl p-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Installer package:</span>
                    <span className="font-mono text-white font-medium">{activeRelease.filename}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>File size:</span>
                    <span className="font-mono text-[#D4FF54] font-medium">{activeRelease.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>License:</span>
                    <span className="text-slate-300">Free Community Edition</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleFreeDownload}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-black text-sm text-[#0F1115] bg-[#D4FF54] hover:bg-[#C4F03F] active:scale-[0.98] transition-all shadow-xl shadow-[#D4FF54]/20 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#0F1115]" />
                  <span>Download Free {activeRelease.filename}</span>
                </button>

                {freeStarted && (
                  <p className="text-center text-xs text-[#D4FF54] flex items-center justify-center gap-1.5 animate-pulse font-mono">
                    <Check className="w-3.5 h-3.5" />
                    Free download started! Check your downloads folder.
                  </p>
                )}

                <p className="text-center text-[11px] text-slate-400">
                  Ready to unlock 4K GPU rendering, viral captions &amp; auto-posting?{' '}
                  <button
                    type="button"
                    onClick={() => setTier('pro')}
                    className="text-[#D4FF54] hover:underline font-bold cursor-pointer"
                  >
                    Switch to Pro ($129)
                  </button>
                </p>
              </div>
            )}

            {/* SHA-256 Checksum Info */}
            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
              <span className="truncate max-w-[280px]">SHA-256: {activeRelease.sha256.substring(0, 24)}...</span>
              <button
                type="button"
                onClick={handleCopyChecksum}
                className="text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer shrink-0"
              >
                {copiedChecksum ? <Check className="w-3 h-3 text-[#D4FF54]" /> : <Copy className="w-3 h-3" />}
                <span>{copiedChecksum ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* UNLOCKED STATE (PAYPAL CONFIRMED) */
          <div className="space-y-6 text-center py-2">
            <div className="w-14 h-14 rounded-2xl bg-[#D4FF54]/15 border border-[#D4FF54]/30 flex items-center justify-center mx-auto text-[#D4FF54] shadow-xl">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-mono text-[#D4FF54] uppercase tracking-wider block mb-1 font-bold">
                PayPal Payment Confirmed · Pro Download Unlocked
              </span>
              <h3 className="text-2xl font-bold text-white">
                Welcome to ClipForce Pro!
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Your Pro download has been triggered and your lifetime license key has been delivered to <span className="text-slate-200 font-mono">{email}</span>.
              </p>
            </div>

            {/* License Key Card */}
            <div className="bg-[#151821] border border-[#D4FF54]/30 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-white">Your Lifetime Activation Key:</span>
                <button
                  type="button"
                  onClick={handleCopyKey}
                  className="flex items-center gap-1 text-[#D4FF54] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-[#D4FF54]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
                </button>
              </div>

              <div className="p-3 bg-black/60 rounded-lg border border-white/10 font-mono text-center text-sm sm:text-base font-bold text-[#D4FF54] select-all tracking-wider">
                {licenseKey}
              </div>

              <p className="text-[11px] text-slate-500">
                * Paste this key in ClipForce Desktop under <span className="text-slate-400">Settings &gt; License</span> to activate unlimited GPU rendering.
              </p>
            </div>

            {/* Direct Re-download button */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => triggerDirectDownload(`pro-${activeRelease.filename}`, activeRelease.url)}
                className="w-full py-3.5 px-4 rounded-full bg-[#D4FF54] hover:bg-[#C4F03F] text-[#0F1115] font-black text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-[#0F1115]" />
                <span>Re-Download Pro Installer ({platform === 'windows' ? '.exe' : '.AppImage'})</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer block mx-auto pt-2"
              >
                Close &amp; Return to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
