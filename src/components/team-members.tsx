import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Bee @naiharn store',
    role: 'Nai Harn Store Manager',
    avatar: '/images/team/Bee.jpg',
    aiHint: 'female portrait sales assistant'
  },
  {
    name: 'Na @sayuan store ',
    role: 'Sales Manager Sayuan Store',
    avatar: '/images/team/Na.jpg',
    aiHint: 'male portrait smiling'
  },
  {
    name: 'Gif @bangato store',
    role: 'Sales Manager Bangtao',
    avatar: '/images/team/Gif.jpg',
    aiHint: 'female portrait sales assistant'
  },
  {
    name: 'Koy The Boss #1',
    role: 'Company Director',
    avatar: '/images/team/Koy.jpg',
    aiHint: 'female portrait company director'
  },
  {
    name: 'Ploy @bangtao store',
    role: 'Sales Manager',
    avatar: '/images/team/Ploy.jpg',
    aiHint: 'female portrait finance'
  },
  {
    name: 'May @Ao Nang store',
    role: 'Sales Manager Ao Nang.',
    avatar: '/images/team/Mai.jpg',
    aiHint: 'female portrait product'
  },
  {
    name: 'Lorenzo The Boss #2',
    role: 'Company Co-director',
    avatar: '/images/team/Lorenzo.jpg',
    aiHint: 'male portrait community'
  },
  {
    name: 'Jukko @karonstore',
    role: 'Sales Manager',
    avatar: '/images/team/Jukkro.jpg',
    aiHint: 'male portrait retail'
  },
  {
    name: 'Benz @karonstore',
    role: 'Sales Manager',
    avatar: '/images/team/Benz.jpg',
    aiHint: 'female portrait creative'
  },
  {
    name: 'Panda @karonstore',
    role: 'Security Guard Dog',
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
