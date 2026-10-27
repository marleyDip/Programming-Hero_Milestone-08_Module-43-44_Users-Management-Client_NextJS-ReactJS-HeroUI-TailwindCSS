// import { use } from "react";

// const Users = ({ userPromise }) => {
//   const users = use(userPromise());

//   return (
//     <div>
//       <h2>Users in the component: {users.length}</h2>

//       {users.map((user) => (
//         <li key={user.id}>
//           {user.name}: {user.email}
//         </li>
//       ))}
//     </div>
//   );
// };

// export default Users;

import { use } from "react";

const avatarGradients = [
  "from-violet-500 to-indigo-600",
  "from-fuchsia-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-orange-400 to-pink-600",
  "from-indigo-500 to-violet-600",
];

const User = ({ userPromise }) => {
  const users = use(userPromise);

  if (!Array.isArray(users) || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/4 text-4xl">
          ♙
        </div>

        <h3 className="text-xl font-semibold">No members yet</h3>
        <p className="mt-2 text-sm text-slate-400">
          Your community members will appear here.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Directory heading */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          Showing{" "}
          <span className="font-semibold text-white">{users.length}</span>{" "}
          {users.length === 1 ? "member" : "members"}
        </p>

        <span className="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-xs text-slate-400">
          All members
        </span>
      </div>

      {/* User cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {users.map((user, index) => {
          const name = user.name || "Unknown User";
          const email = user.email || "No email available";
          const initials = name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase();

          return (
            <article
              key={user.id ?? user._id ?? email}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-white/5.5 to-white/1.5 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-950/20"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/[0.07] blur-3xl transition duration-500 group-hover:bg-violet-400/15" />

              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${
                    avatarGradients[index % avatarGradients.length]
                  } text-lg font-bold text-white shadow-lg shadow-black/20 transition duration-300 group-hover:rotate-3 group-hover:scale-105`}
                >
                  {initials || "U"}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-semibold text-white transition group-hover:text-violet-200">
                    {name}
                  </h3>

                  <p className="mt-1 truncate text-xs text-slate-400">
                    {email}
                  </p>
                </div>

                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/8 bg-white/4 text-slate-400 transition group-hover:border-violet-400/30 group-hover:text-violet-300"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="my-5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                  <span className="truncate">Registered member</span>
                </div>

                <span className="shrink-0 rounded-lg bg-violet-400/9 px-2.5 py-1.5 text-[10px] font-semibold tracking-wider text-violet-300">
                  ID #{index + 1}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default User;
