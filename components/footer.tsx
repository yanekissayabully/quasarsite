// import { Mail } from "lucide-react"

// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     // <footer className="border-t border-border bg-gradient-to-b from-card to-card/80 relative overflow-hidden">
//     <footer className="border-t border-border bg-background relative overflow-hidden">
//       {/* Декоративные элементы */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
//       <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 py-16 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand - увеличенный блок */}
//           <div className="col-span-1 lg:col-span-2">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="relative">
//                 <span className="text-5xl lg:text-6xl font-black relative bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
//                   QUASAR
//                 </span>
//               </div>
//             </div>

//             {/* Соцсети с оригинальными иконками */}
//             <div className="flex gap-4 mt-8">
//               {[
//                 { 
//                   icon: WhatsAppIcon, 
//                   label: "WhatsApp", 
//                   color: "hover:border-green-500/30",
//                 },
//                 { 
//                   icon: TelegramIcon, 
//                   label: "Telegram", 
//                   color: "hover:border-blue-500/30",
//                 },
//                 { 
//                   icon: InstagramIcon, 
//                   label: "Instagram", 
//                   color: "hover:border-pink-500/30",
//                 },
//                 { 
//                   icon: GithubIcon, 
//                   label: "GitHub", 
//                   color: "hover:border-gray-700/30",
//                 },
//                 { 
//                   icon: Mail, 
//                   label: "Email", 
//                   color: "hover:border-red-500/30",
//                 }
//               ].map((item, index) => (
//                 <a 
//                   key={index}
//                   href="#" 
//                   className={`group p-3 bg-background border border-border rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.color}`}
//                   aria-label={item.label}
//                 >
//                   <item.icon />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <ul className="space-y-3 text-muted-foreground">
//               {[
//                 { name: "Портфолио", emoji: "" },
//                 { name: "О нас", emoji: "" },
//                 { name: "Контакты", emoji: "" },
//                 { name: "Блог", emoji: "" }
//               ].map((item, index) => (
//                 <li key={index}>
//                   <a 
//                     href="#" 
//                     className="group hover:text-primary transition-all duration-300 flex items-center gap-2 py-1"
//                   >
//                     <span className="text-lg">{item.emoji}</span>
//                     <span className="group-hover:translate-x-1 transition-transform">
//                       {item.name}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <ul className="space-y-3 text-muted-foreground">
//               {[
//                 "Веб-разработка",
//                 "Дизайн интерфейсов", 
//                 "E-commerce",
//                 "Техническая поддержка"
//               ].map((service, index) => (
//                 <li key={index}>
//                   <a 
//                     href="#" 
//                     className="group hover:text-primary transition-all duration-300 flex items-center gap-2 py-1"
//                   >
//                     <span className="group-hover:translate-x-1 transition-transform">
//                       {service}
//                     </span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Нижняя часть */}
//         <div className="border-t border-border/50 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
//           <div className="flex gap-6">
//             {["Политика конфиденциальности", "Условия использования"].map((item, index) => (
//               <a 
//                 key={index}
//                 href="#" 
//                 className="hover:text-primary transition-colors relative group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <p>© {currentYear} QUASAR. Все права защищены.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// // Оригинальные SVG иконки без изменений
// const WhatsAppIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path fillRule="evenodd" clipRule="evenodd" d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.94 13.94 0 0 0 16 31m0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.868 2.138 6.79L5.23 27.77l4.049-1.013a11.8 11.8 0 0 0 6.72 2.09" fill="#bfc8d0"/>
//     <path d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.95 11.95 0 0 1 4 16C4 9.373 9.373 4 16 4s12 5.373 12 12" fill="url(#whatsapp_gradient)"/>
//     <path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.94 13.94 0 0 0 16 30m0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.868 2.138 6.79L5.23 26.77l4.049-1.013a11.8 11.8 0 0 0 6.72 2.09" fill="#fff"/>
//     <path d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992s3.175-2.313 3.175-3.078c0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5s-.578.106-.721.024c-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164s.04-.679-.05-.934c-.387-1.097-.715-2.015-.981-2.55" fill="#fff"/>
//     <defs>
//       <linearGradient id="whatsapp_gradient" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#5bd066"/>
//         <stop offset="1" stopColor="#27b43e"/>
//       </linearGradient>
//     </defs>
//   </svg>
// )

