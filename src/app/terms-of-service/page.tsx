import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the Overboard Co., Ltd. website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Overboard Co., Ltd. provides premier beachwear and lifestyle products through our retail stores and online platform. Our services include product sales, customer support, and related commercial activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Providing accurate and complete information when making purchases</li>
                <li>Maintaining the confidentiality of account information</li>
                <li>Using our services in compliance with all applicable laws</li>
                <li>Not engaging in fraudulent or harmful activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Products and Pricing</h2>
              <p className="text-muted-foreground mb-4">
                All products are subject to availability. Prices are subject to change without notice. We reserve the right to modify or discontinue products at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Payment is required at the time of purchase. Refunds and exchanges are subject to our return policy. All sales are final unless otherwise specified.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content, including but not limited to text, graphics, logos, images, and software, is the property of Overboard Co., Ltd. and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Overboard Co., Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms shall be governed by and construed in accordance with the laws of Thailand.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Overboard Co., Ltd.</strong><br />
                  Email: info@overboard.co.th<br />
                  Phone: +66 848-44-5742
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}