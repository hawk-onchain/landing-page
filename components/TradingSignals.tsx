"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Wallet,
  TrendingUp,
  Coins,
  History,
  BarChartIcon as ChartBar,
  Zap,
  Repeat,
  Users,
  Star,
  ArrowDownCircle,
  FishIcon as Shark,
  Twitter,
} from "lucide-react"

const signals = [
  {
    title: "Fresh Wallets History",
    description: "New wallets accumulation of new or old tokens",
    icon: Wallet,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Profitable Traders",
    description: "Analyze trading activity of wallets with high PnL on Pump.Fun",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Whales Tracking",
    description: "Wallets with high SOL balance purchasing in size",
    icon: Coins,
    color: "from-yellow-500 to-amber-400",
  },
  {
    title: "New Accumulation",
    description: "Wallets with high SOL balance accumulating new token in last hour",
    icon: History,
    color: "from-purple-500 to-fuchsia-400",
  },
  {
    title: "Sharks Tracking",
    description: "Mid-cap top holders purchasing new tokens",
    icon: Shark,
    color: "from-indigo-500 to-blue-400",
  },
  {
    title: "Whale dumping",
    description: "Whale sells significant amount of a token within a short timespan",
    icon: ArrowDownCircle,
    color: "from-red-500 to-rose-400",
  },
  {
    title: "Unusual Volume Spikes",
    description: "Last hour trading volume spiking daily average volume",
    icon: ChartBar,
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Rapid Price Movement",
    description: "Helps track significants token price changes in a short interval",
    icon: Zap,
    color: "from-yellow-500 to-lime-400",
  },
  {
    title: "DCA Signals",
    description: "Same address repeatedly buys the same token in increments for a certain period",
    icon: Repeat,
    color: "from-teal-500 to-emerald-400",
  },
  {
    title: "Cabal Signal",
    description: "Top holders of two tokens accumulating the same new token at similar timeframes",
    icon: Users,
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "KOL Signal",
    description: "Tracks transactions of various high profile KOL wallets",
    icon: Star,
    color: "from-violet-500 to-purple-400",
  },
  {
    title: "CT Tracking",
    description: "Tracks tweets from high profile accounts that can trigger price movements",
    icon: Twitter,
    color: "from-sky-500 to-blue-400",
  },
]

export default function TradingSignals() {
  return (
    <section className="relative py-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#00D67D] text-[#00D67D] px-4 py-1 text-sm font-semibold">
            Trading Signals
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Signal Types for <span className="text-[#00D67D]">Better Trading</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Hawk AI processes millions of data points to generate precise trading signals, giving you the edge in the
            market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 hover:border-[#00D67D] transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-6 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${signal.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${signal.color}`}>
                    <signal.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#00D67D] transition-colors duration-300">
                      {signal.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{signal.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