// const TelegramIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="16" cy="16" r="14" fill="url(#telegram_gradient)"/>
//     <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
//     <defs>
//       <linearGradient id="telegram_gradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
//         <stop stopColor="#37BBFE"/>
//         <stop offset="1" stopColor="#007DBB"/>
//       </linearGradient>
//     </defs>
//   </svg>
// )

// const InstagramIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 551.034 551.034" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <g>
//       <linearGradient id="instagram_gradient1" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
//         <stop offset="0" style={{ stopColor: "#E09B3D" }}/>
//         <stop offset="0.3" style={{ stopColor: "#C74C4D" }}/>
//         <stop offset="0.6" style={{ stopColor: "#C21975" }}/>
//         <stop offset="1" style={{ stopColor: "#7024C4" }}/>
//       </linearGradient>
//       <path style={{ fill: "url(#instagram_gradient1)" }} d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
//         c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
//         C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
//         c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
//         c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>
      
//       <linearGradient id="instagram_gradient2" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
//         <stop offset="0" style={{ stopColor: "#E09B3D" }}/>
//         <stop offset="0.3" style={{ stopColor: "#C74C4D" }}/>
//         <stop offset="0.6" style={{ stopColor: "#C21975" }}/>
//         <stop offset="1" style={{ stopColor: "#7024C4" }}/>
//       </linearGradient>
//       <path style={{ fill: "url(#instagram_gradient2)" }} d="M275.517,133C196.933,133,133,196.933,133,275.516
//         s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6
//         c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083
//         C362.6,323.611,323.611,362.6,275.517,362.6z"/>
      
//       <linearGradient id="instagram_gradient3" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
//         <stop offset="0" style={{ stopColor: "#E09B3D" }}/>
//         <stop offset="0.3" style={{ stopColor: "#C74C4D" }}/>
//         <stop offset="0.6" style={{ stopColor: "#C21975" }}/>
//         <stop offset="1" style={{ stopColor: "#7024C4" }}/>
//       </linearGradient>
//       <circle style={{ fill: "url(#instagram_gradient3)" }} cx="418.306" cy="134.072" r="34.149"/>
//     </g>
//   </svg>
// )

// const GithubIcon = () => (
//   <svg width="24" height="24" viewBox="0 0 24 24" fill="#fffefe" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/>
//   </svg>
// )


