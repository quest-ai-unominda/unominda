import { motion } from "framer-motion";
import { Brain, Eye, Wrench, BarChart3, Cpu, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    icon: Eye,
    title: "Visual Inspection AI",
    description: "Automated defect detection in headlights and switch assemblies using computer vision.",
    status: "Live",
    plants: 12,
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "ML models predicting equipment failures before they occur, reducing downtime.",
    status: "Live",
    plants: 8,
  },
  {
    icon: BarChart3,
    title: "Demand Forecasting",
    description: "AI-driven supply chain optimization and inventory management.",
    status: "Pilot",
    plants: 3,
  },
  {
    icon: Cpu,
    title: "Process Optimization",
    description: "Real-time parameter tuning for moulding and casting processes.",
    status: "Live",
    plants: 6,
  },
  {
    icon: Brain,
    title: "Knowledge Assistant",
    description: "AI-powered chatbot for manufacturing SOPs and troubleshooting.",
    status: "Development",
    plants: 0,
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "Smart energy management reducing consumption across facilities.",
    status: "Pilot",
    plants: 4,
  },
];

export const InitiativesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              AI <span className="text-gradient">Initiatives</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Explore our active AI projects transforming manufacturing operations across Uno Minda plants.
            </p>
          </div>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground self-start md:self-auto">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-glass rounded-2xl p-6 hover:shadow-hover transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400' 
                    : item.status === 'Pilot' 
                    ? 'bg-secondary/20 text-secondary' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {item.status}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>
              
              {item.plants > 0 && (
                <p className="text-xs text-primary">
                  Deployed in {item.plants} plants
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
