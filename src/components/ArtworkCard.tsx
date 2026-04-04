import { Link } from "react-router-dom";
import type { Artwork } from "@/data/artworks";

const ArtworkCard = ({ artwork }: { artwork: Artwork }) => (
  <Link to={`/artwork/${artwork.id}`} className="group block">
    <div className="aspect-[3/4] overflow-hidden bg-muted relative">
      <img
        src={artwork.image}
        alt={artwork.title}
        className="w-full h-[320px] object-cover"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          View Details
        </p>
      </div>
    </div>
    <div className="mt-4 space-y-1">
      <h3 className="text-lg transition-colors duration-300 group-hover:text-gray-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {artwork.title}
      </h3>
      <p className="text-xs text-muted-foreground tracking-wider uppercase">
        {artwork.medium} · {artwork.dimensions}
      </p>
      <p className="text-black font-medium mt-1">${artwork.price}</p>
    </div>
  </Link>
);

export default ArtworkCard;
