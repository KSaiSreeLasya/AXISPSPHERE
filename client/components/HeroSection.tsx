'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const splitTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const SplitText = ({ children, className = '' }: { children: string; className?: string }) => {
    return (
      <motion.div
        variants={splitTextVariants}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            style={{ transformOrigin: '0% 50%' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const backgroundVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate={controls}
        className="absolute inset-0 z-0"
      >
        {/* Gradient Background with Parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-luxury-50 via-luxury-100 to-luxury-200 dark:from-luxury-950 dark:via-luxury-900 dark:to-luxury-800"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-platinum-400/15 to-platinum-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                 backgroundSize: '100px 100px',
               }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Headline */}
          <div className="mb-8">
            <SplitText className="text-6xl md:text-8xl font-bold text-foreground mb-4 leading-tight">
              Luxury
            </SplitText>
            <SplitText className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-4 leading-tight">
              Redefined
            </SplitText>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mt-[2px] mb-12 leading-relaxed"
          >
            We craft extraordinary digital experiences that elevate brands into 
            luxury territory. From strategic branding to cutting-edge web design, 
            we transform visions into cinematic reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('#services')}
                className="relative bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden group transition-all duration-300 hover:shadow-glow-gold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-3 bg-foreground/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
