import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-primary-foreground/80">
              Pioneering the premier water sports lifestyle experience in Southeast Asia.
            </p>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider">Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="#stores" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Our Stores</Link></li>
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:invest@overboard.asia" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">invest@overboard.asia</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">+66 XX XXX XXXX</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wider">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-primary-foreground/20" />
        <div className="text-center text-xs text-primary-foreground/60">
          <p>© 2025 Overboard Co., Ltd. All Rights Reserved.</p>
          <p className="mt-2">This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security.</p>
        </div>
      </div>
    </footer>
  );
}
