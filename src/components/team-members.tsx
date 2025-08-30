import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Bee @naiharn store',
    role: 'The Column of Nai Harn',
    avatar: '/images/team/Bee-artwork.png',
    aiHint: 'male portrait professional'
  },
  {
    name: 'Na @sayuan store ',
    role: 'Nothing gets unoticed',
    avatar: '/images/team/Na-artwork.png',
    aiHint: 'male portrait smiling'
  },
  {
    name: 'Gif @bangato store',
    role: 'As usually friendly',
    avatar: '/images/team/Gif-artwork.png',
    aiHint: 'female portrait professional'
  },
  {
    name: 'The Boss #1',
    role: 'Relentless worker',
    avatar: '/images/team/Koy-artwork.png',
    aiHint: 'male portrait serious'
  },
  {
    name: 'Eva "The Anchor" Rostova',
    role: 'Chief Financial Officer',
    avatar: '/images/team/Ploy-artwork.png',
    aiHint: 'female portrait finance'
  },
  {
    name: 'Frank "The Fin" Miller',
    role: 'Head of Product',
    avatar: '/images/team/Mai-artwork.png',
    aiHint: 'male portrait product'
  },
  {
    name: 'Grace "The Current" Lee',
    role: 'Community Manager',
    avatar: '/images/team/Lorenzo-artwork.png',
    aiHint: 'female portrait community'
  },
  {
    name: 'Henry "The Helm" Wong',
    role: 'Lead Retail Strategist',
    avatar: '/images/team/Jukkro-artwork.png',
    aiHint: 'male portrait retail'
  },
  {
    name: 'Isla "The Tide" Garcia',
    role: 'Creative Director',
    avatar: '/images/team/Benz-artwork.png',
    aiHint: 'female portrait creative'
  },
  {
    name: 'Bee "The Jetty" Kim',
    role: 'Logistics Coordinator',
    avatar: '/images/team/Panda.jpg',
    aiHint: 'male portrait logistics'
  },
];

export function TeamMembers() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                  data-ai-hint={member.aiHint}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
