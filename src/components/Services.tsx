import { useState } from "react";
import { ArrowUpRight, Sun, Building2, UtensilsCrossed, Clapperboard } from "lucide-react";
import clubImg from "@/assets/club.jpg";
import cinemaImg from "@/assets/hero-cinema.jpg";

const tabs = [
  { id: "cinema", label: "Cinemas", icon: Clapperboard },
  { id: "hotel", label: "Hotels", icon: Building2 },
  { id: "restaurant", label: "Restaurants", icon: UtensilsCrossed },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("cinema");

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Icon and Tabs */}
          <div>
            {/* Icon */}
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
              <Sun className="h-8 w-8 text-brand" />
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-foreground text-background"
                      : "bg-secondary text-muted-foreground hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Featured Card */}
            <div className="bento-card relative overflow-hidden h-[400px]">
              <img
                src={clubImg}
                alt="Premium entertainment venue"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  Comfortable spaces with excellent care
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Our establishments maintain high standards for premium guest experiences
                </p>
                <button className="flex items-center gap-2 bg-background rounded-full px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-100 transition-colors">
                  See Details
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <div className="w-2 h-2 rounded-full bg-background/50" />
                <div className="w-2 h-2 rounded-full bg-background/50" />
              </div>
            </div>
          </div>

          {/* Right Side - Title and Cards */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Discover Excellence
              <br />
              Featured Venues
              <br />
              You Can Trust.
            </h2>

            {/* Two Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bento-card relative overflow-hidden h-[250px]">
                <img
                  src={cinemaImg}
                  alt="Cinema venue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <button className="absolute bottom-4 right-4 w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-lg">+</span>
                </button>
              </div>

              <div className="bento-card p-6 h-[250px] flex flex-col justify-between bg-background">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <span className="text-foreground">✦</span>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ciniquest's world-class facilities offer end-to-end venue design services, from site selection to fit-out, specialized facilities, complete operations and 24/7 emergency care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
