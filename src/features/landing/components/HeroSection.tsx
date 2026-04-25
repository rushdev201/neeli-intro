import Image from "next/image";
import { heroContent } from "../data/landing-content";

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.465.232-.698.134-.233-.098-.383-.324-.383-.578V2.258c0-.254.15-.48.383-.578.233-.098.518-.046.698.134zM14.5 12.707l2.833 2.833L4.75 22.125l9.75-9.418zM17.333 8.46l-2.833 2.833 9.75-9.418-6.917 6.585zM14.5 11.293l6.917-6.585-9.75 9.418 2.833-2.833z"/>
  </svg>
);

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 bg-white" id="home">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Phone Mockup */}
        <div className="relative inline-block mb-12">
          <Image
            src="/assets/images/mockups/hero_mockup.png"
            alt="Neeli App Mockup"
            width={320}
            height={640}
            className="w-[280px] h-auto mx-auto mix-blend-multiply"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-[#2D3142] mb-6 leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-sm md:text-base text-[#4F5665] leading-relaxed mb-10 font-medium">
            {heroContent.subtitle}
          </p>
        </div>

        {/* Buttons Area with Dot Pattern */}
        <div className="relative max-w-lg mx-auto p-8 rounded-3xl overflow-hidden">
          {/* Dot pattern background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-[#A855F7] bg-white text-[#A855F7] font-bold text-lg hover:bg-gray-50 transition-all">
              <PlayStoreIcon />
              Download App
            </button>
            <button className="w-full sm:w-auto px-12 py-5 rounded-full bg-[#A855F7] text-white font-bold text-lg shadow-xl shadow-purple-200 hover:scale-[1.02] transition-all">
              Try It Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
