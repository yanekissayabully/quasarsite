// import { Code2, Mail, MessageCircle, Github, Twitter } from "lucide-react"

// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="border-t border-border bg-card">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Brand */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-4xl font-bold">
//                 <span className="text-accent">QUASAR</span>
//               </span>
//             </div>
//             <p className="text-muted-foreground mb-4 max-w-md">
//               Сайты для тех, кто делает шум, а не фон.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Telegram">
//                 <MessageCircle size={20} />
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
//                 <Mail size={20} />
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
//                 <Github size={20} />
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
//                 <Twitter size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="font-semibold mb-4">Компания</h3>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <a href="#portfolio" className="hover:text-primary transition-colors">
//                   Портфолио
//                 </a>
//               </li>
//               <li>
//                 <a href="#features" className="hover:text-primary transition-colors">
//                   О нас
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-primary transition-colors">
//                   Контакты
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-primary transition-colors">
//                   Блог
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
//           <p>© {currentYear} QUASAR. Все права защищены.</p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-primary transition-colors">
//               Политика конфиденциальности
//             </a>
//             <a href="#" className="hover:text-primary transition-colors">
//               Условия использования
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }




import { Code2, Mail, MessageCircle, Github, Twitter, Sparkles, Rocket, Satellite } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-gradient-to-b from-card to-card/80 relative overflow-hidden">
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
                {/* <div className="absolute -inset-1 bg-accent/20 rounded-lg blur-sm"></div> */}
                <span className="text-5xl lg:text-6xl font-black relative bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  QUASAR
                </span>
              </div>
            </div>
            
            {/* <div className="space-y-4 mb-6">
              <p className="text-xl lg:text-2xl text-foreground font-medium leading-tight max-w-2xl">
                Сайты для тех, кто делает <span className="text-accent font-bold">шум</span>, а не фон.
              </p>
            </div> */}

            {/* Соцсети с улучшенным дизайном */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: MessageCircle, label: "Telegram", color: "hover:text-blue-500" },
                { icon: Mail, label: "Email", color: "hover:text-red-500" },
                { icon: Github, label: "GitHub", color: "hover:text-gray-400" },
                { icon: Twitter, label: "Twitter", color: "hover:text-sky-400" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`group p-3 bg-background border border-border rounded-xl text-muted-foreground ${item.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={item.label}
                >
                  <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <ul className="space-y-3 text-muted-foreground">
              {[
                { name: "Портфолио", emoji: "" },
                { name: "О нас", emoji: "" },
                { name: "Контакты", emoji: "" },
                { name: "Блог", emoji: "" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group hover:text-primary transition-all duration-300 flex items-center gap-2 py-1"
                  >
                    <span className="text-lg">{item.emoji}</span>
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
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Веб-разработка",
                "Дизайн интерфейсов", 
                "E-commerce",
                "Техническая поддержка"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group hover:text-primary transition-all duration-300 flex items-center gap-2 py-1"
                  >

                    <span className="group-hover:translate-x-1 transition-transform">
                      {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-border/50 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <p>© {currentYear} QUASAR. Все права защищены.</p>
          </div>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Условия использования"].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}