import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/features/landing/data/landing-content";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/assets/images/logo.png" alt="Neeli Logo" width={32} height={32} />
              <span className="text-xl font-bold sunset-text">Neeli</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Neeli is a global live streaming and video chat platform that connects people across borders. Experience real-time interactions like never before.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-sm text-gray-600 hover:text-neeli-pink">About Us</Link></li>
              <li><Link href="#business" className="text-sm text-gray-600 hover:text-neeli-pink">Business</Link></li>
              <li><Link href="#safety" className="text-sm text-gray-600 hover:text-neeli-pink">Safety Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-neeli-pink">Privacy Policy</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-neeli-pink">Cookie Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-neeli-pink">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Email: contact@neeli.com</li>
              <li>Address: UNIT 2, L5R, MIRROR TOWER, 61 MODY ROAD, TSIM SHA TSUI, KOWLOON, HONG KONG</li>
              <li className="pt-4 flex gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Neeli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
