import { businessContent } from "../data/landing-content";

export default function AgencyBanner() {
  return (
    <section className="py-24" id="business">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#7C3AED] p-12 lg:p-24 text-center">
          {/* Decorative Diamonds */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rotate-45 border border-white/20 blur-sm" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rotate-12 border border-white/10" />
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-yellow-400/20 rotate-[30deg]" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight uppercase drop-shadow-sm">
              {businessContent.title}
            </h2>
            <p className="text-xl lg:text-2xl text-white mb-10 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
              {businessContent.subtitle}
            </p>
            <button className="px-12 py-5 rounded-full bg-[#FFB800] text-white font-black text-xl hover:scale-105 hover:shadow-2xl transition-all uppercase tracking-wider">
              {businessContent.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
