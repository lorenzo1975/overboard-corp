import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero.jpg"
            alt="A powerful ocean wave"
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
            priority
            data-ai-hint="ocean wave"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              Thailand's Premier Water Sports Retailer: A Proven Model for Expansion
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-white sm:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            From six profitable stores in key destinations, we offer a curated selection of top international brands alongside our exclusive in-house styles. We are now seeking partners to scale this success across Southeast Asia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                Download Investor Deck
              </Button>
              <Button size="lg" variant="link" asChild className="text-white w-full sm:w-auto font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                <Link href="#contact">Contact Us &rarr;</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
