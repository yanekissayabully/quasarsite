// // "use client"

// // import { motion } from "framer-motion"
// // import { Button } from "@/components/ui/button"
// // import { ArrowRight } from "lucide-react"

// // export function Offer() {
// //   return (
// //     <section id="offer" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
// //       {/* Фоновые элементы */}
// //       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
// //       <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
// //       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>

// //       <div className="container relative z-10 mx-auto px-4">
// //         {/* Заголовок с новой анимацией */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
// //           className="text-center max-w-4xl mx-auto mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
// //             <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
// //               Да, вы всё правильно поняли
// //             </span>
// //           </h2>
          
// //           {/* Подчеркивающая линия с анимацией */}
// //           <motion.div
// //             initial={{ scaleX: 0 }}
// //             whileInView={{ scaleX: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
// //             className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"
// //             style={{ originX: 0 }}
// //           />
// //         </motion.div>

// //         {/* Основной контент */}
// //         <div className="max-w-3xl mx-auto space-y-8">
// //           {/* Первый блок */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true, margin: "-50px" }}
// //             transition={{ duration: 0.7, delay: 0.1 }}
// //             className="group"
// //           >
// //             <p className="text-xl text-gray-300 leading-relaxed">
// //               Вам не показалось. Мы действительно создаём полноценные лендинги всего за{" "}
// //               <motion.span 
// //                 initial={{ scale: 0.8, opacity: 0 }}
// //                 whileInView={{ scale: 1, opacity: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 0.3, type: "spring" }}
// //                 className="inline-block text-purple-400 font-semibold px-1"
// //               >
// //                 2 рабочих дня
// //               </motion.span>{" "}
// //               по фиксированной цене в{" "}
// //               <motion.span 
// //                 initial={{ scale: 0.8, opacity: 0 }}
// //                 whileInView={{ scale: 1, opacity: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: 0.4, type: "spring" }}
// //                 className="inline-block text-pink-400 font-semibold px-1"
// //               >
// //                 100 000 тенге
// //               </motion.span>
// //               .
// //             </p>
// //           </motion.div>

// //           {/* Заголовок "Как это возможно?" */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //           >
// //             <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block">
// //               Как это возможно?
// //                       <motion.div
// //             initial={{ scaleX: 0 }}
// //             whileInView={{ scaleX: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
// //             className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"
// //             style={{ originX: 0 }}
// //           />
// //             </h3>
// //           </motion.div>

// //           {/* Текст с анимацией появления */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: 0.3, staggerChildren: 0.1 }}
// //             className="text-gray-300 leading-relaxed space-y-4"
// //           >
// //             <motion.p
// //               variants={{
// //                 hidden: { opacity: 0, y: 20 },
// //                 visible: { opacity: 1, y: 0 }
// //               }}
// //             >
// //               Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес.
// //             </motion.p>
// //             <motion.p
// //               variants={{
// //                 hidden: { opacity: 0, y: 20 },
// //                 visible: { opacity: 1, y: 0 }
// //               }}
// //             >
// //               Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.
// //             </motion.p>
// //           </motion.div>

// //           {/* Заголовок "Что входит в эту сумму?" */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5, delay: 0.4 }}
// //           >
// //             <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative inline-block">
// //               Что входит в эту сумму?
// //                         <motion.div
// //             initial={{ scaleX: 0 }}
// //             whileInView={{ scaleX: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
// //             className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-md mx-auto"
// //             style={{ originX: 0 }}
// //           />
// //             </h3>
// //           </motion.div>

// //           {/* Список с анимацией */}
// //           <motion.ul 
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: 0.5 }}
// //             className="space-y-6"
// //           >
// //             {[
// //               { text: "Полностью рабочий сайт на современной технологии Next.js", color: "bg-purple-500" },
// //               { text: "Адаптивный дизайн — сайт идеально выглядит на телефонах, планшетах и компьютерах", color: "bg-pink-500" },
// //               { text: "Базовая SEO-оптимизация для быстрого появления в поиске", color: "bg-blue-500" },
// //               { text: "Контактные формы для сбора заявок от клиентов", color: "bg-green-500" }
// //             ].map((item, index) => (
// //               <motion.li
// //                 key={index}
// //                 initial={{ opacity: 0, x: -20 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
// //                 className="flex items-start gap-4 group/item hover:bg-gray-900/20 p-4 rounded-xl transition-colors"
// //               >
// //                 <motion.div
// //                   initial={{ scale: 0, rotate: -180 }}
// //                   whileInView={{ scale: 1, rotate: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: 0.6 + index * 0.1, type: "spring" }}

