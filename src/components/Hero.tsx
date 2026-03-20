import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Over 20 years of experience',
  'Licensed & fully insured',
  'Award-winning designs',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-18">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Amber accent bar */}
      <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Building Excellence
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Creating{' '}
            <span className="text-amber-400">Landmark</span>{' '}
            Spaces
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            A&amp;C Landmark delivers premium architectural and construction solutions —
            from concept to completion. We transform visions into iconic structures built to last.
          </p>

          <ul className="space-y-2 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-300">
                <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              View Our Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-amber-400 hover:text-amber-400 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="fill-white w-full">
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
