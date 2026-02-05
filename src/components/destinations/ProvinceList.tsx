"use client";

import ProvinceCard from "./ProvinceCard";

const provinces = [
    {
        title: "Ha Long Bay",
        location: "Quang Ninh Province",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Da Nang",
        location: "Coastal Modernity",
        image: "https://images.unsplash.com/photo-1559592440-7f1533241f67?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Hoi An",
        location: "Quang Nam Province",
        image: "https://images.unsplash.com/photo-1599708153386-62e9248b72bc?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Hanoi",
        location: "The Capital City",
        image: "https://images.unsplash.com/photo-1509030436552-4405446d27a3?q=80&w=800&auto=format&fit=crop"
    }
];

export default function ProvinceList() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
                Explore More <span className="text-blue-600">Provinces</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {provinces.map((province, index) => (
                    <ProvinceCard
                        key={index}
                        title={province.title}
                        location={province.location}
                        image={province.image}
                    />
                ))}
            </div>
        </section>
    );
}