// //                 />
// //                 <span className="text-gray-300 group-hover/item:text-white transition-colors">
// //                   {item.text}
// //                 </span>
// //               </motion.li>
// //             ))}
// //           </motion.ul>

// //           {/* Последний абзац с анимацией типапечатки */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 1, delay: 0.9 }}
// //             className="text-gray-300 leading-relaxed"
// //           >
// //             <p className="text-lg">
// //               Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт "вчера", но бюджет ограничен.
// //             </p>
// //           </motion.div>

// //           {/* Кнопка с анимацией пульсации */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6, delay: 1, type: "spring" }}
// //             className="text-center pt-8"
// //           >
// //             <motion.div
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               transition={{ type: "spring", stiffness: 400, damping: 17 }}
// //             >
// //               <Button 
// //                 size="lg" 
// //                 className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto shadow-lg shadow-purple-500/25 relative overflow-hidden group"
// //               >
// //                 <motion.span
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   transition={{ delay: 1.2 }}
// //                   className="relative z-10 flex items-center justify-center"
// //                 >
// //                   Заказать сайт
// //                   <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
// //                 </motion.span>
                
// //                 {/* Эффект свечения */}
// //                 <motion.div
// //                   initial={{ x: "-100%" }}
// //                   animate={{ x: "100%" }}
// //                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
// //                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
// //                 />
// //               </Button>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }


// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Check } from "lucide-react"

// const FEATURES = [
//   { text: "Полностью рабочий сайт на современном Next.js", color: "from-purple-500 to-violet-600" },
//   { text: "Адаптивный дизайн — идеально на любом экране", color: "from-pink-500 to-rose-600" },
//   { text: "Базовая SEO-оптимизация для поиска", color: "from-blue-500 to-cyan-600" },
//   { text: "Контактные формы для сбора заявок", color: "from-emerald-500 to-teal-600" },
// ]

// export function Offer() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   // Параллакс — каждая фотка со своей скоростью
//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -90])
//   const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
//   const y3 = useTransform(scrollYProgress, [0, 1], [-30, 70])

//   return (
//     <section
//       ref={sectionRef}
//       id="offer"
//       className="relative py-24 md:py-36 overflow-hidden bg-background"
//     >
//       {/* ─── Фото 1: левый нижний угол, крупная ─── */}
//       <motion.div
//         style={{ y: y1 }}
//         className="pointer-events-none select-none absolute z-0
//           left-0 bottom-[-40px]
//           w-[240px] sm:w-[300px] lg:w-[400px]
//           opacity-90
//         "
//       >
//         <img
//           src="/11.png"
//           alt=""
//           draggable={false}
//           className="w-full h-auto
            
//           "
//         />
//       </motion.div>

//       {/* ─── Фото 2: правый верхний угол ─── */}
//       <motion.div
//         style={{ y: y2 }}
//         className="pointer-events-none select-none absolute z-0
//           right-0 top-[-20px]
//           w-[200px] sm:w-[260px] lg:w-[340px]
//           opacity-90
//         "
//       >
//         <img
//           src="/22.png"
//           alt=""
//           draggable={false}
//           className="w-full h-auto
           
//           "
//         />
//       </motion.div>

//       {/* ─── Фото 3: правый нижний — маленькая, акцент ─── */}
//       <motion.div
//         style={{ y: y3 }}
//         className="pointer-events-none select-none absolute z-0
//           right-[4%] bottom-[6%]
//           w-[120px] sm:w-[150px] lg:w-[190px]
//           opacity-90
//         "
//       >
//         <img
//           src="/33.png"
//           alt=""
//           draggable={false}
//           className="w-full h-auto
            
//           "
//         />
//       </motion.div>

//       {/* ─── Ambient glow ─── */}
//       {/* <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-purple-700/10 rounded-full blur-[150px]" />
//         <div className="absolute bottom-0 left-1/3 w-[500px] h-[240px] bg-pink-700/8 rounded-full blur-[120px]" />
//       </div> */}

//       {/* ─── Контент: центр, поверх фоток ─── */}
//       <div className="relative z-10 mx-auto w-full max-w-2xl px-5 sm:px-8">

