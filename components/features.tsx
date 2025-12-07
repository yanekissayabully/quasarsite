"use client"

import { motion } from "framer-motion"
import { Rocket, Users, Clock, Award } from "lucide-react"

export function Features() {
  const stats = [
    { icon: Rocket, value: "150+", label: "Проектов запущено" },
    { icon: Users, value: "80+", label: "Довольных клиентов" },
    { icon: Clock, value: "24/7", label: "Поддержка" },
    { icon: Award, value: "5+", label: "Лет опыта" },
  ]

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
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Stats */}

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            А в чем мы <span className="text-primary">хороши?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

