'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function PackagesSection() {
  const packages = [
    {
      title: 'AI Starter Package',
      price: '₹30,000',
      bullets: [
        '20 AI-generated social media posts per month',
        '4 AI-optimized blog articles (800-1200 words each)',
        'AI-driven content calendar and scheduling',
        'Basic AI copywriting for ads and emails',
        'Campaign strategy development and setup',
        'AI-personalized email marketing (up to 1,000 subscribers)',
        'Rule-based chatbot for website (FAQ automation up to 50 questions)',
        'Monthly AI-generated performance reports',
        'Monthly 2-hour AI strategy consultation',
        'Email support during business hours',
      ],
      successMetrics: [
        '25-40% improvement in engagement rates',
        '15-25% increase in qualified leads',
        '20-30% reduction in content creation time',
        '3-5x faster response time to inquiries',
      ],
    },
    {
      title: 'AI Growth Package',
      price: '₹75,000',
      bullets: [
        '50 AI-generated social media posts per month',
        '8 AI-optimized blog articles with SEO analysis',
        'AI-powered video scripts per month',
        'Dynamic content personalization for different audience segments',
        'Comprehensive campaign strategy across Google, Facebook, LinkedIn',
        'Advanced audience modeling and targeting',
        'Automated bid optimization and budget allocation',
        'AI-personalized campaigns (up to 5,000 subscribers)',
        'Natural language processing chatbot capabilities',
        'Appointment booking and scheduling integrations',
        'E-commerce support and product recommendations',
        'Multi-language support (2 languages)',
        'Weekly strategy sessions with AI specialists',
      ],
      featured: true,
      successMetrics: [
        '40-60% improvement in conversion rates',
        '30-50% increase in lead volume',
        '35-45% reduction in customer acquisition cost',
        '50-70% improvement in customer lifetime value',
      ],
    },
    {
      title: 'AI Enterprise Package',
      price: '₹1,50,000',
      bullets: [
        '100+ AI-generated social media posts per month',
        '15 AI-optimized long-form content pieces with advanced SEO',
        '8 AI-powered video scripts with storyboarding',
        'Multi-channel content personalization across all touchpoints',
        'Enterprise-grade campaign management across all major platforms',
        'AI-powered customer journey optimization',
        'Advanced predictive analytics and forecasting',
        'Custom AI model training for your brand voice',
        'Advanced NLP chatbot with voice capabilities',
        'Integration with enterprise CRM and marketing automation',
        'Multi-language support (5+ languages)',
        'Dedicated AI strategist and account manager',
        '24/7 priority support with 1-hour response time',
        'Quarterly business reviews and strategy optimization',
      ],
      successMetrics: [
        '60-80% improvement in marketing ROI',
        '50-70% increase in marketing qualified leads',
        '40-60% reduction in manual marketing tasks',
        '2-3x improvement in customer engagement scores',
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight + 8;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your AI Marketing Package</h2>
        <p className="text-muted-foreground mb-12">Scalable AI-powered solutions designed to grow with your business needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={pkg.title} className={`rounded-2xl border border-border p-8 bg-card shadow ${pkg.featured ? 'transform scale-105 border-gold-500' : ''}`}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 text-white mb-4">★</div>
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-3xl font-extrabold text-foreground mb-4">{pkg.price} <span className="text-sm font-medium text-muted-foreground">/per month</span></div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                {pkg.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              {pkg.successMetrics && (
                <div className="bg-background/50 p-4 rounded-lg border border-border mb-6">
                  <div className="font-semibold mb-2">Success Metrics Target:</div>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    {pkg.successMetrics.map((m) => (
                      <li key={m}>• {m}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-center">
                <Button onClick={scrollToContact} className={`${pkg.featured ? 'bg-gold-500 text-white' : 'bg-transparent border'} px-6 py-3 rounded-full`}>
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
