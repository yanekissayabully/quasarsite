// "use client"

// import { motion, useInView } from "framer-motion"
// import {
//   Zap,
//   Shield,
//   BarChart,
//   Settings,
//   ArrowUpRight,
//   CheckCheck,
// } from "lucide-react"
// import Image from "next/image"
// import { useRef, useState } from "react"

// // ---------------------------------------------------------------------------
// // Types
// // ---------------------------------------------------------------------------

// interface ServiceItem {
//   index: number
//   title: string
//   subtitle: string
//   price: string
//   priceNote?: string
//   description: string
//   features: string[]
//   image: string
//   tag: string
//   popular?: boolean
// }

// // ---------------------------------------------------------------------------
// // ServiceRow — full-width row with image reveal on hover
// // ---------------------------------------------------------------------------

// function ServiceRow({ item, delay = 0 }: { item: ServiceItem; delay?: number }) {
//   const [hovered, setHovered] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)
//   const inView = useInView(ref, { once: true, margin: "-80px" })

//   return (
//     <motion.div
//       id="services"
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group relative border-b border-border overflow-hidden cursor-pointer"
//     >
//       {/* Background image — slides in on hover */}
//       <div
//         className={`
//           absolute inset-0 transition-opacity duration-700
//           ${hovered ? "opacity-100" : "opacity-0"}
//         `}
//       >
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover"
//           sizes="100vw"
//         />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-background/85" />
//       </div>

//       {/* Top accent line */}
//       <div
//         className={`absolute top-0 left-0 h-px bg-primary transition-all duration-500 ${hovered ? "w-full" : "w-0"}`}
//       />

//       <div className="relative z-10 px-6 md:px-10 lg:px-16 py-8 md:py-10">
//         {/* — Top row: index + title + price — */}
//         <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
//           {/* Index number */}
//           <span
//             className={`
//               font-display text-5xl md:text-7xl font-bold leading-none
//               transition-colors duration-300 shrink-0 w-16 md:w-24
//               ${hovered ? "text-primary" : "text-border"}
//             `}
//           >
//             {String(item.index).padStart(2, "0")}
//           </span>

//           {/* Title block */}
//           <div className="flex-1 min-w-0">
//             <div className="flex flex-wrap items-center gap-3 mb-1">
//               <p className="text-xs font-bold tracking-widest uppercase text-primary">{item.tag}</p>
//               {item.popular && (
//                 <span className="text-xs font-bold tracking-widest uppercase px-2 py-0.5 bg-primary text-primary-foreground">
//                   Популярное
//                 </span>
//               )}
//             </div>
//             <h3
//               className={`
//                 font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance
//                 transition-colors duration-300
//                 ${hovered ? "text-foreground" : "text-foreground"}
//               `}
//             >
//               {item.title}
//             </h3>
//             <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
//           </div>

//           {/* Price + CTA */}
//           <div className="flex flex-row sm:flex-col items-end gap-3 shrink-0 sm:text-right">
//             <div>
//               <p className="font-display text-xl md:text-2xl font-bold text-primary">
//                 {item.price}
//               </p>
//               {item.priceNote && (
//                 <p className="text-xs text-muted-foreground mt-0.5">{item.priceNote}</p>
//               )}
//             </div>
//             <div
//               className={`
//                 w-10 h-10 flex items-center justify-center border
//                 transition-all duration-300 shrink-0 rounded-xl
//                 ${hovered ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground"}
//               `}
//             >
//               <ArrowUpRight className="w-4 h-4" />
//             </div>
//           </div>
//         </div>

//         {/* — Expandable bottom section — */}
//         <div
//           className={`
//             grid transition-all duration-500 ease-in-out
//             ${hovered ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"}
//           `}
//         >
//           <div className="overflow-hidden">
//             <div className="flex flex-col md:flex-row gap-8 pb-2">
//               {/* Description */}
//               <p className="text-sm text-muted-foreground leading-relaxed md:w-1/3">
//                 {item.description}
//               </p>

//               {/* Features */}
//               <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
//                 {item.features.map((f, i) => (
//                   <li key={i} className="flex items-start gap-2.5 text-sm">
//                     <CheckCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
//                     <span className="text-muted-foreground">{f}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Order button */}
//               <div className="flex items-end shrink-0">
// <a
//   href="#contact"
//   className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-wide flex items-center gap-2 hover:opacity-90 transition-opacity group/btn whitespace-nowrap rounded-xl"
// >
//   Заказать
//   <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
// </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// // ---------------------------------------------------------------------------
// // ServicesCatalog
// // ---------------------------------------------------------------------------

