import { Navigation } from "@/components/Navigation";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Ticket, Users, Calendar, Info } from "lucide-react";
import { useEffect, useState } from "react";

const Visit = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ticketPrices = [
    {
      type: "Adult",
      description: "Ages 13 and above",
      weekday: "Rp 195,000",
      weekend: "Rp 225,000",
    },
    {
      type: "Child",
      description: "Ages 3-12",
      weekday: "Rp 155,000",
      weekend: "Rp 175,000",
    },
    {
      type: "Senior",
      description: "Ages 60 and above",
      weekday: "Rp 155,000",
      weekend: "Rp 175,000",
    },
    {
      type: "Family Package",
      description: "2 Adults + 2 Children",
      weekday: "Rp 650,000",
      weekend: "Rp 750,000",
    },
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
            Plan Your Visit
          </h1>
          <p
            className={`text-xl md:text-2xl text-foreground/90 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Everything You Need to Know Before You Arrive
          </p>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Opening Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold text-primary">Sun-Thu:</span> 10:00 - 20:30</p>
                <p><span className="font-semibold text-primary">Fri & Sat:</span> 10:00 - 22:00</p>
                <p className="text-sm pt-2">Last entry 1.5 hours before closing</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Neo SOHO Mall, Podomoro City</p>
                <p>Jl. Letjen S. Parman Kav.28</p>
                <p>West Jakarta 11470</p>
                <Button variant="outline" className="mt-4 w-full">Get Directions</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Visit Duration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Average visit time: <span className="font-semibold text-foreground">2-3 hours</span></p>
                <p>Best time to visit: <span className="font-semibold text-foreground">Weekday mornings</span></p>
                <p className="text-sm pt-2">Allow extra time for shows and special experiences</p>
              </CardContent>
            </Card>
          </div>

          {/* Ticket Prices */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-12">
              Ticket Prices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ticketPrices.map((ticket, index) => (
                <Card
                  key={ticket.type}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <Ticket className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{ticket.type}</CardTitle>
                    <p className="text-sm text-muted-foreground">{ticket.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Weekday</p>
                      <p className="text-2xl font-bold text-primary">{ticket.weekday}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Weekend</p>
                      <p className="text-2xl font-bold text-secondary">{ticket.weekend}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80">
                <Ticket className="mr-2 h-5 w-5" />
                Book Tickets Online
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Save 10% when you book online in advance</p>
            </div>
          </div>

          {/* Visitor Guidelines */}
          <div className="bg-card/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Visitor Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  What to Bring
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid ID for ticket purchase</li>
                  <li>• Camera (no flash photography)</li>
                  <li>• Comfortable walking shoes</li>
                  <li>• Light jacket (some areas are air-conditioned)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Good to Know
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Strollers are available for rent</li>
                  <li>• Wheelchair accessible throughout</li>
                  <li>• Food and drinks not allowed inside</li>
                  <li>• Café and restaurant on-site</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
};

export default Visit;
