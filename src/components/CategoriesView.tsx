import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, Phone } from 'lucide-react';
import { WebsiteSettings } from '../types';

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  subItems: string[];
}

const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'bedroom-furniture',
    name: 'Bedroom Furniture',
    description: 'Premium wooden cots and beds built to support dynamic posture and lifelong durability.',
    image: '/images/bedroom-furniture.jpg',
    subItems: ['Premium Wooden Beds', 'Double Beds', 'Single Beds', 'Storage Beds', 'Cot Beds']
  },
  {
    id: 'wardrobes-beeruvas',
    name: 'Wardrobes & Beeruvas',
    description: 'Heavy-duty steel beeruvas and premium finished wooden wardrobes with built-in mirrors.',
    image: '/images/wardrobes.jpg',
    subItems: ['Wooden Wardrobes', 'Steel Beeruvas', 'Mirror Wardrobes', '2/3/4 Door Almirahs', 'Dressing Wardrobes']
  },
  {
    id: 'dressing-tables',
    name: 'Dressing Tables',
    description: 'Modern vanity dressing tables styled with elegant full-length glass and storage drawers.',
    image: '/images/dressing-tables.jpg',
    subItems: ['Dressing Tables', 'Dressing Mirrors', 'Mirror Cabinets', 'Dressing Units']
  },
  {
    id: 'sofa-sets',
    name: 'Sofa Sets',
    description: 'Luxurious comfort sets in premium timber frames and custom heavy fabrics for living rooms.',
    image: '/images/sofa-sets.jpg',
    subItems: ['Sofa Sets', 'Wooden Sofas', 'Lounge Chairs', 'Coffee Tables']
  },
  {
    id: 'office-chairs',
    name: 'Office Chairs',
    description: 'Ergonomic lumbar-support executive chairs and breathable mesh revolving chairs.',
    image: '/images/office-chairs.jpg',
    subItems: ['Executive Chairs', 'Mesh Chairs', 'Ergonomic Chairs', 'Revolving Chairs', 'Visitor Chairs']
  },
  {
    id: 'office-furniture',
    name: 'Office Furniture',
    description: 'Professional executive tables, laminated modular computer desks, and reception tables.',
    image: '/images/office-furniture.jpg',
    subItems: ['Executive Office Tables', 'Office Desks', 'Computer Tables', 'Office Workstations', 'Reception Tables', 'Office Storage Units']
  },
  {
    id: 'dining-tables',
    name: 'Dining Tables',
    description: 'Aesthetic family dining sets crafted with solid wood and robust matching chairs.',
    image: '/images/dining-tables.jpg',
    subItems: ['Dining Tables', 'Dining Chairs', 'Dining Sets']
  },
  {
    id: 'tv-units',
    name: 'TV Units',
    description: 'Contemporary TV wall panels, luxury television cabinets, and smart console stands.',
    image: '/images/tv-units.jpg',
    subItems: ['TV Units', 'Modern TV Cabinets', 'Entertainment Units']
  },
  {
    id: 'study-tables',
    name: 'Study Tables',
    description: 'Compact and spacious study desks featuring integrated storage shelves for books and laptops.',
    image: '/images/office-furniture.jpg',
    subItems: ['Study Tables', 'Study Desks', 'Student Chairs']
  },
  {
    id: 'plastic-chairs',
    name: 'Plastic Chairs',
    description: 'Super-strength premium plastic chairs, ergonomic arm chairs, and stackable stools.',
    image: '/images/plastic-chairs.jpg',
    subItems: ['Plastic Chairs', 'Plastic Arm Chairs', 'Plastic Stools', 'Plastic Tables']
  },
  {
    id: 'designer-chairs',
    name: 'Designer Chairs',
    description: 'Trendy, high-end designer lounge seating and vibrant accent plastic armchairs.',
    image: '/images/designer-chairs.jpg',
    subItems: ['Designer Plastic Chairs', 'Colorful Lounge Chairs', 'Stackable Chairs']
  },
  {
    id: 'steel-cupboards',
    name: 'Steel Cupboards',
    description: 'Industrial-grade heavy gauge steel cupboards, secure almirahs, and safety lockers.',
    image: '/images/steel-cupboards.jpg',
    subItems: ['Steel Cupboards', 'Steel Almirahs', 'Steel Lockers', 'Metal Storage Cabinets']
  },
  {
    id: 'storage-racks',
    name: 'Storage Racks',
    description: 'Highly rigid metal storage racks and adjustable wall utility shelves.',
    image: '/images/storage-racks.jpg',
    subItems: ['Storage Racks', 'Utility Shelves', 'Metal Storage Cabinets']
  },
  {
    id: 'bookshelves',
    name: 'Bookshelves',
    description: 'Classic open display racks, display libraries, and durable wooden book storage units.',
    image: '/images/bookshelves.jpg',
    subItems: ['Book Shelves', 'Open Display Racks', 'Wooden Storage Units']
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    description: 'Orthopedic posture foam, high-density coir, and luxury spring mattresses.',
    image: '/images/custom-furniture.jpg',
    subItems: ['Single Mattresses', 'Double Mattresses', 'Orthopedic Mattresses', 'Foam Mattresses', 'Spring Mattresses']
  },
  {
    id: 'bean-bags',
    name: 'Bean Bags',
    description: 'Extra plush high-quality faux leather bean bags and lounger pods in multiple colors.',
    image: '/images/bean-bags.jpg',
    subItems: ['Premium Bean Bags', 'Lounger Bean Bags', 'Kids Bean Bags']
  },
  {
    id: 'swing-chairs',
    name: 'Swing Chairs',
    description: 'Relaxing hand-woven indoor cane swings, hanging single cocoons, and metallic support swings.',
    image: '/contact-main.jpg',
    subItems: ['Hanging Swing Chairs', 'Indoor Swings', 'Cane Swings']
  },
  {
    id: 'shoe-racks',
    name: 'Shoe Racks',
    description: 'Functional multi-tier closed shoe cabinets, bedside tables, and home corner stands.',
    image: '/images/shoe-racks.jpg',
    subItems: ['Shoe Racks', 'Side Tables', 'Bedside Tables', 'Corner Stands']
  },
  {
    id: 'custom-furniture',
    name: 'Custom Furniture',
    description: 'Fully personalized bespoke wooden fittings mapped to your specific dimensions.',
    image: '/images/custom-furniture.jpg',
    subItems: ['Custom Wardrobes', 'Custom Office Furniture', 'Custom Storage Units', 'Custom Wooden Furniture', 'Custom Interior Solutions']
  }
];

