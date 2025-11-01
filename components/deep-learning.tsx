"use client"

export default function DeepLearningSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-pink-400 to-transparent" />
              <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-400/30 text-sm font-medium text-pink-300">
                Era: Mid-2000s–2012 | The GPU Revolution
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">The Deep Learning Revolution</h2>
            <p className="text-lg text-slate-300 max-w-2xl">
              The mid-2000s introduced deep learning, revolutionizing tasks like image and speech recognition through
              GPU acceleration and breakthrough architectures.
            </p>
          </div>

          {/* Key Breakthroughs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {[
              {
                title: "GPU Acceleration",
                desc: "Graphics processors drastically reduced training from months to weeks",
                icon: "⚡",
                metrics: "100x faster",
              },
              {
                title: "DanNet (2011)",
                desc: "Achieved superhuman image recognition capabilities",
                icon: "👁️",
                metrics: "Superhuman accuracy",
              },
              {
                title: "ImageNet 2012 - AlexNet",
                desc: "Won ImageNet challenge with unprecedented accuracy",
                icon: "🎯",
                metrics: "85.2% accuracy",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-slate-800/30 border border-pink-400/20 hover:border-pink-400/60 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group cursor-pointer h-full flex flex-col hover:animate-bounce-slow"
              >
                <div className="text-5xl mb-3 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-50 mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm flex-grow">{item.desc}</p>
                <p className="text-pink-300 font-semibold text-sm mt-3 pt-3 border-t border-pink-400/20">
                  {item.metrics}
                </p>
              </div>
            ))}
          </div>

          <div className="relative w-full min-h-96 rounded-2xl overflow-hidden border-2 border-pink-400/40 hover:border-pink-400/80 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 cursor-pointer group hover:scale-103 animate-fade-in-up">
            <img
              src="/convolutional-neural-network-cnn-visualization-col.jpg"
              alt="CNN Architecture - Convolutional layers extract features, demonstrating hierarchical feature learning"
              className="w-full h-full object-contain bg-slate-800/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-pink-300 font-bold text-2xl">Convolutional Neural Networks</p>
              <p className="text-slate-300 text-base mt-2 leading-relaxed">
                Hierarchical feature extraction from raw pixels to abstract patterns enables superhuman image
                recognition
              </p>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-pink-500/30 border border-pink-400 rounded-full backdrop-blur-sm">
              <p className="text-pink-200 text-xs font-semibold">2012 AlexNet Revolution</p>
            </div>
          </div>

          {/* Key Developments */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-pink-500/5 to-purple-500/5 border border-pink-400/20 hover:border-pink-400/40 hover:scale-102 transition-all duration-300 cursor-pointer animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-50 mb-6">Key Developments in Deep Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "GPU Acceleration",
                  desc: "Dramatically accelerated training, enabling models to learn massive datasets in weeks",
                  icon: "⚡",
                },
                {
                  title: "Deep Architectures",
                  desc: "Enabled capture of complex hierarchical features from pixels to abstract concepts",
                  icon: "🏗️",
                },
                {
                  title: "Transfer Learning",
                  desc: "Pre-trained models solve new problems faster with dramatically less data needed",
                  icon: "🔄",
                },
                {
                  title: "Convolutional Layers",
                  desc: "Became standard for vision tasks with pooling for efficiency and dimensionality reduction",
                  icon: "📐",
                },
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 group cursor-pointer hover:scale-102"
                >
                  <div className="flex-shrink-0 text-3xl h-10 flex items-center group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-slate-50 mb-1 group-hover:text-pink-300 transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-slate-300 text-sm">{point.desc}</p>
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
        .hover\\:scale-103:hover { transform: scale(1.03); }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}
