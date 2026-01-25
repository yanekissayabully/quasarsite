// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"

// export function Offer() {
//   return (
//     <section id="offer" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
//       {/* Фоновые элементы */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
//       <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>

//       <div className="container relative z-10 mx-auto px-4">
//         {/* Заголовок */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-4xl mx-auto mb-12"
//         >
          
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//               Да, вы всё правильно поняли
//             </span>
//           </h2>
//         </motion.div>

//         {/* Основной контент */}
//         <div className="max-w-3xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10 mb-8"
//           >
//             <div className="prose prose-lg prose-invert max-w-none">
//               <p className="text-xl text-gray-300 mb-6">
//                 Вам не показалось. Мы действительно создаём полноценные сайты всего за <span className="text-purple-400 font-semibold">2 рабочих дня</span> по фиксированной цене в <span className="text-pink-400 font-semibold">40 000 тенге</span>.
//               </p>

//               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
//                 Как это возможно?
//               </h3>
              
//               <p className="text-gray-300 mb-6">
//                 Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес. Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.
//               </p>

//               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
//                 Что входит в эту сумму?
//               </h3>
              
//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
//                   <span className="text-gray-300"><strong>Полностью рабочий сайт</strong> на современной технологии Next.js</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
//                   <span className="text-gray-300"><strong>Адаптивный дизайн</strong> — сайт идеально выглядит на телефонах, планшетах и компьютерах</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
//                   <span className="text-gray-300"><strong>Базовая SEO-оптимизация</strong> для быстрого появления в поиске</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
//                   <span className="text-gray-300"><strong>Контактные формы</strong> для сбора заявок от клиентов</span>
//                 </li>
//               </ul>

//               <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
//                 А подвох где?
//               </h3>
              
//               <p className="text-gray-300 mb-6">
//                 Никакого подвоха. Просто мы оптимизировали процесс до максимума. Мы не делаем уникальный дизайн с нуля для каждого проекта — используем готовые, но стильные шаблоны, которые настраиваем под ваш бренд. Это позволяет нам делать качественные сайты быстро и недорого.
//               </p>

//               <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 my-8">
//                 <p className="text-center text-lg text-gray-300 italic">
//                   "Мы не обещаем золотые горы. Мы делаем работающие сайты, которые приносят клиентов. Быстро и за разумные деньги."
//                 </p>
//               </div>

//               <p className="text-gray-300 mb-8">
//                 Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт "вчера", но бюджет ограничен.
//               </p>
//             </div>
//           </motion.div>

//           {/* Кнопка */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-center"
//           >
//             <Button 
//               size="lg" 
//               className="bg-primary hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto"
//             >
//               Заказать сайт за 40 000 ₸
//               <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Offer() {
  return (
    <section id="offer" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Заголовок с новой анимацией */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Да, вы всё правильно поняли
            </span>
          </h2>
          
          {/* Подчеркивающая линия с анимацией */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"
            style={{ originX: 0 }}
          />
        </motion.div>

        {/* Основной контент */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Первый блок */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Вам не показалось. Мы действительно создаём полноценные сайты всего за{" "}
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block text-purple-400 font-semibold px-1"
              >
                2 рабочих дня
              </motion.span>{" "}
              по фиксированной цене в{" "}
              <motion.span 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="inline-block text-pink-400 font-semibold px-1"
              >
                40 000 тенге
              </motion.span>
              .
            </p>
          </motion.div>

          {/* Заголовок "Как это возможно?" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block">
              Как это возможно?
                      <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"
            style={{ originX: 0 }}
          />
            </h3>
          </motion.div>

          {/* Текст с анимацией появления */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
            className="text-gray-300 leading-relaxed space-y-4"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.
            </motion.p>
          </motion.div>

          {/* Заголовок "Что входит в эту сумму?" */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block">
              Что входит в эту сумму?
                        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"
            style={{ originX: 0 }}
          />
            </h3>
          </motion.div>

          {/* Список с анимацией */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {[
              { text: "Полностью рабочий сайт на современной технологии Next.js", color: "bg-purple-500" },
              { text: "Адаптивный дизайн — сайт идеально выглядит на телефонах, планшетах и компьютерах", color: "bg-pink-500" },
              { text: "Базовая SEO-оптимизация для быстрого появления в поиске", color: "bg-blue-500" },
              { text: "Контактные формы для сбора заявок от клиентов", color: "bg-green-500" }
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 group/item hover:bg-gray-900/20 p-4 rounded-xl transition-colors"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}

                />
                <span className="text-gray-300 group-hover/item:text-white transition-colors">
                  {item.text}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Заголовок "А подвох где?" */}
          <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              А подвох где?
            </h3>
          </motion.div>

          {/* Текст с анимацией волны */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-gray-300 leading-relaxed space-y-4"
          >
            <p>
              Никакого подвоха. Просто мы оптимизировали процесс до максимума. Мы не делаем уникальный дизайн с нуля для каждого проекта — используем готовые, но стильные шаблоны, которые настраиваем под ваш бренд.
            </p>
            <p>
              Это позволяет нам делать качественные сайты быстро и недорого.
            </p>
          </motion.div>

          {/* Цитата с особой анимацией */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-gray-800 my-12">
              <div className="absolute -top-3 -left-3 text-4xl text-purple-500 opacity-50">"</div>
              <div className="absolute -bottom-3 -right-3 text-4xl text-pink-500 opacity-50">"</div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-center text-xl md:text-2xl italic text-gray-300 relative z-10"
              >
                Мы не обещаем золотые горы. Мы делаем работающие сайты, которые приносят клиентов. Быстро и за разумные деньги.
              </motion.p>
            </div>
          </motion.div>

          {/* Последний абзац с анимацией типапечатки */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-gray-300 leading-relaxed"
          >
            <p className="text-lg">
              Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт "вчера", но бюджет ограничен.
            </p>
          </motion.div>

          {/* Кнопка с анимацией пульсации */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1, type: "spring" }}
            className="text-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto shadow-lg shadow-purple-500/25 relative overflow-hidden group"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="relative z-10 flex items-center justify-center"
                >
                  Заказать сайт за 40 000 ₸
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.span>
                
                {/* Эффект свечения */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}