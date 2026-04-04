import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "Custom Orders", path: "/custom" },
  { label: "Exhibitions", path: "/exhibitions" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home pages, show logo immediately
  useEffect(() => {
    if (!isHome) {
      setLogoVisible(true);
    } else {
      setLogoVisible(false);
      // Listen for the custom event fired by Index.tsx after logo animation
      const onLogoReady = () => setLogoVisible(true);
      window.addEventListener("rangaliya:navLogoShow", onLogoReady);
      return () => window.removeEventListener("rangaliya:navLogoShow", onLogoReady);
    }
  }, [isHome]);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled || !isHome
          ? "bg-background/95 shadow-sm backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Nav logo — hidden on home until hero animation finishes */}
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{
            opacity: logoVisible ? 1 : 0,
            transition: "opacity 0.5s ease",
            pointerEvents: logoVisible ? "auto" : "none",
          }}
        >
          <img src={logo} alt="Rangaliya logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-wide transition-all duration-300 relative
                after:absolute after:bottom-0 after:left-0 after:h-px after:bg-black after:transition-all after:duration-300
                ${location.pathname === link.path
                  ? "text-black after:w-full"
                  : "text-gray-500 hover:text-black after:w-0 hover:after:w-full"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-background border-b border-border`}
      >
        <div className="px-6 pb-6 pt-2 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`block text-sm tracking-wider uppercase transition-all duration-300 hover:translate-x-1 ${
                location.pathname === link.path ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
