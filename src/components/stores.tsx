/* eslint-disable react/no-unescaped-entities */
import { StoreMapCard } from '@/components/store-map-card';

const stores = [
  {
    name: 'Overboard Bangtao',
    location: 'Laguna Beach, Phuket',
    fact: 'Top Performing Location',
    lat: 7.994,
    lng: 98.293,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Overboard+Bang+Tao'
  },
  {
    name: 'Overboard Karon',
    location: 'Karon Beach, Phuket',
    fact: 'Highest Rental Revenue',
    lat: 7.846,
    lng: 98.295,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=OVERBOARD+KARON'
  },
  {
    name: 'Overboard Nai Harn',
    location: 'Nai Harn, Phuket',
    fact: 'Newest Flagship',
    lat: 7.775,
    lng: 98.305,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Overboard+Nai+Harn'
  },
  {
    name: 'Overboard Hua Hin',
    location: 'Main Strip, Hua Hin',
    fact: 'Community Hub',
    lat: 12.571,
    lng: 99.96,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Overboard+Hua+Hin'
  },
  {
    name: "O'Neill Rawai",
    location: 'Rawai, Phuket',
    fact: 'Best Customer Ratings',
    lat: 7.779,
    lng: 98.325,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=O%27NEILL+Rawai'
  },
  {
    name: 'Quiksilver Krabi',
    location: 'Ao Nang, Krabi',
    fact: 'Urban Concept Store',
    lat: 8.032,
    lng: 98.822,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Quiksilver+Krabi'
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
            <StoreMapCard
              key={store.name}
              name={store.name}
              location={store.location}
              fact={store.fact}
              lat={store.lat}
              lng={store.lng}
              mapUrl={store.mapUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
