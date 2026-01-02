export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0E1117",
        surface: "#161B22",
        accent: "#F59E0B",
        textPrimary: "#E5E7EB",
        textMuted: "#9CA3AF",

        /* Light mode colors */
        lightBg: "#F8FAFC",
        lightSurface: "#FFFFFF",
        lightText: "#0F172A",
        lightMuted: "#475569",
      },
    },
  },
  plugins: [],
};
