// "use client"

// import { motion } from "framer-motion"
// import { Code, Smartphone, Bot, Palette, Zap, Shield } from "lucide-react"

// export function Services() {
//   const services = [
//     {
//       icon: Code,
//       title: "Веб-разработка",
//       description:
//         "Создание современных, быстрых и адаптивных веб-сайтов на Next.js, React и других передовых технологиях.",
//       features: ["Landing Pages", "Корпоративные сайты", "E-commerce", "Web-приложения"],
//     },
//     {
//       icon: Smartphone,
//       title: "Telegram Mini Apps",
//       description: "Разработка мини-приложений для Telegram с интеграцией платежей, геймификацией и уникальным UX.",
//       features: ["Игры", "E-commerce", "Сервисы", "Интеграции"],
//     },
//     {
//       icon: Bot,
//       title: "Telegram боты",
//       description: "Автоматизация бизнес-процессов через ботов: от простых чат-ботов до сложных систем с AI.",
//       features: ["Чат-боты", "AI-ассистенты", "CRM интеграции", "Автоматизация"],
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Дизайн",
//       description:
//         "Создание интуитивных интерфейсов, которые пользователи любят. Современный дизайн с фокусом на конверсию.",
//       features: ["Прототипирование", "Дизайн-системы", "Брендинг", "Анимации"],
//     },
//     {
//       icon: Zap,
//       title: "Оптимизация",
//       description:
//         "Повышение производительности и скорости загрузки. SEO-оптимизация для лучшей видимости в поисковиках.",
//       features: ["Performance", "SEO", "Core Web Vitals", "Аналитика"],
//     },
//     {
//       icon: Shield,
//       title: "Поддержка",
//       description:
//         "Техническая поддержка, обновления и развитие проектов. Гарантируем стабильную работу ваших решений.",
//       features: ["Мониторинг", "Обновления", "Консультации", "Доработки"],
//     },
//   ]

//   return (
//     <section id="services" className="py-24 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Наши <span className="text-primary">услуги</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Полный спектр услуг для создания и развития вашего цифрового присутствия
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
//             >
//               <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
//                 <service.icon className="w-7 h-7 text-primary" />
//               </div>
//               <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//               <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
//               <ul className="space-y-2">
//                 {service.features.map((feature) => (
//                   <li key={feature} className="flex items-center text-sm text-muted-foreground">
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




// "use client"

// import { useRef, useEffect, useState, useCallback } from 'react'
// import { motion } from "framer-motion"
// import { Code, Smartphone, Bot, Palette, Zap, Shield } from "lucide-react"
// import { gsap } from "gsap"

// const DEFAULT_PARTICLE_COUNT = 12
// const DEFAULT_SPOTLIGHT_RADIUS = 300
// const DEFAULT_GLOW_COLOR = '132, 0, 255'
// const MOBILE_BREAKPOINT = 768

// const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
//   const el = document.createElement('div')
//   el.className = 'particle'
//   el.style.cssText = `
//     position: absolute;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background: rgba(${color}, 1);
//     box-shadow: 0 0 6px rgba(${color}, 0.6);
//     pointer-events: none;
//     z-index: 100;
//     left: ${x}px;
//     top: ${y}px;
//   `
//   return el
// }

// const calculateSpotlightValues = (radius: number) => ({
//   proximity: radius * 0.5,
//   fadeDistance: radius * 0.75
// })

// const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
//   const rect = card.getBoundingClientRect()
//   const relativeX = ((mouseX - rect.left) / rect.width) * 100
//   const relativeY = ((mouseY - rect.top) / rect.height) * 100

//   card.style.setProperty('--glow-x', `${relativeX}%`)
//   card.style.setProperty('--glow-y', `${relativeY}%`)
//   card.style.setProperty('--glow-intensity', glow.toString())
//   card.style.setProperty('--glow-radius', `${radius}px`)
// }

// const ParticleCard: React.FC<{
//   children: React.ReactNode
//   className?: string
//   disableAnimations?: boolean
//   style?: React.CSSProperties
//   particleCount?: number
//   glowColor?: string
//   enableTilt?: boolean
//   clickEffect?: boolean
//   enableMagnetism?: boolean
// }> = ({
//   children,
//   className = '',
//   disableAnimations = false,
//   style,
//   particleCount = DEFAULT_PARTICLE_COUNT,
//   glowColor = DEFAULT_GLOW_COLOR,
//   enableTilt = true,
//   clickEffect = false,
//   enableMagnetism = false
// }) => {
//   const cardRef = useRef<HTMLDivElement>(null)
//   const particlesRef = useRef<HTMLDivElement[]>([])
//   const timeoutsRef = useRef<NodeJS.Timeout[]>([])
//   const isHoveredRef = useRef(false)
//   const memoizedParticles = useRef<HTMLDivElement[]>([])
//   const particlesInitialized = useRef(false)
//   const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null)

