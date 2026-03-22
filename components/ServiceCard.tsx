// "use client"

// import { motion } from "framer-motion"
// import {
//   Globe,
//   ShoppingCart,
//   CreditCard,
//   Zap,
//   Shield,
//   Smartphone,
//   BarChart,
//   Settings,
//   ArrowRight,
//   CheckCheck,
// } from "lucide-react"
// import { useState } from "react"

// // ---------------------------------------------------------------------------
// // ServiceCard
// // ---------------------------------------------------------------------------

// interface ServiceCardProps {
//   title: string
//   price: string
//   priceNote?: string
//   description: string
//   features: string[]
//   icon: React.ReactNode
//   popular?: boolean
//   delay?: number
// }

// export function ServiceCard({
//   title,
//   price,
//   priceNote,
//   description,
//   features,
//   icon,
//   popular = false,
//   delay = 0,
// }: ServiceCardProps) {
//   const [hovered, setHovered] = useState(false)

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.45, ease: "easeOut" }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative flex flex-col"
//     >
//       {/* Popular badge */}
//       {popular && (
//         <div className="absolute -top-3.5 left-6 z-20">
//           <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 py-1">
//             Популярное
//           </span>
//         </div>
//       )}

//       <div
//         className={`
//           relative flex flex-col flex-1 overflow-hidden
//           border transition-all duration-400
//           ${popular ? "border-primary" : "border-border"}
//           ${hovered ? "border-primary" : ""}
//         `}
//       >
//         {/* Subtle fill on hover */}
//         <div
//           className={`
//             absolute inset-0 bg-primary/5 transition-opacity duration-400
//             ${hovered ? "opacity-100" : "opacity-0"}
//           `}
//         />

//         {/* Top accent line */}
//         <div
//           className={`
//             relative h-px w-full bg-primary transition-all duration-500
//             ${hovered || popular ? "opacity-100" : "opacity-0"}
//           `}
//         />

//         <div className="relative flex flex-col flex-1 p-6 md:p-8 gap-6">
//           {/* Icon */}
//           <div
//             className={`
//               w-12 h-12 flex items-center justify-center border border-border
//               transition-all duration-400
//               ${hovered ? "border-primary bg-primary/10" : "bg-muted"}
//             `}
//           >
//             <div className="text-primary w-5 h-5">{icon}</div>
//           </div>

//           {/* Title + description */}
//           <div className="space-y-2">
//             <h3
//               className={`
//                 font-display text-xl md:text-2xl font-bold tracking-tight leading-tight
//                 transition-colors duration-300
//                 ${hovered ? "text-primary" : "text-foreground"}
//               `}
//             >
//               {title}
//             </h3>
//             <p className="text-sm text-muted-foreground leading-relaxed">
//               {description}
//             </p>
//           </div>

//           {/* Price */}
//           <div className="border-t border-border pt-5">
//             <p className="font-display text-2xl md:text-3xl font-bold text-primary">
//               {price}
//             </p>
//             {priceNote && (
//               <p className="mt-1 text-xs text-muted-foreground">{priceNote}</p>
//             )}
//           </div>

//           {/* Features */}
//           <ul className="flex-1 space-y-2.5">
//             {features.map((f, i) => (
//               <li key={i} className="flex items-start gap-2.5 text-sm">
//                 <CheckCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                 <span className="text-muted-foreground">{f}</span>
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <button
//             className={`
//               mt-auto flex items-center justify-center gap-2 w-full py-3
//               border font-medium text-sm tracking-wide
//               transition-all duration-300
//               ${hovered
//                 ? "bg-primary text-primary-foreground border-primary"
//                 : "bg-transparent text-primary border-primary/40 hover:border-primary"
//               }
//             `}
//           >
//             Заказать
//             <ArrowRight
//               className={`w-4 h-4 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
//             />
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// // ---------------------------------------------------------------------------
// // ServicesCatalog
// // ---------------------------------------------------------------------------

// function PriceRange({ from, to, note }: { from: string; to: string; note?: string }) {
//   return (
//     <div>
//       <p className="font-display text-2xl md:text-3xl font-bold text-primary">
//         {from} — {to}
//       </p>
//       {note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}
//     </div>
//   )
// }

// function SectionHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="flex items-center gap-4 mb-10"
//     >
//       <div className="flex items-center gap-3">
//         <div className="w-8 h-8 flex items-center justify-center text-primary">{icon}</div>
//         <h3 className="font-display text-2xl md:text-3xl font-bold">{title}</h3>
//       </div>
//       <div className="flex-1 h-px bg-border" />
//     </motion.div>
//   )
// }

