import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const stories = [
    {
        type: 'testimonial',
        rating: 5,
        content: "“My guide in Lisbon was incredible. She took us to a Fado restaurant that wasn't on any map. Truly the highlight of our Europe trip!”",
        author: "Sarah Jenkins",
        location: "Lisbon, Portugal",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
        type: 'image',
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop",
        content: '"Hiking the Andes with Mateo was challenging but so rewarding."',
        author: "Mark D."
    },
    {
        type: 'quote',
        content: '"We felt so safe and welcomed. It was like visiting an old friend."',
        author: "The Peterson Family",
        location: "Kyoto, Japan"
    },
    {
        type: 'testimonial',
        rating: 5,
        content: "“The food tour in Bangkok opened my eyes to flavors I didn't know existed. Our guide knew every stall owner!”",
        author: "James Chen",
        location: "Bangkok, Thailand",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
        type: 'testimonial',
        rating: 5,
        content: "“Exceptional service from start to finish. The booking platform was easy, and the guide was world-class.”",
        author: "Elena Rodriguez",
        location: "Barcelona, Spain",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
];

export default function TravelerStories() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Traveler Stories</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Read about the adventures our community has experienced around the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <TestimonialCard story={stories[0]} />
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <ImageCard story={stories[1]} />
                        <TestimonialCard story={stories[3]} />
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        <QuoteCard story={stories[2]} />
                        <TestimonialCard story={stories[4]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ story }: { story: any }) {
    return (
        <div className="bg-gray-50 rounded-[32px] p-8 transition-all duration-300 hover:shadow-xl border border-gray-100">
            <div className="flex gap-1 mb-6">
                {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <p className="text-gray-800 text-lg font-medium leading-relaxed mb-8">
                {story.content}
            </p>
            <div className="flex items-center gap-4">
                <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">{story.author}</h4>
                    <p className="text-gray-500 text-xs">{story.location}</p>
                </div>
            </div>
        </div>
    );
}

function ImageCard({ story }: { story: any }) {
    return (
        <div className="relative h-[300px] rounded-[32px] overflow-hidden group">
            <Image
                src={story.image}
                alt="Travel adventure"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8">
                <p className="text-white text-xl font-bold mb-2">
                    {story.content}
                </p>
                <p className="text-white/80 text-sm">- {story.author}</p>
            </div>
        </div>
    );
}

function QuoteCard({ story }: { story: any }) {
    return (
        <div className="bg-blue-600 rounded-[32px] p-10 text-white flex flex-col justify-center items-center text-center h-[300px] shadow-lg shadow-blue-200">
            <Quote size={40} className="mb-6 opacity-40 fill-white text-white" />
            <p className="text-2xl font-bold leading-relaxed mb-6">
                {story.content}
            </p>
            <div>
                <h4 className="font-bold text-lg leading-tight">{story.author}</h4>
                <p className="text-blue-200 text-sm">{story.location}</p>
            </div>
        </div>
    );
}
