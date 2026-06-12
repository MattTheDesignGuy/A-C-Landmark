import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
const BASE = import.meta.env.BASE_URL

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const transparent = isHome && !scrolled
  const navBg = transparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm'
  const textColor = transparent ? 'text-white' : 'text-navy'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={`${BASE}${transparent ? 'AC-white-logo.webp' : 'AC-black-logo.webp'}`}
              alt="A&C Landmark"
              className="h-[60px] w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`${textColor} hover:text-gold transition-colors font-medium`}>
              Home
            </Link>
            <Link to="/services" className={`${textColor} hover:text-gold transition-colors font-medium`}>
              Services
            </Link>
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded font-semibold transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden ${textColor} transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-light-grey">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-navy hover:text-gold font-medium py-2">
              Home
            </Link>
            <Link to="/services" className="block text-navy hover:text-gold font-medium py-2">
              Services
            </Link>
            <Link
              to="/contact"
              className="block bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded font-semibold text-center transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
