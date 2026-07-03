import React from 'react';
import BvsLogo from './BvsLogo';
import { 
  MapPin, 
  MessageCircle, 
  Clock, 
  Facebook, 
  Instagram, 
  Award, 
  Tag, 
  Wrench, 
  Truck, 
  ShieldCheck,
  Bed,
  FolderOpen,
  Briefcase,
  Layers,
  Ruler
} from 'lucide-react';
import { WebsiteSettings } from '../types';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  settings?: WebsiteSettings;
}

export default function Footer({ setActiveTab, settings }: FooterProps) {
  const currentYear = 2025; // Matching exactly 2025 as requested

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello BVS Enterprises, I am visiting your website and would like to inquire about your furniture collection.");
    const number = settings?.whatsapp_number || "918520856709";
    window.open(`https://wa.me/${number}?text=${text}`, '_blank');
  };

  const handleFacebook = () => {
    window.open("https://facebook.com", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/bvsenterprises_?igsh=MWI4bHI4aXJvMG9neQ==", "_blank");
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId: string) => {
    setActiveTab('products');
    setTimeout(() => {
      const element = document.getElementById(catId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight card beautifully with a luxury ring
        element.classList.add('ring-4', 'ring-[#9C5B2D]', 'ring-offset-4', 'scale-[1.01]', 'duration-500');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-[#9C5B2D]', 'ring-offset-4', 'scale-[1.01]');
        }, 2200);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <footer className="bg-[#5C3315] text-[#E3D9CE] border-t border-white/[0.08] py-6 md:pt-[56px] md:pb-[28px] font-sans relative overflow-hidden">
      {/* 1280px Centered Container */}
      <div className="layout-container">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 text-center sm:text-left">
          
          {/* Column 1: Logo, Brand name, Trust indicators, Social Icons */}
          <div className="flex flex-col items-center sm:items-start space-y-[20px] h-full">
            <div className="flex items-center gap-3.5 justify-center sm:justify-start">
              <BvsLogo 
                variant="icon" 
                size={48} 
                className="transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110 hover:shadow-[0_0_15px_rgba(250,248,245,0.15)] rounded-full ring-2 ring-white/10 p-0.5 shrink-0" 
              />
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-serif font-bold text-[#FAF8F5] text-lg tracking-wide leading-none">
                  BVS Enterprises
                </span>
                <span className="font-sans font-semibold text-[9px] text-[#F3C29F] tracking-[0.15em] mt-1.5 uppercase leading-none">
                  Premium Showroom
                </span>
              </div>
            </div>
            
            {/* Quick Trust Indicators replacing long plain paragraph */}
            <ul className="space-y-[6px] text-[15px] font-normal leading-[24px] text-[#E3D9CE] text-center sm:text-left">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[#F3C29F] font-bold text-[14px]">✓</span> Established in 2008
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[#F3C29F] font-bold text-[14px]">✓</span> 5000+ Happy Customers
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[#F3C29F] font-bold text-[14px]">✓</span> Premium Furniture Showroom
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[#F3C29F] font-bold text-[14px]">✓</span> Factory Direct Prices
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[#F3C29F] font-bold text-[14px]">✓</span> Custom Furniture Available
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-[14px] justify-center sm:justify-start pt-1">
              <button
                onClick={handleFacebook}
                className="w-[44px] h-[44px] rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E3D9CE] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] hover:-translate-y-[2px] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer shadow-sm"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-[18px] w-[18px]" />
              </button>
              <button
                onClick={handleInstagram}
                className="w-[44px] h-[44px] rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E3D9CE] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] hover:-translate-y-[2px] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer shadow-sm"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-[44px] h-[44px] rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E3D9CE] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] hover:-translate-y-[2px] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer shadow-sm"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="w-[44px] h-[44px] rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#E3D9CE] hover:text-white hover:bg-white/[0.12] hover:border-white/[0.15] hover:-translate-y-[2px] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer shadow-sm"
                aria-label="Showroom Location"
              >
                <MapPin className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start h-full">
            <h3 className="font-sans font-semibold text-[#FAF8F5] text-[17px] tracking-[2px] uppercase mb-[24px] leading-none">
              Quick Links
            </h3>
            
            <ul className="space-y-[16px] text-[16px] font-normal leading-[24px] w-full flex flex-col items-center sm:items-start">
              <li>
                <button
                  onClick={() => handleTabClick('home')}
                  className="group flex items-center text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] cursor-pointer text-left py-0.5"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('products')}
                  className="group flex items-center text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] cursor-pointer text-left py-0.5"
                >
                  Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('about')}
                  className="group flex items-center text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] cursor-pointer text-left py-0.5"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('contact')}
                  className="group flex items-center text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] cursor-pointer text-left py-0.5"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Furniture Categories */}
          <div className="flex flex-col items-center sm:items-start h-full">
            <h3 className="font-sans font-semibold text-[#FAF8F5] text-[17px] tracking-[2px] uppercase mb-[24px] leading-none">
              Categories
            </h3>
            
            <ul className="space-y-[16px] text-[16px] font-normal leading-[24px] w-full flex flex-col items-center sm:items-start">
              <li>
                <button
                  onClick={() => handleCategoryClick('bedroom-furniture')}
                  className="group flex items-center gap-3 text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] text-left py-0.5 cursor-pointer"
                >
                  <Bed className="h-[18px] w-[18px] text-[#FAF8F5]/50 group-hover:text-white transition-colors duration-300" />
                  Luxury Beds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('wardrobes-beeruvas')}
                  className="group flex items-center gap-3 text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] text-left py-0.5 cursor-pointer"
                >
                  <FolderOpen className="h-[18px] w-[18px] text-[#FAF8F5]/50 group-hover:text-white transition-colors duration-300" />
                  Premium Wardrobes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('office-furniture')}
                  className="group flex items-center gap-3 text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] text-left py-0.5 cursor-pointer"
                >
                  <Briefcase className="h-[18px] w-[18px] text-[#FAF8F5]/50 group-hover:text-white transition-colors duration-300" />
                  Office Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick('mattresses')}
                  className="group flex items-center gap-3 text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] text-left py-0.5 cursor-pointer"
                >
                  <Layers className="h-[18px] w-[18px] text-[#FAF8F5]/50 group-hover:text-white transition-colors duration-300" />
                  Comfort Mattresses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('custom')}
                  className="group flex items-center gap-3 text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px] text-left py-0.5 cursor-pointer"
                >
                  <Ruler className="h-[18px] w-[18px] text-[#FAF8F5]/50 group-hover:text-white transition-colors duration-300" />
                  Custom Design
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col items-center sm:items-start h-full">
            <h3 className="font-sans font-semibold text-[#FAF8F5] text-[17px] tracking-[2px] uppercase mb-[24px] leading-none">
              Contact Us
            </h3>
            
            <ul className="space-y-[16px] text-[16px] font-normal leading-[24px] w-full flex flex-col items-center sm:items-start">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-[14px] text-center sm:text-left">
                <MapPin className="h-[18px] w-[18px] text-[#FAF8F5]/60 sm:mt-1 shrink-0 mx-auto sm:mx-0" />
                <span className="text-[16px] leading-[24px] text-[#E3D9CE]">
                  Tirupati Bypass Rd, opposite Reliance Petrol bunk, Tirupati, AP 517501
                </span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-[14px] text-center sm:text-left">
                <MessageCircle className="h-[18px] w-[18px] text-[#FAF8F5]/60 sm:mt-1 shrink-0 mx-auto sm:mx-0" />
                <a 
                  href={`https://wa.me/${settings?.whatsapp_number || "918520856709"}?text=Hello%20BVS%20Enterprises%2C%20I%20am%20interested%20in%20custom%20furniture.`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[16px] text-[#E3D9CE] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-[4px]"
                >
                  Instant WhatsApp Inquiry
                </a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-[14px] text-center sm:text-left">
                <Clock className="h-[18px] w-[18px] text-[#FAF8F5]/60 sm:mt-1 shrink-0 mx-auto sm:mx-0" />
                <span className="text-[16px] text-[#E3D9CE]">
                  Daily: 10:00 AM – 9:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Elegant divider line above feature cards */}
        <div className="w-full border-t border-white/10 mt-[32px] mb-[32px]" />

        {/* 5 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          
          {/* Card 1: PREMIUM QUALITY */}
          <div className="group h-[88px] rounded-[16px] bg-white/[0.04] border border-white/[0.08] p-[18px] flex items-center gap-[16px] hover:-translate-y-[3px] hover:bg-white/[0.08] hover:shadow-lg hover:border-[#F3C29F]/30 hover:ring-1 hover:ring-[#F3C29F]/30 hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white/[0.06] text-[#FAF8F5]/80 group-hover:text-[#FAF8F5] group-hover:bg-white/10 transition-all duration-300 shrink-0">
              <Award className="w-[22px] h-[22px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans font-bold text-[#FAF8F5] text-[13px] tracking-wider uppercase leading-none">
                Premium Quality
              </span>
              <span className="text-[#E3D9CE] text-[12px] mt-1.5 leading-tight font-sans truncate">
                Finest solid wood finishes
              </span>
            </div>
          </div>

          {/* Card 2: FACTORY DIRECT PRICING */}
          <div className="group h-[88px] rounded-[16px] bg-white/[0.04] border border-white/[0.08] p-[18px] flex items-center gap-[16px] hover:-translate-y-[3px] hover:bg-white/[0.08] hover:shadow-lg hover:border-[#F3C29F]/30 hover:ring-1 hover:ring-[#F3C29F]/30 hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white/[0.06] text-[#FAF8F5]/80 group-hover:text-[#FAF8F5] group-hover:bg-white/10 transition-all duration-300 shrink-0">
              <Tag className="w-[22px] h-[22px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans font-bold text-[#FAF8F5] text-[13px] tracking-wider uppercase leading-none">
                Factory Direct Pricing
              </span>
              <span className="text-[#E3D9CE] text-[12px] mt-1.5 leading-tight font-sans truncate">
                Direct showroom rates
              </span>
            </div>
          </div>

          {/* Card 3: CUSTOM DESIGN */}
          <div className="group h-[88px] rounded-[16px] bg-white/[0.04] border border-white/[0.08] p-[18px] flex items-center gap-[16px] hover:-translate-y-[3px] hover:bg-white/[0.08] hover:shadow-lg hover:border-[#F3C29F]/30 hover:ring-1 hover:ring-[#F3C29F]/30 hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white/[0.06] text-[#FAF8F5]/80 group-hover:text-[#FAF8F5] group-hover:bg-white/10 transition-all duration-300 shrink-0">
              <Wrench className="w-[22px] h-[22px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans font-bold text-[#FAF8F5] text-[13px] tracking-wider uppercase leading-none">
                Custom Design
              </span>
              <span className="text-[#E3D9CE] text-[12px] mt-1.5 leading-tight font-sans truncate">
                Made to fit your space
              </span>
            </div>
          </div>

          {/* Card 4: SAFE DELIVERY */}
          <div className="group h-[88px] rounded-[16px] bg-white/[0.04] border border-white/[0.08] p-[18px] flex items-center gap-[16px] hover:-translate-y-[3px] hover:bg-white/[0.08] hover:shadow-lg hover:border-[#F3C29F]/30 hover:ring-1 hover:ring-[#F3C29F]/30 hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white/[0.06] text-[#FAF8F5]/80 group-hover:text-[#FAF8F5] group-hover:bg-white/10 transition-all duration-300 shrink-0">
              <Truck className="w-[22px] h-[22px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans font-bold text-[#FAF8F5] text-[13px] tracking-wider uppercase leading-none">
                Safe Delivery
              </span>
              <span className="text-[#E3D9CE] text-[12px] mt-1.5 leading-tight font-sans truncate">
                On-time transit & assembly
              </span>
            </div>
          </div>

          {/* Card 5: TRUSTED SINCE 2008 */}
          <div className="group h-[88px] rounded-[16px] bg-white/[0.04] border border-white/[0.08] p-[18px] flex items-center gap-[16px] hover:-translate-y-[3px] hover:bg-white/[0.08] hover:shadow-lg hover:border-[#F3C29F]/30 hover:ring-1 hover:ring-[#F3C29F]/30 hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white/[0.06] text-[#FAF8F5]/80 group-hover:text-[#FAF8F5] group-hover:bg-white/10 transition-all duration-300 shrink-0">
              <ShieldCheck className="w-[22px] h-[22px]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-sans font-bold text-[#FAF8F5] text-[13px] tracking-wider uppercase leading-none">
                Trusted Since 2008
              </span>
              <span className="text-[#E3D9CE] text-[12px] mt-1.5 leading-tight font-sans truncate">
                Over 15 years of excellence
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar Container with 1px border above */}
        <div className="w-full border-t border-white/10 mt-[32px] mb-[16px]" />

        {/* Bottom Bar (56px high, copyright left, tagline right) */}
        <div className="min-h-[56px] flex flex-col sm:flex-row justify-between items-center text-[13px] text-[#FAF8F5]/65 font-sans gap-4 py-4">
          <p className="text-center sm:text-left leading-none">
            © {currentYear} BVS Enterprises. All Rights Reserved.
          </p>
          <span className="text-[11px] font-semibold text-[#F3C29F] tracking-[2px] uppercase text-center sm:text-right leading-none">
            Premium Furniture Showroom • Since 2008
          </span>
        </div>

      </div>
    </footer>
  );
}
