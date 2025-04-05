import { Card } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'Popular Destinations in Goa | Bhosle Travels',
  description: 'Explore the most beautiful destinations in Goa with Bhosle Travels. From pristine beaches to historic churches, discover the best places to visit.',
};

const destinations = [
  {
    name: "Calangute Beach",
    image: "/images/calangute.jpg",
    description: "Known as the 'Queen of Beaches', Calangute is Goa's largest and most popular beach. Perfect for swimming, sunbathing, and water sports.",
    duration: "Customisable",
    rating: 4.8,
    location: "North Goa"
  },
  {
    name: "Dudhsagar Falls",
    image: "/images/dudhsagar.jpg",
    description: "One of India's tallest waterfalls, Dudhsagar Falls is a magnificent four-tiered waterfall located in the Bhagwan Mahavir Wildlife Sanctuary.",
    duration: "Customisable",
    rating: 4.9,
    location: "Mollem"
  },
  {
    name: "Basilica of Bom Jesus",
    image: "/images/ogc.jpg",
    description: "A UNESCO World Heritage site, this 16th-century church contains the mortal remains of St. Francis Xavier and exemplifies baroque architecture.",
    duration: "Customisable",
    rating: 4.7,
    location: "Old Goa"
  },
  {
    name: "Palolem Beach",
    image: "/images/palolem.jpg",
    description: "A crescent-shaped beach lined with coconut palms, known for its calm waters and scenic beauty. Perfect for swimming and sunset viewing.",
    duration: "Customisable",
    rating: 4.8,
    location: "South Goa"
  }
];

export default function Destinations() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Goa's Finest Destinations</h1>
          <p className="text-xl text-gray-600">Discover the most beautiful and exciting places to visit in Goa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.name} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{destination.name}</h2>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{destination.location}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{destination.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                {/*<div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 font-semibold">{destination.rating}</span>
          </div>*/}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}