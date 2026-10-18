import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is ClipForce and how does it work?',
      answer: 'ClipForce is a high-performance local-first desktop software application engineered to transform long-form footage (podcasts, livestreams, webinars, gameplay, interviews) into high-retention 9:16 vertical clips for TikTok, YouTube Shorts, and Facebook Reels. It automatically isolates peak retention moments, animates kinetic karaoke captions, crops to face tracking, and schedules automatic publishing.'
    },
    {
      question: 'How do the Free Community Edition and the $129 Pro License differ?',
      answer: 'The Free Community Edition is 100% free forever with direct downloads for Windows and Linux. It supports standard up to 1080p import, core highlight detection, and standard subtitle presets. The Pro Lifetime License ($129 one-time payment via PayPal) unlocks unlimited 4K/8K GPU-accelerated batch rendering, viral kinetic subtitle styles (Hormozi, Beast, Minimalist), automatic multi-platform scheduling for TikTok, YouTube Shorts & Facebook Reels, and lifetime free updates.'
    },
    {
      question: 'How does PayPal payment and download unlocking work?',
      answer: 'When you choose the Pro Edition, you complete a single $129.00 USD payment via PayPal with full 30-day buyer protection. The download of your full Pro installer (.exe or .AppImage) is immediately unlocked and started, and your permanent license key is generated on screen and sent to your email.'
    },
    {
      question: 'Does ClipForce automatically post to TikTok, YouTube Shorts, and Facebook Reels?',
      answer: 'Yes! ClipForce integrates with official creator APIs for TikTok, YouTube Shorts, and Facebook Reels. You can queue your clips, preview thumbnails, write descriptions with automated hashtag suggestions, and schedule posts across all accounts directly from your desktop.'
    },
    {
      question: 'Can I manually tweak and trim the AI-suggested cuts?',
      answer: 'Absolutely. While AI automatically identifies candidate highlight hooks, you retain full timeline control. You can drag in/out points on the audio waveform, edit subtitle text word-by-word, swap typography presets, and adjust face-tracking framing.'
    },
    {
      question: 'Which operating systems can run ClipForce?',
      answer: 'ClipForce runs natively on Windows 10 & 11 (64-bit) via an installer (.exe) and on modern Linux distributions (Ubuntu, Debian, Fedora, Arch) via an AppImage. It supports hardware acceleration on NVIDIA, Apple Silicon, AMD, and Intel GPUs.'
    },
    {
      question: 'Do I need an active internet connection to process clips?',
      answer: 'No. ClipForce is built local-first. Video rendering, audio spectral analysis, and transcription models run directly on your own GPU and CPU without sending your private files or client footage to cloud servers.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0B0D12] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#D4FF54] uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4FF54]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Everything you need to know about ClipForce
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Answers to common questions about features, compatibility, auto-publishing, and licensing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#13151D] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white font-bold text-base hover:text-[#D4FF54] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D4FF54]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
