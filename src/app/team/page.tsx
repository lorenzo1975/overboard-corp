import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TeamIntro } from '@/components/team-intro';
import { TeamMembers } from '@/components/team-members';
import { JobVacancies } from '@/components/job-vacancies';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Team | Overboard Asia',
  description: "Meet the passionate and experienced team driving Overboard Asia's success. Learn about our company culture and explore career opportunities with us."
};

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-8xl font-extrabold tracking-tight text-center mb-12 font-headline">
            The Team
          </h1>
        </div>
        <TeamIntro />
        <TeamMembers />
        <Separator className="my-16" />
        <JobVacancies />
      </main>
      <Footer />
    </div>
  );
}
