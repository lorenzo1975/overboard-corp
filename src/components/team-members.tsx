import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alex "Captain" Jensen',
    role: 'Founder & CEO',
    avatar: 'https://picsum.photos/400/400?random=1',
    aiHint: 'male portrait professional'
  },
  {
    name: 'Ben "The Maverick" Carter',
    role: 'Head of Operations',
    avatar: 'https://picsum.photos/400/400?random=2',
    aiHint: 'male portrait smiling'
  },
  {
    name: 'Chloe "Starlight" Davis',
    role: 'Chief Marketing Officer',
    avatar: 'https://picsum.photos/400/400?random=3',
    aiHint: 'female portrait professional'
  },
  {
    name: 'David "The Navigator" Chen',
    role: 'Head of Expansion',
    avatar: 'https://picsum.photos/400/400?random=4',
    aiHint: 'male portrait serious'
  },
  {
    name: 'Eva "The Anchor" Rostova',
    role: 'Chief Financial Officer',
    avatar: 'https://picsum.photos/400/400?random=5',
    aiHint: 'female portrait finance'
  },
  {
    name: 'Frank "The Fin" Miller',
    role: 'Head of Product',
    avatar: 'https://picsum.photos/400/400?random=6',
    aiHint: 'male portrait product'
  },
  {
    name: 'Grace "The Current" Lee',
    role: 'Community Manager',
    avatar: 'https://picsum.photos/400/400?random=7',
    aiHint: 'female portrait community'
  },
  {
    name: 'Henry "The Helm" Wong',
    role: 'Lead Retail Strategist',
    avatar: 'https://picsum.photos/400/400?random=8',
    aiHint: 'male portrait retail'
  },
  {
    name: 'Isla "The Tide" Garcia',
    role: 'Creative Director',
    avatar: 'https://picsum.photos/400/400?random=9',
    aiHint: 'female portrait creative'
  },
  {
    name: 'Jack "The Jetty" Kim',
    role: 'Logistics Coordinator',
    avatar: 'https://picsum.photos/400/400?random=10',
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
