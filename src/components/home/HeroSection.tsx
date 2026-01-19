import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo1 from "@/assets/videos/hero-video-1.mp4";
import heroVideo2 from "@/assets/videos/hero-video-2.mp4";
import heroVideo3 from "@/assets/videos/hero-video-3.mp4";
import heroVideo4 from "@/assets/videos/hero-video-4.mp4";

const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4];

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Start at full opacity (1), only begin fading after scroll starts
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [1, 1, 0.5, 0.2]);
  
  // Fade out indicators when scrolling
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Handle video end - transition to next video
  const handleVideoEnd = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-play video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [currentVideoIndex]);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Background Container */}
      <motion.div
        style={{ opacity: videoOpacity }}
        className="fixed inset-0 w-full h-screen z-0"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          key={currentVideoIndex}
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </motion.div>

      {/* Video Progress Dots */}
      <motion.div 
        style={{ opacity: indicatorOpacity }}
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2"
      >
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentVideoIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentVideoIndex
                ? "bg-primary w-8 shadow-lg shadow-primary/50"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Play video ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/60 font-medium tracking-wider uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-foreground/60" />
        </motion.div>
      </motion.div>

      {/* Spacer to maintain hero height */}
      <div className="h-full" />
    </section>
  );
};
