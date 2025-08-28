import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const stores = [
  {
    name: 'Overboard Phuket - Laguna Beach',
    address: 'Laguna Beach, Phuket, Thailand',
    image: 'https://picsum.photos/800/600',
    aiHint: 'beachfront store phuket'
  },
  {
    name: 'Overboard Koh Samui - Chaweng',
    address: 'Chaweng Beach, Koh Samui, Thailand',
    image: 'https://picsum.photos/800/600',
    aiHint: 'beach shop samui'
  },
  {
    name: 'Overboard Pattaya - Jomtien',
    address: 'Jomtien Beach, Pattaya, Thailand',
    image: 'https://picsum.photos/800/600',
    aiHint: 'modern retail pattaya'
  },
  {
    name: 'Overboard Hua Hin - Main Strip',
    address: 'Main Strip, Hua Hin, Thailand',
    image: 'https://picsum.photos/800/600',
    aiHint: 'watersports shop huahin'
  },
  {
    name: 'Overboard Krabi - Ao Nang',
    address: 'Ao Nang, Krabi, Thailand',
    image: 'https://picsum.photos/800/600',
    aiHint: 'surf store krabi'
  },
  {
    name: 'Overboard Bangkok - Central',
    address: 'Central World, Bangkok, Thailand',
    image: 'https://picsum.photos/800/600',
    aiHint: 'city retail bangkok'
  },
]

export default function StoreLocatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-8xl font-extrabold tracking-tight text-center mb-12 font-headline">
          OUR STORES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative h-[600px] md:h-full">
            <Image
              src="https://picsum.photos/1200/1200"
              alt="Map of store locations"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="thailand map"
            />
             <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
          </div>
          <div className="flex flex-col gap-8">
            {stores.map((store, index) => (
              <div key={store.name}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative h-48 w-full">
                    <Image
                        src={store.image}
                        alt={`Image of ${store.name}`}
                        fill
                        className="object-cover rounded-md"
                        data-ai-hint={store.aiHint}
                    />
                    </div>
                    <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold font-headline">{store.name}</h2>
                        <p className="text-muted-foreground mt-1">{store.address}</p>
                    </div>
                    <Button variant="outline" className="mt-4 w-full sm:w-auto">Location</Button>
                    </div>
                </div>
                {index < stores.length - 1 && <Separator className="mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
