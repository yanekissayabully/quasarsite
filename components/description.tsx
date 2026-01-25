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
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Да, вы всё правильно поняли
            </span>
          </h2>
        </motion.div>

        {/* Основной контент */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10 mb-8"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Вам не показалось. Мы действительно создаём полноценные сайты всего за <span className="text-purple-400 font-semibold">2 рабочих дня</span> по фиксированной цене в <span className="text-pink-400 font-semibold">40 000 тенге</span>.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                Как это возможно?
              </h3>
              
              <p className="text-gray-300 mb-6">
                Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес. Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                Что входит в эту сумму?
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300"><strong>Полностью рабочий сайт</strong> на современной технологии Next.js</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300"><strong>Адаптивный дизайн</strong> — сайт идеально выглядит на телефонах, планшетах и компьютерах</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300"><strong>Базовая SEO-оптимизация</strong> для быстрого появления в поиске</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300"><strong>Контактные формы</strong> для сбора заявок от клиентов</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                А подвох где?
              </h3>
              
              <p className="text-gray-300 mb-6">
                Никакого подвоха. Просто мы оптимизировали процесс до максимума. Мы не делаем уникальный дизайн с нуля для каждого проекта — используем готовые, но стильные шаблоны, которые настраиваем под ваш бренд. Это позволяет нам делать качественные сайты быстро и недорого.
              </p>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 my-8">
                <p className="text-center text-lg text-gray-300 italic">
                  "Мы не обещаем золотые горы. Мы делаем работающие сайты, которые приносят клиентов. Быстро и за разумные деньги."
                </p>
              </div>

              <p className="text-gray-300 mb-8">
                Этот тариф идеально подходит для малого бизнеса, стартапов, специалистов и предпринимателей, которым нужен работающий сайт "вчера", но бюджет ограничен.
              </p>
            </div>
          </motion.div>

          {/* Кнопка */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto"
            >
              Заказать сайт за 40 000 ₸
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}