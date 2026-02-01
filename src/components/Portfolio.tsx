import { ArrowUpRight } from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";
import clubImg from "@/assets/club.jpg";
import hotelImg from "@/assets/hotel.jpg";

const projects = [
  {
    name: "Sky Cinemas",
    category: "Cinema",
    description: "A state-of-the-art multi-screen cinema experience at Sky Mall, Sangotedo, Lagos.",
    image: hotelImg,
  },
  {
    name: "Lush Club",
    category: "Nightlife",
    description: "A vibrant nightlife and social venue delivering premium entertainment experiences.",
    image: clubImg,
  },
  {
    name: "Rosticks Restaurant",
    category: "Dining",
    description: "A popular dining destination offering local and international cuisine.",
    image: restaurantImg,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Flagship Projects
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Thriving venues within the modern Sky Mall complex in Sangotedo, Lagos, demonstrating our ability to deliver profitable, high-impact hospitality projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer card-hover"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
