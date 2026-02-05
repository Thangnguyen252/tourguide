import Header from "@/components/layout/header";
import Hero from "@/components/home/hero";
import TrendingDestinations from "@/components/home/TrendingDestinations";
import Features from "@/components/home/Features";
import TravelerStories from "@/components/home/TravelerStories";
import GuideCTA from "@/components/home/GuideCTA";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <TrendingDestinations />
      <TravelerStories />
      <GuideCTA />
      <Footer />
    </main>
  );
}