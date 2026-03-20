import { Link } from 'react-router'
import {
  Shield, Award, Zap, Handshake, Calendar, Scale,
  Building, Home, FileText, Gavel, Briefcase, ChevronRight,
} from 'lucide-react'

const teamMembers = [
  { name: 'Brittany Afif', title: 'PRINCIPAL SOLICITOR', initials: 'BA' },
  { name: 'Fidesse Phung', title: 'SENIOR SOLICITOR', initials: 'FP' },
  { name: 'Neil Young', title: 'SENIOR SOLICITOR', initials: 'NY' },
  { name: 'Melissa Lemus', title: 'LAW CLERK', initials: 'ML' },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Principal Led & Personally Involved',
    desc: "Your case won't get lost in a system. Our Principal, Brittany, leads every matter directly with senior-level attention and care.",
  },
  {
    icon: Award,
    title: 'Proven Results in Complex Matters',
    desc: 'From debt recovery to property settlements, we deliver consistent, successful outcomes through strategic thinking.',
  },
  {
    icon: Zap,
    title: 'Fast, Clear Communication',
    desc: 'We prioritise fast response times, clear explanations, and transparent updates so you always know where things stand.',
  },
  {
    icon: Handshake,
    title: 'Personalised Client Service',
    desc: 'Every client is unique. We take the time to understand your needs and provide tailored, respectful solutions.',
  },
  {
    icon: Calendar,
    title: '9+ Years of Legal Experience',
    desc: 'Spanning banking, finance, commercial law, and property — we anticipate challenges and apply efficient strategies.',
  },
  {
    icon: Scale,
    title: 'Integrity & Professionalism',
    desc: "Ethics isn't a brand value — it's a promise. We uphold the highest standards in all our dealings.",
  },
]

const practiceAreas = [
  { icon: Building, title: 'Banking & Finance', desc: 'Expert advice on financial transactions and loan arrangements.', slug: 'banking-finance' },
  { icon: Home, title: 'Retail & Commercial Leasing', desc: 'Robust leasing arrangements for landlords and tenants.', slug: 'leasing' },
  { icon: FileText, title: 'Contract Law', desc: 'Drafting, reviewing, and enforcing business contracts.', slug: 'contract-law' },
  { icon: Gavel, title: 'Civil Litigation', desc: 'Pragmatic dispute resolution and legal representation.', slug: 'litigation' },
  { icon: Briefcase, title: 'Commercial Law', desc: 'Strategic legal support aligned with business objectives.', slug: 'commercial-law' },
  { icon: Home, title: 'Conveyancing', desc: 'Efficient property transactions with confidence.', slug: 'conveyancing' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <p className="text-gold tracking-[0.25em] uppercase text-sm font-semibold mb-6">
            Welcome to A&C Landmark
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
            Your Legal Anchor.{' '}
            <span className="text-gold">Your Trusted Guide.</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Direction, clarity, and confidence across banking & finance, commercial law, and civil litigation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-gold hover:bg-gold-hover text-white px-8 py-3.5 rounded font-semibold text-lg transition-colors text-center"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-3.5 rounded font-semibold text-lg transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex gap-6">
              <div className="w-1 bg-gold rounded-full shrink-0 hidden sm:block" />
              <div>
                <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-2">About Us</p>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy">
                  A&C Landmark
                </h2>
              </div>
            </div>
            <div className="space-y-6 text-near-black/80 text-lg leading-relaxed">
              <p>
                A&C Landmark was founded with a simple but powerful belief: that legal support should serve as a compass — guiding clients with certainty, acting with precision, and always standing firm. Whether you're a business seeking strategic legal insight or an individual managing personal or professional transitions, we're here as your steadfast partner.
              </p>
              <p>
                Our clients range from private lenders and corporate entities to property developers and professionals. No matter your legal needs, our team is committed to clarity, integrity, and excellence in every transaction and dispute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Our People
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-navy-light rounded-lg mb-4 overflow-hidden flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-colors">
                  <span className="font-heading text-4xl lg:text-5xl text-gold/60 font-bold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-heading text-lg lg:text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gold text-sm tracking-wider mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy text-center mb-16">
            Why Clients Choose A&C Landmark
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-8 border-t-4 border-gold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <item.icon size={32} className="text-gold mb-4" />
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-near-black/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull-Quote Banner */}
      <section className="bg-navy py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-heading text-gold text-6xl leading-none block mb-4">&ldquo;</span>
          <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white italic leading-snug">
            We pride ourselves on professionalism, clarity, and results.
          </blockquote>
          <p className="mt-6 text-gold tracking-[0.2em] uppercase text-sm font-semibold">
            — A&C Landmark
          </p>
        </div>
      </section>

      {/* Our Practice Areas Preview */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-navy text-center mb-16">
            Our Practice Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <area.icon size={32} className="text-gold mb-4" />
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-near-black/70 leading-relaxed mb-4">{area.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-gold font-semibold hover:gap-2 gap-1 transition-all"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Get in touch with A&C Landmark for clear, confident legal guidance.
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
