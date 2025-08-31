import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stores = [
  {
    name: 'Overboard Phuket - Laguna Beach',
    location: 'Phuket, Thailand',
    fact: 'Top Performing Location',
    image: '/images/destinations/Bangtao.jpg',
    aiHint: 'beachfront store phuket'
  },
  {
    name: 'Overboard Koh Samui - Chaweng',
    location: 'Koh Samui, Thailand',
    fact: 'Highest Rental Revenue',
    image: '/images/destinations/Karon.jpg',
    aiHint: 'beach shop samui'
  },
  {
    name: 'Overboard Pattaya - Jomtien',
    location: 'Pattaya, Thailand',
    fact: 'Newest Flagship',
    image: '/images/destinations/Bangtao.jpg',
    aiHint: 'modern retail pattaya'
  },
  {
    name: 'Overboard Hua Hin - Main Strip',
    location: 'Hua Hin, Thailand',
    fact: 'Community Hub',
    image: '/images/destinations/hua-hin.jpg',
    aiHint: 'watersports shop huahin'
  },
  {
    name: 'Overboard Krabi - Ao Nang',
    location: 'Krabi, Thailand',
    fact: 'Best Customer Ratings',
    image: '/images/destinations/Rawai.jpg',
    aiHint: 'surf store krabi'
  },
  {
    name: 'Overboard Bangkok - Central',
    location: 'Bangkok, Thailand',
    fact: 'Urban Concept Store',
    image: '/images/destinations/Krabi .jpg',
    aiHint: 'city retail bangkok'
  },
];

export function Stores() {
  return (
    <section id="stores" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-semibold uppercase tracking-wider text-accent">Unique Thailand Destinations</h3>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">Six Thriving Locations Across Thailand's Top Destinations</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <Card key={store.name} className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full">
                  <Image
                    src={store.image}
                    alt={`Storefront of ${store.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint={store.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{store.name}</h3>
                <p className="text-sm text-muted-foreground">{store.location}</p>
                <Badge variant="outline" className="mt-2" style={{ borderColor: 'hsl(var(--accent))', color: 'hsl(var(--accent))' }}>{store.fact}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
