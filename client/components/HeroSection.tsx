"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Hourglass, Headphones } from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    // ensure any page-load animations are visible; no cursor-driven motion
  }, []);

  const backgroundVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
      const top =
        element.getBoundingClientRect().top + window.scrollY - headerHeight + 8;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-50 via-luxury-100 to-luxury-200 dark:from-luxury-950 dark:via-luxury-900 dark:to-luxury-800" />

        {/* Animated Gradient Orbs (no cursor parallax) */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-platinum-400/15 to-platinum-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Headline - static and permanent */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-luxury-700 to-gold-600 bg-clip-text text-transparent mb-4 leading-tight bg-[length:200%_200%] animate-gradient drop-shadow"
            >
              Luxury
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent mb-4 leading-tight bg-[length:200%_200%] animate-gradient drop-shadow"
            >
              Redefined
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mt-[2px] mb-12 leading-relaxed"
          >
            We craft extraordinary digital experiences that elevate brands into
            luxury territory. From strategic branding to cutting-edge web
            design, we transform visions into cinematic reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#services")}
                className="relative bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-glow-gold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="relative border-2 border-white/30 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Play size={20} className="fill-current" />
                  Watch Our Story
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between rounded-2xl px-5 py-4 bg-white/60 dark:bg-white/5 border border-gold-500/20 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600">
                  <TrendingUp size={18} />
                </div>
                <div className="text-sm text-foreground/80">Increase in Conversions</div>
              </div>
              <div className="text-right font-bold text-foreground whitespace-nowrap">25–40%</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between rounded-2xl px-5 py-4 bg-white/60 dark:bg-white/5 border border-gold-500/20 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600">
                  <Hourglass size={18} />
                </div>
                <div className="text-sm text-foreground/80">More Qualified Leads</div>
              </div>
              <div className="text-right font-bold text-foreground whitespace-nowrap">3–5×</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center justify-between rounded-2xl px-5 py-4 bg-white/60 dark:bg-white/5 border border-gold-500/20 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-full bg-gold-500/15 flex items-center justify-center text-gold-600">
                  <Headphones size={18} />
                </div>
                <div className="text-sm text-foreground/80">Expert Support</div>
              </div>
              <div className="text-right font-bold text-foreground whitespace-nowrap">24/7</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
