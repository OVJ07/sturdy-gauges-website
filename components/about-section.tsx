"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Cog, Building2, Wrench } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Precision Manufacturing",
    description: "State-of-the-art machinery ensuring accuracy to micron levels"
  },
  {
    icon: Cog,
    title: "In-house Design",
    description: "Strong 2D/3D CAD capabilities for custom gauge solutions"
  },
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Serving Automotive, Aerospace, Defence, Agriculture & Engineering"
  },
  {
    icon: Wrench,
    title: "Quality Assurance",
    description: "Third-party CMM reports and modern inspection methods"
  }
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-background blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Manufacturer of Real Carbide Limit Gauges
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Established in 2011, Sturdy Gauges has been at the forefront of precision gauge manufacturing. 
              We specialize in creating high-quality Carbide Limit Gauges and Special Gauges that meet the 
              most demanding industrial requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With strong 2D/3D in-house design capabilities, we deliver custom solutions for industries 
              including Automotive, Aerospace, Defence, Agriculture, and Heavy Engineering. Our commitment 
              to quality and precision has made us a trusted partner for manufacturers worldwide.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary/5 border border-border rounded-2xl p-8 aspect-square flex items-center justify-center industrial-glow">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                      <Target className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Precision Tools</p>
                  </div>
                </div>
                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 aspect-video flex items-center justify-center cyan-glow">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-accent">ISO</p>
                    <p className="text-sm text-muted-foreground">9001:2015</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary/10 border border-border rounded-2xl p-6 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">Since</p>
                    <p className="text-5xl font-bold text-primary">2011</p>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                      <Cog className="w-10 h-10 text-accent" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Custom Solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
