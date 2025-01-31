"use client"

import { motion } from "framer-motion"
import { TokenCard } from "./token-card"
import { ActivityChart } from "./activity-chart"

export function SmartMoneyTrackingSection() {
  return (
    <section className="relative z-10 py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              Track Smart Money
              <br />
              <span className="bg-gradient-to-r from-[#00D67D] to-[#00C070] bg-clip-text text-transparent">
                Like Never Before
              </span>
            </h2>
            <ul className="space-y-4 text-lg text-gray-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D67D]"></span>
                Signals on Fresh Wallets transactions
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D67D]"></span>
                Track what smart money is buying
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D67D]"></span>
                Analyze top holders in real-time
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00D67D]"></span>
                Get instant alerts on major moves
              </li>
            </ul>
          </motion.div>

          {/* Right side - Visualizations */}
          <div className="space-y-8">
            <TokenCard />
            <ActivityChart />
          </div>
        </div>
      </div>
    </section>
  )
}

