import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_minmax(320px,1fr)]">
            <div className="flex flex-col justify-center px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-24 lg:text-left">
              <span className="inline-flex items-center justify-center self-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur lg:self-start">
                Established Retailer
              </span>
              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl font-headline">
                Thailand's Premier Multi Brand Beachwear Retailer: A Proven
                Model for Expansion
              </h1>
              <p className="mt-6 text-base text-white/85 sm:text-lg lg:text-xl">
                From six profitable stores in key destinations, we offer a
                curated selection of top international brands alongside our
                exclusive in-house styles. We are now seeking partners to scale
                this success across Southeast Asia.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a
                    href="/investor-deck.pdf"
                    download
                    aria-label="Download the investor deck as a PDF"
                  >
                    Download Investor Deck
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="link"
                  asChild
                  className="w-full sm:w-auto font-semibold text-white hover:text-white/90"
                >
                  <Link href="/contact" aria-label="Jump to the contact form">
                    Contact Us &rarr;
                  </Link>
                </Button>
              </div>
            </div>
            <figure className="relative h-80 overflow-hidden sm:h-[28rem] lg:h-full">
              <Image
                src="/images/hero.jpeg"
                alt="Powerful ocean wave breaking near the shoreline"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
                data-ai-hint="ocean wave"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/60 lg:bg-gradient-to-r lg:from-slate-950/85 lg:via-slate-950/20 lg:to-transparent"
                aria-hidden="true"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
