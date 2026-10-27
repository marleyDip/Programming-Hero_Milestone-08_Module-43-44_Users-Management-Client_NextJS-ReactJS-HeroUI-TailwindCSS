// export default function Home() {
//   return <div className=""></div>;
// }

"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: "♙",
    title: "Member Directory",
    description:
      "Explore your community with organized profiles, contact information, and a beautiful member directory.",
    color: "from-violet-500 to-indigo-500",
  },
  {
    icon: "⌕",
    title: "Smart Discovery",
    description:
      "Find the right people instantly with interactive search and flexible sorting options.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: "✦",
    title: "Premium Experience",
    description:
      "Enjoy a clean, responsive interface with smooth interactions and thoughtful details.",
    color: "from-fuchsia-500 to-pink-500",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090f] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/15 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/8 bg-black/10 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-indigo-600 text-xl font-black shadow-lg shadow-violet-900/40 transition duration-300 hover:rotate-6 hover:scale-105">
              D
            </div>

            <div>
              <span className="text-lg font-bold tracking-tight">
                DeepPeople
              </span>
              <p className="text-[10px] tracking-[0.2em] text-slate-500">
                COMMUNITY PLATFORM
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              About
            </a>
            <Link
              href="/users"
              className="rounded-xl border border-white/10 bg-white/4 px-5 py-2.5 text-sm font-semibold transition hover:border-violet-400/40 hover:bg-violet-500/10"
            >
              Explore Members <span className="ml-1">↗</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-5 mb-4 space-y-1 rounded-2xl border border-white/10 bg-[#151320] p-3 md:hidden">
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              About
            </a>
            <Link
              href="/users"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200"
            >
              Explore Members ↗
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-2 lg:gap-10 lg:pb-32 lg:pt-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/8 px-4 py-2 text-xs font-medium text-violet-200 shadow-lg shadow-violet-950/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            A NEW WAY TO CONNECT
          </div>

          <h1 className="mt-8 max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Your people.
            <br />
            Your{" "}
            <span className="bg-linear-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
              community.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Meet the people who make your community special. Discover member
            profiles, find connections, and bring everyone together in one
            beautifully organized space.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/users"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-7 py-4 text-sm font-bold shadow-xl shadow-violet-950/40 transition duration-300 hover:-translate-y-1 hover:shadow-violet-600/25"
            >
              Explore Community
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-7 py-4 text-sm font-semibold text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              Discover Features
              <span>↓</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Simple to explore
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Responsive design
            </span>
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span> Built with Next.js
            </span>
          </div>
        </div>

        {/* Interactive-style dashboard preview */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-5 rounded-4xl bg-linear-to-br from-violet-500/20 via-indigo-500/10 to-fuchsia-500/20 opacity-70 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111b]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/8 pb-5">
              <div>
                <p className="text-sm font-bold">Community overview</p>
                <p className="mt-1 text-xs text-slate-500">
                  Your people, in one place
                </p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-violet-400/15 bg-linear-to-br from-violet-500/13 to-transparent p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-xl text-violet-300">
                  ♙
                </div>

                <p className="mt-5 text-xs text-slate-400">Community</p>
                <p className="mt-1 text-xl font-bold">Members</p>
                <p className="mt-2 text-[11px] text-violet-300">
                  People together
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-400/15 bg-linear-to-br from-indigo-500/12 to-transparent p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-400/10 text-xl text-indigo-300">
                  ✧
                </div>

                <p className="mt-5 text-xs text-slate-400">Experience</p>
                <p className="mt-1 text-xl font-bold">Discover</p>
                <p className="mt-2 text-[11px] text-indigo-300">
                  Find connections
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/8 bg-white/2.5 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Member preview</p>
                  <p className="mt-1 text-xs text-slate-500">
                    A glimpse of your directory
                  </p>
                </div>

                <Link
                  href="/users"
                  className="text-xs font-semibold text-violet-300 transition hover:text-violet-200"
                >
                  View all ↗
                </Link>
              </div>

              {[
                {
                  initials: "JD",
                  name: "Jordan Davis",
                  role: "Community member",
                  color: "from-violet-500 to-indigo-500",
                },
                {
                  initials: "AM",
                  name: "Alex Morgan",
                  role: "Community member",
                  color: "from-fuchsia-500 to-pink-500",
                },
                {
                  initials: "TC",
                  name: "Taylor Chen",
                  role: "Community member",
                  color: "from-cyan-500 to-blue-500",
                },
              ].map((person, index) => (
                <div
                  key={person.initials}
                  className="flex items-center gap-3 rounded-xl px-2 py-3 transition duration-300 hover:bg-white/4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${person.color} text-xs font-bold shadow-lg shadow-black/20`}
                  >
                    {person.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {person.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{person.role}</p>
                  </div>
                  <span className="text-slate-600">↗</span>
                </div>
              ))}

              <p className="mt-3 border-t border-white/6 pt-4 text-center text-[11px] text-slate-500">
                Preview data · Open the directory to view real members
              </p>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -right-3 top-16 hidden animate-bounce rounded-2xl border border-white/10 bg-[#1b1830] p-3 text-xl shadow-xl sm:block">
            ✦
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#171525] px-4 py-3 shadow-xl sm:block">
            <p className="text-xs font-semibold text-emerald-300">
              Made for connection
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 border-y border-white/[0.07] bg-white/1.5 px-5 py-20 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              What makes us different
            </p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
              Everything starts with{" "}
              <span className="text-violet-400">people.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              A thoughtful experience designed to make your community easier to
              discover and navigate.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/4.5 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${feature.color} text-2xl shadow-lg shadow-black/20 transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                <p className="mt-7 text-xs font-semibold text-slate-600">
                  0{index + 1} / FEATURE
                </p>

                <h3 className="mt-2 text-xl font-bold">{feature.title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-7 h-px w-full bg-linear-to-r from-violet-500/40 via-white/10 to-transparent transition duration-300 group-hover:via-violet-400/40" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section id="about" className="relative z-10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-violet-500/12 via-white/[0.035] to-indigo-500/8 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-2xl text-violet-300">
            ✦
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Your community is waiting to be discovered.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Take a look around, discover your members, and experience a more
            organized way to connect.
          </p>

          <Link
            href="/users"
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 px-7 py-4 text-sm font-bold shadow-xl shadow-violet-950/30 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/20"
          >
            Explore the Directory
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/8 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-indigo-600 text-sm font-black">
              U
            </span>
            <span className="text-sm font-bold">DeepPeople</span>
          </Link>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DeepPeople. Built for community.
          </p>

          <Link
            href="/users"
            className="text-xs font-semibold text-slate-400 transition hover:text-violet-300"
          >
            Explore members ↗
          </Link>
        </div>
      </footer>
    </main>
  );
}
