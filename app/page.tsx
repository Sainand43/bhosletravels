import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bean as Beach, Bot as Boat, Car, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from 'lucide-react';

export default function HomePG() {
  const popularDestinations = [
    {
      name: "Calangute Beach",
      image: "/images/calangute.jpg",
      description: "Experience the vibrant atmosphere of Goa's most popular beach."
    },
    {
      name: "Dudhsagar Falls",
      image: "/images/dudhsagar.jpg",
      description: "Marvel at one of India's tallest waterfalls in its natural glory."
    },
    {
      name: "Basilica of Bom Jesus",
      image: "/images/ogc.jpg",
      description: "Explore UNESCO World Heritage site featuring baroque architecture."
    }
  ];

  const services = [
    {
      title: "Real Estate",
      icon: Home,
      description: "Find your dream property in Goa",
      link: "/services/real-estate",
      image: "/images/re.png",
    },
    {
      title: "Cruises",
      icon: Boat,
      description: "Luxury cruise experiences",
      link: "/services/cruises",
      image: "/images/cruise.png",
    },
    {
      title: "Vehicle Rental",
      icon: Car,
      description: "Bikes and cars for rent",
      link: "/services/rentals",
      image: "/images/rcb.png",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/images/butterfly.jpg"
          alt="Goa Beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover the Magic of Goa
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your trusted travel partner for unforgettable Goan experiences
          </p>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-7">
            Introduction
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12">
          Discover Goa with Bhosle Travels – One of the <b>Best Travel Agencies in Goa.</b> Planning your Goan getaway? Bhosle Travels is your go-to choice among the best travel agencies in Goa, offering personalized tour packages, premium hotel deals, and unforgettable local experiences. From stunning beaches to heritage sites and thrilling water sports, we help you explore the best of Goa—stress-free and affordably. Let us plan your perfect trip!
          </p>
          <h2 className="text-4xl font-bold text-center mb-7">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12">
          Your Trusted Local Travel Experts in Goa
          At Bhosle Travels, we are more than just a travel agency—we are passionate locals who know Goa inside out. Recognized as one of the best travel agencies in Goa, our mission is to provide authentic, customized travel experiences that match your style and budget. With years of experience and hundreds of happy clients, we pride ourselves on reliable service, local expertise, and attention to detail.
          </p>
          <h2 className="text-4xl font-bold text-center mb-7">Our Services</h2>
          <p className="text-xl md:text-2xl text-center mb-3">
          What We Offer at Bhosle Travels
          As one of the best travel agencies in Goa, we offer a wide range of services to make your trip seamless:
          </p>
          <ul className="text-xl md:text-2xl text-center mb-3">
            <li>Tailor-made Goa tour packages (North & South Goa)</li>
            <li>Budget and luxury hotel bookings</li>
            <li>Private car rentals</li>
            <li>Scuba diving, parasailing & adventure sports</li>
            <li>Heritage and cultural guided tours</li>
            <li>Honeymoon & group travel planning</li>
          </ul>
          <p className="text-xl md:text-2xl text-center mb-12">
          Whatever your travel goal, we’re here to make it memorable.
          </p>
          <h2 className="text-4xl font-bold text-center mb-7">Contact Us Call-to-Action</h2>
          <p className="text-xl md:text-2xl text-center mb-12">
          Ready to Travel with One of the Best Travel Agencies in Goa?
          Let Bhosle Travels handle your trip planning while you enjoy the magic of Goa. Reach out today for free consultation and the best travel deals!
          </p>
        <div className="max-w-7xl mx-auto flex justify-center items-center">
        <Button asChild variant="default" className="text-center w-500 h-200 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <a href="tel:+918857883601" className="text-4xl font-bold text-center mb-7">
                <Phone className="mr-4 h-8 w-8"/>
                <h2 className="text-2xl text-center">Contact Us</h2>
              </a>
          </Button>
       </div>
          {/*<div className="grid md:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <Card key={destination.name} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                </div>
              </Card>
            ))}
            </div>*/}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Other Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={`https://wa.me/+918857883601`}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                  {/*<service.icon className="h-12 w-12 mb-4 text-primary" />*/}
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}