//         {/* Заголовок */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
//             <span className="bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
//               Да, вы всё правильно поняли
//             </span>
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
//             style={{ originX: 0.5 }}
//             className="mx-auto mt-5 h-[2px] w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
//           />
//         </motion.div>

//         {/* Стеклянная карточка */}
//         <motion.div
//           initial={{ opacity: 0, y: 36 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="
//             rounded-2xl md:rounded-3xl
//             border border-white/[0.08]
//             bg-white/[0.04] backdrop-blur-2xl
//             p-7 sm:p-9 md:p-11
//             shadow-[0_8px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]
//             space-y-8
//           "
//         >
//           {/* Intro */}
//           <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
//             Вам не показалось. Мы действительно создаём полноценные лендинги всего за{" "}
//             <span className="text-purple-400 font-semibold">2 рабочих дня</span>{" "}
//             по фиксированной цене в{" "}
//             <span className="text-pink-400 font-semibold">100 000 тенге</span>.
//           </p>

//           <Divider />

//           {/* Как это возможно */}
//           <div className="space-y-3">
//             <h3 className="text-xl sm:text-2xl font-bold text-white">Как это возможно?</h3>
//             <div className="space-y-2.5 text-[15px] sm:text-base text-gray-400 leading-relaxed">
//               <p>Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес.</p>
//               <p>Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.</p>
//             </div>
//           </div>

//           <Divider />

//           {/* Что входит */}
//           <div className="space-y-4">
//             <h3 className="text-xl sm:text-2xl font-bold text-white">Что входит в эту сумму?</h3>
//             <ul className="space-y-3">
//               {FEATURES.map((item, i) => (
//                 <motion.li
//                   key={i}
//                   initial={{ opacity: 0, x: -14 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.08 * i }}
//                   className="flex items-start gap-3 group"
//                 >
//                   <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)]`}>
//                     <Check className="w-3 h-3 text-white stroke-[3]" />
//                   </div>
//                   <span className="text-gray-300 group-hover:text-white transition-colors text-[15px] sm:text-base leading-snug">
//                     {item.text}
//                   </span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           <Divider />

//           {/* Нижний текст */}
//           <p className="text-gray-400 text-[15px] sm:text-base leading-relaxed">
//             Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт{" "}
//             <span className="text-white font-medium">«вчера»</span>, но бюджет ограничен.
//           </p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.93 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 220 }}
//           >
//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//               <Button
//                 size="lg"
//                 className="
//                   relative w-full sm:w-auto
//                   bg-gradient-to-r from-purple-600 to-pink-600
//                   hover:from-purple-500 hover:to-pink-500
//                   text-white font-semibold text-base md:text-lg
//                   px-10 h-12 md:h-14 rounded-xl
//                   shadow-[0_6px_28px_rgba(168,85,247,0.4)]
//                   hover:shadow-[0_8px_36px_rgba(168,85,247,0.6)]
//                   overflow-hidden transition-all duration-300 group
//                 "
//               >
//                 {/* shimmer */}
//                 <motion.span
//                   initial={{ x: "-100%" }}
//                   animate={{ x: "200%" }}
//                   transition={{ repeat: Infinity, duration: 2.2, ease: "linear", repeatDelay: 0.8 }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
//                 />
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   Заказать сайт
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
//                 </span>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function Divider() {
//   return <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// }


// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef, useState } from "react"
// import { ArrowUpRight, CheckCheck, ChevronDown } from "lucide-react"
// import Image from "next/image"

// const FEATURES = [
//   "Полностью рабочий сайт на Next.js",
//   "Адаптивный дизайн для любого экрана",
//   "Базовая SEO-оптимизация",
//   "Контактные формы для сбора заявок",
// ]

// const STEPS = [
//   { index: "01", title: "Бриф", desc: "Заполняете короткий бриф — 10 минут вашего времени." },
//   { index: "02", title: "Дизайн и разработка", desc: "Мы разрабатываем сайт на основе готовых, проверенных решений." },
//   { index: "03", title: "Запуск", desc: "Готовый сайт через 2 рабочих дня. Без доплат и сюрпризов." },
// ]

// export function Offer() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const [openStep, setOpenStep] = useState<number | null>(null)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

//   return (
//     <section
//       ref={sectionRef}
//       id="offer"
//       className="relative bg-background overflow-hidden"
//     >
//       {/* ── Top border line ── */}
//       <div className="border-t border-border" />

