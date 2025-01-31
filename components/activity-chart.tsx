"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const generateData = () =>
  days.map((name) => ({
    name,
    value: Math.random() * 100,
    type: Math.random() > 0.5 ? "up" : "down",
  }))

export function ActivityChart() {
  const [data, setData] = useState(generateData)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setData(generateData())
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl p-6 pb-14 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#00D67D]/20 before:to-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="relative h-[200px] flex items-end justify-between">
        <AnimatePresence>
          {data.map((entry) => (
            <div key={entry.name} className="relative flex-1 h-full mx-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${entry.value}%` }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className={`absolute bottom-0 w-full rounded-lg ${
                  entry.type === "up"
                    ? "bg-gradient-to-t from-[#00D67D] to-[#00C070] shadow-[0_0_20px_rgba(0,214,125,0.2)]"
                    : "bg-gradient-to-t from-red-500 to-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                }`}
              />
              <div className="absolute bottom-[-45px] w-full text-center text-sm text-white/80 text-shadow-sm">
                {entry.name}
              </div>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

