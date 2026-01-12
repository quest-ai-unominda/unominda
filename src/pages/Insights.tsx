import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GearIcon } from "@/components/layout/GearIcon";
import { Newspaper, BookOpen, PenTool, Wrench, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Newspaper, name: "Newsletter", count: 12, color: "from-primary to-blue-600" },
  { icon: BookOpen, name: "Articles", count: 45, color: "from-green-500 to-emerald-600" },
  { icon: PenTool, name: "Blogs", count: 28, color: "from-purple-500 to-violet-600" },
  { icon: Wrench, name: "Tools", count: 15, color: "from-secondary to-orange-500" },
];

const latestArticles = [
  {
    title: "How AI is Revolutionizing Quality Control in Automotive Manufacturing",
    excerpt: "Discover how computer vision systems are detecting defects with 99.9% accuracy.",
    date: "Jan 10, 2026",
    category: "Article",
    readTime: "5 min read",
  },
  {
    title: "Monthly AI Newsletter - January 2026",
    excerpt: "This month's highlights: New predictive maintenance rollout, AI training updates.",
    date: "Jan 5, 2026",
    category: "Newsletter",
    readTime: "8 min read",
  },
  {
    title: "Getting Started with Gamma for Presentations",
    excerpt: "A step-by-step guide to creating stunning AI-powered presentations.",
    date: "Jan 3, 2026",
    category: "Blog",
    readTime: "4 min read",
  },
];

const tools = [
  { name: "Gamma", desc: "AI Presentations", url: "https://gamma.app" },
  { name: "ChatGPT", desc: "AI Assistant", url: "https://chat.openai.com" },
  { name: "Canva AI", desc: "Design Tools", url: "https://canva.com" },
  { name: "Notion AI", desc: "Productivity", url: "https://notion.so" },
];

const Insights = () => {
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
              AI <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest AI news, articles, and productivity tools.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-glass rounded-2xl p-6 text-center cursor-pointer hover:shadow-hover transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.count} items</p>
              </motion.div>
            ))}
          </div>

          {/* Latest Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold mb-6">Latest Content</h2>
              <div className="space-y-4">
                {latestArticles.map((article, i) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="card-glass rounded-xl p-6 hover:shadow-hover transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools Sidebar */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Productivity Tools</h2>
              <div className="card-glass rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Recommended AI tools to boost your productivity
                </p>
                <div className="space-y-3">
                  {tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{tool.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GearIcon />
    </div>
  );
};

export default Insights;
