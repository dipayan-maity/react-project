// gadgets.js
export const gadgets = [
  // Headphones (4 products)
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1434493652601-8dabae5c8e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1434493652601-8dabae5c8e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1434493652601-8dabae5c8e89?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1547996160-81dfd9c9b7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1547996160-81dfd9c9b7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1547996160-81dfd9c9b7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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
    image: "https://images.unsplash.com/photo-1582142306909-195724d1a6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1582142306909-195724d1a6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582142306909-195724d1a6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
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