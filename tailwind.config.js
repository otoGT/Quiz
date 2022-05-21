module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':"url('/Components/hero.jpg')"
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
  ],
}
