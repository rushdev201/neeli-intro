"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-50 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between h-full items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/images/logo.png" alt="Neeli Logo" width={28} height={28} />
            <span className="text-xl font-bold text-[#9D50FF]">Neeli</span>
          </Link>

          {/* Hamburger Menu (Two Lines) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-[#9D50FF] rounded-full" />
            <span className="w-4 h-0.5 bg-[#9D50FF] rounded-full self-end" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-xl py-6 px-8 space-y-6 animate-in slide-in-from-top-4 duration-300">
          <Link href="#home" className="block text-lg font-semibold text-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#product" className="block text-lg font-semibold text-gray-800" onClick={() => setIsOpen(false)}>Product</Link>
          <Link href="#business" className="block text-lg font-semibold text-gray-800" onClick={() => setIsOpen(false)}>Business</Link>
          <Link href="#safety" className="block text-lg font-semibold text-gray-800" onClick={() => setIsOpen(false)}>Safety</Link>
          <button className="w-full bg-[#9D50FF] text-white py-4 rounded-2xl font-bold">Download App</button>
        </div>
      )}
    </nav>
  );
}
