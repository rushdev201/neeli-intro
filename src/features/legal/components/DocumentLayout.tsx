import React from "react";

interface DocumentLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function DocumentLayout({ title, lastUpdated, children }: DocumentLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl lg:text-5xl text-title mb-4 sunset-text">{title}</h1>
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">{lastUpdated}</p>
        </div>
        
        <div className="prose prose-gray max-w-none prose-h2:text-xl prose-h2:text-title prose-h2:mt-10 prose-h2:mb-4 prose-p:text-body prose-p:leading-relaxed">
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Have questions? Contact us at <span className="text-neeli-pink font-bold">legal@neeli.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
