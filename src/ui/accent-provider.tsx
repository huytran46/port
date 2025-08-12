"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { cn } from "@/src/utils/cn";

export type Accent = "purple" | "blue" | "teal" | "orange";

type AccentContextValue = {
  accent: Accent;
  setAccent: (accent: Accent) => void;
};

const AccentContext = createContext<AccentContextValue | null>(null);

export function useAccent(): AccentContextValue {
  const ctx = useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within AccentProvider");
  return ctx;
}

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<Accent>("purple");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      localStorage.getItem("accent")) as Accent | null;
    if (stored) setAccentState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-accent", accent);
      localStorage.setItem("accent", accent);
    }
  }, [accent]);

  const value = useMemo<AccentContextValue>(
    () => ({ accent, setAccent: setAccentState }),
    [accent]
  );

  return (
    <AccentContext.Provider value={value}>{children}</AccentContext.Provider>
  );
}

export function AccentSwitcher({ className }: { className?: string }) {
  const { accent, setAccent } = useAccent();
  const options: Accent[] = ["purple", "blue", "teal", "orange"];

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur px-2 py-1",
        className
      )}
    >
      {options.map((opt) => (
        <button
          key={opt}
          aria-label={`Switch to ${opt}`}
          onClick={() => setAccent(opt)}
          className={cn(
            "h-6 w-6 rounded-full border",
            opt === "purple" && "bg-[#7c3aed]",
            opt === "blue" && "bg-[#2563eb]",
            opt === "teal" && "bg-[#0ea5a8]",
            opt === "orange" && "bg-[#ea580c]",
            accent === opt
              ? "ring-2 ring-foreground"
              : "opacity-80 hover:opacity-100"
          )}
        />
      ))}
    </div>
  );
}
