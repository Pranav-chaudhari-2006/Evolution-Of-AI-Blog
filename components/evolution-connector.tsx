"use client"

import { motion } from "framer-motion"

export default function EvolutionConnector() {
  return (
    <div className="relative h-32 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Animated connecting line */}
        <motion.svg
          viewBox="0 0 1000 200"
          className="w-full h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Main evolution arrow */}
          <motion.path
            d="M 50 100 Q 250 30, 450 100 T 950 100"
            fill="none"
            stroke="url(#evolutionGradient)"
            strokeWidth="3"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Arrowhead */}
          <motion.polygon
            points="950,100 940,95 945,100 940,105"
            fill="url(#evolutionGradient)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          />

          {/* Milestone dots */}
          {[150, 350, 550, 750].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={100}
              r="8"
              fill="url(#evolutionGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
            />
          ))}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="evolutionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Labels */}
        <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none text-xs font-semibold text-slate-400 whitespace-nowrap">
          <span>Rules</span>
          <span>Learning</span>
          <span>Generation</span>
          <span>Future</span>
        </div>
      </div>
    </div>
  )
}
