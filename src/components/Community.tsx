import cinemaImg from "@/assets/hero-cinema.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import clubImg from "@/assets/club.jpg";
import hotelImg from "@/assets/hotel.jpg";
import { Button } from "@/components/ui/button";

const Community = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Collage */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-3">
              <div className="bento-card overflow-hidden h-[120px]">
                <img src={cinemaImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="bento-card overflow-hidden h-[180px]">
                <img src={restaurantImg} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-3 pt-6">
              <div className="bento-card overflow-hidden h-[180px]">
                <img src={clubImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="bento-card p-4 h-[120px] flex items-center justify-center gradient-brand">
                <div className="text-center">
                  <p className="text-accent-foreground text-sm font-medium mb-2">
                    Join our community of partners
                  </p>
                  <Button variant="outline" size="sm" className="bg-background text-foreground border-background">
                    Connect Today →
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bento-card overflow-hidden h-[160px]">
                <img src={hotelImg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="bento-card overflow-hidden h-[140px]">
                <img src={cinemaImg} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="text-center lg:text-left">
            <span className="pill-badge mb-4">
              <span className="w-1.5 h-1.5 bg-brand rounded-full" />
              Testimonials
            </span>
            
            <blockquote className="text-xl md:text-2xl font-display font-semibold text-foreground mb-8 leading-relaxed">
              "With our dedication and expertise in hospitality, we strive to provide services that are not just solutions, but a transformative journey toward better business."
            </blockquote>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-14 h-14 rounded-full gradient-brand flex items-center justify-center text-accent-foreground font-bold text-lg">
                AM
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Akaninyene Macauley</h4>
                <p className="text-muted-foreground text-sm">Founder & CEO at Ciniquest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
