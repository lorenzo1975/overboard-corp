import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfUseGDPRPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Use - GDPR Compliance</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. GDPR Compliance Statement</h2>
              <p className="text-muted-foreground mb-4">
                Overboard Co., Ltd. is committed to protecting your personal data and respecting your privacy rights in accordance with the General Data Protection Regulation (GDPR). This document outlines how we handle personal data for users within the European Union.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Legal Basis for Processing</h2>
              <p className="text-muted-foreground mb-4">
                We process your personal data under the following legal bases:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Consent:</strong> When you explicitly consent to processing for specific purposes</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you</li>
                <li><strong>Legal obligation:</strong> When we need to comply with legal requirements</li>
                <li><strong>Legitimate interests:</strong> When processing is necessary for our legitimate business interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Your Rights Under GDPR</h2>
              <p className="text-muted-foreground mb-4">
                As a data subject under GDPR, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li><strong>Right to be informed:</strong> About how your data is being used</li>
                <li><strong>Right of access:</strong> To obtain a copy of your personal data</li>
                <li><strong>Right to rectification:</strong> To correct inaccurate personal data</li>
                <li><strong>Right to erasure:</strong> To have your personal data deleted</li>
                <li><strong>Right to restrict processing:</strong> To limit how your data is used</li>
                <li><strong>Right to data portability:</strong> To transfer your data to another service</li>
                <li><strong>Right to object:</strong> To object to certain types of processing</li>
                <li><strong>Rights related to automated decision making:</strong> Including profiling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect and process the following categories of personal data:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Purchase history and preferences</li>
                <li>Website usage data and analytics</li>
                <li>Marketing preferences and communication history</li>
                <li>Technical data (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. How We Use Your Data</h2>
              <p className="text-muted-foreground mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Processing orders and providing customer service</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Compliance with legal obligations</li>
                <li>Fraud prevention and security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Sharing and Transfers</h2>
              <p className="text-muted-foreground mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4">
                <li>Service providers who assist in our business operations</li>
                <li>Payment processors for transaction processing</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                When transferring data outside the EU, we ensure appropriate safeguards are in place.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Specific retention periods depend on the type of data and the purpose of processing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. For more information, please see our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Exercising Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within one month of receipt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Complaints</h2>
              <p className="text-muted-foreground mb-4">
                If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For any questions about data protection or to exercise your rights, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Data Protection Officer</strong><br />
                  <strong>Overboard Co., Ltd.</strong><br />
                  Email: info@overboard.co.th<br />
                  Phone: +66 848-44-5742<br />
                  Subject: GDPR Data Request
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}