import { Navigation } from "@/components/Navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroOcean from "@/assets/hero-ocean.jpg";
import mantaRay from "@/assets/manta-ray.jpg";
import coralReef from "@/assets/coral-reef.jpg";
import feedingShow from "@/assets/feeding-show.jpg";
import aquariumTunnel from "@/assets/aquarium-tunnel.jpg";
import jellyfish from "@/assets/jellyfish.jpg";
import seaTurtle from "@/assets/sea-turtle.jpg";
import sharks from "@/assets/sharks.jpg";
import touchPool from "@/assets/touch-pool.jpg";
import penguins from "@/assets/penguins.jpg";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const images = [
    { src: heroOcean, title: "Coral Reef Paradise", category: "Marine Life" },
    { src: aquariumTunnel, title: "Underwater Tunnel", category: "Facilities" },
    { src: mantaRay, title: "Majestic Manta Ray", category: "Marine Life" },
    { src: jellyfish, title: "Jellyfish Kingdom", category: "Marine Life" },
    { src: seaTurtle, title: "Sea Turtle Sanctuary", category: "Marine Life" },
    { src: sharks, title: "Shark Lagoon", category: "Marine Life" },
    { src: coralReef, title: "Tropical Fish", category: "Marine Life" },
    { src: feedingShow, title: "Feeding Show", category: "Events" },
    { src: touchPool, title: "Interactive Experience", category: "Facilities" },
    { src: penguins, title: "Penguin Paradise", category: "Marine Life" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden mt-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Gallery
          </h1>
          <p
            className={`text-xl md:text-2xl text-foreground/90 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Explore the Beauty of Ocean Safari Through Images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer bg-card border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-primary font-semibold mb-1">{image.category}</p>
                    <h3 className="text-xl font-bold text-foreground">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
          <div className="relative">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <FloatingCTA />
    </div>
  );
};

export default Gallery;
