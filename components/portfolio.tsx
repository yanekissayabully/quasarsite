// "use client"

// import { motion } from "framer-motion"
// import { ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function Portfolio() {
//   const projects = [
//     {
//       title: "E-commerce платформа",
//       category: "Веб-разработка",
//       description: "Полнофункциональный интернет-магазин с интеграцией платежей и CRM",
//       image: "/modern-ecommerce-website-dark-purple-theme.jpg",
//       tags: ["Next.js", "Stripe", "PostgreSQL"],
//     },
//     {
//       title: "Telegram Mini App",
//       category: "Telegram",
//       description: "Игровое приложение с системой достижений и внутренней валютой",
//       image: "/mini.jpg",
//       tags: ["React", "Telegram SDK", "Node.js"],
//     },
//     {
//       title: "AI Чат-бот",
//       category: "Боты",
//       description: "Интеллектуальный бот для автоматизации поддержки клиентов",
//       image: "/ai.jpg",
//       tags: ["Python", "OpenAI", "Telegram Bot API"],
//     },
//     {
//       title: "Корпоративный сайт",
//       category: "Веб-разработка",
//       description: "Многостраничный сайт с CMS и мультиязычностью",
//       image: "/banner.png",
//       tags: ["Next.js", "Sanity CMS", "i18n"],
//     },
//     {
//       title: "Онлайн магазин в Telegram",
//       category: "Telegram Mini App",
//       description: "Приложение для покупок с каталогом товаров и интеграцией платежей",
//       image: "/mag.jpg",
//       tags: ["React", "Firebase", "Telegram Payments"],
//     },
//     {
//       title: "Маркетинг бот",
//       category: "Боты",
//       description: "Бот для рассылок и аналитики с интеграцией CRM",
//       image: "/2.jpg",
//       tags: ["Node.js", "MongoDB", "Analytics"],
//     },
//   ]

//   return (
//     <section id="portfolio" className="py-24 relative bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Наши <span className="text-primary">работы</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Примеры успешно реализованных проектов для различных отраслей
//           </p>
//         </motion.div>

//         {/* Десктопная версия - обычная сетка */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
//             >
//               <div className="relative overflow-hidden aspect-video">
//                 <img
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
//                   <Button size="sm" className="bg-primary hover:bg-primary/90">
//                     Подробнее
//                     <ExternalLink className="ml-2 w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="text-sm text-primary mb-2">{project.category}</div>
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Мобильная версия - горизонтальный скролл */}
//         <div className="md:hidden">
//           <div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 flex-shrink-0 w-[85vw] mr-6 snap-always snap-center last:mr-0"
//               >
//                 <div className="relative overflow-hidden aspect-video">
//                   <img
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
//                     <Button size="sm" className="bg-primary hover:bg-primary/90">
//                       Подробнее
//                       <ExternalLink className="ml-2 w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="text-sm text-primary mb-2">{project.category}</div>
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useRef, useEffect } from "react"

export function Portfolio() {
  const projects = [
    {
      title: "Leka Beauty",
      category: "E-commerce",
      description: "Полнофункциональный интернет-магазин с интеграцией платежей и CRM",
      image: "/leka.png",
      tags: ["Интернет-магазин", "Эквайринг", "Админ панель"],
    },
    {
      title: "TM mini app",
      category: "Telegram mini app",
      description: "Игровое приложение с системой достижений и внутренней валютой",
      image: "/tmmini.png",
      tags: ["Валюта", "Интернет-магазин", "HUB сообщество"],
    },
    {
      title: "TM Franchise",
      category: "Landing Page",
      description: "Ознакомительная страница о структуре франшизы",
      image: "/tmmm.png",
      tags: ["3D карточка", "SEO", "CRM интеграция"],
    },
    {
      title: "Suleon Auto",
      category: "E-commerce",
      description: "Многостраничный сайт с CMS и мультиязычностью",
      image: "/banner.png",
      tags: ["Интернет-магазин", "Эквайринг", "Админ панель"],
    },
    {
      title: "Qazaq Soul",
      category: "E-commerce",
      description: "Приложение для покупок с каталогом товаров и интеграцией платежей",
      image: "/qs.png",
      tags: ["Интернет-магазин", "Эквайринг", "Админ панель"],
    },
    {
      title: "Compofff",
      category: "Landing Page",
      description: "Сайт для рассылок и аналитики с интеграцией CRM",
      image: "/comp.png",
      tags: ["3D карточка", "Админ панель", "CRM интеграция"],
    },
  ]

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Optional: Add scroll position indicator
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const updateActiveDot = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = container.querySelector('.snap-card')?.clientWidth || 0
      const gap = 20 // gap-5 = 1.25rem = 20px
      const activeIndex = Math.round(scrollLeft / (cardWidth + gap))
      
      // Update dots styling if needed
      const dots = document.querySelectorAll('.scroll-dot')
      dots.forEach((dot, i) => {
        if (i === activeIndex) {
          dot.classList.add('bg-primary')
          dot.classList.remove('bg-muted-foreground/30')
        } else {
          dot.classList.remove('bg-primary')
          dot.classList.add('bg-muted-foreground/30')
        }
      })
    }

    container.addEventListener('scroll', updateActiveDot)
    updateActiveDot()
    
    return () => container.removeEventListener('scroll', updateActiveDot)
  }, [])

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Портфолио
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none text-balance">
              Наши <span className="text-primary">работы</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Примеры успешно реализованных проектов для различных отраслей
          </p>
        </motion.div>

        {/* — Desktop grid (hidden on mobile) — */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover button */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-primary text-primary-foreground text-sm font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity rounded-xl">
                    Подробнее
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* — Mobile horizontal scroll with centering — */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-5" style={{ scrollSnapType: 'x mandatory' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="snap-card group relative bg-card border border-border rounded-2xl overflow-hidden flex-shrink-0 w-[85vw] max-w-[320px] snap-center"
                >
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="85vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <button className="w-full py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity rounded-xl">
                      Подробнее
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator dots */}
          <div className="flex justify-center mt-4 gap-1.5">
            {projects.map((_, i) => (
              <div
                key={i}
                className="scroll-dot w-1.5 h-1.5 rounded-full transition-all duration-300 bg-muted-foreground/30"
                style={i === 0 ? { backgroundColor: 'hsl(var(--primary))' } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}