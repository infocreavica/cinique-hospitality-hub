import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Large Text Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 border-t border-border">
        <div className="overflow-hidden">
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold text-foreground/10 whitespace-nowrap">
            CINIQUEST — CONTACT
          </h2>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Contact our hospitality team today for a comprehensive consultation of your venue project, ensuring no opportunity for growth is missed.
        </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About us</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact us</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="tel:+2348173409440" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                +234 817 340 9440
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="h-4 w-4 text-foreground" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook className="h-4 w-4 text-foreground" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter className="h-4 w-4 text-foreground" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ciniquest Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
