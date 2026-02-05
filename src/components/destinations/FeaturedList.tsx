"use client";

import DestinationCard from "./DestinationCard";
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const featuredDestinations = [
    {
        id: 1,
        title: "Notre Dame Cathedral",
        desc: "Stunning French colonial architecture in the heart of the city.",
        guides: "12+ Private Guides",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Ben Thanh Market",
        desc: "Iconic marketplace for local street food, textiles, and souvenirs.",
        guides: "18+ Private Guides",
        image: "https://images.unsplash.com/photo-1559592440-7f1533241f67?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Independence Palace",
        desc: "A landmark reflecting the historical events of the Vietnam War.",
        guides: "15+ Private Guides",
        image: "https://images.unsplash.com/photo-1563720743-f661ca3959bc?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Landmark 81",
        desc: "Experience the highest observation deck in Southeast Asia.",
        guides: "6+ Private Guides",
        image: "https://images.unsplash.com/photo-1621350630606-2580556da6c8?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "War Remnants Museum",
        desc: "A poignant journey through Vietnam's recent history.",
        guides: "20+ Private Guides",
        image: "https://images.unsplash.com/photo-1585233632311-6673a5a75503?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Cu Chi Tunnels",
        desc: "Explore the immense network of underground connecting tunnels.",
        guides: "25+ Private Guides",
        image: "https://images.unsplash.com/photo-1543884846-5e048384fec1?q=80&w=800&auto=format&fit=crop"
    }
];

export default function FeaturedList() {
    return (
        <section className="mb-20">
            <div className="flex items-end justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Featured in <span className="text-blue-600 font-heading">Ho Chi Minh City</span>
                </h1>
                <Link href="#" className="flex items-center gap-1 text-blue-600 font-bold text-sm hover:underline">
                    View All <ChevronRight size={16} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredDestinations.map((item) => (
                    <DestinationCard
                        key={item.id}
                        title={item.title}
                        desc={item.desc}
                        guides={item.guides}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
}
