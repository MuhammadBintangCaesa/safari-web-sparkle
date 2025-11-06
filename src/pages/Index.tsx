import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EventCard } from "@/components/EventCard";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
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

      {/* Featured Zones Preview */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Explore 15 Amazing Zones
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Journey through diverse marine habitats from around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              { name: "Underwater Tunnel", icon: "🌊" },
              { name: "Shark Lagoon", icon: "🦈" },
              { name: "Jellyfish Kingdom", icon: "🪼" },
              { name: "Coral Reef", icon: "🐠" },
              { name: "Touch Pool", icon: "✋" },
            ].map((zone, index) => (
              <div
                key={zone.name}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 text-center space-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{zone.icon}</div>
                <p className="font-semibold text-sm">{zone.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="/experience">View All Zones</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              What Visitors Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review: "Absolutely magical experience! The underwater tunnel is breathtaking and the staff are incredibly knowledgeable.",
                rating: 5,
              },
              {
                name: "Ahmad Rizki",
                review: "Took my kids here and they loved it! The interactive touch pool was their favorite. Highly recommended for families.",
                rating: 5,
              },
              {
                name: "Maria Santos",
                review: "Best aquarium in Jakarta! The jellyfish display is mesmerizing and the mermaid show is world-class.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-8 rounded-xl bg-card border border-border space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 text-secondary text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-foreground/80 italic">&quot;{testimonial.review}&quot;</p>
                <p className="font-semibold text-primary">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Dive In?
          </h2>
          <p className="text-xl text-muted-foreground">
            Book your tickets now and embark on an unforgettable underwater adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80">
              Book Tickets Now
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/visit">Plan Your Visit</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Ocean Safari</h3>
              <p className="text-muted-foreground">
                Discover the magic of the ocean with us. An unforgettable journey into the deep blue.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="/experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="/visit" className="hover:text-primary transition-colors">Visit</a></li>
                <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
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
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Neo SOHO Mall</li>
                <li>West Jakarta, Indonesia</li>
                <li className="pt-2 text-primary font-semibold">+62 811 1111 2586</li>
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
