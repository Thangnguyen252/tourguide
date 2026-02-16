import { Heart, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

interface DestinationProps {
  id: number; // Thêm id vào đây
  title: string;
  desc: string;
  guides: string;
  image: string;
}

export default function DestinationCard({
  id,
  title,
  desc,
  guides,
  image,
}: DestinationProps) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors z-10">
          <Heart size={20} />
        </button>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
          {desc}
        </p>
        <div className="flex items-center gap-2 text-blue-600 mb-6 text-sm font-bold">
          <Users size={16} />
          <span>{guides}</span>
        </div>
        {/* Bọc Link ở nút này để chuyển hướng sang trang chi tiết */}
        <Link
          href={`/destinations/${id}`}
          className="w-full py-3 bg-[#ebf3ff] text-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
        >
          View Tour Details <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
