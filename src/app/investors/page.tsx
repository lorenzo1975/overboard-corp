import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InvestorCTA } from '@/components/investor-cta';
import { Opportunity } from '@/components/opportunity';
import { GrowthStrategy } from '@/components/growth-strategy';

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
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
