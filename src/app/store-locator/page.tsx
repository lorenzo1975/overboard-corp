
'use client'
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { StoreMap } from '@/components/store-map';
import { useState } from 'react';

const stores = [
  {
    name: "O'NEILL Rawai",
    address: '100/37 Sayuan, Rawai, Phuket, 83130',
    image: '/images/stores/oneil.webp',
    aiHint: 'surf shop rawai',
    lat: 7.779,
    lng: 98.325,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=O%27NEILL+Rawai'
  },
  {
    name: 'Overboard Bang Tao',
    address: '9-53, 9-54 Soi Bangtao 2, Cherngtalay, Thalang, Phuket 83110',
    image: '/images/stores/bangtao.webp',
    aiHint: 'beach shop bang tao',
    lat: 7.994,
    lng: 98.293,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Overboard+Bang+Tao'
  },
  {
    name: 'Overboard Hua Hin',
    address: '90 Naresdamri Rd, Hua Hin, Hua Hin District, Prachuap Khiri Khan 77110',
    image: '/images/stores/hua-hin.webp',
    aiHint: 'watersports store hua hin',
    lat: 12.571,
    lng: 99.96,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Overboard+Hua+Hin'
  },
  {
    name: 'OVERBOARD KARON',
    address: '238 Moo 1 Patak Rd, Karon, Mueang Phuket District, Karon, Phuket, 83100',
    image: '/images/stores/karon.webp',
    aiHint: 'modern retail karon',
    lat: 7.846,
    lng: 98.295,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=OVERBOARD+KARON'
  },
  {
    name: 'Overboard Nai Harn',
    address: '15/166-167 Moo 1 Mueang Phuket, Rawai, Phuket, 83130',
    image: '/images/stores/nai-harn.webp',
    aiHint: 'surf store nai harn',
    lat: 7.775,
    lng: 98.305,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Overboard+Nai+Harn'
  },
  {
    name: 'Quiksilver Krabi',
    address: '259/79 Ao Nang, Mueang Krabi District, Krabi 81180',
    image: '/images/stores/qs-krabi.webp',
    aiHint: 'quiksilver store krabi',
    lat: 8.032,
    lng: 98.822,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Quiksilver+Krabi'
  },
]

export default function StoreLocatorPage() {
  const [activeStore, setActiveStore] = useState<(typeof stores)[0] | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-8xl font-extrabold tracking-tight text-center mb-12 font-headline">
          OUR STORES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="relative h-[600px] md:h-full rounded-lg overflow-hidden">
             <StoreMap stores={stores} activeStore={activeStore} setActiveStore={setActiveStore}/>
          </div>
          <div className="flex flex-col gap-8">
            {stores.map((store, index) => (
              <div key={store.name} onMouseEnter={() => setActiveStore(store)} onMouseLeave={() => setActiveStore(null)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative h-48 w-full">
                    <Image
                        src={store.image}
                        alt={`Image of ${store.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover rounded-md"
                        data-ai-hint={store.aiHint}
                    />
                    </div>
                    <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold font-headline">{store.name}</h2>
                        <p className="text-muted-foreground mt-1">{store.address}</p>
                    </div>
                    <Button variant="outline" className="mt-4 w-full sm:w-auto" asChild>
                      <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">Location</a>
                    </Button>
                    </div>
                </div>
                {index < stores.length - 1 && <Separator key={`separator-${store.name}`} className="mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
