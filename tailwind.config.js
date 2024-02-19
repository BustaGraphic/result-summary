/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "degreee":"linear-gradient(0deg, rgba(28,56,187,0) 0%, rgba(37,0,178,1) 100%)",
          "degree": "linear-gradient(0deg, rgba(28,56,187,1) 0%, rgba(117,81,255,1) 100%)"
      },
      colors: {
        'Red': 'hsl(0, 100%, 67%)',
        'Orange': 'hsl(39, 100%, 56%)',
        'Green': 'hsl(166, 100%, 37%)',
        'Cobalt': 'hsl(234, 85%, 45%)',
        'purpura': 'hsl(252, 100%, 67%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        'white': 'hsl(0, 0%, 100%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
      boxShadow: {
        '3xl': '25px 25px 40px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
