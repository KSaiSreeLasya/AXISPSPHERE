import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import FloatingCTA from '@/components/FloatingCTA';
import BrandLogo from '@/components/BrandLogo';
import FloatingTagline from '@/components/FloatingTagline';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingTagline />
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Case Studies Section */}
      <CaseStudiesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/10 to-gold-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-platinum-400/10 to-platinum-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Transform
              </span>{' '}
              Your Brand?
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-12">
              Let's create something extraordinary together. Our team is ready to elevate 
              your brand to new heights with cutting-edge design and strategic innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">24h</div>
                <div className="text-foreground/80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">150+</div>
                <div className="text-foreground/80">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500 mb-2">98%</div>
                <div className="text-foreground/80">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@luxurystudio.com"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-glow-gold inline-flex items-center justify-center"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+1234567890"
                className="border-2 border-foreground/30 bg-transparent hover:bg-foreground/10 text-foreground px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary dark:bg-luxury-950 border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <BrandLogo className="h-[101px] lg:h-12 w-auto" />
              </div>
              <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
                Transforming ambitious brands into luxury market leaders through 
                strategic design and innovative technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Luxury Branding</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Web Design</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Digital Marketing</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Performance Campaigns</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
                <li><a href="#work" className="hover:text-gold-400 transition-colors">Our Work</a></li>
                <li><a href="#insights" className="hover:text-gold-400 transition-colors">Insights</a></li>
                <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li><a href="#" className="hover:text-gold-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground/60 dark:text-white/60 text-sm">
              © 2024 LuxuryStudio. All rights reserved.
            </div>
            <div className="flex gap-6 text-foreground/60 dark:text-white/60 text-sm">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
