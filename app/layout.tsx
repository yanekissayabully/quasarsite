import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SplashCursor from "@/components/SplashCursor"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
      <body className={`font-sans antialiased`}>
        {children}
        {/* <SplashCursor /> */}
        <Analytics />
      </body>
    </html>
  )
}
