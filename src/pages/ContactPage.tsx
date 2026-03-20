import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwpkpvvo'

const subjects = [
  'Banking & Finance',
  'Retail & Commercial Leasing',
  'Contract Law',
  'Civil Litigation',
  'Commercial Law',
  'Conveyancing',
  'Other',
]

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-near-black/70 mb-6">
                    Thank you for your enquiry. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-gold font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                    Send Us a Message
                  </h2>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name" required
                      className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white"
                      placeholder="Your full name"
                    />
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
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-1.5">
                      Subject <span className="text-gold">*</span>
                    </label>
                    <select
                      id="subject" name="subject" required
                      className="w-full px-4 py-3 border border-light-grey rounded focus:outline-none focus:border-gold transition-colors bg-warm-white appearance-none"
                    >
                      <option value="">Select a service area</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
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
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email us directly at info@aclandmark.com.au
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-gold hover:bg-gold-hover disabled:opacity-60 text-white px-8 py-3.5 rounded font-semibold text-lg transition-colors"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
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