interface CategoriesViewProps {
  settings: WebsiteSettings;
  setActiveTab: (tab: string) => void;
}

export default function CategoriesView({ settings, setActiveTab }: CategoriesViewProps) {
  const handleEnquire = (categoryName: string) => {
    const text = encodeURIComponent(
      `Hello BVS Enterprises,\n` +
      `I would like to enquire about your *${categoryName}* collection seen on your website catalog.`
    );
    window.open(`https://wa.me/918520856709?text=${text}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-[#FAF8F5] pb-20 pt-10 px-5 md:px-10 lg:px-20 max-w-[1280px] mx-auto text-left animate-in fade-in duration-300">
      
      {/* Editorial Top Header */}
      <div className="border-b border-[#ECE5DD] pb-8 mb-12 space-y-4">
        <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#8B4F24] block">
          BVS Showroom Catalog • Est. 2008
        </span>
        <h1 className="font-serif font-semibold text-[#222222] text-3xl md:text-5xl leading-tight tracking-tight">
          Explore Our Furniture Collections
        </h1>
        <p className="text-[#6F6F6F] text-[15px] max-w-[700px] leading-relaxed font-sans">
          Welcome to our premium Tirupati showroom catalog. We believe in direct workshop transparency. Every piece is crafted with genuine seasoned hardwood or heavy-duty steel for lifelong sturdiness. Browse our collections below and message us instantly to verify size options or initiate customization plans.
        </p>
      </div>

      {/* Grid of 19 Premium Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 max-[359px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
      >
        {CATEGORIES_DATA.map((item) => (
          <motion.div
            key={item.id}
            id={item.id}
            variants={itemVariants}
            onClick={() => handleEnquire(item.name)}
            className="group bg-white rounded-[16px] overflow-hidden border border-[#8B4F24]/15 shadow-[0_4px_20px_rgba(139,79,36,0.02)] hover:border-[#8B4F24]/40 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(139,79,36,0.06)] transition-all duration-300 flex flex-col justify-between h-full cursor-pointer text-left scroll-mt-24"
          >
            <div>
              {/* Image box with exactly 16:10 aspect ratio */}
              <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Text content box */}
              <div className="p-5 space-y-3">
                <h3 className="font-serif font-bold text-[17px] sm:text-lg text-[#222222] group-hover:text-[#8B4F24] transition-colors leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-[#6F6F6F] leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Sub-items tag list */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {item.subItems.map((sub, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[10px] font-sans font-medium text-[#8B4F24]/85 bg-[#8B4F24]/5 border border-[#8B4F24]/10 rounded-full px-2.5 py-0.5"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium action strip */}
            <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[#8B4F24] border-t border-stone-50 group-hover:bg-[#FAF8F5]/35 transition-colors">
              <span className="group-hover:translate-x-0.5 transition-transform duration-300 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>Enquire Now</span>
              </span>
              <ArrowRight className="w-4 h-4 text-[#8B4F24]/40 group-hover:text-[#8B4F24] group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Direct Showroom Booking Callout Banner */}
      <div className="mt-16 bg-[#EFE8DF] rounded-[16px] border-2 border-[#8B4F24]/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-[620px]">
          <h4 className="font-serif font-semibold text-xl md:text-2xl text-[#222222]">
            Ready to experience raw luxury timbers?
          </h4>
          <p className="text-[#6F6F6F] text-sm leading-relaxed">
            Visit our physical showroom in Tirupati to feel the genuine timber grains, test postural ergonomics, or sit down with our chief carpenter to customize your furniture size specs.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <button
            onClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#8B4F24] hover:bg-[#5C3315] text-white font-sans font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-full transition-all duration-300 hover:-translate-y-[2px]"
          >
            Visit Showroom
          </button>
          <a
            href="tel:+918520856709"
            className="bg-white hover:bg-stone-50 text-[#8B4F24] border border-[#8B4F24]/30 font-sans font-bold text-xs uppercase tracking-widest h-12 px-6 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Showroom</span>
          </a>
        </div>
      </div>
    </div>
  );
}
