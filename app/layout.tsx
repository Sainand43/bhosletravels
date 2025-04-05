import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bhosle Travels - Best Travel Agency in Goa | Tours, Real Estate & More',
  description: 'Experience the best of Goa with Bhosle Travels. We offer premium tour packages, real estate services, cruises, and vehicle rentals. Your trusted travel partner in Goa.',
  keywords: 'Goa travel agency, Goa tours, Goa real estate, Goa cruises, rent bike Goa, rent car Goa, best travel agency Goa',
  openGraph: {
    title: 'Bhosle Travels - Best Travel Agency in Goa',
    description: 'Your premier travel partner in Goa offering tours, real estate, cruises, and vehicle rentals.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}