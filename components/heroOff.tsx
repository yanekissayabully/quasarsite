"use client"

import { motion } from "framer-motion"
import LightPillar from './LightPillar'
import FuzzyText from "./FuzzyText"

export function HeroOff() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-purple-950/30 to-gray-950">
      {/* Фоновые эффекты */}
      <div className="absolute inset-0 z-0">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={0.3}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </div>

      {/* Дополнительные фоновые эффекты */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/80 to-gray-950 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,39,255,0.1)_0%,transparent_70%)] z-10" />
      
      {/* Градиентные пятна */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-5" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl z-5" />

      {/* Контент */}
      <div className="container relative z-20 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">

          <div className="mb-4 md:mb-6 px-2">
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <FuzzyText 
                fontSize="clamp(2.5rem, 10vw, 8rem)"
                fontWeight={900}
                fontFamily="inherit"
                color="#fff"
                enableHover={true}
                baseIntensity={0.12}
                hoverIntensity={0.3}
              >
                Сайт за 2 дня?
              </FuzzyText>
            </motion.div> */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center"
>
  <div className="relative">
    {/* Для десктопов */}
    <div className="hidden md:block">
      <FuzzyText 
        fontSize="clamp(3rem, 10vw, 8rem)"
        fontWeight={900}
        fontFamily="inherit"
        color="#fff"
        enableHover={true}
        baseIntensity={0.12}
        hoverIntensity={0.3}
      >
        Сайт за 2 дня?
      </FuzzyText>
    </div>
    
    {/* Для мобилок с увеличенным размером */}
    <div className="block md:hidden">
      <FuzzyText 
        fontSize="clamp(4rem, 15vw, 8rem)"  // Больше на мобилках
        fontWeight={900}
        fontFamily="inherit"
        color="#fff"
        enableHover={false}  // Можно отключить hover на мобилках
        baseIntensity={0.15}
        hoverIntensity={0.3}
      >
        Сайт за 2 дня?
      </FuzzyText>
    </div>
  </div>
</motion.div>
          </div>

        </div>
      </div>

      {/* Скрываем нижнюю часть LightPillar */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-gray-950 to-transparent z-30" />
      
      {/* Индикатор прокрутки */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1.5 sm:mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}