import { Navigation } from "@/components/Navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import aquariumTunnel from "@/assets/aquarium-tunnel.jpg";
import { Users, Heart, Award, Target } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Conservation",
      description: "Dedicated to protecting marine life and ocean ecosystems for future generations",
    },
    {
      icon: Users,
      title: "Education",
      description: "Inspiring visitors to learn about and appreciate the wonders of the underwater world",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Providing world-class facilities and unforgettable experiences for all visitors",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Using cutting-edge technology to create immersive marine experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={aquariumTunnel}
            alt="Aquarium tunnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Ocean Safari
          </h1>
          <p
            className={`text-xl md:text-2xl text-foreground/90 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Where Marine Magic Comes to Life
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="text-xl font-semibold text-primary">
              Welcome to Ocean Safari, Indonesia's premier aquarium destination
            </p>
            <p>
              Since our opening, Ocean Safari has been dedicated to bringing the wonders of the ocean to life. 
              Our state-of-the-art facility houses over 5,000 marine creatures from 300 different species, 
              making us one of Southeast Asia's most comprehensive aquariums.
            </p>
            <p>
              We believe in the power of direct experience to inspire conservation. Every visit to Ocean Safari 
              is designed to create lasting memories while fostering a deeper understanding and appreciation for 
              marine ecosystems.
            </p>
            <p>
              Our team of marine biologists, educators, and conservationists work tirelessly to ensure both 
              the wellbeing of our marine residents and the quality of your experience. From our immersive 
              underwater tunnel to our interactive touch pools, every element is crafted to bring you closer 
              to the ocean's mysteries.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-16">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center space-y-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Marine Creatures" },
              { number: "300+", label: "Species" },
              { number: "15", label: "Interactive Zones" },
              { number: "1M+", label: "Annual Visitors" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center space-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default About;
