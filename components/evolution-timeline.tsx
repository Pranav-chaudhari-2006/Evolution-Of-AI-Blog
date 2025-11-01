"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React from "react"

export default function EvolutionTimeline() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const timelineRef = React.useRef(null)
  const [timelineHeight, setTimelineHeight] = React.useState(0)

  React.useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(timelineRef.current.scrollHeight)
    }
  }, [inView])

  const items = [
    {
      year: "1943",
      label: "Artificial Neurons",
      description: "McCulloch-Pitts neuron model introduced",
      badgeColor: "bg-cyan-500",
      borderColor: "border-cyan-500",
      align: "left",
    },
    {
      year: "1970s",
      label: "Rule-Based Systems",
      description: "Expert systems with explicit rules for AI applications",
      badgeColor: "bg-blue-500",
      borderColor: "border-blue-500",
      align: "right",
    },
    {
      year: "1986",
      label: "Backpropagation",
      description: "Backpropagation algorithm revolutionized neural network training",
      badgeColor: "bg-purple-500",
      borderColor: "border-purple-500",
      align: "left",
    },
    {
      year: "2006",
      label: "Deep Learning",
      description: "Deep neural networks transformed pattern recognition and machine learning",
      badgeColor: "bg-pink-500",
      borderColor: "border-pink-500",
      align: "right",
    },
    {
      year: "2014",
      label: "GANs Introduced",
      description: "Generative Adversarial Networks enabled synthetic data creation",
      badgeColor: "bg-red-500",
      borderColor: "border-red-500",
      align: "left",
    },
    {
      year: "2017",
      label: "Transformers",
      description: "Attention mechanisms revolutionized NLP and language models",
      badgeColor: "bg-orange-500",
      borderColor: "border-orange-500",
      align: "right",
    },
    {
      year: "2022",
      label: "Diffusion Models",
      description: "DALL-E 2, Midjourney revolutionized AI image generation with diffusion-based models",
      badgeColor: "bg-yellow-500",
      borderColor: "border-yellow-500",
      align: "left",
    },
    {
      year: "2025",
      label: "Advanced AGI Era",
      description:
        "Multimodal AI systems with advanced reasoning, real-time processing, and human-level problem solving",
      badgeColor: "bg-green-500",
      borderColor: "border-green-500",
      align: "right",
    },
  ]

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Timeline Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              The AI Evolution Timeline
            </h3>
            <p className="text-slate-400 text-base">
              From 1943 to 2025: Transformative breakthroughs that shaped modern AI
            </p>
          </motion.div>

          {/* Main Timeline Container */}
          <div className="relative px-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400" />

            {inView && (
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-500/70 border-2 border-purple-300 z-10 pointer-events-none"
                animate={{ y: [0, Math.max(timelineHeight - 16, 0)] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            )}

            {/* Timeline Items */}
            <div ref={timelineRef} className="space-y-12">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className={`flex ${item.align === "left" ? "justify-start" : "justify-end"} relative`}
                >
                  {/* Content Card with Badge */}
                  <div className={`w-5/12 ${item.align === "left" ? "pr-12" : "pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, translateY: -4 }}
                      className={`p-6 rounded-lg border-2 ${item.borderColor} bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800/90 transition-all group cursor-pointer`}
                    >
                      {/* Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`${item.badgeColor} px-3 py-1 rounded-full text-xs font-bold text-white`}>
                          {item.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl font-bold text-white mb-2">{item.label}</h4>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Watch as AI evolves through each era. Each milestone represents a breakthrough that shaped modern
              artificial intelligence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
