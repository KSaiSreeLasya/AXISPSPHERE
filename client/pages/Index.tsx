import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import PackagesSection from "@/components/PackagesSection";
import FloatingCTA from "@/components/FloatingCTA";
import BrandLogo from "@/components/BrandLogo";
import { useEffect, useState } from "react";

export default function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // preload SweetAlert2 script
    if (typeof window !== "undefined") {
      if ((window as any).Swal) return;
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      phone: fd.get("phone")?.toString() || "",
      subject: fd.get("company")?.toString() || "",
      message: fd.get("goals")?.toString() || "",
      consent: false,
      metadata: {}
    };

    const SUPA_URL = import.meta.env.VITE_SUPABASE_URL;
    const SUPA_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPA_URL || !SUPA_KEY) {
      setLoading(false);
      ((window as any).Swal || (window as any).swal)?.fire({
        icon: "error",
        title: "Configuration missing",
        text: "Supabase URL or anon key is not configured. Ask the admin to set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
      });
      return;
    }

    try {
      // send to local server endpoint which holds the service role key
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        let bodyText = '';
        try {
          const clone = res.clone();
          const ct = clone.headers.get('content-type') || '';
          bodyText = await clone.text();
          // if it's JSON, pretty-print
          if (ct.includes('application/json')) {
            try {
              const parsed = JSON.parse(bodyText);
              bodyText = JSON.stringify(parsed);
            } catch (_) {
              // leave as-is
            }
          }
        } catch (readErr) {
          bodyText = `(failed to read response body: ${String(readErr)})`;
        }
        const maskedKey = SUPA_KEY ? `${SUPA_KEY.slice(0,6)}...${SUPA_KEY.slice(-6)}` : null;
        const errMsg = `HTTP ${res.status} ${res.statusText} - ${bodyText}`;
        console.error('Supabase REST error', { url, status: res.status, body: bodyText, supabase_key_preview: maskedKey });
        throw new Error(errMsg);
      }

      ((window as any).Swal || (window as any).swal)?.fire({
        icon: "success",
        title: "Thanks!",
        text: "Your message was submitted. We'll get back to you soon.",
        timer: 3500
      });

      form.reset();
    } catch (err: any) {
      ((window as any).Swal || (window as any).swal)?.fire({
        icon: "error",
        title: "Submission failed",
        text: err?.message || "An unexpected error occurred"
      });
      console.error("Contact submit error:", err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-background">
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

      {/* Packages Section */}
      <PackagesSection />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Get in touch with our AI marketing experts and start your journey
              to exponential growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2 bg-card p-8 rounded-2xl border border-border">
              <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="Full Name"
                  className="p-3 rounded-md border border-input bg-background"
                />
                <input
                  name="email"
                  placeholder="Email Address"
                  className="p-3 rounded-md border border-input bg-background"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  className="p-3 rounded-md border border-input bg-background"
                />
                <input
                  name="company"
                  placeholder="Company"
                  className="p-3 rounded-md border border-input bg-background"
                />
                <textarea
                  name="goals"
                  placeholder="What are your goals?"
                  className="md:col-span-2 p-3 rounded-md border border-input bg-background h-32"
                />

                <div className="md:col-span-2 flex justify-between mt-2 items-center">
                  <div>
                    <button type="submit" className="bg-gold-500 text-white px-8 py-3 rounded-full font-semibold">Schedule My Consultation</button>
                  </div>
                  <div>
                    <button type="button" onClick={() => { const el = document.querySelector("#contact-form") as HTMLFormElement | null; if (el) el.reset(); }} className="ml-4 bg-transparent border border-input px-4 py-2 rounded-full">Reset</button>
                  </div>
                </div>
              </form>
            </div>

            {/* Info Boxes */}
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">Email</h4>
                <div className="text-muted-foreground">
                  hello@ai-marketing.studio
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">Call us</h4>
                <div className="text-muted-foreground">+91 98765 43210</div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">Visit us</h4>
                <div className="text-muted-foreground">
                  Bengaluru • Mumbai • Delhi
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border">
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="text-muted-foreground">
                  Mon–Sat, 9:30 AM – 7:00 PM IST
                </div>
              </div>
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
                <BrandLogo className="h-12 w-auto" />
              </div>
              <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
                Transforming ambitious brands into luxury market leaders through
                strategic design and innovative technology.
              </p>
            </div>

            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Luxury Branding
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Performance Campaigns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li>
                  <a
                    href="#about"
                    className="hover:text-gold-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#insights"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">
                Connect
              </h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground/60 dark:text-white/60 text-sm">
              © 2024 LuxuryStudio. All rights reserved.
            </div>
            <div className="flex gap-6 text-foreground/60 dark:text-white/60 text-sm">
              <a href="#" className="hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
