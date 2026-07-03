import React, { useState, useEffect } from 'react';
import BvsLogo from './BvsLogo';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
  onSelectFilter?: (catId: string, searchVal: string) => void;
}

const navItems = [
  { label: 'Home', tabKey: 'home' },
  { label: 'Furniture', tabKey: 'products' }, // Labeled as Furniture, maps to products catalog
  { label: 'About', tabKey: 'about' },
  { label: 'Contact', tabKey: 'contact' }
];

function Navbar({
  activeTab,
  setActiveTab,
  isAdmin,
  setIsAdmin,
  onSelectFilter
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sticky = window.scrollY > 15;
          setIsSticky((prev) => {
            if (prev !== sticky) {
              return sticky;
            }
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    window.location.href = "tel:+918520856709";
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello BVS Enterprises, I am visiting your premium showroom website and would like to inquire about your furniture collections.");
    window.open(`https://wa.me/918520856709?text=${text}`, '_blank');
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`navbar-stable border-b ${
          isSticky 
            ? 'bg-white shadow-sm border-[#ECE5DD]' 
            : 'bg-white/95 backdrop-blur-md border-[#ECE5DD]/60'
        }`}
      >
        <div className="layout-container flex items-center justify-between w-full h-full">
          
          {/* Left Section: Logo Signature */}
            <div
              id="navbar-logo"
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group select-none text-left"
              role="button"
              tabIndex={0}
              aria-label="Go to Home"
            >
              <BvsLogo 
                variant="icon" 
                size={44} 
                className="transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-full" 
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-[#222222] text-base sm:text-lg leading-none tracking-tight">
                  BVS Enterprises
                </span>
                <span className="font-sans font-medium text-[8px] sm:text-[9.5px] text-[#8B4F24] tracking-wider mt-1 whitespace-nowrap uppercase">
                  Premium Showroom • Est. 2008
                </span>
              </div>
            </div>

            {/* Center Section: Navigation Links (Desktop ONLY) */}
            <nav className="hidden lg:flex items-center gap-x-6 lg:gap-x-10 h-full">
              {navItems.map((item) => {
                const isActive = activeTab === item.tabKey;
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.tabKey)}
                    aria-label={`Go to ${item.label}`}
                    className={`relative h-full px-1 text-[13px] font-sans font-semibold tracking-widest uppercase transition-all duration-250 ease-out cursor-pointer whitespace-nowrap flex items-center group ${
                      isActive ? 'text-[#8B4F24]' : 'text-[#666666] hover:text-[#8B4F24]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B4F24]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B4F24] scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-center ease-out" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Section: WhatsApp (Desktop ONLY) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={handleWhatsAppClick}
                className="btn-base btn-primary gap-1.5"
                aria-label="WhatsApp Inquiry"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#222222] hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                aria-label="Open Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-xs"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-In Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative ml-auto w-full max-w-xs bg-white h-full shadow-xl flex flex-col justify-between overflow-y-auto z-50 p-6 border-l border-[#E8E2DA]"
            >
              <div className="space-y-6 text-left">
                {/* Header inside Drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E2DA]">
                  <div className="flex flex-col text-left">
                    <span className="font-serif font-bold text-[#222222] text-lg">BVS Enterprises</span>
                    <span className="text-[9px] font-sans font-medium text-[#8B4F24] tracking-wider uppercase">SINCE 2008</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-[#222222] hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = activeTab === item.tabKey;
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          setActiveTab(item.tabKey);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-sans font-semibold tracking-wider uppercase transition-all ${
                          isActive
                            ? 'bg-[#8B4F24]/10 text-[#8B4F24]'
                            : 'text-[#666666] hover:bg-stone-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile CTA actions inside Drawer */}
              <div className="pt-6 border-t border-[#E8E2DA] space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#8B4F24] hover:bg-[#A86232] text-white py-3.5 rounded-full font-sans font-semibold tracking-wider text-xs uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default React.memo(Navbar);
