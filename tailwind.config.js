/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Container'ni markazga joylash
        screens: {
          xl: "1220px", // XL ekranlar uchun 1340px o'rnatamiz
        },
      },
    },
  },
  plugins: [],
}
