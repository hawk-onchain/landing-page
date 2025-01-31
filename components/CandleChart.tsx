import type React from "react"
import { useEffect, useRef } from "react"

interface Candle {
  x: number
  height: number
  width: number
  opacity: number
  animationProgress: number
}

const CandleChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 100

    const candles: Candle[] = []
    const maxCandles = 15
    const minSpacing = 20

    const createCandle = () => {
      const availableSpace = canvas.width - candles.length * minSpacing
      if (availableSpace <= 0) return

      let x
      do {
        x = Math.random() * availableSpace + candles.length * minSpacing
      } while (candles.some((candle) => Math.abs(candle.x - x) < minSpacing))

      const height = Math.random() * 60 + 20
      const width = Math.random() * 8 + 4
      candles.push({ x, height, width, opacity: 1, animationProgress: 0 })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (candles.length < maxCandles && Math.random() < 0.05) {
        createCandle()
      }

      candles.forEach((candle, index) => {
        const { x, width, height, opacity, animationProgress } = candle

        const currentHeight = height * Math.min(animationProgress, 1)

        ctx.beginPath()
        ctx.fillStyle = `rgba(0, 214, 125, ${opacity})`

        if (opacity === 1) {
          ctx.fillRect(x + width / 2 - 0.5, canvas.height - height - 10, 1, height + 10)
        }

        ctx.fillRect(x, canvas.height - currentHeight, width, currentHeight)

        candle.animationProgress += 0.03

        if (candle.animationProgress > 1) {
          candle.opacity -= 0.01
        }

        if (candle.opacity <= 0) {
          candles.splice(index, 1)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full" />
}

export default CandleChart