// export function ServicesCatalog() {
//   const services: ServiceItem[] = [
//     {
//       index: 1,
//       tag: "Лендинг",
//       title: "Лендинг самопис",
//       subtitle: "Разработка с нуля под ваши задачи",
//       price: "100 000 ₸",
//       priceNote: "фиксированная цена",
//       description:
//         "Одностраничный сайт, разработанный с нуля под ваши задачи. Идеально для быстрого старта и презентации продукта.",
//       features: [
//         "Адаптивный дизайн",
//         "Оптимизация под SEO",
//         "Форма обратной связи",
//         "Аналитика посещений",
//         "Домен и хостинг в подарок",
//       ],
//       image: "/landing.jpg",
//     },
//     {
//       index: 2,
//       tag: "Конструктор",
//       title: "Лендинг на Tilda",
//       subtitle: "Платформа Tilda с уникальным дизайном",
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
//       image: "/tilda.jpg",
//     },
//     {
//       index: 3,
//       tag: "Лендинг + Платежи",
//       title: "Tilda с эквайрингом",
//       subtitle: "Лендинг с приёмом онлайн-платежей",
//       price: "150 000 ₸",
//       priceNote: "с интеграцией платежей",
//       description:
//         "Полноценный лендинг с возможностью приёма онлайн-платежей. Готовый инструмент для продаж.",
//       features: [
//         "Все возможности Tilda",
//         "Подключение эквайринга",
//         "Корзина товаров/услуг",
//         "Автоматические чеки",
//         "Безопасность платежей",
//       ],
//       image: "/payment.jpg",
//       popular: true,
//     },
//     {
//       index: 4,
//       tag: "Интернет-магазин",
//       title: "Магазин на InSales",
//       subtitle: "Полноценная платформа для онлайн-торговли",
//       price: "от 150 000 ₸",
//       priceNote: "зависит от объёма",
//       description:
//         "Готовое решение для онлайн-торговли с широкими возможностями масштабирования и профессиональной поддержкой.",
//       features: [
//         "Интеграция с 1С",
//         "Система скидок и промокодов",
//         "Личный кабинет покупателя",
//         "Админ-панель управления",
//         "SEO-оптимизация",
//         "Яндекс.Метрика / Google Analytics",
//         "Подключение эквайринга",
//         "Безопасность данных",
//       ],
//       image: "/ecommerce.jpg",
//     },
//   ]

//   const included = [
//     { icon: <Settings className="w-4 h-4 text-primary" />, title: "Разработка и настройка", desc: "Полный цикл от дизайна до запуска" },
//     { icon: <BarChart className="w-4 h-4 text-primary" />, title: "Аналитика и SEO", desc: "Настройка метрик, поисковая оптимизация" },
//     { icon: <Shield className="w-4 h-4 text-primary" />, title: "Безопасность", desc: "SSL, защита от взломов, резервирование" },
//     { icon: <Zap className="w-4 h-4 text-primary" />, title: "3 месяца поддержки", desc: "Бесплатное сопровождение после запуска" },
//   ]

//   const ref = useRef<HTMLDivElement>(null)
//   const inView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="catalog" className="py-20 md:py-28">
//       <div className="container mx-auto px-4 max-w-7xl">

//         {/* — Page heading — */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
//         >
//           <div>
//             <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Каталог</p>
//             <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-balance">
//               Услуги
//             </h2>
//           </div>
//           <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
//             Наведите на любую услугу, чтобы узнать подробности и оформить заказ.
//           </p>
//         </motion.div>

//         {/* — Service rows — */}
//         <div className="border-t border-border">
//           {services.map((item, i) => (
//             <ServiceRow key={item.index} item={item} delay={i * 0.07} />
//           ))}
//         </div>

//         {/* — Included block — */}
//         <motion.div
//   ref={ref}
//   initial={{ opacity: 0, y: 32 }}
//   animate={inView ? { opacity: 1, y: 0 } : {}}
//   transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//   className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden"
// >
//   {/* Left: что входит */}
//   <div className="bg-background p-8 md:p-12">
//     <p className="text-xs font-bold tracking-widest uppercase text-primary mb-6">
//       В каждый проект входит
//     </p>
//     <ul className="space-y-6">
//       {included.map((item, i) => (
//         <li key={i} className="flex items-start gap-4">
//           <div className="w-8 h-8 flex items-center justify-center bg-muted border border-border shrink-0 mt-0.5 rounded-lg">
//             {item.icon}
//           </div>
//           <div>
//             <p className="font-semibold text-sm text-foreground mb-0.5">{item.title}</p>
//             <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>

