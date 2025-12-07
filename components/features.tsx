// "use client"

// import { motion } from "framer-motion"
// import { Rocket, Users, Clock, Award } from "lucide-react"

// export function Features() {
//   const stats = [
//     { icon: Rocket, value: "150+", label: "Проектов запущено" },
//     { icon: Users, value: "80+", label: "Довольных клиентов" },
//     { icon: Clock, value: "24/7", label: "Поддержка" },
//     { icon: Award, value: "5+", label: "Лет опыта" },
//   ]

//   const features = [
//     {
//       title: "Современные технологии",
//       description: "Используем только проверенные и актуальные технологии: Next.js, React, TypeScript, Tailwind CSS.",
//     },
//     {
//       title: "Быстрая разработка",
//       description: "Agile-подход и опытная команда позволяют запускать проекты в кратчайшие сроки без потери качества.",
//     },
//     {
//       title: "Масштабируемость",
//       description: "Архитектура проектов позволяет легко добавлять новые функции и масштабировать нагрузку.",
//     },
//     {
//       title: "SEO-оптимизация",
//       description:
//         "Все проекты оптимизированы для поисковых систем с первого дня. Быстрая индексация и высокие позиции.",
//     },
//     {
//       title: "SEO",
//       description:
//         "Все проекты оптимизированы для поисковых систем с первого дня. Быстрая индексация и высокие позиции.",
//     },
//   ]

//   return (
//     <section id="features" className="py-24 relative">
//       <div className="container mx-auto px-4">
//         {/* Stats */}

//         {/* Features Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             А в чем мы <span className="text-primary">хороши?</span>
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all"
//             >
//               <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }





"use client"

import { motion } from "framer-motion"

export function Features() {
  const features = [
    {
      title: "Современные технологии",
      description: "Используем только проверенные и актуальные технологии: Next.js, React, TypeScript, Tailwind CSS.",
    },
    {
      title: "Быстрая разработка",
      description: "Agile-подход и опытная команда позволяют запускать проекты в кратчайшие сроки без потери качества.",
    },
    {
      title: "Масштабируемость",
      description: "Архитектура проектов позволяет легко добавлять новые функции и масштабировать нагрузку.",
    },
    {
      title: "SEO-оптимизация",
      description:
        "Все проекты оптимизированы для поисковых систем с первого дня. Быстрая индексация и высокие позиции.",
    },
  ]

  return (
    <section id="features" className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            А в чем мы <span className="text-primary">хороши?</span>
          </h2>
        </motion.div>

        {/* Desktop Grid - Custom Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 lg:gap-6 xl:gap-8 min-h-[600px]">
          {/* Card 1 - Top Left (2x3) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-3 p-6 xl:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4">{features[0].title}</h3>
            <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">{features[0].description}</p>
          </motion.div>

          {/* Card 2 - Bottom Left (2x2) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 row-span-2 col-start-1 row-start-4 p-6 xl:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4">{features[1].title}</h3>
            <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">{features[1].description}</p>
          </motion.div>

          {/* Card 3 - Middle (1x5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="row-span-5 col-start-3 row-start-1 p-6 xl:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4">{features[2].title}</h3>
            <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">{features[2].description}</p>
          </motion.div>

          {/* Card 4 - Right (2x5) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 row-span-5 col-start-4 row-start-1 p-6 xl:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all flex flex-col justify-center"
          >
            <h3 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4">{features[3].title}</h3>
            <p className="text-sm xl:text-base text-muted-foreground leading-relaxed">{features[3].description}</p>
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
              className="p-6 md:p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}