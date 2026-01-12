import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  // Fade to 20% opacity when scrolling past hero
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.2]);

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

      {/* Spacer to maintain hero height */}
      <div className="h-full" />
    </section>
  );
};
