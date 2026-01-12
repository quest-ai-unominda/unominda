import { motion, useScroll, useTransform } from "framer-motion";
import { Settings } from "lucide-react";

export const GearIcon = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [0, 1]);
  const scale = useTransform(scrollY, [0, 400], [0.5, 1]);

  return (
    <motion.button
      style={{ opacity, scale }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg flex items-center justify-center cursor-pointer group animate-pulse-glow"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Settings className="w-7 h-7 text-primary-foreground gear-spin group-hover:animate-none" />
    </motion.button>
  );
};
