import { motion } from "framer-motion";
import { Factory, Users, Zap, Award } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "25+",
    label: "Plants with AI",
    color: "text-primary",
  },
  {
    icon: Zap,
    value: "40%",
    label: "Efficiency Gain",
    color: "text-secondary",
  },
  {
    icon: Users,
    value: "2,500+",
    label: "AI Trained Employees",
    color: "text-green-400",
  },
  {
    icon: Award,
    value: "15+",
    label: "Use Cases Deployed",
    color: "text-purple-400",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
