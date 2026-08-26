'use client'

import Header from "./layouts/Header"
import Hero from "./layouts/Hero"
import Trusted from "./layouts/Trusted"
import Features from "./layouts/Features"
import Testimonials from "./layouts/Testimonials"
import CtaSection from "./layouts/CtaSection"
import Footer from "./layouts/Footer"
import { Chatbot } from "../components/Chatbot"
import { useEffect, useState } from "react"
import { TwinOrbit } from "@/components/TwinOrbit"

function page() {

  const [chatbot, setChatbot] = useState(false);

  useEffect(() => {

    setInterval(() => {
      setChatbot(true);
    }, 3000);

  }, []);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false)
      }, 1000)

      return () => clearTimeout(timer)
  }, [])

  if (loading) {
      return (
          <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background)]">
              <div className="flex flex-col items-center gap-3">
                  <TwinOrbit className="size-3.5 text-[var(--primary)]" />
              </div>
          </div>
      )
  }

  return (
    <div className="flex flex-col items-center justify-start bg-[var(--background)]">

        <Header />
        <Hero />       
        <Trusted /> 
        <Features />
        <Testimonials />
        <CtaSection />
        <Footer />

        {chatbot && <Chatbot />}

    </div>
  )
}

export default page