"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Bot, Palette, Zap, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Веб-разработка",
      description:
        "Создание современных, быстрых и адаптивных веб-сайтов на Next.js, React и других передовых технологиях.",
      features: ["Landing Pages", "Корпоративные сайты", "E-commerce", "Web-приложения"],
    },
    {
      icon: Smartphone,
      title: "Telegram Mini Apps",
      description: "Разработка мини-приложений для Telegram с интеграцией платежей, геймификацией и уникальным UX.",
      features: ["Игры", "E-commerce", "Сервисы", "Интеграции"],
    },
    {
      icon: Bot,
      title: "Telegram боты",
      description: "Автоматизация бизнес-процессов через ботов: от простых чат-ботов до сложных систем с AI.",
      features: ["Чат-боты", "AI-ассистенты", "CRM интеграции", "Автоматизация"],
    },
    {
      icon: Palette,
      title: "UI/UX Дизайн",
      description:
        "Создание интуитивных интерфейсов, которые пользователи любят. Современный дизайн с фокусом на конверсию.",
      features: ["Прототипирование", "Дизайн-системы", "Брендинг", "Анимации"],
    },
    {
      icon: Zap,
      title: "Оптимизация",
      description:
        "Повышение производительности и скорости загрузки. SEO-оптимизация для лучшей видимости в поисковиках.",
      features: ["Performance", "SEO", "Core Web Vitals", "Аналитика"],
    },
    {
      icon: Shield,
      title: "Поддержка",
      description:
        "Техническая поддержка, обновления и развитие проектов. Гарантируем стабильную работу ваших решений.",
      features: ["Мониторинг", "Обновления", "Консультации", "Доработки"],
    },
  ]

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для создания и развития вашего цифрового присутствия
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
