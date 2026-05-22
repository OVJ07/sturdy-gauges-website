"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Car, Plane, Shield, Tractor, Factory, Cog } from "lucide-react"

const industries = [
  {
    icon: Car,
    name: "Automotive",
    description: "Precision gauges for automotive component manufacturing and quality control"
  },
  {
    icon: Plane,
    name: "Aerospace",
    description: "High-precision measurement solutions meeting aerospace standards"
  },
  {
    icon: Shield,
    name: "Defence",
    description: "Reliable gauges for defence equipment manufacturing"
  },
  {
    icon: Tractor,
    name: "Agriculture",
    description: "Durable gauges for agricultural machinery production"
  },
  {
    icon: Factory,
    name: "Heavy Engineering",
    description: "Industrial-grade gauges for heavy engineering applications"
  },
  {
    icon: Cog,
    name: "Manufacturing",
    description: "Comprehensive gauge solutions for general manufacturing"
  },
]

export default function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 15 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Trusted Across Industries
          </h2>
          <p className="text-muted-foreground text-lg">
            Our precision gauges serve leading manufacturers across diverse industrial sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: index % 2 === 0 ? -15 : 15 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group flex items-start gap-4 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
