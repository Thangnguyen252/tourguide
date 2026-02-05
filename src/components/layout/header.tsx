"use client"; // Bắt buộc thêm dòng này để dùng được hiệu ứng cuộn

import Link from 'next/link';
import { Compass, Menu, X } from 'lucide-react'; // Thêm icon Menu và X
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lắng nghe sự kiện cuộn chuột
  useEffect(() => {
    const handleScroll = () => {
      // Nếu cuộn xuống quá 50px thì đổi trạng thái
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Màu chữ: Trắng khi ở đầu trang (nền trong suốt), Đen khi cuộn xuống (nền trắng)
  const textColorClass = isScrolled ? 'text-gray-900 ' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]';
  const logoBgClass = isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md h-16' // Cuộn xuống: Nền trắng, cao 16 (nhỏ lại 75%)
          : 'bg-transparent h-24' // Ở đầu: Nền trong suốt, cao 24
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* === LOGO === */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`p-1.5 rounded-full transition-colors ${logoBgClass}`}>
            <Compass size={20} strokeWidth={3} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${textColorClass}`}>
            Quantour
          </span>
        </Link>

        {/* === DESKTOP MENU (Ẩn trên Mobile) === */}
        <nav className={`hidden md:flex items-center gap-22 font-semibold transition-colors ${textColorClass}`}>
          {["Destinations", "Booking", "Contact", "About us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-[#FF6600] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* === RIGHT ACTIONS === */}
        <div className="flex items-center gap-4">
          {/* Nút Book now (Luôn hiện hoặc ẩn trên mobile tùy bạn, ở đây tôi để ẩn trên mobile cho gọn) */}
          <button className="hidden md:block bg-[#FF6600] hover:bg-[#e65c00] text-white px-6 py-2.5 rounded-full font-bold transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Book now !
          </button>

          {/* === MOBILE MENU BUTTON (3 Gạch) === */}
          {/* Chỉ hiện trên màn hình nhỏ (md:hidden) */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* === MOBILE MENU DROPDOWN === */}
      {/* Menu xổ xuống khi bấm vào 3 gạch */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-6 space-y-4 animate-in slide-in-from-top-5">
          {["Destinations", "Booking", "Contact", "About us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-semibold text-gray-700 hover:text-[#FF6600]"
              onClick={() => setIsMobileMenuOpen(false)} // Đóng menu khi chọn
            >
              {item}
            </Link>
          ))}
          <button className="w-full bg-[#FF6600] text-white py-3 rounded-xl font-bold mt-4">
            Book now !
          </button>
        </div>
      )}
    </header>
  );
}