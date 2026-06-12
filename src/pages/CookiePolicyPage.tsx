const BASE = import.meta.env.BASE_URL

export default function CookiePolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <img src={`${BASE}hero-services.png`} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">Cookie Policy</h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">Last updated: June 2026</p>
        </div>
      </section>

      <section className="bg-warm-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-near-black/80 text-lg leading-relaxed">
          <p>This Cookie Policy explains how A&amp;C Landmark uses cookies and similar technologies on our website.</p>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites function effectively and improve user experience by remembering preferences and collecting information about how visitors use a website.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">2. Types of Cookies We Use</h2>

            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Essential Cookies</h3>
            <p className="mb-3">These cookies are necessary for the website to function properly. They may include cookies used to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Maintain security</li>
              <li>Enable navigation</li>
              <li>Support website functionality</li>
            </ul>
            <p className="mb-6">Without these cookies, some parts of the website may not operate correctly.</p>

            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Analytics Cookies</h3>
            <p className="mb-3">We may use analytics tools such as Google Analytics, Google Search Console, and similar analytical services. These cookies help us understand:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Website traffic</li>
              <li>Visitor behaviour</li>
              <li>Popular pages</li>
              <li>User engagement</li>
            </ul>
            <p className="mb-6">This information is generally aggregated and does not identify individuals.</p>

            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Functional Cookies</h3>
            <p className="mb-6">These cookies remember your preferences and improve your browsing experience.</p>

            <h3 className="font-heading text-xl font-semibold text-navy mb-3">Marketing Cookies</h3>
            <p>From time to time, we may use marketing and advertising technologies to better understand the effectiveness of our online advertising. These technologies may be provided by third-party platforms such as Google, Meta (Facebook and Instagram), and LinkedIn.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">3. Managing Cookies</h2>
            <p className="mb-3">Most web browsers allow you to accept, reject, or delete existing cookies. You can usually manage cookies through your browser settings.</p>
            <p>Please note that disabling cookies may affect website functionality.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">4. Third-Party Services</h2>
            <p>Third-party providers may place cookies on your device when you use our website. These providers operate under their own privacy policies and terms.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">5. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be published on this page.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">6. Contact Us</h2>
            <p>If you have questions regarding this Cookie Policy, please contact us using the details set out in our <a href="#/privacy" className="text-gold hover:underline">Privacy Policy</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
