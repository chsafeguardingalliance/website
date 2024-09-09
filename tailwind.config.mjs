/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['proxima-nova', 'system-ui', 'sans-serif'],
      },
    },
  },

  daisyui: {
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      {
        chsafeguarding: {
          
"primary": "#067B7F",
          
"primary-content": "#cdd8e3",
          
"secondary": "#0E5079",
          
"secondary-content": "#0a0806",
          
"accent": "#50CB9F",
          
"accent-content": "#130500",
          
"neutral": "#0e1528",
          
"neutral-content": "#c8cad0",
          
"base-100": "#ffffff",
          
"base-200": "#c0dede",
          
"base-300": "#a4bebe",
          
"base-content": "#111616",
          
"info": "#00ace5",
          
"info-content": "#000b12",
          
"success": "#00b269",
          
"success-content": "#000c04",
          
"warning": "#cf2b00",
          
"warning-content": "#fcd9d0",
          
"error": "#ff6f78",
          
"error-content": "#160405",
          },
        },
    ],
  },

  plugins: [require('daisyui')],
};
