/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      height: {
        "full-screen": ["100vh", "100dvh"],
      },
      minHeight: {
        "full-screen": ["100vh", "100dvh"],
      },
    },
  },
  plugins: [],
}

