"use client"
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

const users = [
  {
    name: "Darren Lau",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Spq6g2Vh2TKsYbD6hehEo5YTgBLaY9.png",
    role: "The Daily Ape",
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
    role: "Founder of ARC",
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
    name: "ICEDMILO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-91ifTrLWWeEM9Q0HRAJzRbDR51l0uX.png",
    role: "CT Native Trader",
    xLink: "https://x.com/0xIcedMilo",
  },
  {
    name: "Carisne",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9MjPOkxFRD9Db4O7aYg1KwyEQANBJA.png",
    role: "CMO @ Inferno Labs",
    xLink: "https://x.com/carisneeth",
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
    role: "Building @ GVRN_AI",
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
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Native <span className="text-[#00D67D]">Traders</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Purchasing Hawk grants access to both the Telegram Bot and Discord community of traders and chads who uses
            Hawk AI to gain an edge in the market!
          </p>
        </div>

        <div className="relative overflow-hidden mx-auto" style={{ maxWidth: "calc(100% - 48px)" }}>
          <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-black before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-black after:to-transparent after:content-['']">
            <motion.div
              className="flex flex-none gap-12 pr-12"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* First set of users */}
              {users.map((user, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-24 sm:w-32"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={user.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-[1px] block mb-2 mx-auto group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D67D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image src={user.image || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                    </div>
                  </a>
                  <div className="text-center">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">{user.name}</p>
                    <p className="text-[#00D67D] text-xs mt-1 truncate">{user.role}</p>
                  </div>
                </motion.div>
              ))}
              {/* Second set - exact duplicate */}
              {users.map((user, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-24 sm:w-32"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={user.xLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-[1px] block mb-2 mx-auto group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D67D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image src={user.image || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                    </div>
                  </a>
                  <div className="text-center">
                    <p className="text-white text-xs sm:text-sm font-medium truncate">{user.name}</p>
                    <p className="text-[#00D67D] text-xs mt-1 truncate">{user.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}