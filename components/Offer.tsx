// "use client"

// import React, { useRef } from 'react'
// import { motion } from 'framer-motion'
// import LaserFlow from './LaserFlow'

// export function HeroOffer() {
//   const containerRef = useRef<HTMLDivElement>(null)

//   const features = [
//     { text: "Полностью адаптивный дизайн", delay: 0.1 },
//     { text: "SEO-оптимизация включена", delay: 0.2 },
//     { text: "Техническая поддержка 30 дней", delay: 0.3 },
//     { text: "Готов к продвижению", delay: 0.4 }
//   ]

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
//       {/* Основной контейнер с лазерной рамкой */}
//       <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
//         {/* Лазерная рамка вокруг контейнера */}
//         <div className="absolute -inset-4 z-0 rounded-3xl overflow-hidden">
//           <LaserFlow
//             wispDensity={1.5}
//             mouseTiltStrength={0} // Убрал слежение за мышкой
//             horizontalBeamOffset={0.1}
//             verticalBeamOffset={0.0}
//             flowSpeed={0.5}
//             verticalSizing={2.5}
//             horizontalSizing={0.8}
//             fogIntensity={0.7}
//             fogScale={0.15}
//             wispSpeed={15}
//             wispIntensity={8}
//             flowStrength={0.4}
//             decay={0.8}
//             falloffStart={0.8}
//             fogFallSpeed={0.3}
//             color="#8B5CF6"
//             className="rounded-3xl"
//           />
//         </div>

//         {/* Контент внутри рамки */}
//         <motion.div
//           ref={containerRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-20 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16"
//         >
//           {/* Бейдж */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
//           >
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             <span className="text-sm font-medium text-white/90">🚀 Сайт за 2 дня</span>
//           </motion.div>

//           {/* Главный заголовок */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center"
//           >
//             <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
//               Сайт
//             </span>
//             {' '}
//             <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
//               за 2 дня
//             </span>
//           </motion.h1>

//           {/* Подзаголовок */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-lg md:text-xl text-white/80 mb-12 text-center max-w-3xl mx-auto leading-relaxed"
//           >
//             Полностью готовый к работе сайт с современным дизайном 
//             и всей необходимой функциональностью. Быстро, качественно, без лишних сложностей.
//           </motion.p>

//           {/* Особенности */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.text}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: feature.delay, duration: 0.5 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30"
//               >
//                 <div className="text-white/90 font-medium text-sm">
//                   {feature.text}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA кнопки */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl shadow-purple-500/25 transition-all duration-300 border border-purple-500/30"
//             >
//               🚀 Заказать сайт
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:border-white/30"
//             >
//               📞 Бесплатная консультация
//             </motion.button>
//           </motion.div>

//           {/* Дополнительная информация */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1, duration: 0.8 }}
//             className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm"
//           >
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full" />
//               Без предоплаты
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-400 rounded-full" />
//               Техническая документация
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-purple-400 rounded-full" />
//               Помощь с хостингом
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Фоновый градиент */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-purple-950/30 to-slate-900/50 z-0" />
//     </section>
//   )
// }



"use client"
import LaserFlow from './LaserFlow';
import { useRef } from 'react';
import FuzzyText from './FuzzyText';

// Image Example Interactive Reveal Effect
export function HeroOffer() {
  const revealImgRef = useRef(null);

  return (
    <div 
      style={{ 
        height: '800px', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#060010'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '86%',
        height: '60%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #FF79C6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6
      }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <FuzzyText 
            baseIntensity={0.2} 
            hoverIntensity={0.5} 
            enableHover={true}
            fontSize="clamp(2.5rem, 6vw, 5rem)"
            fontWeight={900}
            color="#FF79C6"
          >
            САЙТ ЗА 2 ДНЯ ?
          </FuzzyText>
        </div>
      </div>

      <img
        ref={revealImgRef}
        src="/booking-service-app-interface.jpg"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'soft-light',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255, 8, 230, 1) 0px, rgba(255, 0, 170, 0.95) 60px, rgba(230, 0, 255, 0.6) 120px, rgba(181, 0, 242, 0.25) 180px, rgba(245, 0, 0, 0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(235, 36, 149, 1) 0px, rgba(238, 10, 177, 0.95) 60px, rgba(172, 4, 238, 0.6) 120px, rgba(197, 7, 245, 0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}