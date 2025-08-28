import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Alex "Captain" Jensen',
    role: 'Founder & CEO',
    avatar: 'https://picsum.photos/200/200',
    aiHint: 'male portrait professional'
  },
  {
    name: 'Ben "The Maverick" Carter',
    role: 'Head of Operations',
    avatar: 'https://picsum.photos/200/200',
    aiHint: 'male portrait smiling'
  },
  {
    name: 'Chloe "Starlight" Davis',
    role: 'Chief Marketing Officer',
    avatar: 'https://picsum.photos/200/200',
    aiHint: 'female portrait professional'
  },
  {
    name: 'David "The Navigator" Chen',
    role: 'Head of Expansion',
    avatar: 'https://picsum.photos/200/200',
    aiHint: 'male portrait serious'
  },
];

export function TeamMembers() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader>
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.aiHint} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
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
