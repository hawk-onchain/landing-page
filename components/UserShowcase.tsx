"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const users = [
  {
    name: "Darren Lau",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Spq6g2Vh2TKsYbD6hehEo5YTgBLaY9.png",
    role: "Founder of The Daily Ape",
    xLink: "https://x.com/Darrenlautf",
  },
  {
    name: "DCF God",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SXKP6XyQWJxN19LrOKwDxCLz4kQM86.png",
    role: "DCF Cap",
    xLink: "https://x.com/dcfgod",
  },
  {
    name: "icunucmi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VcXSqTKRnsPzeAw4kCpfXEFFjlLho9.png",
    role: "Founder of ARC Community",
    xLink: "https://x.com/icunucmi",
  },
  {
    name: "⟠Palis⟠",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CAQjBZslD775Q0HwJQs0k61HopVLxs.png",
    role: "CT Native Trader",
    xLink: "https://x.com/palis",
  },
  {
    name: "IcoBeast.eth",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KmbKZLIka37hUoIsKglZCuup14M5zW.png",
    role: "CT Native Trader",
    xLink: "https://x.com/beast_ico",
  },
  {
    name: "Corey Wilton",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B4WH8vS4GbLNa49ziS2PwmYI7hEXqJ.png",
    role: "Founder of Mirai Labs",
    xLink: "https://x.com/RealCoreyWilton",
  },
  {
    name: "Kongy.hl,",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-44S20dX9HzLbNYB29tVMTmDhQK6ZJA.png",
    role: "KingKongCapital",
    xLink: "https://x.com/0xKongy",
  },
  {
    name: "Vigil",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R3JaNGNlqnEHJJUk8Wsine1mkUSbMX.png",
    role: "Web3 Legal @ GVRN_AI",
    xLink: "https://x.com/Vigil_eth",
  },
  {
    name: "Jahouiz.eth",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2W79uHIksCv3k7QIkYfjBmPgrWKd9m.png",
    role: "Building @ KuromiFnf",
    xLink: "https://x.com/JiaHo",
  },
]

export function UserShowcase() {
  const handleUserClick = (xLink: string) => {
    window.open(xLink, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />

      <div className="max-w-5xl mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Native <span className="text-[#00D67D]">Traders</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Purchasing Hawk grants access to both the Telegram Bot and Discord community of traders and chads who uses
            Hawk AI to gain an edge in the market!
          </p>
        </div>

        <div className="relative overflow-hidden mx-auto max-w-3xl">
          <div className="flex gap-12 py-8 mb-16 animate-scroll">
            {[...users, ...users].map((user, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="relative w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-[1px] cursor-pointer"
                  onClick={() => handleUserClick(user.xLink)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D67D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image src={user.image || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                  </div>
                </div>

                {/* User Info Tooltip */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all duration-300 z-50">
                  <div className="relative bg-zinc-900/95 backdrop-blur-md rounded-lg px-4 py-2 border border-zinc-800 shadow-xl">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900/95 border-t border-l border-zinc-800 transform -translate-y-1/2 rotate-45" />
                    <p className="text-white font-medium whitespace-nowrap">{user.name}</p>
                    <p className="text-[#00D67D] text-xs">{user.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-30" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-30" />
        </div>
      </div>
    </section>
  )
}

