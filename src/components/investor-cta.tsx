import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function InvestorCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
          Let's Build the Future of Water Sports, Together.
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-foreground/80">
          We are seeking strategic partners to join us on our journey. For access to our detailed financial reports and to schedule a meeting with our founders, please get in touch.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
            <Link href="#contact">Contact Investor Relations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
