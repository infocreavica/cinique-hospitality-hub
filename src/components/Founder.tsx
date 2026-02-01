import { Quote } from "lucide-react";

const Founder = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Meet Our Founder
            </h2>
          </div>

          {/* Founder Card */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gold-gradient rounded-2xl flex items-center justify-center">
                  <span className="font-display text-4xl md:text-5xl font-bold text-accent-foreground">
                    AM
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Akaninyene Macauley
                </h3>
                <span className="inline-block text-accent font-medium mb-6">
                  Founder & CEO
                </span>

                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A seasoned industry expert with over 18 years of hands-on experience in cinema operations, 
                  film distribution, and hospitality management. Drawing from leadership roles at Filmhouse IMAX, 
                  Sky Film Distribution Ltd, and Sky Cinemas, I identified the critical need for professional, 
                  turnkey solutions in Nigeria's rapidly expanding entertainment and leisure market.
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-secondary rounded-full px-4 py-2">
                    <span className="text-muted-foreground">Former</span>{" "}
                    <span className="font-semibold text-foreground">Filmhouse IMAX - Cinema Manager</span>
                  </div>
                  <div className="bg-secondary rounded-full px-4 py-2">
                    <span className="text-muted-foreground">Former</span>{" "}
                    <span className="font-semibold text-foreground">Sky Film Distribution - Executive Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
