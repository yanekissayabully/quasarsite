import { Code2, Mail, MessageCircle, Github, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">
                <span className="text-primary">Digital</span>
                <span className="text-accent">Agency</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Профессиональная разработка веб-сайтов, Telegram Mini Apps и ботов. Превращаем идеи в инновационные
              цифровые решения.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Telegram">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Веб-разработка
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Telegram Mini Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Telegram боты
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  UI/UX Дизайн
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Digital Agency. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
