"use client";

import { useEffect, useState } from "react";

export default function EntrySplash2() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const key = "unipeople-splash-seen";

    if (sessionStorage.getItem(key)) {
      setChecked(true);
      return;
    }

    setVisible(true);
    setChecked(true);
    sessionStorage.setItem(key, "true");

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => clearTimeout(timeout);
  }, []);

  if (!checked || !visible) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-[#080b1a] px-5 text-white animate-[splashFadeIn_0.4s_ease-out]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-violet-600/25 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Glass card */}
      <div className="relative w-full max-w-sm overflow-hidden rounded-4xl border border-white/15 bg-white/5.5 px-8 py-12 text-center shadow-2xl shadow-violet-950/40 backdrop-blur-2xl sm:px-12">
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-violet-300 to-transparent" />

        {/* Animated logo */}
        <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-4xl border border-violet-300/30 [animation-duration:2s]" />

          <div className="absolute inset-2 rotate-45 rounded-3xl border border-violet-300/30 bg-linear-to-br from-violet-500/20 to-cyan-400/10 shadow-[0_0_45px_rgba(139,92,246,0.25)]" />

          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/8">
            <span className="bg-linear-to-br from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent">
              D
            </span>
          </div>

          <span className="absolute right-0 top-1 h-3 w-3 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight">
          Deep<span className="text-violet-300">People</span>
        </h1>

        <p className="mt-3 text-sm text-slate-400">
          Your people. Your community.
        </p>

        {/* Animated progress bar */}
        <div className="mt-10 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[splashProgress_2.2s_ease-in-out_forwards] rounded-full bg-linear-to-r from-violet-500 via-fuchsia-400 to-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
        </div>

        <p className="mt-5 animate-pulse text-[10px] font-medium tracking-[0.22em] text-white/45">
          PREPARING YOUR EXPERIENCE
        </p>

        <div className="mt-7 flex justify-center gap-2">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-300" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-fuchsia-300 [animation-delay:150ms]" />

          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-300 [animation-delay:300ms]" />
        </div>
      </div>

      <p className="absolute bottom-7 text-xs text-slate-500">
        Made for better connections <span className="text-violet-300">✦</span>
      </p>

      <style jsx>{`
        @keyframes splashProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes splashFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
