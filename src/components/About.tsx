import { ArrowUpRight, ArrowRight, Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import founderImg from "@/assets/founder.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <span className="pill-badge">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            About Us
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-6 max-w-3xl mx-auto">
          Premier Hospitality & Entertainment Consulting
        </h2>
        
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          Ciniquest Solutions Ltd is a premier hospitality and entertainment consulting firm specializing in the comprehensive setup and management of world-class hospitality venues across Nigeria and beyond.
        </p>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {/* Left Column - About Text */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="pill-badge mb-4">Who We Are</span>
              <p className="text-muted-foreground leading-relaxed">
                We deliver end-to-end solutions for cinemas, hotels, food & beverage outlets, recreation centers, and leisure facilities — ensuring seamless operations, regulatory compliance, and exceptional guest experiences.
              </p>
            </div>
            <Button variant="outline-dark" className="w-fit mt-6 group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Middle Column - Vision & Mission */}
          <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="bento-card p-6 flex-1">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To deliver superb service and remain the leading authority in hospitality and entertainment solutions, while significantly increasing the number of high-quality hospitality centers across Nigeria and Africa.
              </p>
            </div>
            <div className="bento-card p-6 flex-1">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <Target className="h-5 w-5 text-brand" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To successfully establish at least 10 new hospitality businesses annually, driving growth, innovation, and excellence in the sector.
              </p>
            </div>
          </div>

          {/* Right Column - Founder */}
          <div className="md:col-span-4 bento-card relative overflow-hidden min-h-[300px]">
            <img
              src={founderImg}
              alt="Akaninyene Macauley - Founder"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="pill-badge bg-brand text-accent-foreground mb-3">Founder</span>
              <h3 className="text-primary-foreground font-semibold text-lg mb-2">
                Akaninyene Macauley
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                18+ years of hands-on experience in cinema operations, film distribution, and hospitality management.
              </p>
            </div>
            <button className="absolute top-6 right-6 w-10 h-10 bg-brand rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
            </button>
          </div>
        </div>

        {/* Track Record Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="bento-card p-6 text-center">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-brand" />
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-2">2018</h4>
            <p className="text-muted-foreground text-sm">Founded in Nigeria</p>
          </div>
          <div className="bento-card p-6 text-center">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-brand" />
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-2">10+</h4>
            <p className="text-muted-foreground text-sm">Annual Business Target</p>
          </div>
          <div className="bento-card p-6 text-center">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Eye className="h-6 w-6 text-brand" />
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-2">5+</h4>
            <p className="text-muted-foreground text-sm">International Affiliates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
