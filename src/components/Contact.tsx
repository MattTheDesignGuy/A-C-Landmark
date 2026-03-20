import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

// ---------------------------------------------------------------------------
// Replace YOUR_FORM_ID below with the ID from your Formspree form.
// Steps:
//   1. Go to https://formspree.io and sign in (or create a free account).
//   2. Click "New Form", name it (e.g. "A&C Landmark Contact").
//   3. Copy the form ID from the endpoint URL (e.g. "xpzgkwer").
//   4. Paste it here:  https://formspree.io/f/YOUR_FORM_ID
// ---------------------------------------------------------------------------
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. Send us a message
            and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Details</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-lg p-2.5 mt-0.5">
                    <MapPin size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600 text-sm mt-1">
                      123 Landmark Avenue<br />
                      Sydney NSW 2000, Australia
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-lg p-2.5 mt-0.5">
                    <Phone size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a
                      href="tel:+61200000000"
                      className="text-gray-600 text-sm mt-1 hover:text-amber-600 transition-colors"
                    >
                      +61 2 0000 0000
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-lg p-2.5 mt-0.5">
                    <Mail size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a
                      href="mailto:hello@aclandmark.com.au"
                      className="text-gray-600 text-sm mt-1 hover:text-amber-600 transition-colors"
                    >
                      hello@aclandmark.com.au
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Business Hours</h4>
              <div className="space-y-1 text-amber-100 text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>8:00 am – 5:30 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 am – 1:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-amber-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+61 4XX XXX XXX"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    <option value="Architectural Design">Architectural Design</option>
                    <option value="Construction Management">Construction Management</option>
                    <option value="Residential Build">Residential Build</option>
                    <option value="Commercial Project">Commercial Project</option>
                    <option value="Renovation & Fit-Out">Renovation &amp; Fit-Out</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project…"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg px-4 py-3 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
