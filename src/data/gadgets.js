// gadgets.js
import product1 from '../images/product-1.jpg';
import product2 from '../images/product-2.jpg';
import product3 from '../images/product-3.jpg';
import product4 from '../images/product-4.jpg';
import product5 from '../images/product-5.jpg';
import product6 from '../images/product-6.jpg';
import product7 from '../images/product-7.jpg';
import product8 from '../images/product-8.jpg';
import product9 from '../images/product-9.jpg';
import product10 from '../images/product-10.jpg';
import product11 from '../images/product-11.jpg';
import product12 from '../images/product-12.jpg';
import product13 from '../images/product-13.jpg';
import product14 from '../images/product-14.jpg';
import product15 from '../images/product-15.jpg';
import product16 from '../images/product-16.jpg';
import product17 from '../images/product-17.jpg';
import product18 from '../images/product-18.jpg';
import product19 from '../images/product-19.jpg';
import product20 from '../images/product-20.jpg';

export const gadgets = [
  // Headphones (4 products)
  {
    id: 1,
    image: product1,
    gallery: [
      product1,
      product1,
      product1
    ],
    name: "Premium Wireless Headphones",
    price: 179.99,
    originalPrice: 229.99,
    onSale: true,
    description: "Noise-cancelling wireless headphones with premium sound quality and 30-hour battery life.",
    category: "headphones",
    categoryDisplay: "Headphones",
    rating: 5.0,
    featured: true,
    badge: "Bestseller",
    specs: {
      color: "Black",
      weight: "265g",
      dimensions: "7.5 x 6.5 x 3.2 in",
      material: "Plastic & Metal",
      itemsIncluded: ["Headphones", "Carrying Case", "Charging Cable", "Manual"]
    },
    link: "/product/1",
    inWishlist: false
  },
  {
    id: 2,
    image: product5,
    gallery: [
      product5,
      product5
    ],
    name: "Professional Studio Headphones",
    price: 249.99,
    originalPrice: 299.99,
    onSale: true,
    description: "High-fidelity studio headphones for professional audio production and critical listening.",
    category: "headphones",
    categoryDisplay: "Headphones",
    rating: 4.7,
    badge: "Featured",
    specs: {
      color: "Silver",
      weight: "320g",
      dimensions: "8.2 x 7.1 x 3.8 in",
      material: "Metal & Leather",
      itemsIncluded: ["Headphones", "Audio Cable", "Adapter", "Manual"]
    },
    link: "/product/2",
    inWishlist: false
  },
  {
    id: 3,
    image: product6,
    gallery: [
      product6,
      product6
    ],
    name: "Wireless Sports Earbuds",
    price: 89.99,
    originalPrice: 119.99,
    onSale: true,
    description: "Sweat-resistant wireless earbuds with secure fit, perfect for workouts and active lifestyle.",
    category: "headphones",
    categoryDisplay: "Headphones",
    rating: 4.2,
    badge: "New",
    specs: {
      color: "Blue",
      weight: "45g",
      dimensions: "2.5 x 1.5 x 0.8 in",
      material: "Silicone & Plastic",
      itemsIncluded: ["Earbuds", "Charging Case", "Ear Tips", "Manual"]
    },
    link: "/product/3",
    inWishlist: false
  },
  {
    id: 4,
    image: product7,
    gallery: [
      product7,
      product7
    ],
    name: "RGB Gaming Headset",
    price: 129.99,
    originalPrice: 159.99,
    onSale: true,
    description: "7.1 surround sound gaming headset with customizable RGB lighting and noise-cancelling mic.",
    category: "headphones",
    categoryDisplay: "Headphones",
    rating: 4.6,
    badge: "Sale",
    specs: {
      color: "Black/Red",
      weight: "380g",
      dimensions: "8.5 x 7.8 x 4.2 in",
      material: "Plastic & Metal",
      itemsIncluded: ["Headset", "USB Cable", "Manual", "Adapter"]
    },
    link: "/product/4",
    inWishlist: false
  },

  // Smart Watches (4 products)
  {
    id: 5,
    image: product8,
    gallery: [
      product8,
      product8,
      product8
    ],
    name: "Luxury Smart Watch Pro",
    price: 299.99,
    originalPrice: 399.99,
    onSale: true,
    description: "Premium smartwatch with health monitoring, GPS, and 7-day battery life in elegant design.",
    category: "smart-watches",
    categoryDisplay: "Smart Watches",
    rating: 4.7,
    badge: "Limited",
    specs: {
      color: "Black",
      weight: "47g",
      dimensions: "44 x 38 x 10.7 mm",
      material: "Aluminum & Glass",
      itemsIncluded: ["Watch", "Charging Cable", "Manual", "Warranty Card"]
    },
    link: "/product/5",
    inWishlist: false
  },
  {
    id: 6,
    image: product6,
    gallery: [
      product6,
      product6
    ],
    name: "Advanced Fitness Tracker",
    price: 149.99,
    originalPrice: 199.99,
    onSale: true,
    description: "Lightweight fitness tracker with heart rate monitoring, sleep tracking, and smartphone notifications.",
    category: "smart-watches",
    categoryDisplay: "Smart Watches",
    rating: 4.0,
    badge: "New",
    specs: {
      color: "Silver",
      weight: "35g",
      dimensions: "40 x 34 x 9.5 mm",
      material: "Silicone & Plastic",
      itemsIncluded: ["Watch", "Charging Dock", "Manual"]
    },
    link: "/product/6",
    inWishlist: false
  },
  {
    id: 7,
    image: product10,
    gallery: [
      product10,
      product10
    ],
    name: "Classic Edition Smart Watch",
    price: 249.99,
    originalPrice: 299.99,
    onSale: true,
    description: "Timeless design meets modern technology with leather strap and comprehensive health features.",
    category: "smart-watches",
    categoryDisplay: "Smart Watches",
    rating: 5.0,
    badge: "Classic",
    specs: {
      color: "Brown/Black",
      weight: "52g",
      dimensions: "42 x 36 x 11 mm",
      material: "Stainless Steel & Leather",
      itemsIncluded: ["Watch", "Charging Cable", "Leather Strap", "Manual"]
    },
    link: "/product/7",
    inWishlist: false
  },
  {
    id: 8,
    image: product11,
    gallery: [
      product11,
      product11
    ],
    name: "Rugged Sports Watch",
    price: 199.99,
    originalPrice: 249.99,
    onSale: true,
    description: "Durable sports watch with GPS, altitude tracking, and military-grade durability for outdoor adventures.",
    category: "smart-watches",
    categoryDisplay: "Smart Watches",
    rating: 4.6,
    badge: "Sports",
    specs: {
      color: "Black/Orange",
      weight: "68g",
      dimensions: "46 x 46 x 13.5 mm",
      material: "Polymer & Glass",
      itemsIncluded: ["Watch", "Charging Cable", "Manual", "Screen Protector"]
    },
    link: "/product/8",
    inWishlist: false
  },

  // Dresses (4 products)
  {
    id: 9,
    image: product12,
    gallery: [
      product12,
      product12,
      product12
    ],
    name: "Elegant Evening Gown",
    price: 189.99,
    featured: true,
    originalPrice: 239.99,
    onSale: true,
    description: "Floor-length evening gown with intricate lace detailing and flowing silhouette for special occasions.",
    category: "dresses",
    categoryDisplay: "Dresses",
    rating: 4.8,
    badge: "New Arrival",
    specs: {
      color: "Navy Blue",
      weight: "850g",
      dimensions: "Various Sizes Available",
      material: "Silk & Chiffon",
      itemsIncluded: ["Dress", "Garment Bag", "Care Instructions"]
    },
    link: "/product/9",
    inWishlist: false
  },
  {
    id: 10,
    image: product13,
    gallery: [
      product13,
      product13
    ],
    name: "Classic Cocktail Dress",
    price: 129.99,
    originalPrice: 159.99,
    onSale: true,
    description: "Timeless black cocktail dress with elegant cut and premium fabric, perfect for formal events.",
    category: "dresses",
    categoryDisplay: "Dresses",
    rating: 5.0,
    badge: "Bestseller",
    specs: {
      color: "Black",
      weight: "410g",
      dimensions: "Various Sizes Available",
      material: "Satin",
      itemsIncluded: ["Dress", "Garment Bag"]
    },
    link: "/product/10",
    inWishlist: false
  },
  {
    id: 11,
    image: product14,
    gallery: [
      product14,
      product14
    ],
    name: "Floral Summer Dress",
    price: 79.99,
    originalPrice: 99.99,
    onSale: true,
    description: "Lightweight floral print summer dress with flowing fabric and comfortable fit for warm days.",
    category: "dresses",
    categoryDisplay: "Dresses",
    rating: 4.3,
    badge: "Summer",
    specs: {
      color: "Floral Pattern",
      weight: "320g",
      dimensions: "Various Sizes Available",
      material: "Cotton",
      itemsIncluded: ["Dress", "Care Label"]
    },
    link: "/product/11",
    inWishlist: false
  },
  {
    id: 12,
    image: product2,
    gallery: [
      product2,
      product2
    ],
    name: "Everyday Casual Dress",
    price: 59.99,
    originalPrice: 79.99,
    onSale: true,
    description: "Comfortable and versatile casual dress perfect for everyday wear, made from breathable cotton.",
    category: "dresses",
    categoryDisplay: "Dresses",
    rating: 4.7,
    badge: "Casual",
    specs: {
      color: "Beige",
      weight: "480g",
      dimensions: "Various Sizes Available",
      material: "Cotton",
      itemsIncluded: ["Dress", "Size Guide", "Care Instructions"]
    },
    link: "/product/12",
    inWishlist: false
  },

  // Shoes (4 products)
  {
    id: 13,
    image: product3,
    gallery: [
      product3,
      product3,
      product3
    ],
    name: "Designer High Heels",
    price: 149.99,
    featured: true,
    originalPrice: 199.99,
    onSale: true,
    description: "Elegant designer high heels with premium leather and comfortable cushioning for all-day wear.",
    category: "shoes",
    categoryDisplay: "Shoes",
    rating: 4.6,
    badge: "Luxury",
    specs: {
      color: "Black",
      weight: "420g",
      dimensions: "Various Sizes Available",
      material: "Genuine Leather",
      itemsIncluded: ["Shoes", "Shoebox", "Dust Bag"]
    },
    link: "/product/13",
    inWishlist: false
  },
  {
    id: 14,
    name: "Advanced Running Shoes",
    price: 129.99,
    originalPrice: 159.99,
    onSale: true,
    image: product15,
    gallery: [
      product15,
      product15
    ],
    description: "Professional running shoes with advanced cushioning technology and breathable mesh design.",
    category: "shoes",
    categoryDisplay: "Shoes",
    rating: 5.0,
    badge: "Featured",
    specs: {
      color: "Blue/White",
      weight: "280g",
      dimensions: "Various Sizes Available",
      material: "Mesh & Rubber",
      itemsIncluded: ["Shoes", "Shoebox", "Extra Laces"]
    },
    link: "/product/14",
    inWishlist: false
  },
  {
    id: 15,
    name: "Premium Leather Boots",
    price: 179.99,
    originalPrice: 229.99,
    onSale: true,
    image: product16,
    gallery: [
      product16,
      product16
    ],
    description: "Handcrafted leather boots with weather-resistant finish and comfortable inner lining for cold seasons.",
    category: "shoes",
    categoryDisplay: "Shoes",
    rating: 4.2,
    badge: "Winter",
    specs: {
      color: "Brown",
      weight: "580g",
      dimensions: "Various Sizes Available",
      material: "Suede & Rubber",
      itemsIncluded: ["Boots", "Shoebox", "Care Instructions"]
    },
    link: "/product/15",
    inWishlist: false
  },
  {
    id: 16,
    name: "Comfortable Summer Sandals",
    price: 49.99,
    originalPrice: 69.99,
    onSale: true,
    image: product17,
    gallery: [
      product17,
      product17
    ],
    description: "Lightweight and comfortable sandals with ergonomic footbed, perfect for beach and casual wear.",
    category: "shoes",
    categoryDisplay: "Shoes",
    rating: 4.7,
    badge: "Summer",
    specs: {
      color: "Brown",
      weight: "210g",
      dimensions: "Various Sizes Available",
      material: "Leather & Rubber",
      itemsIncluded: ["Sandals", "Shoebox"]
    },
    link: "/product/16",
    inWishlist: false
  },

  // Accessories (4 products)
  {
    id: 17,
    name: "Sterling Silver Necklace",
    price: 149.99,
    featured: true,
    originalPrice: 199.99,
    onSale: true,
    image: product4,
    gallery: [
      product4,
      product4,
      product4
    ],
    description: "Handcrafted sterling silver necklace with genuine gemstone pendant and adjustable chain.",
    category: "accessories",
    categoryDisplay: "Accessories",
    rating: 4.7,
    badge: "Elegant",
    specs: {
      color: "Silver",
      weight: "45g",
      dimensions: "18 inch chain",
      material: "Sterling Silver",
      itemsIncluded: ["Necklace", "Jewelry Box", "Cleaning Cloth"]
    },
    link: "/product/17",
    inWishlist: false
  },
  {
    id: 18,
    name: "Designer Leather Handbag",
    price: 299.99,
    originalPrice: 399.99,
    onSale: true,
    image: product18,
    gallery: [
      product18,
      product18
    ],
    description: "Premium leather handbag with multiple compartments, gold-tone hardware, and detachable strap.",
    category: "accessories",
    categoryDisplay: "Accessories",
    rating: 5.0,
    badge: "Luxury",
    specs: {
      color: "Camel",
      weight: "950g",
      dimensions: "12 x 8 x 5 in",
      material: "Genuine Leather",
      itemsIncluded: ["Handbag", "Dust Bag", "Authenticity Card"]
    },
    link: "/product/18",
    inWishlist: false
  },
  {
    id: 19,
    name: "Polarized Aviator Sunglasses",
    price: 89.99,
    originalPrice: 119.99,
    onSale: true,
    image: product19,
    gallery: [
      product19,
      product19
    ],
    description: "Classic aviator sunglasses with polarized lenses, UV400 protection, and lightweight metal frame.",
    category: "accessories",
    categoryDisplay: "Accessories",
    rating: 4.3,
    badge: "UV Protection",
    specs: {
      color: "Gold/Black",
      weight: "38g",
      dimensions: "5.5 x 2 x 1.5 in",
      material: "Metal & Glass",
      itemsIncluded: ["Sunglasses", "Case", "Cleaning Cloth"]
    },
    link: "/product/19",
    inWishlist: false
  },
  {
    id: 20,
    name: "Leather Smartwatch Band",
    price: 39.99,
    originalPrice: 59.99,
    onSale: true,
    image: product20,
    gallery: [
      product20,
      product20
    ],
    description: "Premium leather replacement band compatible with most smartwatches, available in multiple colors.",
    category: "accessories",
    categoryDisplay: "Accessories",
    rating: 4.6,
    badge: "Compatible",
    specs: {
      color: "Brown",
      weight: "25g",
      dimensions: "Fits 20-22mm watches",
      material: "Genuine Leather",
      itemsIncluded: ["Watch Band", "Spring Bars", "Installation Tool"]
    },
    link: "/product/20",
    inWishlist: false
  }
];