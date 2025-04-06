"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Compass, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    /*{ href: '/destinations', label: 'Destinations' },*/
    { href: '/gallery', label: 'Gallery' },
    { href: '/best-places-to-visit-in-goa', label: 'Places' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Compass className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Bhosle Travels</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
             <Button asChild variant="default" className="ml-4">
              <a href="tel:+918857883601">
                <Phone className="mr-2 h-4 w-4"/>
                Contact Us
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full mt-4">
              <a href="tel:+918857883601">
                <Phone className="mr-2 h-4 w-4"/>
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}