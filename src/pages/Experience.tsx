import { Navigation } from "@/components/Navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import jellyfish from "@/assets/jellyfish.jpg";
import seaTurtle from "@/assets/sea-turtle.jpg";
import sharks from "@/assets/sharks.jpg";
import touchPool from "@/assets/touch-pool.jpg";
import penguins from "@/assets/penguins.jpg";
import mantaRay from "@/assets/manta-ray.jpg";
import aquariumTunnel from "@/assets/aquarium-tunnel.jpg";
import { useEffect, useState } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const zones = [
    {
      title: "Underwater Tunnel",
      description: "Walk through our spectacular 50-meter underwater tunnel surrounded by sharks, rays, and tropical fish",
      image: aquariumTunnel,
      zone: "Zone 1",
    },
    {
      title: "Shark Lagoon",
      description: "Get up close with various shark species including reef sharks and hammerheads in our largest tank",
      image: sharks,
      zone: "Zone 2",
    },
    {
      title: "Jellyfish Kingdom",
      description: "Experience the mesmerizing beauty of bioluminescent jellyfish in our dark illuminated gallery",
      image: jellyfish,
      zone: "Zone 3",
    },
    {
      title: "Turtle Sanctuary",
      description: "Meet our rescued sea turtles and learn about conservation efforts to protect these amazing creatures",
      image: seaTurtle,
      zone: "Zone 4",
    },
    {
      title: "Ray Encounter",
      description: "Watch majestic manta rays and stingrays glide gracefully through the water in this open-top exhibit",
      image: mantaRay,
      zone: "Zone 5",
    },
    {
      title: "Penguin Paradise",
      description: "Discover our playful penguin colony in a climate-controlled habitat designed to mimic their natural environment",
      image: penguins,
      zone: "Zone 6",
    },
    {
      title: "Interactive Touch Pool",
      description: "Get hands-on with starfish, sea cucumbers, and other fascinating tide pool creatures",
      image: touchPool,
      zone: "Zone 7",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20 mb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Explore Our Zones
          </h1>
          <p
            className={`text-xl md:text-2xl text-foreground/90 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            15 Immersive Zones Showcasing Marine Life from Around the World
          </p>
        </div>
      </section>

      {/* Zones Grid */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {zones.map((zone, index) => (
              <Card
                key={zone.title}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary/90 rounded-full text-primary-foreground font-bold text-sm">
                    {zone.zone}
                  </div>
                </div>

                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {zone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {zone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Experiences */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-16">
            Special Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Behind the Scenes Tour",
                description: "Discover what happens backstage with our marine biologists and animal care team",
                price: "Rp 350,000",
              },
              {
                title: "Dive with Sharks",
                description: "Experience the thrill of diving in our main tank with trained instructors",
                price: "Rp 1,500,000",
              },
              {
                title: "Marine Biologist for a Day",
                description: "Learn about marine biology through hands-on activities and animal care",
                price: "Rp 500,000",
              },
            ].map((experience, index) => (
              <div
                key={experience.title}
                className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-bold text-foreground">{experience.title}</h3>
                <p className="text-muted-foreground">{experience.description}</p>
                <div className="pt-4">
                  <span className="text-3xl font-bold text-primary">{experience.price}</span>
                  <span className="text-muted-foreground ml-2">per person</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Experience;
