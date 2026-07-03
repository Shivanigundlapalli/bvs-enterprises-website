import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Mail, 
  Compass, 
  ChevronRight, 
  ArrowUpRight, 
  Smartphone, 
  Check, 
  Copy,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface ShowroomLocationProps {
  settings?: {
    phone_number: string;
    whatsapp_number: string;
    business_hours: string;
    address: string;
    address_landmark: string;
    social_facebook?: string;
    social_instagram?: string;
  };
  hideHeader?: boolean;
}

export default function ShowroomLocation({ settings, hideHeader = false }: ShowroomLocationProps) {
  const [copied, setCopied] = useState(false);

  const businessName = "BVS Enterprises";
  const displayAddress = settings?.address || "Door No. 400, Tilak Road, Tirupati, Andhra Pradesh, India.";
  const displayLandmark = settings?.address_landmark || "SBI ATM";
  const displayPhone1 = settings?.phone_number || "+91 85208 56709";
  const displayPhone2 = "+91 92469 97709";
  const displayEmail = "sales@bvsenterprises.in";
  const displayHours = settings?.business_hours || "10:00 AM – 9:00 PM (Open All Days)";

  // Premium, highly specific directions/search URLs that open perfectly in Google Maps on all devices
  const mapSearchUrl = `https://www.google.com/maps/dir/?api=1&destination=BVS+Enterprises,+Tilak+Road,+Opposite+SBI+ATM,+Tirupati,+Andhra+Pradesh+517501`;
  const embedMapUrl = `https://maps.google.com/maps?q=BVS%20Enterprises,%20Tilak%20Road,%20Tirupati,%20Andhra%20Pradesh,%20India&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${businessName}, ${displayAddress} Landmark: Opposite ${displayLandmark}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Structured Data Schema for Local Business SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": businessName,
    "image": "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&auto=format&fit=crop&q=80",
    "@id": "https://bvsenterprises.in/#showroom",
    "url": window.location.origin,
    "telephone": displayPhone1,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Door No. 400, Tilak Road",
      "addressLocality": "Tirupati",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "517501",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.6288,
      "longitude": 79.4162
    },
    "hasMap": mapSearchUrl,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    }
  };

  const renderContent = () => (
    <>
      {/* Inject JSON-LD local business schema to satisfy SEO requirements */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />

      {!hideHeader && (
        <>
          {/* Decorative Elegant Background Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A86A33]/3 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8C6239]/4 rounded-full blur-2xl pointer-events-none" />
        </>
      )}

      <div className={hideHeader ? "w-full relative z-10" : "layout-container relative z-10"}>
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase font-mono tracking-widest text-[#A86A33] font-semibold bg-[#A86A33]/10 px-3.5 py-1.5 rounded-full inline-block mb-3.5"
            >
              Sartorial Woodcraft Spaces
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#2E2A27] tracking-tight leading-tight"
            >
              Visit Our Showroom
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#6E6A66] mt-3 font-sans leading-relaxed"
            >
              Experience our furniture collection in person and get expert assistance.
            </motion.p>
          </div>
        )}        {/* Showroom Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Google Map Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="relative bg-white p-2.5 rounded-3xl border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] group overflow-hidden w-full h-[450px] lg:h-full lg:min-h-[520px] flex flex-col">
              
              {/* Premium Inner Map Label overlay */}
              <div className="absolute top-6 left-6 z-10 bg-[#2E2A27]/90 text-white font-sans text-xs px-4 py-2 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Flagship Tirupati Outlet</span>
              </div>
 
              {/* Get Directions Quick Floating Badge */}
              <a 
                href={mapSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-6 right-6 z-10 bg-[#A86A33] hover:bg-[#915B29] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
 
              {/* The Iframe Map */}
              <iframe 
                src={embedMapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.25rem' }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${businessName} Showroom on Google Map`}
                className="w-full h-full min-h-[420px] grayscale-[10%] hover:grayscale-0 transition-all duration-700 font-sans flex-grow"
              />
            </div>
          </motion.div>
 
          {/* RIGHT: Store Information Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] flex flex-col justify-between w-full h-full lg:h-full lg:min-h-[520px] relative overflow-hidden group">
              
              {/* Card visual accent border */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#8C6239] via-[#A86A33] to-[#C39A6B]" />
 
              <div className="space-y-6 flex-grow flex flex-col justify-between">
                {/* Header info */}
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#2E2A27] mb-1 tracking-tight">
                    Showroom Experience Hub
                  </h3>
                  <p className="text-xs text-stone-400 font-sans leading-relaxed">
                    Step in to experience premium quality woodcarving, test ergonomic postures, and co-design custom shapes with our chief catalog manager.
                  </p>
                </div>
 
                {/* Showroom Details Rows */}
                <div className="space-y-5 my-auto">
                  
                  {/* Address Box */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#FAF7F2] text-[#A86A33] rounded-xl border border-[#E2D9CC] shrink-0 mt-0.5">
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A86A33] font-bold">
                        Showroom Address
                      </span>
                      <p className="text-sm text-[#4E4A46] font-sans leading-relaxed">
                        {displayAddress}
                      </p>
                      
                      {/* Copy Button */}
                      <button 
                        onClick={handleCopyAddress}
                        className="text-[10px] font-sans font-medium text-[#A86A33] hover:text-[#915B29] transition-all flex items-center gap-1 mt-1 cursor-pointer bg-stone-50 hover:bg-stone-100 px-2 py-0.5 rounded"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-2.5 w-2.5" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
 
                  {/* Landmark Box */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#FAF7F2] text-[#A86A33] rounded-xl border border-[#E2D9CC] shrink-0 mt-0.5">
                      <Compass className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A86A33] font-bold">
                        Key Landmark
                      </span>
                      <p className="text-sm font-semibold text-[#2E2A27] font-sans">
                        Opposite {displayLandmark}
                      </p>
                    </div>
                  </div>
 
                  {/* Business Hours Box */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#FAF7F2] text-[#A86A33] rounded-xl border border-[#E2D9CC] shrink-0 mt-0.5">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A86A33] font-bold">
                        Experience Hours
                      </span>
                      <p className="text-sm text-[#4E4A46] font-sans font-medium">
                        {displayHours}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Box */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#FAF7F2] text-[#A86A33] rounded-xl border border-[#E2D9CC] shrink-0 mt-0.5">
                      <Sparkles className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A86A33] font-bold">
                        Experience Highlights
                      </span>
                      <ul className="text-xs text-stone-600 font-sans space-y-1 list-disc list-inside">
                        <li>Feel raw solid wood grains and custom finishes</li>
                        <li>Test orthopedic & ergonomic posture models</li>
                        <li>Co-design custom furniture shapes with experts</li>
                      </ul>
                    </div>
                  </div>
 
                </div>
              </div>
 
              {/* ACTION BUTTONS GRID */}
              <div className="mt-6 pt-5 border-t border-[#E8E2D9] relative shrink-0">
                
                {/* 1. Main directions (Google Search and API integration coords) */}
                <a 
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base btn-primary w-full gap-2 group/btn"
                >
                  <MapPin className="w-4.5 h-4.5 text-[#C39A6B] group-hover/btn:scale-110 transition-transform" />
                  <span>Get Directions in Google Maps</span>
                  <ChevronRight className="w-4 h-4 text-[#C39A6B] group-hover/btn:translate-x-1 transition-transform" />
                </a>
 
              </div>
 
            </div>
          </motion.div>

        </div>

      </div>
    </>
  );

  if (hideHeader) {
    return renderContent();
  }

  return (
    <section id="showroom-section" className="relative py-16 sm:py-20 bg-[#FAF7F2] overflow-hidden">
      {renderContent()}
    </section>
  );
}
