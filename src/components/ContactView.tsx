import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  Loader2,
  Copy,
  Check,
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { WebsiteSettings } from '../types';

interface ContactViewProps {
  settings: WebsiteSettings;
  contactSuccess: boolean;
  contactName: string;
  setContactName: (val: string) => void;
  contactPhone: string;
  setContactPhone: (val: string) => void;
  contactMessage: string;
  setContactMessage: (val: string) => void;
  handleGeneralContactSubmit: (e: React.FormEvent) => void;
  handleWhatsAppInstantGeneral: () => void;
}

export default function ContactView({
  settings,
  contactSuccess,
  contactName,
  setContactName,
  contactPhone,
  setContactPhone,
  contactMessage,
  setContactMessage,
  handleGeneralContactSubmit,
  handleWhatsAppInstantGeneral
}: ContactViewProps) {
  const [contactEmail, setContactEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const [nameWarning, setNameWarning] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [phoneWarning, setPhoneWarning] = useState('');

  React.useEffect(() => {
    if (!contactPhone || contactPhone === '') {
      setContactPhone('+91 ');
    }
  }, []);

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/\d/.test(value)) {
      setNameWarning('Numbers are not allowed in the name field.');
    } else {
      setNameWarning('');
    }
    const cleanValue = value.replace(/[0-9]/g, '');
    setContactName(cleanValue);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContactEmail(value);
    
    const lower = value.toLowerCase();
    if (value && (!lower.includes('gmail') || !lower.includes('.com'))) {
      setEmailWarning('Email must contain "gmail" and ".com"');
    } else {
      setEmailWarning('');
    }
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (value === '') {
      setContactPhone('+91 ');
      setPhoneWarning('');
      return;
    }
    
    let formattedVal = value;
    if (!value.startsWith('+91')) {
      const numbers = value.replace(/\D/g, '');
      formattedVal = '+91 ' + numbers;
    } else {
      const rest = value.substring(4);
      const numbersOnly = rest.replace(/\D/g, '').slice(0, 10);
      formattedVal = '+91 ' + numbersOnly;
    }
    
    setContactPhone(formattedVal);
    
    const digits = formattedVal.replace(/\D/g, '');
    if (digits.length !== 12) {
      setPhoneWarning('Phone number must have 10 digits after +91.');
    } else {
      setPhoneWarning('');
    }
  };

  const displayAddress = "BVS Enterprises, Near Sridevi Complex, Beside SBI ATM, OPP Muthoottu Mini Financiers, Tilak Road, Tirupati - 517501";
  const displayPhone1 = settings?.phone_number || "+91 85208 56709";
  const displayPhone2 = "+91 92469 97709";
  const displayEmail = "bvsenterprises0877@gmail.com";
  const displayWhatsApp = settings?.whatsapp_number || "+91 85208 56709";
  const displayHours = settings?.business_hours || "10:00 AM – 9:00 PM (Open All Days)";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(displayAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final check validations
    if (/\d/.test(contactName)) {
      setNameWarning('Numbers are not allowed in the name field.');
      return;
    }
    
    const lowerEmail = contactEmail.toLowerCase();
    if (!lowerEmail.includes('gmail') || !lowerEmail.includes('.com')) {
      setEmailWarning('Email must contain "gmail" and ".com"');
      return;
    }
    
    const digitsOnly = contactPhone.replace(/\D/g, '');
    if (!contactPhone.startsWith('+91') || digitsOnly.length !== 12) {
      setPhoneWarning('Phone number must start with +91 followed by 10 digits.');
      return;
    }
    
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setFormSuccess(true);
    handleGeneralContactSubmit(e);
  };

  return (
    <div className="bg-[#FAF8F5] selection:bg-[#6B3E1F] selection:text-white pb-[72px] text-[#222222]">
      
      {/* 1. Luxurious Hero Header Section */}
      <div className="bg-[#FAF8F5] pt-[48px] lg:pt-[72px] pb-[40px] text-left">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-[32px] lg:gap-[64px]">
            
            {/* Left Text Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-[560px] flex flex-col justify-center space-y-[24px] md:space-y-[32px]"
            >
              <div className="space-y-[16px] md:space-y-[20px]">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#8B4F24] inline-block px-[14px] py-[6px] bg-[#8B4F24]/5 rounded-full">
                  Get In Touch
                </span>
                <h1 className="font-serif font-semibold text-[#222222] leading-[1.1] tracking-tight text-[32px] md:text-[44px] lg:text-[52px]">
                  We’re Here to <br />
                  <span className="text-[#8B4F24] italic font-serif font-medium">Help You</span>
                </h1>
              </div>
              
              <p className="text-[#6F6F6F] text-[16px] font-sans font-normal leading-[1.7] max-w-[560px]">
                Have a question, or need assistance custom-tailoring a collection for your space? Reach out to us. Our woodcraft coordinators and master builders are happy to help you.
              </p>

              <div className="flex flex-wrap gap-[16px] pt-2">
                <button 
                  onClick={handleWhatsAppInstantGeneral}
                  className="btn-base btn-primary w-full sm:w-auto gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Inquiry</span>
                </button>
              </div>
            </motion.div>

            {/* Right Image Feature Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full flex items-center justify-center shrink-0"
            >
              <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[560px] relative rounded-[24px] overflow-hidden border border-black/[0.08] shadow-2xl bg-stone-100 aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto">
                <img 
                  src="/contact-main.jpg"
                  alt="BVS Hand-Carved Traditional Teakwood Diwan Sofa" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#FAF8F5]/90 block mb-0.5">Flagship Space</span>
                    <p className="font-serif font-bold text-sm">Burmese Teakwood Showcase Room</p>
                  </div>
                  <span className="text-[10px] font-mono py-1.5 px-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    📍 Tilak Road, Tirupati
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 2. Main Double-Column Layout */}
      <div className="layout-container py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[24px] items-stretch">
          
          {/* Left Panel: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 bg-white p-[24px] md:p-[32px] rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 text-left flex flex-col justify-between group"
          >
            <div>
              <div className="border-b border-black/[0.04] pb-[20px] mb-[24px]">
                <h2 className="font-serif font-semibold text-[24px] text-[#222222] tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-[14px] text-[#6F6F6F] mt-1.5 font-sans">
                  Fill out the form below and our specialists will assist you soon.
                </p>
              </div>

              {formSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#FAF8F5] border border-[#ECE5DD] p-[32px] rounded-[16px] text-center space-y-[20px] my-[24px]"
                >
                  <div className="w-16 h-16 bg-[#8B4F24]/10 text-[#8B4F24] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-[8px]">
                    <h3 className="font-serif font-semibold text-xl text-[#222222]">Message Successfully Sent</h3>
                    <p className="text-[14px] text-[#6F6F6F] font-sans max-w-sm mx-auto">
                      Thank you, <span className="font-bold text-[#8B4F24]">{contactName || 'Valued Customer'}</span>. We have registered your requirements and will reach out to you within the next hour.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormSuccess(false);
                      setContactName('');
                      setContactPhone('');
                      setContactEmail('');
                      setContactMessage('');
                    }}
                    className="text-xs font-bold text-[#8B4F24] uppercase tracking-widest hover:underline pt-2 inline-block cursor-pointer bg-transparent border-none"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-[20px]">
                  
                  {/* Name field */}
                  <div className="space-y-[8px]">
                    <label className="block text-[11px] font-sans font-bold text-[#8B4F24] uppercase tracking-widest">
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                        <User className="h-4 w-4" />
                      </div>
                      <input 
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={contactName}
                        onChange={handleNameInputChange}
                        className={`w-full text-xs bg-[#FAF8F5] hover:bg-stone-50/50 border rounded-xl pl-11 pr-4 py-3.5 focus:bg-white focus:outline-none focus:ring-2 transition-all text-[#222222] ${
                          nameWarning ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-black/[0.08] focus:ring-[#8B4F24]/20 focus:border-[#8B4F24]'
                        }`}
                      />
                    </div>
                    {nameWarning && (
                      <p className="text-[11px] font-medium text-red-500 font-sans mt-1">
                        ⚠️ {nameWarning}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                    {/* Email field */}
                    <div className="space-y-[8px]">
                      <label className="block text-[11px] font-sans font-bold text-[#8B4F24] uppercase tracking-widest">
                        Your Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <Mail className="h-4 w-4" />
                        </div>
                        <input 
                          type="email"
                          required
                          placeholder="e.g. name@gmail.com"
                          value={contactEmail}
                          onChange={handleEmailInputChange}
                          className={`w-full text-xs bg-[#FAF8F5] hover:bg-stone-50/50 border rounded-xl pl-11 pr-4 py-3.5 focus:bg-white focus:outline-none focus:ring-2 transition-all text-[#222222] ${
                            emailWarning ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-black/[0.08] focus:ring-[#8B4F24]/20 focus:border-[#8B4F24]'
                          }`}
                        />
                      </div>
                      {emailWarning && (
                        <p className="text-[11px] font-medium text-red-500 font-sans mt-1">
                          ⚠️ {emailWarning}
                        </p>
                      )}
                    </div>

                    {/* Phone field */}
                    <div className="space-y-[8px]">
                      <label className="block text-[11px] font-sans font-bold text-[#8B4F24] uppercase tracking-widest">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                          <Smartphone className="h-4 w-4" />
                        </div>
                        <input 
                          type="tel"
                          required
                          placeholder="+91 XXXXXXXXXX"
                          value={contactPhone}
                          onChange={handlePhoneInputChange}
                          className={`w-full text-xs bg-[#FAF8F5] hover:bg-stone-50/50 border rounded-xl pl-11 pr-4 py-3.5 focus:bg-white focus:outline-none focus:ring-2 transition-all text-[#222222] ${
                            phoneWarning ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-black/[0.08] focus:ring-[#8B4F24]/20 focus:border-[#8B4F24]'
                          }`}
                        />
                      </div>
                      {phoneWarning && (
                        <p className="text-[11px] font-medium text-red-500 font-sans mt-1">
                          ⚠️ {phoneWarning}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-[8px]">
                    <label className="block text-[11px] font-sans font-bold text-[#8B4F24] uppercase tracking-widest">
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-stone-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <textarea 
                        rows={5}
                        required
                        placeholder="State what furniture categories you are interested in. Mention sizes, polish preferences, or custom requests..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full text-xs bg-[#FAF8F5] hover:bg-stone-50/50 border border-black/[0.08] rounded-xl pl-11 pr-4 py-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] transition-all text-[#222222] font-sans leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-base btn-primary w-full gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>

          {/* Right Panel: Contact Information Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-[24px] md:p-[32px] rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 text-left flex flex-col justify-between group"
          >
            <div className="space-y-[32px]">
              <div className="border-b border-black/[0.04] pb-[20px]">
                <h2 className="font-serif font-semibold text-[24px] text-[#222222] tracking-tight">
                  Contact Information
                </h2>
                <p className="text-[14px] text-[#6F6F6F] mt-1.5 font-sans">
                  Connect with BVS Enterprises across multiple channels.
                </p>
              </div>

              {/* Information Rows */}
              <div className="space-y-[24px]">
                
                {/* 1. Visit showroom */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF8F5] text-[#8B4F24] rounded-full shrink-0 mt-0.5 border border-black/[0.04]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-xs font-sans uppercase tracking-widest text-[#8B4F24]">Visit Our Showroom</strong>
                    <p className="text-[14px] text-[#6F6F6F] font-sans leading-relaxed">
                      {displayAddress}
                    </p>
                    
                    {/* Copy Address CTA */}
                    <button
                      onClick={handleCopyAddress}
                      className="text-[10px] font-sans font-bold text-[#8B4F24] hover:text-[#5C3315] transition-colors flex items-center gap-1.5 mt-2 bg-[#FAF8F5] hover:bg-stone-50 px-2.5 py-1 rounded-md border border-black/[0.08] cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600 animate-in fade-in" />
                          <span className="text-emerald-700">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 2. WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-800 rounded-full shrink-0 mt-0.5 border border-emerald-100">
                    <svg className="w-5 h-5 text-emerald-700 fill-current" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-xs font-sans uppercase tracking-[0.2em] text-[#8B4F24]">WhatsApp</strong>
                    <button 
                      onClick={handleWhatsAppInstantGeneral}
                      className="block text-[16px] font-bold text-[#222222] hover:text-[#8B4F24] transition-colors font-sans mt-0.5 border-none bg-transparent p-0 text-left cursor-pointer"
                    >
                      {displayWhatsApp}
                    </button>
                    <span className="text-[11px] text-[#7A726A] font-sans block">Chat directly with showroom leads</span>
                  </div>
                </div>

                {/* 3. Email us */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF8F5] text-[#8B4F24] rounded-full shrink-0 mt-0.5 border border-black/[0.04]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-xs font-sans uppercase tracking-[0.2em] text-[#8B4F24]">Email Us</strong>
                    <a 
                      href={`mailto:${displayEmail}`}
                      className="block text-[16px] font-bold text-[#222222] hover:text-[#8B4F24] transition-colors font-sans mt-0.5"
                    >
                      {displayEmail}
                    </a>
                    <span className="text-[11px] text-[#7A726A] font-sans block">Our catalog managers reply within 2 hours</span>
                  </div>
                </div>

                {/* 4. Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF8F5] text-[#8B4F24] rounded-full shrink-0 mt-0.5 border border-black/[0.04]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-xs font-sans uppercase tracking-[0.2em] text-[#8B4F24]">Working Hours</strong>
                    <p className="text-[16px] font-bold text-[#222222] font-sans mt-0.5">
                      {displayHours}
                    </p>
                    <span className="text-[11px] text-[#7A726A] font-sans block">Open all days, including Sundays</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-black/[0.04] space-y-3 mt-[32px]">
              <button 
                onClick={handleWhatsAppInstantGeneral}
                className="w-full bg-[#8B4F24] hover:bg-[#5C3315] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest h-[48px] px-[28px] rounded-full text-center inline-flex items-center justify-center transition-all duration-300 border-none cursor-pointer"
              >
                Inquire via WhatsApp
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. Refined Location & Google Map Segment */}
      <div className="layout-container py-[40px]">
        <div className="bg-white rounded-[16px] border border-[#8B4F24]/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 p-[24px] md:p-[32px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[48px] items-center text-left group">
          
          {/* Map Column (lg:col-span-7) */}
          <div className="lg:col-span-7 h-[320px] sm:h-[400px] rounded-[16px] overflow-hidden border border-black/[0.08] relative group">
            {/* Custom Premium Map Overlay Card */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-black/5 max-w-[260px] sm:max-w-[300px]">
              <h4 className="font-serif font-bold text-[#2E2A27] text-base sm:text-lg mb-1 tracking-tight">BVS ENTERPRISES</h4>
              <p className="text-[11px] sm:text-xs text-[#6E6A66] font-sans leading-relaxed mb-4">
                Near Sridevi Complex, Beside SBI ATM,<br/>
                Opp Muthoottu Mini Financiers,<br/>
                Tilak Road, Tirupati,<br/>
                Andhra Pradesh – 517501, India
              </p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=BVS%20ENTERPRISES%2C%20Near%20Sridevi%20Complex%2C%20Beside%20SBI%20ATM%2C%20Opp%20Muthoottu%20Mini%20Financiers%2C%20Tilak%20Road%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501%2C%20India"
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 w-full bg-[#A86A33] hover:bg-[#915B29] text-white text-[11px] sm:text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-md"
                >
                  <span>Get Directions</span>
                  <MapPin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=BVS%20ENTERPRISES%2C%20Near%20Sridevi%20Complex%2C%20Beside%20SBI%20ATM%2C%20Opp%20Muthoottu%20Mini%20Financiers%2C%20Tilak%20Road%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501%2C%20India"
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 w-full bg-white hover:bg-stone-50 text-[#2E2A27] border border-[#E2D9CC] text-[11px] sm:text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <iframe 
              src="https://maps.google.com/maps?q=BVS%20ENTERPRISES%2C%20Near%20Sridevi%20Complex%2C%20Beside%20SBI%20ATM%2C%20Opp%20Muthoottu%20Mini%20Financiers%2C%20Tilak%20Road%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501%2C%20India&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BVS Enterprises Tirupati Map"
              className="w-full h-full grayscale-[5%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Guide Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-[24px] lg:pl-4">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#8B4F24]">
              Find Us Easily
            </span>
            
            <h3 className="font-serif font-semibold text-h2 leading-tight text-[#222222] tracking-tight">
              Located on the Main <br />
              Tilak Road
            </h3>
            
            <p className="text-[16px] text-[#6F6F6F] leading-[1.8] font-sans">
              Our ultra-premium showroom is conveniently situated next to major landmarks in Tirupati, featuring sprawling spaces to preview over 300+ furniture masterpieces in real-world bedroom, dining room, and executive office layouts.
            </p>

            <div className="pt-2">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=BVS%20ENTERPRISES%2C%20Near%20Sridevi%20Complex%2C%20Beside%20SBI%20ATM%2C%20Opp%20Muthoottu%20Mini%20Financiers%2C%20Tilak%20Road%2C%20Tirupati%2C%20Andhra%20Pradesh%20517501%2C%20India"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B4F24] hover:bg-[#5C3315] text-white text-xs font-bold uppercase tracking-widest h-[48px] px-[28px] rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(139,79,36,0.12)] hover:shadow-[0_8px_20px_rgba(139,79,36,0.2)] hover:-translate-y-[2px] cursor-pointer w-full sm:w-auto"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