// export function ServicesCatalog() {
//   const services: ServiceCardProps[] = [
//     {
//       title: "Лендос как Waba",
//       price: "100 000 ₸",
//       priceNote: "фиксированная стоимость",
//       description:
//         "Одностраничный сайт, разработанный с нуля под ваши задачи. Идеально для быстрого старта и презентации продукта.",
//       features: [
//         "Адаптивный дизайн",
//         "Оптимизация под SEO",
//         "Форма обратной связи",
//         "Аналитика посещений",
//         "Домен и хостинг в подарок",
//       ],
//       icon: <Globe />,
//     },
//     {
//       title: "Лендос ТИЛЬДА",
//       price: "100 000 ₸",
//       priceNote: "на платформе Tilda",
//       description:
//         "Профессиональный лендинг на конструкторе Tilda с уникальным дизайном и настройкой под ваш бренд.",
//       features: [
//         "Уникальный дизайн",
//         "Настройка Zero Block",
//         "Анимации и эффекты",
//         "Интеграция с CRM",
//         "Обучение управлению",
//       ],
//       icon: <Smartphone />,
//     },
//     {
//       title: "Лендос ТИЛЬДА + Эквайринг",
//       price: "150 000 ₸",
//       priceNote: "с интеграцией платежей",
//       description:
//         "Полноценный лендинг с возможностью приема онлайн-платежей. Готовый инструмент для продаж.",
//       features: [
//         "Все возможности Tilda",
//         "Подключение эквайринга",
//         "Корзина товаров/услуг",
//         "Автоматические чеки",
//         "Безопасность платежей",
//       ],
//       icon: <CreditCard />,
//       popular: true,
//     },
//   ]

//   const ecommerceFeatures = [
//     "Интеграция с 1С",
//     "Система скидок и промокодов",
//     "Личный кабинет покупателя",
//     "Админ-панель управления",
//     "SEO-оптимизация",
//     "Яндекс.Метрика и Google Analytics",
//     "Подключение эквайринга",
//     "Безопасность данных",
//   ]

//   const included = [
//     { icon: <Settings className="w-4 h-4 text-primary" />, title: "Разработка и настройка", desc: "Полный цикл разработки от дизайна до запуска" },
//     { icon: <BarChart className="w-4 h-4 text-primary" />, title: "Аналитика и SEO", desc: "Настройка метрик, оптимизация под поисковые системы" },
//     { icon: <Shield className="w-4 h-4 text-primary" />, title: "Безопасность", desc: "SSL-сертификат, защита от взломов, резервное копирование" },
//     { icon: <Zap className="w-4 h-4 text-primary" />, title: "Техническая поддержка", desc: "3 месяца бесплатной поддержки после запуска" },
//   ]

//   return (
//     <section id="catalog" className="py-20 md:py-28">
//       <div className="container mx-auto px-4 max-w-7xl">

//         {/* Page heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 md:mb-20"
//         >
//           <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
//             Каталог
//           </p>
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
//             Услуги
//           </h2>
//         </motion.div>

//         {/* ---- Лендинги ---- */}
//         <div className="mb-20 md:mb-28">
//           <SectionHeading icon={<Globe />} title="Лендинги" />

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
//             {services.map((s, i) => (
//               <div key={i} className="bg-background">
//                 <ServiceCard {...s} delay={i * 0.08} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ---- Интернет-магазины ---- */}
//         <div className="mb-20 md:mb-28">
//           <SectionHeading icon={<ShoppingCart />} title="Интернет-магазины" />

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
//             {/* Main card */}
//             <motion.div
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="bg-background p-6 md:p-10 flex flex-col gap-6"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-muted border border-border">
//                 <ShoppingCart className="w-5 h-5 text-primary" />
//               </div>

//               <div>
//                 <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
//                   Интернет-магазин на InSales
//                 </h3>
//                 <PriceRange
//                   from="150 000 ₸"
//                   to="500 000 ₸"
//                   note="* стоимость зависит от количества SKU и сложности интеграций"
//                 />
//               </div>

//               <p className="text-sm text-muted-foreground leading-relaxed">
//                 Готовое решение для онлайн-торговли с широкими возможностями масштабирования и профессиональной поддержкой.
//               </p>

//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
//                 {ecommerceFeatures.map((f, i) => (
//                   <li key={i} className="flex items-center gap-2 text-sm">
//                     <div className="w-1 h-1 bg-primary shrink-0" />
//                     <span className="text-muted-foreground">{f}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="mt-auto flex items-center justify-center gap-2 w-full py-3 border border-primary/40 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group">
//                 Рассчитать стоимость
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </button>
//             </motion.div>

