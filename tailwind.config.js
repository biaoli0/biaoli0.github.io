/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // If using src directory
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
