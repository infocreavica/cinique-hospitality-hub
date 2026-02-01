import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  "Sky Cinemas",
  "Filmhouse",
  "Genesis",
  "Silverbird",
  "Sky Mall",
  "Lush Club",
  "Rosticks",
  "Sky Films",
];

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-4">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Explore Nigeria
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Venues here,
            <br />
            Trusted Solutions Made Easy, Explore!
          </h2>
          <p className="text-muted-foreground mb-8">
            Find the best hospitality consulting services within Nigeria and Africa that can help you succeed in your venue development.
          </p>
          <Button variant="hero" size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            ✓ Trusted by 500+ clients worldwide
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-8 border-y border-border">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-muted-foreground font-medium text-sm md:text-base hover:text-foreground transition-colors cursor-pointer"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
