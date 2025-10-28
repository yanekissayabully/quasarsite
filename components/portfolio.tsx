"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const projects = [
    {
      title: "E-commerce платформа",
      category: "Веб-разработка",
      description: "Полнофункциональный интернет-магазин с интеграцией платежей и CRM",
      image: "/modern-ecommerce-website-dark-purple-theme.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      title: "Telegram Mini App",
      category: "Telegram",
      description: "Игровое приложение с системой достижений и внутренней валютой",
      image: "/telegram-mini-app-game-interface-purple.jpg",
      tags: ["React", "Telegram SDK", "Node.js"],
    },
    {
      title: "AI Чат-бот",
      category: "Боты",
      description: "Интеллектуальный бот для автоматизации поддержки клиентов",
      image: "/ai-chatbot-interface-dark-theme.jpg",
      tags: ["Python", "OpenAI", "Telegram Bot API"],
    },
    {
      title: "Корпоративный сайт",
      category: "Веб-разработка",
      description: "Многостраничный сайт с CMS и мультиязычностью",
      image: "/corporate-website-modern-design-purple.jpg",
      tags: ["Next.js", "Sanity CMS", "i18n"],
    },
    {
      title: "Сервис бронирования",
      category: "Telegram Mini App",
      description: "Приложение для бронирования услуг с календарём и уведомлениями",
      image: "/booking-service-app-interface.jpg",
      tags: ["React", "Firebase", "Telegram Payments"],
    },
    {
      title: "Маркетинг бот",
      category: "Боты",
      description: "Бот для рассылок и аналитики с интеграцией CRM",
      image: "/marketing-bot-dashboard-analytics.jpg",
      tags: ["Node.js", "MongoDB", "Analytics"],
    },
  ]

  return (
    <section id="portfolio" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="text-primary">работы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры успешно реализованных проектов для различных отраслей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Подробнее
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
