import Image from 'next/image';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    city: "Kyoto",
    country: "Japan",
    price: 120,
    tours: 350,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    city: "Reykjavik",
    country: "Iceland",
    price: 185,
    tours: 120,
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    city: "Cape Town",
    country: "SA",
    price: 95,
    tours: 210,
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e27?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    city: "Rome",
    country: "Italy",
    price: 110,
    tours: 450,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop"
  }
];

export default function TrendingDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Trending Destinations</h2>
            <p className="text-gray-500">Explore the most popular spots this season.</p>
          </div>
          <Link href="/destinations" className="hidden md:flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
            View all <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div key={item.id} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow">
              
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.city}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* OVERLAY GRADIENT (Để chữ dễ đọc hơn) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* PRICE TAG (Top Left) */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                From ${item.price}
              </div>

              {/* CONTENT (Bottom) */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-1">{item.city}, {item.country}</h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                  <Compass size={16} />
                  <span>{item.tours}+ Tours</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
             <Link href="/destinations" className="inline-flex items-center text-blue-600 font-semibold">
                View all <ArrowRight size={18} className="ml-1" />
             </Link>
        </div>
      </div>
    </section>
  );
}