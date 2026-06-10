const BASE = import.meta.env.BASE_URL

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <img
          src={`${BASE}hero-services.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-10 text-near-black/80 text-lg leading-relaxed">

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">1. About This Policy</h2>
              <p>
                A&C Landmark Legal Pty Ltd ("A&C Landmark", "we", "us", "our") is committed to protecting the privacy of all individuals whose personal information we collect and handle. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Name, address, email address, and telephone number</li>
                <li>Information provided when you contact us via our website enquiry form</li>
                <li>Details relevant to your legal matter</li>
                <li>Financial information where required for legal services</li>
                <li>Any other information you voluntarily provide to us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">3. How We Collect Information</h2>
              <p>
                We collect personal information directly from you where possible — for example, when you complete our online enquiry form, contact us by phone or email, or engage our services. We may also collect information from third parties where necessary in connection with a legal matter, such as from courts, government agencies, or other parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">4. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide legal services and respond to your enquiries</li>
                <li>Communicate with you about your matter</li>
                <li>Comply with our legal and professional obligations</li>
                <li>Manage our business operations and improve our services</li>
                <li>Send administrative or service-related communications</li>
              </ul>
              <p className="mt-4">
                We will not use your personal information for direct marketing purposes without your consent.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">5. Disclosure of Information</h2>
              <p>
                We may disclose your personal information to third parties where necessary to provide our services, including barristers, expert witnesses, courts and tribunals, government agencies, and other legal practitioners. We may also disclose information where required or permitted by law.
              </p>
              <p className="mt-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">6. Data Security</h2>
              <p>
                We take reasonable steps to protect the personal information we hold from misuse, interference, loss, unauthorised access, modification, or disclosure. Our security measures include physical, electronic, and procedural safeguards.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">7. Access and Correction</h2>
              <p>
                You have the right to request access to, or correction of, the personal information we hold about you. To make such a request, please contact us using the details below. We will respond within a reasonable timeframe and in accordance with the APPs.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">8. Cookies and Website Analytics</h2>
              <p>
                Our website may use cookies and similar tracking technologies to improve your browsing experience and analyse site traffic. You may disable cookies through your browser settings; however, some features of the site may not function properly as a result.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The current version will always be available on our website. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our handling of your personal information, please contact us:
              </p>
              <div className="mt-4 bg-white rounded-lg p-6 border-l-4 border-gold shadow-sm">
                <p className="font-semibold text-navy">A&C Landmark Legal Pty Ltd</p>
                <p>Suite 2.04 Level 2, 20-22 Albert Road, South Melbourne VIC 3205</p>
                <p>Phone: <a href="tel:0390018570" className="text-gold hover:underline">(03) 9001 8570</a></p>
                <p>Email: <a href="mailto:info@aclandmark.com.au" className="text-gold hover:underline">info@aclandmark.com.au</a></p>
              </div>
              <p className="mt-6 text-sm text-near-black/60">
                If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <span className="text-gold">www.oaic.gov.au</span>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
