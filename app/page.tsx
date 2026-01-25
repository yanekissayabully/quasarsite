import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { Header } from "@/components/header"
import { HeroOffer } from "@/components/Offer"
import ExplanationBlock from "@/components/ExplanationBlock"
import App from "@/components/Stacks"
import Features from "@/components/features"
import { HeroOff } from "@/components/heroOff"
import { Offer } from "@/components/description"

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="relative overflow-hidden">
        <HeroOff/>
        <Offer />
        {/* <HeroOffer /> */}
        {/* <ExplanationBlock /> */}
        <Hero />
        <Services />
        < App />
        <Features />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
