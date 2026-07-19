import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COUNTRY_NAMES } from "./lib/countries";

const EUROPE_COUNTRIES = [
  "AL",
  "AD",
  "AT",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GI",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
  "VA",
];

export function middleware(req: NextRequest) {
  const countryCode = req.headers.get("cf-ipcountry") || "IN";

  const country = COUNTRY_NAMES[countryCode] || "INDIA";

  let currency = "USD";

  if (countryCode === "IN") {
    currency = "INR";
  } else if (EUROPE_COUNTRIES.includes(countryCode)) {
    currency = "EUR";
  }

  const res = NextResponse.next();

  res.cookies.set("country", country, {
    path: "/",
  });

  res.cookies.set("currency", currency, {
    path: "/",
  });

  return res;
}
