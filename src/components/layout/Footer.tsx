import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-lg">UM</span>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">Uno Minda</p>
                <p className="text-xs text-muted-foreground">AI Hub</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering innovation through Artificial Intelligence at Uno Minda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Insights", "AI for All", "Connect"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Use Cases", "Workshops", "Courses", "Newsletter"].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Uno Minda AI Hub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Internal Use Only - Intranet
          </p>
        </div>
      </div>
    </footer>
  );
};
