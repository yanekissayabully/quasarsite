"use client"

import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      title: "Современные технологии",
      description: "Мы используем только самые передовые и проверенные технологии для создания вашего сайта. Это значит, что ваш проект будет работать быстро, без сбоев и будет защищен от устаревания. Наши основные инструменты: Next.js для молниеносной загрузки страниц, React для плавного и интуитивного интерфейса, TypeScript для исключения ошибок в коде и Tailwind CSS для идеального дизайна на всех устройствах. Все эти технологии — стандарт современной веб-разработки, который используют крупнейшие компании мира. Мы следим за всеми обновлениями и сразу внедряем полезные новшества в ваши проекты.",
    },
    {
      title: "Быстрая разработка",
      description: "Мы работаем по гибкой системе Agile, что позволяет нам запускать проекты в рекордно короткие сроки. Вместо того чтобы ждать месяцы до готовности всего проекта, вы будете видеть прогресс каждые 2 недели. Наша команда опытных специалистов ежедневно согласовывает задачи, быстро вносит правки и оперативно решает возникающие вопросы. Мы используем автоматизированные системы тестирования, чтобы каждая новая функция работала идеально с первого раза. Благодаря этому от идеи до работающего прототипа проходит всего 1 месяц, а до полноценного запуска — 2-3 месяца.",
    },
    {
      title: "Масштабируемость",
      description: "Мы создаем сайты и приложения, которые будут расти вместе с вашим бизнесом. Даже если сегодня у вас 100 посетителей в день, завтра может быть 10 000 — и ваш сайт справится с этой нагрузкой без падений и тормозов. Мы продумываем архитектуру так, чтобы в будущем можно было легко добавлять новые функции: онлайн-оплату, личный кабинет, интеграцию с CRM, чат-ботов и многое другое. Ваш проект не упрется в технические ограничения, когда вы захотите его развивать. Все наши решения предусматривают рост на годы вперед.",
    },
    {
      title: "SEO-оптимизация",
      description: "Мы создаем сайты, которые поисковые системы сразу видят и любят. С первого дня разработки мы применяем все современные методы SEO: правильная структура страниц, быстрая загрузка, адаптивность под мобильные устройства, оптимизированные изображения и тексты. Благодаря этому ваш сайт быстро попадает в топ поиска Google и Яндекс, привлекая клиентов без дорогой рекламы. Мы не просто 'добавляем SEO' в конце, а встраиваем его в сам процесс разработки. Результат — стабильный рост органического трафика с первых недель после запуска.",
    },
  ]

  return (
    <section id="features" className="py-12 md:py-24 relative bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            А в чем мы <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">хороши?</span>
          </h2>
        </motion.div>

        {/* Desktop Grid - Custom Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 lg:gap-6 xl:gap-8 min-h-[700px]">
          {/* Card 1 - Top Left (2x3) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-3 p-6 xl:p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-base xl:text-lg font-bold mb-3 xl:mb-4 text-white leading-tight break-words hyphens-auto">
              {features[0].title}
            </h3>
            <p className="text-xs xl:text-sm text-gray-400 leading-relaxed break-words hyphens-auto">
              {features[0].description}
            </p>
          </motion.div>

          {/* Card 2 - Bottom Left (2x2) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 row-span-2 col-start-1 row-start-4 p-6 xl:p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-base xl:text-lg font-bold mb-3 xl:mb-4 text-white leading-tight break-words hyphens-auto">
              {features[1].title}
            </h3>
            <p className="text-xs xl:text-sm text-gray-400 leading-relaxed break-words hyphens-auto">
              {features[1].description}
            </p>
          </motion.div>

          {/* Card 3 - Middle (1x5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="row-span-5 col-start-3 row-start-1 p-6 xl:p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-base xl:text-lg font-bold mb-3 xl:mb-4 text-white leading-tight break-words hyphens-auto">
              {features[2].title}
            </h3>
            <p className="text-xs xl:text-sm text-gray-400 leading-relaxed break-words hyphens-auto">
              {features[2].description}
            </p>
          </motion.div>

          {/* Card 4 - Right (2x5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 row-span-5 col-start-4 row-start-1 p-6 xl:p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-base xl:text-lg font-bold mb-3 xl:mb-4 text-white leading-tight break-words hyphens-auto">
              {features[3].title}
            </h3>
            <p className="text-xs xl:text-sm text-gray-400 leading-relaxed break-words hyphens-auto">
              {features[3].description}
            </p>
          </motion.div>
        </div>

        {/* Mobile/Tablet Grid - Standard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-7 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all flex flex-col justify-center"
            >
              <h3 className="text-lg md:text-xl font-bold mb-3 text-white break-words hyphens-auto">
                {feature.title}
              </h3>
              <p className="text-sm md:text-sm text-gray-400 leading-relaxed break-words hyphens-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



// "use client"

// import { motion } from "framer-motion"

// export default function Features() {
//   const features = [
//     {
//       title: "Современные технологии",
//       description: "Мы используем только самые передовые и проверенные технологии для создания вашего сайта. Это значит, что ваш проект будет работать быстро, без сбоев и будет защищен от устаревания. Наши основные инструменты: Next.js для молниеносной загрузки страниц, React для плавного и интуитивного интерфейса, TypeScript для исключения ошибок в коде и Tailwind CSS для идеального дизайна на всех устройствах. Все эти технологии — стандарт современной веб-разработки, который используют крупнейшие компании мира. Мы следим за всеми обновлениями и сразу внедряем полезные новшества в ваши проекты.",
//     },
//     {
//       title: "Быстрая разработка",
//       description: "Мы работаем по гибкой системе Agile, что позволяет нам запускать проекты в рекордно короткие сроки. Вместо того чтобы ждать месяцы до готовности всего проекта, вы будете видеть прогресс каждые 2 недели. Наша команда опытных специалистов ежедневно согласовывает задачи, быстро вносит правки и оперативно решает возникающие вопросы. Мы используем автоматизированные системы тестирования, чтобы каждая новая функция работала идеально с первого раза. Благодаря этому от идеи до работающего прототипа проходит всего 1 месяц, а до полноценного запуска — 2-3 месяца.",
//     },
//     {
//       title: "Масштабируемость",
//       description: "Мы создаем сайты и приложения, которые будут расти вместе с вашим бизнесом. Даже если сегодня у вас 100 посетителей в день, завтра может быть 10 000 — и ваш сайт справится с этой нагрузкой без падений и тормозов. Мы продумываем архитектуру так, чтобы в будущем можно было легко добавлять новые функции: онлайн-оплату, личный кабинет, интеграцию с CRM, чат-ботов и многое другое. Ваш проект не упрется в технические ограничения, когда вы захотите его развивать. Все наши решения предусматривают рост на годы вперед.",
//     },
//     {
//       title: "SEO-оптимизация",
//       description: "Мы создаем сайты, которые поисковые системы сразу видят и любят. С первого дня разработки мы применяем все современные методы SEO: правильная структура страниц, быстрая загрузка, адаптивность под мобильные устройства, оптимизированные изображения и тексты. Благодаря этому ваш сайт быстро попадает в топ поиска Google и Яндекс, привлекая клиентов без дорогой рекламы. Мы не просто 'добавляем SEO' в конце, а встраиваем его в сам процесс разработки. Результат — стабильный рост органического трафика с первых недель после запуска.",
//     },
//   ]

//   return (
//     <section id="features" className="py-12 md:py-24 relative bg-gray-950">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
//             А в чем мы <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">хороши?</span>
//           </h2>
//         </motion.div>

//         {/* Desktop Grid - Custom Layout */}
//         <div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 lg:gap-6 xl:gap-8 min-h-[700px]">
//           {/* Card 1 - Top Left (2x3) */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="col-span-2 row-span-3 p-8 xl:p-10 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
//           >
//             <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-5 text-white leading-tight break-words hyphens-auto">
//               {features[0].title}
//             </h3>
//             <p className="text-sm xl:text-base text-gray-400 leading-relaxed break-words hyphens-auto">
//               {features[0].description}
//             </p>
//           </motion.div>

//           {/* Card 2 - Bottom Left (2x2) */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="col-span-2 row-span-2 col-start-1 row-start-4 p-8 xl:p-10 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
//           >
//             <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-5 text-white leading-tight break-words hyphens-auto">
//               {features[1].title}
//             </h3>
//             <p className="text-sm xl:text-base text-gray-400 leading-relaxed break-words hyphens-auto">
//               {features[1].description}
//             </p>
//           </motion.div>

//           {/* Card 3 - Middle (1x5) */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="row-span-5 col-start-3 row-start-1 p-8 xl:p-10 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
//           >
//             <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-5 text-white leading-tight break-words hyphens-auto">
//               {features[2].title}
//             </h3>
//             <p className="text-sm xl:text-base text-gray-400 leading-relaxed break-words hyphens-auto">
//               {features[2].description}
//             </p>
//           </motion.div>

//           {/* Card 4 - Right (2x5) */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="col-span-2 row-span-5 col-start-4 row-start-1 p-8 xl:p-10 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-purple-500/50 transition-all flex flex-col justify-center"
//           >
//             <h3 className="text-xl xl:text-2xl font-bold mb-4 xl:mb-5 text-white leading-tight break-words hyphens-auto">
//               {features[3].title}
//             </h3>
//             <p className="text-sm xl:text-base text-gray-400 leading-relaxed break-words hyphens-auto">
//               {features[3].description}
//             </p>
//           </motion.div>
//         </div>

//         {/* Mobile/Tablet Grid - Standard Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 md:gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-6 md:p-7 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all flex flex-col justify-center"
//             >
//               <h3 className="text-lg md:text-xl font-bold mb-3 text-white break-words hyphens-auto">
//                 {feature.title}
//               </h3>
//               <p className="text-sm md:text-sm text-gray-400 leading-relaxed break-words hyphens-auto">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }