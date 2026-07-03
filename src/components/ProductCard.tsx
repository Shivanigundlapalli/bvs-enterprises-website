import React from 'react';
import { Product } from '../types';
import { Truck, Sparkles, MessageCircle, Eye, Award, Ruler } from 'lucide-react';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onViewDetails: (product: Product) => void;
  categoryName?: string;
}

export default function ProductCard({ product, onViewDetails, categoryName }: ProductCardProps) {
  const isSale = product.sale_price !== undefined && product.sale_price < product.price;

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello BVS Enterprises,\n` +
      `I would like to enquire about this product:\n` +
      `• *${product.name}*\n` +
      `• Wood/Material: ${product.material}\n` +
      `• Dimensions: ${product.dimensions || 'Standard'}\n\n` +
      `Please share current showroom price and delivery details. Thank you.`
    );
    window.open(`https://wa.me/918520856709?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[16px] border border-[#8B4F24]/15 overflow-hidden hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] hover:border-[#8B4F24]/40 hover:-translate-y-[2px] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] flex flex-col group h-full text-left">
      {/* Product Image Stage */}
      <div className="relative aspect-square overflow-hidden bg-stone-50 shrink-0">
        <img
          src={product.images[0] || '/carousel-1.jpg'}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.featured && (
            <span className="bg-[#8B4F24] text-white font-serif font-bold text-[9px] uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm flex items-center gap-1">
              <Award className="h-2.5 w-2.5 shrink-0" />
              <span>Premium</span>
            </span>
          )}
          {isSale && (
            <span className="bg-[#8B4F24]/10 text-[#8B4F24] border border-[#8B4F24]/20 font-serif font-bold text-[9px] uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm">
              OFFER
            </span>
          )}
        </div>

        {/* Customization and Delivery Quick Indicators */}
        <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
          {product.customization_available && (
            <span className="bg-[#FAF8F5]/90 text-[#8B4F24] text-[8.5px] font-sans font-bold tracking-wide py-1 px-2.5 rounded-full shadow-sm flex items-center gap-1" title="Custom Timber/Color Options Available">
              <Ruler className="h-2.5 w-2.5 shrink-0 text-[#8B4F24]" />
              <span>Custom</span>
            </span>
          )}
          {product.delivery_available && (
            <span className="bg-[#FAF8F5]/90 text-[#222222] text-[8.5px] font-sans font-bold tracking-wide py-1 px-2.5 rounded-full shadow-sm flex items-center gap-1" title="Free Doorstep Delivery in Tirupati">
              <Truck className="h-2.5 w-2.5 shrink-0 text-[#222222]" />
              <span>Delivery</span>
            </span>
          )}
        </div>
      </div>

      {/* Info Body */}
      <div className="p-[24px] flex flex-col flex-grow">
        {/* Brand and category info */}
        <div className="flex justify-between items-center mb-[12px]">
          <span className="text-[10px] uppercase tracking-widest font-sans text-[#8B4F24] font-bold">
            {product.brand}
          </span>
          {categoryName && (
            <span className="text-[10px] bg-[#FAF8F5] border border-black/[0.08] text-[#222222] px-2.5 py-0.5 rounded-full font-sans font-semibold leading-relaxed">
              {categoryName}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif font-semibold text-[18px] text-[#222222] line-clamp-1 group-hover:text-[#8B4F24] transition-colors cursor-pointer" onClick={() => onViewDetails(product)}>
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-[14px] text-[#6F6F6F] line-clamp-2 mt-[8px] leading-[1.6] font-sans mb-[16px] flex-grow">
          {product.short_description}
        </p>

        {/* Spec line */}
        <div className="border-t border-black/[0.06] pt-[16px] mb-[20px] grid grid-cols-2 gap-[12px] text-[11px] font-sans text-[#6F6F6F]">
          <div>
            <span className="block text-stone-400 font-sans uppercase text-[8px] tracking-wider leading-none mb-1">Timber Base:</span>
            <span className="line-clamp-1 font-semibold text-[#222222]">{product.material}</span>
          </div>
          <div>
            <span className="block text-stone-400 font-sans uppercase text-[8px] tracking-wider leading-none mb-1">Dimensions:</span>
            <span className="line-clamp-1 font-semibold text-[#8B4F24]">{product.dimensions || "Customizable"}</span>
          </div>
        </div>

        {/* Lead Generation Action Buttons */}
        <div className="mt-auto pt-[16px] border-t border-black/[0.06] flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-[#FAF8F5] border border-black/[0.08] hover:bg-[#8B4F24] hover:text-white text-[#222222] text-[10.5px] font-sans font-bold uppercase tracking-wider py-[10px] px-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 active:scale-97"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>View Details</span>
          </button>
          
          <button
            onClick={handleWhatsAppEnquiry}
            className="flex-1 bg-[#075E54] hover:bg-[#128C7E] text-white text-[10.5px] font-sans font-bold uppercase tracking-wider py-[10px] px-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 active:scale-97 border-none"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}
