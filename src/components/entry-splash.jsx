"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function EntrySplash() {
  const [shouldRender, setShouldRender] = useState(false);
  const [exiting, setExiting] = useState(false);

  const autoTimer = useRef(null);
  const exitTimer = useRef(null);

  const dismiss = useCallback(() => {
    setExiting(true);

    if (autoTimer.current) {
      clearTimeout(autoTimer.current);
    }

    if (exitTimer.current) {
      clearTimeout(exitTimer.current);
    }

    exitTimer.current = setTimeout(() => {
      setShouldRender(false);
    }, 750);
  }, []);

  useEffect(() => {
    const storageKey = "DeepPeople-splash-seen";

    try {
      if (sessionStorage.getItem(storageKey)) {
        return;
      }

      sessionStorage.setItem(storageKey, "true");
    } catch {
      // Continue normally if sessionStorage is unavailable.
    }

    setShouldRender(true);

    autoTimer.current = setTimeout(dismiss, 5000);

    return () => {
      if (autoTimer.current) clearTimeout(autoTimer.current);
      if (exitTimer.current) clearTimeout(exitTimer.current);
    };
  }, [dismiss]);

  if (!shouldRender) return null;

  return (
    <div
      className={`entry-splash fixed inset-0 z-9999 flex min-h-screen items-center justify-center overflow-hidden bg-[#050713] text-white ${
        exiting ? "entry-splash-exit" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to DeepPeople"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-128 w-lg rounded-full bg-violet-700/20 blur-[130px]" />

        <div className="absolute -right-40 -bottom-48 h-140 w-140 rounded-full bg-cyan-500/15 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-104 w-104 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />

        <div className="splash-grid absolute inset-0 opacity-30" />

        {Array.from({ length: 36 }, (_, i) => (
          <span
            key={i}
            className="splash-star absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: i % 5 === 0 ? "3px" : "2px",
              height: i % 5 === 0 ? "3px" : "2px",
              animationDelay: `${(i % 9) * 0.3}s`,
              opacity: 0.2 + (i % 5) * 0.12,
            }}
          />
        ))}
      </div>

      {/* Floating glass cards */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="splash-float absolute left-[9%] top-[30%] w-64 rounded-2xl border border-white/10 bg-white/4.5 p-4 shadow-2xl shadow-violet-950/30 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/15 text-xl">
              ✦
            </div>

            <div>
              <p className="text-sm font-semibold">Your community</p>
              <p className="mt-1 text-xs text-slate-400">
                Connect with your people
              </p>
            </div>
          </div>

          <div className="mt-5 flex -space-x-2">
            {["A", "S", "M", "R"].map((letter, i) => (
              <div
                key={letter}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#101326] text-xs font-bold"
                style={{
                  background: ["#8b5cf6", "#0891b2", "#6366f1", "#0d9488"][i],
                }}
              >
                {letter}
              </div>
            ))}

            <span className="ml-4 self-center text-xs text-slate-400">
              Growing together
            </span>
          </div>
        </div>

        <div className="splash-float-delayed absolute right-[9%] top-[34%] w-60 rounded-2xl border border-white/10 bg-white/4.5 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-200">
              Stay connected
            </span>

            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
          </div>

          <div className="mt-4 space-y-3">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />
            </div>

            <div className="flex justify-between text-xs text-slate-400">
              <span>Community engagement</span>
              <span>78%</span>
            </div>
          </div>
        </div>

        <div className="splash-float-delayed absolute bottom-[20%] left-[18%] rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-slate-300 backdrop-blur-xl">
          <span className="mr-2 text-cyan-300">✧</span>
          One place. More possibilities.
        </div>

        <div className="splash-float absolute bottom-[23%] right-[17%] rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-slate-300 backdrop-blur-xl">
          <span className="mr-2 text-violet-300">◈</span>
          Discover your community
        </div>
      </div>

      {/* Main welcome content */}
      <main className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 py-12 text-center">
        {/* Animated logo */}
        <div className="logo-stage relative mb-9 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
          <div className="logo-orbit logo-orbit-one absolute inset-1 rounded-full border border-violet-400/30" />

          <div className="logo-orbit logo-orbit-two absolute inset-4 rounded-full border border-cyan-300/25" />

          <span className="orbit-dot orbit-dot-one absolute" />
          <span className="orbit-dot orbit-dot-two absolute" />

          <div className="logo-glow absolute inset-8 rounded-4xl bg-violet-600/30 blur-2xl" />

          <div className="logo-core relative flex h-24 w-24 items-center justify-center rounded-[1.8rem] border border-white/25 bg-linear-to-br from-violet-500 via-indigo-600 to-cyan-500 shadow-[0_0_60px_rgba(124,58,237,0.35)] sm:h-28 sm:w-28">
            <div className="absolute inset-px rounded-[1.75rem] border border-white/20" />

            <span className="relative bg-linear-to-br from-white via-white to-cyan-100 bg-clip-text text-5xl font-black tracking-tighter text-transparent sm:text-6xl">
              D
            </span>
          </div>
        </div>

        <div className="splash-content">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-200 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            Your community, reimagined
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
            Welcome to
            <span className="mt-1 block bg-linear-to-r from-violet-300 via-indigo-200 to-cyan-300 bg-clip-text pb-2 text-transparent">
              DeepPeople
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            Discover meaningful connections, share ideas, and build a community
            where everyone belongs.
          </p>

          <button
            type="button"
            onClick={dismiss}
            className="splash-button group relative mt-9 inline-flex items-center gap-4 overflow-hidden rounded-2xl border border-white/20 bg-white/8 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_50px_rgba(99,102,241,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-white/13 hover:shadow-[0_15px_60px_rgba(124,58,237,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">Get Started</span>

            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-violet-400/20">
              →
            </span>
          </button>

          <div className="mt-9 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-slate-600" />
            Better together
            <span className="h-px w-8 bg-linear-to-l from-transparent to-slate-600" />
          </div>
        </div>

        {/* Bottom progress indicator */}
        <div className="absolute -bottom-12 left-1/2 w-32 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
          <div className="splash-progress h-0.5 rounded-full bg-linear-to-r from-violet-400 via-indigo-300 to-cyan-300" />
        </div>
      </main>

      <style jsx>{`
        .splash-grid {
          background-image:
            linear-linear(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-linear(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );
          background-size: 54px 54px;
          mask-image: radial-linear(ellipse at center, black, transparent 78%);
        }

        .splash-star {
          animation: twinkle 3s ease-in-out infinite;
        }

        .logo-orbit-one {
          transform: rotate(-25deg) scaleY(0.62);
          animation: orbit-spin 12s linear infinite;
        }

        .logo-orbit-two {
          transform: rotate(45deg) scaleY(0.76);
          animation: orbit-spin-reverse 16s linear infinite;
        }

        .orbit-dot {
          z-index: 2;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #a5f3fc;
          box-shadow: 0 0 18px rgba(103, 232, 249, 0.9);
        }

        .orbit-dot-one {
          top: 21px;
          right: 25px;
          animation: dot-float 4s ease-in-out infinite;
        }

        .orbit-dot-two {
          bottom: 26px;
          left: 22px;
          width: 6px;
          height: 6px;
          background: #c4b5fd;
          box-shadow: 0 0 16px rgba(167, 139, 250, 0.9);
          animation: dot-float 4s ease-in-out infinite reverse;
        }

        .logo-core {
          animation:
            logo-entrance 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both,
            logo-hover 5s ease-in-out 1.1s infinite;
        }

        .logo-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .splash-content {
          animation: content-entrance 1s 0.15s both;
        }

        .splash-float {
          animation: card-float 6s ease-in-out infinite;
        }

        .splash-float-delayed {
          animation: card-float 7s ease-in-out 1s infinite reverse;
        }

        .splash-progress {
          animation: progress-fill 5s linear both;
        }

        .entry-splash {
          animation: backdrop-entrance 0.5s ease-out both;
          transition:
            opacity 0.7s ease,
            visibility 0.7s ease;
        }

        .entry-splash-exit {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        @keyframes backdrop-entrance {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes logo-entrance {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.75);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes logo-hover {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -7px;
          }
        }

        @keyframes orbit-spin {
          from {
            rotate: 0deg;
          }
          to {
            rotate: 360deg;
          }
        }

        @keyframes orbit-spin-reverse {
          from {
            rotate: 360deg;
          }
          to {
            rotate: 0deg;
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        @keyframes dot-float {
          0%,
          100% {
            translate: 0 0;
          }
          50% {
            translate: 3px -5px;
          }
        }

        @keyframes content-entrance {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.25);
          }
        }

        @keyframes progress-fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .entry-splash *,
          .entry-splash {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
