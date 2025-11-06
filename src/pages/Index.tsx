import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { FloatingCTA } from "@/components/FloatingCTA";
import mantaRay from "@/assets/manta-ray.jpg";
import coralReef from "@/assets/coral-reef.jpg";
import feedingShow from "@/assets/feeding-show.jpg";

const Index = () => {
  const events = [
    {
      title: "Main Tank Interactive Feeding Show",
      time: "16:30",
      location: "Main Tank (Zone 12)",
      description:
        "Witness the biggest fishes in our main tank area as a professional diver feeds them by hand! Experience the thrill of seeing these magnificent creatures up close.",
      image: feedingShow,
    },
    {
      title: "Mermaid Show - Pearl of The South Sea",
      time: "Tue-Thu 13:00 | Fri 13:30 | Sat-Sun 13:00, 15:00, 17:00",
      location: "Zone 12",
      description:
        "An epic performance that tells a story of a King and his love for his daughter, the beautiful Princess. Be ready to be dazzled by this magical performance that combines stage act, illusion trick and underwater dance.",
      image: coralReef,
    },
    {
      title: "Ocean Explorer Experience",
      time: "Daily 11:00 - 18:00",
      location: "Discovery Zone",
      description:
        "Dive into the deep blue and discover the wonders of marine life. Touch starfish, observe majestic rays gliding through water, and learn about ocean conservation from our expert guides.",
      image: mantaRay,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Events Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              In House Show & Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience unforgettable moments with our spectacular shows and interactive events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={event.title}
                {...event}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Ocean Safari</h3>
              <p className="text-muted-foreground">
                Discover the magic of the ocean with us. An unforgettable journey into the deep blue.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Visit</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Sun-Thu: 10:00-20:30</li>
                <li>Fri & Sat: 10:00-22:00</li>
                <li className="text-sm text-secondary">Last entry 1.5 hours before closing</li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border text-muted-foreground">
            <p>&copy; 2025 Ocean Safari. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
};

export default Index;
