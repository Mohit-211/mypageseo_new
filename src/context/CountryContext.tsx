"use client";

import { getCountry } from "@/lib/getCountry";
import { createContext, useContext } from "react";

const CountryContext = createContext<string | null>(null); // 1. no silent "INDIA" default

export function CountryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const country = getCountry();

  return (
    <CountryContext.Provider value={country}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const country = useContext(CountryContext);
  if (country === null) {
    // 2. fail loudly if used outside the provider, instead of silently returning wrong data
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return country;
}