"use client";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b1a] px-5 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-80 w-80 animate-pulse rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute -right-32 bottom-1/4 h-80 w-80 animate-pulse rounded-full bg-cyan-500/15 blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      {/* Glass panel */}
      <section className="relative w-full max-w-sm animate-[fadeIn_0.8s_ease-out] rounded-4xl border border-white/[0.14] bg-white/4.5 px-8 py-12 text-center shadow-2xl shadow-violet-950/30 backdrop-blur-2xl sm:px-12">
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-violet-300/70 to-transparent" />

        {/* Logo */}
        <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-4xl border border-violet-300/20 [animation-duration:3s]" />

          <div className="absolute inset-2 rotate-45 rounded-3xl border border-violet-300/30 bg-linear-to-br from-violet-500/20 to-cyan-400/10 shadow-[0_0_50px_rgba(139,92,246,0.2)] backdrop-blur-xl" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/8 shadow-xl">
            <span className="bg-linear-to-br from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
              D
            </span>
          </div>

          <span className="absolute right-0 top-1 h-3 w-3 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />
        </div>

        {/* Brand */}
        <h1 className="text-3xl font-bold tracking-tight">
          Deep<span className="text-violet-300">People</span>
        </h1>

        <p className="mt-3 text-sm tracking-wide text-slate-400">
          Your people. Your community.
        </p>

        {/* Loading indicator */}
        <div className="mx-auto mt-10 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-linear-to-r from-violet-500 via-fuchsia-400 to-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
        </div>

        <p className="mt-5 animate-pulse text-xs font-medium tracking-[0.2em] text-white/45">
          PREPARING YOUR EXPERIENCE
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-300" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fuchsia-300 [animation-delay:150ms]" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-300 [animation-delay:300ms]" />
        </div>
      </section>

      <p className="absolute bottom-7 text-xs tracking-wide text-slate-500">
        Made for better connections <span className="text-violet-300">✦</span>
      </p>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(210%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}
