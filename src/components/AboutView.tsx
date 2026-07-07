import React from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Users,
  Sofa,
  ShieldCheck,
  Award,
  IndianRupee,
  HeartHandshake,
  Hammer,
  Lightbulb,
  MapPin,
  Compass,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { WebsiteSettings } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface AboutViewProps {
  settings: WebsiteSettings;
  setActiveTab: (tab: string) => void;
  handleWhatsAppInstantGeneral: () => void;
}

export default function AboutView({
  settings,
  setActiveTab,
  handleWhatsAppInstantGeneral
}: AboutViewProps) {
  
  const displayAddress = "BVS Enterprises, Near Sridevi Complex, Beside SBI ATM, OPP Muthoottu Mini Financiers, Tilak Road, Tirupati - 517501";
  const displayPhone1 = settings?.phone_number || "+91 85208 56709";
  const displayPhone2 = "+91 92469 97709";
  const displayEmail = "bvsenterprises0877@gmail.com";
  const displayHours = "Mon - Sun: 9:00 AM - 9:00 PM";

  return (
    <div className="bg-[#FAF8F5] selection:bg-[#6B3E1F] selection:text-white pb-20 text-[#222222]">
      
      {/* 1. HERO SECTION: "Crafting Spaces. Building Trust Since 2008" */}
      <div className="layout-container py-[48px] lg:py-[72px] text-left">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[52%_48%] items-center gap-[32px] lg:gap-[64px]">
          
          {/* Left Text Content (52% width) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[560px] flex flex-col justify-center space-y-[24px] md:space-y-[32px] order-last lg:order-first"
          >
            <div className="space-y-[16px] md:space-y-[20px]">
              <div className="flex items-center gap-[12px]">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#8B4F24]">
                  ABOUT BVS ENTERPRISES
                </span>
                <div className="h-[1px] w-16 bg-[#8B4F24]/40" />
              </div>
              
              <h1 className="font-serif font-semibold text-[#222222] leading-[1.1] tracking-tight text-[32px] md:text-[44px] lg:text-[52px]">
                Crafting Beautiful Spaces <br className="hidden sm:inline" />
                <span className="text-[#8B4F24] italic font-serif font-medium">Since 2008.</span>
              </h1>
            </div>

            {/* Elegant Ornamental Divider */}
            <div className="flex items-center gap-4 py-0.5">
              <div className="h-[1px] w-12 bg-[#E3D9CE]" />
              <span className="text-xs text-[#8B4F24]/60 select-none">❖</span>
              <div className="h-[1px] w-24 bg-[#E3D9CE]" />
              <span className="text-xs text-[#8B4F24]/60 select-none">❖</span>
              <div className="h-[1px] w-12 bg-[#E3D9CE]" />
            </div>

            <div className="space-y-[16px] text-[#555555] font-sans text-[14px] md:text-[15px] leading-[1.7] max-w-[560px] tracking-wide">
              <p>
                Established in 2008, BVS Enterprises has been a trusted name in premium furniture in Tirupati. We offer a wide range of furniture for homes, offices, and commercial spaces, designed for comfort, built for durability, and crafted with care.
              </p>
              <p>
                Our commitment to quality, honest pricing, and exceptional service has helped us become the preferred choice for thousands of happy customers.
              </p>
            </div>

            {/* Inline badges */}
            <div className="grid grid-cols-2 gap-[16px] pt-[24px] border-t border-[#E3D9CE]/50 w-full max-w-[560px]">
               <div className="flex items-center gap-3.5 bg-[#8B4F24]/5 hover:bg-[#8B4F24]/8 px-4 rounded-[12px] py-4 min-h-[80px] md:min-h-[88px] w-full border-2 border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:shadow-[0_8px_24px_rgba(139,79,36,0.06)] hover:-translate-y-[3px] transition-all duration-300 shrink-0 cursor-pointer group/badge">
                 <div className="w-11 h-11 bg-[#8B4F24]/10 rounded-full flex items-center justify-center text-[#8B4F24] group-hover/badge:bg-[#8B4F24] group-hover/badge:text-white shrink-0 transition-all duration-300">
                    <Award className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-serif font-semibold text-base text-[#222222] leading-tight transition-colors duration-300 group-hover/badge:text-[#8B4F24]">
                     <AnimatedCounter value={15} suffix="+" /> Years
                   </h4>
                   <p className="text-[11px] text-[#666666] font-sans">of Experience</p>
                 </div>
               </div>
 
               <div className="flex items-center gap-3.5 bg-[#8B4F24]/5 hover:bg-[#8B4F24]/8 px-4 rounded-[12px] py-4 min-h-[80px] md:min-h-[88px] w-full border-2 border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:shadow-[0_8px_24px_rgba(139,79,36,0.06)] hover:-translate-y-[3px] transition-all duration-300 shrink-0 cursor-pointer group/badge">
                 <div className="w-11 h-11 bg-[#8B4F24]/10 rounded-full flex items-center justify-center text-[#8B4F24] group-hover/badge:bg-[#8B4F24] group-hover/badge:text-white shrink-0 transition-all duration-300">
                    <Users className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-serif font-semibold text-base text-[#222222] leading-tight transition-colors duration-300 group-hover/badge:text-[#8B4F24]">
                     <AnimatedCounter value={5000} suffix="+" />
                   </h4>
                   <p className="text-[11px] text-[#666666] font-sans">Happy Customers</p>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Right Showroom Interior Photo (48% width) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full flex items-center justify-center shrink-0 order-first lg:order-last"
          >
            <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[560px] relative rounded-[24px] overflow-hidden border border-[#E3D9CE] shadow-2xl bg-[#E3D9CE] aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto">
              <img 
                src="/about-main.jpg"
                alt="BVS Enterprises Premium Furniture Showroom" 
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white text-left">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#FAF8F5]/80">Tirupati flagship</span>
                <h3 className="font-serif font-bold text-lg">Main Living Area Showroom</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 2. OUR STORY SECTION */}
      <div className="bg-white border-y border-[#E3D9CE]/40 py-[48px] lg:py-[72px] text-left">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] items-center gap-[32px] lg:gap-[64px]">
            
            {/* Left Storefront Photo (48% width) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full flex items-center justify-center shrink-0"
            >
              <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[560px] relative rounded-[24px] overflow-hidden border border-[#E3D9CE]/70 shadow-lg bg-[#FAF8F5] aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto">
                <img 
                  src="/bvs-storefront.jpg"
                  alt="BVS Showroom Exterior Storefront" 
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="text-xs uppercase font-sans tracking-widest text-[#FAF8F5]/90 block mb-1">Store Front</span>
                  <p className="font-serif font-bold text-xl">BVS Enterprises Woodcraft Showroom</p>
                </div>
              </div>
            </motion.div>

            {/* Right Text Content (52% width) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[560px] space-y-[24px] md:space-y-[32px] flex flex-col justify-center"
            >
              <div className="space-y-[16px] md:space-y-[20px]">
                <div className="flex items-center gap-[12px]">
                  <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#8B4F24]">
                    OUR STORY
                  </span>
                  <div className="h-[1px] w-12 bg-[#8B4F24]/40" />
                </div>
                
                <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
                  A Journey Built on Quality <br className="hidden sm:inline" />
                  and Customer Trust
                </h2>
              </div>

              <div className="space-y-[16px] text-[#555555] font-sans text-[14px] md:text-[15px] leading-[1.7] max-w-[560px]">
                <p>
                  BVS Enterprises began with a simple goal: to provide high-quality furniture at affordable prices. What started as a small showroom in Tirupati has grown into a trusted destination for premium furniture.
                </p>
                <p>
                  Over the years, we have stayed true to our values of quality craftsmanship, honest service, and reliable service. Every piece of furniture we offer reflects our passion for excellence and our dedication to enhancing your living and working spaces.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => {
                    setActiveTab('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-base btn-primary gap-2"
                >
                  <span>Visit Our Showroom</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 3. FOUR-COLUMN STATS BAR */}
      <div className="layout-container py-[72px] text-center">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-[24px]">
          
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-[12px] h-full"
          >
            <div className="text-[#8B4F24]">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#222222]">
              <AnimatedCounter value={15} suffix="+" />
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#666666] font-sans font-bold">Years of Experience</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-[12px] h-full"
          >
            <div className="text-[#8B4F24]">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#222222]">
              <AnimatedCounter value={5000} suffix="+" />
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#666666] font-sans font-bold">Happy Customers</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-[12px] h-full"
          >
            <div className="text-[#8B4F24]">
              <Sofa className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#222222]">
              <AnimatedCounter value={1000} suffix="+" />
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#666666] font-sans font-bold">Furniture Designs</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 flex flex-col items-center justify-center text-center gap-[12px] h-full"
          >
            <div className="text-[#8B4F24]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#222222]">
              <AnimatedCounter value={100} suffix="%" />
            </h3>
            <p className="text-[11px] uppercase tracking-wider text-[#666666] font-sans font-bold">Quality Assurance</p>
          </motion.div>

        </div>
      </div>

      {/* 4. OUR VALUES SECTION */}
      <div className="bg-[#FAF8F5] border-y border-[#E3D9CE]/50 py-[72px] text-center">
        <div className="layout-container">
          
          <div className="space-y-[20px] mb-[32px]">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-[#8B4F24]/40" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#8B4F24]">
                OUR VALUES
              </span>
              <div className="h-[1px] w-8 bg-[#8B4F24]/40" />
            </div>
            <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              What Drives Us Every Day
            </h2>
            <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.8] max-w-[520px] mx-auto">
              Each wooden masterpiece we craft represents our absolute dedication to quality and service.
            </p>
          </div>

          {/* Five Elegant Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[24px] text-left items-stretch">
            
            {/* Value 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 cursor-default group h-full"
            >
              <div className="w-12 h-12 bg-[#8B4F24]/5 rounded-xl flex items-center justify-center text-[#8B4F24] group-hover:bg-[#8B4F24] group-hover:text-white border border-[#8B4F24]/10 transition-colors duration-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-[8px]">
                <h4 className="font-serif font-semibold text-[18px] text-[#222222] group-hover:text-[#8B4F24] transition-colors">Quality</h4>
                <p className="text-[14px] text-[#666666] font-sans leading-[1.6]">
                  We source and create furniture that meets the highest standards of grain, durability and lacquer.
                </p>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 cursor-default group h-full"
            >
              <div className="w-12 h-12 bg-[#8B4F24]/5 rounded-xl flex items-center justify-center text-[#8B4F24] group-hover:bg-[#8B4F24] group-hover:text-white border border-[#8B4F24]/10 transition-colors duration-300 shrink-0">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div className="space-y-[8px]">
                <h4 className="font-serif font-semibold text-[18px] text-[#222222] group-hover:text-[#8B4F24] transition-colors">Honesty</h4>
                <p className="text-[14px] text-[#666666] font-sans leading-[1.6]">
                  Transparent factory-direct pricing and direct workshop invoicing with zero commissions.
                </p>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 cursor-default group h-full"
            >
              <div className="w-12 h-12 bg-[#8B4F24]/5 rounded-xl flex items-center justify-center text-[#8B4F24] group-hover:bg-[#8B4F24] group-hover:text-white border border-[#8B4F24]/10 transition-colors duration-300 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-[8px]">
                <h4 className="font-serif font-semibold text-[18px] text-[#222222] group-hover:text-[#8B4F24] transition-colors">Customer First</h4>
                <p className="text-[14px] text-[#666666] font-sans leading-[1.6]">
                  We listen, understand dimensions, and draft architectural plans customized for your family home.
                </p>
              </div>
            </motion.div>

            {/* Value 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 cursor-default group h-full"
            >
              <div className="w-12 h-12 bg-[#8B4F24]/5 rounded-xl flex items-center justify-center text-[#8B4F24] group-hover:bg-[#8B4F24] group-hover:text-white border border-[#8B4F24]/10 transition-colors duration-300 shrink-0">
                <Hammer className="w-5 h-5" />
              </div>
              <div className="space-y-[8px]">
                <h4 className="font-serif font-semibold text-[18px] text-[#222222] group-hover:text-[#8B4F24] transition-colors">Craftsmanship</h4>
                <p className="text-[14px] text-[#666666] font-sans leading-[1.6]">
                   Veteran carpenters carving authentic joint locks ensuring structural rigidity for decades.
                </p>
              </div>
            </motion.div>

            {/* Value 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-white p-[24px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 cursor-default group h-full"
            >
              <div className="w-12 h-12 bg-[#8B4F24]/5 rounded-xl flex items-center justify-center text-[#8B4F24] group-hover:bg-[#8B4F24] group-hover:text-white border border-[#8B4F24]/10 transition-colors duration-300 shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-[8px]">
                <h4 className="font-serif font-semibold text-[18px] text-[#222222] group-hover:text-[#8B4F24] transition-colors">Innovation</h4>
                <p className="text-[14px] text-[#666666] font-sans leading-[1.6]">
                  Smart space-saving hydraulic lifts, modular drawers, and premium smooth sliding wardrobes.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* 5. LET'S CONNECT BANNER */}
      <div className="layout-container py-[72px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-[#222222] rounded-[16px] overflow-hidden border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center text-left relative group"
        >
          {/* Subtle background highlight */}
          <div className="absolute inset-0 bg-radial-gradient from-[#8B4F24]/5 to-transparent pointer-events-none" />

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-[24px] relative z-10">
            <div className="space-y-[12px]">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#8B4F24]">
                LET'S CONNECT
              </span>
              <h2 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight group-hover:text-[#8B4F24] transition-colors">
                We're Here to <br /> Help You
              </h2>
            </div>
            
            <p className="text-[#6F6F6F] text-[16px] leading-[1.8] max-w-[520px] font-sans">
              Have a question about our products, need help choosing furniture, or want a custom solution? Our team is always ready to assist you.
            </p>

            <div className="pt-2">
              <button 
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#8B4F24] hover:bg-[#5C3315] text-[#FAF8F5] font-sans font-bold text-xs uppercase tracking-widest h-[48px] px-[28px] rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border-none inline-flex items-center justify-center hover:-translate-y-[2px]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Contact Info Column */}
          <div className="lg:col-span-6 space-y-6 relative z-10 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#8B4F24]/15 pt-8 lg:pt-0">
            
            {/* Visit Showroom */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8B4F24]/10 rounded-xl text-[#8B4F24] border border-[#8B4F24]/10 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-[4px]">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#8B4F24]">Visit Our Showroom</h4>
                <p className="text-[14px] text-[#6F6F6F] leading-relaxed">
                  {displayAddress}
                </p>
              </div>
            </div>

            {/* Bottom Grid for other 4 values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
              
              {/* Key Landmark */}
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="p-2.5 bg-[#8B4F24]/10 rounded-xl text-[#8B4F24] border border-[#8B4F24]/10 shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B4F24]">Key Landmark</h4>
                  <p className="text-[14px] font-bold text-[#222222] truncate" title="Opposite Best Price Wholesale">
                    Opposite Best Price Wholesale
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-700 border border-emerald-500/10 shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-emerald-700">WhatsApp</h4>
                  <button 
                    onClick={handleWhatsAppInstantGeneral}
                    className="text-[14px] font-bold text-[#222222] hover:text-emerald-700 transition-colors bg-transparent border-none p-0 text-left cursor-pointer truncate w-full"
                    title={displayWhatsApp}
                  >
                    {displayWhatsApp}
                  </button>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="p-2.5 bg-[#8B4F24]/10 rounded-xl text-[#8B4F24] border border-[#8B4F24]/10 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B4F24]">Email Us</h4>
                  <a 
                    href={`mailto:${displayEmail}`} 
                    className="text-[14px] font-bold text-[#222222] hover:text-[#8B4F24] transition-colors break-all block"
                    title={displayEmail}
                  >
                    {displayEmail}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="p-2.5 bg-[#8B4F24]/10 rounded-xl text-[#8B4F24] border border-[#8B4F24]/10 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8B4F24]">Working Hours</h4>
                  <p className="text-[14px] text-[#6F6F6F] break-words" title={displayHours}>
                    {displayHours}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </div>

    </div>
  );
}
