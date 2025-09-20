import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/70 backdrop-blur-xs sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          <Link to="/" className="text-gold-600 hover:text-gold-500">
            Home
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-6 py-10 max-w-4xl space-y-8 leading-relaxed">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the
          websites, products, and services provided by Axisphere Media Work
          ("Axisphere", "we", "us"). By using the Services, you agree to these
          Terms.
        </p>

        <h2 className="text-2xl font-semibold">1. Use of Services</h2>
        <p>
          You may use the Services only for lawful purposes and in accordance
          with these Terms. You are responsible for your conduct and any content
          you provide.
        </p>

        <h2 className="text-2xl font-semibold">2. Accounts</h2>
        <p>
          Some features may require an account. You agree to provide accurate
          information and keep it up to date. You are responsible for
          safeguarding your credentials and for all activity under your account.
        </p>

        <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
        <p>
          The Services and all materials therein are owned by Axisphere or our
          licensors and are protected by intellectual property laws. You may not
          copy, modify, distribute, sell, or lease any part of the Services
          unless expressly permitted by us.
        </p>

        <h2 className="text-2xl font-semibold">4. Prohibited Conduct</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Attempting to access non-public areas of the Services.</li>
          <li>
            Interfering with or disrupting the integrity or performance of the
            Services.
          </li>
          <li>
            Uploading malicious code or violating applicable laws or
            regulations.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">5. Third‑Party Services</h2>
        <p>
          The Services may integrate with third‑party tools (e.g., analytics,
          payment gateways, databases). We are not responsible for third‑party
          content or practices. Your use of third‑party services is governed by
          their terms and policies.
        </p>

        <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
        <p>
          The Services are provided on an "as is" and "as available" basis
          without warranties of any kind, express or implied. We disclaim all
          warranties of merchantability, fitness for a particular purpose, and
          non‑infringement.
        </p>

        <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Axisphere will not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or revenues, whether incurred directly
          or indirectly, or any loss of data, use, goodwill, or other intangible
          losses, resulting from your use of the Services.
        </p>

        <h2 className="text-2xl font-semibold">8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Axisphere and its affiliates
          from any claims, liabilities, damages, losses, and expenses arising
          from your use of the Services or violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold">9. Termination</h2>
        <p>
          We may suspend or terminate your access to the Services at any time if
          we believe you have violated these Terms or if we need to do so to
          comply with legal requirements.
        </p>

        <h2 className="text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, and disputes will be
          subject to the exclusive jurisdiction of the courts located in
          Bengaluru, Karnataka, India.
        </p>

        <h2 className="text-2xl font-semibold">11. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. The updated version will
          be indicated by an updated “Last updated” date. Your continued use of
          the Services after changes become effective constitutes acceptance of
          the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold">12. Contact</h2>
        <p>Questions about these Terms? Contact hello@ai-marketing.studio.</p>

        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </main>
  );
}
