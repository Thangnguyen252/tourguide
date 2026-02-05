import Link from 'next/link';
import { Compass, Twitter, Instagram, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-20 pb-10 relative overflow-hidden">
            {/* Subtle decorative circles as seen in the image background */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gray-100 rounded-full opacity-50 z-0" />
            <div className="absolute -right-20 top-20 w-64 h-64 bg-gray-100 rounded-full opacity-40 z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-6 text-gray-900">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <Compass className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-bold">Quantour</span>
                        </div>
                        <p className="text-gray-500 mb-8 leading-relaxed max-w-[280px]">
                            Connecting travelers with the world&apos;s best local guides for unforgettable, authentic experiences.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-gray-600">
                                <Globe size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-gray-600">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow text-gray-600">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Company</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Destination</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Booking</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">About us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Support</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Become a guide!</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Cancellation Options</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Questions */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Have any questions ?</h4>
                        <p className="text-gray-500 mb-6">Feel free to send us your questions.</p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your mail...."
                                className="bg-[#dce4f2] text-gray-700 placeholder:text-gray-500 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 transition-all border-none"
                            />
                            <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-all self-start shadow-lg shadow-blue-200">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-sm">
                        © 2024 Adventurous Guide Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-gray-400 text-sm">
                        <Link href="#" className="hover:text-gray-600">Privacy</Link>
                        <Link href="#" className="hover:text-gray-600">Terms</Link>
                        <Link href="#" className="hover:text-gray-600">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
