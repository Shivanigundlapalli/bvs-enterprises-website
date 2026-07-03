import React from 'react';
import {
  Bed,
  DoorOpen,
  Briefcase,
  Sofa,
  Layers,
  Inbox,
  Utensils,
  Tv,
  Ruler,
  Sparkles,
  DollarSign,
  Award,
  Truck,
  HeartHandshake,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Wind,
  Armchair,
  Calendar,
  Factory
} from 'lucide-react';
import ShowroomLocation from './ShowroomLocation';
import { WebsiteSettings } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  setCatalogPage: (page: number) => void;
  setSelectedCategoryFilter: (catId: string) => void;
  setSearchQuery: (query: string) => void;
  settings: WebsiteSettings;
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number | ((prev: number) => number)) => void;
  carouselSlides: Array<{
    tagline: string;
    headline: string;
    description: string;
    image: string;
    categoryTarget: string;
  }>;
}

export default function HomeView({
  setActiveTab,
  setCatalogPage,
  setSelectedCategoryFilter,
  setSearchQuery,
  settings,
  currentSlideIndex,
  setCurrentSlideIndex,
  carouselSlides
}: HomeViewProps) {
  return (
    <div className="selection:bg-[#8B4F24] selection:text-white pb-20 animate-in fade-in duration-300 bg-[#FAF8F5] text-[#222222]">
      
      {/* 3. Hero Section */}
      <div className="relative bg-[#FAF8F5] text-[#222222] py-[48px] lg:py-[72px] overflow-hidden border-b border-[#ECE5DD] text-left">
        <div className="absolute inset-0 bg-radial-gradient from-white/20 to-transparent pointer-events-none" />
        
        <div className="layout-container grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-[40px] lg:gap-[64px] relative z-10">
          
          {/* Left Side: Editorial Typography Panel (52% width) */}
          <div className="w-full max-w-[600px] mx-auto lg:mx-0 flex flex-col justify-center text-center lg:text-left space-y-[24px] md:space-y-[32px] relative mt-4 lg:mt-0">
            <div className="space-y-[16px] md:space-y-[20px]">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8B4F24] inline-block">
                Est. 2008 • Premium Furniture Showroom
              </span>
              <h1 className="text-h1 font-serif font-semibold text-[#222222] tracking-tight mx-auto lg:mx-0">
                Furniture Crafted <br className="hidden sm:inline" /> For Modern Living
              </h1>
              <p className="text-body text-[#666666] font-sans font-normal max-w-[560px] mx-auto lg:mx-0">
                Discover elegant furniture designed for comfort, durability, and timeless style. From wooden beds and wardrobes to office furniture, chairs, mattresses, and custom-made interiors, BVS Enterprises brings premium quality direct from our factory to your home.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap gap-[16px] justify-center lg:justify-start">
              <button
                onClick={() => {
                  setCatalogPage(1);
                  setSelectedCategoryFilter('all');
                  setSearchQuery('');
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-base btn-primary gap-2"
                aria-label="Explore Collection"
              >
                Explore Collection
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById('visit-showroom');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-base btn-secondary gap-2"
                aria-label="Visit Showroom"
              >
                Visit Showroom
              </button>
            </div>

            {/* Horizontal Trust Badges under buttons */}
            <div className="grid grid-cols-2 gap-[12px] sm:gap-[16px] pt-[24px] border-t border-[#ECE5DD]/80 w-full max-w-[560px] mx-auto lg:mx-0 text-left">
              <div 
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-[12px] bg-[#8B4F24]/5 hover:bg-[#8B4F24]/8 px-4 rounded-[12px] h-[80px] w-full border border-[#8B4F24]/15 hover:border-[#8B4F24] hover:shadow-[0_6px_20px_rgba(139,79,36,0.1)] hover:-translate-y-[3px] transition-all duration-300 shrink-0 cursor-pointer group/badge"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#8B4F24]/10 text-[#8B4F24] group-hover/badge:bg-[#8B4F24] group-hover/badge:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#222222] transition-colors duration-300 group-hover/badge:text-[#8B4F24]">Since 2008</span>
              </div>
              <div 
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-[12px] bg-[#8B4F24]/5 hover:bg-[#8B4F24]/8 px-4 rounded-[12px] h-[80px] w-full border border-[#8B4F24]/15 hover:border-[#8B4F24] hover:shadow-[0_6px_20px_rgba(139,79,36,0.1)] hover:-translate-y-[3px] transition-all duration-300 shrink-0 cursor-pointer group/badge"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#8B4F24]/10 text-[#8B4F24] group-hover/badge:bg-[#8B4F24] group-hover/badge:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <Factory className="w-5 h-5" />
                </div>
                <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#222222] transition-colors duration-300 group-hover/badge:text-[#8B4F24]">Factory Direct</span>
              </div>
              <div 
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-[12px] bg-[#8B4F24]/5 hover:bg-[#8B4F24]/8 px-4 rounded-[12px] h-[80px] w-full border border-[#8B4F24]/15 hover:border-[#8B4F24] hover:shadow-[0_6px_20px_rgba(139,79,36,0.1)] hover:-translate-y-[3px] transition-all duration-300 shrink-0 cursor-pointer group/badge"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#8B4F24]/10 text-[#8B4F24] group-hover/badge:bg-[#8B4F24] group-hover/badge:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#222222] transition-colors duration-300 group-hover/badge:text-[#8B4F24]">Premium Quality</span>
              </div>
              <div 
                onClick={() => {
                  setActiveTab('custom');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-[12px] bg-[#8B4F24]/5 hover:bg-[#8B4F24]/8 px-4 rounded-[12px] h-[80px] w-full border border-[#8B4F24]/15 hover:border-[#8B4F24] hover:shadow-[0_6px_20px_rgba(139,79,36,0.1)] hover:-translate-y-[3px] transition-all duration-300 shrink-0 cursor-pointer group/badge"
              >
                <div className="w-[36px] h-[36px] rounded-full bg-[#8B4F24]/10 text-[#8B4F24] group-hover/badge:bg-[#8B4F24] group-hover/badge:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                  <Ruler className="w-5 h-5" />
                </div>
                <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-[#222222] transition-colors duration-300 group-hover/badge:text-[#8B4F24]">Custom Design</span>
              </div>
            </div>
          </div>

          {/* Right Side: Showcase image sliding panel (48% width) */}
          <div className="w-full relative shrink-0">
            <div className="absolute inset-0 bg-[#8B4F24]/5 rounded-[24px] transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 pointer-events-none"></div>
            
            <div className="relative rounded-[24px] overflow-hidden border border-[#ECE5DD] shadow-[0_10px_30px_rgba(0,0,0,0.05)] w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-video lg:aspect-auto lg:h-[500px] xl:h-[560px] bg-stone-100 group">
              {carouselSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-[1000ms] ${
                    idx === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.headline}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center select-none transition-transform duration-[6000ms] ease-out scale-100 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/50 via-transparent to-transparent"></div>
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-6 left-6 right-16 text-left text-[#FAF8F5]">
                    <span className="text-[9px] font-sans font-bold tracking-widest uppercase text-[#FAF8F5]/80 block mb-1">
                      Signature Collection
                    </span>
                    <p className="text-xs sm:text-sm text-white font-sans max-w-md font-medium">
                      {slide.headline}: {slide.tagline}
                    </p>
                  </div>
                </div>
              ))}

              {/* Navigation buttons */}
              <div className="absolute bottom-6 right-6 z-20 bg-[#222222]/80 text-[#FAF8F5] text-[10px] py-1.5 px-3.5 rounded-full inline-flex items-center gap-2.5 font-mono">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
                  className="hover:text-[#8B4F24] transition-colors cursor-pointer border-none bg-transparent"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <span className="font-bold tracking-widest">{currentSlideIndex + 1} / {carouselSlides.length}</span>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % carouselSlides.length)}
                  className="hover:text-[#8B4F24] transition-colors cursor-pointer border-none bg-transparent"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Trust Section (Large white card with stats) */}
      <div className="layout-container pt-[72px]">
        <div className="bg-white rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-[24px] md:p-[32px] flex flex-col lg:flex-row items-center justify-between gap-[32px] text-center lg:text-left">
          <div className="max-w-[520px] space-y-[20px] mx-auto lg:mx-0">
            <div>
              <span className="text-[12px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B4F24] block mb-2">
                Trusted Since 2008
              </span>
              <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
                Trusted by Thousands Across Tirupati
              </h2>
            </div>
            <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8]">
              Over 15 years of unmatched craftsmanship, genuine factory prices, and dedicated local customer service.
            </p>
          </div>
          
          <div className="w-full lg:w-auto grid grid-cols-2 lg:grid-cols-4 gap-[20px] shrink-0">
            <div className="space-y-1 bg-[#FAF7F2] p-[16px] rounded-[16px] border-2 border-[#8B4F24]/20 hover:border-[#8B4F24]/50 hover:shadow-[0_8px_24px_rgba(139,79,36,0.06)] hover:-translate-y-[3px] transition-all duration-300 cursor-pointer">
              <AnimatedCounter 
                value={15} 
                suffix="+" 
                className="block font-serif font-bold text-3xl sm:text-4xl text-[#8B4F24] tracking-tight" 
              />
              <span className="block font-sans text-[11px] sm:text-xs text-[#6F6F6F] font-semibold uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="space-y-1 bg-[#FAF7F2] p-[16px] rounded-[16px] border-2 border-[#8B4F24]/20 hover:border-[#8B4F24]/50 hover:shadow-[0_8px_24px_rgba(139,79,36,0.06)] hover:-translate-y-[3px] transition-all duration-300 cursor-pointer">
              <AnimatedCounter 
                value={5000} 
                suffix="+" 
                className="block font-serif font-bold text-3xl sm:text-4xl text-[#8B4F24] tracking-tight" 
              />
              <span className="block font-sans text-[11px] sm:text-xs text-[#6F6F6F] font-semibold uppercase tracking-wider">Happy Customers</span>
            </div>
            <div className="space-y-1 bg-[#FAF7F2] p-[16px] rounded-[16px] border-2 border-[#8B4F24]/20 hover:border-[#8B4F24]/50 hover:shadow-[0_8px_24px_rgba(139,79,36,0.06)] hover:-translate-y-[3px] transition-all duration-300 cursor-pointer">
              <AnimatedCounter 
                value={1000} 
                suffix="+" 
                className="block font-serif font-bold text-3xl sm:text-4xl text-[#8B4F24] tracking-tight" 
              />
              <span className="block font-sans text-[11px] sm:text-xs text-[#6F6F6F] font-semibold uppercase tracking-wider">Furniture Pieces</span>
            </div>
            <div className="space-y-1 bg-[#FAF7F2] p-[16px] rounded-[16px] border-2 border-[#8B4F24]/20 hover:border-[#8B4F24]/50 hover:shadow-[0_8px_24px_rgba(139,79,36,0.06)] hover:-translate-y-[3px] transition-all duration-300 cursor-pointer">
              <AnimatedCounter 
                value={100} 
                suffix="%" 
                className="block font-serif font-bold text-3xl sm:text-4xl text-[#8B4F24] tracking-tight" 
              />
              <span className="block font-sans text-[11px] sm:text-xs text-[#6F6F6F] font-semibold uppercase tracking-wider">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Categories Section */}
      <div className="layout-container pt-[72px]">
        <div className="text-center max-w-2xl mx-auto mb-[32px] space-y-[20px]">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#8B4F24] inline-block mb-3">
              Our Specialties
            </span>
            <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              Discover Furniture for Every Space
            </h2>
            <div className="w-12 h-[1px] bg-[#8B4F24] mx-auto mt-3" />
          </div>
          <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8] max-w-[520px] mx-auto">
            Whether you are furnishing a new home or upgrading your office, explore collections designed with elegance, comfort, and functionality.
          </p>
        </div>

        {/* Grid of 12 Category Icon Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[24px]">
          {[
            { id: 'cat-beds', icon: Bed, label: 'Beds', q: '' },
            { id: 'cat-wardrobes', icon: DoorOpen, label: 'Wardrobes', q: '' },
            { id: 'cat-office-furniture', icon: Briefcase, label: 'Office Furniture', q: '' },
            { id: 'cat-office-chairs', icon: Sofa, label: 'Office Chairs', q: '' },
            { id: 'cat-mattresses', icon: Layers, label: 'Mattresses', q: '' },
            { id: 'cat-plastic-chairs', icon: Sofa, label: 'Plastic Chairs', q: '' },
            { id: 'cat-steel-cupboards', icon: Inbox, label: 'Steel Cupboards', q: '' },
            { id: 'cat-dining-tables', icon: Utensils, label: 'Dining Tables', q: '' },
            { id: 'cat-tv-units', icon: Tv, label: 'TV Units', q: '' },
            { id: 'cat-swing-chairs', icon: Wind, label: 'Swing Chairs', q: '' },
            { id: 'cat-bean-bags', icon: Armchair, label: 'Bean Bags', q: '' },
            { id: 'custom', icon: Ruler, label: 'Custom Furniture', q: '' }
          ].map((col) => (
            <button
              key={col.id}
              onClick={() => {
                if (col.id === 'custom') {
                  setActiveTab('custom');
                } else {
                  setSelectedCategoryFilter(col.id);
                  setSearchQuery(col.q);
                  setCatalogPage(1);
                  setActiveTab('products');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] cursor-pointer flex flex-col items-center justify-center text-center gap-[16px] h-full"
            >
              <div className="p-3 bg-[#FAF8F5] text-[#8B4F24] rounded-full group-hover:bg-[#8B4F24] group-hover:text-white transition-all duration-300">
                <col.icon className="h-5 w-5" />
              </div>
              <span className="font-sans font-bold text-xs tracking-wider text-[#222222] group-hover:text-[#8B4F24] transition-colors uppercase">
                {col.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 6. Featured Products Section */}
      <div className="layout-container pt-[72px]">
        <div className="text-center max-w-2xl mx-auto mb-[32px] space-y-[20px]">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#8B4F24] inline-block mb-3">
              Signature Showroom Pieces
            </span>
            <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              Featured Masterpieces
            </h2>
            <div className="w-12 h-[1px] bg-[#8B4F24] mx-auto mt-3" />
          </div>
          <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8] max-w-[520px] mx-auto">
            Carefully curated luxury items representing the absolute highest standard of raw material and finish.
          </p>
        </div>

        {/* Three Premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {[
            {
              title: "Premium Wooden Beds",
              desc: "Elegant craftsmanship meets lasting durability. Built for comfort and built to last.",
              image: "/featured-1.jpg",
              catId: "cat-beds",
              btnText: "Explore Beds"
            },
            {
              title: "Modern Wardrobes",
              desc: "Beautiful storage solutions that organize your space while enhancing your home.",
              image: "/featured-2.jpg",
              catId: "cat-wardrobes",
              btnText: "View Wardrobes"
            },
            {
              title: "Executive Office Furniture",
              desc: "Create productive workspaces with premium office tables, chairs, and storage.",
              image: "/featured-3.jpg",
              catId: "cat-office-furniture",
              btnText: "Explore Office"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[16px] border border-[#8B4F24]/15 overflow-hidden shadow-[0_4px_20px_rgba(139,79,36,0.02)] hover:border-[#8B4F24]/40 hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col h-full text-left cursor-pointer"
              onClick={() => {
                setSelectedCategoryFilter(item.catId);
                setCatalogPage(1);
                setActiveTab('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-full aspect-[4/3] sm:aspect-[4/5] md:aspect-[1/1] overflow-hidden bg-[#FAF8F5] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-[24px] flex flex-col justify-between flex-grow">
                <div className="space-y-[16px]">
                  <h3 className="font-serif font-semibold text-[20px] md:text-[22px] leading-tight text-[#222222] group-hover:text-[#8B4F24] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#6F6F6F] leading-[1.6] font-sans">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-[16px] flex items-center gap-[8px] text-[12px] font-bold text-[#8B4F24] tracking-wider uppercase group-hover:underline">
                  <span>{item.btnText}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Why Choose Us Section */}
      <div className="layout-container pt-[72px]">
        <div className="text-center max-w-2xl mx-auto mb-[32px] space-y-[20px]">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#8B4F24] inline-block mb-3">
              Our Values
            </span>
            <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              Why Families Trust BVS Enterprises
            </h2>
            <div className="w-12 h-[1px] bg-[#8B4F24] mx-auto mt-3" />
          </div>
          <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8] max-w-[520px] mx-auto">
            We prioritize direct workshop transparency, certified premium wood, and uncompromised sturdiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] text-left">
          {[
            {
              icon: Sparkles,
              title: "Premium Materials",
              desc: "Hand-selected Grade-A Teakwood, treated rigorously to prevent moisture, pest infestation, or warping over generations."
            },
            {
              icon: DollarSign,
              title: "Factory Pricing",
              desc: "Straight from our manufacturing workshop to your home. Zero middleman margins, inflated commissions, or hidden dealer charges."
            },
            {
              icon: Ruler,
              title: "Custom Furniture",
              desc: "Personalized layouts, specific timber finishes, wood species, and dimensional edits built by expert wood sculptors."
            },
            {
              icon: Award,
              title: "Trusted Since 2008",
              desc: "Proudly serving Tirupati families and corporate workspaces for over 15 years with consistent honesty and wooden mastery."
            },
            {
              icon: Truck,
              title: "Delivery & Installation",
              desc: "Completely safe home transportation in dedicated flatbed transit and on-site precision furniture assembly."
            },
            {
              icon: HeartHandshake,
              title: "Friendly Service",
              desc: "A warm showroom welcome with honest advice on maintaining your timber investments, backed by dependable post-purchase assistance."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] flex items-start gap-[16px] h-full group">
              <div className="p-3 bg-[#FAF8F5] text-[#8B4F24] rounded-full shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="space-y-[8px]">
                <h3 className="font-serif font-semibold text-[18px] text-[#222222]">{item.title}</h3>
                <p className="text-[14px] text-[#6F6F6F] leading-[1.6] font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. About Preview Section */}
      <div className="layout-container py-[48px] lg:py-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] items-center gap-[40px] lg:gap-[64px]">
          {/* Image Column (48%) */}
          <div className="w-full shrink-0">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-video lg:aspect-auto lg:h-[500px] xl:h-[560px] relative rounded-[24px] overflow-hidden border border-black/[0.08]">
              <img
                src="/about-preview.jpg"
                alt="Master Carpenter Workshop"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
          {/* Content Column (52%) */}
          <div className="w-full max-w-[600px] mx-auto lg:mx-0 flex flex-col justify-center text-center lg:text-left space-y-[24px]">
            <div className="space-y-[16px] md:space-y-[20px]">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8B4F24] block">
                Excellence in Woodcraft Since 2008
              </span>
              <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
                Timeless Custom Elegance Built to Last Generations
              </h2>
              <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.7] max-w-[560px]">
                At BVS Enterprises, we believe furniture is not just functional, it is the soul of your home. Established in 2008 in the spiritual hub of Tirupati, we have spent more than 15 years sourcing premier logs, employing veteran wood carvers, and custom tailoring beautiful setups for hundreds of local homes and business hubs.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#8B4F24] hover:bg-[#5C3315] text-[#FAF8F5] font-sans font-bold text-xs uppercase tracking-widest h-[48px] px-[28px] rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(139,79,36,0.12)] hover:shadow-[0_8px_20px_rgba(139,79,36,0.2)] hover:-translate-y-[2px] cursor-pointer border-none inline-flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Visit Showroom Section */}
      <div id="visit-showroom" className="layout-container pt-[72px]">
        <div className="text-center max-w-2xl mx-auto mb-[32px] space-y-[20px]">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#8B4F24] inline-block mb-3">
              Experience Our Craft
            </span>
            <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              Visit Our Luxury Showroom
            </h2>
            <div className="w-12 h-[1px] bg-[#8B4F24] mx-auto mt-3" />
          </div>
          <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8] max-w-[520px] mx-auto">
            Step in to experience premium quality woodcarving, test ergonomic postures, and co-design custom shapes with our chief catalog manager.
          </p>
        </div>
        
        {/* ShowroomLocation component strictly targeting user's coordinates */}
        <ShowroomLocation settings={settings} hideHeader={true} />
      </div>

      {/* 10. Testimonials Section */}
      <div className="layout-container pt-[72px]">
        <div className="text-center max-w-2xl mx-auto mb-[32px] space-y-[20px]">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#8B4F24] inline-block mb-3">
              Customer Stories
            </span>
            <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              Loved by Generations of Families
            </h2>
            <div className="w-12 h-[1px] bg-[#8B4F24] mx-auto mt-3" />
          </div>
          <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8] max-w-[520px] mx-auto">
            Real experiences shared by local homeowners and business institutions across Tirupati and surrounding regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] text-left">
          {[
            {
              name: "Verified Customer",
              loc: "Tirupati",
              quote: "We commissioned a custom Burmese Teakwood bed and a sliding wardrobe set. The precision of woodwork is remarkable, and the wood grain feels luxurious. Extremely friendly carpenter team!"
            },
            {
              name: "Verified Customer",
              loc: "Padmavathi Puram",
              quote: "The best place in Tirupati for genuine solid wood and heavy steel cupboards. I compared prices across multiple showrooms, and BVS Enterprises offered unbeatable direct factory rates."
            },
            {
              name: "Verified Customer",
              loc: "MR Palli, Tirupati",
              quote: "Stunning dining table sets! We custom-selected our chairs and table top layout. The post-purchase customer care and free home assembly were incredibly professional."
            }
          ].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-[24px] rounded-[16px] border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#8B4F24] hover:ring-2 hover:ring-[#8B4F24]/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-[2px] cursor-default group"
            >
              <div className="space-y-[16px]">
                <div className="text-[#8B4F24] flex items-center gap-0.5">
                  <Star className="h-4.5 w-4.5 fill-current" />
                  <Star className="h-4.5 w-4.5 fill-current" />
                  <Star className="h-4.5 w-4.5 fill-current" />
                  <Star className="h-4.5 w-4.5 fill-current" />
                  <Star className="h-4.5 w-4.5 fill-current" />
                </div>
                <p className="text-[14px] text-[#6F6F6F] italic leading-relaxed font-sans">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-[24px] pt-[16px] border-t border-black/[0.08] flex items-center justify-between group-hover:border-[#8B4F24]/20 transition-colors duration-300">
                <div>
                  <span className="block text-xs font-serif font-bold text-[#222222] transition-colors duration-300 group-hover:text-[#8B4F24]">{testimonial.name}</span>
                  <span className="block text-[10px] font-sans text-[#8B4F24] font-semibold tracking-wider uppercase mt-0.5">{testimonial.loc}</span>
                </div>
                <span className="text-[10px] text-stone-400 font-mono">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11. Final CTA Section */}
      <div className="layout-container pt-[72px] pb-[72px]">
        <div className="relative rounded-[16px] overflow-hidden bg-[#EFE8DF] text-[#222222] p-8 sm:p-12 lg:p-16 text-center border-2 border-[#8B4F24]/20 shadow-[0_10px_30px_rgba(139,79,36,0.04)] hover:-translate-y-[4px] hover:shadow-[0_16px_36px_rgba(139,79,36,0.1)] hover:border-[#8B4F24]/40 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-default">
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80')" }} />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-[24px]">
            <div className="space-y-[12px]">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8B4F24] block">
                BVS Enterprises • Premium Since 2008
              </span>
              
              <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
                Ready to Transform Your Space?
              </h2>
            </div>
            
            <p className="text-[16px] font-sans font-normal leading-[1.8] text-[#555555] max-w-[520px] mx-auto">
              Whether you require durable teakwood double beds, ergonomic office tables, or personalized bedroom cupboards, our factory is ready to craft your dream.
            </p>

            <div className="flex flex-wrap justify-center gap-[16px] pt-2">
              <button
                onClick={() => {
                  setCatalogPage(1);
                  setSelectedCategoryFilter('all');
                  setSearchQuery('');
                  setActiveTab('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#8B4F24] hover:bg-[#5C3315] text-[#FAF8F5] font-sans font-bold text-xs uppercase tracking-widest h-[48px] px-[28px] rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(139,79,36,0.12)] hover:shadow-[0_8px_20px_rgba(139,79,36,0.2)] cursor-pointer border-none inline-flex items-center justify-center hover:-translate-y-[2px]"
              >
                Browse Furniture
              </button>
              
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-[#8B4F24]/8 text-[#8B4F24] border-2 border-[#8B4F24]/30 hover:border-[#8B4F24] font-sans font-bold text-xs uppercase tracking-widest h-[48px] px-[28px] rounded-full transition-all duration-300 cursor-pointer inline-flex items-center justify-center hover:-translate-y-[2px]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
