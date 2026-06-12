const BASE = import.meta.env.BASE_URL

export default function TermsOfUsePage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <img src={`${BASE}hero-services.png`} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">Website Terms of Use</h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-warm-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-near-black/80 text-lg leading-relaxed">

          <p>Welcome to the A&amp;C Landmark website. By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree to these Terms, you should not use this website.</p>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">1. About This Website</h2>
            <p>This website is operated by A&amp;C Landmark Pty Ltd ("A&amp;C Landmark", "we", "our" or "us"). The information on this website is provided for general information purposes only and is not intended to constitute legal advice.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">2. No Legal Advice</h2>
            <p className="mb-3">The content on this website:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Is general in nature</li>
              <li>Does not take into account your personal circumstances</li>
              <li>Is not legal advice</li>
              <li>Should not be relied upon as a substitute for obtaining independent legal advice</li>
            </ul>
            <p className="mb-4">You should seek professional legal advice before acting or refraining from acting on the basis of any information contained on this website.</p>
            <p>Your use of this website does not create a solicitor-client relationship between you and A&amp;C Landmark. A solicitor-client relationship is only established after we have agreed to act for you and any required engagement documentation has been completed.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">3. Accuracy of Information</h2>
            <p className="mb-3">We endeavour to ensure that information published on this website is accurate and current. However, laws frequently change and information may become outdated.</p>
            <p className="mb-3">To the maximum extent permitted by law, we do not warrant that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Information on this website is complete, accurate or current</li>
              <li>The website will always be available</li>
              <li>The website will be free from errors, interruptions, viruses or other harmful components</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">4. Intellectual Property</h2>
            <p className="mb-3">Unless otherwise stated, all content on this website is owned by or licensed to A&amp;C Landmark, including text, graphics, logos, branding, layouts, documents, images, and publications.</p>
            <p className="mb-3">You may access and print material from this website for personal and non-commercial use only.</p>
            <p>You must not reproduce, modify, distribute, publish or commercially exploit any content without our prior written consent.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">5. Prohibited Use</h2>
            <p className="mb-3">You must not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use this website unlawfully</li>
              <li>Attempt to gain unauthorised access to any part of the website</li>
              <li>Introduce malicious software or code</li>
              <li>Interfere with the operation of the website</li>
              <li>Use automated systems to scrape or harvest website content without our consent</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">6. Third-Party Links</h2>
            <p>This website may contain links to third-party websites provided for convenience only. We do not endorse, control or accept responsibility for the content, privacy practices or accuracy of any third-party website.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">7. Limitation of Liability</h2>
            <p className="mb-3">To the maximum extent permitted by law, A&amp;C Landmark excludes all liability for any loss, damage, cost or expense arising directly or indirectly from:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Use of this website</li>
              <li>Reliance on information contained on this website</li>
              <li>Inability to access the website</li>
              <li>Any viruses or malicious code transmitted through the website</li>
            </ul>
            <p>Nothing in these Terms excludes any rights that cannot be excluded under applicable law.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">8. Privacy</h2>
            <p>Your use of this website is also governed by our <a href="#/privacy" className="text-gold hover:underline">Privacy Policy</a> and <a href="#/cookie-policy" className="text-gold hover:underline">Cookie Policy</a>.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">9. Changes to These Terms</h2>
            <p>We may amend these Terms of Use from time to time without notice. Your continued use of the website constitutes acceptance of any updated Terms.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">10. Governing Law</h2>
            <p>These Terms are governed by the laws of Victoria, Australia. Any dispute arising from these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </div>

        </div>
      </section>
    </>
  )
}
