import { Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-white">
              A&amp;C <span className="text-amber-500">Landmark</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Premium architectural design and construction services.
              Building landmark spaces across Australia for over 20 years.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                123 Landmark Avenue, Sydney NSW 2000
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+61200000000" className="hover:text-amber-400 transition-colors">
                  +61 2 0000 0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:hello@aclandmark.com.au" className="hover:text-amber-400 transition-colors">
                  hello@aclandmark.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <span>© {new Date().getFullYear()} A&amp;C Landmark. All rights reserved.</span>
          <span>Built with ♥ in Australia</span>
        </div>
      </div>
    </footer>
  )
}
