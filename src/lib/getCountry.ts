export const getCountry = (): string => {
  if (typeof document === "undefined") {
    return "INDIA";
  }

  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith("country="));

  return cookie
    ? decodeURIComponent(cookie.split("=")[1])
    : "INDIA";
};