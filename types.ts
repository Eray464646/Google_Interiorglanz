import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceStart: string;
}

export interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string; // For strike-through prices
  description: string;
  features: string[];
  recommended?: boolean;
  duration?: string;
}

export interface AddonItem {
  title: string;
  price: string;
  description: string;
  note?: string;
  duration?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}