/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const jobDepartments = [
  {
    name: 'Retail Operations',
    jobs: [
      {
        title: 'Store Manager',
        location: 'Phuket, Thailand',
        type: 'Full-time',
        href: '#',
      },
      {
        title: 'Sales Associate',
        location: 'Koh Samui, Thailand',
        type: 'Part-time',
        href: '#',
      },
      {
        title: 'Visual Merchandiser',
        location: 'Pattaya, Thailand',
        type: 'Full-time',
        href: '#',
      },
    ],
  },
  {
    name: 'Marketing & E-commerce',
    jobs: [
      {
        title: 'Digital Marketing Specialist',
        location: 'Bangkok, Thailand',
        type: 'Hybrid',
        href: '#',
      },
      {
        title: 'E-commerce Manager',
        location: 'Remote',
        type: 'Full-time',
        href: '#',
      },
    ],
  },
  {
    name: 'Logistics & Supply Chain',
    jobs: [
      {
        title: 'Warehouse Coordinator',
        location: 'Phuket, Thailand',
        type: 'Full-time',
        href: '#',
      },
    ],
  },
];

export function JobVacancies() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">
            We're Hiring!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Come and be part of the Overboard family. We're looking for passionate individuals to join our crew.
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          {jobDepartments.map((department, index) => (
            <div key={department.name}>
              {index > 0 && <Separator className="my-12" />}
              <h3 className="text-3xl font-bold tracking-tight font-headline">{department.name}</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {department.jobs.map((job) => (
                  <Link href={job.href} key={job.title} className="group block">
                    <Card className="h-full transition-all duration-200 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {job.location} &middot; {job.type}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
