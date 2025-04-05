import { Card } from "@/components/ui/card";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'About Bhosle Travels | Leading Travel Agency in Goa',
  description: 'Learn about Bhosle Travels, the most trusted travel agency in Goa. Discover our story, mission, and commitment to providing exceptional travel experiences.',
};

const stats = [
  { icon: Users, label: "Happy Customers", value: "10,000+" },
  { icon: Clock, label: "Years of Experience", value: "15+" },
  { icon: Award, label: "Awards Won", value: "20+" },
  { icon: ThumbsUp, label: "5-Star Reviews", value: "1,000+" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Bhosle Travels</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner in Goa since 2025, providing exceptional experiences and personalized service.
          </p>
        </div>

        {/* Stats 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
        */}

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px]">
            <Image
              src="/images/baga.jpg"
              alt="Bhosle Travels Team"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2025, Bhosle Travels aims to be one of Goa's most trusted travel agencies. Our journey began with a simple mission: to help visitors experience the true essence of Goa.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've expanded our services to include real estate consultancy, luxury cruises, and vehicle rentals, making us a one-stop solution for all your needs in Goa.
            </p>
            <p className="text-gray-600">
              What sets us apart is our deep local knowledge, personalized service, and commitment to creating memorable experiences for every client.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every service we provide, ensuring the highest standards of quality and customer satisfaction.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with utmost integrity, transparency, and honesty, building trust with our clients.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate and improve our services to meet the evolving needs of our customers.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}