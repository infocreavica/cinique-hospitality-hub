import { Building2, UtensilsCrossed, Clapperboard, Hotel, MapPin, FileCheck, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Site Selection & Feasibility",
    description: "Comprehensive market research, location analysis, and business planning to ensure project viability.",
  },
  {
    icon: Building2,
    title: "Project Setup",
    description: "Full interior design, equipment procurement, joinery, engineering, and technical installations.",
  },
  {
    icon: Users,
    title: "Operations & Training",
    description: "Operational management and staff training programs for seamless venue operations.",
  },
  {
    icon: FileCheck,
    title: "Licensing & Compliance",
    description: "Navigate all permits, regulatory approvals, and local/international standards with ease.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Consulting",
    description: "Optimize revenue, efficiency, and customer satisfaction with data-driven strategies.",
  },
];

const venues = [
  { icon: Clapperboard, label: "Cinemas" },
  { icon: Hotel, label: "Hotels" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Building2, label: "Clubs" },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            End-to-End Hospitality Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to operation, we deliver comprehensive solutions for world-class hospitality venues.
          </p>
        </div>

        {/* Venue Types */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {venues.map((venue) => (
            <div
              key={venue.label}
              className="flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-sm border border-border hover:border-accent transition-colors"
            >
              <venue.icon className="h-5 w-5 text-accent" />
              <span className="font-medium text-foreground">{venue.label}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 shadow-sm border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
