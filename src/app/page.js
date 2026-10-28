"use client";

import Copyright from "@/components/copyright";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    number: "01",
    icon: "◈",
    title: "Discover People",
    description:
      "Explore your community and find the people you want to connect with.",
    color: "from-violet-400 to-fuchsia-400",
  },
  {
    number: "02",
    icon: "⌕",
    title: "Find Connections",
    description:
      "Search profiles effortlessly and discover new connections in seconds.",
    color: "from-cyan-300 to-blue-400",
  },
  {
    number: "03",
    icon: "✦",
    title: "One Community",
    description:
      "Bring people together through a simple, organized, and modern experience.",
    color: "from-fuchsia-400 to-pink-400",
  },
];

const previewUsers = [
  {
    name: "Alex Morgan",
    role: "Product Designer",
    initials: "AM",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Jamie Chen",
    role: "Software Engineer",
    initials: "JC",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Taylor Smith",
    role: "Creative Developer",
    initials: "TS",
    color: "from-orange-300 to-pink-500",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080b1a] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="absolute -right-32 top-40 h-120 w-120 rounded-full bg-blue-500/20 blur-[150px]" />

        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.10),transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[48px_48px] mask-[linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#080b1a]/65 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/8 text-xl shadow-lg shadow-violet-500/10 transition duration-300 group-hover:rotate-6 group-hover:border-violet-300/50">
              <span className="bg-linear-to-br from-violet-300 to-cyan-300 bg-clip-text font-bold text-transparent">
                D
              </span>
            </span>

            <span className="text-xl font-bold tracking-tight">
              Deep<span className="text-violet-300">People</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm text-white/70 transition hover:text-white"
            >
              About
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/users"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.07] hover:text-white"
            >
              Explore Users
            </Link>

            <Link
              href="/users"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-violet-500/10 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-white/16"
            >
              Get Started
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/6 text-xl transition hover:bg-white/12 md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b0f22]/95 px-5 py-5 backdrop-blur-2xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {[
                ["Home", "#home"],
                ["Features", "#features"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {label}
                </a>
              ))}
              <Link
                href="/users"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl border border-violet-300/30 bg-violet-500/20 px-4 py-3 text-center text-sm font-semibold transition hover:bg-violet-500/30"
              >
                Explore Users →
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:pb-32 lg:pt-28"
      >
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/8 px-4 py-2 text-xs font-medium tracking-wide text-violet-200 shadow-lg shadow-violet-950/20 backdrop-blur-xl sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            A better way to connect
          </div>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Your people.
            <br />
            Your{" "}
            <span className="bg-linear-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              community.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300/75 sm:text-lg">
            Discover people, explore profiles, and build meaningful connections
            in one beautifully simple space. Your community starts here.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/user"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-violet-300/40 bg-linear-to-r from-violet-600/90 via-indigo-500/90 to-blue-500/90 px-7 py-4 font-semibold shadow-xl shadow-violet-950/40 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/20"
            >
              Explore Community
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/4.5 px-7 py-4 font-medium text-white/85 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/9"
            >
              Discover Features
              <span className="text-white/50">↘</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-7">
            <div>
              <p className="text-sm font-semibold text-white">Simple</p>
              <p className="mt-1 text-xs text-slate-400">Easy to explore</p>
            </div>

            <div className="h-9 w-px bg-white/10" />

            <div>
              <p className="text-sm font-semibold text-white">Connected</p>
              <p className="mt-1 text-xs text-slate-400">People in one place</p>
            </div>

            <div className="h-9 w-px bg-white/10" />

            <div>
              <p className="text-sm font-semibold text-white">Intuitive</p>
              <p className="mt-1 text-xs text-slate-400">
                Designed for discovery
              </p>
            </div>
          </div>
        </div>

        {/* Glass dashboard preview */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-linear-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border border-white/16 bg-white/5.5 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-200/70">
                  Community space
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  People directory
                </h2>
              </div>

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 px-4 py-3.5">
              <span className="text-lg text-white/45">⌕</span>
              <span className="text-sm text-white/40">
                Search people, names, emails...
              </span>

              <span className="ml-auto rounded-md border border-white/10 bg-white/6 px-2 py-1 text-[10px] text-white/40">
                SEARCH
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-white/85">
                Community members
              </p>
              <span className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                Preview
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {previewUsers.map((user, index) => (
                <div
                  key={user.initials}
                  className="group flex items-center gap-4 rounded-2xl border border-white/9 bg-white/[0.035] p-3.5 transition duration-300 hover:translate-x-1 hover:border-white/20 hover:bg-white/7.5 sm:p-4"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${user.color} text-sm font-bold text-white shadow-lg`}
                  >
                    {user.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white/90">
                      {user.name}
                    </p>
                    <p className="mt-1 truncate text-xs text-slate-400">
                      {user.role}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white/60 transition group-hover:border-violet-300/30 group-hover:text-violet-200">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/users"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-300/20 bg-violet-500/12 py-3.5 text-sm font-medium text-violet-100 transition hover:border-violet-300/40 hover:bg-violet-500/20"
            >
              Explore the directory <span>→</span>
            </Link>

            <p className="mt-3 text-center text-[11px] text-slate-500">
              Illustrative preview · Visit the directory for your user data
            </p>
          </div>

          {/* Floating glass accents */}
          <div className="absolute -right-3 top-12 hidden rounded-2xl border border-white/15 bg-[#151b35]/80 p-3 shadow-xl backdrop-blur-2xl sm:block sm:-right-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-lg text-cyan-200">
                ✦
              </div>

              <div>
                <p className="text-xs font-semibold">Discover</p>
                <p className="mt-1 text-[10px] text-slate-400">Something new</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/15 bg-[#151b35]/85 px-4 py-3 shadow-xl backdrop-blur-2xl sm:block">
            <p className="text-xs text-slate-400">Your community</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Starts with a connection <span className="text-cyan-300">✧</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-24 border-t border-white/[0.07]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Built for connection
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Everything feels{" "}
              <span className="bg-linear-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                more connected.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A focused, friendly space to discover people without the clutter.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/6.5 hover:shadow-2xl hover:shadow-violet-950/20 sm:p-8"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-400/20" />
                <div className="relative flex items-center justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br ${feature.color} bg-clip-text text-3xl text-transparent`}
                  >
                    {feature.icon}
                  </span>

                  <span className="text-sm font-medium tracking-widest text-white/25">
                    {feature.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
                <div className="relative mt-7 h-px w-full bg-linear-to-r from-violet-400/40 via-white/10 to-transparent" />
                <Link
                  href="/users"
                  className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition group-hover:text-cyan-200"
                >
                  Explore more{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section
        id="about"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-10"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl border border-white/[0.14] bg-white/4.5 px-6 py-14 text-center shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-20 -top-28 h-64 w-64 rounded-full bg-violet-500/20 blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-200/60 to-transparent" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-medium text-violet-200">
              YOUR NEXT CONNECTION STARTS HERE
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              Ready to meet your{" "}
              <span className="bg-linear-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                community?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300/70 sm:text-base">
              Take the first step. Explore the directory and discover the people
              who make your community unique.
            </p>
            <Link
              href="/users"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold shadow-xl shadow-violet-950/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/16"
            >
              Explore People
              <span className="transition-transform group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="relative overflow-hidden border-t border-white/8">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-32 w-80 -translate-x-1/2 rounded-full bg-violet-500/8 blur-[80px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-7 sm:px-8 md:flex-row lg:px-10">
          {/* Brand */}
          <Link
            href="/"
            aria-label="DeepPeople home"
            className="group flex items-center gap-2.5"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-violet-300/20 bg-linear-to-br from-violet-500/20 to-cyan-400/10 text-sm font-bold text-violet-200 shadow-lg shadow-violet-950/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-violet-300/50 group-hover:shadow-violet-500/20">
              <span className="absolute inset-0 bg-linear-to-br from-violet-400/0 to-cyan-300/0 transition-all duration-300 group-hover:from-violet-400/15 group-hover:to-cyan-300/10" />
              <span className="relative">D</span>
            </span>

            <span className="text-base font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-200">
              Deep<span className="text-violet-300">People</span>
            </span>
          </Link>

          {/* Copyright */}
          <Copyright
            brand="DeepPeople"
            tagline="Built for better connections."
            className="order-3 md:order-2"
          />

          {/* <p className="order-3 text-center text-xs leading-6 text-slate-500 md:order-2">
            © 2026 DeepPeople. Built for better connections.
          </p> */}

          {/* Social links */}
          <div className="order-2 flex items-center gap-3 md:order-3">
            {/* GitHub */}
            <a
              href="https://github.com/marleyDip"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              title="GitHub"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-violet-400/8 hover:text-white hover:shadow-lg hover:shadow-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.44 3.05-1.15 3.05-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3.01 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>

              <span>GitHub</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                aria-hidden="true"
              >
                <path d="M14 4h6v6" />
                <path d="M20 4 10 14" />
                <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
              </svg>
            </a>

            {/* Portfolio */}
            <a
              href="https://marleydip.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit portfolio website"
              title="Portfolio"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-violet-300/20 bg-linear-to-r from-violet-500/12 to-indigo-400/8 px-3.5 py-2.5 text-xs font-medium text-violet-100 shadow-sm shadow-violet-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:from-violet-500/20 hover:to-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="3" />
                <path d="M3 9h18" />
                <path d="m8 14 2 2 4-4" />
              </svg>

              <span>Portfolio</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-violet-300/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                aria-hidden="true"
              >
                <path d="M14 4h6v6" />
                <path d="M20 4 10 14" />
                <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:px-8 md:flex-row lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07] font-bold text-violet-200">
              D
            </span>

            <span className="font-semibold tracking-tight">
              Deep<span className="text-violet-300">People</span>
            </span>
          </Link>

          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} DeepPeople. Built for better
            connections.
          </p>

          <Link
            href="/users"
            className="text-sm text-slate-400 transition hover:text-violet-200"
          >
            Browse directory →
          </Link>
        </div>
      </footer> */}
    </main>
  );
}

