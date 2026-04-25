"use client";
import { useState } from "react";
import { QrCode, Headset } from "lucide-react";
import Image from "next/image";

export default function FloatingSidebar() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      <div 
        className="relative group"
        onMouseEnter={() => setShowQR(true)}
        onMouseLeave={() => setShowQR(false)}
      >
        <button className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-gray-600 hover:text-neeli-pink hover:scale-110 transition-all">
          <QrCode className="w-6 h-6" />
        </button>
        
        {showQR && (
          <div className="absolute right-16 top-0 w-48 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 animate-in fade-in slide-in-from-right-4 duration-300">
            <p className="text-xs font-bold text-center mb-3 text-gray-700">Scan to Download</p>
            <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
              {/* Placeholder for QR Code */}
              <div className="w-32 h-32 sunset-gradient opacity-20 rounded-lg"></div>
            </div>
          </div>
        )}
      </div>

      <button className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-gray-600 hover:text-neeli-pink hover:scale-110 transition-all">
        <Headset className="w-6 h-6" />
      </button>
    </div>
  );
}