//   const initializeParticles = useCallback(() => {
//     if (particlesInitialized.current || !cardRef.current) return

//     const { width, height } = cardRef.current.getBoundingClientRect()
//     memoizedParticles.current = Array.from({ length: particleCount }, () =>
//       createParticleElement(Math.random() * width, Math.random() * height, glowColor)
//     )
//     particlesInitialized.current = true
//   }, [particleCount, glowColor])

//   const clearAllParticles = useCallback(() => {
//     timeoutsRef.current.forEach(clearTimeout)
//     timeoutsRef.current = []
//     magnetismAnimationRef.current?.kill()

//     particlesRef.current.forEach(particle => {
//       gsap.to(particle, {
//         scale: 0,
//         opacity: 0,
//         duration: 0.3,
//         ease: 'back.in(1.7)',
//         onComplete: () => {
//           particle.parentNode?.removeChild(particle)
//         }
//       })
//     })
//     particlesRef.current = []
//   }, [])

//   const animateParticles = useCallback(() => {
//     if (!cardRef.current || !isHoveredRef.current) return

//     if (!particlesInitialized.current) {
//       initializeParticles()
//     }

//     memoizedParticles.current.forEach((particle, index) => {
//       const timeoutId = setTimeout(() => {
//         if (!isHoveredRef.current || !cardRef.current) return

//         const clone = particle.cloneNode(true) as HTMLDivElement
//         cardRef.current.appendChild(clone)
//         particlesRef.current.push(clone)

//         gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' })

//         gsap.to(clone, {
//           x: (Math.random() - 0.5) * 100,
//           y: (Math.random() - 0.5) * 100,
//           rotation: Math.random() * 360,
//           duration: 2 + Math.random() * 2,
//           ease: 'none',
//           repeat: -1,
//           yoyo: true
//         })

//         gsap.to(clone, {
//           opacity: 0.3,
//           duration: 1.5,
//           ease: 'power2.inOut',
//           repeat: -1,
//           yoyo: true
//         })
//       }, index * 100)

//       timeoutsRef.current.push(timeoutId)
//     })
//   }, [initializeParticles])

//   useEffect(() => {
//     if (disableAnimations || !cardRef.current) return

//     const element = cardRef.current

//     const handleMouseEnter = () => {
//       isHoveredRef.current = true
//       animateParticles()

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 5,
//           rotateY: 5,
//           duration: 0.3,
//           ease: 'power2.out',
//           transformPerspective: 1000
//         })
//       }
//     }

//     const handleMouseLeave = () => {
//       isHoveredRef.current = false
//       clearAllParticles()

//       if (enableTilt) {
//         gsap.to(element, {
//           rotateX: 0,
//           rotateY: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         })
//       }

//       if (enableMagnetism) {
//         gsap.to(element, {
//           x: 0,
//           y: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         })
//       }
//     }

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!enableTilt && !enableMagnetism) return

//       const rect = element.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top
//       const centerX = rect.width / 2
//       const centerY = rect.height / 2

//       if (enableTilt) {
//         const rotateX = ((y - centerY) / centerY) * -10
//         const rotateY = ((x - centerX) / centerX) * 10

//         gsap.to(element, {
//           rotateX,
//           rotateY,
//           duration: 0.1,
//           ease: 'power2.out',
//           transformPerspective: 1000
//         })
//       }

//       if (enableMagnetism) {
//         const magnetX = (x - centerX) * 0.05
//         const magnetY = (y - centerY) * 0.05

//         magnetismAnimationRef.current = gsap.to(element, {
//           x: magnetX,
//           y: magnetY,
//           duration: 0.3,
//           ease: 'power2.out'
//         })
//       }
//     }

//     const handleClick = (e: MouseEvent) => {
//       if (!clickEffect) return

//       const rect = element.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top

//       const maxDistance = Math.max(
//         Math.hypot(x, y),
//         Math.hypot(x - rect.width, y),
//         Math.hypot(x, y - rect.height),
//         Math.hypot(x - rect.width, y - rect.height)
//       )

