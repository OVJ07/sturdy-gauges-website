"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Award, 
  Target, 
  Layers, 
  FileCheck, 
  Truck, 
  Users, 
  Microscope, 
  Wrench 
} from "lucide-react"

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality management system ensuring consistent excellence"
  },
  {
    icon: Target,
    title: "High Precision Manufacturing",
    description: "Accuracy to micron levels with state-of-the-art equipment"
  },
  {
    icon: Layers,
    title: "Carbide & Steel Gauges",
    description: "Durable materials for long-lasting performance"
  },
  {
    icon: FileCheck,
    title: "Third Party CMM Reports",
    description: "Independent verification of dimensional accuracy"
  },
  {
    icon: Truck,
    title: "Fast Response & Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: Users,
    title: "In-house Engineering Team",
    description: "Expert team for design consultation and support"
  },
  {
    icon: Microscope,
    title: "Modern Inspection Methods",
    description: "Advanced metrology and quality control processes"
  },
  {
    icon: Wrench,
    title: "Custom Gauge Solutions",
    description: "Tailored designs for unique measurement needs"
  },
]

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why-us" className="py-24 bg-background blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            Excellence in Every Gauge
          </h2>
          <p className="text-muted-foreground text-lg">
            Partner with a manufacturer committed to quality, precision, and customer satisfaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
