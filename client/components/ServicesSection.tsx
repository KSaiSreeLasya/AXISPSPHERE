"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Monitor, TrendingUp, Zap } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: <Palette size={32} />,
    title: "Luxury Branding",
    description:
      "Craft distinctive brand identities that command attention and inspire trust in premium markets.",
    features: [
      "Brand Strategy",
      "Visual Identity",
      "Brand Guidelines",
      "Logo Design",
    ],
    gradient: "from-gold-400 to-gold-600",
  },
  {
    icon: <Monitor size={32} />,
    title: "Web Design",
    description:
      "Create stunning, conversion-optimized websites that deliver exceptional user experiences.",
    features: ["UI/UX Design", "Development", "E-commerce", "Mobile-First"],
    gradient: "from-platinum-400 to-platinum-600",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that elevate your brand presence and drive meaningful engagement.",
    features: [
      "Social Strategy",
      "Content Creation",
      "SEO Optimization",
      "Analytics",
    ],
    gradient: "from-luxury-400 to-luxury-600",
  },
  {
    icon: <Zap size={32} />,
    title: "Performance Campaigns",
    description:
      "Data-driven advertising campaigns that maximize ROI and accelerate business growth.",
    features: [
      "PPC Management",
      "Conversion Optimization",
      "A/B Testing",
      "ROI Tracking",
    ],
    gradient: "from-gold-500 to-platinum-500",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="pt-20 pb-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in transforming ambitious brands into luxury market
            leaders through strategic design, cutting-edge technology, and
            data-driven marketing.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isInView: boolean;
}

function ServiceCard({ service, index, isInView }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative bg-card border border-border/50 rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:shadow-luxury group-hover:border-gold-500/30"
      >
        {/* Background Gradient on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Floating Icon */}
        <motion.div
          animate={isHovered ? { y: -4 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
        >
          {service.icon}
        </motion.div>

        {/* Content */}
        <motion.div
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gold-600 transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.2 + featureIndex * 0.1,
                }}
                style={{
                  transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
                }}
                className="flex items-center text-sm text-muted-foreground"
              >
                <motion.div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}
                  animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shimmer Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-shimmer opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          }}
        />

        {/* Corner Accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-10 rounded-bl-3xl`}
        />
      </motion.div>
    </motion.div>
  );
}
