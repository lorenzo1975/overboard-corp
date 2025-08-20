import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { SocialProof } from '@/components/social-proof';
import { Opportunity } from '@/components/opportunity';
import { Stores } from '@/components/stores';
import { GrowthStrategy } from '@/components/growth-strategy';
import { InvestorCTA } from '@/components/investor-cta';
import { Footer } from '@/components/footer';

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
      </main>
      <Footer />
    </div>
  );
}