import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Social media links configuration
  const socialLinks = [
    { 
      icon: WhatsAppIcon, 
      label: "WhatsApp", 
      url: "https://wa.me/77770743788", // Replace with your WhatsApp number
      color: "hover:border-green-500/30 hover:text-green-500",
    },
    { 
      icon: TelegramIcon, 
      label: "Telegram", 
      url: "https://t.me/prettyxuetty", // Replace with your Telegram username
      color: "hover:border-blue-500/30 hover:text-blue-500",
    },
    { 
      icon: InstagramIcon, 
      label: "Instagram", 
      url: "https://instagram.com/guccikastryulya", // Replace with your Instagram username
      color: "hover:border-pink-500/30 hover:text-pink-500",
    },
    { 
      icon: GithubIcon, 
      label: "GitHub", 
      url: "https://github.com/yanekissayabully", // Replace with your GitHub username
      color: "hover:border-gray-700/30 hover:text-gray-700",
    },
    { 
      icon: Mail, 
      label: "Email", 
      url: "mailto:aripov.cr7@gmail.com", // Replace with your email
      color: "hover:border-red-500/30 hover:text-red-500",
    }
  ]

  // Navigation links
  const navLinks = [
    { name: "Портфолио", href: "/portfolio" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contact" },
    { name: "Блог", href: "/blog" }
  ]

  // Services links
  const services = [
    { name: "Веб-разработка", href: "/services/web-development" },
    { name: "Дизайн интерфейсов", href: "/services/ui-design" },
    { name: "E-commerce", href: "/services/ecommerce" },
    { name: "Техническая поддержка", href: "/services/support" }
  ]

  // Legal links
  const legalLinks = [
    { name: "Политика конфиденциальности", href: "/privacy" },
    { name: "Условия использования", href: "/terms" }
  ]

  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand - увеличенный блок */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <span className="text-5xl lg:text-6xl font-black relative bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  QUASAR
                </span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mt-6">
              <a 
                href="tel:+77080016567" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>+7 (708) 001-65-67</span>
              </a>
              <a 
                href="mailto:info@quasar.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>info@quasar.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Казахстан, Алматы</span>
              </div>
            </div>

            {/* Соцсети с оригинальными иконками */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((item, index) => (
                <a 
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-background border border-border rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.color}`}
                  aria-label={item.label}
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Компания</h3>
            <ul className="space-y-3 text-muted-foreground">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="group hover:text-primary transition-all duration-300 flex items-center gap-2 py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Услуги</h3>
            <ul className="space-y-3 text-muted-foreground">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="group hover:text-primary transition-all duration-300 flex items-center gap-2 py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-border/50 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex gap-6 flex-wrap justify-center">
            {legalLinks.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <p>© {currentYear} QUASAR. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Оригинальные SVG иконки без изменений
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.94 13.94 0 0 0 16 31m0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.868 2.138 6.79L5.23 27.77l4.049-1.013a11.8 11.8 0 0 0 6.72 2.09" fill="#bfc8d0"/>
    <path d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.95 11.95 0 0 1 4 16C4 9.373 9.373 4 16 4s12 5.373 12 12" fill="url(#whatsapp_gradient)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.94 13.94 0 0 0 16 30m0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.868 2.138 6.79L5.23 26.77l4.049-1.013a11.8 11.8 0 0 0 6.72 2.09" fill="#fff"/>
    <path d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992s3.175-2.313 3.175-3.078c0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5s-.578.106-.721.024c-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164s.04-.679-.05-.934c-.387-1.097-.715-2.015-.981-2.55" fill="#fff"/>
    <defs>
      <linearGradient id="whatsapp_gradient" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5bd066"/>
        <stop offset="1" stopColor="#27b43e"/>
      </linearGradient>
    </defs>
  </svg>
)

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="url(#telegram_gradient)"/>
    <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"/>
    <defs>
      <linearGradient id="telegram_gradient" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#37BBFE"/>
        <stop offset="1" stopColor="#007DBB"/>
      </linearGradient>
    </defs>
  </svg>
)

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 551.034 551.034" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <linearGradient id="instagram_gradient1" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
        <stop offset="0" style={{ stopColor: "#E09B3D" }}/>
        <stop offset="0.3" style={{ stopColor: "#C74C4D" }}/>
        <stop offset="0.6" style={{ stopColor: "#C21975" }}/>
        <stop offset="1" style={{ stopColor: "#7024C4" }}/>
      </linearGradient>
      <path style={{ fill: "url(#instagram_gradient1)" }} d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722
        c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156
        C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156
        c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722
        c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>
      
      <linearGradient id="instagram_gradient2" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.5714" x2="275.517" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
        <stop offset="0" style={{ stopColor: "#E09B3D" }}/>
        <stop offset="0.3" style={{ stopColor: "#C74C4D" }}/>
        <stop offset="0.6" style={{ stopColor: "#C21975" }}/>
        <stop offset="1" style={{ stopColor: "#7024C4" }}/>
      </linearGradient>
      <path style={{ fill: "url(#instagram_gradient2)" }} d="M275.517,133C196.933,133,133,196.933,133,275.516
        s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6
        c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083
        C362.6,323.611,323.611,362.6,275.517,362.6z"/>
      
      <linearGradient id="instagram_gradient3" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.5714" x2="418.306" y2="549.7202" gradientTransform="matrix(1 0 0 -1 0 554)">
        <stop offset="0" style={{ stopColor: "#E09B3D" }}/>
        <stop offset="0.3" style={{ stopColor: "#C74C4D" }}/>
        <stop offset="0.6" style={{ stopColor: "#C21975" }}/>
        <stop offset="1" style={{ stopColor: "#7024C4" }}/>
      </linearGradient>
      <circle style={{ fill: "url(#instagram_gradient3)" }} cx="418.306" cy="134.072" r="34.149"/>
    </g>
  </svg>
)

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fffefe" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/>
  </svg>
)