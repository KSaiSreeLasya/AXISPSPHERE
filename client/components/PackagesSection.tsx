'use client';

import { Button } from '@/components/ui/button';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function PackagesSection() {
  const packages = [
    {
      title: 'AI Starter Package',
      price: '₹30,000',
      bullets: ['20 AI-generated posts / month', 'AI-optimized blog articles', 'Basic AI copywriting', 'Monthly AI-generated reports'],
    },
    {
      title: 'AI Growth Package',
      price: '₹75,000',
      bullets: ['50 AI-generated posts / month', 'AI-powered video scripts', 'Audience modeling', 'Weekly strategy sessions'],
      featured: true,
    },
    {
      title: 'AI Enterprise Package',
      price: '₹1,50,000',
      bullets: ['100+ AI-generated posts', 'Custom AI model training', 'Dedicated account manager', '24/7 priority support'],
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="packages" className="py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your AI Marketing Package</h2>
        <p className="text-muted-foreground mb-12">Scalable AI-powered solutions designed to grow with your business needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <div key={pkg.title} onClick={() => setSelected(idx)} className={`cursor-pointer rounded-2xl border border-border p-8 bg-card shadow ${pkg.featured ? 'transform scale-105 border-gold-500' : ''}`}>
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
              <div className="text-center">
                <Button onClick={() => setSelected(idx)} className={`${pkg.featured ? 'bg-gold-500 text-white' : 'bg-transparent border'} px-6 py-3 rounded-full`}>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selected !== null && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-6">
            <div className="bg-card rounded-3xl max-w-3xl w-full p-8 overflow-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{packages[selected].title}</h3>
                  <div className="text-xl text-foreground/80">{packages[selected].price} <span className="text-sm text-muted-foreground">/per month</span></div>
                </div>
                <button onClick={() => setSelected(null)} className="text-muted-foreground">Close</button>
              </div>

              <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                {packages[selected].bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="text-right">
                <Button onClick={() => setSelected(null)} className="bg-gold-500 text-white px-6 py-3 rounded-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
