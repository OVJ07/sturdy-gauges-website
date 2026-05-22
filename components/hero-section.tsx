"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Package, Shield, Ruler } from "lucide-react"

const stats = [
  { number: 15, suffix: "+", label: "Years Experience", icon: Award },
  { number: 5000, suffix: "+", label: "Gauges Delivered", icon: Package },
  { number: 100, suffix: "%", label: "ISO Certified", icon: Shield },
  { number: 2, suffix: "D & 3D", label: "Design Facility", icon: Ruler },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  useEffect(() => {
    if (!isInView) {
      setCount(0)
      return
    }

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      </div>

      {/* Animated Measurement Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
        />
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent"
        />
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/80">ISO 9001:2015 Certified Manufacturer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance"
          >
            Precision Carbide Gauges
            <br />
            <span className="text-accent">Engineered for Accuracy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-3xl mx-auto mb-10 text-pretty"
          >
            Manufacturing Carbide Plug Gauges, Ring Gauges, Snap Gauges & Special Gauges Since 2011. 
            Trusted by leading industries worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="#products">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="#contact">Request Quote</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                  <stat.icon className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <div className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
