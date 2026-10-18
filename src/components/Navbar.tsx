import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E1015]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a href="#" className="whitespace-nowrap shrink-0">
            <Logo size="md" />
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#features"
              className="hover:text-[#D4FF54] transition-colors whitespace-nowrap shrink-0"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="hover:text-[#D4FF54] transition-colors whitespace-nowrap shrink-0"
            >
              Workflow
            </a>
            <a
              href="#showcase"
              className="hover:text-[#D4FF54] transition-colors whitespace-nowrap shrink-0"
            >
              Desktop Workspace
            </a>
            <a
              href="#benefits"
              className="hover:text-[#D4FF54] transition-colors whitespace-nowrap shrink-0"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="hover:text-[#D4FF54] transition-colors whitespace-nowrap shrink-0"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="hover:text-[#D4FF54] transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDownload('windows', 'pro')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-bold text-[#0F1115] bg-[#D4FF54] hover:bg-[#C4F03F] rounded-lg active:scale-[0.98] transition-all shadow-md shadow-[#D4FF54]/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#0F1115]" />
              <span>Download for Windows</span>
            </button>

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#13151A]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-200 hover:text-[#D4FF54] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-200 hover:text-[#D4FF54] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Workflow
            </a>
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-200 hover:text-[#D4FF54] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Desktop Workspace
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-200 hover:text-[#D4FF54] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Benefits
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-200 hover:text-[#D4FF54] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-200 hover:text-[#D4FF54] hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload('windows', 'pro');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#D4FF54] text-[#0F1115] font-bold text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows (.exe)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload('linux', 'pro');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm"
            >
              <span>Download for Linux (.AppImage)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
