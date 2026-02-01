import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import restaurantImg from "@/assets/restaurant.jpg";
import hotelImg from "@/assets/hotel.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <span className="pill-badge">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Let's know us
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 max-w-2xl mx-auto">
          Explore Solutions, About Ciniquest,
          <br className="hidden md:block" />
          Your Success, Our Priority
        </h2>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {/* Left Column - About Text */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="pill-badge mb-4">About Us</span>
              <p className="text-muted-foreground leading-relaxed">
                Ciniquest Solutions is a trusted partner connecting investors with premium hospitality venues across Nigeria and Africa.
              </p>
            </div>
            <Button variant="outline-dark" className="w-fit mt-6 group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Middle Column - Image Card */}
          <div className="md:col-span-4 bento-card relative overflow-hidden min-h-[300px]">
            <img
              src={restaurantImg}
              alt="Premium restaurant interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="pill-badge bg-background/90 text-foreground mb-2">Featured</span>
              <h3 className="text-primary-foreground font-semibold">
                A versatile facility offering a wide range of hospitality services
              </h3>
            </div>
            <button className="absolute bottom-6 right-6 w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
            </button>
          </div>

          {/* Right Column - Image + Stats */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="bento-card relative overflow-hidden flex-1 min-h-[150px]">
              <img
                src={hotelImg}
                alt="Luxury hotel lobby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-primary-foreground/80 text-xs">18+ Years</span>
                  <h4 className="text-primary-foreground font-semibold">Industry Experience</h4>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground">
                    ←
                  </button>
                  <button className="w-8 h-8 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground">
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="bento-card p-6 min-h-[120px]">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Explore the path to building profitable, sustainable hospitality businesses with our comprehensive consulting solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
