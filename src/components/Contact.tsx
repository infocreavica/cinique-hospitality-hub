import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Let's Partner to Bring Your Vision to Life
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              At Ciniquest Solutions Ltd, we don't just build venues — we create profitable, sustainable 
              businesses that elevate standards and enrich communities.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="tel:+2348173409440"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <span className="block text-sm text-primary-foreground/60">Call us</span>
                  <span className="text-lg font-semibold text-primary-foreground">+234 817 340 9440</span>
                </div>
              </a>

              <a
                href="mailto:info@ciniquestsolutions.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <span className="block text-sm text-primary-foreground/60">Email us</span>
                  <span className="text-lg font-semibold text-primary-foreground">info@ciniquestsolutions.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="block text-sm text-primary-foreground/60">Visit us</span>
                  <span className="text-lg font-semibold text-primary-foreground">Sky Mall, Sangotedo, Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8">
              Tell us about your hospitality vision. Whether it's a cinema, hotel, restaurant, or entertainment 
              venue, we have the expertise to make it a reality.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all text-muted-foreground">
                  <option value="">Select Project Type</option>
                  <option value="cinema">Cinema</option>
                  <option value="hotel">Hotel</option>
                  <option value="restaurant">Restaurant / Bar</option>
                  <option value="club">Club / Nightlife</option>
                  <option value="recreation">Recreation Center</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>
              <Button variant="accent" size="lg" className="w-full group">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
