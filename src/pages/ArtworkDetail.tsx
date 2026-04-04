import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { artworks } from "@/data/artworks";

const ArtworkDetail = () => {
  const { id } = useParams();
  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) {
    return (
      <div className="min-h-screen pt-24 px-6 text-center">
        <p className="text-muted-foreground">Artwork not found.</p>
        <Link to="/gallery" className="text-sm text-foreground underline mt-4 inline-block">Back to Gallery</Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in purchasing "${artwork.title}" ($${artwork.price}). Could you share more details?`
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Link
            to="/gallery"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-all duration-300 mb-8 gap-1 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Gallery
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal direction="left">
            <div className="aspect-[3/4] overflow-hidden bg-muted group">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center space-y-4">
            <Reveal direction="right" delay={100}>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{artwork.medium}</p>
            </Reveal>
            <Reveal direction="right" delay={180}>
              <h1 className="text-3xl md:text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
                {artwork.title}
              </h1>
            </Reveal>
            <Reveal direction="right" delay={240}>
              <p className="text-2xl text-foreground">${artwork.price}</p>
            </Reveal>
            <Reveal direction="right" delay={300}>
              <p className="text-sm text-muted-foreground leading-relaxed">{artwork.description}</p>
              <p className="text-xs text-muted-foreground mt-2">{artwork.dimensions} · {artwork.category}</p>
            </Reveal>
            <Reveal direction="right" delay={380}>
              <div className="space-y-3 pt-4">
                <Button asChild size="lg" className="w-full tracking-wider uppercase text-xs hover:scale-[1.02] transition-transform duration-300">
                  <a href={`https://wa.me/?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    Inquire via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full tracking-wider uppercase text-xs hover:scale-[1.02] transition-transform duration-300">
                  <Link to="/contact">Contact to Purchase</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
