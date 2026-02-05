import { Filter, MapPin } from 'lucide-react';

export default function FilterSidebar() {
    return (
        <aside className="lg:w-1/4">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
                <div className="flex items-center gap-2 mb-8 text-gray-900 border-b border-gray-100 pb-4">
                    <Filter size={20} className="text-blue-600" />
                    <h2 className="text-xl font-bold font-heading">Filters</h2>
                </div>

                {/* Region Filter */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4 text-xm font-bold uppercase text-orange-600">
                        <MapPin size={18} />
                        <span>Region</span>
                    </div>
                    <div className="space-y-4">
                        {["North Vietnam", "Central Vietnam", "South Vietnam"].map((item) => (
                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-md border-2 border-gray-300 transition-all group-hover:border-blue-500 flex items-center justify-center
                  ${item === "South Vietnam" ? "bg-blue-600 border-blue-600 shadow-sm shadow-blue-200" : ""}`}>
                                    {item === "South Vietnam" && <div className="w-2 h-2 bg-white rounded-full" />}
                                </div>
                                <span className={`text-sm font-medium transition-colors ${item === "South Vietnam" ? "text-gray-900 font-bold" : "text-gray-500 group-hover:text-gray-700"}`}>
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Experience Type Filter */}
                <div>
                    <div className="flex items-center gap-1 mb-4 text-xm font-bold uppercase text-orange-600">
                        <span>Experience Type</span>
                    </div>
                    <div className="space-y-4">
                        {["City & Urban", "Nature & Wildlife", "Cultural Heritage", "Food & Nightlife"].map((item) => (
                            <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 rounded-md border-2 border-gray-300 transition-all group-hover:border-blue-500" />
                                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
