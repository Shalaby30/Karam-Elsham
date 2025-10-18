import Header from "@/components/header"
import Hero from "@/components/hero"
import DiscoverSection from "@/components/discover-section"
import Dishes from "@/components/dishes.jsx"
import Branches from "@/components/branches"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <DiscoverSection />
      <Dishes />
      <Branches />
      <Contact />
      <Footer />
    </main>
  )
}
