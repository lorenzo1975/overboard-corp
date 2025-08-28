import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function StoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-8xl font-extrabold tracking-tight text-center mb-12 font-headline">
          Our Story
        </h1>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          Discover the journey of how Overboard came to be.
        </p>
      </main>
      <Footer />
    </div>
  );
}
