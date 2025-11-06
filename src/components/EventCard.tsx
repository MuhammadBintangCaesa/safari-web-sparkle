import { Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface EventCardProps {
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
  delay?: number;
}

export const EventCard = ({
  title,
  time,
  location,
  description,
  image,
  delay = 0,
}: EventCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`event-${title}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [title, delay]);

  return (
    <Card
      id={`event-${title}`}
      className={`group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
      </div>

      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-secondary">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center gap-2 text-secondary">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{location}</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};
