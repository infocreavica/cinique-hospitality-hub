import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCinema from "@/assets/hero-cinema.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCinema}
          alt="Premium cinema interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90">Premier Hospitality Consulting</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Creating World-Class
            <span className="block text-accent">Hospitality Experiences</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            End-to-end solutions for cinemas, hotels, restaurants, and entertainment venues across Nigeria and Africa.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-accent">18+</span>
              <span className="text-sm text-primary-foreground/70">Years Experience</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-accent">10+</span>
              <span className="text-sm text-primary-foreground/70">Annual Projects</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-accent">5+</span>
              <span className="text-sm text-primary-foreground/70">Countries</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="accent" size="lg" className="group" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="#portfolio">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
