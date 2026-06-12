const BASE = import.meta.env.BASE_URL

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <img src={`${BASE}hero-services.png`} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">Website Disclaimer</h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-warm-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-near-black/80 text-lg leading-relaxed">

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">General Information Only</h2>
            <p className="mb-4">The information contained on this website is provided for general informational purposes only.</p>
            <p>While A&amp;C Landmark endeavours to ensure that the information published is accurate and up to date, we make no representation or warranty regarding the completeness, accuracy, reliability or suitability of the information.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">No Legal Advice</h2>
            <p className="mb-3">Nothing on this website constitutes legal advice. The content on this website:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Is intended to provide general information only</li>
              <li>Does not take into account your individual circumstances</li>
              <li>Should not be relied upon as legal advice</li>
            </ul>
            <p>You should obtain professional legal advice before making decisions or taking action based on any information contained on this website.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">No Solicitor-Client Relationship</h2>
            <p className="mb-3">Contacting A&amp;C Landmark through this website, email, contact forms, or social media platforms does not create a solicitor-client relationship.</p>
            <p>A solicitor-client relationship only arises when we have agreed in writing to act for you.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">No Guarantee of Outcomes</h2>
            <p>Past results, case studies, testimonials or examples appearing on this website are not guarantees of future outcomes. Every legal matter depends upon its own facts, circumstances and applicable law.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Third-Party Content</h2>
            <p>This website may contain links to external websites. A&amp;C Landmark does not control and is not responsible for the content, accuracy, availability or practices of any external website.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Liability Exclusion</h2>
            <p className="mb-3">To the maximum extent permitted by law, A&amp;C Landmark excludes all liability for any loss, damage, liability, claim, cost or expense arising directly or indirectly from:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Reliance on information contained on this website</li>
              <li>Use of or inability to use this website</li>
              <li>Errors or omissions in website content</li>
              <li>Accessing third-party websites linked from this website</li>
            </ul>
            <p>Nothing in this Disclaimer excludes any rights that cannot lawfully be excluded.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Intellectual Property</h2>
            <p>All intellectual property rights in this website and its contents are owned by or licensed to A&amp;C Landmark unless otherwise stated. Unauthorised use, reproduction or distribution of website content is prohibited.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Jurisdiction</h2>
            <p>This website and its content are governed by the laws of Victoria, Australia. Any dispute arising in connection with this website shall be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </div>

        </div>
      </section>
    </>
  )
}
