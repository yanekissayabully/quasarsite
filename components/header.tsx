// "use client"

// import { useState, useEffect } from "react"
// import CardNav from './CardNav'

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const cardNavItems = [
//     {
//       label: "О нас",
//       bgColor: "#0D0716",
//       textColor: "#fff",
//       links: [
//         { label: "Компания", href: "#company", ariaLabel: "О компании" },
//         { label: "Карьера", href: "#careers", ariaLabel: "Карьера" }
//       ]
//     },
//     {
//       label: "Проекты", 
//       bgColor: "#170D27",
//       textColor: "#fff",
//       links: [
//         { label: "Избранное", href: "#featured", ariaLabel: "Избранные проекты" },
//         { label: "Кейсы", href: "#cases", ariaLabel: "Кейсы проектов" }
//       ]
//     },
//     {
//       label: "Контакты",
//       bgColor: "#271E37", 
//       textColor: "#fff",
//       links: [
//         { label: "Email", href: "mailto:info@digitalagency.ru", ariaLabel: "Написать на email" },
//         { label: "Twitter", href: "#twitter", ariaLabel: "Twitter" },
//         { label: "LinkedIn", href: "#linkedin", ariaLabel: "LinkedIn" }
//       ]
//     }
//   ];

//   // Временное лого как base64
//   const logoData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMTExIiByeD0iOCIvPgo8dGV4dCB4PSIyMCIgeT0iMjUiIGZpbGw9IiNmZmYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+TG9nbzwvdGV4dD4KPC9zdmc+"

//   return (
//     <CardNav
//       logo={logoData}
//       logoAlt="Digital Agency Logo"
//       items={cardNavItems}
//       baseColor="#fff"
//       menuColor="#000"
//       buttonBgColor="#111"
//       buttonTextColor="#fff"
//       ease="power3.out"
//     />
//   )
// }




"use client"

import { useState, useEffect } from "react"
import CardNav from './CardNav'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cardNavItems = [
    {
      label: "Услуги",
      bgColor: "rgba(255, 255, 255, 0.1)",
      textColor: "#fff",
      links: [
        { label: "Веб-разработка", href: "#web", ariaLabel: "Веб-разработка" },
        { label: "Дизайн", href: "#design", ariaLabel: "Дизайн" }
      ]
    },
    {
      label: "Проекты", 
      bgColor: "rgba(255, 255, 255, 0.1)",
      textColor: "#fff",
      links: [
        { label: "Портфолио", href: "#portfolio", ariaLabel: "Портфолио" },
        { label: "Кейсы", href: "#cases", ariaLabel: "Кейсы" }
      ]
    },
    {
      label: "Контакты",
      bgColor: "rgba(255, 255, 255, 0.1)", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:info@quasar.ru", ariaLabel: "Написать на email" },
        { label: "Telegram", href: "#telegram", ariaLabel: "Telegram" },
        { label: "WhatsApp", href: "#whatsapp", ariaLabel: "WhatsApp" }
      ]
    }
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]">
      <CardNav
        logo="#"
        logoAlt="QUASAR Logo"
        items={cardNavItems}
        baseColor={isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)"}
        menuColor="#fff"
        buttonBgColor="hsl(var(--primary))"
        buttonTextColor="hsl(var(--primary-foreground))"
        ease="power3.out"
        className={isScrolled ? "shadow-2xl" : "shadow-lg"}
      />
    </div>
  )
}




// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { label: "Услуги", href: "#services" },
//     { label: "Преимущества", href: "#features" },
//     { label: "Портфолио", href: "#portfolio" },
//     { label: "Контакты", href: "#contact" },
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
//       }`}
//     >
//       <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
//           <span className="text-primary">Digital</span>
//           <span className="text-accent">Agency</span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           {navItems.map((item, index) => (
//             <motion.a
//               key={item.href}
//               href={item.href}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="text-foreground/80 hover:text-primary transition-colors"
//             >
//               {item.label}
//             </motion.a>
//           ))}
//           <Button className="bg-primary hover:bg-primary/90">Начать проект</Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-foreground"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-card border-t border-border"
//           >
//             <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
//               {navItems.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="text-foreground/80 hover:text-primary transition-colors py-2"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//               <Button className="bg-primary hover:bg-primary/90 w-full">Начать проект</Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
