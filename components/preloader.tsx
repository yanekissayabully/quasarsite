// "use client"

// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

// export function Preloader() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(timer)
//           setTimeout(() => setIsLoading(false), 500)
//           return 100
//         }
//         return prev + 2
//       })
//     }, 30)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="fixed inset-0 z-60 flex items-center justify-center bg-background"
//         >
//           <div className="relative">
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "easeInOut",
//               }}
//               className="h-24 w-24 rounded-2xl border-4 border-primary/30"
//             />
//             <motion.div
//               animate={{
//                 scale: [1.2, 1, 1.2],
//                 rotate: [360, 180, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "easeInOut",
//               }}
//               className="absolute inset-0 h-24 w-24 rounded-2xl border-4 border-accent/30"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span className="text-2xl font-bold text-primary">{progress}%</span>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }






"use client"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const offscreenCanvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const Cw = canvas.width
    const Ch = canvas.height

    // Create offscreen canvas
    const offscreen = document.createElement("canvas")
    offscreenCanvasRef.current = offscreen
    const offCtx = offscreen.getContext("2d")
    if (!offCtx) return
    offscreen.width = 400
    offscreen.height = 400
    const cw = 400
    const ch = 400
    const cx = cw / 2
    const cy = ch / 2

    const rad = Math.PI / 180
    const Rx = 150
    const Ry = 150
    const kx = 3
    const ky = 4
    const petals = 7

    offCtx.strokeStyle = "#8800ffff"
    offCtx.globalAlpha = 0.5
    offCtx.lineWidth = 0.25

    ctx.translate(Cw / 2, Ch / 2)
    ctx.scale(0.75, 0.75)

    function draw() {
      if (!ctx || !offCtx) return
      
      frameRef.current += 0.3
      ctx.clearRect(-Cw, -Ch, 2 * Cw, 2 * Ch)
      
      const t = frameRef.current * rad
      const rx = Rx * Math.abs(Math.cos(t)) + 50
      const ry = Ry * Math.abs(Math.sin(t)) + 50

      const x = cx + rx * Math.sin(kx * t + Math.PI / 2)
      const y = cy + ry * Math.sin(ky * t + Math.PI / 2)

      const x1 = cx + rx * Math.sin(kx * t + Math.PI)
      const y1 = cy - ry * Math.sin(ky * t + Math.PI)

      const x2 = cx + rx * Math.sin(kx * t)
      const y2 = cy - ry * Math.sin(ky * t)

      offCtx.beginPath()
      offCtx.moveTo(x, y)
      offCtx.quadraticCurveTo(x1, y1, x2, y2)
      offCtx.stroke()
      offCtx.globalCompositeOperation = "lighter"

      for (let i = 0; i < petals; i++) {
        ctx.globalCompositeOperation = "source-over"
        ctx.drawImage(offscreen, -200, -400)
        ctx.rotate(2 * Math.PI / petals)
      }

      animationIdRef.current = requestAnimationFrame(draw)
    }

    draw()

    // Stop animation after 30 seconds
    const timer = setTimeout(() => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      setIsLoading(false)
    }, 30000)

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.scale(0.75, 0.75)
    }

    window.addEventListener("resize", handleResize)

    // Handle click to restart
    const handleClick = () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      setIsLoading(false)
    }

    canvas.addEventListener("click", handleClick)

    // Handle keyboard press
    const handleKeyPress = () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      setIsLoading(false)
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("click", handleClick)
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "black" }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-pointer"
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm animate-pulse">
            Нажмите любую клавишу что бы продолжить
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}