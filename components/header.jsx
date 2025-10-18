"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, User } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleScroll = (e, href) => {
    // Only prevent default for anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const navItems = [
    { label: "الرئيسية", href: "#home", isScroll: true },
    {
      label: "قائمة الطعام",
      href: "https://qrco.de/be5myU?fbclid=IwY2xjawNP8J1leHRuA2FlbQIxMABicmlkETFjekNqMmlvUmlhcEliYVhoAR4dsbc6p4LxjbQMbPIeiWJyCD2rvVTtH-eJQGZqxSdXFL_R7YQaEdKvJED1Ew_aem_hnhlhYPmNFdmB9k9FC9Ppg",
      isExternal: true
    },
    { label: "من نحن", href: "#discover", isScroll: true },
    { label: "الفروع", href: "#branches", isScroll: true },

    { label: "اتصل بنا", href: "#contact", isScroll: true },
  ]

  if (!isClient) return null

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300" dir="rtl">
      <nav
        className={`w-full transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-yellow-100'
          : 'bg-transparent border-b border-transparent py-2'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="شعار كرم الشام"
                className={`h-12 w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'
                  }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 space-x-reverse">
              {navItems.map((item) => (
                item.isExternal ? (
                  // External links (like the menu QR code)
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${scrolled
                      ? 'text-gray-800 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-200'
                      }`}
                  >
                    {item.label}
                  </a>
                ) : item.isScroll ? (
                  // Internal links with smooth scroll
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${scrolled
                      ? 'text-gray-800 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-200'
                      }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  // Fallback for any other links
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${scrolled
                      ? 'text-gray-800 hover:text-yellow-600'
                      : 'text-white hover:text-yellow-200'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}


              <Link
                href="#contact"
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${scrolled
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                  }`}
              >
                اطلب الآن
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden space-x-4 space-x-reverse">
              <button className="text-white hover:text-yellow-200 p-2">
                <ShoppingCart className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled
                  ? 'text-gray-700 hover:text-yellow-600'
                  : 'text-white hover:text-yellow-200'
                  } hover:bg-yellow-50/30 focus:outline-none`}
                aria-expanded="false"
              >
                <span className="sr-only">افتح القائمة الرئيسية</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-b-xl mx-4">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { handleScroll(e, item.href); setIsOpen(false); }}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 cursor-pointer"
                >
                  {item.label}
                </a>
              )
            ))}
            <div className="pt-2 pb-3 border-t border-gray-100">
              <Link
                href="#contact"
                className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-500 hover:bg-yellow-600"
                onClick={() => setIsOpen(false)}
              >
                اطلب الآن
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
