/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "accent-primary": "var(--color-brand-green-50)",
        "accent-secondary": "var(--color-brand-earth-yellow)",
        "surface-primary": "var(--color-brand-earth-yellow)",
        "surface-primary-dark": "var(--color-neutral-grey-100)",
        "surface-secondary": "var(--color-brand-green-100)",
        "surface-secondary-dark": "var(--color-brand-green-200)",
        "text-brand": "var(--color-brand-earth-yellow)",
        "text-brand-green": "var(--color-brand-green-100)",
        "text-dark": "var(--color-neutral-grey-50)",
        "text-primary": "var(--color-neutral-white)",
      },

      fontFamily: {
        "garant-regular": ["GarantRegular", "sans-serif"],
        "garant-light": ["GarantLight", "sans-serif"],
        "garant-medium": ["GarantMedium", "sans-serif"],
        "kantata": ["KantataAksara", "sans-serif"],
      },

      fontSize: {
        // "heading-sm": ["16px", { lineHeight: "132%" }],
        // "heading-base": ["24px", { lineHeight: "132%" }],
        // "heading-lg": ["32px", { lineHeight: "132%" }],
        // "heading-xl": ["36px", { lineHeight: "132%" }],
        // "heading-2xl": ["40px", { lineHeight: "132%" }],
        // "heading-3xl": ["44px", { lineHeight: "132%" }],
      },
    },
  },
  plugins: [],
};
