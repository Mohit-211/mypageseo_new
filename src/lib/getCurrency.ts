export const getCurrency = (): "USD" | "CAD" => {
  if (typeof document === "undefined") {
    return "USD";
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("currency="));

  const currency = cookie?.split("=")[1];

  return currency === "CAD" ? "CAD" : "USD";
};
