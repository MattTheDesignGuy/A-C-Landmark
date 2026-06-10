import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const services = [
  {
    title: 'Banking & Finance',
    img: 'service-banking.png',
    overview: 'We advise on a wide range of financial transactions, ensuring your investments are protected and your interests are advanced.',
    items: [
      'Short-term private loan structuring',
      'Loan documentation and enforcement',
      'Security arrangements and personal guarantees',
    ],
  },
  {
    title: 'Retail & Commercial Leasing',
    img: 'service-leasing.png',
    overview: "Whether you're a landlord or a tenant, we ensure leasing arrangements are robust and commercially sound.",
    items: [
      'Lease drafting and negotiations',
      'Lease disputes and enforcement',
      'Lease renewals and terminations',
    ],
  },
  {
    title: 'Contract Law',
    img: 'service-contract.png',
    overview: 'Contracts are the foundation of every business deal. We make sure yours hold up.',
    items: [
      'Drafting, reviewing, and advising on contracts',
      'Negotiation support',
      'Breach and enforcement matters',
    ],
  },
  {
    title: 'Civil Litigation',
    img: 'service-litigation.png',
    overview: "When disputes arise, we're in your corner. We aim for pragmatic resolutions and are ready to fight when it counts.",
    items: [
      'Contract disputes',
      'Debt recovery',
      'Commercial and personal litigation',
    ],
  },
  {
    title: 'Commercial Law',
    img: 'service-commercial.png',
    overview: 'From startups to established corporations, we align legal strategy with your business objectives.',
    items: [
      'Business structuring and compliance',
      'Shareholder agreements',
      'Commercial contract negotiation and review',
    ],
  },
  {
    title: 'Conveyancing',
    img: 'cta-bg.png',
    overview: 'Efficient, reliable, and stress-free property transactions with confidence and transparency.',
    items: [
      'Residential and commercial property purchases and sales',
      'Title searches, due diligence, and settlements',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden">
        <img
          src={`${BASE}hero-services.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Practice Areas
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">
            Expert legal guidance across banking, property, commercial law, and beyond.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      <div className="bg-warm-white">
        {services.map((service, i) => {
          const isEven = i % 2 === 0
          return (
            <section key={service.title} className={`py-16 lg:py-24 ${i > 0 ? 'border-t border-light-grey' : ''}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                  {/* Image */}
                  <div className={`aspect-[4/3] rounded-lg overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={`${BASE}${service.img}`}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="w-12 h-1 bg-gold rounded mb-6" />
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-6">
                      {service.title}
                    </h2>
                    <p className="text-near-black/80 text-lg leading-relaxed mb-8">
                      {service.overview}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-2.5 h-2.5 bg-gold rounded-full mt-2 shrink-0" />
                          <span className="text-near-black/70 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-gold font-semibold text-lg hover:gap-3 transition-all"
                    >
                      Enquire About This Service <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to discuss your legal needs?
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-10">
            Contact us today for a confidential consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-hover text-white px-10 py-4 rounded font-semibold text-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
