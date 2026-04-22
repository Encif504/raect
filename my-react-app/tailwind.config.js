/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        marquee:"marquee 10s linear infinite",
    },
    keyframes:{
      marquee:{
        "0%":{
          transform:"translateX(100%)"
        },
        "100%":{
          transform:"translateX(-100%)"
        }
      }
    }
  },
  plugins: [],
}
}
