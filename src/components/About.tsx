import { Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in Hospitality Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Since 2018, Ciniquest Solutions has been at the forefront of Nigeria's hospitality transformation. 
              We respond to the growing demand for premium hospitality infrastructure by delivering profitable, 
              sustainable businesses that elevate standards and enrich communities.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With a network of international affiliates in the UAE, India, Israel, and beyond, we bring global 
              best practices tailored to the African context.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To remain the leading authority in hospitality solutions while significantly increasing 
                    high-quality hospitality centers across Nigeria and Africa.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To successfully establish at least 10 new hospitality businesses annually, driving growth, 
                    innovation, and excellence in the sector.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-secondary rounded-2xl p-6 h-40 flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-accent">2018</span>
                  <span className="text-sm text-muted-foreground">Founded</span>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-6 h-56 flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-primary-foreground">10+</span>
                  <span className="text-sm text-primary-foreground/80">Annual Projects</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gold-gradient rounded-2xl p-6 h-56 flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-accent-foreground">18+</span>
                  <span className="text-sm text-accent-foreground/80">Years Experience</span>
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-6 h-40 flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-foreground">5+</span>
                  <span className="text-sm text-muted-foreground">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
