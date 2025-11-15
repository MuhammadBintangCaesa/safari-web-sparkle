import { useState, useEffect } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroTravel from "@/assets/hero-travel.jpg";

const TravelHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTravel}
          alt="Paradise destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`text-center space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Temukan Petualangan Anda
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Jelajahi destinasi impian dengan harga terbaik
          </p>

          {/* Search Box */}
          <div
            className={`bg-card rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto mt-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Destinasi"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="date"
                  placeholder="Check-in"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Tamu"
                  className="pl-10 h-12 bg-background"
                />
              </div>
              <Button className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">
                <Search className="mr-2" size={20} />
                Cari
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {["Penerbangan", "Hotel", "Paket Tour", "Aktivitas"].map((item) => (
              <Button
                key={item}
                variant="secondary"
                className="bg-white/90 hover:bg-white text-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default TravelHero;
