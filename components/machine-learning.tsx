"use client"

export default function MachineLearningSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-purple-400 to-transparent" />
              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-sm font-medium text-purple-300">
                Era: 1986–2005 | The Learning Revolution
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">The Shift to Machine Learning</h2>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              The 1990s witnessed a paradigm shift from rigid rules to data-driven learning. Neural networks, with
              foundations laid in the mid-20th century, resurged with the rediscovery of backpropagation, enabling
              systems to learn patterns directly from data.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">Neural Networks: The Building Blocks Timeline</h3>
            <div className="relative space-y-4 pl-8 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:via-purple-400 before:to-transparent">
              {[
                {
                  year: "1943",
                  title: "McCulloch-Pitts Model",
                  desc: "Introduces the mathematical model of artificial neurons, foundational to all neural networks",
                },
                {
                  year: "1958",
                  title: "Rosenblatt's Perceptron",
                  desc: "First neural network demonstrating pattern recognition, sparked significant interest in AI",
                },
                {
                  year: "1969",
                  title: "AI Winter Begins",
                  desc: "Minsky & Papert's 'Perceptrons' book highlights limitations, research funding dries up for nearly a decade",
                },
                {
                  year: "1986",
                  title: "Backpropagation Revival",
                  desc: "Rumelhart, Hinton & Williams rediscover backpropagation, enabling training of deep multilayer networks efficiently",
                },
                {
                  year: "1989",
                  title: "LeNet & Convolutional Networks",
                  desc: "Yann LeCun applies CNNs to handwriting recognition—first practical deep learning success",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative group hover:scale-105 transition-transform duration-300">
                  {/* CHANGE: Dot now centered on the timeline line */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-slate-950 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 flex-shrink-0" />
                  <div className="p-5 rounded-lg bg-gradient-to-r from-purple-500/15 to-transparent border border-purple-400/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer">
                    <p className="text-xs font-bold text-purple-300 uppercase tracking-wide">{item.year}</p>
                    <h4 className="text-base font-bold text-slate-50 mt-1">{item.title}</h4>
                    <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ML Paradigms */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50">Machine Learning Paradigms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Supervised Learning",
                  desc: "Trains on labeled input-output pairs to learn mapping functions.",
                  icon: "📊",
                },
                {
                  title: "Unsupervised Learning",
                  desc: "Finds patterns in unlabeled data, discovering hidden structures.",
                  icon: "🔍",
                },
                {
                  title: "Reinforcement Learning",
                  desc: "Learns by trial and error, optimizing for cumulative rewards.",
                  icon: "🎮",
                },
              ].map((paradigm, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-slate-800/30 border border-purple-400/20 hover:border-purple-400/60 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-5xl mb-4 h-12 flex items-center justify-start group-hover:scale-110 transition-transform duration-300">
                    {paradigm.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-50 mb-2">{paradigm.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{paradigm.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Image */}
          <div className="relative w-full h-auto rounded-2xl overflow-hidden border-2 border-purple-400/30 hover:border-purple-400/80 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer group hover:scale-102 animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-stretch gap-6">
              {/* Image on the right */}
              <div className="w-full md:w-3/5 h-96 md:h-auto md:min-h-full rounded-xl overflow-hidden">
                <img
                  src="/neural-network-architecture-vibrant-nodes-connecti.jpg"
                  alt="Neural Network Architecture - Showing interconnected nodes, layers, and backpropagation flow"
                  className="w-full h-full object-contain bg-slate-800/30"
                />
              </div>
              {/* Text on the left */}
              <div className="w-full md:w-2/5 flex flex-col justify-center p-6">
                <p className="text-purple-300 font-bold text-lg">Neural Network Architecture</p>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Interconnected nodes and layers enable learning from data patterns through backpropagation
                </p>
              </div>
            </div>
          </div>

          {/* Why it led to deep learning */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-slate-800/30 border border-blue-400/40 hover:border-blue-400/70 hover:scale-102 transition-all duration-300 animate-fade-in-up">
            <h4 className="text-lg font-bold text-blue-300 mb-3">Why This Led to Deep Learning</h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              By the 2000s, computing power had increased exponentially, and datasets grew massive. Researchers
              discovered that <span className="font-semibold text-blue-200">deeper networks with more layers</span>{" "}
              could learn increasingly abstract patterns. However, GPUs weren't widely used for training yet, making
              deep networks infeasible. Once GPU acceleration became available around 2006, deep learning would explode
              onto the scene.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}
