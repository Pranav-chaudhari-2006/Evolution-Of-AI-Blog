"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function RuleBasedSystemsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-sm font-medium text-cyan-300">
                Era: 1943–1980s | The Foundational Period
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">Rule-Based Systems & Expert Systems</h2>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              The genesis of artificial intelligence began with rule-based systems, also known as expert systems, which
              dominated AI research from the 1940s through the 1980s. These pioneering systems encoded human expertise
              into explicit "if-then" rules that computers could execute deterministically.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">Architecture of Rule-Based Systems</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Knowledge Base",
                      desc: "Stores domain-specific expert rules and facts that govern system behavior.",
                      color: "cyan",
                    },
                    {
                      title: "Inference Engine",
                      desc: "Applies rules to infer conclusions from input data systematically using logical deduction.",
                      color: "purple",
                    },
                    {
                      title: "Working Memory",
                      desc: "Holds dynamic facts being processed during system execution and reasoning.",
                      color: "pink",
                    },
                    {
                      title: "User Interface",
                      desc: "Interacts with humans for input and output of expert system results.",
                      color: "amber",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className={`p-6 rounded-xl bg-gradient-to-br from-${item.color}-500/10 to-slate-800/20 border border-${item.color}-400/30 hover:border-${item.color}-400/70 hover:shadow-lg hover:shadow-${item.color}-500/30 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                    >
                      <h4
                        className={`text-lg font-bold text-${item.color}-300 mb-2 group-hover:translate-x-1 transition-transform`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Image with Label */}
            <motion.div variants={itemVariants} className="flex items-center justify-center h-full">
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-400/40 hover:border-cyan-400/80 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/expert-systems-architecture-knowledge-base-inferen.jpg"
                  alt="Architecture of Expert Systems - Shows Knowledge Base, Inference Engine, Working Memory, and User Interface components"
                  className="w-full h-full object-contain bg-slate-800/30"
                />
                {/* Image Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-6">
                  <p className="text-cyan-300 font-bold text-lg">Architecture of Expert Systems</p>
                  <p className="text-slate-300 text-sm mt-2">
                    Core components showing knowledge representation, inference logic, and system interaction
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Pioneering Examples */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-50">Pioneering Examples & Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  year: "1950s–60s",
                  title: "General Problem Solver (GPS)",
                  desc: "Developed by Newell and Simon, GPS revolutionized AI by breaking problems into logical steps.",
                  color: "from-cyan-500/20",
                },
                {
                  year: "1965",
                  title: "DENDRAL",
                  desc: "Pioneering molecular structure prediction system—enabled automated chemical analysis.",
                  color: "from-purple-500/20",
                },
                {
                  year: "1970s",
                  title: "MYCIN",
                  desc: "Medical expert system with ~600 rules diagnosing infections, matching expert doctor performance.",
                  color: "from-pink-500/20",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-6 rounded-xl bg-gradient-to-br ${item.color} to-slate-800/30 border border-slate-700/50 hover:border-slate-600/80 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                >
                  <p className="text-xs font-semibold text-slate-400 mb-2 group-hover:text-slate-300 transition-colors">
                    {item.year}
                  </p>
                  <h4 className="text-base font-bold text-slate-50 mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strengths & Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-xl bg-gradient-to-br from-emerald-500/10 to-slate-800/30 border border-emerald-400/30 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-emerald-300 mb-6 flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  ✓
                </motion.span>
                Strengths
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong>Explainable reasoning</strong> - Users understand why decisions were made
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong>Predictable behavior</strong> - Rule-driven logic ensures consistency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong>High accuracy</strong> - Performs exceptionally in narrow, well-defined domains
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-slate-800/30 border border-red-400/30 hover:border-red-400/60 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-bold text-red-300 mb-6 flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                >
                  ✗
                </motion.span>
                Limitations
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong>Rigid structure</strong> - Fails completely outside defined rules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong>Poor scalability</strong> - Exponentially harder as rule complexity grows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                  <span>
                    <strong>No learning</strong> - Manual updates required for every new scenario
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Why it led to the next phase */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-slate-800/30 border border-amber-400/40 hover:border-amber-400/70 hover:scale-102 transition-all duration-300"
          >
            <h4 className="text-lg font-bold text-amber-300 mb-3">Why This Led to Machine Learning</h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              The brittleness of rule-based systems became apparent by the 1980s. Complex domains required exponentially
              more rules, and any situation outside the rule set would cause complete failure. The community realized
              that instead of manually encoding every rule, systems needed to <strong>learn patterns from data</strong>.
              This fundamental shift sparked the move toward machine learning and neural networks in the 1990s.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
