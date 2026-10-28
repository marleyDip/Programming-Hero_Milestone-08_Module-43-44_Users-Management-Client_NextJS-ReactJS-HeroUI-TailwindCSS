// import Users from "@/components/users";
// import { Suspense } from "react";

// const userPromise = async () => {
//   const data = await fetch("http://localhost:5000/users");
//   return data.json();

//   // return await data.json();
// };

// const UsersPage = async () => {
//   // const data = await fetch("http://localhost:5000/users");
//   // const users = await data.json();

//   return (
//     <div>
//       {/* <h2>Users data coming soon: {users.length} </h2> */}

//       <Suspense fallback={<h2>Loading...</h2>}>
//         <Users userPromise={userPromise} />
//       </Suspense>
//     </div>
//   );
// };

// export default UsersPage;

import Footer from "@/components/footer";
import User from "@/components/user";

import Link from "next/link";
import { Suspense } from "react";

const getUsers = () => {
  return fetch("http://localhost:5000/users", {
    cache: "no-store",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  });
};

const UserPage = () => {
  const userPromise = getUsers();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090f] px-4 py-12 text-white sm:px-8 lg:px-12">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-96 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              DIRECTORY OVERVIEW
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Meet your{" "}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                people.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Discover your community, explore member profiles, and connect with
              the people who make your platform special.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-2xl border border-white/10 bg-white/4 px-5 py-4 shadow-xl backdrop-blur-xl sm:self-auto">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 text-xl">
              ✦
            </div>

            <div>
              <p className="text-xs text-slate-400">Workspace</p>
              <p className="mt-1 font-semibold">User Community</p>
            </div>
          </div>
        </header>

        {/* Overview cards */}
        <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-white/8 bg-linear-to-br from-violet-500/12 to-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Community members</span>
              <span className="text-xl text-violet-300">♙</span>
            </div>

            <p className="mt-5 text-3xl font-bold">Members</p>
            <p className="mt-2 text-xs text-slate-500">
              All registered users in one place
            </p>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/2.5 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Experience</span>
              <span className="text-xl text-indigo-300">✧</span>
            </div>

            <p className="mt-5 text-3xl font-bold">Connected</p>
            <p className="mt-2 text-xs text-slate-500">
              A modern, organized directory
            </p>
          </div>

          <div className="group rounded-2xl border border-white/8 bg-white/2.5 p-6 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">Design system</span>
              <span className="text-xl text-fuchsia-300">◈</span>
            </div>

            <p className="mt-5 text-3xl font-bold">Premium UI</p>
            <p className="mt-2 text-xs text-slate-500">
              Responsive layouts with glass effects
            </p>
          </div>
        </section>

        {/* Directory */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/2.5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
          <div className="flex flex-col gap-3 border-b border-white/8 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Community directory
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Browse your registered members
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-xl border border-violet-400/20 bg-linear-to-r from-violet-500/10 via-indigo-500/8 to-cyan-400/8 px-4 py-1.75 text-xs font-medium text-slate-200 shadow-lg shadow-violet-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/40 hover:shadow-xl hover:shadow-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                {/* Hover glow */}
                <span className="absolute inset-0 bg-linear-to-r from-violet-500/0 via-violet-400/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Home icon */}
                <span className="relative flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-violet-300 transition-all duration-300 group-hover:border-violet-300/30 group-hover:bg-violet-400/15 group-hover:text-cyan-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="m3 10 9-7 9 7" />
                    <path d="M5 9v11h14V9" />
                    <path d="M9 20v-6h6v6" />
                  </svg>
                </span>

                <span className="relative">Home</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative h-3 w-3 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>

              <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/5 px-4 py-2.5 text-xs text-slate-300 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live data
              </div>
            </div>

            {/* <div>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-xs text-slate-300"
              >
                Home
              </Link>

              <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-2.5 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live data
              </div>
            </div> */}
          </div>

          <div className="p-5 sm:p-8">
            <Suspense fallback={<UsersLoading />}>
              <User userPromise={userPromise} />
            </Suspense>
          </div>
        </section>

        <Footer
          brand="User Community"
          tagline="Designed with care · Built with Next.js"
          className="mt-8 pt-6 border-white/6 text-slate-500"
        />

        {/* <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-white/6 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} User Community</p>
          <p>Designed with care · Built with Next.js</p>
        </footer> */}
      </div>
    </main>
  );
};

function UsersLoading() {
  return (
    <div>
      <div className="mb-6 h-4 w-40 animate-pulse rounded bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border border-white/8 bg-white/2.5 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white/10" />
              <div className="flex-1 space-y-3">
                <div className="h-4 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-full rounded bg-white/6" />
              </div>
            </div>

            <div className="mt-6 h-9 rounded-xl bg-white/6" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
