"use client"

export default function FutureOutlookSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">
                Present & Future | 2022 Onwards
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">Current Landscape & Future Outlook</h2>
            <p className="text-lg text-slate-300 max-w-2xl">
              AI has entered a transformative phase where generative systems achieve rapid global adoption, powering
              creative, analytical, and collaborative tasks at unprecedented scale.
            </p>
          </div>

          {/* Current State */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">The Current Landscape</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Multimodal Intelligence",
                  desc: "Models now process and understand text, images, audio, and video simultaneously.",
                  icon: "🧠",
                },
                {
                  title: "Hybrid Techniques",
                  desc: "Combining multiple approaches for more robust and capable systems.",
                  icon: "🔄",
                },
                {
                  title: "Reasoning-Driven Behavior",
                  desc: "Moving beyond pattern matching toward genuine understanding and reasoning.",
                  icon: "💭",
                },
                {
                  title: "Rapid Adoption",
                  desc: "ChatGPT achieved 100M users faster than any previous application.",
                  icon: "📈",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-800/30 border border-cyan-400/20 hover:border-cyan-400/60 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl mb-3 h-10 flex items-center overflow-hidden emoji-float">{item.icon}</div>
                  <h4 className="text-base font-bold text-slate-50 mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Persistent Challenges */}
          <div className="space-y-4 py-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">Persistent Challenges</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-red-500" />

              <div className="space-y-4 pl-12">
                {[
                  {
                    title: "High Compute Demands",
                    desc: "Training modern models requires enormous computational resources, limiting accessibility and increasing environmental impact.",
                    icon: "⚙️",
                  },
                  {
                    title: "Bias & Fairness",
                    desc: "Models can perpetuate societal biases present in training data, affecting fairness across demographics.",
                    icon: "⚖️",
                  },
                  {
                    title: "Interpretability Gaps",
                    desc: "Understanding how and why models make decisions remains difficult—the persistent 'black box' problem.",
                    icon: "🔍",
                  },
                  {
                    title: "Ethics & Safety",
                    desc: "Concerns about AI misuse, misinformation, job displacement, and ensuring safe, beneficial AI deployment.",
                    icon: "🌍",
                  },
                ].map((challenge, idx) => (
                  <div key={idx} className="relative animate-fade-in-up">
                    <div
                      className="absolute -left-11 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 border-2 border-slate-950 pulse-node"
                      style={{ "--delay": `${idx * 0.4}s` } as any}
                    />

                    <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-400/30 hover:border-orange-400/60 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0 emoji-float">{challenge.icon}</div>
                        <div>
                          <h4 className="text-base font-bold text-slate-50 mb-1">{challenge.title}</h4>
                          <p className="text-slate-300 text-sm">{challenge.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Path Forward */}
          <div className="space-y-4 py-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">The Path Forward</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-emerald-400 to-teal-500" />

              <div className="space-y-4 pl-12">
                {[
                  {
                    title: "Efficient Models",
                    desc: "Creating capable models with lower computational costs, faster inference, and reduced environmental footprint.",
                    icon: "🚀",
                  },
                  {
                    title: "Domain Specialization",
                    desc: "Building tailored models optimized for specific industries—healthcare, finance, scientific research.",
                    icon: "🎯",
                  },
                  {
                    title: "Human-AI Collaboration",
                    desc: "Designing systems that augment rather than replace human capability, creating symbiotic partnerships.",
                    icon: "🤝",
                  },
                  {
                    title: "Governance & Safety",
                    desc: "Establishing frameworks for responsible AI deployment with transparency, accountability, and ethical guardrails.",
                    icon: "🛡️",
                  },
                ].map((direction, idx) => (
                  <div key={idx} className="relative animate-fade-in-up">
                    <div
                      className="absolute -left-11 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-teal-500 border-2 border-slate-950 pulse-node"
                      style={{ "--delay": `${0.5 + idx * 0.4}s` } as any}
                    />

                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-400/30 hover:border-green-400/60 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl flex-shrink-0 emoji-float">{direction.icon}</div>
                        <div>
                          <h4 className="text-base font-bold text-slate-50 mb-1">{direction.title}</h4>
                          <p className="text-slate-300 text-sm">{direction.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Evolution Continues Box */}
          <div className="relative overflow-hidden p-12 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-pink-500/15 border border-purple-400/40 hover:border-purple-400/70 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer animate-fade-in-up">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl float-orb-1" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl float-orb-2" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 float-title">
                The Evolution Continues
              </h3>

              <div className="space-y-4">
                <p className="text-base text-slate-300 leading-relaxed">
                  From rule-based logic to generative intelligence, AI has evolved from following instructions to
                  learning and creating. This transformation represents more than technological progress—it marks a
                  fundamental shift from{" "}
                  <span className="font-semibold text-cyan-300">automation to human augmentation</span>.
                </p>
                <p className="text-base text-slate-300 leading-relaxed">
                  As AI advances toward deeper understanding, enhanced reliability, and responsible deployment across
                  industries, the most exciting chapter may still be ahead. The convergence of multiple technologies,
                  improved efficiency, and ethical frameworks will define the next era of artificial intelligence.
                </p>
                <p className="text-slate-300 italic text-sm border-l-2 border-purple-400/50 pl-4 py-2">
                  "The future of AI lies not in creating machines that replace humanity, but in building tools that
                  enhance human potential and solve humanity's greatest challenges."
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-purple-400/30">
                <p className="text-slate-400 text-sm mb-3">Ready to dive deeper?</p>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/50 hover:border-cyan-400/80 text-cyan-300 font-semibold text-sm cursor-pointer group/cta hover:scale-105 transition-transform">
                  <span>Explore Our Next Deep Dive</span>
                  <span className="arrow-pulse">→</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-800 animate-fade-in-up">
            <p className="text-slate-400 text-sm">
              An exploration of artificial intelligence evolution by the Department of Computer Engineering, PCCOE •
              2025–26
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes emoji-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 30px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -30px); }
        }
        @keyframes float-title {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes arrow-pulse {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .emoji-float { animation: emoji-float 2s ease-in-out infinite; }
        .pulse-node { animation: pulse 2s infinite; }
        .pulse-node { animation-delay: var(--delay, 0s); }
        .float-orb-1 { animation: float-1 6s ease-in-out infinite; }
        .float-orb-2 { animation: float-2 8s ease-in-out infinite 1s; }
        .float-title { animation: float-title 3s ease-in-out infinite; }
        .arrow-pulse { animation: arrow-pulse 2s infinite; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}
