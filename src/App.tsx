import React, { useState, useEffect } from 'react';
import {
  Category,
  Product,
  ProductVariant,
  ProductInquiry,
  CustomFurnitureRequest,
  GalleryItem,
  WebsiteSettings
} from './types';
import {
  INITIAL_CATEGORIES,
  INITIAL_PRODUCTS,
  INITIAL_VARIANTS,
  INITIAL_GALLERY
} from './initialData';

// Subcomponents
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import CustomizerForm from './components/CustomizerForm';
import AmbientVideoShowcase from './components/AmbientVideoShowcase';
import ShowroomLocation from './components/ShowroomLocation';
import HomeView from './components/HomeView';
import ContactView from './components/ContactView';
import AboutView from './components/AboutView';
import CategoriesView from './components/CategoriesView';

// Icons
import {
  Sparkles,
  Sofa,
  Award,
  ShieldCheck,
  Search,
  Filter,
  ArrowRight,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  ChevronRight,
  ChevronLeft,
  ThumbsUp,
  Inbox,
  Ruler,
  Maximize2,
  Minimize2,
  Users,
  Star,
  Heart,
  Compass,
  Briefcase,
  Calendar,
  BadgePercent,
  DoorOpen,
  Bed,
  BookOpen,
  Utensils,
  Chrome,
  Truck,
  DollarSign,
  HeartHandshake,
  Layers,
  Tv
} from 'lucide-react';

const DEFAULT_SETTINGS: WebsiteSettings = {
  phone_number: '+91 85208 56709',
  whatsapp_number: '918520856709',
  business_hours: 'Daily: 10:00 AM - 9:00 PM',
  google_maps_url: 'https://maps.app.goo.gl/9yB7gT7kZ9s',
  address: 'BVS Enterprises, Woodcraft Showroom, Tirupati Bypass Rd, opposite Reliance Petrol bunk, Tirupati, Andhra Pradesh 517501',
  address_landmark: 'Opposite Reliance Petrol Bunk, Tirupati Bypass Rd',
  social_facebook: 'https://facebook.com/bvsenterprises',
  social_instagram: 'https://www.instagram.com/bvsenterprises_?igsh=MWI4bHI4aXJvMG9neQ==',
  social_youtube: 'https://youtube.com/@bvsenterprisetirupati4596?si=bYlNMzfseS7Ux0T_',
  google_rating: '4.8',
  google_reviews_count: '1,420+ reviews'
};

