/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProofBar } from './components/SocialProofBar';
import { AutoPublishShowcase } from './components/AutoPublishShowcase';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { ProductShowcase } from './components/ProductShowcase';
import { Benefits } from './components/Benefits';
import { AudienceSegments } from './components/AudienceSegments';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { InteractiveClipDemo } from './components/InteractiveClipDemo';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [targetPlatform, setTargetPlatform] = useState<'windows' | 'linux'>('windows');
  const [targetTier, setTargetTier] = useState<'pro' | 'free'>('pro');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDownload = (
    platform: 'windows' | 'linux' = 'windows',
    tier: 'pro' | 'free' = 'pro'
  ) => {
    setTargetPlatform(platform);
    setTargetTier(tier);
    setDownloadModalOpen(true);
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080a0d] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Header & Navigation adhering to Top Bar Contract */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* 2. Hero Section with 3D Depth, Floating Panels, and English Copy */}
      <main className="flex-1">
        <Hero
          onOpenDownload={handleOpenDownload}
          onExploreDemo={handleOpenDemo}
        />

        {/* 3. Social Proof / Trust Bar */}
        <SocialProofBar />

        {/* 4. Animated Multi-Platform Auto-Publishing Showcase */}
        <AutoPublishShowcase />

        {/* 5. Features Section (6 Marquee Feature Cards in Asymmetric Bento Grid) */}
        <Features />

        {/* 6. How It Works / 4-Step Interactive Workflow */}
        <Workflow />

        {/* 6. Product Showcase / Desktop Workspace Preview with Interactive Tabs */}
        <ProductShowcase onOpenDownload={handleOpenDownload} />

        {/* 7. Benefits / Value Section */}
        <Benefits />

        {/* 8. Who It's For Section (4 Creator & Team Segments) */}
        <AudienceSegments />

        {/* 9. Pricing: Free Edition & $129 Pro Lifetime Unlock */}
        <PricingSection onOpenDownload={handleOpenDownload} />

        {/* 10. FAQ Accordion Section */}
        <FaqSection />

        {/* 11. Final Conversion CTA */}
        <FinalCta onOpenDownload={handleOpenDownload} />
      </main>

      {/* 12. Footer */}
      <Footer onOpenDownload={handleOpenDownload} />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        initialPlatform={targetPlatform}
        initialTier={targetTier}
      />

      <InteractiveClipDemo
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onOpenDownload={handleOpenDownload}
      />
    </div>
  );
}
