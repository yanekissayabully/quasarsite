import type React from "react"
import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "QUASAR | Разработка сайтов, Telegram Mini Apps и ботов",
  description:
    "Профессиональная разработка веб-сайтов, мини-приложений для Telegram и ботов. Современные технологии и инновационные решения для вашего бизнеса.",
  keywords: "разработка сайтов, telegram боты, mini apps, веб-разработка, создание сайтов",
  authors: [{ name: "QUASAR" }],
  openGraph: {
    title: "QUASAR | Разработка сайтов и Telegram приложений",
    description: "Профессиональная разработка веб-сайтов, мини-приложений для Telegram и ботов",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        {children}
        {/* <SplashCursor /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
