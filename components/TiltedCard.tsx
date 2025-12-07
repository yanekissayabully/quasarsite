// "use client"

// import type { SpringOptions } from 'framer-motion'
// import { useRef, useState } from 'react'
// import { motion, useMotionValue, useSpring } from 'framer-motion'

// interface TiltedCardProps {
//   imageSrc: string
//   altText?: string
//   captionText?: string
//   containerHeight?: string
//   containerWidth?: string
//   imageHeight?: string
//   imageWidth?: string
//   scaleOnHover?: number
//   rotateAmplitude?: number
//   showMobileWarning?: boolean
//   showTooltip?: boolean
//   overlayContent?: React.ReactNode
//   displayOverlayContent?: boolean
// }

// const springValues: SpringOptions = {
//   damping: 30,
//   stiffness: 100,
//   mass: 2
// }

// export default function TiltedCard({
//   imageSrc,
//   altText = 'Tilted card image',
//   captionText = '',
//   containerHeight = '300px',
//   containerWidth = '100%',
//   imageHeight = '300px',
//   imageWidth = '300px',
//   scaleOnHover = 1.1,
//   rotateAmplitude = 14,
//   showMobileWarning = true,
//   showTooltip = true,
//   overlayContent = null,
//   displayOverlayContent = false
// }: TiltedCardProps) {
//   const ref = useRef<HTMLElement>(null)
//   const x = useMotionValue(0)
//   const y = useMotionValue(0)
//   const rotateX = useSpring(useMotionValue(0), springValues)
//   const rotateY = useSpring(useMotionValue(0), springValues)
//   const scale = useSpring(1, springValues)
//   const opacity = useSpring(0)
//   const rotateFigcaption = useSpring(0, {
//     stiffness: 350,
//     damping: 30,
//     mass: 1
//   })

//   const [lastY, setLastY] = useState(0)

//   function handleMouse(e: React.MouseEvent<HTMLElement>) {
//     if (!ref.current) return

//     const rect = ref.current.getBoundingClientRect()
//     const offsetX = e.clientX - rect.left - rect.width / 2
//     const offsetY = e.clientY - rect.top - rect.height / 2

//     const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
//     const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

//     rotateX.set(rotationX)
//     rotateY.set(rotationY)

//     x.set(e.clientX - rect.left)
//     y.set(e.clientY - rect.top)

//     const velocityY = offsetY - lastY
//     rotateFigcaption.set(-velocityY * 0.6)
//     setLastY(offsetY)
//   }

//   function handleMouseEnter() {
//     scale.set(scaleOnHover)
//     opacity.set(1)
//   }

//   function handleMouseLeave() {
//     opacity.set(0)
//     scale.set(1)
//     rotateX.set(0)
//     rotateY.set(0)
//     rotateFigcaption.set(0)
//   }

//   return (
//     <figure
//       ref={ref}
//       className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
//       style={{
//         height: containerHeight,
//         width: containerWidth
//       }}
//       onMouseMove={handleMouse}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {showMobileWarning && (
//         <div className="absolute top-4 text-center text-sm block sm:hidden">
//           This effect is not optimized for mobile. Check on desktop.
//         </div>
//       )}

//       <motion.div
//         className="relative [transform-style:preserve-3d]"
//         style={{
//           width: imageWidth,
//           height: imageHeight,
//           rotateX,
//           rotateY,
//           scale
//         }}
//       >
//         <motion.img
//           src={imageSrc}
//           alt={altText}
//           className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)] shadow-2xl"
//           style={{
//             width: imageWidth,
//             height: imageHeight
//           }}
//         />

//         {displayOverlayContent && overlayContent && (
//           <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
//             {overlayContent}
//           </motion.div>
//         )}
//       </motion.div>

//       {showTooltip && (
//         <motion.figcaption
//           className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
//           style={{
//             x,
//             y,
//             opacity,
//             rotate: rotateFigcaption
//           }}
//         >
//           {captionText}
//         </motion.figcaption>
//       )}
//     </figure>
//   )
// }


"use client"

import type { SpringOptions } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface TiltedCardProps {
  imageSrc: string
  altText?: string
  captionText?: string
  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  scaleOnHover?: number
  rotateAmplitude?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  overlayContent?: React.ReactNode
  displayOverlayContent?: boolean
  enableGyroscope?: boolean
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
}

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
  enableGyroscope = true
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  })

  const [lastY, setLastY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isGyroActive, setIsGyroActive] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!enableGyroscope || !isMobile) return

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta === null || event.gamma === null) return
      
      setIsGyroActive(true)

      // beta: front-to-back tilt (-180 to 180)
      // gamma: left-to-right tilt (-90 to 90)
      
      const beta = event.beta || 0
      const gamma = event.gamma || 0

      // Normalize values
      const normalizedBeta = Math.max(-45, Math.min(45, beta))
      const normalizedGamma = Math.max(-45, Math.min(45, gamma))

      // Map to rotation values
      const rotationX = (normalizedBeta / 45) * rotateAmplitude * 0.8
      const rotationY = (normalizedGamma / 45) * rotateAmplitude * 0.8

      rotateX.set(-rotationX)
      rotateY.set(rotationY)
    }

    const requestPermission = async () => {
      // For iOS 13+ devices
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission()
          if (permission === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          }
        } catch (error) {
          console.error('Error requesting device orientation permission:', error)
        }
      } else {
        // For non-iOS devices
        window.addEventListener('deviceorientation', handleOrientation)
      }
    }

    // Auto-request on mobile
    if (isMobile) {
      requestPermission()
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [enableGyroscope, isMobile, rotateX, rotateY, rotateAmplitude])

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current || isMobile) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    rotateFigcaption.set(-velocityY * 0.6)
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    if (isMobile) return
    scale.set(scaleOnHover)
    opacity.set(1)
  }

  function handleMouseLeave() {
    if (isMobile) return
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  const handleTouch = () => {
    if (!isMobile) return
    
    // Small scale effect on touch
    scale.set(1.05)
    setTimeout(() => scale.set(1), 200)
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      {showMobileWarning && !isGyroActive && isMobile && (
        <div className="absolute top-4 text-center text-xs px-4 text-white/70 z-10">
          Наклоните устройство для 3D эффекта
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[12px] md:rounded-[15px] will-change-transform [transform:translateZ(0)] shadow-2xl"
          style={{
            width: imageWidth,
            height: imageHeight
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)] w-full">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3]"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  )
}