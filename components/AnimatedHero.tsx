"use client"
import { Button } from "@/components/ui/button"
import { FileText, MessageCircle } from "lucide-react"
import CandleChart from "./CandleChart"
import TradingSignals from "./TradingSignals"
import { SmartMoneyTrackingSection } from "./SmartMoneyTrackingSection"
import { CTASection } from "./CTASection"

export default function AnimatedHero() {
  return (
    <>
      <div className="bg-gradient-to-b from-black via-green-950/30 to-black">
        <div className="relative min-h-screen bg-gradient-to-br from-black to-green-900 overflow-hidden">
          {/* Background animations remain unchanged */}
          <div className="absolute inset-0">
            <div className="animate-pulse-slow absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="animate-pulse-slower absolute top-1/2 right-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          </div>
          <header className="relative z-10 flex justify-center items-center p-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hawk%20Green%20H%20White%20AWK-4g17HxHPcNNUwG9zBZCVlFvaF14Kd0.png"
              alt="Hawk Logo"
              className="h-40 w-auto"
            />
          </header>
          <main className="relative z-10 flex flex-col items-center justify-center px-12 py-8 md:py-16">
            <div className="max-w-3xl text-center mb-8 md:mb-16">
              <h1 className="text-7xl font-bold text-white mb-6">
                <span className="md:hidden">Top-tier Trading Tool</span>
                <span className="hidden md:block">AI Copilot for Crypto</span>
              </h1>
              <p className="text-xl text-white mb-8">
                But, like none others. Enter real-time signals, fresh data and a beautiful UX.
              </p>
              <div className="flex flex-wrap justify-center w-full gap-4">
                <Button
                  onClick={() => window.open("https://t.me/hawkonchain_bot", "_blank")}
                  className="bg-gradient-to-r from-[#00D67D] to-[#00C070] text-black hover:from-[#00C070] hover:to-[#00D67D] rounded-full px-6 py-3 flex items-center justify-center w-48 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#00D67D]/20 group"
                >
                  <span className="absolute inset-0 w-full h-full rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
                  <span className="relative flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2 group-hover:animate-ping"></span>
                    <span className="text-sm font-semibold">Start Tracking</span>
                  </span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://discord.gg/kP7sytrwhw", "_blank")}
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black rounded-full px-6 py-3 flex items-center justify-center w-48 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
                >
                  <span className="relative flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    <span className="text-sm font-semibold">Join Discord</span>
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:space-x-8 px-4 md:px-0">
              {[
                {
                  title: "Docs",
                  icon: FileText,
                  color: "from-blue-400 to-blue-600",
                  href: "https://docs.hawkterminal.xyz/",
                },
                {
                  title: "Telegram",
                  icon: MessageCircle,
                  color: "from-cyan-400 to-cyan-600",
                  href: "https://t.me/hawkonchain_bot",
                },
              ].map(({ title, icon: Icon, color, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-black to-gray-900 rounded-lg w-full md:w-64 flex justify-between items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden relative
                  py-3 px-4 md:py-6 md:px-6" // Adjusted padding for mobile
                >
                  <h3 className="text-white text-base md:text-lg font-semibold z-10">{title}</h3>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out`}
                  ></div>
                  <div className="bg-[#00D67D] rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white z-10">
                    <Icon className="text-black w-4 h-4 md:w-6 md:h-6 group-hover:text-[#00D67D] transition-colors duration-300 ease-in-out" />
                  </div>
                </a>
              ))}
            </div>
          </main>
          <CandleChart />
        </div>
        <div className="bg-gradient-to-b from-green-950/20 via-black/95 to-black">
          <SmartMoneyTrackingSection />
          <TradingSignals />
          <CTASection />
        </div>
      </div>
    </>
  )
}

