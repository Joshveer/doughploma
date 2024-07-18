/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(140, 200, 220)",
        secondaryColor: "rgb(140, 200, 220)",
        primaryText: "rgb(255,255,255)",
        secondaryText: "rgb(174, 178, 183)",
        bgDark1: "rgb(31, 32, 35)",
        bgDark2: "rgb(31, 32, 35)",
        bgDark3: "rgb(31, 32, 35)",
        bgDark3Hover: "rgb(31, 32, 35)",
        bgDarkTransparent: "rgb(31, 32, 35)",
        bgDarkTransparentDarker: "rgb(31, 32, 35)",
        bgDarkTransparentLighter: "rgb(31, 32, 35)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)"
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

