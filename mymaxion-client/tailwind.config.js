/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ocean: {
            50: "#e0f7ff",
            100: "#b3ebff",
            200: "#80ddff",
            300: "#4dcfff",
            400: "#1ac1ff",
            500: "#0099cc",
            600: "#0077b6",
            700: "#023e8a",
            800: "#012a5e",
            900: "#001a3b",
          },
        },
        
        secondary: {
          50: '#fffdf9',
          100: '#fef8f0',
          500: '#f5d9c1',
          700: '#d4a574',
        },
        beach: {
          50: '#fffff9',
          100: '#fffcf0',
          300: '#fbe4d6',
          500: '#f4a584',
          600: '#f08968',
          700: '#d97548',
        },
        ocean: {
          50: '#f0f9fc',
          100: '#e0f2f7',
          500: '#5bbfd4',
          700: '#1a9db5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
