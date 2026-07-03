export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  parent_id?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  category_id: string;
  material: string;
  dimensions: string;
  brand: string;
  price: number;
  sale_price?: number;
  featured: boolean;
  customization_available: boolean;
  delivery_available: boolean;
  installation_available: boolean;
  warranty_details: string;
  emi_available: boolean;
  images: string[];
  created_at?: string;
  status?: 'Draft' | 'Published';
}

export interface ProductVariant {
  id: string;
  product_id: string;
  variant_name: string; // e.g., 'Teak Wood', 'Plywood', '3-Seater', 'L-Shape'
  variant_type: string; // e.g., 'Material', 'Size'
  additional_price: number;
}

export interface ProductInquiry {
  id: string;
  customer_name: string;
  mobile_number: string;
  product_id: string;
  message: string;
  inquiry_status: 'New' | 'Contacted' | 'Closed';
  created_at: string;
}

export interface CustomFurnitureRequest {
  id: string;
  customer_name: string;
  mobile_number: string;
  product_type: string;
  custom_size: string;
  custom_material: string;
  custom_color: string;
  custom_design: string;
  finish_requirements: string;
  special_requirements: string;
  reference_image_url?: string;
  message: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  created_at: string;
}

export interface Review {
  id: string;
  customer_name: string;
  rating: number;
  feedback: string;
  review_status: 'Positive' | 'Negative' | 'Resolved';
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string; // e.g., 'Home Furniture', 'Office Furniture', 'Dining Collection', etc.
  image_url: string;
  featured: boolean;
  created_at: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Sales Executive';
}

export interface WebsiteSettings {
  phone_number: string;
  whatsapp_number: string;
  business_hours: string;
  google_maps_url: string;
  address: string;
  address_landmark: string;
  social_facebook: string;
  social_instagram: string;
  social_youtube: string;
  google_rating: string;
  google_reviews_count: string;
}