//             {/* Included card */}
//             <motion.div
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="bg-primary/5 border-primary/20 p-6 md:p-10 flex flex-col gap-6"
//             >
//               <div className="flex items-center gap-3">
//                 <Shield className="w-6 h-6 text-primary shrink-0" />
//                 <h3 className="font-display text-xl md:text-2xl font-bold">
//                   Что входит в стоимость
//                 </h3>
//               </div>

//               <ul className="flex-1 space-y-5">
//                 {included.map((item, i) => (
//                   <li key={i} className="flex items-start gap-4">
//                     <div className="w-8 h-8 flex items-center justify-center bg-primary/10 shrink-0 mt-0.5">
//                       {item.icon}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-sm mb-0.5">{item.title}</p>
//                       <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="border-t border-border pt-5">
//                 <p className="text-xs text-muted-foreground leading-relaxed">
//                   Специальное предложение: при заказе интернет-магазина — настройка контекстной рекламы в подарок.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* ---- CTA ---- */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15 }}
//           className="border border-border p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
//         >
//           <div className="max-w-xl">
//             <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
//               Не нашли подходящее решение?
//             </h3>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Разработаем индивидуальное решение под ваши задачи. Свяжитесь с нами для консультации.
//             </p>
//           </div>
//           <button className="shrink-0 flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-wide hover:opacity-90 transition-opacity group">
//             Получить консультацию
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion, useInView } from "framer-motion"
import {
  Globe,
  ShoppingCart,
  CreditCard,
  Zap,
  Shield,
  Smartphone,
  BarChart,
  Settings,
  ArrowUpRight,
  CheckCheck,
} from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ServiceItem {
  index: number
  title: string
  subtitle: string
  price: string
  priceNote?: string
  description: string
  features: string[]
  image: string
  tag: string
  popular?: boolean
}

// ---------------------------------------------------------------------------
// ServiceRow — full-width row with image reveal on hover
// ---------------------------------------------------------------------------

