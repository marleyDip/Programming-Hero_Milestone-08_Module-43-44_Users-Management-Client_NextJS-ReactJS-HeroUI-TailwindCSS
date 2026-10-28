"use client";

import { useEffect, useState } from "react";

export default function Copyright({
  brand = "DeepPeople",
  tagline = "Built for better connections.",
  className = "",
}) {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <p className={`text-center text-xs leading-6 text-slate-500 ${className}`}>
      © {year} {brand}. {tagline}
    </p>
  );
}
