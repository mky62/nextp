import { ProductType } from "../types";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit amet consect adipisicing elit",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Nike Pro Training Shorts",
    shortDescription:
      "Comfortable athletic shorts designed for intense workouts and training",
    description:
      "Premium quality training shorts with moisture-wicking fabric and ergonomic design for maximum performance during your workout sessions",
    price: 34.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Puma Running Jacket",
    shortDescription:
      "Lightweight windbreaker perfect for outdoor running in any weather",
    description:
      "Water-resistant running jacket with reflective details and ventilation zones to keep you comfortable during long distance runs",
    price: 79.9,
    sizes: ["m", "l", "xl", "xxl"],
    colors: ["black", "blue", "green"],
    images: {
      black: "/products/3b.png",
      blue: "/products/3bl.png",
      green: "/products/3gr.png",
    },
  },
  {
    id: 4,
    name: "Under Armour Compression Pants",
    shortDescription:
      "High-performance compression leggings for enhanced athletic performance",
    description:
      "Advanced compression technology provides muscle support and improved blood flow during training while keeping you dry and comfortable",
    price: 54.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["purple", "white"],
    images: {
      purple: "/products/4p.png",
      white: "/products/4w.png",
    },
  },
  {
    id: 5,
    name: "Reebok CrossFit Tank Top",
    shortDescription:
      "Breathable sleeveless tank for high-intensity interval training",
    description:
      "Engineered mesh fabric provides maximum breathability while anti-odor technology keeps you fresh during the toughest CrossFit sessions",
    price: 29.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["blue", "orange", "red"],
    images: {
      blue: "/products/5bl.png",
      orange: "/products/5o.png",
      red: "/products/5r.png",
    },
  },
  {
    id: 6,
    name: "New Balance Running Shoes",
    shortDescription:
      "Cushioned running shoes with superior shock absorption technology",
    description:
      "Responsive foam midsole combined with breathable mesh upper delivers comfort and support for runners of all levels on any terrain",
    price: 119.9,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["gray", "white"],
    images: {
      gray: "/products/6g.png",
      white: "/products/6w.png",
    },
  },
  {
    id: 7,
    name: "Asics Performance Socks",
    shortDescription:
      "Moisture-wicking athletic socks with arch support and cushioning",
    description:
      "Premium blend fabric with strategic cushioning zones provides blister prevention and all-day comfort during any athletic activity",
    price: 14.9,
    sizes: ["s", "m", "l"],
    colors: ["gray", "purple"],
    images: {
      gray: "/products/7g.png",
      purple: "/products/7p.png",
    },
  },
  {
    id: 8,
    name: "Champion Sports Hoodie",
    shortDescription:
      "Classic pullover hoodie perfect for casual wear and warm-ups",
    description:
      "Soft fleece interior with adjustable drawstring hood and kangaroo pocket makes this hoodie ideal for layering before and after workouts",
    price: 49.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["black", "green"],
    images: {
      black: "/products/8b.png",
      green: "/products/8gr.png",
    },
  },
];