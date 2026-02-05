import { Heart, Users, ChevronRight } from 'lucide-react';

interface DestinationProps {
    title: string;
    desc: string;
    guides: string;
    image: string;
}

export default function DestinationCard({ title, desc, guides, image }: DestinationProps) {
    return (
        <div className="bg-white rounded-[32px] overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <div className="relative h-60 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-4 left-4 w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-red-500 transition-colors">
                    <Heart size={20} className="fill-current" />
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
                <button className="w-full py-3 bg-[#ebf3ff] text-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2">
                    View Guides <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
}