// "use client";

// import { useState } from "react";

// const features = [
//   {
//     icon: "♙",
//     title: "Member Directory",
//     description:
//       "Explore your community with organized profiles, contact information, and a beautiful member directory.",
//     color: "from-violet-500 to-indigo-500",
//   },
//   {
//     icon: "⌕",
//     title: "Smart Discovery",
//     description:
//       "Find the right people instantly with interactive search and flexible sorting options.",
//     color: "from-cyan-500 to-blue-500",
//   },
//   {
//     icon: "✦",
//     title: "Premium Experience",
//     description:
//       "Enjoy a clean, responsive interface with smooth interactions and thoughtful details.",
//     color: "from-fuchsia-500 to-pink-500",
//   },
// ];

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {/* Glass navbar */}
//       <header className="sticky top-3 z-50 mx-auto max-w-7xl px-4">
//         <nav className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-4 shadow-2xl shadow-black/10 backdrop-blur-2xl">
//           <a href="/" className="flex items-center gap-3 font-bold text-white">
//             <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-violet-400 to-indigo-500 shadow-lg shadow-violet-500/30">
//               D
//             </span>
//             DeepPeople
//           </a>

//           <a
//             href="/users"
//             className="rounded-xl border border-white/20 bg-gradient-to-r from-violet-500/90 to-blue-500/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-400/40"
//           >
//             Explore Members ↗
//           </a>
//         </nav>
//       </header>

