'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

const navLinks = [
  { name: 'The team', href: '/team' },
  { name: 'Our Story', href: '/story' },
  { name: 'Store Locator', href: '/store-locator' },
  { name: "Investor's opportunity", href: '/investors' },
  { name: 'Contact us', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <ModeToggle />
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href="https://overboard.asia">Shop Now</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <SheetDescription className="sr-only">Main navigation links for mobile.</SheetDescription>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                       <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex items-center justify-between p-4">
                  <Button asChild className="flex-grow bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105">
                    <Link href="https://overboard.asia" onClick={() => setIsMenuOpen(false)}>Shop Now</Link>
                  </Button>
                  <div className="ml-4">
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
