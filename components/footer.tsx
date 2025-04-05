import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bhosle Travels</h3>
            <p className="text-gray-400">
              Your premier travel partner in Goa offering comprehensive travel services, real estate solutions, and vehicle rentals.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations" className="text-gray-400 hover:text-white">Destinations</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="https://wa.me/918857883601" className="text-gray-400 hover:text-white">Tour Packages</Link></li>
              <li><Link href="https://wa.me/918857883601" className="text-gray-400 hover:text-white">Real Estate</Link></li>
              <li><Link href="https://wa.me/918857883601" className="text-gray-400 hover:text-white">Cruises</Link></li>
              <li><Link href="https://wa.me/918857883601" className="text-gray-400 hover:text-white">Vehicle Rental</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <a href="tel:+918857883601">
                <p className="flex items-center" >
                  <Phone className="h-5 w-5 mr-2"/>
                  +91 88578 83601
                </p>
              </a>
              <p></p>
              <a href="dreamhomenest@gmail.com">
                <p className="flex items-center" > 
                  <Mail className="h-5 w-5 mr-2"/>
                  dreamhomenest@gmail.com
                </p>
              </a>
            </div>
          {/*  <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>*/}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bhosle Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}