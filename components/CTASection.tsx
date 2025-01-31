"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Circle } from "lucide-react"

export function CTASection() {
  return (
    <div className="bg-transparent w-full -mb-1">
      <section className="relative z-10 pt-16 md:pt-24 min-h-[50vh]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D67D] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
              Ready to Level Up Your <span className="text-[#00D67D]">Trading</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join thousands of traders who trust Hawk for their on-chain analytics needs.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => window.open("https://t.me/hawkonchain_bot", "_blank")}
                className="bg-[#00D67D] text-black hover:bg-[#00C070] rounded-full px-8 py-6 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,214,125,0.3)]"
              >
                <Circle className="w-2 h-2 fill-current mr-2" />
                <span className="text-base font-semibold">Start Scanning</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

