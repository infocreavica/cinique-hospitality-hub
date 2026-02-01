import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-8 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Image Container with Curved Bottom */}
        <div className="relative rounded-[2.5rem] overflow-hidden">
          <img
            src={heroBuilding}
            alt="Modern hospitality venue"
            className="w-full h-[500px] md:h-[600px] lg:h-[650px] object-cover"
          />
          
          {/* Dark Overlay with brand blue tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/60" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
            {/* Top Content */}
            <div className="flex justify-between items-start">
              {/* Left - Avatars & Stats */}
              <div className="hidden md:block">
                <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-4 max-w-[200px]">
                  <div className="flex -space-x-2 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full gradient-brand border-2 border-background"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Join <span className="font-semibold text-foreground">500+</span> successful venues built across Nigeria
                  </p>
                </div>
              </div>

              {/* Right - Social Links */}
              <div className="hidden md:flex flex-col gap-3 items-end">
                <a href="#" className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-background transition-colors">
                  <Instagram className="h-4 w-4 text-brand" />
                  Instagram
                </a>
                <a href="#" className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-background transition-colors">
                  <Facebook className="h-4 w-4 text-brand" />
                  Facebook
                </a>
                <a href="#" className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-background transition-colors">
                  <Twitter className="h-4 w-4 text-brand" />
                  Twitter
                </a>
              </div>
            </div>

            {/* Center Content */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Build Hospitality Venues, Create
                <br className="hidden md:block" />
                Experiences & Grow Your Business
              </h1>
              <p className="text-primary-foreground/80 text-sm md:text-base mb-6 max-w-xl mx-auto">
                End-to-end consulting for cinemas, hotels, restaurants, and entertainment venues across Nigeria and Africa.
              </p>

              {/* CTA Button */}
              <Button variant="accent" size="lg" className="group">
                Discover Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Bottom - Tagline */}
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium text-brand italic">Giving the best</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
