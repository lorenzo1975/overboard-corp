import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          The Team
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Meet the passionate individuals behind Overboard.
        </p>
      </main>
      <Footer />
    </div>
  );
}
