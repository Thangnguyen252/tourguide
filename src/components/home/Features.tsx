import { Medal, Users, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <Medal size={40} className="text-blue-500" strokeWidth={1.5} />,
    title: "Experienced Guides",
    desc: "Our local experts have years of experience and deep knowledge of their cities' hidden gems."
  },
  {
    icon: <Users size={40} className="text-blue-500" strokeWidth={1.5} />,
    title: "Private Tours for Individuals",
    desc: "Enjoy the freedom of a tour designed specifically for you and your companions, at your own pace."
  },
  {
    icon: <CreditCard size={40} className="text-blue-500" strokeWidth={1.5} />,
    title: "Post-trip Payment",
    desc: "Book with confidence. Secure your spot now and pay only after you've enjoyed your experience."
  }
];

export default function Features() {
  return (
    <section className="relative bg-[#3b82f6] pt-24 pb-40 md:pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {features.map((item, index) => {
            // Index 1 là khối ở giữa
            const isMiddle = index === 1;
            
            return (
              <div 
                key={index} 
                className={`
                  bg-white rounded-3xl p-10 text-center shadow-2xl flex flex-col items-center 
                  transition-all duration-300 hover:-translate-y-2
                  ${isMiddle ? 'md:-mt-16 z-20' : 'md:mt-12 z-10'} 
                `}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* FIXED WAVE DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0">
        <svg 
          viewBox="0 0 1440 320" 
          className="relative block w-full h-100 md:h-125"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path này được thiết kế để lấp đầy toàn bộ phần đáy bằng màu trắng */}
          <path 
            fill="#ffffff" 
                d="M0,160L48,176C96,192,192,224,288,213.3C184,203,880,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
      </div>
    </section>
  );
}