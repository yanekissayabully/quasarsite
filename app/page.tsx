import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { Portfolio } from "@/components/portfolio"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Services />
        <Features />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
