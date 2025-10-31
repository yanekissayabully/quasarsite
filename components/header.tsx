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


//GLASS
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
//       label: "Услуги",
//       bgColor: "rgba(255, 255, 255, 0.1)",
//       textColor: "#fff",
//       links: [
//         { label: "Веб-разработка", href: "#web", ariaLabel: "Веб-разработка" },
//         { label: "Дизайн", href: "#design", ariaLabel: "Дизайн" }
//       ]
//     },
//     {
//       label: "Проекты", 
//       bgColor: "rgba(255, 255, 255, 0.1)",
//       textColor: "#fff",
//       links: [
//         { label: "Портфолио", href: "#portfolio", ariaLabel: "Портфолио" },
//         { label: "Кейсы", href: "#cases", ariaLabel: "Кейсы" }
//       ]
//     },
//     {
//       label: "Контакты",
//       bgColor: "rgba(255, 255, 255, 0.1)", 
//       textColor: "#fff",
//       links: [
//         { label: "Email", href: "mailto:info@quasar.ru", ariaLabel: "Написать на email" },
//         { label: "Telegram", href: "#telegram", ariaLabel: "Telegram" },
//         { label: "WhatsApp", href: "#whatsapp", ariaLabel: "WhatsApp" }
//       ]
//     }
//   ];

//   return (
//     <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]">
//       <CardNav
//         logo="#"
//         logoAlt="QUASAR Logo"
//         items={cardNavItems}
//         baseColor="transparent"
//         menuColor="#fff"
//         buttonBgColor="hsl(var(--primary))"
//         buttonTextColor="hsl(var(--primary-foreground))"
//         ease="power3.out"
//         className={isScrolled ? "shadow-2xl" : "shadow-lg"}
//       />
//     </div>
//   )
// }