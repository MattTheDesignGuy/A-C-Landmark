import { createHashRouter, RouterProvider, Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import ModernSlaveryPage from './pages/ModernSlaveryPage'
import DisclaimerPage from './pages/DisclaimerPage'
import TermsOfUsePage from './pages/TermsOfUsePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/privacy', element: <PrivacyPolicyPage /> },
      { path: '/cookie-policy', element: <CookiePolicyPage /> },
      { path: '/modern-slavery', element: <ModernSlaveryPage /> },
      { path: '/disclaimer', element: <DisclaimerPage /> },
      { path: '/terms', element: <TermsOfUsePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
