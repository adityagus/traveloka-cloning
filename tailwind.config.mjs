/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/presentational/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "Sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      colors: {
        colors: {
          'primary-blue': '#0194F3',
        },
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      dropShadow: {
        // '4xl': '0px 0px 13px 15px rgba(140,140,144,0.75)',
        '4xl': [
            '0 35px 35px  15px rgba(0, 0, 0, 0.25)',
            '0 45px 65px 15px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};
