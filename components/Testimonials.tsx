"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
  username: string
  token: string
  pnl: string
  percentage: string
  profilePic: string
  xUsername: string
  testimonialText: string
}

const testimonials: Testimonial[] = [
  {
    username: "Snafu",
    token: "$jellyjelly",
    pnl: "+$23,000",
    percentage: "+1,090%",
    profilePic: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zUG2BEdmT7JimFZ5JrwA1v2gNWxOPQ.png",
    xUsername: "@snafudefi",
    testimonialText: "Sold too early and faded generational wealth. NGMI.",
  },
  {
    username: "Carisne",
    token: "$potato",
    pnl: "+$1,560",
    percentage: "+749%",
    profilePic: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rREKAZmkwHVgAT5oo8KiJigzPnGZr8.png",
    xUsername: "@carisneeth",
    testimonialText: "First day of subscription and cooked. Hawk FTW!",
  },
  {
    username: "KidBuuJourney",
    token: "$MLG",
    pnl: "+$1,125",
    percentage: "+869%",
    profilePic: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t7UPeLtqqwCNtyuAa1EqK28o5I5RRB.png",
    xUsername: "@BuuJourney",
    testimonialText: "I love the fresh wallet signals, lots of info. Made it back today!",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-16 sm:py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-12">
          Profitable <span className="text-[#00D67D]">Trades</span> by Our Users
        </h2>
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-sm sm:max-w-2xl h-[280px] sm:h-[400px]">
            <AnimatePresence initial={false}>
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + testimonials.length) % testimonials.length
                const testimonial = testimonials[index]
                return (
                  <motion.div
                    key={index}
                    className={`absolute top-0 w-full ${
                      offset === 0 ? "z-20" : offset === -1 ? "z-10 left-[-50px]" : "z-10 left-[50px]"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: offset === 0 ? 1 : 0.7,
                      scale: offset === 0 ? 1 : 0.9,
                      x: offset * 50,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-4 sm:p-6 rounded-xl shadow-lg border border-zinc-700 hover:border-[#00D67D] transition-all duration-300 hover:shadow-[#00D67D]/20 hover:shadow-lg">
                      <div className="space-y-2 sm:space-y-4">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold text-base sm:text-lg">{testimonial.username}</span>
                          <span className="text-[#00D67D] font-bold text-base sm:text-lg">{testimonial.token}</span>
                        </div>

                        {/* PnL and Percentage */}
                        <div>
                          <div className="text-3xl sm:text-5xl font-bold text-white leading-none mb-1">
                            {testimonial.pnl}
                          </div>
                          <div className="text-[#00D67D] text-xl sm:text-2xl font-semibold leading-none">
                            {testimonial.percentage}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="text-zinc-400 text-sm sm:text-base py-2">{testimonial.testimonialText}</div>

                        {/* Profile */}
                        <div className="flex items-center gap-3 pt-1">
                          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#00D67D] flex-shrink-0">
                            <Image
                              src={testimonial.profilePic || "/placeholder.svg"}
                              alt={testimonial.username}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <span className="text-zinc-400 text-sm">{testimonial.xUsername}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#00D67D] transition-colors"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#00D67D] transition-colors"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#00D67D] transition-colors hidden sm:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:text-[#00D67D] transition-colors hidden sm:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}

