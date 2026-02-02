import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import cinemaImg from "@/assets/hero-cinema.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import clubImg from "@/assets/club.jpg";

const projects = [
  {
    title: "Sky Cinemas",
    subtitle: "State-of-the-Art Cinema",
    description: "A multi-screen cinema experience featuring premium seating, cutting-edge projection technology, and immersive sound systems.",
    image: cinemaImg,
    tag: "Cinema",
    location: "Sky Mall, Sangotedo, Lagos",
  },
  {
    title: "Lush Club",
    subtitle: "Vibrant Nightlife Venue",
    description: "A premier nightlife and social venue with advanced lighting, world-class sound installations, and sophisticated ambiance.",
    image: clubImg,
    tag: "Entertainment",
    location: "Sky Mall, Sangotedo, Lagos",
  },
  {
    title: "Rosticks Restaurant",
    subtitle: "Popular Dining Destination",
    description: "An upscale dining destination offering local and international cuisine in a comfortable, elegant setting.",
    image: restaurantImg,
    tag: "Restaurant",
    location: "Sky Mall, Sangotedo, Lagos",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="pill-badge mb-4">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Flagship Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These thriving venues within the modern Sky Mall complex in Sangotedo, Lagos, demonstrate our ability to deliver profitable, high-impact hospitality projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bento-card group"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <span className="absolute top-4 left-4 pill-badge bg-brand text-accent-foreground text-xs">
                  {project.tag}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-semibold text-primary-foreground text-xl">{project.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{project.subtitle}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground text-xs">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Track Record Banner */}
        <div className="mt-12 bento-card p-8 bg-foreground text-background">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Our Track Record</h3>
              <p className="text-background/70 max-w-xl">
                Since 2018, Ciniquest Solutions has been instrumental in developing successful venues across Nigeria. We don't just build venues — we create profitable, sustainable businesses that elevate standards and enrich communities.
              </p>
            </div>
            <Button variant="hero" className="flex-shrink-0">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
