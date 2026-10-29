"use client";

import { use, useMemo, useState } from "react";

const gradients = [
  "from-violet-500 to-indigo-500",
  "from-pink-500 to-rose-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-orange-400 to-pink-500",
  "from-blue-500 to-violet-500",
];

function getName(user) {
  return user.name?.trim() || "Unknown User";
}

function getInitials(name) {
  return (
    name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "U"
  );
}

export default function Users({ userPromise }) {
  // It declare in variable in the parent, so need to call it.
  const users = use(userPromise);

  // If it declare in function in the parent, so here need to function call.
  // const users = use(userPromise());

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [layout, setLayout] = useState("grid");
  const [selectedUser, setSelectedUser] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState("");

  const filteredUsers = useMemo(() => {
    if (!Array.isArray(users)) return [];

    const query = search.trim().toLowerCase();

    const result = users.filter((user) => {
      const name = getName(user).toLowerCase();
      const email = (user.email || "").toLowerCase();

      return name.includes(query) || email.includes(query);
    });

    result.sort((a, b) => {
      const nameA = getName(a).toLowerCase();
      const nameB = getName(b).toLowerCase();

      if (sortBy === "name-desc") {
        return nameB.localeCompare(nameA);
      }

      if (sortBy === "email-asc") {
        return (a.email || "").localeCompare(b.email || "");
      }

      return nameA.localeCompare(nameB);
    });

    return result;
  }, [users, search, sortBy]);

  async function copyEmail(email) {
    if (!email || !navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
    } catch {
      setCopiedEmail("");
    }
  }

  if (!Array.isArray(users) || users.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-3xl text-violet-600">
          ♙
        </div>
        <h3 className="mt-5 font-bold">Your directory is empty</h3>
        <p className="mt-2 text-sm text-slate-500">
          Members will appear here when they become available.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Search and controls */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <label className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-500/10">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5 shrink-0 text-slate-400"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
          </svg>

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by name or email..."
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
            aria-label="Search members by name or email"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="rounded-lg px-2 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-200"
            >
              Clear
            </button>
          )}
        </label>

        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
          <span className="whitespace-nowrap text-xs text-slate-500">
            Sort by
          </span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="min-w-0 bg-transparent py-3 text-sm font-medium outline-none"
            aria-label="Sort members"
          >
            <option value="name-asc">Name A–Z</option>
            <option value="name-desc">Name Z–A</option>
            <option value="email-asc">Email</option>
          </select>
        </label>

        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            aria-label="Grid view"
            aria-pressed={layout === "grid"}
            className={`flex h-10 w-11 items-center justify-center rounded-lg transition ${
              layout === "grid"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setLayout("list")}
            aria-label="List view"
            aria-pressed={layout === "list"}
            className={`flex h-10 w-11 items-center justify-center rounded-lg transition ${
              layout === "list"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M9 5h12M9 12h12M9 19h12" />
              <circle cx="4" cy="5" r="1" />
              <circle cx="4" cy="12" r="1" />
              <circle cx="4" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Results summary */}
      <div className="my-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-bold text-slate-900">
            {filteredUsers.length}
          </span>{" "}
          of {users.length} members
        </p>

        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Directory available
        </span>
      </div>

      {/* Member cards */}
      {filteredUsers.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 px-5 py-16 text-center">
          <p className="text-lg font-bold">No matching members</p>
          <p className="mt-2 text-sm text-slate-500">
            Try a different name or email address.
          </p>
          <button
            type="button"
            onClick={() => setSearch("")}
            className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Reset search
          </button>
        </div>
      ) : (
        <div
          className={
            layout === "grid"
              ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              : "flex flex-col gap-3"
          }
        >
          {filteredUsers.map((user) => {
            const name = getName(user);
            const email = user.email || "";
            const index = users.indexOf(user);

            return (
              <article
                key={user.id ?? user._id ?? email ?? name}
                className={`group relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-900/6 ${
                  layout === "grid" ? "p-5 hover:-translate-y-1" : "p-4 sm:p-5"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedUser(user)}
                  aria-label={`View profile for ${name}`}
                  className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500"
                />

                <div className="relative z-10 flex min-w-0 items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${
                      gradients[(index < 0 ? 0 : index) % gradients.length]
                    } text-lg font-bold text-white shadow-lg shadow-violet-900/10 transition duration-300 group-hover:scale-105`}
                  >
                    {getInitials(name)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-bold text-slate-900 transition group-hover:text-violet-700">
                      {name}
                    </h3>
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {email || "No email provided"}
                    </p>
                    <p className="mt-2 text-[11px] font-medium text-slate-400">
                      Community member
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-600"
                  >
                    ↗
                  </span>
                </div>

                {layout === "grid" ? (
                  <div className="relative z-10 mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-400">
                      Member profile
                    </span>
                    <button
                      type="button"
                      disabled={!email}
                      onClick={() => copyEmail(email)}
                      className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {copiedEmail === email && email
                        ? "Copied!"
                        : "Copy email"}
                    </button>
                  </div>
                ) : (
                  <div className="relative z-10 mt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!email}
                      onClick={() => copyEmail(email)}
                      className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-100 disabled:opacity-40"
                    >
                      {copiedEmail === email && email
                        ? "Copied!"
                        : "Copy email"}
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* Profile dialog */}
      {selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedUser(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            className="my-auto w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-32 bg-linear-to-br from-violet-600 via-indigo-600 to-blue-500">
              <div className="absolute -right-8 -top-20 h-48 w-48 rounded-full border-25 border-white/10" />

              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-xl text-white transition hover:bg-white/25"
              >
                ×
              </button>
            </div>

            <div className="px-6 pb-7">
              <div className="-mt-12 flex h-20 w-20 items-center justify-center rounded-3xl border-4 border-white bg-linear-to-br from-violet-500 to-indigo-600 text-2xl font-bold text-white shadow-lg">
                {getInitials(getName(selectedUser))}
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                Member profile
              </p>

              <h2
                id="profile-title"
                className="mt-2 wrap-break-word text-2xl font-bold text-slate-900"
              >
                {getName(selectedUser)}
              </h2>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email address
                </p>
                <p className="mt-2 break-all text-sm font-medium text-slate-700">
                  {selectedUser.email || "No email provided"}
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Close
                </button>

                <button
                  type="button"
                  disabled={!selectedUser.email}
                  onClick={() => copyEmail(selectedUser.email)}
                  className="flex-1 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:opacity-40"
                >
                  {copiedEmail === selectedUser.email && selectedUser.email
                    ? "Copied!"
                    : "Copy email"}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

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