//   {/* Right: CTA */}
//   <div className="bg-primary p-8 md:p-12 flex flex-col justify-between gap-10">
//     <div>
//       <p className="text-xs font-bold tracking-widest uppercase text-primary-foreground/60 mb-4">
//         Специальное предложение
//       </p>
//       <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight text-balance">
//         При заказе магазина — настройка рекламы в подарок
//       </h3>
//     </div>
//     <div className="flex flex-col gap-4">
//       <p className="text-sm text-primary-foreground/70 leading-relaxed">
//         Не нашли подходящее решение? Разработаем индивидуальное предложение под ваши задачи.
//       </p>
// <a
//   href="#contact"
//   className="self-start flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm font-bold tracking-wide hover:opacity-90 transition-opacity group rounded-xl"
// >
//   Получить консультацию
//   <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
// </a>
//     </div>
//   </div>
// </motion.div>

//       </div>
//     </section>
//   )
// }



"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import {
  Zap,
  Shield,
  BarChart,
  Settings,
  ArrowUpRight,
  CheckCheck,
  Globe,
  Bot,
  Smartphone,
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

type TabKey = "sites" | "bots" | "apps"

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
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold tracking-wide flex items-center gap-2 hover:opacity-90 transition-opacity group/btn whitespace-nowrap rounded-xl"
                >
                  Заказать
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Tab button
// ---------------------------------------------------------------------------

