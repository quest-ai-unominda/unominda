import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GearIcon } from "@/components/layout/GearIcon";
import { Briefcase, Users, Gamepad2, Trophy, GraduationCap, ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    icon: Briefcase,
    title: "Use Cases",
    description: "Explore real-world AI implementations across our plants",
    count: "15+ Cases",
    color: "from-primary to-blue-600",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Hands-on learning sessions with AI experts",
    count: "8 Upcoming",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Gamepad2,
    title: "Games",
    description: "Learn AI concepts through interactive games",
    count: "5 Games",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Trophy,
    title: "Hackathon",
    description: "Compete and innovate with fellow employees",
    count: "Q2 2026",
    color: "from-secondary to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Courses",
    description: "Structured learning paths for all skill levels",
    count: "12 Courses",
    color: "from-pink-500 to-rose-500",
  },
];

const upcomingWorkshops = [
  {
    title: "Introduction to Computer Vision",
    date: "Jan 20, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual",
    seats: 45,
  },
  {
    title: "Predictive Maintenance with ML",
    date: "Jan 25, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Plant 5 - Training Center",
    seats: 20,
  },
  {
    title: "AI for Quality Managers",
    date: "Feb 1, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Virtual",
    seats: 50,
  },
];

const useCases = [
  {
    title: "Headlight Defect Detection",
    plant: "Plant 3 - Manesar",
    impact: "98.5% accuracy, 40% faster inspection",
    status: "Deployed",
  },
  {
    title: "Switch Assembly Verification",
    plant: "Plant 7 - Pune",
    impact: "Zero defect leakage, 30% cost reduction",
    status: "Deployed",
  },
  {
    title: "Mould Wear Prediction",
    plant: "Plant 5 - Greater Noida",
    impact: "25% reduction in unplanned downtime",
    status: "Pilot",
  },
];

const AIForAll = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              AI <span className="text-gradient">for All</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your gateway to learning, practicing, and mastering AI at Uno Minda.
            </p>
          </motion.div>

          {/* Section Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-2xl p-6 cursor-pointer hover:shadow-hover transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{section.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{section.description}</p>
                <p className="text-sm font-medium text-primary">{section.count}</p>
              </motion.div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Workshops */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Upcoming Workshops</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop) => (
                  <div
                    key={workshop.title}
                    className="card-glass rounded-xl p-5 hover:shadow-hover transition-all cursor-pointer group"
                  >
                    <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {workshop.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {workshop.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {workshop.location}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{workshop.seats} seats available</span>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        Register
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">Featured Use Cases</h2>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {useCases.map((useCase) => (
                  <div
                    key={useCase.title}
                    className="card-glass rounded-xl p-5 hover:shadow-hover transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {useCase.title}
                      </h4>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        useCase.status === 'Deployed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {useCase.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{useCase.plant}</p>
                    <p className="text-sm text-primary">{useCase.impact}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <GearIcon />
    </div>
  );
};

export default AIForAll;
