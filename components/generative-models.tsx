"use client"

export default function GenerativeModelsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-sm font-medium text-cyan-300">
                Era: 2014–2016 | Generative Revolution
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">The Age of Generative Models</h2>
            <p className="text-lg text-slate-300 max-w-2xl">
              Models that could generate diverse, realistic outputs fundamentally transformed creative and analytical AI
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-50">Variational Autoencoders (VAEs)</h3>
              <p className="text-base text-slate-300">
                VAEs introduced probabilistic latent spaces, enabling generation of diverse outputs from learned
                distributions. Became crucial for image generation, anomaly detection, and drug discovery.
              </p>
              <div className="space-y-3 pt-2">
                {["Probabilistic generation", "Diverse outputs", "Anomaly detection", "Drug discovery"].map(
                  (item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="relative w-full min-h-96 rounded-2xl overflow-hidden border-2 border-cyan-400/40 hover:border-cyan-400/80 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group hover:scale-102">
              <img
                src="/vae-variational-autoencoder-flow-diagram-encoder-d.jpg"
                alt="VAE Flow - Data through encoder to latent space, sampled distribution, decoder generates new data"
                className="w-full h-full object-contain bg-slate-800/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-cyan-300 font-bold text-2xl">Probabilistic Generation Flow</p>
                <p className="text-slate-300 text-base mt-2 leading-relaxed">
                  Encodes to distribution, samples for diversity, decodes to generate novel outputs
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="relative w-full min-h-96 rounded-2xl overflow-hidden border-2 border-purple-400/40 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer group hover:scale-102">
              <img
                src="/gan-generative-adversarial-network-generator-discr.jpg"
                alt="GAN Architecture - Generator creates images, discriminator evaluates authenticity"
                className="w-full h-full object-contain bg-slate-800/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-purple-300 font-bold text-2xl">Generative Adversarial Network</p>
                <p className="text-slate-300 text-base mt-2">
                  Competitive learning between generator and discriminator produces photorealistic images
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-50">Generative Adversarial Networks (GANs)</h3>
              <p className="text-base text-slate-300">
                Introduced in 2014 by Ian Goodfellow, GANs transformed generative AI through competitive dynamics
                between generator and discriminator, enabling highly realistic image synthesis.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { label: "Generator", desc: "Creates synthetic images attempting to fool the discriminator" },
                  { label: "Discriminator", desc: "Distinguishes real images from generated ones" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-purple-500/10 border border-purple-400/30 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer hover:translate-x-1"
                  >
                    <p className="font-semibold text-purple-300 mb-1 group-hover:text-purple-200 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-slate-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">Generative Model Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "VAEs",
                  pros: ["Stable training", "Smooth latent space", "Good for reconstruction"],
                  cons: ["Less realistic outputs", "Slower generation"],
                  icon: "🔹",
                },
                {
                  name: "GANs",
                  pros: ["Highly realistic outputs", "Fast generation", "Diverse synthesis"],
                  cons: ["Training instability", "Mode collapse", "Hard to debug"],
                  icon: "⚔️",
                },
              ].map((model, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-50 flex items-center gap-2">
                    <span className="text-xl group-hover:scale-125 transition-transform">{model.icon}</span>
                    {model.name}
                  </h4>
                  <div className="space-y-2">
                    {model.pros.map((pro, pidx) => (
                      <div
                        key={pidx}
                        className="flex items-start gap-2 p-3 rounded-lg bg-green-500/10 border border-green-400/30 hover:border-green-400/60 hover:scale-105 transition-all duration-300 group cursor-pointer hover:translate-x-1"
                      >
                        <span className="text-green-400 font-bold flex-shrink-0 group-hover:rotate-360 transition-transform">
                          ✓
                        </span>
                        <span className="text-slate-300 text-sm">{pro}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-1">
                    {model.cons.map((con, cidx) => (
                      <div
                        key={cidx}
                        className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-400/30 hover:border-red-400/60 hover:scale-105 transition-all duration-300 group cursor-pointer hover:translate-x-1"
                      >
                        <span className="text-red-400 font-bold flex-shrink-0 group-hover:rotate-180 transition-transform">
                          ✗
                        </span>
                        <span className="text-slate-300 text-sm">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}
