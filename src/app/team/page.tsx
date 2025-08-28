import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TeamIntro } from '@/components/team-intro';
import { TeamMembers } from '@/components/team-members';

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <TeamIntro />
        <TeamMembers />
      </main>
      <Footer />
    </div>
  );
}
