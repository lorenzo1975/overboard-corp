import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white">
      <Image
        src="/images/hero.png"
        alt="A powerful ocean wave"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        data-ai-hint="ocean wave"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Pioneering the Premier Water Sports Lifestyle in Southeast Asia
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white sm:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
          A proven retail model with six profitable locations, poised for strategic expansion. Discover the opportunity to invest in a market leader.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            Download Investor Deck
          </Button>
          <Button size="lg" variant="link" asChild className="text-white w-full sm:w-auto font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            <Link href="#contact">Contact Us &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