function ServiceRow({ item, delay = 0 }: { item: ServiceItem; delay?: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border-b border-border overflow-hidden cursor-pointer"
    >
      {/* Background image — slides in on hover */}
      <div
        className={`
          absolute inset-0 transition-opacity duration-700
          ${hovered ? "opacity-100" : "opacity-0"}
        `}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 h-px bg-primary transition-all duration-500 ${hovered ? "w-full" : "w-0"}`}
      />

      <div className="relative z-10 px-6 md:px-10 lg:px-16 py-8 md:py-10">
        {/* — Top row: index + title + price — */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
          {/* Index number */}
          <span
            className={`
              font-display text-5xl md:text-7xl font-bold leading-none
              transition-colors duration-300 shrink-0 w-16 md:w-24
              ${hovered ? "text-primary" : "text-border"}
            `}
          >
            {String(item.index).padStart(2, "0")}
          </span>

          {/* Title block */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <p className="text-xs font-bold tracking-widest uppercase text-primary">{item.tag}</p>
              {item.popular && (
                <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 bg-primary text-primary-foreground">
                  Популярное
                </span>
              )}
            </div>
            <h3
              className={`
                font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance
                transition-colors duration-300
                ${hovered ? "text-foreground" : "text-foreground"}
              `}
            >
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
          </div>

          {/* Price + CTA */}
          <div className="flex flex-row sm:flex-col items-end gap-3 shrink-0 sm:text-right">
            <div>
              <p className="font-display text-xl md:text-2xl font-bold text-primary">
                {item.price}
              </p>
              {item.priceNote && (
                <p className="text-xs text-muted-foreground mt-0.5">{item.priceNote}</p>
              )}
            </div>
            <div
              className={`
                w-10 h-10 flex items-center justify-center border
                transition-all duration-300 shrink-0 rounded-xl
                ${hovered ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground"}
              `}
            >
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* — Expandable bottom section — */}
        <div
          className={`
            grid transition-all duration-500 ease-in-out
            ${hovered ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"}
          `}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 pb-2">
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed md:w-1/3">
                {item.description}
              </p>

              {/* Features */}
              <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Order button */}
              <div className="flex items-end shrink-0">
                <button className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-wide flex items-center gap-2 hover:opacity-90 transition-opacity group/btn whitespace-nowrap rounded-xl">
                  Заказать
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// ServicesCatalog
// ---------------------------------------------------------------------------

export function ServicesCatalog() {
  const services: ServiceItem[] = [
    {
      index: 1,
      tag: "Лендинг",
      title: "Лендинг на Waba",
      subtitle: "Разработка с нуля под ваши задачи",
      price: "100 000 ₸",
      priceNote: "фиксированная цена",
      description:
        "Одностраничный сайт, разработанный с нуля под ваши задачи. Идеально для быстрого старта и презентации продукта.",
      features: [
        "Адаптивный дизайн",
        "Оптимизация под SEO",
        "Форма обратной связи",
        "Аналитика посещений",
        "Домен и хостинг в подарок",
      ],
      image: "/landing.jpg",
    },
    {
      index: 2,
      tag: "Конструктор",
      title: "Лендинг на Tilda",
      subtitle: "Платформа Tilda с уникальным дизайном",
      price: "100 000 ₸",
      priceNote: "на платформе Tilda",
      description:
        "Профессиональный лендинг на конструкторе Tilda с уникальным дизайном и настройкой под ваш бренд.",
      features: [
        "Уникальный дизайн",
        "Настройка Zero Block",
        "Анимации и эффекты",
        "Интеграция с CRM",
        "Обучение управлению",
      ],
      image: "/tilda.jpg",
    },
    {
      index: 3,
      tag: "Лендинг + Платежи",
      title: "Tilda с эквайрингом",
      subtitle: "Лендинг с приёмом онлайн-платежей",
      price: "150 000 ₸",
      priceNote: "с интеграцией платежей",
      description:
        "Полноценный лендинг с возможностью приёма онлайн-платежей. Готовый инструмент для продаж.",
      features: [
        "Все возможности Tilda",
        "Подключение эквайринга",
        "Корзина товаров/услуг",
        "Автоматические чеки",
        "Безопасность платежей",
      ],
      image: "/payment.jpg",
      popular: true,
    },
    {
      index: 4,
      tag: "Интернет-магазин",
      title: "Магазин на InSales",
      subtitle: "Полноценная платформа для онлайн-торговли",
      price: "от 150 000 ₸",
      priceNote: "зависит от объёма",
      description:
        "Готовое решение для онлайн-торговли с широкими возможностями масштабирования и профессиональной поддержкой.",
      features: [
        "Интеграция с 1С",
        "Система скидок и промокодов",
        "Личный кабинет покупателя",
        "Админ-панель управления",
        "SEO-оптимизация",
        "Яндекс.Метрика / Google Analytics",
        "Подключение эквайринга",
        "Безопасность данных",
      ],
      image: "/ecommerce.jpg",
    },
  ]

  const included = [
    { icon: <Settings className="w-4 h-4 text-primary" />, title: "Разработка и настройка", desc: "Полный цикл от дизайна до запуска" },
    { icon: <BarChart className="w-4 h-4 text-primary" />, title: "Аналитика и SEO", desc: "Настройка метрик, поисковая оптимизация" },
    { icon: <Shield className="w-4 h-4 text-primary" />, title: "Безопасность", desc: "SSL, защита от взломов, резервирование" },
    { icon: <Zap className="w-4 h-4 text-primary" />, title: "3 месяца поддержки", desc: "Бесплатное сопровождение после запуска" },
  ]

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="catalog" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* — Page heading — */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Каталог</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-balance">
              Услуги
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Наведите на любую услугу, чтобы узнать подробности и оформить заказ.
          </p>
        </motion.div>

        {/* — Service rows — */}
        <div className="border-t border-border">
          {services.map((item, i) => (
            <ServiceRow key={item.index} item={item} delay={i * 0.07} />
          ))}
        </div>

        {/* — Included block — */}
        <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 32 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden"
>
  {/* Left: что входит */}
  <div className="bg-background p-8 md:p-12">
    <p className="text-xs font-bold tracking-widest uppercase text-primary mb-6">
      В каждый проект входит
    </p>
    <ul className="space-y-6">
      {included.map((item, i) => (
        <li key={i} className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-muted border border-border shrink-0 mt-0.5 rounded-lg">
            {item.icon}
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground mb-0.5">{item.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Right: CTA */}
  <div className="bg-primary p-8 md:p-12 flex flex-col justify-between gap-10">
    <div>
      <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/60 mb-4">
        Специальное предложение
      </p>
      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight text-balance">
        При заказе магазина — настройка рекламы в подарок
      </h3>
    </div>
    <div className="flex flex-col gap-4">
      <p className="text-sm text-primary-foreground/70 leading-relaxed">
        Не нашли подходящее решение? Разработаем индивидуальное предложение под ваши задачи.
      </p>
      <button className="self-start flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm font-bold tracking-wide hover:opacity-90 transition-opacity group rounded-xl">
        Получить консультацию
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  )
}