//       {/* ── Section label ── */}
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="flex items-center justify-between border-b border-border py-4">
//           <p className="text-xs font-bold tracking-widest uppercase text-primary">
//             Предложение
//           </p>
//           <p className="text-xs text-muted-foreground tracking-wide uppercase">
//             Фиксированная цена — 100 000 ₸
//           </p>
//         </div>
//       </div>

//       {/* ── Main grid ── */}
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border-x border-border">

//           {/* ── Left column ── */}
//           <div className="bg-background flex flex-col">

//             {/* Heading block */}
//             <div className="p-8 md:p-12 border-b border-border">
//               <motion.h2
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-balance"
//               >
//                 Да, вы всё
//                 <br />
//                 <span className="text-primary">правильно</span>
//                 <br />
//                 поняли
//               </motion.h2>
//             </div>

//             {/* Body text */}
//             <div className="p-8 md:p-12 border-b border-border flex-1">
//               <motion.p
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.55, delay: 0.1 }}
//                 className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md"
//               >
//                 Мы разработали уникальную систему экспресс-разработки.
//                 У нас есть готовые, проверенные решения и компоненты,
//                 которые мы адаптируем под ваш бизнес. Не нужно изобретать
//                 велосипед — мы берём лучшее и применяем для вашего проекта.
//               </motion.p>

//               {/* Features list */}
//               <ul className="space-y-0 border-t border-border">
//                 {FEATURES.map((text, i) => (
//                   <motion.li
//                     key={i}
//                     initial={{ opacity: 0, x: -12 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.4, delay: 0.06 * i }}
//                     className="flex items-center gap-4 py-4 border-b border-border group"
//                   >
//                     <div className="w-6 h-6 flex items-center justify-center bg-muted border border-border shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
//                       <CheckCheck className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors duration-200" />
//                     </div>
//                     <span className="text-sm text-foreground">{text}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>

//             {/* CTA block */}
//             <div className="p-8 md:p-12">
//               <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-sm">
//                 Тариф идеально подходит для малого бизнеса, стартапов
//                 и предпринимателей, которым нужен сайт{" "}
//                 <span className="text-foreground font-medium">«вчера»</span>.
//               </p>
//               <motion.button
//                 whileHover={{ opacity: 0.9 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-wide group transition-opacity"
//               >
//                 Заказать сайт
//                 <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </motion.button>
//             </div>
//           </div>

//           {/* ── Right column ── */}
//           <div className="bg-background flex flex-col">

//             {/* Parallax photo */}
//             <div className="relative overflow-hidden h-[280px] md:h-[360px] border-b border-border">
//               <motion.div
//                 style={{ y: imageY }}
//                 className="absolute inset-0 scale-110"
//               >
//                 <Image
//                   src="/offer-bg.jpg"
//                   alt="Разработка сайтов Bolat & Co"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />
//                 <div className="absolute inset-0 bg-background/40" />
//               </motion.div>

//               {/* Floating price badge */}
//               <div className="absolute bottom-6 left-6 border border-border bg-background/90 backdrop-blur-sm px-5 py-3">
//                 <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Стоимость</p>
//                 <p className="font-display text-2xl font-bold text-primary">100 000 ₸</p>
//               </div>

//               {/* Floating deadline badge */}
//               <div className="absolute top-6 right-6 border border-border bg-background/90 backdrop-blur-sm px-5 py-3 text-right">
//                 <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Срок</p>
//                 <p className="font-display text-2xl font-bold text-foreground">2 дня</p>
//               </div>
//             </div>

//             {/* Process accordion */}
//             <div className="flex-1 border-b border-border">
//               <div className="px-8 md:px-12 py-6 border-b border-border">
//                 <p className="text-xs font-bold tracking-widest uppercase text-primary">
//                   Как это работает
//                 </p>
//               </div>

//               {STEPS.map((step, i) => {
//                 const isOpen = openStep === i
//                 return (
//                   <button
//                     key={i}
//                     onClick={() => setOpenStep(isOpen ? null : i)}
//                     className="w-full text-left border-b border-border last:border-b-0 group"
//                   >
//                     <div className="flex items-center gap-6 px-8 md:px-12 py-6">
//                       <span className="font-display text-3xl md:text-4xl font-bold text-border group-hover:text-primary transition-colors duration-300 shrink-0 w-12">
//                         {step.index}
//                       </span>
//                       <span className="flex-1 font-display text-lg md:text-xl font-bold text-foreground text-left">
//                         {step.title}
//                       </span>
//                       <ChevronDown
//                         className={`w-4 h-4 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-primary" : ""}`}
//                       />
//                     </div>

