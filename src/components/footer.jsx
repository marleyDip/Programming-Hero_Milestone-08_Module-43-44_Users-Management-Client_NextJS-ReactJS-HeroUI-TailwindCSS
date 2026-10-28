// "use client";

// import { useEffect, useState } from "react";

// export default function Footer() {
//   const [year, setYear] = useState("2026");

//   useEffect(() => {
//     setYear(String(new Date().getFullYear()));
//   }, []);

//   return (
//     <footer className="flex flex-col justify-between gap-2 border-t border-white/10 py-7 text-xs text-slate-400 sm:flex-row">
//       <p>© {year} DeepPeople</p>
//       <p>Built for better connections.</p>
//     </footer>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function Footer({
  brand = "DeepPeople",
  tagline = "Built for better connections.",
  className = "",
}) {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer
      className={`flex flex-col justify-between gap-3 border-t text-xs sm:flex-row ${className}`}
    >
      <p>
        © {year} {brand}
      </p>
      <p>{tagline}</p>
    </footer>
  );
}
