import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | Overboard Asia',
  description: 'Learn about the journey of Overboard Asia, from a single franchise store in Krabi to a leading multi-brand water sports lifestyle retailer in Thailand.'
};

const timelineEvents = [
  {
    year: "2016",
    title: "A Dream Takes Root in Krabi",
    description:
      "Our journey began with a single spark of passion on the vibrant shores of Krabi. We opened our very first store as a 69Slam franchise, driven by a simple mission: to bring the world's best beach and surf wear to the stunning coastlines of Thailand. It was a humble start, built on a love for the ocean and a commitment to quality.",
    image: "/images/our-story/our-story-1.png",
    aiHint: "beach store krabi",
  },
  {
    year: "2017-2019",
    title: "Riding the Wave of Expansion",
    description:
      "The response was incredible. Fueled by our early success, we expanded our horizons by opening four more mono-brand stores. We proudly partnered with iconic brands like Havaianas, Quiksilver, and Roxy, each new location bringing us closer to our goal of creating a comprehensive lifestyle destination for beach lovers.",
    image: "/images/our-story/our-story-3.png",
    aiHint: "surfboard shop interior",
  },
  {
    year: "2020",
    title: "Pivoting in the Face of a Pandemic",
    description:
      "When the world changed with the COVID-19 pandemic, so did we. It was a challenging time, but it sparked our biggest evolution. We pivoted from single-brand shops to creating large, immersive multi-brand stores. This allowed us to offer a richer, more diverse selection and focus on creating a truly personalized shopping experience for every customer.",
    image: "/images/our-story/our-story-2.png",
    aiHint: "retail store design",
  },
  {
    year: "Today",
    title: "New Horizons: Phuket, Hua Hin & Beyond",
    description:
      "Our new model proved to be our strength. We successfully entered the competitive Phuket market and established a strong presence in Hua Hin. Today, Overboard is more than just a collection of stores; it's a thriving community and a testament to resilience, passion, and the enduring spirit of the ocean. Our story is still being written, and we're excited for the next chapter.",
    image: "/images/our-story/our-story-4.png",
    aiHint: "modern storefront phuket",
  },
];

export default function StoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-8xl font-extrabold tracking-tight font-headline">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            From a single shop to a leading lifestyle brand, our journey has
            been one of passion, resilience, and a deep love for the water.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          />

          {timelineEvents.map((event, index) => (
            <div key={event.year} className="relative mb-12 md:mb-24">
              <div className="md:flex items-center md:gap-12">
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Card className="overflow-hidden shadow-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={800}
                      height={600}
                      className="w-full object-cover"
                      data-ai-hint={event.aiHint}
                    />
                  </Card>
                </div>

                <div
                  className={`md:w-1/2 mt-8 md:mt-0 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div
                    className={`relative ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div
                      className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-accent ring-8 ring-background hidden md:block"
                      style={
                        index % 2 === 0
                          ? { left: 0, transform: "translate(-50%, -50%)" }
                          : { right: 0, transform: "translate(50%, -50%)" }
                      }
                    />
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-1">
                      {event.year}
                    </p>
                    <h2 className="text-3xl font-bold font-headline tracking-tight mb-4">
                      {event.title}
                    </h2>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
              {index < timelineEvents.length - 1 && (
                <Separator className="md:hidden mt-12" />
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
