"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  { name: "Carbide Plug Gauges", description: "High-precision plug gauges for internal diameter measurement" },
  { name: "Carbide Ring Gauges", description: "Accurate ring gauges for external diameter verification" },
  { name: "Carbide Snap Gauges", description: "Quick-check gauges for production line quality control" },
  { name: "Width Gauges", description: "Precision gauges for width and thickness measurement" },
  { name: "Measuring Pins", description: "Calibrated pins for precise hole measurement" },
  { name: "Height Checking Gauges", description: "Vertical measurement solutions for quality inspection" },
  { name: "Thread Plug & Ring Gauges", description: "Thread verification gauges for screw threads" },
  { name: "Special Gauges", description: "Custom-designed gauges for specific applications" },
  { name: "Concentricity Gauges", description: "Precision gauges for concentricity verification" },
  { name: "Position Checking Gauges", description: "Gauges for verifying hole positions and patterns" },
  { name: "PCD Hole Position Gauges", description: "Pitch circle diameter verification gauges" },
  { name: "Relation Gauges", description: "Multi-dimensional relationship checking gauges" },
]

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Precision Gauges for Every Application
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive range of carbide and steel gauges engineered to meet the highest standards of accuracy and durability.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href="#contact"
                className="group block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="w-6 h-6 rounded-full border-2 border-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
