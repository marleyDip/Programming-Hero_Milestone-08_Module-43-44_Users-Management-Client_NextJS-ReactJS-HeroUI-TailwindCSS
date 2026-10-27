import Users from "@/components/users";
import { Suspense } from "react";

async function getUsers() {
  const response = await fetch("http://localhost:5000/users", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load members.");
  }

  return response.json();
}

function UsersSkeleton() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-slate-200" />

            <div className="flex-1 space-y-3">
              <div className="h-4 w-2/3 rounded bg-slate-200" />
              <div className="h-3 w-full rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-8 h-20 rounded-xl bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

export default function UsersPage() {
  const userPromise = getUsers();

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col bg-[#17152b] p-6 text-white lg:flex">
          <a href="/users" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-indigo-500 text-xl font-black shadow-lg shadow-violet-900/40">
              U
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">UniPeople</p>
              <p className="text-xs text-slate-400">Community workspace</p>
            </div>
          </a>

          <p className="mb-4 mt-12 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            Workspace
          </p>

          <nav className="space-y-2">
            <a
              href="/users"
              aria-current="page"
              className="flex items-center gap-3 rounded-xl bg-violet-500/15 px-4 py-3.5 text-sm font-semibold text-violet-200 ring-1 ring-violet-400/20"
            >
              <span className="text-lg">♙</span>
              Members
              <span className="ml-auto h-2 w-2 rounded-full bg-violet-400" />
            </a>

            <div className="flex cursor-default items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span className="text-lg">◇</span>
              Overview
            </div>

            <div className="flex cursor-default items-center gap-3 rounded-xl px-4 py-3.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span className="text-lg">⚙</span>
              Settings
            </div>
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/4 p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/10 text-lg text-amber-300">
              ✦
            </div>

            <p className="text-sm font-semibold">A better way to connect</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Your community, organized in one beautiful space.
            </p>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            UniPeople · Community edition
          </p>
        </aside>

        {/* Main content */}
        <section className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-9 lg:px-12">
          {/* Top bar */}
          <header className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                Workspace / Members
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Member directory
              </h1>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-lg shadow-sm">
              ♙
            </div>
          </header>

          {/* Welcome banner */}
          <div className="relative mb-8 overflow-hidden rounded-3xl bg-linear-to-br from-[#28234b] via-[#43338b] to-[#6854d9] p-6 text-white shadow-xl shadow-violet-900/10 sm:p-9">
            <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-35 border-white/6" />
            <div className="pointer-events-none absolute -bottom-28 right-32 h-64 w-64 rounded-full bg-violet-300/10 blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-violet-100">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Your community at a glance
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Great communities
                <br />
                start with people.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-violet-100/80 sm:text-base">
                Find members, explore profiles, and keep everyone connected in
                one organized workspace.
              </p>

              <a
                href="#directory"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-50"
              >
                Explore members
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* Interactive directory */}
          <section
            id="directory"
            className="scroll-mt-6 rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-7"
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold tracking-tight">All members</h2>
              <p className="mt-1 text-sm text-slate-500">
                Search, organize, and explore your community.
              </p>
            </div>

            <Suspense fallback={<UsersSkeleton />}>
              <Users userPromise={userPromise} />
            </Suspense>
          </section>

          <footer className="flex flex-col justify-between gap-2 py-7 text-xs text-slate-400 sm:flex-row">
            <p>© {new Date().getFullYear()} UniPeople</p>
            <p>Built for better connections.</p>
          </footer>
        </section>
      </div>
    </main>
  );
}

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
