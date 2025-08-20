import { Award, Store, TrendingUp, Users } from 'lucide-react';

const metrics = [
  {
    icon: <Store className="h-8 w-8 text-accent" />,
    value: '6',
    label: 'Profitable Stores',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    value: '75%',
    label: 'Year-Over-Year Growth',
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    value: '#1',
    label: 'Rated in Key Markets',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    value: '200k+',
    label: 'Customer Community',
  },
];

export function SocialProof() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center justify-center">
              {metric.icon}
              <p className="mt-2 text-3xl font-bold tracking-tight">{metric.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
