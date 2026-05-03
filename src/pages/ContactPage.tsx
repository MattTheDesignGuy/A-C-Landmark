import { useCallback, useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Turnstile } from '@marsidev/react-turnstile'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

const BASE = import.meta.env.BASE_URL
const REVERT_AFTER_MS = 5_000
const BANNER_DURATION_MS = 5_000
const TURNSTILE_SITE_KEY = '0x4AAAAAADIY93eQBf6q7UgI'

const subjects = [
  'Banking & Finance',
  'Retail & Commercial Leasing',
  'Contract Law',
  'Civil Litigation',
  'Commercial Law',
  'Conveyancing',
  'Other',
]

type View = 'form' | 'thanks'

export default function ContactPage() {
  const [view, setView] = useState<View>('form')
  const [formKey, setFormKey] = useState(0)
  const [showBanner, setShowBanner] = useState(false)

  const handleSuccess = useCallback(() => {
    setView('thanks')
  }, [])

  const revertToForm = useCallback(() => {
    setView('form')
    setFormKey((k) => k + 1)
    setShowBanner(true)
  }, [])

  // Auto-revert after success
  useEffect(() => {
    if (view !== 'thanks') return
    const revert = setTimeout(revertToForm, REVERT_AFTER_MS)
    return () => clearTimeout(revert)
  }, [view, revertToForm])

  // Hide banner after a few seconds
  useEffect(() => {
    if (!showBanner) return
    const t = setTimeout(() => setShowBanner(false), BANNER_DURATION_MS)
    return () => clearTimeout(t)
  }, [showBanner])

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 lg:pb-20 overflow-hidden">
        <img
          src={`${BASE}hero-contact.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for a consultation or enquiry.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-warm-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 lg:p-10 shadow-sm">
              {view === 'thanks' ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-navy mb-2">Thank you</h2>
                  <p className="text-near-black/80 mb-6">
                    Your enquiry has been received. A member of our team will be in touch shortly.
                  </p>
                  <button
                    onClick={revertToForm}
                    className="inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {showBanner && (
                    <div className="mb-6 flex items-center gap-2 rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                      <CheckCircle size={16} className="shrink-0" />
                      <span>Your previous message was sent successfully.</span>
                    </div>
                  )}
                  <ContactForm key={formKey} onSuccess={handleSuccess} />
                </>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Contact Details</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Phone</p>
                      <a href="tel:0413200588" className="text-near-black/80 text-lg hover:text-gold transition-colors">
                        0413 200 588
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Email</p>
                      <a href="mailto:info@aclandmark.com.au" className="text-near-black/80 text-lg hover:text-gold transition-colors">
                        info@aclandmark.com.au
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Address</p>
                      <p className="text-near-black/80 text-lg">
                        Suite 2.04 Level 2, 20-22 Albert Road,<br />
                        South Melbourne VIC 3205
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">Business Hours</p>
                      <p className="text-near-black/80 text-lg">Monday – Friday, 9:00 AM – 5:30 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const [state, handleSubmit] = useForm('xvzlzrwg')

  useEffect(() => {
    if (state.succeeded) onSuccess()
  }, [state.succeeded, onSuccess])

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="font-heading text-2xl font-bold text-navy mb-2">
        Send Us a Message
      </h2>

      <input type="hidden" name="_subject" value="New enquiry from A&C Landmark website" />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          type="text" id="name" name="name" required
          className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white"
          placeholder="Your full name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          type="email" id="email" name="email" required
          className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white"
          placeholder="you@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
          Phone Number
        </label>
        <input
          type="tel" id="phone" name="phone"
          className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white"
          placeholder="04XX XXX XXX"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-1.5">
          Subject <span className="text-gold">*</span>
        </label>
        <select
          id="subject" name="subject" required defaultValue=""
          className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white appearance-none"
        >
          <option value="" disabled>Select a service area</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white resize-y"
          placeholder="How can we help you?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
      </div>

      <Turnstile siteKey={TURNSTILE_SITE_KEY} options={{ theme: 'light' }} />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gold hover:bg-gold-hover disabled:opacity-60 text-white px-8 py-3.5 rounded font-semibold text-lg transition-colors"
      >
        {state.submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}
