import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="pill-badge mb-4">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Partner Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your hospitality vision to life? Contact us today and let's discuss how we can help you build a successful venue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bento-card p-8 bg-foreground text-background">
              <h3 className="font-display text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+2348173409440" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-background/60 text-sm">Call Us</p>
                    <p className="font-semibold group-hover:text-brand transition-colors">
                      +234 817 340 9440
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:info@ciniquestsolutions.com" 
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-background/60 text-sm">Email Us</p>
                    <p className="font-semibold group-hover:text-brand transition-colors">
                      info@ciniquestsolutions.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-background/60 text-sm">Location</p>
                    <p className="font-semibold">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-background/60 text-sm">Business Hours</p>
                    <p className="font-semibold">Mon - Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-card p-6 bg-background">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="font-semibold text-foreground">Global Network:</span> With international affiliates in the UAE, India, Israel, and other regions, we bring global expertise to your local project.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bento-card p-8 bg-background">
            <h3 className="font-semibold text-foreground text-lg mb-6">Send Us a Message</h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234 XXX XXX XXXX" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows={4}
                />
              </div>

              <Button variant="hero" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
