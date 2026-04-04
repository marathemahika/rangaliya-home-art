import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { exhibitions } from "@/data/exhibitions";
import { format } from "date-fns";
import { MapPin, Calendar } from "lucide-react";

const upcoming = exhibitions.filter((e) => e.upcoming);
const past = exhibitions.filter((e) => !e.upcoming);

const ExhibitionCard = ({ exhibition }: { exhibition: typeof exhibitions[0] }) => (
  <div className="group">
    <div className="aspect-[16/9] overflow-hidden bg-muted mb-4">
      <img
        src={exhibition.image}
        alt={exhibition.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      {exhibition.title}
    </h3>
    <p className="text-sm font-medium text-foreground mb-2">{exhibition.gallery}</p>
    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
      <MapPin size={12} />
      {exhibition.location}
    </div>
    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
      <Calendar size={12} />
      {format(new Date(exhibition.startDate), "MMM d")} – {format(new Date(exhibition.endDate), "MMM d, yyyy")}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{exhibition.description}</p>
  </div>
);

const Exhibitions = () => (
  <div className="min-h-screen pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Shows & Events</p>
        <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
          Exhibitions
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-xl">
          Experience Rangaliya artworks in person. Visit our upcoming exhibitions at galleries and art spaces.
        </p>
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Upcoming
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcoming.map((ex) => (
              <ExhibitionCard key={ex.id} exhibition={ex} />
            ))}
          </div>
        </section>
      )}

      {/* Past */}
      {past.length > 0 && (
        <section>
          <h2 className="text-2xl mb-8 text-muted-foreground" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            Past Exhibitions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 opacity-75">
            {past.map((ex) => (
              <ExhibitionCard key={ex.id} exhibition={ex} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="text-muted-foreground mb-4">Interested in hosting a Rangaliya exhibition at your gallery?</p>
        <Button asChild variant="outline" className="tracking-wider uppercase text-xs">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default Exhibitions;
