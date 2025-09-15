import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SocialProof } from '@/components/social-proof';
import { Opportunity } from '@/components/opportunity';
import { Stores } from '@/components/stores';
import { GrowthStrategy } from '@/components/growth-strategy';
import { InvestorCTA } from '@/components/investor-cta';
import { Footer } from '@/components/footer';
import { BrandStrip } from '@/components/brand-strip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Overboard Asia: Premier Water Sports Retailer & Investment Opportunity',
  description: "Discover Overboard Asia, Thailand's leading water sports retailer with 6 profitable stores. Explore our successful business model and investment opportunities for expansion across Southeast Asia.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Opportunity />
        <Stores />
        <GrowthStrategy />
        <InvestorCTA />
        <BrandStrip />
      </main>
      <Footer />
    </div>
  );
}
