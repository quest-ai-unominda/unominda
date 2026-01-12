import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const topIdeas = [
  {
    title: "AI-based Tool Wear Detection",
    author: "Plant 5 Team",
    votes: 127,
    category: "Quality",
  },
  {
    title: "Voice-Controlled Assembly Instructions",
    author: "R&D Team",
    votes: 98,
    category: "Productivity",
  },
  {
    title: "Smart Packaging Verification",
    author: "Logistics Team",
    votes: 84,
    category: "Logistics",
  },
];

export const IdeasSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
              <Lightbulb className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Innovation Hub</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Share Your{" "}
              <span className="text-gradient-secondary">Ideas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Have an innovative AI idea? Submit it here and help shape the future of manufacturing at Uno Minda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-orange-400 hover:opacity-90 text-secondary-foreground px-8 rounded-xl">
                Submit Your Idea
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted rounded-xl">
                View All Ideas
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">250+</p>
                <p className="text-sm text-muted-foreground">Ideas Submitted</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-foreground">42</p>
                <p className="text-sm text-muted-foreground">Implemented</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Top Ideas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">Trending Ideas</span>
            </div>
            
            {topIdeas.map((idea, i) => (
              <motion.div
                key={idea.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="card-glass rounded-xl p-5 hover:shadow-hover transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary mb-2">
                      {idea.category}
                    </span>
                    <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {idea.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">by {idea.author}</p>
                  </div>
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-4 h-4 fill-secondary" />
                    <span className="font-semibold">{idea.votes}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
