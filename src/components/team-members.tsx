import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alex "Captain" Jensen',
    role: 'Founder & CEO',
    avatar: '/images/team/Alex-artwork.png',
    aiHint: 'male portrait professional'
  },
  {
    name: 'Ben "The Maverick" Carter',
    role: 'Head of Operations',
    avatar: '/images/team/Ben-artwork.png',
    aiHint: 'male portrait smiling'
  },
  {
    name: 'Chloe "Starlight" Davis',
    role: 'Chief Marketing Officer',
    avatar: '/images/team/Chloe-artwork.png',
    aiHint: 'female portrait professional'
  },
  {
    name: 'David "The Navigator" Chen',
    role: 'Head of Expansion',
    avatar: '/images/team/David-artwork.png',
    aiHint: 'male portrait serious'
  },
  {
    name: 'Eva "The Anchor" Rostova',
    role: 'Chief Financial Officer',
    avatar: '/images/team/Eva-artwork.png',
    aiHint: 'female portrait finance'
  },
  {
    name: 'Frank "The Fin" Miller',
    role: 'Head of Product',
    avatar: '/images/team/Frank-artwork.png',
    aiHint: 'male portrait product'
  },
  {
    name: 'Grace "The Current" Lee',
    role: 'Community Manager',
    avatar: '/images/team/Grace-artwork.png',
    aiHint: 'female portrait community'
  },
  {
    name: 'Henry "The Helm" Wong',
    role: 'Lead Retail Strategist',
    avatar: '/images/team/Henry-artwork.png',
    aiHint: 'male portrait retail'
  },
  {
    name: 'Isla "The Tide" Garcia',
    role: 'Creative Director',
    avatar: '/images/team/Isla-artwork.png',
    aiHint: 'female portrait creative'
  },
  {
    name: 'Bee "The Jetty" Kim',
    role: 'Logistics Coordinator',
    avatar: '/images/team/Bee-artwork.png',
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
