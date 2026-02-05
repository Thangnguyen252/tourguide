import { Heart } from 'lucide-react';

interface ProvinceProps {
    title: string;
    location: string;
    image: string;
}

export default function ProvinceCard({ title, location, image }: ProvinceProps) {
    return (
        <div className="relative h-[380px] rounded-[32px] overflow-hidden group">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <button className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-red-500 transition-colors">
                <Heart size={18} className="fill-current" />
            </button>
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <h4 className="text-white text-xl font-bold mb-1">{title}</h4>
                <p className="text-white/70 text-sm mb-4">{location}</p>
                <button className="bg-[#ff6600] text-white text-[10px] font-bold px-4 py-1.5 rounded-full hover:bg-[#e65c00] transition-colors">
                    More details
                </button>
            </div>
        </div>
    );
}