//                     {/* Expandable content */}
//                     <div
//                       className={`grid transition-all duration-400 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
//                     >
//                       <div className="overflow-hidden">
//                         <p className="px-8 md:px-12 pb-6 pl-[5.5rem] text-sm text-muted-foreground leading-relaxed">
//                           {step.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 )
//               })}
//             </div>

//             {/* Bottom stat strip */}
//             <div className="grid grid-cols-3 divide-x divide-border">
//               {[
//                 { value: "50+", label: "Проектов" },
//                 { value: "2 дня", label: "Средний срок" },
//                 { value: "100%", label: "Гарантия" },
//               ].map((stat, i) => (
//                 <div key={i} className="px-6 py-6 text-center">
//                   <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
//                   <p className="text-xs text-muted-foreground mt-1 tracking-wide">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Bottom border ── */}
//       <div className="border-b border-border" />
//     </section>
//   )
// }




// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Check } from "lucide-react"
// import Link from "next/link"

// const FEATURES = [
//   { text: "Полностью рабочий сайт на современном Next.js" },
//   { text: "Адаптивный дизайн — идеально на любом экране" },
//   { text: "Базовая SEO-оптимизация для поиска" },
//   { text: "Контактные формы для сбора заявок" },
// ]

// export function Offer() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   })

//   const y1 = useTransform(scrollYProgress, [0, 1], [0, -90])
//   const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
//   const y3 = useTransform(scrollYProgress, [0, 1], [-30, 70])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 md:py-36 overflow-hidden bg-background border-t border-border"
//     >
//       {/* Фото 1: левый нижний угол */}
//       <motion.div
//         style={{ y: y1 }}
//         className="pointer-events-none select-none absolute z-0 left-0 bottom-[-40px] w-[240px] sm:w-[300px] lg:w-[400px] opacity-50"
//       >
//         <img
//           src="/11.png"
//           alt=""
//           draggable={false}
//           className="w-full h-auto"
//         />
//       </motion.div>

//       {/* Фото 2: правый верхний угол */}
//       <motion.div
//         style={{ y: y2 }}
//         className="pointer-events-none select-none absolute z-0 right-0 top-[-20px] w-[200px] sm:w-[260px] lg:w-[340px] opacity-50"
//       >
//         <img
//           src="/22.png"
//           alt=""
//           draggable={false}
//           className="w-full h-auto"
//         />
//       </motion.div>

//       {/* Фото 3: правый нижний */}
//       <motion.div
//         style={{ y: y3 }}
//         className="pointer-events-none select-none absolute z-0 right-[4%] bottom-[6%] w-[120px] sm:w-[150px] lg:w-[190px] opacity-50"
//       >
//         <img
//           src="/33.png"
//           alt=""
//           draggable={false}
//           className="w-full h-auto"
//         />
//       </motion.div>

//       {/* Контент */}
//       <div className="relative z-10 mx-auto w-full max-w-2xl px-5 sm:px-8">
//         {/* Заголовок */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-12"
//         >
//           <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
//             Специальное предложение
//           </span>
//           <h2
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
//             style={{ fontFamily: 'var(--font-syne)' }}
//           >
//             Да, вы всё правильно поняли
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
//             style={{ originX: 0.5 }}
//             className="mx-auto mt-5 h-px w-40 bg-primary"
//           />
//         </motion.div>

//         {/* Карточка */}
//         <motion.div
//           initial={{ opacity: 0, y: 36 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="rounded-2xl md:rounded-3xl border border-border bg-card p-7 sm:p-9 md:p-11 space-y-8 shadow-lg"
//         >
//           {/* Intro */}
//           <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
//             Вам не показалось. Мы действительно создаём полноценные лендинги всего за{" "}
//             <span className="text-primary font-semibold">2 рабочих дня</span>{" "}
//             по фиксированной цене в{" "}
//             <span className="text-primary font-semibold">100 000 тенге</span>.
//           </p>

//           <Divider />

//           {/* Как это возможно */}
//           <div className="space-y-3">
//             <h3
//               className="text-xl sm:text-2xl font-bold"
//               style={{ fontFamily: 'var(--font-syne)' }}
//             >
//               Как это возможно?
//             </h3>
//             <div className="space-y-2.5 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
//               <p>Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес.</p>
//               <p>Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.</p>
//             </div>
//           </div>

