// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Mail, MessageCircle } from "lucide-react"

// export function CTA() {
//   return (
//     <section id="contact" className="py-24 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.2, 0.3, 0.2],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-background rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
//             Готовы начать <span className="text-primary">ваш проект</span>?
//           </h2>
//           <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
//             Свяжитесь с нами сегодня, и мы обсудим, как воплотить ваши идеи в жизнь. Первая консультация бесплатно!
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
//               Написать в Telegram
//               <ArrowRight className="ml-2" size={20} />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 border-primary/30 hover:bg-primary/10 bg-transparent"
//             >
//               Оставить заявку
//             </Button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Mail, MessageCircle, X } from "lucide-react"
import { useState, useRef } from "react"

export function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    // email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendToTelegram = async (data: typeof formData) => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Telegram credentials not configured")
      return false
    }

    const message = `
📋 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> ${data.name || "Не указано"}
📞 <b>Телефон:</b> ${data.phone || "Не указан"}
💬 <b>Сообщение:</b> ${data.message || "Не указано"}

🕐 <b>Время:</b> ${new Date().toLocaleString("ru-RU")}
    `

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Error sending to Telegram:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const success = await sendToTelegram(formData)

    if (success) {
      setSubmitStatus("success")
      setFormData({ name: "", phone: "", message: "" })
      setTimeout(() => {
        setIsModalOpen(false)
        setSubmitStatus("idle")
      }, 2000)
    } else {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    }

    setIsSubmitting(false)
  }

  const openTelegram = () => {
    // Replace with your actual Telegram link
    window.open("https://t.me/prettyxuetty", "_blank")
  }

  return (
    <>
      <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 lg:p-16"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                Начните сегодня
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Готовы начать <span className="text-primary">ваш проект</span>?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
                Свяжитесь с нами сегодня, и мы обсудим, как воплотить ваши идеи в жизнь. 
                Первая консультация бесплатно!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openTelegram}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-wide hover:opacity-90 transition-opacity group rounded-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  Написать в Telegram
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary text-sm font-bold tracking-wide hover:bg-primary/10 transition-all group rounded-xl"
                >
                  <Mail className="w-4 h-4" />
                  Оставить заявку
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="font-display text-xl font-bold">Оставить заявку</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Заполните форму, и мы свяжемся с вами
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Ваше имя <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Телефон <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (999) 123-45-67"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ivan@example.com"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div> */}

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 text-sm text-center">
                  ✓ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 text-sm text-center">
                  ✗ Ошибка отправки. Пожалуйста, попробуйте еще раз или напишите нам в Telegram.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground text-sm font-bold tracking-wide rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    Отправить заявку
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  )
}