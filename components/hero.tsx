// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"
// import TiltedCard from "./TiltedCard"

// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-left"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
//             >
//               Хотите <span className="text-primary">продающий</span> сайт?
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-12">
//                 Получить бесплатный аудит
//                 <ArrowRight className="ml-2" size={20} />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-lg px-8 h-12 border-primary/30 hover:bg-primary/10 bg-transparent"
//               >
//                 Смотреть кейсы
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Right - TiltedCard */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex items-center justify-center"
//           >
//             <TiltedCard
//               imageSrc="/corporate-website-modern-design-purple.jpg" // Замените на ваш путь к изображению
//               altText="Пример продающего сайта"
//               captionText="Интернет-магазин CosmoStore - +200% к продажам"
//               containerHeight="500px"
//               containerWidth="500px"
//               imageHeight="500px"
//               imageWidth="500px"
//               rotateAmplitude={30}
//               scaleOnHover={1.2}
//               showMobileWarning={false}
//               showTooltip={true}
//               displayOverlayContent={true}
//               overlayContent={
//                 <div className="absolute top-2 bottom left-2 right bg-black/70 backdrop-blur-sm rounded-lg p-4">
//                   <p className="text-white font-semibold text-lg">Интернет-магазин CosmoStore</p>
//                   <p className="text-white/80 text-sm">+200% к продажам после запуска</p>
//                 </div>
//               }
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import { motion } from "framer-motion"
// import TiltedCard from "./TiltedCard"
// import RotatingText from './RotatingText'
// import StarBorder from './StarBorder'

// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-left"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
//             >
//               Хотите{" "}
//               <span className="text-primary inline-block">
//                 <RotatingText
//                   texts={['продающий', 'конверсионный', 'современный', 'эффективный']}
//                   mainClassName="px-3 text-primary overflow-hidden py-1 justify-center rounded-lg"
//                   staggerFrom={"last"}
//                   initial={{ y: "100%" }}
//                   animate={{ y: 0 }}
//                   exit={{ y: "-120%" }}
//                   staggerDuration={0.025}
//                   splitLevelClassName="overflow-hidden pb-1"
//                   transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                   rotationInterval={3000}
//                 />
//               </span>{" "}
//               сайт?
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="flex flex-col sm:flex-row gap-4 items-center"
//             >
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-12">
//                 Получить бесплатный аудит
//                 <ArrowRight className="ml-2" size={20} />
//               </Button>
              
//               <StarBorder
//   as="button"
//   className="custom-class"
//   color="#ff00eeff"
//   speed="5s"
// >
//   Посмотреть кейсы
// </StarBorder>
//             </motion.div>
//           </motion.div>

//           {/* Right - TiltedCard */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="flex items-center justify-center"
//           >
//             <TiltedCard
//               imageSrc="/corporate-website-modern-design-purple.jpg"
//               altText="Пример продающего сайта"
//               captionText="Интернет-магазин CosmoStore - +200% к продажам"
//               containerHeight="500px"
//               containerWidth="500px"
//               imageHeight="500px"
//               imageWidth="500px"
//               rotateAmplitude={30}
//               scaleOnHover={1.2}
//               showMobileWarning={false}
//               showTooltip={true}
//               displayOverlayContent={true}
//               overlayContent={
//                 <div className="absolute top-2 bottom left-2 right bg-black/70 backdrop-blur-sm rounded-lg p-4">
//                   <p className="text-white font-semibold text-xl text-center mb-2">Интернет-магазин CosmoStore</p>
//                   <p className="text-white/80 text-base text-center">+200% к продажам после запуска</p>
//                 </div>
//               }
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import TiltedCard from "./TiltedCard"
import RotatingText from './RotatingText'
import StarBorder from './StarBorder'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 text-balance leading-tight"
            >
              Хотите{" "}
              <span className="text-primary inline-block">
                <RotatingText
                  texts={['продающий', 'конверсионный', 'современный', 'эффективный']}
                  mainClassName="px-2 md:px-3 text-primary overflow-hidden py-1 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </span>{" "}
              сайт?
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto">
                Получить бесплатный аудит
                <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <StarBorder
                as="button"
                className="w-full sm:w-auto"
                color="#ff00eeff"
                speed="5s"
              >
                Посмотреть кейсы
              </StarBorder>
            </motion.div>
          </motion.div>

          {/* Right - TiltedCard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center mt-8 lg:mt-0"
          >
            <TiltedCard
              imageSrc="/corporate-website-modern-design-purple.jpg"
              altText="Пример продающего сайта"
              captionText="Интернет-магазин CosmoStore - +200% к продажам"
              containerHeight="clamp(300px, 60vw, 500px)"
              containerWidth="100%"
              imageHeight="clamp(300px, 60vw, 500px)"
              imageWidth="clamp(300px, 60vw, 500px)"
              rotateAmplitude={30}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              enableGyroscope={true}
              overlayContent={
                <div className="absolute top-2 left-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg p-3 md:p-4">
                  <p className="text-white font-semibold text-base md:text-xl text-center mb-1 md:mb-2">Интернет-магазин CosmoStore</p>
                  <p className="text-white/80 text-sm md:text-base text-center">+200% к продажам после запуска</p>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}