//           <Divider />

//           {/* Что входит */}
//           <div className="space-y-4">
//             <h3
//               className="text-xl sm:text-2xl font-bold"
//               style={{ fontFamily: 'var(--font-syne)' }}
//             >
//               Что входит в эту сумму?
//             </h3>
//             <ul className="space-y-3">
//               {FEATURES.map((item, i) => (
//                 <motion.li
//                   key={i}
//                   initial={{ opacity: 0, x: -14 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: 0.08 * i }}
//                   className="flex items-start gap-3 group"
//                 >
//                   <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
//                     <Check className="w-3 h-3 text-primary stroke-[2]" />
//                   </div>
//                   <span className="text-foreground group-hover:text-primary transition-colors text-[15px] sm:text-base leading-snug">
//                     {item.text}
//                   </span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           <Divider />

//           {/* Нижний текст */}
//           <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed">
//             Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт{" "}
//             <span className="text-foreground font-medium">«вчера»</span>, но бюджет ограничен.
//           </p>

//           {/* CTA */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.93 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 220 }}
//           >
//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Link href="#contact">
//                 <Button
//                   size="lg"
//                   className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base md:text-lg px-10 h-12 md:h-14 rounded-lg transition-all duration-300 group"
//                 >
//                   <span className="relative z-10 flex items-center justify-center gap-2">
//                     Заказать сайт
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//                   </span>
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function Divider() {
//   return <div className="h-px bg-border" />
// }



"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const FEATURES = [
  { text: "Полностью рабочий сайт на современном Next.js" },
  { text: "Адаптивный дизайн — идеально на любом экране" },
  { text: "Базовая SEO-оптимизация для поиска" },
  { text: "Контактные формы для сбора заявок" },
]

export function Offer() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -90])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], [-30, 70])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden bg-background border-t border-border"
    >
      {/* Фото 1: левый нижний угол */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none select-none absolute z-0 left-0 bottom-[-40px] w-[240px] sm:w-[300px] lg:w-[400px] opacity-40"
      >
        <img
          src="/11.png"
          alt=""
          draggable={false}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Фото 2: правый верхний угол */}
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none select-none absolute z-0 right-0 top-[-20px] w-[200px] sm:w-[260px] lg:w-[340px] opacity-40"
      >
        <img
          src="/22.png"
          alt=""
          draggable={false}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Фото 3: правый нижний */}
      <motion.div
        style={{ y: y3 }}
        className="pointer-events-none select-none absolute z-0 right-[4%] bottom-[6%] w-[120px] sm:w-[150px] lg:w-[190px] opacity-40"
      >
        <img
          src="/33.png"
          alt=""
          draggable={false}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
              Специальное предложение
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              Да, вы всё правильно поняли
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
              style={{ originX: 0.5 }}
              className="mx-auto mt-6 h-px w-20 bg-primary"
            />
          </motion.div>

          {/* Карточка — стилизована под общий дизайн сайта */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 space-y-8"
          >
            {/* Intro */}
            <p className="text-lg font-sans text-muted-foreground leading-relaxed">
              Вам не показалось. Мы действительно создаём полноценные лендинги всего за{" "}
              <span className="text-primary font-semibold">2 рабочих дня</span>{" "}
              по фиксированной цене в{" "}
              <span className="text-primary font-semibold">100 000 тенге</span>.
            </p>

            <Divider />

            {/* Как это возможно */}
            <div className="space-y-4">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Как это возможно?
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
<p className="font-sans">Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес.</p>
<p className="font-sans">Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.</p>
              </div>
            </div>

            <Divider />

            {/* Что входит */}
            <div className="space-y-5">
              <h3
                className="text-xl md:text-2xl font-bold"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                Что входит в эту сумму?
              </h3>
              <ul className="space-y-3">
                {FEATURES.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary stroke-[2]" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors leading-snug">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Divider />

            {/* Нижний текст */}
            <p className="font-sans text-muted-foreground leading-relaxed">
              Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт{" "}
              <span className="text-foreground font-medium">«вчера»</span>, но бюджет ограничен.
            </p>

            {/* CTA — стилизована под кнопки сайта */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="pt-2"
            >
              <Link href="#contact" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:bg-primary/90 transition-colors rounded-lg group">
                    Заказать сайт
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Divider() {
  return <div className="h-px bg-border" />
}