import React, { useState } from 'react';
import { Product, ProductVariant, ProductInquiry } from '../types';
import { X, MessageSquare, Check, Eye, Info, Sparkles, Award, Truck, Wrench } from 'lucide-react';

interface ProductDetailsModalProps {
  product: Product;
  variants: ProductVariant[];
  relatedProducts: Product[];
  onClose: () => void;
  onViewProduct: (product: Product) => void;
  onSubmitInquiry: (inquiry: Omit<ProductInquiry, 'id' | 'created_at'>) => void;
}

export default function ProductDetailsModal({
  product,
  variants,
  relatedProducts,
  onClose,
  onViewProduct,
  onSubmitInquiry
}: ProductDetailsModalProps) {
  const [activeImage, setActiveImage] = useState(product.images[0] || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80');
  const [selectedVariants, setSelectedVariants] = useState<{ [key: string]: ProductVariant }>({});
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState(`Hello BVS Enterprises, I am interested in your "${product.name}" and would like to receive pricing variants, delivery timeline, and customization availability for Tirupati.`);
  const [submitted, setSubmitted] = useState(false);

  // Group variants by type, e.g. 'Material', 'Size'
  const productVariants = variants.filter(v => v.product_id === product.id);
  const variantGroups = productVariants.reduce((acc, curr) => {
    if (!acc[curr.variant_type]) {
      acc[curr.variant_type] = [];
    }
    acc[curr.variant_type].push(curr);
    return acc;
  }, {} as { [key: string]: ProductVariant[] });

  // Calculate customized price
  const basePrice = product.sale_price !== undefined ? product.sale_price : product.price;
  const additionalCost = (Object.values(selectedVariants) as ProductVariant[]).reduce((sum, v) => sum + v.additional_price, 0);
  const finalPrice = basePrice + additionalCost;

  // Set initial selected variant if available
  React.useEffect(() => {
    const initialSelected: { [key: string]: ProductVariant } = {};
    Object.entries(variantGroups).forEach(([type, group]) => {
      if (group.length > 0) {
        initialSelected[type] = group[0];
      }
    });
    setSelectedVariants(initialSelected);
  }, [product.id]);

  const handleSelectVariant = (type: string, variant: ProductVariant) => {
    setSelectedVariants(prev => ({
      ...prev,
      [type]: variant
    }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !mobileNumber) {
      alert('Please fill out your name and mobile phone number.');
      return;
    }

    const varDetails = (Object.values(selectedVariants) as ProductVariant[])
      .map(v => `${v.variant_type}: ${v.variant_name}`)
      .join(', ');

    const fullMessage = `${inquiryMessage}\n\n[SELECTED VARIANTS: ${varDetails || 'Standard Setup'}] \n[Est. Price: ₹${finalPrice.toLocaleString('en-IN')}]`;

    onSubmitInquiry({
      customer_name: customerName,
      mobile_number: mobileNumber,
      product_id: product.id,
      message: fullMessage,
      inquiry_status: 'New'
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCustomerName('');
      setMobileNumber('');
    }, 4500);
  };

  const handleWhatsAppRedirect = () => {
    const varDetails = (Object.values(selectedVariants) as ProductVariant[])
      .map(v => `${v.variant_type}: ${v.variant_name}`)
      .join(', ');

    const text = encodeURIComponent(
      `Hello BVS Enterprises, I am visiting your website and I am interested in purchasing:\n\n` +
      `Product: *${product.name}*\n` +
      `Brand: ${product.brand}\n` +
      `Material Selection: ${varDetails || product.material}\n` +
      `Est. Quote Requested: ₹${finalPrice.toLocaleString('en-IN')}\n\n` +
      `Please contact me with available wood polish colors or catalog samples, and shipping timescales to my location.`
    );
    window.open(`https://wa.me/918520856709?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/40 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-[16px] w-full max-w-5xl shadow-[0_15px_40px_rgba(139,79,36,0.12)] overflow-hidden max-h-[92vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header (Floating close button) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#8B4F24] text-white hover:bg-[#5C3315] rounded-full p-2.5 transition-all duration-300 cursor-pointer shadow-sm"
          title="Close presentation"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content Box */}
        <div className="overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
            
            {/* Column Left: Media Showcase */}
            <div className="space-y-[24px]">
              <div className="relative aspect-video sm:aspect-square lg:aspect-4/3 rounded-[16px] overflow-hidden bg-[#FAF8F5] border border-black/[0.08]">
                <img
                  src={activeImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all animate-fade-in"
                />
              </div>

              {/* Thumbnails Row */}
              <div className="flex gap-[12px] overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 aspect-square rounded-[8px] overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-[#8B4F24] scale-95 shadow-sm' : 'border-black/[0.08] hover:border-[#8B4F24]'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* High-End Technical Spec Box */}
              <div className="bg-[#FAF8F5] p-5 rounded-[12px] border border-black/[0.08] text-xs text-[#222222] space-y-[12px]">
                <h4 className="font-serif font-semibold text-[#222222] uppercase tracking-wider flex items-center gap-1.5 border-b border-black/[0.04] pb-2">
                  <Info className="h-4 w-4 text-[#8B4F24]" />
                  Blueprint Timber Specs
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <span className="block text-[#6F6F6F] font-sans text-[9px] uppercase tracking-wider">Base material</span>
                    <span className="font-bold font-serif text-[#222222] text-[11.5px]">{product.material}</span>
                  </div>
                  <div>
                    <span className="block text-[#6F6F6F] font-sans text-[9px] uppercase tracking-wider">Dimensions (Std)</span>
                    <span className="font-bold font-serif text-[#222222] text-[11.5px]">{product.dimensions}</span>
                  </div>
                  <div>
                    <span className="block text-[#6F6F6F] font-sans text-[9px] uppercase tracking-wider">Brand Registry</span>
                    <span className="font-bold font-serif text-[#222222] text-[11.5px]">{product.brand}</span>
                  </div>
                  <div>
                    <span className="block text-[#6F6F6F] font-sans text-[9px] uppercase tracking-wider">Service Warranty</span>
                    <span className="font-bold font-serif text-[#222222] text-[11.5px]">{product.warranty_details}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right: Informational Context & Action Forms */}
            <div className="space-y-[32px] text-left">
              
              {/* Product Header */}
              <div className="space-y-[12px]">
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#8B4F24] bg-[#FAF8F5] border border-black/[0.08] px-3 py-1 rounded-full uppercase">
                  {product.brand} Showroom Range
                </span>
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-[#222222]">
                  {product.name}
                </h2>
                <p className="text-xs text-[#6F6F6F] font-mono">
                  Blueprint Serial: BVS-PR-{product.id.toUpperCase()}
                </p>
              </div>

              {/* Price display with real-time variants addition */}
              <div className="bg-[#8B4F24] p-5 rounded-[12px] text-white flex justify-between items-center shadow-md">
                <div>
                  <span className="text-[10px] text-[#FAF8F5]/85 uppercase tracking-widest block font-sans font-bold">
                    Showroom Estimate Request
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-2xl font-bold font-serif text-white">
                      ₹{finalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[#FAF8F5]/70 text-[10px] font-sans">ex. GST</span>
                  </div>
                </div>
                <div className="text-right">
                  {product.emi_available && (
                    <span className="bg-white/10 text-white text-[10px] font-sans font-semibold border border-white/20 px-2.5 py-1 rounded-full block">
                      Easy EMI Plan
                    </span>
                  )}
                  <span className="text-[10px] text-[#FAF8F5] font-sans block mt-1.5 font-bold">
                    ● Direct Showroom Price
                  </span>
                </div>
              </div>

              {/* Rich Long Description */}
              <p className="text-[14px] text-[#6F6F6F] leading-[1.8] font-sans font-normal">
                {product.description}
              </p>

              {/* Variants Selector */}
              {Object.keys(variantGroups).length > 0 && (
                <div className="space-y-[16px]">
                  <h3 className="font-serif font-semibold text-sm text-[#222222] uppercase tracking-wider border-b border-black/[0.06] pb-1">
                    Select Wood polish & Size option
                  </h3>
                  {Object.entries(variantGroups).map(([type, group]) => (
                    <div key={type} className="space-y-2">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-[#6F6F6F] block font-bold">
                        {type}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {group.map((v) => {
                          const isSelected = selectedVariants[type]?.id === v.id;
                          return (
                            <button
                              key={v.id}
                              onClick={() => handleSelectVariant(type, v)}
                              className={`px-3 py-2 text-xs rounded-full font-sans font-bold transition-all text-left flex items-center justify-between gap-3 border cursor-pointer ${
                                isSelected
                                  ? 'bg-[#8B4F24] border-[#8B4F24] text-white shadow-sm'
                                  : 'bg-white border-black/[0.08] text-[#6F6F6F] hover:border-[#8B4F24]'
                              }`}
                            >
                              <span>{v.variant_name}</span>
                              {v.additional_price !== 0 && (
                                <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#FAF8F5]' : 'text-[#6F6F6F]'}`}>
                                  {v.additional_price > 0 ? `+ ₹${v.additional_price}` : `- ₹${Math.abs(v.additional_price)}`}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Special Facilities Grid */}
              <div className="grid grid-cols-3 gap-3 border-y border-black/[0.06] py-5 text-center">
                <div className="flex flex-col items-center">
                  <Award className="h-5 w-5 text-[#8B4F24] mb-1" />
                  <span className="text-[11px] text-[#8B4F24] font-bold">100% Seasoned</span>
                  <span className="text-[9px] text-[#6F6F6F] font-sans uppercase">Termite Treated</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="h-5 w-5 text-[#8B4F24] mb-1" />
                  <span className="text-[11px] text-[#8B4F24] font-bold">Free Shipping</span>
                  <span className="text-[9px] text-[#6F6F6F] font-sans uppercase">Tirupati District</span>
                </div>
                <div className="flex flex-col items-center">
                  <Wrench className="h-5 w-5 text-[#8B4F24] mb-1" />
                  <span className="text-[11px] text-[#8B4F24] font-bold">Free Assembly</span>
                  <span className="text-[9px] text-[#6F6F6F] font-sans uppercase">By Carpenter Leads</span>
                </div>
              </div>

              {/* Action Column: Submission & Direct WhatsApp */}
              <div className="space-y-[24px] pt-1">
                <div className="bg-[#FAF8F5] p-[24px] rounded-[12px] border border-black/[0.08]">
                  <h3 className="font-serif font-semibold text-[#222222] text-sm flex items-center gap-1.5 uppercase tracking-wider mb-3">
                    Request Customization Quote
                  </h3>
                  
                  {submitted ? (
                    <div className="bg-emerald-50 text-emerald-800 p-5 rounded-[12px] border border-emerald-200 text-xs space-y-1">
                      <span className="font-bold font-serif flex items-center gap-1.5 text-sm text-emerald-900">
                        <Check className="h-4 w-4" /> Inquiry Registered Successfully!
                      </span>
                      <p className="font-sans text-stone-600">
                        Thank you. Your request is cataloged. Our chief wood consultant will message you within 3 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-[16px]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        <div className="space-y-[8px]">
                          <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Your Full Name:</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Naidu"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full text-xs bg-white border border-black/[0.08] hover:bg-stone-50/30 focus:bg-white rounded-xl p-3 focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none text-[#222222]"
                          />
                        </div>
                        <div className="space-y-[8px]">
                          <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Mobile Contact Phone:</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9246990000"
                            pattern="[0-9]{10}"
                            title="10 digit phone number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="w-full text-xs bg-white border border-black/[0.08] hover:bg-stone-50/30 focus:bg-white rounded-xl p-3 focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none text-[#222222]"
                          />
                        </div>
                      </div>

                      <div className="space-y-[8px]">
                        <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Your Customization Requirements:</label>
                        <textarea
                          rows={2}
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                          className="w-full text-xs bg-white border border-black/[0.08] hover:bg-stone-50/30 focus:bg-white rounded-xl p-3 focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none font-sans text-[#222222]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-base btn-primary w-full"
                      >
                        Submit Official Inquiry
                      </button>
                    </form>
                  )}
                </div>

                {/* Direct Showroom WhatsApp Option */}
                <div className="text-center space-y-3">
                  <span className="text-[10px] text-[#6F6F6F] block font-sans uppercase tracking-widest font-bold">
                    OR REQUEST FASTER CONFIRMATION ON WHATSAPP
                  </span>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="btn-base btn-secondary w-full gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Instant Showroom WhatsApp Dispatch</span>
                  </button>
                  <span className="text-[11px] text-[#8B4F24] font-bold block">
                    💬 Prefills selected variants to quote directly!
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Related Products Showcase */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-black/[0.06]">
              <h3 className="font-serif font-semibold text-lg text-[#222222] uppercase tracking-tight mb-5">
                Related Showroom Collection
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onViewProduct(p);
                      setActiveImage(p.images[0]);
                    }}
                    className="cursor-pointer group bg-[#FAF8F5] border border-black/[0.08] hover:bg-white hover:border-[#8B4F24] p-3 text-center rounded-[16px] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="aspect-video sm:aspect-square overflow-hidden bg-white rounded-[12px] border border-black/[0.04]">
                      <img src={p.images[0]} alt={p.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                    </div>
                    <div className="p-2 space-y-1">
                      <span className="text-[8.5px] uppercase tracking-wider font-bold font-sans text-[#8B4F24] block">
                        {p.brand}
                      </span>
                      <h4 className="text-xs font-serif font-bold text-[#222222] line-clamp-1 group-hover:text-[#8B4F24] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-xs text-[#8B4F24] font-sans font-bold">
                        ₹{(p.sale_price || p.price).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
