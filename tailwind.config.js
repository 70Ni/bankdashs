/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bordercolor: "#DFEAF2",
        inputcolor: {
          100: "#718EBF",
          200: "#DFEAF2",
          300: "#F5F7FA",
        },
      },
      spacing: {
        S130: "var(--spacing-150px)",
        S40: "var(--spacing-40px)",
        S28: "var(--spacing-28px)",
        S24: "var(--spacing-24px)",
        S20: "var(--spacing-20px)",
        S16: "var(--padding-16px)",
        S12: "var(--padding-12px)",
        S8: "var(--spacing-8px)",
      },
    },
  },
  plugins: [],
};
