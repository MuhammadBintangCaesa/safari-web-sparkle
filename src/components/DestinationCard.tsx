import { MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  deal?: string;
}

const DestinationCard = ({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  deal,
}: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {deal && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-semibold">
            {deal}
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star size={16} className="fill-accent text-accent mr-1" />
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground ml-1">
              ({reviews})
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Mulai dari</p>
            <p className="text-xl font-bold text-primary">{price}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
