import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                custom: {
                    green: {
                        DEFAULT: "#1A3C1E", // Dark Forest Green
                        light: "#2E5C35",
                        dark: "#0F2612",
                    },
                    accent: {
                        DEFAULT: "#4CAF50", // Vibrant Green
                        hover: "#43A047",
                    },
                    beige: {
                        DEFAULT: "#F5F5DC", // Cream/Beige
                        light: "#FAF9F6",
                    },
                },
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
