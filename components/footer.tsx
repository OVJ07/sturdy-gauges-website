"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#special-gauges", label: "Special Gauges" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Our Process" },
]

const products = [
  "Carbide Plug Gauges",
  "Carbide Ring Gauges",
  "Carbide Snap Gauges",
  "Thread Gauges",
  "Special Gauges",
  "Custom Solutions",
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">SG</span>
              </div>
              <div>
                <span className="text-xl font-bold">Sturdy Gauges</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Manufacturer of Real Carbide Limit Gauges & All Types of Special Gauges. 
              Precision engineering since 2011.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <a href="tel:+919637159016" className="text-primary-foreground/70 hover:text-accent transition-colors block">
                    +91 9637159016
                  </a>
                  <a href="tel:+919834583537" className="text-primary-foreground/70 hover:text-accent transition-colors block">
                    +91 9834583537
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:sturdygauges@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  sturdygauges@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">
                  W-96, Waluj MIDC,<br />
                  Aurangabad – 431136
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Sturdy Gauges. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              />
              <span className="text-xs text-primary-foreground/40 px-2">ISO 9001:2015</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
