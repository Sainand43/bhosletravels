import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export const metadata = {
  title: 'Photo Gallery | Bhosle Travels',
  description: 'View our stunning collection of photographs from various destinations in Goa. Experience the beauty before you visit.',
};

const galleries = {
  beaches: [
    { url: "../images/calangute.jpg", caption: "Calangute Beach Sunset" },
    { url: "/images/palolem.jpg", caption: "Palolem Beach" },
    { url: "/images/anjuna.jpg", caption: "Anjuna Beach" },
    { url: "/images/baga.jpg", caption: "Baga Beach" },
    { url: "/images/vb.jpg", caption: "Vagator Beach" },
    { url: "/images/ab.jpg", caption: "Arambol Beach" },
  ],
  heritage: [
    { url: "/images/ogc.jpg", caption: "Basilica of Bom Jesus" },
    { url: "/images/mangueshi.jpg", caption: "Mangueshi Temple" },
    { url: "/images/tambdi-surla.jpg", caption: "Tambdi Surla Temple" },
    { url: "/images/shantadurga.jpg", caption: "Shantadurga Temple" },
  ],
  nature: [
    { url: "/images/dudhsagar.jpg", caption: "Dudhsagar Falls" },
    { url: "/images/spf.jpg", caption: "Spice Plantations" },
    { url: "/images/butterfly.jpg", caption: "Butterfly Beach" },
  ],
};

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">Experience the beauty of Goa through our lens</p>
        </div>

        <Tabs defaultValue="beaches" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="beaches">Beaches</TabsTrigger>
            <TabsTrigger value="heritage">Heritage</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
          </TabsList>

          {Object.entries(galleries).map(([category, images]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={image.url}
                      alt={image.caption}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                      <p className="text-sm text-center">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}