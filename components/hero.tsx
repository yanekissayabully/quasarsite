// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Code2, Bot, Smartphone } from "lucide-react"
// import { motion } from "framer-motion"

// export function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Animated Background Elements */}
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
//         <div className="max-w-5xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
//           >
//             Инновационные цифровые решения
//           </motion.div>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-5xl md:text-7xl font-bold mb-6 text-balance"
//           >
//             Создаём <span className="text-primary">цифровые продукты</span> будущего
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance"
//           >
//             Разработка сайтов, Telegram Mini Apps и ботов с использованием современных технологий. Превращаем ваши идеи
//             в реальность.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//           >
//             <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
//               Обсудить проект
//               <ArrowRight className="ml-2" size={20} />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 border-primary/30 hover:bg-primary/10 bg-transparent"
//             >
//               Наши работы
//             </Button>
//           </motion.div>

//           {/* Feature Icons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
//           >
//             {[
//               { icon: Code2, title: "Веб-разработка", desc: "Современные сайты и приложения" },
//               { icon: Smartphone, title: "Telegram Mini Apps", desc: "Мини-приложения для Telegram" },
//               { icon: Bot, title: "Боты", desc: "Автоматизация бизнес-процессов" },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
//                 className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
//               >
//                 <item.icon className="w-12 h-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
//                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.desc}</p>
//               </motion.div>
//             ))}
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
            >
              Хотите <span className="text-primary">продающий сайт</span>?
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl text-balance leading-relaxed"
            >
              Создаём современные сайты, которые не просто красивы, а реально приносят заявки и увеличивают продажи вашего бизнеса
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 h-12">
                Получить бесплатный аудит
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-12 border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                Смотреть кейсы
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - TiltedCard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <TiltedCard
              imageSrc="/corporate-website-modern-design-purple.jpg" // Замените на ваш путь к изображению
              altText="Пример продающего сайта"
              captionText="Интернет-магазин CosmoStore - +200% к продажам"
              containerHeight="500px"
              containerWidth="500px"
              imageHeight="500px"
              imageWidth="500px"
              rotateAmplitude={30}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute top-2 bottom left-2 right bg-black/70 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white font-semibold text-lg">Интернет-магазин CosmoStore</p>
                  <p className="text-white/80 text-sm">+200% к продажам после запуска</p>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}