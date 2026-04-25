"use client";
import { useEffect, useState } from "react";

export default function MobileStickyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden animate-in slide-in-from-bottom-full duration-300">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <button className="flex-1 py-4 rounded-full border-2 border-[#A855F7] text-[#A855F7] font-bold text-sm">
          Download App
        </button>
        <button className="flex-1 py-4 rounded-full bg-[#A855F7] text-white font-bold text-sm shadow-lg shadow-purple-200">
          Try It Now
        </button>
      </div>
    </div>
  );
}
