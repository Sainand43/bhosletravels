import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bean as Beach, Bot as Boat, Car, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      link: "/services/real-estate"
    },
    {
      title: "Cruises",
      icon: Boat,
      description: "Luxury cruise experiences",
      link: "/services/cruises"
    },
    {
      title: "Vehicle Rental",
      icon: Car,
      description: "Bikes and cars for rent",
      link: "/services/rentals"
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
          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
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
              <Link key={service.title} href={service.link}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 mb-4 text-primary" />
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