"use client"

export default function TransformersSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Era Separator */}
          <div className="space-y-4 border-t border-purple-500/20 pt-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-purple-400 to-transparent" />
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-sm font-medium text-purple-300">
                Era: 2017–2023 | The Attention Revolution
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">Transformer Architecture Breakthrough</h2>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Transformers revolutionized AI by replacing recurrent architectures with attention mechanisms, enabling
              parallel processing of sequences and capturing long-range dependencies with unprecedented efficiency.
            </p>
          </div>

          {/* Main Transformer Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="relative w-full min-h-96 rounded-2xl overflow-hidden border-2 border-purple-400/40 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer group hover:scale-102 animate-fade-in-up">
              <img
                src="/transformer-architecture-attention-mechanism-multi.jpg"
                alt="Transformer Architecture - Self-attention mechanism, multi-head attention, encoder-decoder structure"
                className="w-full h-full object-contain bg-slate-800/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-purple-300 font-bold text-lg">Transformer Architecture</p>
                <p className="text-slate-300 text-xs mt-1 leading-tight">
                  Self-attention enables parallel processing and long-range dependency capture
                </p>
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-50">Why Transformers Changed Everything</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                Transformers revolutionized AI by replacing recurrent architectures with attention mechanisms, enabling
                parallel processing of sequences and capturing long-range dependencies with unprecedented efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    title: "Attention Mechanism",
                    desc: "Allows models to focus on relevant parts, understanding context and relationships better",
                    icon: "👀",
                  },
                  {
                    title: "Parallel Processing",
                    desc: "Processes entire sequences simultaneously, dramatically increasing speed",
                    icon: "⚡",
                  },
                  {
                    title: "Long-Range Dependencies",
                    desc: "Captures relationships between distant tokens essential for language understanding",
                    icon: "🔗",
                  },
                  {
                    title: "Transfer Learning",
                    desc: "Pre-trained models fine-tune for diverse tasks with minimal additional data",
                    icon: "🚀",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-slate-800/30 border border-purple-400/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer text-sm"
                  >
                    <div className="text-2xl mb-2 h-8 flex items-center overflow-hidden emoji-float">
                      {feature.icon}
                    </div>
                    <h4 className="text-xs font-bold text-slate-50 mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-xs">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Language Models Section */}
          <div className="space-y-4 pt-8 border-t border-purple-500/20 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">Language Models: BERT & GPT Series</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "BERT (2018)",
                  icon: "📖",
                  points: ["Bidirectional training", "Superior language understanding", "Pre-training framework"],
                  desc: "Introduced bidirectional context understanding, revolutionizing comprehension tasks",
                },
                {
                  title: "GPT Series (2018–2023)",
                  icon: "✍️",
                  points: ["Large-scale generation", "Few-shot learning", "Multimodal reasoning (GPT-4)"],
                  desc: "Scaled parameters massively, achieving advanced generation. GPT-4 added vision capabilities",
                },
              ].map((model, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-slate-800/30 border border-blue-400/30 hover:border-blue-400/60 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer animate-fade-in-up"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl emoji-float">{model.icon}</span>
                    <h4 className="text-lg font-bold text-slate-50">{model.title}</h4>
                  </div>
                  <p className="text-slate-300 mb-4 text-sm">{model.desc}</p>
                  <ul className="space-y-2 text-slate-300">
                    {model.points.map((point, pidx) => (
                      <li
                        key={pidx}
                        className="flex items-center gap-2 text-sm hover:translate-x-1 transition-transform"
                      >
                        <span className="text-blue-400">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Diffusion Models */}
          <div className="space-y-4 pt-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">Diffusion Models: The Latest Breakthrough</h3>
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-slate-800/30 border border-purple-400/30 hover:border-purple-400/60 hover:scale-102 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <p className="text-slate-300 mb-6 text-sm">
                Emerging around 2015 and refined through the 2020s, diffusion models generate data by reversing a
                gradual noising process, overcoming GAN limitations with more stable training.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Advantages Over GANs",
                    icon: "✓",
                    items: ["Stable training", "Realistic outputs", "Better convergence", "Easier to debug"],
                  },
                  {
                    title: "Notable Models",
                    icon: "🎨",
                    items: ["DALL-E 2", "Stable Diffusion", "Midjourney", "Modern generative AI foundation"],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h5 className="font-bold text-purple-300 flex items-center gap-2 group cursor-pointer">
                      <span className="emoji-float">{section.icon}</span>
                      {section.title}
                    </h5>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      {section.items.map((item, sidx) => (
                        <li
                          key={sidx}
                          className="flex items-center gap-2 hover:text-purple-300 transition-colors hover:translate-x-1"
                        >
                          <span className="text-purple-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
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
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .emoji-float { animation: emoji-float 2s ease-in-out infinite; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}
