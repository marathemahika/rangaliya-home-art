import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      <Reveal direction="up">
        <div>
          <h3 className="text-xl tracking-widest uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Rangaliya
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Handcrafted artworks for your home. Each piece tells a story.
          </p>
        </div>
      </Reveal>
      <Reveal direction="up" delay={100}>
        <div>
          <h4 className="text-sm tracking-wider uppercase mb-4 text-foreground">Explore</h4>
          <div className="space-y-2">
            {[
              { label: "Gallery", path: "/gallery" },
              { label: "Custom Orders", path: "/custom" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal direction="up" delay={200}>
        <div>
          <h4 className="text-sm tracking-wider uppercase mb-4 text-foreground">Connect</h4>
          <p className="text-sm text-muted-foreground">studio@rangaliya.com</p>
          <p className="text-sm text-muted-foreground mt-1">Instagram · Pinterest</p>
        </div>
      </Reveal>
    </div>
    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Rangaliya. All rights reserved.
    </div>
  </footer>
);

export default Footer;
