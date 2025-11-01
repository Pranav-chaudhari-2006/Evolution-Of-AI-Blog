"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import EvolutionTimeline from "@/components/evolution-timeline"
import RuleBasedSystemsSection from "@/components/rule-based-systems"
import MachineLearningSection from "@/components/machine-learning"
import DeepLearningSection from "@/components/deep-learning"
import GenerativeModelsSection from "@/components/generative-models"
import TransformersSection from "@/components/transformers"
import FutureOutlookSection from "@/components/future-outlook"
import { useEffect, useState } from "react"

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <EvolutionTimeline />
        <RuleBasedSystemsSection />
        <MachineLearningSection />
        <DeepLearningSection />
        <GenerativeModelsSection />
        <TransformersSection />
        <FutureOutlookSection />
      </div>
    </main>
  )
}
