import { useState } from "react";
import { ArrowUpRight, MapPin, Settings, Users, FileCheck, TrendingUp, Clapperboard, Building2, UtensilsCrossed, PartyPopper } from "lucide-react";
import clubImg from "@/assets/club.jpg";
import cinemaImg from "@/assets/hero-cinema.jpg";
const services = [{
  icon: MapPin,
  title: "Site Selection & Planning",
  description: "Site selection, feasibility studies, and comprehensive business planning for optimal venue success."
}, {
  icon: Settings,
  title: "Full Project Setup",
  description: "Interior design, equipment procurement, joinery, engineering, and technical installations."
}, {
  icon: Users,
  title: "Operations & Training",
  description: "Complete operational management and professional staff training programs."
}, {
  icon: FileCheck,
  title: "Licensing & Permits",
  description: "All relevant local and international regulatory approvals and compliance."
}, {
  icon: TrendingUp,
  title: "Strategic Consulting",
  description: "Optimize revenue, efficiency, and customer satisfaction with expert guidance."
}];
const venueTypes = [{
  id: "cinema",
  label: "Cinemas",
  icon: Clapperboard
}, {
  id: "hotel",
  label: "Hotels",
  icon: Building2
}, {
  id: "restaurant",
  label: "Restaurants",
  icon: UtensilsCrossed
}, {
  id: "recreation",
  label: "Recreation",
  icon: PartyPopper
}];
const Services = () => {
  const [activeTab, setActiveTab] = useState("cinema");
  return <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="pill-badge mb-4">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            End-to-End Hospitality Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive consulting and management services for world-class hospitality venues
          </p>
        </div>

        {/* Venue Type Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {venueTypes.map(type => <button key={type.id} onClick={() => setActiveTab(type.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === type.id ? "bg-foreground text-background" : "bg-background text-muted-foreground hover:bg-secondary border border-border"}`}>
              <type.icon className="h-4 w-4" />
              {type.label}
            </button>)}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Services List */}
          <div className="space-y-4">
            {services.map((service, index) => <div key={service.title} className="bento-card p-6 flex items-start gap-4 hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>)}
          </div>

          {/* Right Side - Featured Image */}
          <div className="space-y-4">
            <div className="bento-card relative overflow-hidden h-[350px]">
              <img src={clubImg} alt="Premium entertainment venue" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">World Class Venue Development</h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  From concept to completion, we handle every aspect of your hospitality project
                </p>
                <button className="flex items-center gap-2 bg-background rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                  See Our Work
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bento-card p-6 bg-background">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">✦</span>
                </div>
                <h4 className="font-semibold text-foreground">Global Best Practices</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our network of international affiliates in the UAE, India, Israel, and other regions provides specialized expertise in interior design, premium equipment selection, joinery, and advanced engineering — ensuring global best practices tailored to the African context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;