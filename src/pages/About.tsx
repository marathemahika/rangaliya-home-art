import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const About = () => (
  <div className="min-h-screen pt-24 pb-16 px-6">
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <div className="mb-12">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">The Artist</p>
          <h1 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}>
            About Rangaliya
          </h1>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <div className="aspect-[4/5] bg-muted overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
              alt="Artist at work"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal direction="right" delay={100}>
            <p className="text-muted-foreground leading-relaxed">
              Rangaliya is a home decor art brand rooted in the belief that every space deserves beauty that resonates. Each piece is handcrafted with intention, blending diverse mediums — from oil and watercolor to mixed media — to create works that feel both timeless and personal.
            </p>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <p className="text-muted-foreground leading-relaxed">
              Every artwork is designed with home interiors in mind — whether it's a commanding statement piece for your living room or a subtle, calming composition for a bedroom retreat. I work across various styles and mediums to ensure there's something for every aesthetic.
            </p>
          </Reveal>
          <Reveal direction="right" delay={300}>
            <p className="text-muted-foreground leading-relaxed">
              Beyond the collection, I offer fully custom artwork — collaborating closely with you to create a piece that fits your space, your palette, and your story.
            </p>
          </Reveal>
          <Reveal direction="right" delay={400}>
            <div className="pt-4">
              <Button asChild variant="outline" className="tracking-wider uppercase text-xs hover:scale-105 transition-transform duration-300">
                <Link to="/custom">Commission a Piece</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </div>
);

export default About;
