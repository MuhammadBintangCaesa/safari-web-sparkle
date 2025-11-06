import { Ticket, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Book Ticket Button - Right Side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 animate-float">
        <Button
          size="lg"
          className="rounded-l-full rounded-r-none bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 shadow-lg hover:shadow-xl transition-all duration-300 pl-6 pr-8"
        >
          <Ticket className="mr-2 h-5 w-5" />
          <span className="font-bold">Book Ticket</span>
        </Button>
      </div>

      {/* Contact Button - Right Side Below */}
      <div className="fixed right-0 top-1/2 translate-y-16 z-40 animate-float" style={{ animationDelay: "0.5s" }}>
        <Button
          size="lg"
          variant="outline"
          className="rounded-l-full rounded-r-none border-primary/50 hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 pl-6 pr-8"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          <span className="font-bold">Contact</span>
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};
