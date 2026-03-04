import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const isPortfolioPage = location.pathname === "/portfolio";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    if (isPortfolioPage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-black text-lg md:text-xl tracking-tight text-foreground hover:text-primary transition-colors"
          >
            HKD
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`nav-link ${
                  !isPortfolioPage && activeSection === id ? "nav-link-active" : ""
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => navigate("/portfolio")}
              className={`nav-link ${isPortfolioPage ? "nav-link-active" : ""}`}
            >
              Portfolio
            </button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-foreground hover:text-primary transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-background/95 backdrop-blur-lg border-l border-border/50">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left text-lg font-semibold py-2 px-4 rounded-lg transition-all ${
                      !isPortfolioPage && activeSection === id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => { navigate("/portfolio"); setIsOpen(false); }}
                  className={`text-left text-lg font-semibold py-2 px-4 rounded-lg transition-all ${
                    isPortfolioPage
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  Portfolio
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
