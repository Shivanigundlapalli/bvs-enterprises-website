import React from 'react';

// Precision High-Fidelity SVG of the exact circular badge with a gold-accented luxury brand monogram and line-art chair.
export function BvsMonogramIcon({ 
  size = 48, 
  colorMode = 'dark', 
  className = '' 
}: { 
  size?: number | string; 
  colorMode?: 'dark' | 'light' | 'gold'; 
  className?: string;
}) {
  const sizeNum = typeof size === 'number' ? `${size}px` : size;

  // Render the official rounded badge logo exactly as requested by the user.
  // It features a warm terracotta/desert-sand radial gradient center,
  // thick dark-brown outer ring, terracotta inner concentric ring,
  // bold white "BVS ENTERPRISES" typography, and a handcrafted 3D luxury sofa.
  return (
    <svg
      width={sizeNum}
      height={sizeNum}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none transition-all duration-300 ${className}`}
    >
      <defs>
        {/* Soft atmospheric radial gradient inside the badge matching the warm terracotta/desert-sand of the upload */}
        <radialGradient id="badgeRadial" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#DF9E6F" />
          <stop offset="65%" stopColor="#C48050" />
          <stop offset="100%" stopColor="#96562D" />
        </radialGradient>

        {/* Drop shadow for the text to pop beautifully */}
        <filter id="badgeTextShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" floodColor="#3F1E0B" floodOpacity="0.45" />
        </filter>

        {/* Shadow filter for the couch floor shadow */}
        <filter id="sofaBlur" x="-10%" y="-15%" width="120%" height="130%">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>

        {/* Cushion shading gradient */}
        <linearGradient id="cushionGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF0E3" />
          <stop offset="60%" stopColor="#E5C19A" />
          <stop offset="100%" stopColor="#C8976C" />
        </linearGradient>

        <linearGradient id="pillowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDF6ED" />
          <stop offset="50%" stopColor="#EAD6C0" />
          <stop offset="100%" stopColor="#CEB599" />
        </linearGradient>
      </defs>

      {/* 1. Outer Dark Luxury Framing Ring (Dark cocoa brown) */}
      <circle cx="50" cy="50" r="48" fill="#5D3319" />
      
      {/* 2. Inner Terracotta concentric ring */}
      <circle cx="50" cy="50" r="44.5" fill="#935431" />

      {/* 3. Core Peach-Sand Badge Surface */}
      <circle cx="50" cy="50" r="40" fill="url(#badgeRadial)" />

      {/* Inner fine accent ring for premium styling */}
      <circle cx="50" cy="50" r="37.5" stroke="#E6A675" strokeWidth="0.5" opacity="0.3" fill="none" />

      {/* 4. High-Contrast Bold Typography: BVS ENTERPRISES */}
      <g filter="url(#badgeTextShadow)">
        <text
          x="50"
          y="32"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontFamily="'Inter', 'Manrope', 'Helvetica Neue', Arial, sans-serif"
          fontWeight="900"
          letterSpacing="0.04em"
        >
          BVS
        </text>
        <text
          x="50"
          y="41"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7"
          fontFamily="'Inter', 'Manrope', 'Helvetica Neue', Arial, sans-serif"
          fontWeight="900"
          letterSpacing="0.04em"
        >
          ENTERPRISES
        </text>
      </g>

      {/* 5. Luxury Handcrafted 3D Sofa (Aligned perfectly in the lower half) */}
      <g id="sofa-vector">
        {/* Floor Shadow beneath couch */}
        <ellipse cx="50" cy="74.5" rx="27" ry="2" fill="#1C0E05" opacity="0.45" filter="url(#sofaBlur)" />

        {/* Walnut base legs */}
        <polygon points="24,70 27,70 26.5,75 23.5,75" fill="#2E1708" />
        <polygon points="76,70 73,70 73.5,75 76.5,75" fill="#2E1708" />
        
        {/* Middle support leg for 3D realism */}
        <rect x="48.5" y="70" width="3" height="4.5" fill="#2E1708" />

        {/* Walnut flat baseline beam */}
        <rect x="22.5" y="68" width="55" height="2.2" fill="#4B270F" rx="0.4" />
        {/* Soft gold specular reflection on top edge of wooden base */}
        <rect x="23" y="68.2" width="54" height="0.4" fill="#805436" opacity="0.4" />

        {/* Sofa Main Lower Frame Chassis */}
        <rect x="20.5" y="63" width="59" height="5.5" fill="#996037" rx="1.2" />
        <rect x="21" y="63" width="58" height="2.5" fill="#BC8155" rx="0.6" />

        {/* Back Pillows (Warm Cream-Beige) */}
        {/* Left Back Pillow */}
        <rect x="29" y="45.5" width="20" height="14" fill="url(#pillowGrad)" rx="2.5" />
        <path d="M 38 45.8 A 12 12 0 0 1 38 59" stroke="#9C6036" strokeWidth="0.5" opacity="0.25" fill="none" />
        
        {/* Right Back Pillow */}
        <rect x="51" y="45.5" width="20" height="14" fill="url(#pillowGrad)" rx="2.5" />
        <path d="M 60 45.8 A 12 12 0 0 1 60 59" stroke="#9C6036" strokeWidth="0.5" opacity="0.25" fill="none" />

        {/* Seat Cushions */}
        {/* Left Seat Cushion */}
        <rect x="26.5" y="57" width="23" height="6.5" fill="url(#cushionGrad)" rx="1.5" />
        <rect x="27.5" y="57.5" width="21" height="1.2" fill="#FFE5CC" opacity="0.32" rx="0.5" />

        {/* Right Seat Cushion */}
        <rect x="50.5" y="57" width="23" height="6.5" fill="url(#cushionGrad)" rx="1.5" />
        <rect x="51.5" y="57.5" width="21" height="1.2" fill="#FFE5CC" opacity="0.32" rx="0.5" />

        {/* Armrests cushions (Overhang blocks) */}
        {/* Left Armrest Cushion */}
        <rect x="20" y="51.5" width="7" height="12.5" fill="url(#cushionGrad)" rx="1.2" />
        {/* Left Armrest Wood Plate accent */}
        <rect x="19.5" y="49.5" width="8" height="2.2" fill="#3D1E0B" rx="0.5" />
        <rect x="20" y="49.7" width="7" height="0.6" fill="#8C5C3D" rx="0.2" />

        {/* Right Armrest Cushion */}
        <rect x="73" y="51.5" width="7" height="12.5" fill="url(#cushionGrad)" rx="1.2" />
        {/* Right Armrest Wood Plate accent */}
        <rect x="72.5" y="49.5" width="8" height="2.2" fill="#3D1E0B" rx="0.5" />
        <rect x="73" y="49.7" width="7" height="0.6" fill="#8C5C3D" rx="0.2" />
      </g>
    </svg>
  );
}

interface BvsLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'icon' | 'horizontal' | 'stacked' | 'showcase';
  colorMode?: 'dark' | 'light' | 'gold';
}

export default function BvsLogo({ 
  className = '', 
  size = 44, 
  variant = 'icon',
  colorMode = 'dark' 
}: BvsLogoProps) {
  
  if (variant === 'icon') {
    return <BvsMonogramIcon size={size} colorMode={colorMode} className={className} />;
  }

  const walnutColor = "#A56A2B";
  const charcoalColor = "#2B2623";
  const champagneColor = "#D8B48A";
  const ivoryColor = "#F7F3EE";

  const isLight = colorMode === 'light';
  const isGold = colorMode === 'gold';

  if (variant === 'horizontal') {
    // Dynamic text sizes proportional to the passed size
    const sizeNumber = Number(size) || 44;
    const titleSize = sizeNumber >= 50 ? '20px' : (sizeNumber >= 42 ? '17px' : '15px');
    const subTitleSize = sizeNumber >= 50 ? '9.5px' : (sizeNumber >= 42 ? '8.5px' : '7.5px');

    return (
      <div className={`flex items-center gap-3 sm:gap-4 select-none shrink-0 ${className}`}>
        <BvsMonogramIcon size={sizeNumber} colorMode={colorMode} />
        <div className="flex flex-col text-left whitespace-nowrap">
          <span 
            className="font-serif font-semibold leading-none tracking-tight whitespace-nowrap"
            style={{ 
              color: isLight ? ivoryColor : (isGold ? champagneColor : charcoalColor),
              fontSize: titleSize
            }}
          >
            BVS Enterprises
          </span>
          <span 
            className="font-manrope font-semibold tracking-[0.14em] mt-1.5 block uppercase whitespace-nowrap"
            style={{ 
              color: isLight ? champagneColor : walnutColor,
              fontSize: subTitleSize
            }}
          >
            WOODCRAFT SHOWROOM • SINCE 2008
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
        <BvsMonogramIcon size={size} colorMode={colorMode} />
        <div className="flex flex-col items-center">
          <span 
            className="font-serif font-semibold leading-none tracking-tight"
            style={{ 
              color: isLight ? ivoryColor : (isGold ? champagneColor : charcoalColor),
              fontSize: '23px'
            }}
          >
            BVS Enterprises
          </span>
          <span 
            className="font-manrope font-semibold tracking-[0.16em] mt-2.5 block uppercase text-[10px]"
            style={{ 
              color: isLight ? champagneColor : walnutColor
            }}
          >
            WOODCRAFT SHOWROOM • SINCE 2008
          </span>
        </div>
      </div>
    );
  }

  // Showcase layout to visualize several lockups in different premium settings
  return (
    <div className="w-full space-y-12">
      <div className="text-center space-y-2">
        <span className="text-xs font-manrope font-semibold tracking-[0.08em] uppercase text-[#A56A2B]">
          Identity Architecture
        </span>
        <h3 className="font-serif font-semibold text-3xl sm:text-4xl text-[#2B2623] tracking-[-0.02em] leading-[1.1]">
          Brand Identity System & Signage Blueprints
        </h3>
        <p className="text-xs text-[#6B6B6B] font-sans max-w-xl mx-auto leading-relaxed">
          Crafted in alignment with the guidelines of modern luxury ateliers. This official badge features a sleek 3D-effect warm luxury sofa lockup and high-contrast typography.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mockup 1: Classic Web Header Lockup */}
        <div className="bg-[#FAF8F5]/90 p-8 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-widest text-[#A56A2B]">Variation 01 // Digital Core</span>
            <h4 className="font-serif font-semibold text-lg text-stone-900 leading-tight">Horizontal Signature Lockup</h4>
            <p className="text-xs text-[#6B6B6B] font-sans leading-relaxed">
              Standard header signature lockup, perfectly balanced with the new circular sofa emblem and sophisticated editorial corporate type.
            </p>
          </div>
          <div className="bg-white/80 border border-stone-250 py-8 px-6 rounded-xl flex items-center justify-center">
            {/* Live horizontal logo */}
            <BvsLogo variant="horizontal" size={54} colorMode="dark" />
          </div>
          <span className="text-[9px] font-mono text-stone-400 block tracking-wider text-left">APPLICATION: PHYSICAL WEBSITE HEADER & SHOWROOM INVENTORY FOOTER</span>
        </div>

        {/* Mockup 2: The Atelier Gold Seal */}
        <div className="bg-stone-950 p-8 rounded-2xl border border-stone-850 space-y-4 flex flex-col justify-between text-white">
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-widest text-[#D8B48A]">Variation 02 // Heritage Seal</span>
            <h4 className="font-serif font-semibold text-lg text-white leading-tight">Artisanal 3D Icon Badge</h4>
            <p className="text-xs text-[#a5a58d] font-sans leading-relaxed">
              An isolated, highly balanced emblem designed for circular brass fittings, leather upholstery embossing, and custom-embossed woodcraft serial tags.
            </p>
          </div>
          <div className="bg-[#1A1917] border border-stone-900 py-6 px-6 rounded-xl flex items-center justify-center">
            <BvsLogo variant="icon" size={82} colorMode="dark" />
          </div>
          <span className="text-[9px] font-mono text-stone-500 block tracking-wider text-left">APPLICATION: SOFA UNDERCARRIAGE BRASS CHASSIS PLATES & LEATHER CERTIFICATES</span>
        </div>

        {/* Mockup 3: Premium Editorial Stacked Card */}
        <div className="bg-[#1D1C1A] text-stone-100 p-8 rounded-2xl border border-stone-800 space-y-6 text-left flex flex-col justify-between">
          <div className="space-y-1.5">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-widest text-[#D8B48A]">Variation 03 // Showroom Signage</span>
            <h4 className="font-serif font-semibold text-lg text-[#F7F3EE] leading-tight">Stacked Centered Crest</h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              Designed for luxury storefront glass graphics and high-end exterior signage, optimized for maximum legibility and architectural symmetry.
            </p>
          </div>
          <div className="bg-[#2B2623] border border-stone-850 p-8 rounded-xl flex flex-col items-center justify-center shadow-md">
            <BvsLogo variant="stacked" size={62} colorMode="light" />
          </div>
          <span className="text-[9px] font-mono text-stone-500 block tracking-wider">APPLICATION: EXTERIOR ENTRANCE GLASS WRITING & MASTER CATALOG COVERS</span>
        </div>

        {/* Mockup 4: Raw Carpenter Branding Iron */}
        <div className="bg-[#FAF8F5]/90 p-8 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-1.5 text-left">
            <span className="text-[10px] font-manrope font-bold uppercase tracking-widest text-[#A56A2B]">Variation 04 // Artisanal Stamp</span>
            <h4 className="font-serif font-semibold text-lg text-stone-900 leading-tight">Minimalist Line Badge</h4>
            <p className="text-xs text-[#6B6B6B] font-sans leading-relaxed">
              A high-contrast monochrome rendering mimicking a carpentry heat-stamp burned into raw solid wood undercarriages of luxury teak cabinetry since 2008.
            </p>
          </div>
          <div className="bg-[#EAE5DF] border border-dashed border-stone-400 py-8 px-6 rounded-xl flex items-center justify-center opacity-85 rotate-[-0.5deg]">
            <div className="border border-stone-600/30 p-2.5 rounded-lg flex flex-col items-center gap-2">
              <BvsMonogramIcon size={54} colorMode="dark" className="grayscale opacity-90" />
              <span className="font-mono text-[9px] text-stone-800 tracking-widest select-none font-bold">BVS CRAFT APPROVED // OUTLET</span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-stone-400 block tracking-wider text-left">APPLICATION: THERMAL BRANDING IRON PRESSED DIRECTLY INTO TEAKWOOD CHASSIS</span>
        </div>

      </div>
    </div>
  );
}
