/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InvestorCTA } from '@/components/investor-cta';
import { Opportunity } from '@/components/opportunity';
import { GrowthStrategy } from '@/components/growth-strategy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Investor Opportunity | Overboard Asia",
  description: 'A proven retail model with six profitable locations, poised for strategic expansion. Discover the opportunity to invest in a market leader in Southeast Asia.'
};

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
            <h1 className="text-8xl font-extrabold tracking-tight text-center mb-12 font-headline">
            Investor's Opportunity
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            A proven retail model with six profitable locations, poised for strategic expansion. Discover the opportunity to invest in a market leader.
            </p>
        </div>
        <Opportunity />
        <GrowthStrategy />
        <InvestorCTA />
      </main>
      <Footer />
    </div>
  );
}
