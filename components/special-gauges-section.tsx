"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const specialGauges = [
  { name: "Gear DOP Checking Gauge", category: "Gear Measurement" },
  { name: "Multi Parameter Measuring Gauge", category: "Multi-Dimensional" },
  { name: "Relation Gauge", category: "Relationship Check" },
  { name: "Position Checking Gauge", category: "Position Verification" },
  { name: "CD Gauge", category: "Diameter Check" },
  { name: "Centre Mandrel Gauge", category: "Centre Alignment" },
  { name: "PCD Hole Position Gauge", category: "Pattern Verification" },
  { name: "Concentricity Gauge", category: "Concentricity Check" },
]

export default function SpecialGaugesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="special-gauges" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Special Gauges</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6 text-balance">
            Custom Engineered Solutions
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Advanced special gauges designed for complex measurement requirements and unique applications.
          </p>
        </motion.div>

        {/* Special Gauges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialGauges.map((gauge, index) => (
            <motion.div
              key={gauge.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href="#contact"
                className="group relative block bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 h-full hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>

                {/* Category Badge */}
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                  {gauge.category}
                </span>

                {/* Gauge Name */}
                <h3 className="text-lg font-semibold text-primary-foreground mb-4 group-hover:text-accent transition-colors">
                  {gauge.name}
                </h3>

                {/* Icon */}
                <div className="flex justify-between items-end">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <div className="w-6 h-6 border-2 border-accent rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-primary-foreground/60 mb-4">
            Need a custom gauge solution? We design and manufacture gauges tailored to your specifications.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            Discuss Your Requirements
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
