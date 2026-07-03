import React, { useState } from 'react';
import { CustomFurnitureRequest } from '../types';
import { Upload, HelpCircle, MessageSquare, Check, Sparkles, Sliders, ChevronRight, Award, Ruler } from 'lucide-react';

interface CustomizerFormProps {
  onSubmitRequest: (request: Omit<CustomFurnitureRequest, 'id' | 'status' | 'created_at'>) => void;
}

export default function CustomizerForm({ onSubmitRequest }: CustomizerFormProps) {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [productType, setProductType] = useState('King-Size Cot with Side Cabinets');
  const [customSize, setCustomSize] = useState('78 inches width, 84 inches length, 48 inches headboard');
  const [customMaterial, setCustomMaterial] = useState('Burmese Teak Wood (Grade-A)');
  const [customColor, setCustomColor] = useState('Rich Walnut Melamine Semi-Gloss');
  const [customDesign, setCustomDesign] = useState('Classic vintage royal headboard carving with storage hydraulic lifts underneath.');
  const [finishRequirements, setFinishRequirements] = useState('Melamine Matte Spray');
  const [specialRequirements, setSpecialRequirements] = useState('Require 2 drawers adjacent to headpost for smart cables.');
  const [message, setMessage] = useState('Please review this plan and send a senior master carpenter with samples to my home near Tirumala Bypass Road.');
  const [referenceImageUrl, setReferenceImageUrl] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [validationError, setValidationError] = useState('');

  const productCoeffs: { [key: string]: number } = {
    'King-Size Cot with Side Cabinets': 45000,
    'L-Shape Executive Office Desk': 18000,
    '3-Door Master Plywood Wardrobe': 32000,
    '8-Seater Heavy Dining Table Set': 55000,
    'Chesterfield 3+1+1 Sofa Set': 50000,
    'Custom Kitchen Cabinet Set': 65000
  };

  const materialCoeffs: { [key: string]: number } = {
    'Burmese Teak Wood (Grade-A)': 1.4,
    'Seasoned Rosewood (Sheesham)': 1.25,
    'BWR Marine Grade Plywood (Century)': 1.1,
    'Standard Particle Board / Engineered': 0.8
  };

  const baseVal = productCoeffs[productType] || 25000;
  const matMultiplier = materialCoeffs[customMaterial] || 1.0;
  const estimatedMin = Math.round(baseVal * matMultiplier);
  const estimatedMax = Math.round(baseVal * matMultiplier * 1.18);

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setReferenceImageUrl(url);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setReferenceImageUrl(url);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    
    if (!customerName.trim() || !mobileNumber.trim()) {
      setValidationError('Please state your full name and 10-digit mobile phone number for site visit authorization.');
      return;
    }

    if (!/^[0-9]{10}$/.test(mobileNumber.trim().replace(/\s+/g, ''))) {
      setValidationError('Please enter a valid 10-digit mobile phone number (e.g. 9848022338).');
      return;
    }

    onSubmitRequest({
      customer_name: customerName,
      mobile_number: mobileNumber,
      product_type: productType,
      custom_size: customSize,
      custom_material: customMaterial,
      custom_color: customColor,
      custom_design: customDesign,
      finish_requirements: finishRequirements,
      special_requirements: specialRequirements,
      reference_image_url: referenceImageUrl || 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&auto=format&fit=crop&q=80',
      message: message
    });

    setIsDone(true);
    setTimeout(() => {
      setIsDone(false);
      setCustomerName('');
      setMobileNumber('');
    }, 5000);
  };

  const handleWhatsAppCustom = () => {
    const text = encodeURIComponent(
      `Hello BVS Enterprises,\n` +
      `I would like to request a Custom Furniture quotation/consultation:\n\n` +
      `• Name: *${customerName || 'Customer'}*\n` +
      `• Contact: ${mobileNumber || 'Interested Client'}\n` +
      `• Product Requested: ${productType}\n` +
      `• Size Specs: ${customSize}\n` +
      `• Material Preference: ${customMaterial}\n` +
      `• Color Tone: ${customColor}\n` +
      `• Estimated Web Quote: ₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}\n\n` +
      `Please schedule a surveyor to collect exact measurements at my property.`
    );
    window.open(`https://wa.me/918520856709?text=${text}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-start text-left">
      
      {/* Column Left (Custom Craftsmanship introduction) */}
      <div className="lg:col-span-12 xl:col-span-5 space-y-[24px]">
        
        {/* Info header */}
        <div className="bg-white text-[#222222] p-[24px] md:p-[32px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] space-y-[20px] relative overflow-hidden group transform cursor-pointer">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#8B4F24]/5 rounded-full"></div>
          <div className="bg-[#8B4F24]/10 text-[#8B4F24] p-2.5 rounded-full w-fit inline-flex border border-[#8B4F24]/10">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-2xl text-[#222222] group-hover:text-[#8B4F24] transition-colors">
              BVS Direct Carpentry
            </h3>
            <p className="text-xs text-[#8B4F24] uppercase font-sans tracking-widest mt-1 block font-semibold">
              Auto-Carpenter services Since 2008
            </p>
          </div>
          <p className="text-[#6F6F6F] text-[14px] leading-[1.8] font-sans font-normal">
            Can't find the exact measurements for your luxury villa rooms or office cabin partitions? Since established in 2008, BVS Enterprises employs 14 senior master woodcraft artisans providing custom furniture blueprints, seasoned woods, and precise installations.
          </p>

          {/* Benefits Bullet Stack */}
          <div className="space-y-[16px] pt-[20px] border-t border-[#8B4F24]/15">
            <div className="flex gap-[12px] text-xs">
              <span className="text-[#8B4F24] text-sm">✔</span>
              <div className="space-y-0.5">
                <strong className="block text-[#222222] font-serif font-semibold text-[14px]">100% Genuine Burma Timber</strong>
                <span className="text-[#6F6F6F] text-[12px] font-sans font-normal leading-relaxed">Durable chemically treated rose, teak, and neem wood options.</span>
              </div>
            </div>
            <div className="flex gap-[12px] text-xs">
              <span className="text-[#8B4F24] text-sm">✔</span>
              <div className="space-y-0.5">
                <strong className="block text-[#222222] font-serif font-semibold text-[14px]">Free Site Surveying & Dimensioning</strong>
                <span className="text-[#6F6F6F] text-[12px] font-sans font-normal leading-relaxed">Our executive visits your flat in Tirupati/Chittoor to lock dimensions.</span>
              </div>
            </div>
            <div className="flex gap-[12px] text-xs">
              <span className="text-[#8B4F24] text-sm">✔</span>
              <div className="space-y-0.5">
                <strong className="block text-[#222222] font-serif font-semibold text-[14px]">No Dealer Margins</strong>
                <span className="text-[#6F6F6F] text-[12px] font-sans font-normal leading-relaxed">Saves up to 35% compared to online corporate furniture portals.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Live Valuation Panel */}
        <div className="bg-[#FAF8F5] p-[24px] md:p-[32px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] space-y-[20px] transform cursor-pointer">
          <div className="flex items-center gap-1.5 border-b border-black/[0.06] pb-[12px]">
            <Ruler className="h-4.5 w-4.5 text-[#8B4F24]" />
            <h4 className="font-serif font-semibold text-[#8B4F24] text-[16px] uppercase tracking-wide">
              Live Carpentry Cost Estimator
            </h4>
          </div>
          <p className="text-[14px] text-[#6F6F6F] font-sans leading-[1.8] font-normal">
            Pricing fluctuates dynamically according to wood grade and volume dimensions. Toggle selector variants on the right to build custom lumber budget:
          </p>
          <div className="bg-white p-[20px] rounded-[12px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/30 hover:-translate-y-[1px] transition-all duration-300 space-y-[12px]">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[10px] font-sans uppercase text-[#8B4F24] font-bold tracking-wider">Selected Base Unit</span>
              <span className="font-bold text-[#222222]">{productType}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-[10px] font-sans uppercase text-[#8B4F24] font-bold tracking-wider">Timber Multiplier</span>
              <span className="font-semibold text-[#222222]">{customMaterial}</span>
            </div>
            <div className="border-t border-dashed border-black/[0.08] pt-[12px] flex justify-between items-center text-xs">
              <span className="font-bold text-[#222222] font-serif">Simulated Range:</span>
              <div className="text-right">
                <span className="text-[20px] font-serif font-bold text-[#8B4F24] block leading-none">
                  ₹{estimatedMin.toLocaleString('en-IN')} - ₹{estimatedMax.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#6F6F6F] font-sans mt-1 block">approximate showroom quotation</span>
              </div>
            </div>
          </div>
          <div className="text-[12px] text-[#6F6F6F] bg-white p-3.5 rounded-[12px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/30 hover:-translate-y-[1px] transition-all duration-300 italic font-sans flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-[#8B4F24] shrink-0" />
            <span>Final bills include door-step transit & carpentry leveling at your room. No hidden charges!</span>
          </div>
        </div>

      </div>

      {/* Column Right (Custom Form Inputs) */}
      <div className="lg:col-span-12 xl:col-span-7 bg-white p-[24px] md:p-[32px] rounded-[16px] border border-[#8B4F24]/15 hover:border-[#8B4F24]/40 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(139,79,36,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(139,79,36,0.02)] text-left">
        
        <div className="flex justify-between items-center border-b border-black/[0.06] pb-[16px] mb-[24px]">
          <div>
            <h3 className="font-serif font-semibold text-[20px] text-[#222222] tracking-tight">
              Customization Specifications
            </h3>
            <p className="text-[14px] text-[#6F6F6F] font-sans mt-0.5">
              Specify your timber type, lacquer finishing, and custom sizes.
            </p>
          </div>
          <Sliders className="h-5 w-5 text-[#8B4F24]" />
        </div>

        {isDone ? (
          <div className="bg-[#FAF8F5] text-[#222222] border border-black/[0.08] p-[24px] md:p-[32px] rounded-[16px] space-y-[16px]">
            <span className="text-lg font-bold font-serif flex items-center gap-2 text-[#8B4F24]">
              <Check className="h-5 w-5" /> Blueprints Recorded!
            </span>
            <p className="text-[14px] leading-[1.8] text-[#6F6F6F] font-sans font-normal">
              Thank you for trusting BVS Enterprises. Your architectural specifications wood requisition has been locked and recorded. Our chief procurement carpenter will call your mobile number to confirm custom templates, physical catalog colors, and schedule on-site flat measurement locks.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsAppCustom}
                className="btn-base btn-primary gap-2"
              >
                <MessageSquare className="h-4 w-4" /> Open WhatsApp Thread
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-[20px]">
            
            {validationError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3.5 rounded-xl font-sans flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}
            
            {/* Primary Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <div className="space-y-[8px]">
                <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Your Full Name (required)</label>
                <input
                  type="text"
                  required
                  pattern=".*\S.*"
                  placeholder="e.g. Anand Satyanand"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222]"
                />
              </div>
              <div className="space-y-[8px]">
                <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Your Mobile Phone (required)</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9848022338"
                  pattern="[0-9]{10}"
                  title="Ten digit mobile phone number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222]"
                />
              </div>
            </div>

            {/* Product Type Selection */}
            <div className="space-y-[8px]">
              <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Desired Furniture Type</label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222] font-semibold"
              >
                <option value="King-Size Cot with Side Cabinets">King-Size Teak Cot with Headboards</option>
                <option value="L-Shape Executive Office Desk">L-Shape Executive Office Manager Desk</option>
                <option value="3-Door Master Plywood Wardrobe">3-Door Heavy Bedroom Plywood Wardrobe</option>
                <option value="8-Seater Heavy Dining Table Set">8-Seater Heavy Duty Teak Dining Set</option>
                <option value="Chesterfield 3+1+1 Sofa Set">Chesterfield Living Room Sofa Set (Warm Fabric)</option>
                <option value="Custom Kitchen Cabinet Set">Modular Kitchen Marine plywood cupboards</option>
              </select>
            </div>

            {/* Specifications Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <div className="space-y-[8px]">
                <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Estimated Size Dimensions</label>
                <input
                  type="text"
                  required
                  value={customSize}
                  onChange={(e) => setCustomSize(e.target.value)}
                  placeholder="e.g. Width x Depth x Height (feet)"
                  className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222]"
                />
              </div>
              <div className="space-y-[8px]">
                <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Wood / Plank Base preference</label>
                <select
                  value={customMaterial}
                  onChange={(e) => setCustomMaterial(e.target.value)}
                  className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222] font-semibold"
                >
                  <option value="Burmese Teak Wood (Grade-A)">Burmese Teak Wood (Grade-A Premium)</option>
                  <option value="Seasoned Rosewood (Sheesham)">Seasoned Rosewood (Sheesham classic)</option>
                  <option value="BWR Marine Grade Plywood (Century)">BWR Marine Grade Plywood (Century Brand)</option>
                  <option value="Standard Particle Board / Engineered">Standard Particle Board / Engineered Woods</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <div className="space-y-[8px]">
                <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Color / Veneer Texture Tone</label>
                <input
                  type="text"
                  required
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  placeholder="e.g. Walnut finish, gloss charcoal, standard ivory"
                  className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222]"
                />
              </div>
              <div className="space-y-[8px]">
                <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Top Seal Polish Requirements</label>
                <input
                  type="text"
                  required
                  value={finishRequirements}
                  onChange={(e) => setFinishRequirements(e.target.value)}
                  placeholder="e.g. Melamine matte, High gloss poly, raw oil finish"
                  className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222]"
                />
              </div>
            </div>

            {/* Design summary */}
            <div className="space-y-[8px]">
              <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Primary Design style (vintage, sleek corporate, etc.)</label>
              <textarea
                rows={2}
                required
                value={customDesign}
                onChange={(e) => setCustomDesign(e.target.value)}
                placeholder="Briefly state patterns, curved corners, handles, or functional compartments desired..."
                className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none transition-all text-[#222222] font-sans"
              />
            </div>

            {/* Image Upload Stage */}
            <div className="space-y-[8px]">
              <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Reference design catalog snapshot</label>
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-[16px] p-6 text-center transition-all cursor-pointer relative ${
                  isDragOver ? 'border-[#8B4F24] bg-[#FAF8F5]' : 'border-black/[0.08] hover:border-[#8B4F24] bg-[#FAF8F5]/30'
                }`}
              >
                <input
                  type="file"
                  id="custom-file-upload"
                  accept="image/*"
                  onChange={handleImageFile}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-8 w-8 text-[#8B4F24]" />
                  <span className="text-xs font-sans font-bold text-[#222222]">Drag & Drop Catalog Photo, or click to choose file</span>
                  <span className="text-[10px] text-[#6F6F6F] font-sans">Supports JPEG, PNG up to 10MB</span>
                </div>
              </div>

              {referenceImageUrl && (
                <div className="flex items-center gap-3 bg-[#FAF8F5] p-2.5 rounded-[12px] border border-black/[0.08]">
                  <div className="w-12 h-12 rounded-[8px] bg-white overflow-hidden shrink-0 border border-black/[0.08]">
                    <img src={referenceImageUrl} alt="Reference Preview" className="w-full h-full object-cover animate-in fade-in" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-sans font-bold text-[#222222] block">Snapshot matched successfully!</span>
                    <span className="text-[10px] text-[#8B4F24] font-bold">Reference preview active</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setReferenceImageUrl('')}
                    className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 cursor-pointer bg-transparent border-none"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-[8px]">
              <label className="block text-[11px] font-sans text-[#8B4F24] uppercase tracking-widest font-bold">Notes / Shipping Address requirements</label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full text-xs border border-black/[0.08] bg-[#FAF8F5] hover:bg-stone-50/50 rounded-xl p-3.5 focus:bg-white focus:ring-2 focus:ring-[#8B4F24]/20 focus:border-[#8B4F24] focus:outline-none text-[#222222] font-sans"
              />
            </div>

            {/* Action buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
              <button
                type="submit"
                className="btn-base btn-primary"
              >
                Submit Customization Plan
              </button>
              
              <button
                type="button"
                onClick={handleWhatsAppCustom}
                className="btn-base btn-secondary gap-2"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600 group-hover:text-white" />
                <span>Submit via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
