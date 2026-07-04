import React from 'react';
import { Home, Sofa } from 'lucide-react';

interface NotFoundViewProps {
  setActiveTab: (tab: string) => void;
}

export default function NotFoundView({ setActiveTab }: NotFoundViewProps) {
  return (
    <div className="bg-[#FAF8F5] min-h-[65vh] flex flex-col items-center justify-center py-24 px-6 text-center animate-in fade-in duration-500">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-4">
          <h1 className="font-serif font-bold text-8xl md:text-9xl text-[#8B4F24]/10 select-none">
            404
          </h1>
          <h2 className="font-serif font-semibold text-2xl md:text-3xl text-[#222222]">
            Page Not Found
          </h2>
          <p className="text-[#6F6F6F] font-sans text-sm md:text-base leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. 
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button 
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#8B4F24] hover:bg-[#5C3315] text-[#FAF8F5] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" /> 
            <span>Go to Home</span>
          </button>
          
          <button 
            onClick={() => {
              setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-stone-50 border border-[#8B4F24]/20 text-[#222222] px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <Sofa className="w-4 h-4" /> 
            <span>Browse Furniture</span>
          </button>
        </div>
      </div>
    </div>
  );
}
