"use client"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative">
      {/* Contributor Button - Top Left */}
      <div className="absolute top-8 left-8 z-20">
        <button
          className="group relative"
          onClick={() => {
            const dialog = document.getElementById("contributors-dialog")
            if (dialog) (dialog as HTMLDialogElement).showModal()
          }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-600/50 hover:border-slate-500/80 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
            <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
              Contributors
            </span>
            <svg
              className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.26 2.632 1.732-.203.54.406 1.08.916.856.51-.223.728.895.456 1.54-.28.646.096 1.335.73 1.591.634.256 1.59-.227 1.851-.896.31-.681 1.395-.81 1.653-.193.259.617-.37 1.572-1.063 1.941-.693.37-.683 1.511.062 1.82.745.309 1.506-.906 1.172-1.556-.334-.649.016-1.546.744-1.627.728-.081 1.58.555 1.39 1.258-.19.703.433 1.479 1.186 1.341.753-.138.94-1.312.438-1.84-.502-.528-.056-1.581.898-1.511.954.07 1.545-1.118.763-1.694-.782-.576-.308-1.608.777-1.677.905-.055 1.488-1.139.733-1.767"
              />
            </svg>
          </div>
        </button>

        <dialog
          id="contributors-dialog"
          className="backdrop:bg-black/50 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl shadow-purple-500/20 max-w-md"
        >
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
              Contributors
            </h3>
            <div className="space-y-4 mb-8">
              {[
                "Pranav Chaudhari (124B1B027)",
                "Mayuresh Mandalik (124B1B184)",
                "Madhura Barve (124B1B185)",
                "Shreya Jadhav (124B1B182)",
              ].map((name, idx) => (
                <div
                  key={name}
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <p className="text-slate-300 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    {name}
                  </p>
                </div>
              ))}
            </div>
            <form method="dialog">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/40 hover:border-cyan-400/70 text-cyan-300 rounded-lg hover:bg-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 font-semibold">
                Close
              </button>
            </form>
          </div>
        </dialog>
      </div>

      {/* PCCOE Info - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <div className="text-right">
          <p className="text-xs font-semibold text-slate-400 tracking-wide">PCCOE</p>
          <p className="text-xs text-slate-500">Department of Computer Engineering</p>
          <p className="text-xs text-slate-600">2025–26</p>
        </div>
      </div>

      {/* Center PCCOE Footer */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-sm font-medium text-cyan-300 animate-fade-in">
              From Rules to Intelligence
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight animate-fade-in-delay-1">
            The Evolution of AI
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Discover the transformative journey from rigid rule-based systems to sophisticated generative models that
            understand, learn, and create.
          </p>

          {/* CHANGE: PCCOE text moved below Discover text */}
          <div className="pt-4">
            <p className="text-sm font-medium text-slate-400/70 tracking-wide">
              <span className="text-cyan-400">●</span> Presented by PCCOE Computer Department
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-slate-400">Scroll to explore</span>
            <svg
              className="w-5 h-5 text-cyan-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay-1 { animation: fade-in 0.8s ease-out 0.3s both; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s both; }
      `}</style>
    </section>
  )
}
