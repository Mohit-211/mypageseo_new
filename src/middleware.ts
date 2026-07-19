import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COUNTRY_NAMES } from "./lib/countries";

export function middleware(req: NextRequest) {
  const countryCode = req.headers.get("cf-ipcountry") || "US";

  const country = COUNTRY_NAMES[countryCode] || "UNITED STATES";

  const currency = countryCode === "CA" ? "CAD" : "USD";

  const res = NextResponse.next();

  res.cookies.set("country", country, {
    path: "/",
  });

  res.cookies.set("currency", currency, {
    path: "/",
  });

  return res;
}
