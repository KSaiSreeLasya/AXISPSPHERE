'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Show button after scrolling 100vh
      setIsVisible(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isVisible, controls]);

  const handleClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const buttonVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  };

  const expandedVariants = {
    collapsed: {
      width: 64,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    expanded: {
      width: 200,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={buttonRef}
      style={{
        y: y,
      }}
      variants={buttonVariants}
      initial="hidden"
      animate={controls}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.div
        variants={expandedVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        className="relative group"
      >
        {/* Main Button */}
        <motion.button
          onClick={isExpanded ? handleClick : handleExpand}
          className="relative w-full h-16 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-full shadow-luxury hover:shadow-glow-gold transition-all duration-300 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
              '0 25px 50px -12px rgba(212, 175, 55, 0.4)',
              '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-shimmer opacity-30"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center w-full text-luxury-900">
            {!isExpanded ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle size={24} className="fill-current" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center gap-2 px-4 font-semibold"
              >
                <span>Work With Us</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.button>

        {/* Close Button (when expanded) */}
        {isExpanded && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            onClick={handleExpand}
            className="absolute -top-3 -right-3 w-8 h-8 bg-luxury-800 hover:bg-luxury-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} />
          </motion.button>
        )}

        {/* Tooltip (when collapsed) */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            whileHover={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 px-3 py-2 bg-luxury-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Ready to start your project?
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-8 border-l-luxury-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </motion.div>
        )}

        {/* Background Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full blur-xl opacity-30 -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            animate={{
              y: [-20, -60, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeOut',
            }}
            style={{
              left: `${30 + i * 20}%`,
              top: '50%',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
