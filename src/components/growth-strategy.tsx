import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MapPin, Users, LineChart } from 'lucide-react';

const strategies = [
  {
    icon: <MapPin className="h-8 w-8 text-accent" />,
    title: 'Phase 1: Domestic Dominance',
    description: 'Solidify our market leadership by opening new flagship stores in Thailand\'s key coastal and urban tourist hotspots.',
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Phase 2: Regional Expansion',
    description: 'Strategically enter high-growth markets such as Indonesia, Vietnam, and the Philippines, replicating our successful model.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Franchise Model Potential',
    description: 'Develop and launch a comprehensive franchise program to accelerate growth and brand presence across the APAC region.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-accent" />,
    title: 'Strong ROI',
    description: 'Our lean operational model and diversified revenue streams are designed to deliver strong, sustainable returns for our investors.',
  },
];

export function GrowthStrategy() {
  return (
    <section id="growth-strategy" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-headline">A Clear Vision for Scalable Growth</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our growth strategy is built on a foundation of proven success, aimed at capturing market share and maximizing investor value.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy) => (
            <Card key={strategy.title} className="text-center bg-card">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  {strategy.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">{strategy.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