//       const ripple = document.createElement('div')
//       ripple.style.cssText = `
//         position: absolute;
//         width: ${maxDistance * 2}px;
//         height: ${maxDistance * 2}px;
//         border-radius: 50%;
//         background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
//         left: ${x - maxDistance}px;
//         top: ${y - maxDistance}px;
//         pointer-events: none;
//         z-index: 1000;
//       `

//       element.appendChild(ripple)

//       gsap.fromTo(
//         ripple,
//         {
//           scale: 0,
//           opacity: 1
//         },
//         {
//           scale: 1,
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//           onComplete: () => ripple.remove()
//         }
//       )
//     }

//     element.addEventListener('mouseenter', handleMouseEnter)
//     element.addEventListener('mouseleave', handleMouseLeave)
//     element.addEventListener('mousemove', handleMouseMove)
//     element.addEventListener('click', handleClick)

//     return () => {
//       isHoveredRef.current = false
//       element.removeEventListener('mouseenter', handleMouseEnter)
//       element.removeEventListener('mouseleave', handleMouseLeave)
//       element.removeEventListener('mousemove', handleMouseMove)
//       element.removeEventListener('click', handleClick)
//       clearAllParticles()
//     }
//   }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor])

//   return (
//     <div
//       ref={cardRef}
//       className={`${className} relative overflow-hidden`}
//       style={{ ...style, position: 'relative', overflow: 'hidden' }}
//     >
//       {children}
//     </div>
//   )
// }

// const GlobalSpotlight: React.FC<{
//   gridRef: React.RefObject<HTMLDivElement | null>
//   disableAnimations?: boolean
//   enabled?: boolean
//   spotlightRadius?: number
//   glowColor?: string
// }> = ({
//   gridRef,
//   disableAnimations = false,
//   enabled = true,
//   spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
//   glowColor = DEFAULT_GLOW_COLOR
// }) => {
//   const spotlightRef = useRef<HTMLDivElement | null>(null)
//   const isInsideSection = useRef(false)

//   useEffect(() => {
//     if (disableAnimations || !gridRef?.current || !enabled) return

//     const spotlight = document.createElement('div')
//     spotlight.className = 'global-spotlight'
//     spotlight.style.cssText = `
//       position: fixed;
//       width: 800px;
//       height: 800px;
//       border-radius: 50%;
//       pointer-events: none;
//       background: radial-gradient(circle,
//         rgba(${glowColor}, 0.15) 0%,
//         rgba(${glowColor}, 0.08) 15%,
//         rgba(${glowColor}, 0.04) 25%,
//         rgba(${glowColor}, 0.02) 40%,
//         rgba(${glowColor}, 0.01) 65%,
//         transparent 70%
//       );
//       z-index: 200;
//       opacity: 0;
//       transform: translate(-50%, -50%);
//       mix-blend-mode: screen;
//     `
//     document.body.appendChild(spotlight)
//     spotlightRef.current = spotlight

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!spotlightRef.current || !gridRef.current) return

//       const section = gridRef.current.closest('.services-section')
//       const rect = section?.getBoundingClientRect()
//       const mouseInside =
//         rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

//       isInsideSection.current = mouseInside || false
//       const cards = gridRef.current.querySelectorAll('.service-card')

//       if (!mouseInside) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         })
//         cards.forEach(card => {
//           (card as HTMLElement).style.setProperty('--glow-intensity', '0')
//         })
//         return
//       }

//       const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius)
//       let minDistance = Infinity

//       cards.forEach(card => {
//         const cardElement = card as HTMLElement
//         const cardRect = cardElement.getBoundingClientRect()
//         const centerX = cardRect.left + cardRect.width / 2
//         const centerY = cardRect.top + cardRect.height / 2
//         const distance =
//           Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2
//         const effectiveDistance = Math.max(0, distance)

//         minDistance = Math.min(minDistance, effectiveDistance)

//         let glowIntensity = 0
//         if (effectiveDistance <= proximity) {
//           glowIntensity = 1
//         } else if (effectiveDistance <= fadeDistance) {
//           glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity)
//         }

//         updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius)
//       })

//       gsap.to(spotlightRef.current, {
//         left: e.clientX,
//         top: e.clientY,
//         duration: 0.1,
//         ease: 'power2.out'
//       })

//       const targetOpacity =
//         minDistance <= proximity
//           ? 0.8
//           : minDistance <= fadeDistance
//             ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
//             : 0

