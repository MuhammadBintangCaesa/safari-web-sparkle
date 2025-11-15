import { Sparkles, Shield, Heart, TrendingUp } from "lucide-react";
import TravelNavigation from "@/components/TravelNavigation";
import TravelHero from "@/components/TravelHero";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import destinationBali from "@/assets/destination-bali.jpg";
import destinationTokyo from "@/assets/destination-tokyo.jpg";
import destinationParis from "@/assets/destination-paris.jpg";
import destinationSingapore from "@/assets/destination-singapore.jpg";

const Index = () => {
  const destinations = [
    {
      image: destinationBali,
      title: "Bali Paradise",
      location: "Bali, Indonesia",
      price: "Rp 2.500.000",
      rating: 4.9,
      reviews: 1250,
      deal: "Hemat 30%",
    },
    {
      image: destinationTokyo,
      title: "Tokyo Adventure",
      location: "Tokyo, Japan",
      price: "Rp 8.500.000",
      rating: 4.8,
      reviews: 980,
      deal: "Best Seller",
    },
    {
      image: destinationParis,
      title: "Paris Romance",
      location: "Paris, France",
      price: "Rp 12.000.000",
      rating: 4.9,
      reviews: 1560,
    },
    {
      image: destinationSingapore,
      title: "Singapore Getaway",
      location: "Singapore",
      price: "Rp 4.200.000",
      rating: 4.7,
      reviews: 890,
      deal: "Flash Deal",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Pembayaran Aman",
      description: "Transaksi dijamin aman dengan enkripsi tingkat bank",
    },
    {
      icon: Heart,
      title: "Harga Terbaik",
      description: "Dapatkan harga termurah dengan jaminan best price",
    },
    {
      icon: Sparkles,
      title: "Layanan 24/7",
      description: "Customer service siap membantu kapan saja",
    },
    {
      icon: TrendingUp,
      title: "Promo Eksklusif",
      description: "Nikmati penawaran spesial setiap minggu",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TravelNavigation />
      <TravelHero />

      {/* Destinations Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Destinasi Populer
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up">
            Jelajahi tempat-tempat indah di seluruh dunia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Lihat Semua Destinasi
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Kenapa Pilih Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">
            Siap Memulai Petualangan?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up">
            Daftar sekarang dan dapatkan diskon 20% untuk pemesanan pertama
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in-up"
          >
            Daftar Sekarang
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-4">TravelKita</h3>
              <p className="text-muted-foreground text-sm">
                Platform booking travel terpercaya dengan ribuan destinasi menarik
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Penerbangan</li>
                <li>Hotel</li>
                <li>Paket Tour</li>
                <li>Aktivitas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Dukungan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Bantuan</li>
                <li>FAQ</li>
                <li>Hubungi Kami</li>
                <li>Kebijakan Privasi</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 TravelKita. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
