export interface ReleaseInfo {
  version: string;
  releaseDate: string;
  windows: {
    url: string;
    filename: string;
    size: string;
    sha256: string;
    minRequirement: string;
  };
  linux: {
    url: string;
    filename: string;
    size: string;
    sha256: string;
    minRequirement: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  originalPriceUSD: number;
  billingText: string;
  popular?: boolean;
  features: string[];
  paypalPlanCode: string;
}

export const DOWNLOAD_CONFIG: ReleaseInfo = {
  version: 'v1.4.2 Production Release',
  releaseDate: 'October 2026',
  windows: {
    url: '/downloads/clipper-windows.exe',
    filename: 'clipper-setup-1.4.2.exe',
    size: '84.6 MB',
    sha256: '9f83ab29c488e100f98317c2a71b4028bc611849e759ef0982bb1936c888d3e2',
    minRequirement: 'Windows 10 / 11 (64-bit), 8GB RAM, Dedicated GPU Recommended'
  },
  linux: {
    url: '/downloads/clipper-linux.AppImage',
    filename: 'clipper-1.4.2-x86_64.AppImage',
    size: '89.2 MB',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    minRequirement: 'Ubuntu 20.04+, Fedora 36+, Debian 11+ (x86_64 AppImage)'
  }
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Community Edition',
    tagline: 'Get started with essential local clipping on your machine',
    priceUSD: 0,
    originalPriceUSD: 0,
    billingText: 'Free forever · Direct download · No credit card required',
    popular: false,
    features: [
      'Standard video import (MP4, MOV up to 1080p)',
      'Basic AI highlight detection engine',
      'Standard subtitle styling presets',
      'Manual timeline trimming & face centering',
      '100% private offline local GPU processing'
    ],
    paypalPlanCode: 'CLIPPER_FREE_EDITION'
  },
  {
    id: 'pro_lifetime',
    name: 'Pro Lifetime License',
    tagline: 'Unlock full GPU horsepower, viral captions & auto-publishing',
    priceUSD: 129,
    originalPriceUSD: 249,
    billingText: 'One-time payment of $129 · Lifetime access & updates',
    popular: true,
    features: [
      'Unlimited 4K & 8K high-bitrate video processing',
      'Advanced virality hook scoring & speech peak engine',
      'Kinetic animated captions (Alex Hormozi & MrBeast styles)',
      'Turbo GPU batch rendering (NVIDIA NVENC, Apple Silicon, AMD)',
      'Direct social auto-publishing to TikTok, YouTube Shorts & Facebook Reels',
      'Commercial monetization license for client projects',
      'Free software & AI model updates forever',
      '30-day money-back guarantee via PayPal'
    ],
    paypalPlanCode: 'CLIPFORCE_PRO_LIFETIME_129'
  }
];

export const PAYPAL_CONFIG = {
  priceUSD: 129,
  currency: 'USD',
  merchantName: 'ClipForce Creative Tools Inc.',
  supportEmail: 'support@clipforce.video',
  guaranteeDays: 30
};
