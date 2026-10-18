import React from 'react';
import { Download, Check, Sparkles, Shield, Cpu, Lock, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../constants/download';

interface PricingSectionProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDownload }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#090C12] border-t border-white/5 overflow-hidden">
      {/* Glow highlight behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#D4FF54]/6 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4FF54] uppercase mb-3">
            <span>TRANSPARENT CREATOR PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            Two editions. Pay once, own forever.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Get started for free or unlock the full Pro powerhouse with high-speed GPU rendering, kinetic captions, and multi-platform publishing with a $129 lifetime unlock.
          </p>
        </div>

        {/* Exactly 2-Column Pricing Cards Grid (Free vs $129 Pro) */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-12">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.id === 'pro_lifetime';
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-[#151924] border-2 border-[#D4FF54] shadow-2xl shadow-[#D4FF54]/15 ring-1 ring-[#D4FF54]/30'
                    : 'bg-[#101219] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill for Pro */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4FF54] text-[#0F1115] font-black text-xs shadow-md uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Lifetime Access · $129 USD</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1.5">{plan.name}</h3>
                    <p className="text-xs text-slate-400 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price display */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-white font-mono">
                      {plan.priceUSD === 0 ? '$0' : `$${plan.priceUSD}`}
                    </span>
                    {plan.originalPriceUSD > 0 && (
                      <span className="text-base font-mono text-slate-500 line-through">
                        ${plan.originalPriceUSD}
                      </span>
                    )}
                    <span className="text-xs text-slate-400">
                      {plan.priceUSD === 0 ? 'free forever' : 'one-time license'}
                    </span>
                  </div>

                  <p className="text-xs text-[#D4FF54] font-mono mb-6 pb-6 border-b border-white/5">
                    {plan.billingText}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-slate-300">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D4FF54] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: Clean Download Buttons */}
                <div>
                  {plan.priceUSD === 0 ? (
                    <button
                      onClick={() => onOpenDownload('windows', 'free')}
                      className="w-full py-4 px-5 rounded-full font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Free Community Edition</span>
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => onOpenDownload('windows', 'pro')}
                        className="w-full py-4 px-5 rounded-full font-black text-sm text-[#0F1115] bg-[#D4FF54] hover:bg-[#C4F03F] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-[#D4FF54]/25"
                      >
                        <Download className="w-4 h-4 text-[#0F1115]" />
                        <span>Download Pro Edition ($129)</span>
                        <ArrowRight className="w-4 h-4 ml-0.5" />
                      </button>
                      <p className="text-center text-[11px] text-slate-400 mt-2.5 font-mono">
                        * Instant PayPal unlock &amp; lifetime key delivered on download
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 max-w-2xl mx-auto text-center">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#D4FF54]" />
            30-Day Money-Back Guarantee via PayPal
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#A78BFA]" />
            Instant Digital Key &amp; Download Unlock
          </span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-[#D4FF54]" />
            100% Offline Local GPU Processing
          </span>
        </div>

      </div>
    </section>
  );
};
