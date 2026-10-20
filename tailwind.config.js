/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-oswald)', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#26a422', // Green matching Muebles y Espacio logo
          dark: '#1d8535',
          darker: '#156b29',
          light: '#f2fbf4',
        },
        decordark: {
          DEFAULT: '#272727',
          header: '#212121',
          box: '#1f1f1f',
          footer: '#1a1a1a',
          footerbottom: '#111111',
        },
        decorgray: {
          light: '#f4f4f4',
          neutral: '#f7f7f7',
          border: '#e0e0e0',
          borderlight: '#e9e9e9',
          text: '#777777',
          muted: '#9e9e9e',
        },
      },
    },
  },
  plugins: [],
};
