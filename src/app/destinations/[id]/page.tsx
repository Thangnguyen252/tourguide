import { MapPin, Heart, Star, Clock, Banknote } from "lucide-react";
import BookingSidebar from "@/components/destinations/BookingSidebar"; // Đảm bảo đường dẫn import đúng

// Mock Data (Vì chưa có Backend/Database)
const tourData = {
  id: 1,
  title: "Notre Dame Cathedral",
  location: "Ho Chi Minh City",
  rating: 4.8,
  duration: "3-4 hours",
  price: "From $45/person",
  image:
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200&auto=format&fit=crop",
  description: `Saigon Notre-Dame Cathedral Basilica, officially known as the Cathedral Basilica of Our Lady of The Immaculate Conception, is a stunning example of French colonial architecture nestled in the heart of Ho Chi Minh City.\n\nConstructed between 1863 and 1880, the cathedral was built entirely with materials imported from France, including the distinctive red bricks from Marseille that have never required any external paint to maintain their vibrant color. Our private tour offers exclusive insights into the architectural marvels and the spiritual significance of this historic landmark.`,
};

export default function DestinationDetail() {
  return (
    // Thêm pt-28 để nội dung không bị Header đè lên
    <main className="max-w-7xl mx-auto px-6 pt-28 pb-20">
      {/* Grid chia layout: 2 cột nội dung trái, 1 cột form phải */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* === CỘT TRÁI: THÔNG TIN TOUR (Chiếm 2 phần) === */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hình ảnh Hero */}
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-md">
            <img
              src={tourData.image}
              alt={tourData.title}
              className="w-full h-full object-cover"
            />
            {/* Badges trên ảnh */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-gray-800 shadow-sm">
              <MapPin size={16} className="text-[#FF6600]" />
              {tourData.location}
            </div>
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:scale-110 transition-transform shadow-sm">
              <Heart size={24} />
            </button>
          </div>

          {/* Tiêu đề & Thông số */}
          <div>
            <div className="flex items-center gap-1 text-yellow-400 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star === 5
                      ? "fill-transparent text-yellow-400"
                      : "fill-current"
                  }
                />
              ))}
              <span className="text-gray-900 font-bold ml-2 text-sm">
                {tourData.rating}/5
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              {tourData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-[#EEF2FA] text-blue-700 px-4 py-2 rounded-full font-bold text-sm">
                <Clock size={18} />
                {tourData.duration}
              </div>
              <div className="flex items-center gap-2 bg-[#FFF0E6] text-[#FF6600] px-4 py-2 rounded-full font-bold text-sm">
                <Banknote size={18} />
                {tourData.price}
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Bài viết mô tả */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This Tour
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed whitespace-pre-line">
              {tourData.description}
            </div>
          </div>
        </div>

        {/* === CỘT PHẢI: FORM ĐẶT TOUR (Chiếm 1 phần) === */}
        <div className="lg:col-span-1">
          <BookingSidebar />
        </div>
      </div>
    </main>
  );
}
