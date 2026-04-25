"use client";
import { useState } from "react";
import Image from "next/image";
import { featureTabs } from "../data/landing-content";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturesShowcase() {
  const [activeTab, setActiveTab] = useState(featureTabs[0].id);

  const activeContent = featureTabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-24 bg-gray-50" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl text-title mb-4">Discover Neeli</h2>
          <p className="text-body max-w-2xl mx-auto">
            Experience the next level of social interaction with our innovative features.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all",
                activeTab === tab.id
                  ? "bg-white text-neeli-pink shadow-md"
                  : "text-gray-500 hover:text-gray-800"
              )}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl lg:text-4xl text-title mb-6 sunset-text">
                  {activeContent.heading}
                </h3>
                <p className="text-lg text-body mb-8 leading-relaxed">
                  {activeContent.description}
                </p>
                <button className="px-8 py-3 rounded-full sunset-gradient text-white font-bold hover:shadow-lg transition-all">
                  {activeContent.ctaText}
                </button>
              </div>
              <div className="relative">
                <Image
                  src={activeContent.imagePath}
                  alt={activeContent.title}
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-xl rounded-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
