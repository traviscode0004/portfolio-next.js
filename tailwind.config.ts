import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#1A1A1A", 
      },gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