//       gsap.to(spotlightRef.current, {
//         opacity: targetOpacity,
//         duration: targetOpacity > 0 ? 0.2 : 0.5,
//         ease: 'power2.out'
//       })
//     }

//     const handleMouseLeave = () => {
//       isInsideSection.current = false
//       gridRef.current?.querySelectorAll('.service-card').forEach(card => {
//         (card as HTMLElement).style.setProperty('--glow-intensity', '0')
//       })
//       if (spotlightRef.current) {
//         gsap.to(spotlightRef.current, {
//           opacity: 0,
//           duration: 0.3,
//           ease: 'power2.out'
//         })
//       }
//     }

//     document.addEventListener('mousemove', handleMouseMove)
//     document.addEventListener('mouseleave', handleMouseLeave)

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove)
//       document.removeEventListener('mouseleave', handleMouseLeave)
//       spotlightRef.current?.parentNode?.removeChild(spotlightRef.current)
//     }
//   }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor])

//   return null
// }

// const useMobileDetection = () => {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)

//     checkMobile()
//     window.addEventListener('resize', checkMobile)

//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   return isMobile
// }

// export function Services() {
//   const gridRef = useRef<HTMLDivElement>(null)
//   const isMobile = useMobileDetection()
//   const shouldDisableAnimations = isMobile

//   const services = [
//     {
//       icon: Code,
//       title: "Веб-разработка",
//       description: "Создание современных, быстрых и адаптивных веб-сайтов на Next.js, React и других передовых технологиях.",
//       features: ["Landing Pages", "Корпоративные сайты", "E-commerce", "Web-приложения"],
//     },
//     {
//       icon: Smartphone,
//       title: "Telegram Mini Apps",
//       description: "Разработка мини-приложений для Telegram с интеграцией платежей, геймификацией и уникальным UX.",
//       features: ["Игры", "E-commerce", "Сервисы", "Интеграции"],
//     },
//     {
//       icon: Bot,
//       title: "Telegram боты",
//       description: "Автоматизация бизнес-процессов через ботов: от простых чат-ботов до сложных систем с AI.",
//       features: ["Чат-боты", "AI-ассистенты", "CRM интеграции", "Автоматизация"],
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Дизайн",
//       description: "Создание интуитивных интерфейсов, которые пользователи любят. Современный дизайн с фокусом на конверсию.",
//       features: ["Прототипирование", "Дизайн-системы", "Брендинг", "Анимации"],
//     },
//     {
//       icon: Zap,
//       title: "Оптимизация",
//       description: "Повышение производительности и скорости загрузки. SEO-оптимизация для лучшей видимости в поисковиках.",
//       features: ["Performance", "SEO", "Core Web Vitals", "Аналитика"],
//     },
//     {
//       icon: Shield,
//       title: "Поддержка",
//       description: "Техническая поддержка, обновления и развитие проектов. Гарантируем стабильную работу ваших решений.",
//       features: ["Мониторинг", "Обновления", "Консультации", "Доработки"],
//     },
//   ]

//   return (
//     <>
//       <style>
//         {`
//           .services-section {
//             --glow-x: 50%;
//             --glow-y: 50%;
//             --glow-intensity: 0;
//             --glow-radius: 200px;
//             --glow-color: ${DEFAULT_GLOW_COLOR};
//             --border-color: #392e4e;
//             --background-dark: #060010;
//             --white: hsl(0, 0%, 100%);
//             --purple-primary: rgba(132, 0, 255, 1);
//             --purple-glow: rgba(132, 0, 255, 0.2);
//             --purple-border: rgba(132, 0, 255, 0.8);
//           }
          
//           .service-card--border-glow::after {
//             content: '';
//             position: absolute;
//             inset: 0;
//             padding: 6px;
//             background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
//                 rgba(${DEFAULT_GLOW_COLOR}, calc(var(--glow-intensity) * 0.8)) 0%,
//                 rgba(${DEFAULT_GLOW_COLOR}, calc(var(--glow-intensity) * 0.4)) 30%,
//                 transparent 60%);
//             border-radius: inherit;
//             mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             mask-composite: subtract;
//             -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//             -webkit-mask-composite: xor;
//             pointer-events: none;
//             transition: opacity 0.3s ease;
//             z-index: 1;
//           }
          
//           .service-card--border-glow:hover::after {
//             opacity: 1;
//           }
          
