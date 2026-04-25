import DocumentLayout from "@/features/legal/components/DocumentLayout";

export default function SafetyPage() {
  return (
    <DocumentLayout 
      title="Community Safety & Guidelines" 
      lastUpdated="Last Updated: April 2026"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl text-title mb-4">Our Commitment to Community Safety</h2>
          <p className="text-body leading-relaxed">
            Neeli is a pan-entertainment social application with ten million+ users. We are committed to providing a safe, respectful, and inclusive environment for our global community. Our moderation team works 24/7 to ensure a positive experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-title mb-4">Community Guidelines</h2>
          <p className="text-body leading-relaxed mb-4">
            To maintain a healthy ecosystem, we enforce strict guidelines regarding user behavior and content:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-body">
            <li><strong>Respect Others:</strong> No harassment, hate speech, or bullying.</li>
            <li><strong>Privacy First:</strong> Do not share personal information of others without consent.</li>
            <li><strong>Authenticity:</strong> Impersonation of other users or entities is strictly prohibited.</li>
            <li><strong>Safe Content:</strong> No sexually explicit, violent, or illegal content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-title mb-4">Enforcement & Approach</h2>
          <p className="text-body leading-relaxed">
            We use a combination of AI-driven automated tools and human moderators to monitor the platform. Violations of our terms may result in content removal, account warnings, or permanent bans. We cooperate with law enforcement agencies when necessary to protect our users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-title mb-4">Data Safety Policy</h2>
          <p className="text-body leading-relaxed">
            Your data safety is our priority. We implement industry-standard encryption and security protocols to protect your personal information. We do not sell your data to third parties.
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 className="text-title text-lg mb-2">Key Protections:</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm text-body opacity-80">
              <li>End-to-end encryption for private video calls.</li>
              <li>Regular security audits of our server infrastructure.</li>
              <li>Strict access controls for our internal data processing teams.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-title mb-4">Safety Guide for Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="text-title text-lg mb-2">Reporting Tools</h3>
              <p className="text-sm text-body opacity-80">Use the red flag icon on any profile or stream to report violations instantly.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl">
              <h3 className="text-title text-lg mb-2">Blocking Users</h3>
              <p className="text-sm text-body opacity-80">You can block any user to prevent them from contacting you or viewing your content.</p>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-gray-100">
          <h2 className="text-2xl text-title mb-4">Contact our Safety Team</h2>
          <p className="text-body leading-relaxed">
            If you have specific concerns or need to report a serious incident, please email us at <span className="text-neeli-pink font-bold">safety@neeli.com</span>. We review all reports with the highest priority.
          </p>
        </section>
      </div>
    </DocumentLayout>
  );
}
