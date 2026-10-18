import React from 'react';
import { Download, Terminal } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../constants/download';
import { Logo } from './Logo';

interface FooterProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload }) => {
  return (
    <footer className="bg-[#08090D] border-t border-white/5 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <Logo size="md" />
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Local-first desktop studio empowering creators, clipper editors, and podcast production teams to repurpose long-form video into viral short-form clips.
            </p>
            <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
              <span>Release {DOWNLOAD_CONFIG.version}</span>
              <span>·</span>
              <span>OpenShorts Foundation MIT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#features" className="hover:text-[#D4FF54] transition-colors">Core Features</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-[#D4FF54] transition-colors">4-Step Workflow</a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-[#D4FF54] transition-colors">Desktop Workspace</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#D4FF54] transition-colors">Value &amp; ROI</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D4FF54] transition-colors">Pricing &amp; PayPal</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4FF54] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Downloads */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Download Desktop App</h4>
            <div className="space-y-2">
              <button
                onClick={() => onOpenDownload('windows', 'pro')}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4FF54]/30 transition-all text-left text-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#D4FF54]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801"/>
                  </svg>
                  <div>
                    <span className="font-semibold text-xs block">Windows 64-bit</span>
                    <span className="text-[11px] text-slate-400 font-mono">.exe · {DOWNLOAD_CONFIG.windows.size}</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => onOpenDownload('linux', 'pro')}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D4FF54]/30 transition-all text-left text-slate-200 cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-[#A78BFA]" />
                  <div>
                    <span className="font-semibold text-xs block">Linux AppImage</span>
                    <span className="text-[11px] text-slate-400 font-mono">.AppImage · {DOWNLOAD_CONFIG.linux.size}</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} ClipForce Studio Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Offline Local GPU Processing</span>
            <span>·</span>
            <span>Zero Cloud Storage Leaks</span>
            <span>·</span>
            <span>PayPal Protected Checkout</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
