/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        zyBg: "#F8FBFF",
        zyPrimary: "#2563EB",
        zySecondary: "#7C3AED",
        zyAccent: "#06B6D4"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(37,99,235,.35)",
        cyan: "0 0 42px rgba(6,182,212,.28)"
      }
    }
  },
  plugins: []
};
