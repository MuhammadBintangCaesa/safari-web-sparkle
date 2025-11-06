import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Ocean Safari
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              to="/about"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/experience"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/experience")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Experience
            </Link>
            <Link
              to="/visit"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/visit")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Visit
            </Link>
            <Link
              to="/gallery"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/gallery")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Gallery
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80">
              Book Ticket
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link
              to="/about"
              className={`block py-2 px-4 rounded-md transition-colors ${
                isActive("/about") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/experience"
              className={`block py-2 px-4 rounded-md transition-colors ${
                isActive("/experience") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="/visit"
              className={`block py-2 px-4 rounded-md transition-colors ${
                isActive("/visit") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Visit
            </Link>
            <Link
              to="/gallery"
              className={`block py-2 px-4 rounded-md transition-colors ${
                isActive("/gallery") ? "bg-primary text-primary-foreground" : "hover:bg-accent"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
              <Button variant="default" className="w-full bg-gradient-to-r from-secondary to-secondary/90">
                Book Ticket
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
