import { Link } from 'react-router'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Gold accent line */}
      <div className="h-1 bg-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-horizontal-white.svg`}
              alt="A&C Landmark"
              className="h-8 w-auto"
            />
            <p className="mt-4 text-gray-400 font-heading italic text-lg">
              Your Legal Anchor. Your Trusted Guide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="tel:0413200588" className="hover:text-gold transition-colors">
                  0413 200 588
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="mailto:info@aclandmark.com.au" className="hover:text-gold transition-colors">
                  info@aclandmark.com.au
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <span>Suite 2.04 Level 2, 20-22 Albert Road, South Melbourne VIC 3205</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 A&C Landmark. All rights reserved.
          </p>
          <Link to="/contact" className="text-gray-500 hover:text-gold text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
