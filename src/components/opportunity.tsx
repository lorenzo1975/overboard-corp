import Image from 'next/image';

export function Opportunity() {
  return (
    <section id="opportunity" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-base font-semibold uppercase tracking-wider text-accent">The Market is Calling</h3>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-headline">
              Tapping into the Surging Demand for Adventure & Leisure
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Southeast Asia's tourism and leisure sectors are experiencing unprecedented growth. Modern consumers, especially millennials and Gen Z, prioritize unique experiences over material goods.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Overboard Asia is perfectly positioned at the intersection of retail, rentals, and community, offering an integrated lifestyle solution that captures this powerful market trend. Our model is not just about selling products; it's about building a loyal community around the passion for water sports.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/business-profile-img-1.jpg"
              alt="Customers enjoying water sports products"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="watersports customers"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
