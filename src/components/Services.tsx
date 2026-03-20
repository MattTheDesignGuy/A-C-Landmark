import { Ruler, HardHat, Home, Building, Wrench, Palette } from 'lucide-react'

const services = [
  {
    icon: Ruler,
    title: 'Architectural Design',
    description:
      'Innovative, functional designs tailored to your vision — from concept drawings to detailed blueprints.',
  },
  {
    icon: HardHat,
    title: 'Construction Management',
    description:
      'End-to-end project management ensuring your build is delivered on time, on budget, and to spec.',
  },
  {
    icon: Home,
    title: 'Residential Builds',
    description:
      'Custom homes crafted with care. We work closely with you to create your perfect living space.',
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    description:
      'From office buildings to retail centres — purpose-built commercial spaces that work for your business.',
  },
  {
    icon: Wrench,
    title: 'Renovations & Fit-Outs',
    description:
      'Breathe new life into existing structures with expert renovation and interior fit-out services.',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description:
      'Cohesive, stunning interiors designed to complement your architecture and elevate the experience.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            A comprehensive suite of design and construction services, delivered by
            experienced professionals who care about the details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="bg-amber-100 rounded-xl p-3 w-fit mb-5 group-hover:bg-amber-500 transition-colors duration-300">
                <Icon size={26} className="text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
