import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-2xl font-bold text-primary-foreground">
                Ciniquest
              </span>
              <span className="font-sans text-sm font-medium text-primary-foreground/60 ml-1">
                Solutions
              </span>
            </a>
            <p className="text-primary-foreground/70 max-w-md mb-6 leading-relaxed">
              Premier hospitality and entertainment consulting firm specializing in the comprehensive 
              setup and management of world-class hospitality venues across Nigeria and beyond.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Instagram className="h-5 w-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Twitter className="h-5 w-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+2348173409440" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" />
                  +234 817 340 9440
                </a>
              </li>
              <li>
                <a href="mailto:info@ciniquestsolutions.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                  info@ciniquestsolutions.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  Sky Mall, Sangotedo, Lagos, Nigeria
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Ciniquest Solutions Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
