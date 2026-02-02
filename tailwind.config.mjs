/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#1B4332',
          dark: '#152f24',
          light: '#2d5a47'
        },
        'ember': {
          DEFAULT: '#9B2C2C',
          dark: '#7c2323',
          light: '#b93636'
        },
        'charcoal': '#2D3748',
        'wood': '#B7885C',
        'cream': '#FDF6E3',
        'ash': '#F7F5F3',
        'fire': {
          DEFAULT: '#DD6B20',
          dark: '#c55a1a',
          light: '#ed8936'
        },
        'amber': '#F6AD55'
      },
      fontFamily: {
        'logo': ['"DM Serif Display"', 'Georgia', 'serif'],
        'heading': ['Outfit', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