const CAROUSEL_SLIDES = [
  {
    tagline: 'Luxury Teakwood Bedroom',
    headline: 'Handcrafted Beds & Royal Cots',
    description: 'Experience genuine Burmese Teakwood double beds, wardrobes, and designer cots seasoned to perfection for generational durability.',
    image: '/carousel-1.jpg',
    categoryTarget: 'cat-beds'
  },
  {
    tagline: 'Premium Wooden Sofa',
    headline: 'Royal Sofa Sets & Loungers',
    description: 'Plush cushions, detailed floral carving designs, and heavy-gauge rosewood frames crafted to bring ancestry prestige into your living room.',
    image: '/carousel-1.jpg',
    categoryTarget: 'cat-sofas'
  },
  {
    tagline: 'Modern Dining Set',
    headline: 'Exquisite Solid Dining Tables',
    description: 'Elegant 6-seater and 8-seater dining suites, incorporating thick tempered glass elements with heirloom Burma teak frameworks.',
    image: '/carousel-1.jpg',
    categoryTarget: 'cat-dining-tables'
  },
  {
    tagline: 'Office Furniture Collection',
    headline: 'Stately Executive Cabin Comfort',
    description: 'Equip your corporate space with posture-correct mesh swivel chairs, heavy solid-panel desk surfaces, and robust steel storage safes.',
    image: '/carousel-1.jpg',
    categoryTarget: 'cat-office-furniture'
  },
  {
    tagline: 'Custom Furniture Showcase',
    headline: 'Bespoke Carpentry Tailoring',
    description: 'We bring raw measuring tapes directly to your walls, co-designing layout specs or timber veneers without dealers or middleman fees.',
    image: '/carousel-1.jpg',
    categoryTarget: 'custom'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAdmin, setIsAdmin] = useState<boolean>(false); // Unused admin hooks to keep Navbar props compliant

  // Hero Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Static Data lists
  const [categories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [variants] = useState<ProductVariant[]>(INITIAL_VARIANTS);
  const [galleryItems] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [settings] = useState<WebsiteSettings>(DEFAULT_SETTINGS);

  // Filtering on Catalog
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [selectedMaterialFilter, setSelectedMaterialFilter] = useState('all');
  const [catalogPage, setCatalogPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const itemsPerPage = 6;

  // Listen to custom menu dispatch
  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ catId: string; searchVal: string }>;
      if (customEvent && customEvent.detail) {
        setSelectedCategoryFilter(customEvent.detail.catId || 'all');
        setSearchQuery(customEvent.detail.searchVal || '');
        setActiveTab('products');
        setCatalogPage(1);
      }
    };
    window.addEventListener('bvs-filter-products', handleFilterEvent as EventListener);
    return () => {
      window.removeEventListener('bvs-filter-products', handleFilterEvent as EventListener);
    };
  }, []);

  // Gallery Active state
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Preview Modal
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);

  // Inquiries status triggers
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [customizerSuccess, setCustomizerSuccess] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  // General contact inputs
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Carousel autoplay timer
  useEffect(() => {
    if (activeTab !== 'home') return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Scroll to top on tab swap
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const handleInquirySubmission = (rawInq: any) => {
    // Generate inquiry log dynamically and show success notification
    setInquirySuccess(true);
    setTimeout(() => setInquirySuccess(false), 5000);
  };

  const handleCustomRequestSubmission = (rawReq: any) => {
    // Save spec requirements catalog internally
    setCustomizerSuccess(true);
    setTimeout(() => setCustomizerSuccess(false), 5000);
  };

  const handleGeneralContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;

    // Prefill inquiry dispatch to WhatsApp
    const text = encodeURIComponent(
      `Hello BVS Enterprises,\n` +
      `I am submitting a General Inquiry via your website:\n` +
      `• Name: *${contactName}*\n` +
      `• Mobile: ${contactPhone}\n` +
      `• Note: ${contactMessage || 'No specific note added.'}\n\n` +
      `Please contact me back.`
    );
    window.open(`https://wa.me/918520856709?text=${text}`, '_blank');

    setContactSuccess(true);
    setContactName('');
    setContactPhone('');
    setContactMessage('');
    setTimeout(() => setContactSuccess(false), 5000);
  };

  const handleCategoryCardClick = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setCatalogPage(1);
    setSearchQuery('');
    setActiveTab('products');
  };

  const handleWhatsAppInstantGeneral = () => {
    const text = encodeURIComponent("Hello BVS Enterprises, I am visiting your webpage and would like to receive product pricing catalogues on WhatsApp.");
    window.open("https://wa.me/918520856709?text=" + text, '_blank');
  };

  // Filter products matching search, categories or materials
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.material.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategoryFilter === 'all' || p.category_id === selectedCategoryFilter;

    let matchesMaterial = true;
    if (selectedMaterialFilter !== 'all') {
      matchesMaterial = p.material.toLowerCase().includes(selectedMaterialFilter.toLowerCase());
    }

    return matchesSearch && matchesCategory && matchesMaterial;
  });

  // Paginated Slices
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (catalogPage - 1) * itemsPerPage,
    catalogPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col selection:bg-[#8B4F24] selection:text-white font-sans">
      
      {/* Main Navbar Navigation bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setCatalogPage(1);
          if (tab === 'products') {
            setSelectedCategoryFilter('all');
            setSearchQuery('');
          }
        }}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

      {/* Primary Routing Screen Port */}
      <main className="flex-grow">

        {/* Route 1: HOME PAGE */}
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            setCatalogPage={setCatalogPage}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
            setSearchQuery={setSearchQuery}
            settings={settings}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            carouselSlides={CAROUSEL_SLIDES}
          />
        )}

        {/* Route 2: COLLECTIONS BROWSE PAGE */}
        {activeTab === 'products' && (
          <CategoriesView settings={settings} setActiveTab={setActiveTab} />
        )}

        {/* Route 3: CUSTOM FURNITURE ESTIMATOR PAGE */}
        {activeTab === 'custom' && (
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 py-12 animate-in fade-in duration-300">
            
            {/* Header info */}
            <div className="text-left space-y-2 border-b border-[#E3DDD5] pb-6 mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A86A33]">
                Create Custom Layouts • BVS Master Carving Service
              </span>
              <h1 className="font-serif font-medium text-3xl md:text-5xl text-[#2E2A27]">
                Request Custom Furniture Spec Sheets
              </h1>
              <p className="text-xs sm:text-sm text-[#6E6A66]">
                Configure custom Teak cots, executive office manager desks, dining double tables, or modular plywood wardrobe sets. Submit specifications to generate quotes instantly.
              </p>
            </div>

            {/* Customizer form widget */}
            <CustomizerForm onSubmitRequest={handleCustomRequestSubmission} />

          </div>
        )}



        {/* Route 5: ABOUT US PAGE */}
        {activeTab === 'about' && (
          <AboutView
            settings={settings}
            setActiveTab={setActiveTab}
            handleWhatsAppInstantGeneral={handleWhatsAppInstantGeneral}
          />
        )}

        {/* Route 6: CONTACT PAGE */}
        {activeTab === 'contact' && (
          <ContactView
            settings={settings}
            contactSuccess={contactSuccess}
            contactName={contactName}
            setContactName={setContactName}
            contactPhone={contactPhone}
            setContactPhone={setContactPhone}
            contactMessage={contactMessage}
            setContactMessage={setContactMessage}
            handleGeneralContactSubmit={handleGeneralContactSubmit}
            handleWhatsAppInstantGeneral={handleWhatsAppInstantGeneral}
          />
        )}

      </main>

      {/* Main Footer Component */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setCatalogPage(1);
        }}
        settings={settings}
      />

      {/* Product Details Presentation Modal overlay */}
      {previewProduct && (
        <ProductDetailsModal
          product={previewProduct}
          variants={variants}
          relatedProducts={products.filter(p => p.category_id === previewProduct.category_id && p.id !== previewProduct.id)}
          onClose={() => setPreviewProduct(null)}
          onViewProduct={(p) => setPreviewProduct(p)}
          onSubmitInquiry={handleInquirySubmission}
        />
      )}

      {/* Global Fullscreen Lightbox Zoom Overlay */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-[24px] border border-white/10 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={fullscreenImage}
              alt="Expanded Gallery Snapshot"
              className="object-contain max-h-[85vh] w-auto mx-auto"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-[#8B4513] text-white px-3.5 py-2 rounded-full hover:bg-[#3E2723] text-xs font-mono font-bold transition-all border-none cursor-pointer shadow-md"
            >
              CLOSE ×
            </button>
          </div>
        </div>
      )}

      {/* 4. FLOATING WHATSAPP BUTTON (https://wa.me/918520856709) */}
      <a
        href="https://wa.me/918520856709?text=Hello%20BVS%20Enterprises%2C%20I%20am%20interested%20in%20custom%20furniture."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-[0_4px_18px_rgba(37,211,102,0.35)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0 border border-white/20"
        aria-label="Contact BVS Enterprises on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg className="w-7 h-7 text-white fill-current shrink-0" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

    </div>
  );
}
