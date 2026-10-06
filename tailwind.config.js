/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="light"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#14141c',
        border: '#2a2a36',
        text: {
          primary: '#eae5ec',
          muted: '#adacac',
        },
        lavender: '#c2a4ff',
        hotLime: '#c8ff5a',
        dataCyan: '#5ee7ff',
        cyberPink: '#ff6bd6',
      },
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Geist', 'Bricolage Grotesque', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(194, 164, 255, 0.25)',
        limeGlow: '0 0 35px rgba(200, 255, 90, 0.3)',
      }
    },
  },
  plugins: [],
}
