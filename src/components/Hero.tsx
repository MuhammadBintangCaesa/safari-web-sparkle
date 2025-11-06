import { useEffect, useState } from "react";
import heroOcean from "@/assets/hero-ocean.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroOcean}
          alt="Underwater ocean scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}%`,
              animation: `bubble ${Math.random() * 6 + 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Schedule Badge */}
        <div
          className={`inline-block mb-8 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-primary/30 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="text-primary font-semibold">SUN-THU:</span> 10:00-20:30 |{" "}
            <span className="text-primary font-semibold">FRI & SAT:</span> 10:00-22:00
          </p>
        </div>

        {/* Hero Text with Handwritten Style */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="block text-primary/90 italic font-extrabold tracking-wider">
              #Find
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent italic font-black mt-2">
              Your Magic
            </span>
          </h1>
          
          {/* Decorative Underline */}
          <div className="flex justify-center mt-4">
            <svg
              className="w-64 md:w-96 h-8 text-primary/60"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 10 Q 75 5, 150 10 T 295 10"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-wave"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p
          className={`mt-8 text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Dive into an underwater world of wonder. Experience magical marine life, stunning shows, and unforgettable moments.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
