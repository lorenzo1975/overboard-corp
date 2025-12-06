/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfUsePage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Use</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Website Usage</h2>
              <p className="text-muted-foreground mb-4">
                This website is operated by Overboard Co., Ltd. Throughout the site, the terms "we", "us" and "our" refer to Overboard Co., Ltd. We offer this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You may use our website for lawful purposes only. You agree not to use the website:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material not authorized by us</li>
                <li>To impersonate or attempt to impersonate the company, an employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Content</h2>
              <p className="text-muted-foreground mb-4">
                Our service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post to the service, including its legality, reliability, and appropriateness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service. By using our service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Website Availability</h2>
              <p className="text-muted-foreground mb-4">
                We do not guarantee that our website will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the website, resulting in interruptions, delays, or errors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party web sites or services that are not owned or controlled by Overboard Co., Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimers</h2>
              <p className="text-muted-foreground mb-4">
                The website is provided on an "as is" and "as available" basis. Overboard Co., Ltd. makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Use, please contact us at:
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
