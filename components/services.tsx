// "use client"

// import { motion } from "framer-motion"
// import { Code, Smartphone, Bot, Palette, Zap, Shield } from "lucide-react"
// import CardSwap, { Card } from './CardSwap'

// export function Services() {
//   return (
//     <section id="services" className="py-12 md:py-16 lg:py-20">
//       <div className="container mx-auto px-4">
//         {/* Заголовок и карточки в одной строке */}
//         <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
          
//           {/* Текстовый блок слева */}
//           <div className="lg:w-1/3 w-full">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="lg:sticky lg:top-24 lg:pt-12"
//             >
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
//                 Наши <span className="text-primary">услуги</span>
//               </h2>
//               <p className="text-sm md:text-base text-gray-500">
//                 Полный цикл разработки - от идеи до запуска и поддержки
//               </p>
//             </motion.div>
//           </div>

//           {/* CardSwap справа */}
//           <div className="lg:w-2/3 w-full relative" style={{ 
//             height: 'clamp(400px, 50vh, 600px)',
//             minHeight: '400px'
//           }}>
//             <CardSwap
//               cardDistance={60}
//               verticalDistance={70}
//               delay={5000}
//               pauseOnHover={true}
//             >
//               {/* Карточка 1 - Сайты */}
//               <Card>
//                 <div 
//                   className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
//                   style={{ backgroundImage: "url('/44.jpg')" }}
//                 >
//                   <div className="absolute inset-0 bg-black/50"></div>
//                   <div className="relative z-10 p-4 md:p-6 text-white h-full flex flex-col justify-end">
//                     <Code className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
//                     <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Сайты</h3>
//                     <p className="text-sm md:text-base">Современные и быстрые веб-сайты</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Карточка 2 - Telegram Apps */}
//               <Card>
//                 <div 
//                   className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
//                   style={{ backgroundImage: "url('/1.png')" }}
//                 >
//                   <div className="absolute inset-0 bg-black/50"></div>
//                   <div className="relative z-10 p-4 md:p-6 text-white h-full flex flex-col justify-end">
//                     <Smartphone className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
//                     <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Telegram Apps</h3>
//                     <p className="text-sm md:text-base">Мини-приложения для Telegram</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Карточка 3 - Боты */}
//               <Card>
//                 <div 
//                   className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
//                   style={{ backgroundImage: "url('/2.jpg')" }}
//                 >
//                   <div className="absolute inset-0 bg-black/50"></div>
//                   <div className="relative z-10 p-4 md:p-6 text-white h-full flex flex-col justify-end">
//                     <Bot className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
//                     <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Telegram боты</h3>
//                     <p className="text-sm md:text-base">Автоматизация бизнес-процессов</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Карточка 4 - Дизайн */}
//               <Card>
//                 <div 
//                   className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
//                   style={{ backgroundImage: "url('/3.jpg')" }}
//                 >
//                   <div className="absolute inset-0 bg-black/50"></div>
//                   <div className="relative z-10 p-4 md:p-6 text-white h-full flex flex-col justify-end">
//                     <Palette className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
//                     <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">UI/UX Дизайн</h3>
//                     <p className="text-sm md:text-base">Красивые и удобные интерфейсы</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Карточка 5 - Оптимизация */}
//               <Card>
//                 <div 
//                   className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
//                   style={{ backgroundImage: "url('/5.jpeg')" }}
//                 >
//                   <div className="absolute inset-0 bg-black/50"></div>
//                   <div className="relative z-10 p-4 md:p-6 text-white h-full flex flex-col justify-end">
//                     <Zap className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
//                     <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Оптимизация</h3>
//                     <p className="text-sm md:text-base">Ускорение и SEO-продвижение</p>
//                   </div>
//                 </div>
//               </Card>

//               {/* Карточка 6 - Поддержка */}
//               <Card>
//                 <div 
//                   className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
//                   style={{ backgroundImage: "url('/4.jpg')" }}
//                 >
//                   <div className="absolute inset-0 bg-black/50"></div>
//                   <div className="relative z-10 p-4 md:p-6 text-white h-full flex flex-col justify-end">
//                     <Shield className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
//                     <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Поддержка</h3>
//                     <p className="text-sm md:text-base">Техническая поддержка проектов</p>
//                   </div>
//                 </div>
//               </Card>

//             </CardSwap>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Bot, Palette, Zap, Shield } from "lucide-react"
import CardSwap, { Card } from './CardSwap'

export function Services() {
  return (
    <section id="possibilities" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Заголовок и карточки в одной строке */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Текстовый блок слева */}
          <div className="lg:w-2/5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                Что мы <span className="text-primary">умеем?</span>
              </h2>
              <p className="text-base md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Полный цикл разработки - от идеи до запуска и поддержки
              </p>
            </motion.div>
          </div>

          {/* CardSwap справа */}
          <div className="lg:w-3/5 w-full flex justify-center">
            <div className="relative w-full flex justify-center" style={{ 
              height: 'min(70vh, 500px)',
              minHeight: '400px',
              maxHeight: '600px'
            }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={true}
              >
                {/* Карточка 1 - Сайты */}
                <Card>
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="/42.jpg" 
                      alt="Сайты" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                      <Code className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">Сайты</h3>
                      <p className="text-sm md:text-base">Современные и быстрые веб-сайты</p>
                    </div>
                  </div>
                </Card>

                {/* Карточка 2 - Telegram Apps */}
                <Card>
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="/mi.jpg" 
                      alt="Telegram Apps" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                      <Smartphone className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">Telegram Apps</h3>
                      <p className="text-sm md:text-base">Мини-приложения для Telegram</p>
                    </div>
                  </div>
                </Card>

                {/* Карточка 3 - Боты */}
                <Card>
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="/bb.jpg" 
                      alt="Telegram bots" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                      <Bot className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">AI Agents</h3>
                      <p className="text-sm md:text-base">Автоматизация бизнес-процессов</p>
                    </div>
                  </div>
                </Card>

                {/* Карточка 4 - Дизайн */}
                <Card>
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="/act.jpg" 
                      alt="UI/UX Design" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                      <Palette className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">UI/UX Design</h3>
                      <p className="text-sm md:text-base">Красивые и удобные интерфейсы</p>
                    </div>
                  </div>
                </Card>

                {/* Карточка 5 - Оптимизация */}
                <Card>
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="/5.jpeg" 
                      alt="SEO Optimization" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                      <Zap className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">SEO</h3>
                      <p className="text-sm md:text-base">Ускорение и SEO-продвижение</p>
                    </div>
                  </div>
                </Card>

                {/* Карточка 6 - Поддержка */}
                <Card>
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src="/41.jpg" 
                      alt="Поддержка" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                      <Shield className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-2">Support</h3>
                      <p className="text-sm md:text-base">Техническая поддержка проектов</p>
                    </div>
                  </div>
                </Card>

              </CardSwap>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}