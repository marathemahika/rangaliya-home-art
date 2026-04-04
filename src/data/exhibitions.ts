export interface Exhibition {
  id: string;
  title: string;
  gallery: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  upcoming: boolean;
}

export const exhibitions: Exhibition[] = [
  {
    id: "1",
    title: "Textures of Home",
    gallery: "The White Gallery",
    location: "Colombo, Sri Lanka",
    startDate: "2026-05-15",
    endDate: "2026-06-10",
    description: "A curated showcase of mixed media and oil paintings exploring the warmth and textures of domestic spaces.",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?w=800&q=80",
    upcoming: true,
  },
  {
    id: "2",
    title: "Nature in Stillness",
    gallery: "Barefoot Gallery",
    location: "Colombo, Sri Lanka",
    startDate: "2026-07-01",
    endDate: "2026-07-20",
    description: "Watercolor and acrylic works inspired by the quiet beauty of nature — botanicals, landscapes, and organic forms.",
    image: "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
    upcoming: true,
  },
  {
    id: "3",
    title: "Abstract Horizons",
    gallery: "Lionel Wendt Art Centre",
    location: "Colombo, Sri Lanka",
    startDate: "2026-09-05",
    endDate: "2026-09-25",
    description: "Bold abstract compositions in large-scale formats, designed to transform contemporary living spaces.",
    image: "https://images.unsplash.com/photo-1531913764164-f85c3e01b2aa?w=800&q=80",
    upcoming: true,
  },
  {
    id: "4",
    title: "Walls That Speak",
    gallery: "Saskia Fernando Gallery",
    location: "Colombo, Sri Lanka",
    startDate: "2025-11-10",
    endDate: "2025-12-05",
    description: "An exhibition celebrating art as an essential element of interior design, featuring works across all mediums.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    upcoming: false,
  },
];
