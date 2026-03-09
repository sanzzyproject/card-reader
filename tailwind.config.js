/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#eeffff",
        cardbg: "#16161e",
        keycolor: "#f07178",
      },
    },
  },
  plugins: [],
};
