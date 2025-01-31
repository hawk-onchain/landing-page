"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Token {
  name: string
  image: string
  trend: "up" | "down"
}

const tokens: Token[] = [
  {
    name: "$PNUT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xvYmnGR5l73FxQwUI3Gkfcgz4iomrQ.png",
    trend: "up",
  },
  {
    name: "$AIXBT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uhAGcUF2m8vO3UhmaE81Qd0K2cFkVw.png",
    trend: "down",
  },
  {
    name: "$ELIZA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PnLkz1RHqvirJ0LCCgAFQhzoBcNpIY.png",
    trend: "up",
  },
]

export function TokenCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % tokens.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentToken = tokens[currentIndex]

  return (
    <div className="relative h-[100px] overflow-hidden rounded-2xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00D67D]/20 before:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentToken.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative h-full p-4"
        >
          <div className="flex items-center gap-3 pt-1.5">
            <div className="relative w-8 h-8 rounded-full shadow-lg ring-1 ring-white/10">
              <Image
                src={currentToken.image || "/placeholder.svg"}
                alt={currentToken.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-white">{currentToken.name}</span>
              <div
                className={`h-1 w-16 mt-1 rounded-full ${
                  currentToken.trend === "up"
                    ? "bg-gradient-to-r from-[#00D67D] to-[#00C070] shadow-[0_0_10px_rgba(0,214,125,0.3)]"
                    : "bg-gradient-to-r from-red-500 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.3)]"
                }`}
              />
            </div>
          </div>
          <div className="mt-2 text-sm text-white/70">Net Flow</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

