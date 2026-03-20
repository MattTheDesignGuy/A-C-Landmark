import { Award, Users, Building2, ThumbsUp } from 'lucide-react'

const stats = [
  { icon: Building2, value: '250+', label: 'Projects Completed' },
  { icon: Users, value: '180+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Industry Awards' },
  { icon: ThumbsUp, value: '20+', label: 'Years Experience' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
              Built on a Foundation of Trust &amp; Quality
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A&amp;C Landmark has been a leading name in architectural design and construction
              for over two decades. We combine innovative design thinking with time-tested
              building techniques to deliver projects that stand out — and stand the test of time.
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              From residential developments and commercial spaces to large-scale infrastructure
              projects, our team of certified professionals brings passion, precision, and
              expertise to every build.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
            >
              Work With Us
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-amber-100 rounded-full p-3 mb-4">
                  <Icon size={28} className="text-amber-600" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
