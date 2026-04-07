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
            <p className="text-sm text-muted-foreground leading-relaxed">
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
<p>Мы разработали уникальную систему экспресс-разработки. У нас есть готовые, проверенные решения и компоненты, которые мы адаптируем под ваш бизнес.</p>
<p>Не нужно изобретать велосипед — мы берём лучшие практики и применяем их для вашего проекта.</p>
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
            <p className="text-muted-foreground leading-relaxed">
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