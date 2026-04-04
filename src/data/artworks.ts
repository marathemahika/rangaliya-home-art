export type Medium = "Oil Painting" | "Watercolor" | "Acrylic" | "Mixed Media" | "Digital Art" | "Charcoal";
export type Category = "Wall Art" | "Canvas Prints" | "Abstract" | "Nature" | "Portraits" | "Minimalist";

export interface Artwork {
  id: string;
  title: string;
  medium: Medium;
  category: Category;
  price: number;
  dimensions: string;
  description: string;
  image: string;
  featured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Golden Hour Serenity",
    medium: "Oil Painting",
    category: "Nature",
    price: 450,
    dimensions: '24" × 36"',
    description: "A warm, golden landscape capturing the tranquility of sunset over rolling hills. Perfect as a living room centerpiece.",
    image: "/rangaliya-home-art/images/IMG_8471_cropped.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Ethereal Flow",
    medium: "Watercolor",
    category: "Abstract",
    price: 320,
    dimensions: '18" × 24"',
    description: "Soft, flowing watercolor abstractions in muted earth tones. Brings a calming presence to any room.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Textured Earth",
    medium: "Mixed Media",
    category: "Wall Art",
    price: 580,
    dimensions: '30" × 40"',
    description: "A richly textured piece combining natural materials and pigments, evoking the raw beauty of the earth.",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Quiet Morning",
    medium: "Acrylic",
    category: "Minimalist",
    price: 275,
    dimensions: '16" × 20"',
    description: "A minimalist composition with gentle neutral tones. Ideal for bedrooms and reading nooks.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    featured: false,
  },
  {
    id: "5",
    title: "Botanical Study I",
    medium: "Watercolor",
    category: "Nature",
    price: 220,
    dimensions: '12" × 16"',
    description: "Delicate botanical illustration with precise detail and soft washes of green and gold.",
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=800&q=80",
    featured: false,
  },
  {
    id: "6",
    title: "Urban Layers",
    medium: "Mixed Media",
    category: "Abstract",
    price: 650,
    dimensions: '36" × 48"',
    description: "Bold layered textures inspired by city architecture. A statement piece for modern interiors.",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    featured: true,
  },
  {
    id: "7",
    title: "Charcoal Portrait III",
    medium: "Charcoal",
    category: "Portraits",
    price: 380,
    dimensions: '20" × 28"',
    description: "An expressive charcoal portrait with dramatic light and shadow. Raw and emotive.",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80",
    featured: false,
  },
  {
    id: "8",
    title: "Coastal Whisper",
    medium: "Oil Painting",
    category: "Nature",
    price: 520,
    dimensions: '24" × 30"',
    description: "Soft ocean hues and gentle brushstrokes capturing the peacefulness of the coast.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    featured: false,
  },
  {
    id: "9",
    title: "Digital Dreams",
    medium: "Digital Art",
    category: "Canvas Prints",
    price: 180,
    dimensions: '20" × 20"',
    description: "A vibrant digital composition available as a high-quality canvas print.",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    featured: false,
  },
];

export const mediums: Medium[] = ["Oil Painting", "Watercolor", "Acrylic", "Mixed Media", "Digital Art", "Charcoal"];
export const categories: Category[] = ["Wall Art", "Canvas Prints", "Abstract", "Nature", "Portraits", "Minimalist"];
