import Image from 'next/image';
import { Search, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    // 2. Chỉnh h-screen để hiển thị toàn màn hình
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Vietnam Landscape" 
          fill 
          // object-cover đảm bảo ảnh phủ kín không bị méo, priority giúp load nhanh giảm mờ
          className="object-cover brightness-[0.7]" 
          priority
          quality={100} // Đảm bảo chất lượng ảnh cao nhất
        />
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        
        {/* 1. Tiêu đề màu xanh Gradient */}
        <h1 className="text-4xl md:text-6xl  font-extrabold mb-6 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]
                       bg-linear-to-r from-[rgb(240,255,28)] 
               via-[rgb(151,186,240)] 
               to-[rgb(60,176,230)] bg-clip-text text-transparent">
          Unlock the Unseen World
        </h1>
        
        {/* 1. Xuống hàng cho dòng Experience travel redefined */}
        <p className="text-gray-100 text-xl md:text-2xl mb-12 max-w-3xl font-semibold drop-shadow-md leading-relaxed">
          Immersive private tours meticulously tailored just for you. <br className="hidden md:block" /> 
          <span className="text-white font-normal">Experience travel redefined.</span>
        </p>

        {/* SEARCH BAR */}
        <div className="bg-white p-2.5 rounded-full shadow-2xl w-full max-w-3xl flex items-center border border-white/20 backdrop-blur-sm">
          <div className="flex-1 flex items-center px-6 gap-3">
            <MapPin className="text-blue-500 w-6 h-6 shrink-0" />
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 text-lg py-3"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-10 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* 3. CSS Inline để ẩn thanh cuộn (Cách nhanh nhất nếu chỉ sửa file này) */}
      
    </section>
  );
}