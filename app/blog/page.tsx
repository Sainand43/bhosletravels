import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Travel Blog | Bhosle Travels',
  description: 'Read our latest travel blogs about Goa. Get insider tips, destination guides, and travel inspiration for your next trip.',
};

const blogPosts = [
  {
    title: "Top 10 Hidden Beaches in Goa",
    excerpt: "Discover secluded beaches away from the tourist crowds where you can enjoy pristine shores and peaceful surroundings.",
    image: "https://images.unsplash.com/photo-1589308157529-c67136c8862d",
    author: "Rahul Bhosle",
    date: "2024-03-15",
    slug: "top-10-hidden-beaches-goa"
  },
  {
    title: "A Food Lover's Guide to Goan Cuisine",
    excerpt: "Explore the rich flavors of Goan cuisine, from spicy curries to fresh seafood dishes that define the region's culinary heritage.",
    image: "https://images.unsplash.com/photo-1589308157529-c67136c8862d",
    author: "Priya Shah",
    date: "2024-03-10",
    slug: "food-lovers-guide-goan-cuisine"
  },
  {
    title: "Best Time to Visit Goa: A Seasonal Guide",
    excerpt: "Plan your perfect Goan vacation with our comprehensive guide to the best times to visit based on weather and activities.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    author: "Amit Desai",
    date: "2024-03-05",
    slug: "best-time-to-visit-goa"
  },
  {
    title: "Historical Churches of Old Goa",
    excerpt: "Step back in time and explore the magnificent Portuguese churches that showcase Goa's rich colonial heritage.",
    image: "https://images.unsplash.com/photo-1590517862150-b4862ad8bb04",
    author: "Maria Fernandes",
    date: "2024-03-01",
    slug: "historical-churches-old-goa"
  },
  {
    title: "Adventure Activities in Goa",
    excerpt: "From water sports to hiking trails, discover the thrilling adventure activities that await you in Goa.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
    author: "Rahul Bhosle",
    date: "2024-02-25",
    slug: "adventure-activities-goa"
  },
  {
    title: "Shopping Guide: Markets of Goa",
    excerpt: "Navigate through Goa's vibrant markets and find the best spots for shopping, from spices to souvenirs.",
    image: "https://images.unsplash.com/photo-1555443805-658637491dd4",
    author: "Priya Shah",
    date: "2024-02-20",
    slug: "shopping-guide-markets-goa"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600">Discover travel tips, local insights, and inspiration for your Goan adventure</p>
        </div>

        {/*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
          </div>*/}
      </div>
    </div>
  );
}