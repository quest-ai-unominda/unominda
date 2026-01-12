import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const leaders = [
  {
    name: "Leadership Message",
    role: "Chairman & Managing Director",
    quote: "AI is not just a technology for us—it's the foundation of our next chapter in manufacturing excellence. We are committed to making Uno Minda a leader in smart, sustainable automotive solutions.",
    initials: "NK",
  },
  {
    name: "AI Vision",
    role: "Chief Technology Officer",
    quote: "Our AI initiatives span quality control, predictive maintenance, and supply chain optimization. Every team member has the opportunity to contribute to this transformation.",
    initials: "RS",
  },
];

export const LeadershipSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Leadership <span className="text-gradient">Talks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights and vision from our leadership team on AI transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="card-glass rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-hover">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  "{leader.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground">{leader.initials}</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{leader.name}</p>
                    <p className="text-sm text-muted-foreground">{leader.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
