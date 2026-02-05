"use client";

import Headerblue from "@/components/layout/headerblue";
import Footer from "@/components/layout/footer";
import FilterSidebar from "@/components/destinations/FilterSidebar";
import FeaturedList from "@/components/destinations/FeaturedList";
import ProvinceList from "@/components/destinations/ProvinceList";

export default function DestinationsPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Headerblue />
            <div className="h-24" />

            <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
                <div className="flex flex-col lg:flex-row gap-12">
                    <FilterSidebar />
                    <div className="lg:w-3/4">
                        <FeaturedList />
                        <ProvinceList />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
