import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <h1 className="text-8xl font-extrabold tracking-tight text-center mb-4 font-headline">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