//       {/* Ambient page background */}
//       <main className="relative isolate min-h-screen overflow-hidden bg-[#101735] text-white">
//         <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-violet-500/30 blur-[120px]" />
//         <div className="pointer-events-none absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-blue-500/25 blur-[120px]" />

//         {/* Glass hero card */}
//         <section className="mx-auto max-w-7xl px-5 py-24">
//           <div className="grid items-center gap-12 rounded-[2rem] border border-white/15 bg-white/[0.055] p-7 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-12 lg:grid-cols-2 lg:p-16">
//             <div>
//               <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-medium text-emerald-200">
//                 ✦ Connect · Discover · Grow
//               </span>

//               <h1 className="mt-7 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
//                 Your People.
//                 <br />
//                 <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
//                   Your Community.
//                 </span>
//               </h1>

//               <p className="mt-6 max-w-lg leading-8 text-blue-100/70">
//                 Discover members, build connections, and bring your community
//                 together in a beautifully designed space.
//               </p>

//               <a
//                 href="/users"
//                 className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-4 font-semibold shadow-xl shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:brightness-110"
//               >
//                 Explore Members <span>→</span>
//               </a>
//             </div>

//             {/* Glass dashboard preview */}
//             <div className="rounded-3xl border border-white/20 bg-white/[0.08] p-5 shadow-2xl shadow-indigo-950/30 backdrop-blur-2xl transition duration-500 hover:border-violet-300/40 sm:p-7">
//               <div className="flex items-center justify-between border-b border-white/10 pb-5">
//                 <div>
//                   <h2 className="font-semibold">Community members</h2>
//                   <p className="mt-1 text-xs text-blue-100/50">
//                     Discover your community
//                   </p>
//                 </div>
//                 <span className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs text-emerald-200">
//                   ● Connected
//                 </span>
//               </div>

//               <div className="mt-5 grid grid-cols-2 gap-3">
//                 {[
//                   { icon: "♙", title: "Member profiles" },
//                   { icon: "✧", title: "Smart discovery" },
//                   { icon: "◇", title: "Easy navigation" },
//                   { icon: "✦", title: "Modern design" },
//                 ].map((item) => (
//                   <div
//                     key={item.title}
//                     className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.1]"
//                   >
//                     <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-400/30 to-blue-400/20 text-xl text-violet-100">
//                       {item.icon}
//                     </span>
//                     <p className="mt-4 text-sm font-medium">{item.title}</p>
//                   </div>
//                 ))}
//               </div>

//               <a
//                 href="/users"
//                 className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-indigo-400/[0.08] p-4 text-sm text-blue-100/80 transition hover:bg-indigo-400/[0.15]"
//               >
//                 Open member directory
//                 <span className="text-lg text-violet-200">↗</span>
//               </a>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
