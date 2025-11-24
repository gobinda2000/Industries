# GK Pvt Industries Website

A modern, professional website for GK Pvt Industries built with Next.js, featuring services in raw steel, scrap metal, iron products, truck rental, loading/unloading, and godown services.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Mobile-friendly layout
- 🚀 Smooth animations with AOS (Animate On Scroll)
- ⚡ Fast performance with Next.js 14
- 📍 Location-based service information
- 📧 Contact form
- 🖼️ Image gallery and facilities showcase
- 🏭 Visual representation of services and infrastructure

## Services Showcased

1. **Raw Steel** - Premium quality raw steel products
2. **Scrap Metal** - Collection and processing services
3. **Iron Products** - Comprehensive iron solutions
4. **Truck Rental** - Reliable transportation services
5. **Loading & Unloading** - Professional handling services
6. **Godown Services** - Secure storage solutions

## Service Areas

- **Ludhiana** (Head Office)
- **Faridkot** (Service Area)
- **Jalandhar** (Service Area)
- **Delhi** (Service Area)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **AOS** - Animate On Scroll library
- **React** - UI library

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── Locations.tsx     # Locations section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
└── public/               # Static assets
```

## Adding Images

To add your images to the website, place them in the `public/images/` directory with the following names:

- `truck-1.jpg` - Your truck/transport fleet image
- `steel-products.jpg` - Steel and iron products (nuts, fasteners, etc.)
- `workshop.jpg` - Your industrial workshop/manufacturing facility
- `building.jpg` - Your main building/facility exterior

The website will automatically display these images in the Services, Gallery, and Facilities sections. If images are not found, fallback placeholders will be shown.

## Customization

To customize the website:

1. Update company information in `components/Contact.tsx`
2. Modify service details in `components/Services.tsx`
3. Adjust colors in `tailwind.config.ts`
4. Update metadata in `app/layout.tsx`
5. Add your images to `public/images/` directory
6. Update image paths in components if using different filenames

## License

This project is private and proprietary.
