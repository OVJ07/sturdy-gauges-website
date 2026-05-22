"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileSearch, PenTool, Factory, ClipboardCheck, Target, Truck } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileSearch,
    title: "Requirement Analysis",
    description: "Understanding your specific measurement needs and application requirements"
  },
  {
    step: "02",
    icon: PenTool,
    title: "2D / 3D Design",
    description: "Creating detailed CAD designs with precision specifications"
  },
  {
    step: "03",
    icon: Factory,
    title: "Precision Manufacturing",
    description: "State-of-the-art machining with tight tolerances"
  },
  {
    step: "04",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Rigorous quality checks at every production stage"
  },
  {
    step: "05",
    icon: Target,
    title: "CMM Verification",
    description: "Final dimensional verification with CMM reporting"
  },
  {
    step: "06",
    icon: Truck,
    title: "Delivery",
    description: "Secure packaging and timely delivery to your facility"
  },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 15 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            From Concept to Delivery
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach ensuring quality and precision at every step of the manufacturing process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0.3 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 origin-left"
          />

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 15 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot for desktop */}
                <div className="hidden lg:flex absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rounded-full ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
