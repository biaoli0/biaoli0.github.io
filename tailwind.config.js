/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
