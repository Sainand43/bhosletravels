import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Best Places to Visit in Goa | Top Attractions & Sightseeing',
  description: 'Discover the top attractions in Goa, from sun-kissed beaches to historic forts and churches. Plan your perfect Goan getaway with our comprehensive guide.',
};

const places = [
  {
    name: 'Calangute Beach',
    description: 'Calangute Beach, often referred to as the "Queen of Beaches," is the largest beach in North Goa. Its a hub for tourists and backpackers, offering a variety of water sports like parasailing, water surfing, banana rides, and jet-skiing. The beach is lined with shacks serving delicious Goan cuisine and refreshing beverages.',
    image: '/images/calangute.jpg',
    alt: 'Calangute Beach in Goa',
  },
  {
    name: 'Baga Beach',
    description: "Adjacent to Calangute, Baga Beach is famous for its lively nightlife, with iconic spots like Britto's, Tito's, and Mambos. During the day, visitors can indulge in water sports or relax on the sandy shores. The beach also hosts a range of cafes and restaurants offering delectable seafood.​",
    image: '/images/baga.jpg',
    alt: 'Baga Beach nightlife',
  },
  {
    name: 'Dudhsagar Falls',
    description: "One of India's tallest waterfalls, Dudhsagar Falls is a four-tiered marvel located on the Mandovi River. Surrounded by lush greenery, the falls are especially spectacular during the monsoon season. Visitors can trek to the falls or opt for a jeep safari through the Bhagwan Mahavir Wildlife Sanctuary.",
    image: '/images/dudhsagar.jpg',
    alt: 'Dudhsagar Falls in Goa',
  },
  {
    name: 'Our Lady of the Immaculate Conception Church',
    description: 'Located in the heart of Panaji, this iconic white-washed church is one of Goa’s most photographed landmarks. Built in 1541 and later reconstructed in the 17th century, the church is known for its symmetrical architecture, zigzagging stairways, and the bell tower which houses the second-largest bell in Goa. Lit beautifully at night and offering serene surroundings, it stands as a symbol of Goa’s colonial heritage and religious harmony.',
    image: '/images/icc.jpg',
    alt: 'Our Lady of the Immaculate Conception Church in Panaji, Goa',
  },
  {
    name: 'Basilica of Bom Jesus',
    description: "A UNESCO World Heritage Site, the Basilica of Bom Jesus is renowned for housing the mortal remains of St. Francis Xavier. The church's baroque architecture and intricate carvings make it a significant landmark in Goa's religious and cultural landscape",
    image: '/images/ogc.jpg',
    alt: 'Basilica of Bom Jesus in Goa',
  },
  {
    name: 'Anjuna Beach',
    description: "Known for its trance parties and vibrant flea markets, Anjuna Beach attracts both party-goers and shoppers. The Wednesday flea market offers a range of items from clothing to souvenirs, reflecting Goa's eclectic culture.",
    image: '/images/anjuna.jpg',
    alt: 'Anjuna Beach in Goa',
  },
  {
    name: 'Tambdi Surla Temple',
    description: 'The Tambdi Surla Mahadev Temple is a hidden gem nestled in the Bhagwan Mahavir Wildlife Sanctuary. Built in the 12th century by the Kadamba dynasty, it is the oldest surviving temple in Goa. Made entirely of basalt stone, this Shiva temple showcases intricate carvings and a serene, spiritual ambiance, surrounded by dense forest and a stream flowing nearby.',
    image: '/images/tambdi-surla.jpg',
    alt: 'Tambdi Surla Mahadev Temple in Goa',
  },
  {
    name: 'Shanta Durga Temple',
    description: 'The Shanta Durga Temple, located in the village of Kavlem in Ponda, is one of the most revered Hindu temples in Goa. Dedicated to Goddess Shantadurga, a peaceful form of Goddess Durga who mediates between Lord Shiva and Lord Vishnu, the temple features Indo-Portuguese architecture with a stunning red façade, white domes, and a large tank. Surrounded by lush greenery and steeped in spiritual energy, it is a must-visit for those seeking divine blessings and cultural depth.',
    image: '/images/shantadurga.jpg',
    alt: 'Shanta Durga Temple in Goa',
  },
  {
    name: 'Fort Aguada',
    description: 'A well-preserved 17th-century Portuguese fort overlooking the Arabian Sea, known for its historic lighthouse.',
    image: '/images/af.jpg',
    alt: 'Fort Aguada in Goa',
  },
  {
    name: 'Palolem Beach',
    description: "Perched above the Chapora River, this fort offers breathtaking views of the surrounding coastline. Made famous by Bollywood films, it's a favorite spot for tourists seeking picturesque sunsets.",
    image: '/images/palolem.jpg',
    alt: 'Palolem Beach in Goa',
  },
];

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
        <div className="container mx-auto px-4 py-8">
        <main className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Best Places to Visit in Goa</h1>
              <p className="text-lg text-gray-600">
                Discover the top beaches, historic forts, and hidden gems that make Goa one of India’s most loved travel destinations.
              </p>
            </header>

            <section className="space-y-16">
              {places.map((place, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden md:flex transition hover:shadow-lg"
                >
                  <div className="md:flex-shrink-0">
                    <img
                      src={place.image}
                      alt={place.alt}
                      className="h-64 w-full object-cover md:w-80"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{index+1+". "}{place.name}</h2>
                    <p className="text-gray-700">{place.description}</p>
                  </div>
                </div>
              ))}
            </section>
          </article>
        </main>
        </div>
      </div>
    </div>
  );
}
 {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600">Discover travel tips, local insights, and inspiration for your Goan adventure</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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