import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cinemaImg from "@/assets/hero-cinema.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import clubImg from "@/assets/club.jpg";
import hotelImg from "@/assets/hotel.jpg";

const facilities = [
  {
    title: "Cinema Setup",
    subtitle: "24/7 Excellence",
    description: "State-of-the-art multi-screen cinema experience with premium seating",
    image: cinemaImg,
    tag: "Cinemas",
  },
  {
    title: "Restaurant Design",
    subtitle: "Premium dining",
    description: "Comfortable spaces with excellent hospitality care",
    image: restaurantImg,
    tag: "Restaurants",
  },
  {
    title: "Club & Nightlife",
    subtitle: "Entertainment",
    description: "Advanced lighting and sound installations for vibrant venues",
    image: clubImg,
    tag: "Clubs",
  },
  {
    title: "Hotel Management",
    subtitle: "Luxury stays",
    description: "Comprehensive solutions for modern, efficient hospitality",
    image: hotelImg,
    tag: "Hotels",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <span className="pill-badge">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              Facilities
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Explore Our Facilities
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
              <span className="text-sm text-muted-foreground">Search here...</span>
            </div>
            <Button variant="hero" size="sm">
              View All
            </Button>
          </div>
        </div>

        {/* Facilities Carousel */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className="flex-shrink-0 w-[280px] md:w-[300px] bento-card snap-start"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className="absolute top-4 left-4 pill-badge bg-accent text-accent-foreground text-xs">
                    {facility.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-primary-foreground">{facility.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{facility.subtitle}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:bg-secondary transition-colors hidden md:flex">
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:bg-secondary transition-colors hidden md:flex">
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-right">
          <p className="text-muted-foreground text-sm max-w-md ml-auto">
            Book an appointment with 50+ successful venues for comprehensive venue setup, operations management, licensing, and 24/7 expert care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
