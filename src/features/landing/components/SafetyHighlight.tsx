import Link from "next/link";
import { safetyContent } from "../data/landing-content";
import { Shield, Lock, PhoneCall } from "lucide-react";

const icons = [Shield, Lock, PhoneCall];

export default function SafetyHighlight() {
  return (
    <section className="py-24 bg-white" id="safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-title mb-4">{safetyContent.title}</h2>
          <p className="text-body max-w-2xl mx-auto">
            {safetyContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyContent.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-neeli-orange/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-neeli-pink" />
                </div>
                <h3 className="text-xl text-title mb-3 group-hover:text-neeli-pink transition-colors">
                  {card.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <span className="text-xs font-bold text-neeli-orange uppercase tracking-widest group-hover:underline">
                  Learn More →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
