const projects = [
  {
    title: 'Riverfront Residences',
    category: 'Residential',
    description: 'A luxury riverside development featuring 42 premium apartments with striking architectural design.',
    bg: 'from-blue-800 to-blue-600',
  },
  {
    title: 'The Commerce Hub',
    category: 'Commercial',
    description: '12-storey mixed-use commercial tower in the CBD, delivering modern office and retail spaces.',
    bg: 'from-gray-800 to-gray-600',
  },
  {
    title: 'Greenfield Estate',
    category: 'Residential',
    description: 'A master-planned community of 80 custom homes set within a landscaped bushland precinct.',
    bg: 'from-emerald-800 to-emerald-600',
  },
  {
    title: 'City Arts Centre',
    category: 'Public',
    description: 'A landmark cultural facility housing galleries, performance spaces, and community halls.',
    bg: 'from-purple-800 to-purple-600',
  },
  {
    title: 'Harbor View Renovation',
    category: 'Renovation',
    description: 'Full heritage restoration and contemporary fit-out of a 1920s warehouse precinct.',
    bg: 'from-amber-800 to-amber-600',
  },
  {
    title: 'Northside Medical Centre',
    category: 'Commercial',
    description: 'Purpose-built medical facility with specialist suites, imaging, and allied health spaces.',
    bg: 'from-teal-800 to-teal-600',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            A selection of our most notable completed works across residential,
            commercial, and public sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, category, description, bg }) => (
            <div
              key={title}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Colour placeholder */}
              <div className={`h-48 bg-gradient-to-br ${bg} flex items-end p-5`}>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                  {category}
                </span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
