"use client"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Rocket, Satellite } from 'lucide-react'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Фоновое видео */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/404.mp4" type="video/mp4" />
          {/* Fallback для браузеров, которые не поддерживают видео */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black" />
        </video>
        
        {/* Дополнительный градиент поверх видео для лучшей читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
        
        {/* Звездный эффект */}
        {/* <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div> */}
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Анимированное число 404 */}
          <div className="relative mb-8">
            <motion.h1 
              className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              404
            </motion.h1>
            
            {/* Плавающие иконки вокруг числа */}
            {/* <motion.div
              className="absolute -top-4 -left-4 text-blue-400"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Satellite size={32} />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 text-purple-400"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Rocket size={28} />
            </motion.div> */}
          </div>

          {/* Заголовок и текст */}
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Страницы нет{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ни...
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Вот просто...
          </motion.p>

          {/* Кнопки действий */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              onClick={() => router.push('/')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
            >
              
              На главную
              <motion.div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </button>

            <button
              onClick={() => router.back()}
              className="px-8 py-4 border-2 border-white/20 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <ArrowLeft size={20} />
              Вернуться назад
            </button>
          </motion.div>

          {/* Дополнительная информация */}
          {/* <motion.div 
            className="mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-gray-400 text-sm mb-2">Нужна помощь?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Связаться с поддержкой
              </a>
              <a href="/portfolio" className="text-purple-400 hover:text-purple-300 transition-colors">
                Посмотреть работы
              </a>
              <a href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                О нас
              </a>
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* CSS анимации */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>
    </div>
  )
}

// Альтернативная версия с локальным видео файлом (если нет своего видео)
export function NotFoundPageWithLocalVideo() {
  const router = useRouter()

  // Можно использовать это видео как fallback: https://assets.codepen.io/3364143/7btrrd.mp4
  const videoSources = [
    "/videos/space-background.mp4",
    "https://assets.codepen.io/3364143/7btrrd.mp4", // Fallback космическое видео
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          {videoSources.map((src, index) => (
            <source key={index} src={src} type="video/mp4" />
          ))}
          {/* Fallback градиент */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
      </div>

      {/* Остальной контент такой же */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-8xl md:text-[10rem] font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Потерялись в космосе?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Эта страница отправилась в межгалактическое путешествие.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              На главную
            </button>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Назад
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}