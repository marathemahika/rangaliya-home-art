import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import Reveal from "@/components/Reveal";
import { artworks, mediums, categories } from "@/data/artworks";

const Gallery = () => {
  const [selectedMedium, setSelectedMedium] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = artworks.filter((a) => {
    if (selectedMedium !== "All" && a.medium !== selectedMedium) return false;
    if (selectedCategory !== "All" && a.category !== selectedCategory) return false;
    return true;
  });

  const FilterButton = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`text-xs tracking-wider uppercase px-3 py-1.5 rounded-sm transition-all duration-300 ${
        active
          ? "bg-primary text-primary-foreground scale-105"
          : "text-muted-foreground hover:text-foreground hover:scale-105"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Collection</p>
            <h1 className="text-4xl md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
              Gallery
            </h1>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="mb-12 space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Medium</p>
              <div className="flex flex-wrap gap-2">
                <FilterButton label="All" active={selectedMedium === "All"} onClick={() => setSelectedMedium("All")} />
                {mediums.map((m) => (
                  <FilterButton key={m} label={m} active={selectedMedium === m} onClick={() => setSelectedMedium(m)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Category</p>
              <div className="flex flex-wrap gap-2">
                <FilterButton label="All" active={selectedCategory === "All"} onClick={() => setSelectedCategory("All")} />
                {categories.map((c) => (
                  <FilterButton key={c} label={c} active={selectedCategory === c} onClick={() => setSelectedCategory(c)} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((art, i) => (
              <Reveal key={art.id} delay={i * 80} direction="up">
                <ArtworkCard artwork={art} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-20">No artworks match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
