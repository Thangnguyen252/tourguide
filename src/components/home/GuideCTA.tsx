import Link from 'next/link';

export default function GuideCTA() {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background with paralax-like feel or just fixed height */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center px-6">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Are you a tour guide ?
                </h2>
                <p className="text-xl text-white/90 mb-10">
                    Come and join our adventure!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/search"
                        className="w-full sm:w-auto px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Start Your Search
                    </Link>
                    <Link
                        href="/become-guide"
                        className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
                    >
                        Become a Guide
                    </Link>
                </div>
            </div>
        </section>
    );
}
