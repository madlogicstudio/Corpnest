'use client'

import Header from "./layouts/Header"
import Hero from "./layouts/Hero"
import Trusted from "./layouts/Trusted"
import Features from "./layouts/Features"
import Testimonials from "./layouts/Testimonials"
import CtaSection from "./layouts/CtaSection"
import Footer from "./layouts/Footer"
import { Chatbot } from "./components/Chatbot"
import { useEffect, useState } from "react"

function page() {

  const [chatbot, setChatbot] = useState(false);

  useEffect(() => {

    setInterval(() => {
      setChatbot(true);
    }, 3000);

  }, []);

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