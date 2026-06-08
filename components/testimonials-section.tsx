"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "AutoTech Industries",
    role: "Quality Manager",
    content: "Sturdy Gauges has been our trusted partner for precision gauges. Their attention to detail and commitment to quality is exceptional. The CMM reports they provide give us complete confidence in our quality processes.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "Aerospace Components Ltd.",
    role: "Production Head",
    content: "We required custom gauges for our aerospace components. Sturdy Gauges delivered exactly what we needed with precise specifications. Their in-house design capability is impressive.",
    rating: 5
  },
  {
    name: "Vikram Patel",
    company: "Heavy Engineering Corp",
    role: "Chief Engineer",
    content: "Working with Sturdy Gauges for over 5 years now. Their carbide gauges are durable and maintain accuracy even after extensive use. Excellent customer support and fast delivery.",
    rating: 5
  },
  {
    name: "Anita Desai",
    company: "Precision Auto Parts",
    role: "Quality Director",
    content: "The special gauges manufactured by Sturdy Gauges have significantly improved our quality control process. Their technical expertise and customer-first approach make them stand out.",
    rating: 5
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-primary dark:bg-primary/30 dark:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70 text-lg">
            Trusted by leading manufacturers across India for precision gauge solutions.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-3xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-foreground mb-6 opacity-80" />
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-foreground" fill="currentColor" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-foreground/60">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                  <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