//           .service-card--border-glow:hover {
//             box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${DEFAULT_GLOW_COLOR}, 0.2);
//           }
          
//           .particle::before {
//             content: '';
//             position: absolute;
//             top: -2px;
//             left: -2px;
//             right: -2px;
//             bottom: -2px;
//             background: rgba(${DEFAULT_GLOW_COLOR}, 0.2);
//             border-radius: 50%;
//             z-index: -1;
//           }
//         `}
//       </style>

//       <section id="services" className="services-section py-24 relative">
//         <GlobalSpotlight
//           gridRef={gridRef}
//           disableAnimations={shouldDisableAnimations}
//           enabled={true}
//           spotlightRadius={300}
//           glowColor={DEFAULT_GLOW_COLOR}
//         />

//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Наши <span className="text-primary">услуги</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Полный спектр услуг для создания и развития вашего цифрового присутствия
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={gridRef}>
//             {services.map((service, index) => {
//               const baseClassName = `service-card group p-8 bg-card border border-border rounded-2xl transition-all hover:shadow-lg hover:shadow-primary/10 service-card--border-glow`

//               const cardStyle = {
//                 backgroundColor: 'var(--background-dark)',
//                 borderColor: 'var(--border-color)',
//                 color: 'var(--white)',
//                 '--glow-x': '50%',
//                 '--glow-y': '50%',
//                 '--glow-intensity': '0',
//                 '--glow-radius': '200px'
//               } as React.CSSProperties

//               return (
//                 <ParticleCard
//                   key={service.title}
//                   className={baseClassName}
//                   style={cardStyle}
//                   disableAnimations={shouldDisableAnimations}
//                   particleCount={12}
//                   glowColor={DEFAULT_GLOW_COLOR}
//                   enableTilt={true}
//                   clickEffect={true}
//                   enableMagnetism={true}
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className="relative z-10"
//                   >
//                     <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
//                       <service.icon className="w-7 h-7 text-primary" />
//                     </div>
//                     <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//                     <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
//                     <ul className="space-y-2">
//                       {service.features.map((feature) => (
//                         <li key={feature} className="flex items-center text-sm text-muted-foreground">
//                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </ParticleCard>
//               )
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }





"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Bot, Palette, Zap, Shield } from "lucide-react"
import CardSwap, { Card } from './CardSwap'

export function Services() {
  return (
    <section id="services" className="py-8">
      <div className="container mx-auto px-4">
        {/* Заголовок и карточки в одной строке */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Текстовый блок слева */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="sticky top-24 pt-54"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Наши <span className="text-primary">услуги</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Что мы делаем для вашего бизнеса
              </p>
              <p className="text-gray-500">
                Полный цикл разработки - от идеи до запуска и поддержки
              </p>
            </motion.div>
          </div>

          {/* CardSwap справа */}
          <div className="lg:w-2/3" style={{ height: '600px', position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              {/* Карточка 1 - Сайты */}
              <Card>
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/corporate-website-modern-design-purple.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <Code className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Сайты</h3>
                    <p>Современные и быстрые веб-сайты</p>
                  </div>
                </div>
              </Card>

              {/* Карточка 2 - Telegram Apps */}
              <Card>
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/telegram-mini-app-game-interface-purple.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <Smartphone className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Telegram Apps</h3>
                    <p>Мини-приложения для Telegram</p>
                  </div>
                </div>
              </Card>

              {/* Карточка 3 - Боты */}
              <Card>
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/ai-chatbot-interface-dark-theme.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <Bot className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Telegram боты</h3>
                    <p>Автоматизация бизнес-процессов</p>
                  </div>
                </div>
              </Card>

              {/* Карточка 4 - Дизайн */}
              <Card>
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/modern-ecommerce-website-dark-purple-theme.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <Palette className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">UI/UX Дизайн</h3>
                    <p>Красивые и удобные интерфейсы</p>
                  </div>
                </div>
              </Card>

              {/* Карточка 5 - Оптимизация */}
              <Card>
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/marketing-bot-dashboard-analytics.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <Zap className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Оптимизация</h3>
                    <p>Ускорение и SEO-продвижение</p>
                  </div>
                </div>
              </Card>

              {/* Карточка 6 - Поддержка */}
              <Card>
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/booking-service-app-interface.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
                    <Shield className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Поддержка</h3>
                    <p>Техническая поддержка проектов</p>
                  </div>
                </div>
              </Card>

            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  )
}