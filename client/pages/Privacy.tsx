import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-background/70 backdrop-blur-xs sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <Link to="/" className="text-gold-600 hover:text-gold-500">
            Home
          </Link>
        </div>
      </header>

      <section className="container mx-auto px-6 py-10 max-w-4xl space-y-8 leading-relaxed">
        <p>
          This Privacy Policy explains how Axisphere Media Work ("Axisphere",
          "we", "us") collects, uses, and protects your information when you use
          our websites, products, and services (collectively, the "Services").
        </p>

        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Contact details you provide, such as name, email address, phone
            number, company, and the message you submit via our contact forms.
          </li>
          <li>
            Usage data collected automatically, including IP address,
            device/browser information, and pages visited.
          </li>
          <li>
            Cookies and similar technologies used to remember preferences and
            improve performance.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to inquiries and provide customer support.</li>
          <li>Operate, maintain, and improve the Services.</li>
          <li>Send administrative messages and updates you request.</li>
          <li>Protect against, investigate, and deter fraudulent activity.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share information
          with service providers who help us operate the Services (for example,
          hosting, analytics, and customer support). These providers are bound
          by obligations to protect your data.
        </p>

        <h2 className="text-2xl font-semibold">Data Retention</h2>
        <p>
          We retain personal information only as long as necessary for the
          purposes described above, to comply with legal obligations, resolve
          disputes, and enforce our agreements.
        </p>

        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or restrict the processing of your personal information. To
          exercise these rights, contact us using the details below.
        </p>

        <h2 className="text-2xl font-semibold">Security</h2>
        <p>
          We use reasonable technical and organizational safeguards to protect
          personal information. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold">International Transfers</h2>
        <p>
          Your information may be processed in countries other than your own.
          When we transfer data, we implement appropriate protections.
        </p>

        <h2 className="text-2xl font-semibold">Children's Privacy</h2>
        <p>
          Our Services are not directed to children under 13. We do not
          knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be indicated by an updated “Last updated” date.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          For questions or requests about this Privacy Policy, contact
          hello@ai-marketing.studio or write to Axisphere Media Work, Bengaluru,
          India.
        </p>

        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </section>
    </main>
  );
}