function TabButton({
  active,
  onClick,
  icon,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
  count: number
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center gap-2.5 px-5 py-3 text-sm font-bold tracking-wide
        transition-all duration-300 rounded-xl border
        ${
          active
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
        }
      `}
    >
      {icon}
      <span>{label}</span>
      <span
        className={`
          text-xs font-bold px-1.5 py-0.5 rounded-md
          ${active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"}
        `}
      >
        {count}
      </span>
    </button>
  )
}

// ---------------------------------------------------------------------------
// ServicesCatalog
// ---------------------------------------------------------------------------

export function ServicesCatalog() {
  const [activeTab, setActiveTab] = useState<TabKey>("sites")

  const allServices: Record<TabKey, ServiceItem[]> = {
    sites: [
      {
        index: 1,
        tag: "Лендинг",
        title: "Лендинг самопис",
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
        title: "Магазин на InSales/WP/Bitrix",
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
    ],
    bots: [
      {
        index: 1,
        tag: "Telegram",
        title: "Telegram-бот",
        subtitle: "Автоматизация коммуникации в Telegram",
        price: "80 000 ₸",
        priceNote: "базовый функционал",
        description:
          "Умный бот для Telegram, который берёт на себя рутинные задачи: ответы на вопросы, приём заявок, уведомления.",
        features: [
          "Команды и кнопки",
          "Приём заявок и данных",
          "Рассылки по базе",
          "Интеграция с вашей CRM",
          "Статистика и логи",
        ],
        image: "/landing.jpg",
        popular: true,
      },
      {
        index: 2,
        tag: "WhatsApp / Instagram",
        title: "Чат-бот для мессенджеров",
        subtitle: "Авто-ответы и воронки продаж",
        price: "100 000 ₸",
        priceNote: "через сервис интеграции",
        description:
          "Автоматизация общения с клиентами в WhatsApp или Instagram. Ведёт пользователя по воронке и передаёт заявки менеджеру.",
        features: [
          "Воронка из сценариев",
          "Авто-ответы 24/7",
          "Квалификация лидов",
          "Переадресация на менеджера",
          "Интеграция с amoCRM",
        ],
        image: "/tilda.jpg",
      },
      {
        index: 3,
        tag: "AI-бот",
        title: "AI-ассистент на GPT",
        subtitle: "Умный бот с искусственным интеллектом",
        price: "от 150 000 ₸",
        priceNote: "зависит от сложности",
        description:
          "Бот на базе ChatGPT, обученный на ваших материалах. Отвечает как живой менеджер, знает ваш продукт.",
        features: [
          "Обучение на ваших данных",
          "Контекстные диалоги",
          "Поддержка на любой платформе",
          "Передача сложных вопросов",
          "Постоянное улучшение",
        ],
        image: "/payment.jpg",
      },
    ],
    apps: [
      {
        index: 1,
        tag: "Веб-приложение",
        title: "Web App / PWA",
        subtitle: "Работает как приложение прямо в браузере",
        price: "от 130 000 ₸",
        priceNote: "без магазинов приложений",
        description:
          "Progressive Web App — устанавливается на телефон без App Store. Быстрее и дешевле нативного, но не уступает по функциям.",
        features: [
          "Оффлайн-режим",
          "Установка на домашний экран",
          "Push-уведомления",
          "Адаптивный дизайн",
          "Без комиссии App Store",
        ],
        image: "/landing.jpg",
      },
      {
  index: 2,
  tag: "Веб-приложение",
  title: "Telegram Mini App",
  subtitle: "Полноценное приложение внутри Telegram",
  price: "от 150 000 ₸",
  priceNote: "без скрытых платежей",
  description:
    "Telegram Mini App — это современное веб-приложение, которое запускается прямо внутри Telegram. Пользователю не нужно ничего скачивать: всё работает мгновенно, быстро и удобно.",
  features: [
    "Запуск без установки",
    "Интеграция с Telegram (авторизация, профиль)",
    "Push-уведомления через бота",
    "Адаптивный интерфейс под любые устройства",
    "Экономия на App Store и Google Play",
  ],
  image: "/landing.jpg",
},
{
        index: 3,
        tag: "SaaS / Платформа",
        title: "Веб-сервис под ключ",
        subtitle: "Личные кабинеты, подписки, аналитика",
        price: "от 500 000 ₸",
        priceNote: "индивидуальный расчёт",
        description:
          "Полноценный веб-сервис с авторизацией, ролями пользователей, платёжной системой и административной панелью.",
        features: [
          "Авторизация и роли",
          "Подписки и оплата",
          "Личный кабинет пользователя",
          "Админ-панель",
          "API и интеграции",
          "Масштабируемая архитектура",
        ],
        image: "/tilda.jpg",
      },
      {
        index: 4,
        tag: "iOS / Android",
        title: "Мобильное приложение",
        subtitle: "Кроссплатформенная разработка на React Native",
        price: "от 700 000 ₸",
        priceNote: "зависит от функционала",
        description:
          "Нативное мобильное приложение для iOS и Android. Разрабатываем под ключ: от прототипа до публикации в сторах.",
        features: [
          "iOS + Android с одной кодовой базой",
          "UI/UX дизайн",
          "Push-уведомления",
          "Авторизация и профиль",
          "Публикация в App Store и Google Play",
          "3 месяца поддержки",
        ],
        image: "/ecommerce.jpg",
        popular: true,
      },
      
    ],
  }

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "sites", label: "Сайты", icon: <Globe className="w-4 h-4" /> },
    { key: "bots", label: "Боты", icon: <Bot className="w-4 h-4" /> },
    { key: "apps", label: "Приложения", icon: <Smartphone className="w-4 h-4" /> },
  ]

  const included = [
    { icon: <Settings className="w-4 h-4 text-primary" />, title: "Разработка и настройка", desc: "Полный цикл от дизайна до запуска" },
    { icon: <BarChart className="w-4 h-4 text-primary" />, title: "Аналитика и SEO", desc: "Настройка метрик, поисковая оптимизация" },
    { icon: <Shield className="w-4 h-4 text-primary" />, title: "Безопасность", desc: "SSL, защита от взломов, резервирование" },
    { icon: <Zap className="w-4 h-4 text-primary" />, title: "3 месяца поддержки", desc: "Бесплатное сопровождение после запуска" },
  ]

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const currentServices = allServices[activeTab]

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

        {/* — Tabs — */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              active={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              icon={tab.icon}
              label={tab.label}
              count={allServices[tab.key].length}
            />
          ))}
        </motion.div>

        {/* — Service rows with AnimatePresence — */}
        <div className="border-t border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentServices.map((item, i) => (
                <ServiceRow key={`${activeTab}-${item.index}`} item={item} delay={i * 0.07} />
              ))}
            </motion.div>
          </AnimatePresence>
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
              <a
                href="#contact"
                className="self-start flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary text-sm font-bold tracking-wide hover:opacity-90 transition-opacity group rounded-xl"
              >
                Получить консультацию
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
