# BVS Enterprises Showroom Website & Admin Portal
## Complete Technical Blueprint & Software Requirements Specification (SRS)
**Client:** BVS Enterprises (est. 2008, Tirupati, AP, India)  
**Authors:** Senior Product Manager, Lead Solution Architect, and Head of UX  
**Status:** Approved for Implementation (v1.0.0)  

---

## Table of Contents
1. [Software Requirements Specification (SRS)](#1-software-requirements-specification-srs)
2. [Website Sitemap & Information Architecture](#2-website-sitemap--information-architecture)
3. [Relational Database Design (PostgreSQL / Supabase)](#3-relational-database-design-postgresql--supabase)
4. [Customer User Flows](#4-customer-user-flows)
5. [Admin Workflows & Security Operations](#5-admin-workflows--security-operations)
6. [Mobile-First Responsive Design Specifications](#6-mobile-first-responsive-design-specifications)
7. [Enterprise-Grade Error Handling Strategy](#7-enterprise-grade-error-handling-strategy)
8. [High-Engagement Empty States](#8-high-engagement-empty-states)
9. [Production-Ready Engineering Requirements](#9-production-ready-engineering-requirements)
10. [Step-by-Step Implementation Assembly Plan](#10-step-by-step-implementation-assembly-plan)

---

## 1. Software Requirements Specification (SRS)

### 1.1 Business Overview
BVS Enterprises is Tirupati's leading wooden furniture design house and manufacturer since 2008. Operating directly from our flagship showroom on **Tilak Road, Tirupati (Opposite the SBI ATM)**, we eliminate middleman premiums by offering factory-direct custom handiwork, Burma teak settings, ergonomic office layouts, and industrial warehouse solutions.

### 1.2 Project Objectives
*   **Establish Digital Showroom Presence:** Elevate the brand to compete visually with luxury outlets like Pottery Barn and Urban Ladder.
*   **Drive Physical Store Visits:** Channel online traffic directly into physical gallery visits via precise Google Maps direction integrations.
*   **Generate High-Quality Leads:** Enable multi-channel contact mechanisms (WhatsApp pre-filled API lines, interactive contact forms, and automated design submission drawers).
*   **Empower Store Managers:** Furnish an intuitive, secure administrative control deck to edit catalogs, moderate reviews, view custom wood inquiries, and modify store hours dynamically.

### 1.3 Scope of Features
```
┌─────────────────────────────────────────────────────────────┐
│                       PUBLIC WEBSITE                        │
├─────────────────────────────────────────────────────────────┤
│ 1. Home Base (Hero Carousel, Category Grit, Brand Legacy)    │
│ 2. Dynamic Showcase (Multi-category Filtering, Search)      │
│ 3. Deep dive cards (Multi-image galleries, dimensions, wood) │
│ 4. Bespoke wood customizer & quote-calculator               │
│ 5. Physical Showroom location map with direct API navigators │
│ 6. Verified Review system with administrative moderations  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                 Persistent DB Sync (PostgreSQL)
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                        ADMIN PORTAL                         │
├─────────────────────────────────────────────────────────────┤
│ 1. Secure RBAC JWT Auths                                    │
│ 2. Inventory manager (CRUD text, weight, wood types, multi)  │
│ 3. Interactive live lead tracker & exportable CSVS          │
│ 4. Moderation board (Inquiry, custom sketch views, reviews) │
│ 5. Real-time Website Configuration manager                  │
└─────────────────────────────────────────────────────────────┘
```

### 1.4 Functional Requirements (FR)
*   **FR-1: Product Catalog Browsing:** System must support multi-select indexing across five core collections: Home, Office, Restaurant, School, and Godown.
*   **FR-2: Search Optimization:** Instant fuzzy matching on titles, descriptions, and wood parameters (e.g., teak, solid mahogany, premium engineered boards).
*   **FR-3: Active Lead Form Submission:** Visitors can submit request inquiries directly from a product detail window, instantly dispatching local database records and auto-generating optional WhatsApp prompts.
*   **FR-4: Interactive Physical Showroom Compass:** Integration of an embedded responsive Google Maps widget targeting Door No. 400, Tilak Road, with dynamic navigation toggles.
*   **FR-5: Interactive Review Lifecycle:** Non-registered users can submit visual reviews rating items (1–5 scale). Submitted reviews enter a `PENDING` status requiring Admin approval prior to public release.

### 1.5 Non-Functional Requirements (NFR)
*   **NFR-1: Performance (Speed Indexes):** Lighthouse Performance score must index at $\ge 92$ on mobile. First Contentful Paint (FCP) must remain under 1.2s.
*   **NFR-2: Responsive Fluidity:** Screen components must render continuously without horizontal overflows from 320px up to 3840px.
*   **NFR-3: High Availability:** Showroom accessibility must target 99.98% runtime using geo-distributed Cloud Run caches.
*   **NFR-4: Accessibility (WCAG 2.1):** High contrast color ratios of $\ge 4.5:1$ for readable text on secondary body copies. Focus states must remain explicit for screen readers.

---

## 2. Website Sitemap & Information Architecture

The directory sitemap is optimized for maximum crawler search indexing (SEO) and user conversion flow.

```
PUBLIC USER INTERFACE (Next.js Application Layout)
├── / (Home Route) [SEO Title: BVS Enterprises | Luxury Teakwood Furniture Tirupati]
│   ├── Hero Carousel (Interactive sliders, latest catalogs)
│   ├── Categories Bento Grid (Home, Office, Dining, School, Godown)
│   ├── Physical Showroom Embedded Locator Section
│   └── Brand Legacy Grid (20+ Years Custom Carpentry)
├── /collections (Catalog Index Page)
│   ├── /collections/home-furniture
│   ├── /collections/office-furniture
│   ├── /collections/restaurant-furniture
│   ├── /collections/school-furniture
│   └── /collections/godown-furniture
├── /product/[slug] (Product Deep Dive) [Static Dynamic Rendering]
│   ├── Image Carousel with pinch-to-zoom support
│   ├── Product Data Matrix (Wood Type, Warranty, Sizing, Wood Coating)
│   └── Quick Showroom Inquiry Modal Trigger
├── /custom-furniture (Handcrafted Sizing Panel)
│   └── Custom Spec Configurator & Form Upload Drawer
├── /gallery (Customer Installations & Real Projects)
├── /about (Brand Legacy, Factory setup, Timber licenses)
├── /contact (Physical showroom coordinates, Telephone ringers, FAQ)
├── /privacy-policy (Data protections)
└── /terms-conditions (Pricing, manufacturing warranties)

ADMIN CONTROL CENTRE (Authenticated Sub-Domain / Layout)
├── /admin/login (JWT / Supabase Auth Gateway)
├── /admin/dashboard (High-level diagnostic summaries: Lead count, review approval queues)
├── /admin/products (Catalog inventory management)
│   ├── /admin/products/new (Rich multi-image media uploaders)
│   └── /admin/products/edit/[id] (Inventory updating panel)
├── /admin/inquiries (Store lead manager)
├── /admin/custom-orders (Bespoke carpentry diagram review ledger)
├── /admin/gallery (Client installation slider publisher)
├── /admin/reviews (Anti-spam moderation console)
└── /admin/settings (Website global variable settings overrides)
```

### 2.1 SEO URL Architecture & Internal Linking
*   **Clean Slugs:** All collections follow lowercase patterns (e.g., `/collections/home-furniture`). Products dynamically convert database titles using regex replacements: `/product/burmese-teakwood-sofa-set-5-seater`.
*   **Breadcrumb Logic:** Inject semantic microdata breadcrumbs dynamically on all pages beneath root:
    `Home > Collections > Home Furniture > Product Name`
*   **Internal Routing Optimization:** Deep link keyword phrases (e.g., *custom teakwood dining tables*) directly to the `/custom-furniture` workspace inside descriptions to pass link equity.

---

## 3. Relational Database Design (PostgreSQL / Supabase)

Our architecture leverages structural indexes, strict database constraints, and cascade actions.

```
         ┌───────────────────┐             ┌─────────────────────┐
         │    categories     │             │     subcategories   │
         ├───────────────────┤             ├─────────────────────┤
         │ PK  id (UUID)     │◄───────────*│ FK  category_id     │
         └─────────────────┬─┘             └─────────────────────┘
                           │
                           │
                     ┌─────▼───────────────┐
                     │      products       │
                     ├─────────────────────┤
                     │ PK  id (UUID)       │◄──────┐
                     │ FK  category_id     │       │
                     └─────┬───────────────┘       │ (1 to Many)
                           │                       │
           ┌───────────────┼───────────────┐       │
           │ (1 to Many)   │ (1 to Many)   │ (1 to Many)
           ▼               ▼               ▼       │
   ┌──────────────┐┌──────────────┐┌──────────────┐│
   │product_images││  inquiries   ││   reviews    ││
   ├──────────────┤├──────────────┤├──────────────┤│
   │ PK id        ││ PK id        ││ PK id        ││
   │ FK prod_id   ││ FK prod_id   ││ FK prod_id───┘│
   └──────────────┘└──────────────┘└──────────────┘
```

### 3.1 DDL SQL Compilation Setup

```sql
-- Enable UUID extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. REGISTRATION OF CORE USERS
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('Super Admin', 'Sales Executive')) DEFAULT 'Sales Executive',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- 2. CATEGORY ARCHITECTURES
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. INTERMEDIARY SUBCATEGORY LAYERS
CREATE TABLE subcategories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    UNIQUE (category_id, name)
);

-- 4. MASTER PRODUCT TABLE
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE RESTRICT,
    subcategory_id UUID REFERENCES subcategories(id) ON DELETE SET NULL,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    sku VARCHAR(100) UNIQUE,
    description TEXT NOT NULL,
    wood_type VARCHAR(100) NOT NULL DEFAULT 'Burmese Teakwood',
    dimensions VARCHAR(150),
    warranty_years INT DEFAULT 3,
    customizable BOOLEAN DEFAULT TRUE,
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. IMAGE RECORD BINDINGS FOR PRODUCTS (Supporting Galleries)
CREATE TABLE product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0
);

-- 6. DIRECT SHOWROOM INQUIRIES FROM CORE PRODUCTS
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE SET NULL,
    customer_name VARCHAR(150) NOT NULL,
    customer_mobile VARCHAR(15) NOT NULL,
    customer_email VARCHAR(255),
    message TEXT,
    status VARCHAR(50) CHECK (status IN ('NEW', 'CONTACTED', 'CONVERTED', 'ARCHIVED')) DEFAULT 'NEW',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. BESPOKE CUSTOM SKETCH ORDERS
CREATE TABLE custom_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(150) NOT NULL,
    customer_mobile VARCHAR(15) NOT NULL,
    wood_preference VARCHAR(100) DEFAULT 'Teak Wood',
    approx_width INT,  -- measurements in inches
    approx_height INT,
    approx_depth INT,
    requirements_text TEXT NOT NULL,
    uploaded_sketch_url TEXT,
    status VARCHAR(50) CHECK (status IN ('REVIEW_REQUEST', 'PRICED', 'DEPOSIT_PAID', 'PRODUCTION', 'DELIVERED')) DEFAULT 'REVIEW_REQUEST',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. LOCALIZED HIGH-QUALITY VERIFIED REVIEW LEDGER
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    customer_name VARCHAR(150) NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    moderation_status VARCHAR(50) CHECK (moderation_status IN ('PENDING', 'APPROVED', 'REJECTED')) DEFAULT 'PENDING',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. INSTALLATION SHOTS GALLERY INDEX
CREATE TABLE gallery_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(150) NOT NULL,
    image_url TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'Home Furniture',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. SYSTEM CONFIGURATION ENGINE (Website Administration overrides)
CREATE TABLE settings (
    key VARCHAR(100) PRIMARY KEY,
    value VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 3.2 Performance Indexes Setup
```sql
-- Speed up catalog searches and slug match resolvers
CREATE INDEX idx_products_slug ON products (slug);
CREATE INDEX idx_products_category ON products (category_id);
CREATE INDEX idx_product_images_parent ON product_images (product_id);
CREATE INDEX idx_inquiries_status ON inquiries (status);
CREATE INDEX idx_reviews_status ON reviews (moderation_status);
```

---

## 4. Customer User Flows

This architecture documents every key path across the public framework.

### 4.1 Regular Product Browsing and Store Engagement Cycle
```
[Visitor lands on home page]
       │
       ▼
[Tabs "Collections" / Scrolls categories]
       │
       ▼
[Selects "Office Furniture"]
       │
       ▼
[Renders Responsive Grid mapping Products]
       │
       ▼
[Taps Mesh Ergonomic Executive Chair]
       │
       ▼
[System launches details page (slug matched)]
       │
       ▼
[Visitor selects "Send Showroom Query" button]
       │
       ▼
[Fills Out Modal: Name, 10-Digit Mobile, Message]
       │
       ├─────────────────────────────────┐
       ▼ (Path A)                        ▼ (Path B)
[Persists record into SQL DB]   [Fires WhatsApp CTA]
       │                                 │
       ▼                                 ▼
[Stores status as "NEW"]        [Redirects URL to wa.me chat thread]
```

### 4.2 Bespoke Furniture Order Submission Flow
```
[Navigator hits "/custom-furniture" top navbar option]
       │
       ▼
[Aesthetic custom form container shows up]
       │
       ▼
[Uploads sketch image (drag-and-drop or file pick)]
       │
       ▼
[Sets dimensions sliders (inches) & Wood Preference]
       │
       ▼
[Enters Contact info + submits]
       │
       ▼
[System uploads diagram securely to Supabase Storage]
       │
       ▼
[Records SQL DB custom_orders row. Generates instant UUID token]
```

### 4.3 Showroom Navigation Flow
```
[User clicks "Contact Us" or visits footer address box]
       │
       ▼
[ShowroomLocation UI maps directions widget directly in layout]
       │
       ├─────────────────────────────────┐
       ▼ (Desktop interaction)           ▼ (Mobile interaction)
[Interacts with iframe map container]    [Taps "Get Directions" button]
                                                 │
                                                 ▼
                                         [Triggers native Google Maps App]
                                                 │
                                                 ▼
                                         [Pins BVS Enterprises Showroom]
```

---

## 5. Admin Workflows & Security Operations

Ensure proper administrative flows with strict separation of functions.

### 5.1 Admin Catalog Management Cycle
```
[Authenticates via SSO or Email/Password credentials]
       │
       ▼
[Supabase issues Session Token stored securely in Cookies/Storage]
       │
       ▼
[Loads "/admin/products" and taps "Add New Furniture Product"]
       │
       ▼
[Fills Details: Title, Wood Selection, customizable checklist etc.]
       │
       ▼
[Inserts details in SQL via Supabase fetch -> DB records slug]
```

### 5.2 Dynamic Form Verification & Leads Moderation Workflow
```
[Super Admin enters "/admin/inquiries"]
       │
       ▼
[Fetches rows sorting by created_at DESC with "NEW" indicator]
       │
       ▼
[Admin opens lead details window]
       │
       ▼
[Calls client directly from admin panel "Ring Mobile" trigger]
       │
       ▼
[Click "Update Status" dropdown -> mark "CONTACTED"]
       │
       ▼
[State updates instantly without page reload (Optimistic UI updates)]
```

---

## 6. Mobile-First Responsive Design Specifications

We adopt standard pixel breakpoints styled directly in our design layouts via Tailwind utility selectors.

| Screen Dimension | Device Target | Spacing Pattern | Max Layout Container | Typography Ratios |
| :--- | :--- | :--- | :--- | :--- |
| **320px – 767px** | Mobile Portrait/Landscape | `px-4 py-8`, `gap-4` | $100\%$ Fluid | Headings: `text-2xl` / Body: `text-sm` |
| **768px – 1023px** | Tablets / Low-res notebooks | `px-6 py-12`, `gap-6` | `max-w-4xl` | Headings: `text-3xl` / Body: `text-sm` |
| **1024px – 1439px** | Modern Notebooks & Laptops | `px-8 py-16`, `gap-8` | `max-w-6xl` | Headings: `text-4xl` / Body: `text-base` |
| **1440px+** | Wide LCD Desktop Workstations | `px-12 py-20`, `gap-12`| `max-w-7xl` | Headings: `text-5xl` / Body: `text-base` |

### 6.1 Component Layout Responsiveness Architecture

#### 1. Public Navigation Header
*   **Mobile/Tablet (<1024px):** Condensed floating bar with prominent brand logo, Quick Call button, and an overlay Drawer Menu (Hamburgers) listing sitemap options.
*   **Desktop/Laptop (≥1024px):** Flat premium header featuring uppercase display navigation options + micro hover effects alongside an active underline indicator.

#### 2. Flagship Showroom Locator Layout
*   **Mobile (<768px):** Google Map container locks to `h-[300px]` with the details information card stacked directly beneath it at full width. Padding uses `px-4`.
*   **Tablet (768px-1023px):** Google Map container locks to `h-[400px]` and information card content expands to 2 columns internally nested in a single card container.
*   **Desktop (≥1440px):** 2-Column layout. The left column holds the raw Google map nested inside a solid border container matching catalog styles. The height is locked to `h-[500px]`, while the right column houses the information details matching custom designs.

---

## 7. Enterprise-Grade Error Handling Strategy

All error instances are tracked, displaying user-centric explanations with clear paths to recovery.

| Code / Scenario | Under-the-Hood Cause | User UI Interface Message | Action Action CTA & Strategy |
| :--- | :--- | :--- | :--- |
| **404 Event** | Dead link clicked or deleted item slug called. | **"This Beautiful Specimen Isn't Crafted Yet"** | CTA: **"Browse Burma Teak Collections"** redirects smoothly to `/collections`. |
| **500 Code** | Database pool timeout or hosting connection loss. | **"Our Workshop is Temporarily Offline"** | Displays a simple "Reconnect Network" trigger that retries the database query. |
| **Upload Fails** | Customer diagram file size exceeds 10MB limit. | **"File Exceeds Structural Limits (Max 10MB)"** | Instant warning color outline over drag-and-drop region. CTA: **"Try Another Diagram File"**. |
| **Strict Offline** | User loses Wi-Fi while submitting an order. | **"No Connection Detected. Check Router Settings"** | Visual indicator turns gold. Automatically saves form data locally to resubmit when connection returns. |
| **Access Blocked** | Admin token expires or lacks permission levels. | **"Security Clearance Required"** | Forces clean logout cookie delete and drops navigator directly onto `/admin/login`. |

---

## 8. High-Engagement Empty States

Empty boards are styled as engaging starting points for users.

### 8.1 Public & Admin Catalog Empty Panels

```
                    ┌───────────────────────────────┐
                    │                               │
                    │         ┌───────────┐         │
                    │         │  🛋️/🕸️/📚  │         │
                    │         └───────────┘         │
                    │        No Records Found       │
                    │                               │
                    │   "Our woodworkers are busy   │
                    │     bringing these to life"   │
                    │                               │
                    │         ┌───────────┐         │
                    │         │   Reset   │         │
                    │         └───────────┘         │
                    └───────────────────────────────┘
```

*   **No Products Search Result:**
    *   *Visual:* Hand-drawn icon of a tool chest, subtly animated.
    *   *Message:* *"We searched our entire workshop floor but couldn't locate any matching furniture profiles. Want to craft a custom design instead?"*
    *   *CTA Button:* **"Launch Bespoke Wood Customizer"** (Redirects to `/custom-furniture`) or **"Reset Search Index"**.
*   **No Active Admin Inquiries:**
    *   *Visual:* Inbox icon with a gentle floating motion.
    *   *Message:* *"All Client Inquiries Handled! Excellent work. Relax, sip some water, and browse custom carpentry models."*
    *   *CTA Button:* **"Check Custom Orders Console"** (Redirects to `/admin/custom-orders`).
*   **No Installation Portfolio Items:**
    *   *Visual:* A pristine blueprint vector schematic with a light golden glow.
    *   *Message:* *"No Installation Showcases Added Yet."*
    *   *CTA Button:* **"Upload First Project Photo"** (Exclusive to `/admin/gallery`).

---

## 9. Production-Ready Engineering Requirements

Maintaining security and visual performance across the codebase is vital:

### 9.1 Data Security Controls
*   **Strict RLS Policies for Supabase:** Enable PostgreSQL Row Level Security (RLS) across all core tables. The public user can only run `INSERT` statements on `inquiries`, `reviews`, and `custom_orders`. `SELECT`, `UPDATE` and `DELETE` access levels require valid authorization headers.
*   **Input Handling:** Protect against Injection attacks by routing database operations through parameterized queries.

### 9.2 High-Speed Caching Setup
*   **Incremental Static Regeneration (ISR):** Products are built statically with an ISR intervals loop set to 3600 seconds. Whenever an administrator changes store metrics, use Next.js dynamic revalidation tags.
*   **Optimal Media Delivery:** Store high-resolution showroom images on Supabase storage buckets integrated with a CDN. Apply automatic format conversions (`avif` or `webp`) and resize dimensions depending on device requirements.

---

## 10. Step-by-Step Implementation Assembly Plan

This execution layout outlines the path to full production deployment.

### Phase 1: Solid Database Core & Migrations
1.  Provision the master PostgreSQL cluster (using Supabase).
2.  Deploy the comprehensive DDL table schemas, indexes, and constraint matrices details.
3.  Set up RLS access privileges and verify secure client connections.

### Phase 2: Complete API Routes
1.  Set up Next.js server handlers inside `/api/auth` integrating Supabase.
2.  Develop parametric CRUD controllers inside `/api/products` alongside database paginations.
3.  Set up target hooks in `/api/inquiries` and `/api/custom` to parse customer orders and send email alerts.

### Phase 3: Premium Public Website Development
1.  Complete the core responsive design layout utilizing custom Inter and Space Grotesk typography integrations.
2.  Develop the high-end Home view, product list displays, and dynamic filter widgets.
3.  Implement the custom specifications configurator, diagram uploading handlers, and the responsive Google Map locator component.

### Phase 4: Dynamic Admin Management Portal
1.  Build the secure, responsive Admin dashboard, login panels, and session controllers.
2.  Develop the catalog manager, media upload forms, and review moderation center.
3.  Implement export actions to download lead lists as standardized spreadsheets.

### Phase 5: Testing, Performance Review & Deployment
1.  Run load testing on database connections to verify stability under traffic peaks.
2.  Conduct accessibility checks (WCAG compliance) and mobile responsive tests.
3.  Launch the finalized codebase onto production hosting (using Vercel or cloud-native infrastructure).
